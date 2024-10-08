import { ConfigurableComponent } from "..";

export class FirmwareRetraction extends ConfigurableComponent {
  constructor(
    configKey: string,
    public retract_length?: string,
    public retract_speed?: string,
    public unretract_extra_length?: string,
    public unretract_speed?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        retract_length: this.retract_length,
        retract_speed: this.retract_speed,
        unretract_extra_length: this.unretract_extra_length,
        unretract_speed: this.unretract_speed,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    if (this.retract_length) configStr += `retract_length: ${this.retract_length}\n`;
    if (this.retract_speed) configStr += `retract_speed: ${this.retract_speed}\n`;
    if (this.unretract_extra_length) configStr += `unretract_extra_length: ${this.unretract_extra_length}\n`;
    if (this.unretract_speed) configStr += `unretract_speed: ${this.unretract_speed}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): FirmwareRetraction {
    return new FirmwareRetraction(
      configKey,
      config.retract_length,
      config.retract_speed,
      config.unretract_extra_length,
      config.unretract_speed
    );
  }

  static fromJson(configKey: string, config: any): FirmwareRetraction {
    return new FirmwareRetraction(
      configKey,
      config.retract_length,
      config.retract_speed,
      config.unretract_extra_length,
      config.unretract_speed
    );
  }
}