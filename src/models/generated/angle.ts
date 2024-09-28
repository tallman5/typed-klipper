import { ConfigurableComponent } from "..";

export class Angle extends ConfigurableComponent {
  constructor(
    configKey: string,
    public sensor_type: string,
    public cs_pin: string,
    public sample_period?: string,
    public stepper?: string,
    public spi_speed?: string,
    public spi_bus?: string,
    public spi_software_sclk_pin?: string,
    public spi_software_mosi_pin?: string,
    public spi_software_miso_pin?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        sensor_type: this.sensor_type,
        cs_pin: this.cs_pin,
        sample_period: this.sample_period,
        stepper: this.stepper,
        spi_speed: this.spi_speed,
        spi_bus: this.spi_bus,
        spi_software_sclk_pin: this.spi_software_sclk_pin,
        spi_software_mosi_pin: this.spi_software_mosi_pin,
        spi_software_miso_pin: this.spi_software_miso_pin,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `sensor_type: ${this.sensor_type}
`;
    configStr += `cs_pin: ${this.cs_pin}
`;
    if (this.sample_period) configStr += `sample_period: ${this.sample_period}
`;
    if (this.stepper) configStr += `stepper: ${this.stepper}
`;
    if (this.spi_speed) configStr += `spi_speed: ${this.spi_speed}
`;
    if (this.spi_bus) configStr += `spi_bus: ${this.spi_bus}
`;
    if (this.spi_software_sclk_pin) configStr += `spi_software_sclk_pin: ${this.spi_software_sclk_pin}
`;
    if (this.spi_software_mosi_pin) configStr += `spi_software_mosi_pin: ${this.spi_software_mosi_pin}
`;
    if (this.spi_software_miso_pin) configStr += `spi_software_miso_pin: ${this.spi_software_miso_pin}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Angle {
    return new Angle(
      configKey,
      config.sensor_type,
      config.cs_pin,
      config.sample_period,
      config.stepper,
      config.spi_speed,
      config.spi_bus,
      config.spi_software_sclk_pin,
      config.spi_software_mosi_pin,
      config.spi_software_miso_pin
    );
  }
}