import { ConfigurableComponent } from "..";

export class HeaterGeneric extends ConfigurableComponent {
  constructor(
    configKey: string,
    public gcode_id?: string,
    public heater_pin?: string,
    public max_power?: string,
    public sensor_type?: string,
    public sensor_pin?: string,
    public smooth_time?: string,
    public control?: string,
    public pid_Kp?: string,
    public pid_Ki?: string,
    public pid_Kd?: string,
    public pwm_cycle_time?: string,
    public min_temp?: string,
    public max_temp?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        gcode_id: this.gcode_id,
        heater_pin: this.heater_pin,
        max_power: this.max_power,
        sensor_type: this.sensor_type,
        sensor_pin: this.sensor_pin,
        smooth_time: this.smooth_time,
        control: this.control,
        pid_Kp: this.pid_Kp,
        pid_Ki: this.pid_Ki,
        pid_Kd: this.pid_Kd,
        pwm_cycle_time: this.pwm_cycle_time,
        min_temp: this.min_temp,
        max_temp: this.max_temp,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    if (this.gcode_id) configStr += `gcode_id: ${this.gcode_id}\n`;
    if (this.heater_pin) configStr += `heater_pin: ${this.heater_pin}\n`;
    if (this.max_power) configStr += `max_power: ${this.max_power}\n`;
    if (this.sensor_type) configStr += `sensor_type: ${this.sensor_type}\n`;
    if (this.sensor_pin) configStr += `sensor_pin: ${this.sensor_pin}\n`;
    if (this.smooth_time) configStr += `smooth_time: ${this.smooth_time}\n`;
    if (this.control) configStr += `control: ${this.control}\n`;
    if (this.pid_Kp) configStr += `pid_Kp: ${this.pid_Kp}\n`;
    if (this.pid_Ki) configStr += `pid_Ki: ${this.pid_Ki}\n`;
    if (this.pid_Kd) configStr += `pid_Kd: ${this.pid_Kd}\n`;
    if (this.pwm_cycle_time) configStr += `pwm_cycle_time: ${this.pwm_cycle_time}\n`;
    if (this.min_temp) configStr += `min_temp: ${this.min_temp}\n`;
    if (this.max_temp) configStr += `max_temp: ${this.max_temp}\n`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): HeaterGeneric {
    return new HeaterGeneric(
      configKey,
      config.gcode_id,
      config.heater_pin,
      config.max_power,
      config.sensor_type,
      config.sensor_pin,
      config.smooth_time,
      config.control,
      config.pid_Kp,
      config.pid_Ki,
      config.pid_Kd,
      config.pwm_cycle_time,
      config.min_temp,
      config.max_temp
    );
  }
}