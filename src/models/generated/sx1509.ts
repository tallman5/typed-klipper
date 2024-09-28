import { ConfigurableComponent } from "..";

export class Sx1509 extends ConfigurableComponent {
  constructor(
    configKey: string,
    public i2c_address: string,
    public i2c_mcu?: string,
    public i2c_bus?: string,
    public i2c_software_scl_pin?: string,
    public i2c_software_sda_pin?: string,
    public i2c_speed?: string
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
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `i2c_address: ${this.i2c_address}
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
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Sx1509 {
    return new Sx1509(
      configKey,
      config.i2c_address,
      config.i2c_mcu,
      config.i2c_bus,
      config.i2c_software_scl_pin,
      config.i2c_software_sda_pin,
      config.i2c_speed
    );
  }
}