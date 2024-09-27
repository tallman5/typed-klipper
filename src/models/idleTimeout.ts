import { ConfigurableComponent } from "../transformations/configurableComponent";

export class IdleTimeout extends ConfigurableComponent {
  constructor(
    configKey: string,
    public gcode?: string,
    public timeout?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        gcode: this.gcode,
        timeout: this.timeout,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    if (this.gcode) configStr += `gcode: ${this.gcode}
`;
    if (this.timeout) configStr += `timeout: ${this.timeout}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): IdleTimeout {
    return new IdleTimeout(
      configKey,
      config.gcode,
      config.timeout
    );
  }
}