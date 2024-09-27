import { ConfigurableComponent } from "../transformations/configurableComponent";

export class AdcTemperature extends ConfigurableComponent {
  constructor(
    configKey: string,
    public temperature1?: string,
    public voltage1?: string,
    public temperature2?: string,
    public voltage2?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        temperature1: this.temperature1,
        voltage1: this.voltage1,
        temperature2: this.temperature2,
        voltage2: this.voltage2,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    if (this.temperature1) configStr += `temperature1: ${this.temperature1}
`;
    if (this.voltage1) configStr += `voltage1: ${this.voltage1}
`;
    if (this.temperature2) configStr += `temperature2: ${this.temperature2}
`;
    if (this.voltage2) configStr += `voltage2: ${this.voltage2}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): AdcTemperature {
    return new AdcTemperature(
      configKey,
      config.temperature1,
      config.voltage1,
      config.temperature2,
      config.voltage2
    );
  }
}