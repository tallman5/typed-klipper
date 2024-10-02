import { ConfigurableComponent } from "..";

export class Extruder extends ConfigurableComponent {
  constructor(
    configKey: string,
    public step_pin: string,
    public dir_pin: string,
    public enable_pin: string,
    public microsteps: string,
    public rotation_distance: string,
    public nozzle_diameter: string,
    public filament_diameter: string,
    public heater_pin: string,
    public sensor_type: string,
    public sensor_pin: string,
    public control: string,
    public pid_Kp: string,
    public pid_Ki: string,
    public pid_Kd: string,
    public min_temp: string,
    public max_temp: string,
    public full_steps_per_rotation?: string,
    public gear_ratio?: string,
    public max_extrude_cross_section?: string,
    public instantaneous_corner_velocity?: string,
    public max_extrude_only_distance?: string,
    public max_extrude_only_velocity?: string,
    public max_extrude_only_accel?: string,
    public pressure_advance?: string,
    public pressure_advance_smooth_time?: string,
    public max_power?: string,
    public pullup_resistor?: string,
    public smooth_time?: string,
    public max_delta?: string,
    public pwm_cycle_time?: string,
    public min_extrude_temp?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        step_pin: this.step_pin,
        dir_pin: this.dir_pin,
        enable_pin: this.enable_pin,
        microsteps: this.microsteps,
        rotation_distance: this.rotation_distance,
        nozzle_diameter: this.nozzle_diameter,
        filament_diameter: this.filament_diameter,
        heater_pin: this.heater_pin,
        sensor_type: this.sensor_type,
        sensor_pin: this.sensor_pin,
        control: this.control,
        pid_Kp: this.pid_Kp,
        pid_Ki: this.pid_Ki,
        pid_Kd: this.pid_Kd,
        min_temp: this.min_temp,
        max_temp: this.max_temp,
        full_steps_per_rotation: this.full_steps_per_rotation,
        gear_ratio: this.gear_ratio,
        max_extrude_cross_section: this.max_extrude_cross_section,
        instantaneous_corner_velocity: this.instantaneous_corner_velocity,
        max_extrude_only_distance: this.max_extrude_only_distance,
        max_extrude_only_velocity: this.max_extrude_only_velocity,
        max_extrude_only_accel: this.max_extrude_only_accel,
        pressure_advance: this.pressure_advance,
        pressure_advance_smooth_time: this.pressure_advance_smooth_time,
        max_power: this.max_power,
        pullup_resistor: this.pullup_resistor,
        smooth_time: this.smooth_time,
        max_delta: this.max_delta,
        pwm_cycle_time: this.pwm_cycle_time,
        min_extrude_temp: this.min_extrude_temp,
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
    configStr += `microsteps: ${this.microsteps}
`;
    configStr += `rotation_distance: ${this.rotation_distance}
`;
    configStr += `nozzle_diameter: ${this.nozzle_diameter}
`;
    configStr += `filament_diameter: ${this.filament_diameter}
`;
    configStr += `heater_pin: ${this.heater_pin}
`;
    configStr += `sensor_type: ${this.sensor_type}
`;
    configStr += `sensor_pin: ${this.sensor_pin}
`;
    configStr += `control: ${this.control}
`;
    configStr += `pid_Kp: ${this.pid_Kp}
`;
    configStr += `pid_Ki: ${this.pid_Ki}
`;
    configStr += `pid_Kd: ${this.pid_Kd}
`;
    configStr += `min_temp: ${this.min_temp}
`;
    configStr += `max_temp: ${this.max_temp}
`;
    if (this.full_steps_per_rotation) configStr += `full_steps_per_rotation: ${this.full_steps_per_rotation}\n`;
    if (this.gear_ratio) configStr += `gear_ratio: ${this.gear_ratio}\n`;
    if (this.max_extrude_cross_section) configStr += `max_extrude_cross_section: ${this.max_extrude_cross_section}\n`;
    if (this.instantaneous_corner_velocity) configStr += `instantaneous_corner_velocity: ${this.instantaneous_corner_velocity}\n`;
    if (this.max_extrude_only_distance) configStr += `max_extrude_only_distance: ${this.max_extrude_only_distance}\n`;
    if (this.max_extrude_only_velocity) configStr += `max_extrude_only_velocity: ${this.max_extrude_only_velocity}\n`;
    if (this.max_extrude_only_accel) configStr += `max_extrude_only_accel: ${this.max_extrude_only_accel}\n`;
    if (this.pressure_advance) configStr += `pressure_advance: ${this.pressure_advance}\n`;
    if (this.pressure_advance_smooth_time) configStr += `pressure_advance_smooth_time: ${this.pressure_advance_smooth_time}\n`;
    if (this.max_power) configStr += `max_power: ${this.max_power}\n`;
    if (this.pullup_resistor) configStr += `pullup_resistor: ${this.pullup_resistor}\n`;
    if (this.smooth_time) configStr += `smooth_time: ${this.smooth_time}\n`;
    if (this.max_delta) configStr += `max_delta: ${this.max_delta}\n`;
    if (this.pwm_cycle_time) configStr += `pwm_cycle_time: ${this.pwm_cycle_time}\n`;
    if (this.min_extrude_temp) configStr += `min_extrude_temp: ${this.min_extrude_temp}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): Extruder {
    return new Extruder(
      configKey,
      config.step_pin,
      config.dir_pin,
      config.enable_pin,
      config.microsteps,
      config.rotation_distance,
      config.nozzle_diameter,
      config.filament_diameter,
      config.heater_pin,
      config.sensor_type,
      config.sensor_pin,
      config.control,
      config.pid_Kp,
      config.pid_Ki,
      config.pid_Kd,
      config.min_temp,
      config.max_temp,
      config.full_steps_per_rotation,
      config.gear_ratio,
      config.max_extrude_cross_section,
      config.instantaneous_corner_velocity,
      config.max_extrude_only_distance,
      config.max_extrude_only_velocity,
      config.max_extrude_only_accel,
      config.pressure_advance,
      config.pressure_advance_smooth_time,
      config.max_power,
      config.pullup_resistor,
      config.smooth_time,
      config.max_delta,
      config.pwm_cycle_time,
      config.min_extrude_temp
    );
  }

  static fromJson(configKey: string, config: any): Extruder {
    return new Extruder(
      configKey,
      config.step_pin,
      config.dir_pin,
      config.enable_pin,
      config.microsteps,
      config.rotation_distance,
      config.nozzle_diameter,
      config.filament_diameter,
      config.heater_pin,
      config.sensor_type,
      config.sensor_pin,
      config.control,
      config.pid_Kp,
      config.pid_Ki,
      config.pid_Kd,
      config.min_temp,
      config.max_temp,
      config.full_steps_per_rotation,
      config.gear_ratio,
      config.max_extrude_cross_section,
      config.instantaneous_corner_velocity,
      config.max_extrude_only_distance,
      config.max_extrude_only_velocity,
      config.max_extrude_only_accel,
      config.pressure_advance,
      config.pressure_advance_smooth_time,
      config.max_power,
      config.pullup_resistor,
      config.smooth_time,
      config.max_delta,
      config.pwm_cycle_time,
      config.min_extrude_temp
    );
  }
}