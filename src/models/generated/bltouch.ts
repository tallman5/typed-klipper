import { ConfigurableComponent } from "..";

export class Bltouch extends ConfigurableComponent {
  constructor(
    configKey: string,
    public sensor_pin: string,
    public control_pin: string,
    public pin_move_time?: string,
    public stow_on_each_sample?: string,
    public probe_with_touch_mode?: string,
    public pin_up_reports_not_triggered?: string,
    public pin_up_touch_mode_reports_triggered?: string,
    public set_output_mode?: string,
    public x_offset?: string,
    public y_offset?: string,
    public z_offset?: string,
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
        sensor_pin: this.sensor_pin,
        control_pin: this.control_pin,
        pin_move_time: this.pin_move_time,
        stow_on_each_sample: this.stow_on_each_sample,
        probe_with_touch_mode: this.probe_with_touch_mode,
        pin_up_reports_not_triggered: this.pin_up_reports_not_triggered,
        pin_up_touch_mode_reports_triggered: this.pin_up_touch_mode_reports_triggered,
        set_output_mode: this.set_output_mode,
        x_offset: this.x_offset,
        y_offset: this.y_offset,
        z_offset: this.z_offset,
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
    let configStr = `[${this.configKey}]\n`;
    configStr += `sensor_pin: ${this.sensor_pin}
`;
    configStr += `control_pin: ${this.control_pin}
`;
    if (this.pin_move_time) configStr += `pin_move_time: ${this.pin_move_time}\n`;
    if (this.stow_on_each_sample) configStr += `stow_on_each_sample: ${this.stow_on_each_sample}\n`;
    if (this.probe_with_touch_mode) configStr += `probe_with_touch_mode: ${this.probe_with_touch_mode}\n`;
    if (this.pin_up_reports_not_triggered) configStr += `pin_up_reports_not_triggered: ${this.pin_up_reports_not_triggered}\n`;
    if (this.pin_up_touch_mode_reports_triggered) configStr += `pin_up_touch_mode_reports_triggered: ${this.pin_up_touch_mode_reports_triggered}\n`;
    if (this.set_output_mode) configStr += `set_output_mode: ${this.set_output_mode}\n`;
    if (this.x_offset) configStr += `x_offset: ${this.x_offset}\n`;
    if (this.y_offset) configStr += `y_offset: ${this.y_offset}\n`;
    if (this.z_offset) configStr += `z_offset: ${this.z_offset}\n`;
    if (this.speed) configStr += `speed: ${this.speed}\n`;
    if (this.lift_speed) configStr += `lift_speed: ${this.lift_speed}\n`;
    if (this.samples) configStr += `samples: ${this.samples}\n`;
    if (this.sample_retract_dist) configStr += `sample_retract_dist: ${this.sample_retract_dist}\n`;
    if (this.samples_result) configStr += `samples_result: ${this.samples_result}\n`;
    if (this.samples_tolerance) configStr += `samples_tolerance: ${this.samples_tolerance}\n`;
    if (this.samples_tolerance_retries) configStr += `samples_tolerance_retries: ${this.samples_tolerance_retries}\n`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Bltouch {
    return new Bltouch(
      configKey,
      config.sensor_pin,
      config.control_pin,
      config.pin_move_time,
      config.stow_on_each_sample,
      config.probe_with_touch_mode,
      config.pin_up_reports_not_triggered,
      config.pin_up_touch_mode_reports_triggered,
      config.set_output_mode,
      config.x_offset,
      config.y_offset,
      config.z_offset,
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