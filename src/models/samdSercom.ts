import { ConfigurableComponent } from "../transformations/configurableComponent";

export class SamdSercom extends ConfigurableComponent {
  constructor(
    configKey: string,
    public sercom: string,
    public tx_pin: string,
    public clk_pin: string,
    public rx_pin?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        sercom: this.sercom,
        tx_pin: this.tx_pin,
        clk_pin: this.clk_pin,
        rx_pin: this.rx_pin,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `sercom: ${this.sercom}
`;
    configStr += `tx_pin: ${this.tx_pin}
`;
    configStr += `clk_pin: ${this.clk_pin}
`;
    if (this.rx_pin) configStr += `rx_pin: ${this.rx_pin}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): SamdSercom {
    return new SamdSercom(
      configKey,
      config.sercom,
      config.tx_pin,
      config.clk_pin,
      config.rx_pin
    );
  }
}