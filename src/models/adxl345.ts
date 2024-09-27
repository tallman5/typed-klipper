import { ConfigurableComponent } from "../transformations/configurableComponent";

export class Adxl345 extends ConfigurableComponent {
  constructor(
    configKey: string,
    public cs_pin: string,
    public spi_speed?: string,
    public spi_bus?: string,
    public spi_software_sclk_pin?: string,
    public spi_software_mosi_pin?: string,
    public spi_software_miso_pin?: string,
    public axes_map?: string,
    public rate?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        cs_pin: this.cs_pin,
        spi_speed: this.spi_speed,
        spi_bus: this.spi_bus,
        spi_software_sclk_pin: this.spi_software_sclk_pin,
        spi_software_mosi_pin: this.spi_software_mosi_pin,
        spi_software_miso_pin: this.spi_software_miso_pin,
        axes_map: this.axes_map,
        rate: this.rate,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `cs_pin: ${this.cs_pin}
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
    if (this.axes_map) configStr += `axes_map: ${this.axes_map}
`;
    if (this.rate) configStr += `rate: ${this.rate}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Adxl345 {
    return new Adxl345(
      configKey,
      config.cs_pin,
      config.spi_speed,
      config.spi_bus,
      config.spi_software_sclk_pin,
      config.spi_software_mosi_pin,
      config.spi_software_miso_pin,
      config.axes_map,
      config.rate
    );
  }
}