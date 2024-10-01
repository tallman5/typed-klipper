import { ConfigurableComponent } from "..";

export class Stepper extends ConfigurableComponent {
  constructor(
    configKey: string,
    public step_pin: string,
    public dir_pin: string,
    public enable_pin: string,
    public rotation_distance: string,
    public microsteps: string,
    public endstop_pin: string,
    public position_endstop: string,
    public position_max: string,
    public full_steps_per_rotation?: string,
    public gear_ratio?: string,
    public step_pulse_duration?: string,
    public position_min?: string,
    public homing_speed?: string,
    public homing_retract_dist?: string,
    public homing_retract_speed?: string,
    public second_homing_speed?: string,
    public homing_positive_dir?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        step_pin: this.step_pin,
        dir_pin: this.dir_pin,
        enable_pin: this.enable_pin,
        rotation_distance: this.rotation_distance,
        microsteps: this.microsteps,
        endstop_pin: this.endstop_pin,
        position_endstop: this.position_endstop,
        position_max: this.position_max,
        full_steps_per_rotation: this.full_steps_per_rotation,
        gear_ratio: this.gear_ratio,
        step_pulse_duration: this.step_pulse_duration,
        position_min: this.position_min,
        homing_speed: this.homing_speed,
        homing_retract_dist: this.homing_retract_dist,
        homing_retract_speed: this.homing_retract_speed,
        second_homing_speed: this.second_homing_speed,
        homing_positive_dir: this.homing_positive_dir,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `step_pin: ${this.step_pin}
`;
    configStr += `dir_pin: ${this.dir_pin}
`;
    configStr += `enable_pin: ${this.enable_pin}
`;
    configStr += `rotation_distance: ${this.rotation_distance}
`;
    configStr += `microsteps: ${this.microsteps}
`;
    configStr += `endstop_pin: ${this.endstop_pin}
`;
    configStr += `position_endstop: ${this.position_endstop}
`;
    configStr += `position_max: ${this.position_max}
`;
    if (this.full_steps_per_rotation) configStr += `full_steps_per_rotation: ${this.full_steps_per_rotation}\n`;
    if (this.gear_ratio) configStr += `gear_ratio: ${this.gear_ratio}\n`;
    if (this.step_pulse_duration) configStr += `step_pulse_duration: ${this.step_pulse_duration}\n`;
    if (this.position_min) configStr += `position_min: ${this.position_min}\n`;
    if (this.homing_speed) configStr += `homing_speed: ${this.homing_speed}\n`;
    if (this.homing_retract_dist) configStr += `homing_retract_dist: ${this.homing_retract_dist}\n`;
    if (this.homing_retract_speed) configStr += `homing_retract_speed: ${this.homing_retract_speed}\n`;
    if (this.second_homing_speed) configStr += `second_homing_speed: ${this.second_homing_speed}\n`;
    if (this.homing_positive_dir) configStr += `homing_positive_dir: ${this.homing_positive_dir}\n`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Stepper {
    return new Stepper(
      configKey,
      config.step_pin,
      config.dir_pin,
      config.enable_pin,
      config.rotation_distance,
      config.microsteps,
      config.endstop_pin,
      config.position_endstop,
      config.position_max,
      config.full_steps_per_rotation,
      config.gear_ratio,
      config.step_pulse_duration,
      config.position_min,
      config.homing_speed,
      config.homing_retract_dist,
      config.homing_retract_speed,
      config.second_homing_speed,
      config.homing_positive_dir
    );
  }
}