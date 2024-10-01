import { ConfigurableComponent } from "..";

export class Fan extends ConfigurableComponent {
  constructor(
    configKey: string,
    public pin: string,
    public max_power?: string,
    public shutdown_speed?: string,
    public cycle_time?: string,
    public hardware_pwm?: string,
    public kick_start_time?: string,
    public off_below?: string,
    public tachometer_pin?: string,
    public tachometer_ppr?: string,
    public tachometer_poll_interval?: string,
    public enable_pin?: string
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
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `pin: ${this.pin}
`;
    if (this.max_power) configStr += `max_power: ${this.max_power}\n`;
    if (this.shutdown_speed) configStr += `shutdown_speed: ${this.shutdown_speed}\n`;
    if (this.cycle_time) configStr += `cycle_time: ${this.cycle_time}\n`;
    if (this.hardware_pwm) configStr += `hardware_pwm: ${this.hardware_pwm}\n`;
    if (this.kick_start_time) configStr += `kick_start_time: ${this.kick_start_time}\n`;
    if (this.off_below) configStr += `off_below: ${this.off_below}\n`;
    if (this.tachometer_pin) configStr += `tachometer_pin: ${this.tachometer_pin}\n`;
    if (this.tachometer_ppr) configStr += `tachometer_ppr: ${this.tachometer_ppr}\n`;
    if (this.tachometer_poll_interval) configStr += `tachometer_poll_interval: ${this.tachometer_poll_interval}\n`;
    if (this.enable_pin) configStr += `enable_pin: ${this.enable_pin}\n`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Fan {
    return new Fan(
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
      config.enable_pin
    );
  }
}