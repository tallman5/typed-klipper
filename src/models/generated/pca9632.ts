import { ConfigurableComponent } from "..";

export class Pca9632 extends ConfigurableComponent {
  constructor(
    configKey: string,
    public i2c_address?: string,
    public i2c_mcu?: string,
    public i2c_bus?: string,
    public i2c_software_scl_pin?: string,
    public i2c_software_sda_pin?: string,
    public i2c_speed?: string,
    public scl_pin?: string,
    public sda_pin?: string,
    public color_order?: string,
    public initial_RED?: string,
    public initial_GREEN?: string,
    public initial_BLUE?: string,
    public initial_WHITE?: string
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
        scl_pin: this.scl_pin,
        sda_pin: this.sda_pin,
        color_order: this.color_order,
        initial_RED: this.initial_RED,
        initial_GREEN: this.initial_GREEN,
        initial_BLUE: this.initial_BLUE,
        initial_WHITE: this.initial_WHITE,
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
    if (this.scl_pin) configStr += `scl_pin: ${this.scl_pin}
`;
    if (this.sda_pin) configStr += `sda_pin: ${this.sda_pin}
`;
    if (this.color_order) configStr += `color_order: ${this.color_order}
`;
    if (this.initial_RED) configStr += `initial_RED: ${this.initial_RED}
`;
    if (this.initial_GREEN) configStr += `initial_GREEN: ${this.initial_GREEN}
`;
    if (this.initial_BLUE) configStr += `initial_BLUE: ${this.initial_BLUE}
`;
    if (this.initial_WHITE) configStr += `initial_WHITE: ${this.initial_WHITE}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Pca9632 {
    return new Pca9632(
      configKey,
      config.i2c_address,
      config.i2c_mcu,
      config.i2c_bus,
      config.i2c_software_scl_pin,
      config.i2c_software_sda_pin,
      config.i2c_speed,
      config.scl_pin,
      config.sda_pin,
      config.color_order,
      config.initial_RED,
      config.initial_GREEN,
      config.initial_BLUE,
      config.initial_WHITE
    );
  }
}