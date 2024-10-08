import { ConfigurableComponent } from "..";

export class Mcp4451 extends ConfigurableComponent {
  constructor(
    configKey: string,
    public i2c_address: string,
    public i2c_mcu?: string,
    public i2c_bus?: string,
    public i2c_software_scl_pin?: string,
    public i2c_software_sda_pin?: string,
    public i2c_speed?: string,
    public wiper_0?: string,
    public wiper_1?: string,
    public wiper_2?: string,
    public wiper_3?: string,
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
        wiper_0: this.wiper_0,
        wiper_1: this.wiper_1,
        wiper_2: this.wiper_2,
        wiper_3: this.wiper_3,
        scale: this.scale,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `i2c_address: ${this.i2c_address}
`;
    if (this.i2c_mcu) configStr += `i2c_mcu: ${this.i2c_mcu}\n`;
    if (this.i2c_bus) configStr += `i2c_bus: ${this.i2c_bus}\n`;
    if (this.i2c_software_scl_pin) configStr += `i2c_software_scl_pin: ${this.i2c_software_scl_pin}\n`;
    if (this.i2c_software_sda_pin) configStr += `i2c_software_sda_pin: ${this.i2c_software_sda_pin}\n`;
    if (this.i2c_speed) configStr += `i2c_speed: ${this.i2c_speed}\n`;
    if (this.wiper_0) configStr += `wiper_0: ${this.wiper_0}\n`;
    if (this.wiper_1) configStr += `wiper_1: ${this.wiper_1}\n`;
    if (this.wiper_2) configStr += `wiper_2: ${this.wiper_2}\n`;
    if (this.wiper_3) configStr += `wiper_3: ${this.wiper_3}\n`;
    if (this.scale) configStr += `scale: ${this.scale}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): Mcp4451 {
    return new Mcp4451(
      configKey,
      config.i2c_address,
      config.i2c_mcu,
      config.i2c_bus,
      config.i2c_software_scl_pin,
      config.i2c_software_sda_pin,
      config.i2c_speed,
      config.wiper_0,
      config.wiper_1,
      config.wiper_2,
      config.wiper_3,
      config.scale
    );
  }

  static fromJson(configKey: string, config: any): Mcp4451 {
    return new Mcp4451(
      configKey,
      config.i2c_address,
      config.i2c_mcu,
      config.i2c_bus,
      config.i2c_software_scl_pin,
      config.i2c_software_sda_pin,
      config.i2c_speed,
      config.wiper_0,
      config.wiper_1,
      config.wiper_2,
      config.wiper_3,
      config.scale
    );
  }
}