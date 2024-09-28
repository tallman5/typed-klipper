import { ConfigurableComponent, IConfigurableComponent } from "./configurableComponent";
import { klipperFromJson } from "../transformations/klipperFromJson";

export class KlipperConfig extends ConfigurableComponent {
    constructor(
        public knownComponents : IConfigurableComponent[] = [],
        public unknownComponents : IConfigurableComponent[] = []
    ) {
        super('klipper-config');
    }

    toJSON() {
        throw new Error("Method not implemented.");
    }

    toCfg(): string {
        let configStr = ``;
        this.knownComponents.forEach(component => {
            configStr += component.toCfg();
            configStr += `\n\n`;
        });
        return configStr;
    }

    static fromJson(config: any): KlipperConfig {
        return klipperFromJson(config);
    }
}
