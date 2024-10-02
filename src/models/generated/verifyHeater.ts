import { ConfigurableComponent } from "..";

export class VerifyHeater extends ConfigurableComponent {
  constructor(
    configKey: string,
    public max_error?: string,
    public check_gain_time?: string,
    public hysteresis?: string,
    public heating_gain?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        max_error: this.max_error,
        check_gain_time: this.check_gain_time,
        hysteresis: this.hysteresis,
        heating_gain: this.heating_gain,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    if (this.max_error) configStr += `max_error: ${this.max_error}\n`;
    if (this.check_gain_time) configStr += `check_gain_time: ${this.check_gain_time}\n`;
    if (this.hysteresis) configStr += `hysteresis: ${this.hysteresis}\n`;
    if (this.heating_gain) configStr += `heating_gain: ${this.heating_gain}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): VerifyHeater {
    return new VerifyHeater(
      configKey,
      config.max_error,
      config.check_gain_time,
      config.hysteresis,
      config.heating_gain
    );
  }

  static fromJson(configKey: string, config: any): VerifyHeater {
    return new VerifyHeater(
      configKey,
      config.max_error,
      config.check_gain_time,
      config.hysteresis,
      config.heating_gain
    );
  }
}