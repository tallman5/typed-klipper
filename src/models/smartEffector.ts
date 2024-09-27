import { ConfigurableComponent } from "../transformations/configurableComponent";

export class SmartEffector extends ConfigurableComponent {
  constructor(
    configKey: string,
    public pin: string,
    public z_offset: string,
    public control_pin?: string,
    public probe_accel?: string,
    public recovery_time?: string,
    public x_offset?: string,
    public y_offset?: string,
    public speed?: string,
    public samples?: string,
    public sample_retract_dist?: string,
    public samples_result?: string,
    public samples_tolerance?: string,
    public samples_tolerance_retries?: string,
    public activate_gcode?: string,
    public deactivate_gcode?: string,
    public deactivate_on_each_sample?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        pin: this.pin,
        z_offset: this.z_offset,
        control_pin: this.control_pin,
        probe_accel: this.probe_accel,
        recovery_time: this.recovery_time,
        x_offset: this.x_offset,
        y_offset: this.y_offset,
        speed: this.speed,
        samples: this.samples,
        sample_retract_dist: this.sample_retract_dist,
        samples_result: this.samples_result,
        samples_tolerance: this.samples_tolerance,
        samples_tolerance_retries: this.samples_tolerance_retries,
        activate_gcode: this.activate_gcode,
        deactivate_gcode: this.deactivate_gcode,
        deactivate_on_each_sample: this.deactivate_on_each_sample,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `pin: ${this.pin}
`;
    configStr += `z_offset: ${this.z_offset}
`;
    if (this.control_pin) configStr += `control_pin: ${this.control_pin}
`;
    if (this.probe_accel) configStr += `probe_accel: ${this.probe_accel}
`;
    if (this.recovery_time) configStr += `recovery_time: ${this.recovery_time}
`;
    if (this.x_offset) configStr += `x_offset: ${this.x_offset}
`;
    if (this.y_offset) configStr += `y_offset: ${this.y_offset}
`;
    if (this.speed) configStr += `speed: ${this.speed}
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
    if (this.activate_gcode) configStr += `activate_gcode: ${this.activate_gcode}
`;
    if (this.deactivate_gcode) configStr += `deactivate_gcode: ${this.deactivate_gcode}
`;
    if (this.deactivate_on_each_sample) configStr += `deactivate_on_each_sample: ${this.deactivate_on_each_sample}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): SmartEffector {
    return new SmartEffector(
      configKey,
      config.pin,
      config.z_offset,
      config.control_pin,
      config.probe_accel,
      config.recovery_time,
      config.x_offset,
      config.y_offset,
      config.speed,
      config.samples,
      config.sample_retract_dist,
      config.samples_result,
      config.samples_tolerance,
      config.samples_tolerance_retries,
      config.activate_gcode,
      config.deactivate_gcode,
      config.deactivate_on_each_sample
    );
  }
}