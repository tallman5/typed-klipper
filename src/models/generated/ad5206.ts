import { ConfigurableComponent } from "..";

export class Ad5206 extends ConfigurableComponent {
  constructor(
    configKey: string,
    public enable_pin: string,
    public spi_speed?: string,
    public spi_bus?: string,
    public spi_software_sclk_pin?: string,
    public spi_software_mosi_pin?: string,
    public spi_software_miso_pin?: string,
    public channel_1?: string,
    public channel_2?: string,
    public channel_3?: string,
    public channel_4?: string,
    public channel_5?: string,
    public channel_6?: string,
    public scale?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        enable_pin: this.enable_pin,
        spi_speed: this.spi_speed,
        spi_bus: this.spi_bus,
        spi_software_sclk_pin: this.spi_software_sclk_pin,
        spi_software_mosi_pin: this.spi_software_mosi_pin,
        spi_software_miso_pin: this.spi_software_miso_pin,
        channel_1: this.channel_1,
        channel_2: this.channel_2,
        channel_3: this.channel_3,
        channel_4: this.channel_4,
        channel_5: this.channel_5,
        channel_6: this.channel_6,
        scale: this.scale,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `enable_pin: ${this.enable_pin}
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
    if (this.channel_1) configStr += `channel_1: ${this.channel_1}
`;
    if (this.channel_2) configStr += `channel_2: ${this.channel_2}
`;
    if (this.channel_3) configStr += `channel_3: ${this.channel_3}
`;
    if (this.channel_4) configStr += `channel_4: ${this.channel_4}
`;
    if (this.channel_5) configStr += `channel_5: ${this.channel_5}
`;
    if (this.channel_6) configStr += `channel_6: ${this.channel_6}
`;
    if (this.scale) configStr += `scale: ${this.scale}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Ad5206 {
    return new Ad5206(
      configKey,
      config.enable_pin,
      config.spi_speed,
      config.spi_bus,
      config.spi_software_sclk_pin,
      config.spi_software_mosi_pin,
      config.spi_software_miso_pin,
      config.channel_1,
      config.channel_2,
      config.channel_3,
      config.channel_4,
      config.channel_5,
      config.channel_6,
      config.scale
    );
  }
}