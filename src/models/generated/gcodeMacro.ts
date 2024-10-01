import { ConfigurableComponent } from "..";

export class GcodeMacro extends ConfigurableComponent {
  constructor(
    configKey: string,
    public gcode?: string,
    public rename_existing?: string,
    public description?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        gcode: this.gcode,
        rename_existing: this.rename_existing,
        description: this.description,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    if (this.gcode) configStr += `gcode: ${this.gcode}\n`;
    if (this.rename_existing) configStr += `rename_existing: ${this.rename_existing}\n`;
    if (this.description) configStr += `description: ${this.description}\n`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): GcodeMacro {
    return new GcodeMacro(
      configKey,
      config.gcode,
      config.rename_existing,
      config.description
    );
  }
}