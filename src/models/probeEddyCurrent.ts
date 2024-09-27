import { ConfigurableComponent } from "../transformations/configurableComponent";

export class ProbeEddyCurrent extends ConfigurableComponent {
  constructor(
    configKey: string,
    public sensor_type: string,
    public intb_pin?: string,
    public z_offset?: string,
    public i2c_address?: string,
    public i2c_mcu?: string,
    public i2c_bus?: string,
    public i2c_software_scl_pin?: string,
    public i2c_software_sda_pin?: string,
    public i2c_speed?: string,
    public x_offset?: string,
    public y_offset?: string,
    public speed?: string,
    public lift_speed?: string,
    public samples?: string,
    public sample_retract_dist?: string,
    public samples_result?: string,
    public samples_tolerance?: string,
    public samples_tolerance_retries?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        sensor_type: this.sensor_type,
        intb_pin: this.intb_pin,
        z_offset: this.z_offset,
        i2c_address: this.i2c_address,
        i2c_mcu: this.i2c_mcu,
        i2c_bus: this.i2c_bus,
        i2c_software_scl_pin: this.i2c_software_scl_pin,
        i2c_software_sda_pin: this.i2c_software_sda_pin,
        i2c_speed: this.i2c_speed,
        x_offset: this.x_offset,
        y_offset: this.y_offset,
        speed: this.speed,
        lift_speed: this.lift_speed,
        samples: this.samples,
        sample_retract_dist: this.sample_retract_dist,
        samples_result: this.samples_result,
        samples_tolerance: this.samples_tolerance,
        samples_tolerance_retries: this.samples_tolerance_retries,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `sensor_type: ${this.sensor_type}
`;
    if (this.intb_pin) configStr += `intb_pin: ${this.intb_pin}
`;
    if (this.z_offset) configStr += `z_offset: ${this.z_offset}
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
    if (this.x_offset) configStr += `x_offset: ${this.x_offset}
`;
    if (this.y_offset) configStr += `y_offset: ${this.y_offset}
`;
    if (this.speed) configStr += `speed: ${this.speed}
`;
    if (this.lift_speed) configStr += `lift_speed: ${this.lift_speed}
`;
    if (this.samples) configStr += `samples: ${this.samples}
`;
    if (this.sample_retract_dist) configStr += `sample_retract_dist: ${this.sample_retract_dist}
`;
    if (this.samples_result) configStr += `samples_result: ${this.samples_result}
`;
    if (this.samples_tolerance) configStr += `samples_tolerance: ${this.samples_tolerance}
`;
    if (this.samples_tolerance_retries) configStr += `samples_tolerance_retries: ${this.samples_tolerance_retries}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): ProbeEddyCurrent {
    return new ProbeEddyCurrent(
      configKey,
      config.sensor_type,
      config.intb_pin,
      config.z_offset,
      config.i2c_address,
      config.i2c_mcu,
      config.i2c_bus,
      config.i2c_software_scl_pin,
      config.i2c_software_sda_pin,
      config.i2c_speed,
      config.x_offset,
      config.y_offset,
      config.speed,
      config.lift_speed,
      config.samples,
      config.sample_retract_dist,
      config.samples_result,
      config.samples_tolerance,
      config.samples_tolerance_retries
    );
  }
}