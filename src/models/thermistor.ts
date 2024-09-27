import { ConfigurableComponent } from "../transformations/configurableComponent";

export class Thermistor extends ConfigurableComponent {
  constructor(
    configKey: string,
    public temperature1?: string,
    public resistance1?: string,
    public temperature2?: string,
    public resistance2?: string,
    public temperature3?: string,
    public resistance3?: string,
    public beta?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        temperature1: this.temperature1,
        resistance1: this.resistance1,
        temperature2: this.temperature2,
        resistance2: this.resistance2,
        temperature3: this.temperature3,
        resistance3: this.resistance3,
        beta: this.beta,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    if (this.temperature1) configStr += `temperature1: ${this.temperature1}
`;
    if (this.resistance1) configStr += `resistance1: ${this.resistance1}
`;
    if (this.temperature2) configStr += `temperature2: ${this.temperature2}
`;
    if (this.resistance2) configStr += `resistance2: ${this.resistance2}
`;
    if (this.temperature3) configStr += `temperature3: ${this.temperature3}
`;
    if (this.resistance3) configStr += `resistance3: ${this.resistance3}
`;
    if (this.beta) configStr += `beta: ${this.beta}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Thermistor {
    return new Thermistor(
      configKey,
      config.temperature1,
      config.resistance1,
      config.temperature2,
      config.resistance2,
      config.temperature3,
      config.resistance3,
      config.beta
    );
  }
}