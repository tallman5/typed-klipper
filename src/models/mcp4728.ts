import { ConfigurableComponent } from "../transformations/configurableComponent";

export class Mcp4728 extends ConfigurableComponent {
  constructor(
    configKey: string,
    public i2c_address?: string,
    public i2c_mcu?: string,
    public i2c_bus?: string,
    public i2c_software_scl_pin?: string,
    public i2c_software_sda_pin?: string,
    public i2c_speed?: string,
    public channel_a?: string,
    public channel_b?: string,
    public channel_c?: string,
    public channel_d?: string,
    public scale?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        i2c_address: this.i2c_address,
        i2c_mcu: this.i2c_mcu,
        i2c_bus: this.i2c_bus,
        i2c_software_scl_pin: this.i2c_software_scl_pin,
        i2c_software_sda_pin: this.i2c_software_sda_pin,
        i2c_speed: this.i2c_speed,
        channel_a: this.channel_a,
        channel_b: this.channel_b,
        channel_c: this.channel_c,
        channel_d: this.channel_d,
        scale: this.scale,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    if (this.i2c_address) configStr += `i2c_address: ${this.i2c_address}
`;
    if (this.i2c_mcu) configStr += `i2c_mcu: ${this.i2c_mcu}
`;
    if (this.i2c_bus) configStr += `i2c_bus: ${this.i2c_bus}
`;
    if (this.i2c_software_scl_pin) configStr += `i2c_software_scl_pin: ${this.i2c_software_scl_pin}
`;
    if (this.i2c_software_sda_pin) configStr += `i2c_software_sda_pin: ${this.i2c_software_sda_pin}
`;
    if (this.i2c_speed) configStr += `i2c_speed: ${this.i2c_speed}
`;
    if (this.channel_a) configStr += `channel_a: ${this.channel_a}
`;
    if (this.channel_b) configStr += `channel_b: ${this.channel_b}
`;
    if (this.channel_c) configStr += `channel_c: ${this.channel_c}
`;
    if (this.channel_d) configStr += `channel_d: ${this.channel_d}
`;
    if (this.scale) configStr += `scale: ${this.scale}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Mcp4728 {
    return new Mcp4728(
      configKey,
      config.i2c_address,
      config.i2c_mcu,
      config.i2c_bus,
      config.i2c_software_scl_pin,
      config.i2c_software_sda_pin,
      config.i2c_speed,
      config.channel_a,
      config.channel_b,
      config.channel_c,
      config.channel_d,
      config.scale
    );
  }
}