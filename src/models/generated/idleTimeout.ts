import { ConfigurableComponent } from "..";

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
    let configStr = `[${this.configKey}]\n`;
    if (this.gcode) configStr += `gcode: ${this.gcode}\n`;
    if (this.timeout) configStr += `timeout: ${this.timeout}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): IdleTimeout {
    return new IdleTimeout(
      configKey,
      config.gcode,
      config.timeout
    );
  }

  static fromJson(configKey: string, config: any): IdleTimeout {
    return new IdleTimeout(
      configKey,
      config.gcode,
      config.timeout
    );
  }
}