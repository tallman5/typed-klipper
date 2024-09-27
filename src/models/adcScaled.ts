import { ConfigurableComponent } from "../transformations/configurableComponent";

export class AdcScaled extends ConfigurableComponent {
  constructor(
    configKey: string,
    public vref_pin: string,
    public vssa_pin: string,
    public smooth_time?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        vref_pin: this.vref_pin,
        vssa_pin: this.vssa_pin,
        smooth_time: this.smooth_time,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `vref_pin: ${this.vref_pin}
`;
    configStr += `vssa_pin: ${this.vssa_pin}
`;
    if (this.smooth_time) configStr += `smooth_time: ${this.smooth_time}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): AdcScaled {
    return new AdcScaled(
      configKey,
      config.vref_pin,
      config.vssa_pin,
      config.smooth_time
    );
  }
}