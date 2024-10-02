import { ConfigurableComponent } from "..";

export class Mpu9250 extends ConfigurableComponent {
  constructor(
    configKey: string,
    public i2c_address?: string,
    public i2c_mcu?: string,
    public i2c_bus?: string,
    public i2c_software_scl_pin?: string,
    public i2c_software_sda_pin?: string,
    public i2c_speed?: string,
    public axes_map?: string
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
        axes_map: this.axes_map,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    if (this.i2c_address) configStr += `i2c_address: ${this.i2c_address}\n`;
    if (this.i2c_mcu) configStr += `i2c_mcu: ${this.i2c_mcu}\n`;
    if (this.i2c_bus) configStr += `i2c_bus: ${this.i2c_bus}\n`;
    if (this.i2c_software_scl_pin) configStr += `i2c_software_scl_pin: ${this.i2c_software_scl_pin}\n`;
    if (this.i2c_software_sda_pin) configStr += `i2c_software_sda_pin: ${this.i2c_software_sda_pin}\n`;
    if (this.i2c_speed) configStr += `i2c_speed: ${this.i2c_speed}\n`;
    if (this.axes_map) configStr += `axes_map: ${this.axes_map}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): Mpu9250 {
    return new Mpu9250(
      configKey,
      config.i2c_address,
      config.i2c_mcu,
      config.i2c_bus,
      config.i2c_software_scl_pin,
      config.i2c_software_sda_pin,
      config.i2c_speed,
      config.axes_map
    );
  }

  static fromJson(configKey: string, config: any): Mpu9250 {
    return new Mpu9250(
      configKey,
      config.i2c_address,
      config.i2c_mcu,
      config.i2c_bus,
      config.i2c_software_scl_pin,
      config.i2c_software_sda_pin,
      config.i2c_speed,
      config.axes_map
    );
  }
}