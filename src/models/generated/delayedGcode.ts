import { ConfigurableComponent } from "..";

export class DelayedGcode extends ConfigurableComponent {
  constructor(
    configKey: string,
    public gcode: string,
    public initial_duration?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        gcode: this.gcode,
        initial_duration: this.initial_duration,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `gcode: ${this.gcode}
`;
    if (this.initial_duration) configStr += `initial_duration: ${this.initial_duration}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): DelayedGcode {
    return new DelayedGcode(
      configKey,
      config.gcode,
      config.initial_duration
    );
  }

  static fromJson(configKey: string, config: any): DelayedGcode {
    return new DelayedGcode(
      configKey,
      config.gcode,
      config.initial_duration
    );
  }
}