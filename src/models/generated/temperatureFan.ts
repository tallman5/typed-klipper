import { ConfigurableComponent } from "..";

export class TemperatureFan extends ConfigurableComponent {
  constructor(
    configKey: string,
    public pin?: string,
    public max_power?: string,
    public shutdown_speed?: string,
    public cycle_time?: string,
    public hardware_pwm?: string,
    public kick_start_time?: string,
    public off_below?: string,
    public tachometer_pin?: string,
    public tachometer_ppr?: string,
    public tachometer_poll_interval?: string,
    public enable_pin?: string,
    public sensor_type?: string,
    public sensor_pin?: string,
    public control?: string,
    public max_delta?: string,
    public min_temp?: string,
    public max_temp?: string,
    public pid_Kp?: string,
    public pid_Ki?: string,
    public pid_Kd?: string,
    public pid_deriv_time?: string,
    public target_temp?: string,
    public max_speed?: string,
    public min_speed?: string,
    public gcode_id?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        pin: this.pin,
        max_power: this.max_power,
        shutdown_speed: this.shutdown_speed,
        cycle_time: this.cycle_time,
        hardware_pwm: this.hardware_pwm,
        kick_start_time: this.kick_start_time,
        off_below: this.off_below,
        tachometer_pin: this.tachometer_pin,
        tachometer_ppr: this.tachometer_ppr,
        tachometer_poll_interval: this.tachometer_poll_interval,
        enable_pin: this.enable_pin,
        sensor_type: this.sensor_type,
        sensor_pin: this.sensor_pin,
        control: this.control,
        max_delta: this.max_delta,
        min_temp: this.min_temp,
        max_temp: this.max_temp,
        pid_Kp: this.pid_Kp,
        pid_Ki: this.pid_Ki,
        pid_Kd: this.pid_Kd,
        pid_deriv_time: this.pid_deriv_time,
        target_temp: this.target_temp,
        max_speed: this.max_speed,
        min_speed: this.min_speed,
        gcode_id: this.gcode_id,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    if (this.pin) configStr += `pin: ${this.pin}
`;
    if (this.max_power) configStr += `max_power: ${this.max_power}
`;
    if (this.shutdown_speed) configStr += `shutdown_speed: ${this.shutdown_speed}
`;
    if (this.cycle_time) configStr += `cycle_time: ${this.cycle_time}
`;
    if (this.hardware_pwm) configStr += `hardware_pwm: ${this.hardware_pwm}
`;
    if (this.kick_start_time) configStr += `kick_start_time: ${this.kick_start_time}
`;
    if (this.off_below) configStr += `off_below: ${this.off_below}
`;
    if (this.tachometer_pin) configStr += `tachometer_pin: ${this.tachometer_pin}
`;
    if (this.tachometer_ppr) configStr += `tachometer_ppr: ${this.tachometer_ppr}
`;
    if (this.tachometer_poll_interval) configStr += `tachometer_poll_interval: ${this.tachometer_poll_interval}
`;
    if (this.enable_pin) configStr += `enable_pin: ${this.enable_pin}
`;
    if (this.sensor_type) configStr += `sensor_type: ${this.sensor_type}
`;
    if (this.sensor_pin) configStr += `sensor_pin: ${this.sensor_pin}
`;
    if (this.control) configStr += `control: ${this.control}
`;
    if (this.max_delta) configStr += `max_delta: ${this.max_delta}
`;
    if (this.min_temp) configStr += `min_temp: ${this.min_temp}
`;
    if (this.max_temp) configStr += `max_temp: ${this.max_temp}
`;
    if (this.pid_Kp) configStr += `pid_Kp: ${this.pid_Kp}
`;
    if (this.pid_Ki) configStr += `pid_Ki: ${this.pid_Ki}
`;
    if (this.pid_Kd) configStr += `pid_Kd: ${this.pid_Kd}
`;
    if (this.pid_deriv_time) configStr += `pid_deriv_time: ${this.pid_deriv_time}
`;
    if (this.target_temp) configStr += `target_temp: ${this.target_temp}
`;
    if (this.max_speed) configStr += `max_speed: ${this.max_speed}
`;
    if (this.min_speed) configStr += `min_speed: ${this.min_speed}
`;
    if (this.gcode_id) configStr += `gcode_id: ${this.gcode_id}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): TemperatureFan {
    return new TemperatureFan(
      configKey,
      config.pin,
      config.max_power,
      config.shutdown_speed,
      config.cycle_time,
      config.hardware_pwm,
      config.kick_start_time,
      config.off_below,
      config.tachometer_pin,
      config.tachometer_ppr,
      config.tachometer_poll_interval,
      config.enable_pin,
      config.sensor_type,
      config.sensor_pin,
      config.control,
      config.max_delta,
      config.min_temp,
      config.max_temp,
      config.pid_Kp,
      config.pid_Ki,
      config.pid_Kd,
      config.pid_deriv_time,
      config.target_temp,
      config.max_speed,
      config.min_speed,
      config.gcode_id
    );
  }
}