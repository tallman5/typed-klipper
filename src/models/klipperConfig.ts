import * as Models from '../models';
import { ConfigurableComponent, IConfigurableComponent } from "./configurableComponent";

export class KlipperConfig extends ConfigurableComponent {
    private parsedLines: string[] = [];  // To store all lines including comments and empty lines

    constructor(
        public knownComponents: IConfigurableComponent[] = []
    ) {
        super('klipper-config');
    }

    toJSON() {
        throw new Error("Method not implemented.");
    }

    toCfg(): string {
        let configStr = ``;

        // Iterate through the parsed lines and replace component lines with their toCfg() output
        this.parsedLines.forEach(line => {
            // Check if the line is a section header for a known component
            const headerMatch = line.match(/\[([^\]]+)\]/);
            if (headerMatch) {
                const configKey = headerMatch[1];  // Extract the component's config key
                const knownComponent = this.knownComponents.find(c => c.configKey === configKey);

                // If it's a known component, replace the entire section with the generated output
                if (knownComponent) {
                    configStr += knownComponent.toCfg() + '\n\n';
                } else {
                    // If it's not a known component, just include the original line
                    configStr += `${line}\n`;
                }
            } else {
                // Non-header lines (comments, blank lines, or key-value pairs) are included as-is
                configStr += `${line}\n`;
            }
        });

        return configStr.trim();  // Trim any trailing whitespace or newlines
    }

    static fromJSON(config: any): KlipperConfig {
        let knownComponents: IConfigurableComponent[] = [];

        for (const key in config) {
            const newComponent = createComponentFromJson(key, config[key]);
            if (newComponent) {
                knownComponents.push(newComponent);
            }
        }

        return new KlipperConfig(knownComponents);
    }

    static fromCfg(cfgContent: string): KlipperConfig {
        const knownComponents: IConfigurableComponent[] = [];
        const result = new KlipperConfig(knownComponents);

        // Split the cfg file into lines, preserving everything (including empty lines and comments)
        const lines = cfgContent.split('\n');
        let currentSection: string | null = null;
        let configData: { [key: string]: any } = {};

        lines.forEach((line, idx) => {
            const trimmedLine = line.trim();

            // Store every line, including comments, empty lines, and key-value pairs
            result.parsedLines.push(line);

            // Check if the line is a section header (e.g., [extruder])
            const headerMatch = trimmedLine.match(/\[([^\]]+)\]/);
            if (headerMatch) {
                // If we were processing a previous section, finalize it
                if (currentSection) {
                    const component = createComponentFromJson(currentSection, configData);
                    if (component) {
                        knownComponents.push(component);
                    }
                }

                // Start processing a new section
                currentSection = headerMatch[1];  // e.g., "extruder", "mcu my_extra_mcu"
                configData = {};  // Reset config data for the new section
            } else if (currentSection && trimmedLine && !trimmedLine.startsWith('#')) {
                // Parse key-value pairs for the current section
                const [key, value] = trimmedLine.split(':').map(part => part.trim());
                if (key && value !== undefined) {
                    configData[key] = value;
                }
            }
        });

        // Finalize the last section after the loop
        if (currentSection) {
            const component = createComponentFromJson(currentSection, configData);
            if (component) {
                knownComponents.push(component);
            }
        }

        return result;
    }
}

export function createComponentFromJson(key: string, json: any): Models.IConfigurableComponent | null {
    for (const { pattern, handler } of Models.moonrakerToComponentMapper) {
        if (pattern.test(key)) {
            return handler(key, json);
        }
    }
    return null;
}
