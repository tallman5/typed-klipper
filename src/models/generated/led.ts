import { ConfigurableComponent } from "..";

export class Led extends ConfigurableComponent {
  constructor(
    configKey: string,
    public red_pin?: string,
    public green_pin?: string,
    public blue_pin?: string,
    public white_pin?: string,
    public cycle_time?: string,
    public hardware_pwm?: string,
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
        red_pin: this.red_pin,
        green_pin: this.green_pin,
        blue_pin: this.blue_pin,
        white_pin: this.white_pin,
        cycle_time: this.cycle_time,
        hardware_pwm: this.hardware_pwm,
        initial_RED: this.initial_RED,
        initial_GREEN: this.initial_GREEN,
        initial_BLUE: this.initial_BLUE,
        initial_WHITE: this.initial_WHITE,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    if (this.red_pin) configStr += `red_pin: ${this.red_pin}\n`;
    if (this.green_pin) configStr += `green_pin: ${this.green_pin}\n`;
    if (this.blue_pin) configStr += `blue_pin: ${this.blue_pin}\n`;
    if (this.white_pin) configStr += `white_pin: ${this.white_pin}\n`;
    if (this.cycle_time) configStr += `cycle_time: ${this.cycle_time}\n`;
    if (this.hardware_pwm) configStr += `hardware_pwm: ${this.hardware_pwm}\n`;
    if (this.initial_RED) configStr += `initial_RED: ${this.initial_RED}\n`;
    if (this.initial_GREEN) configStr += `initial_GREEN: ${this.initial_GREEN}\n`;
    if (this.initial_BLUE) configStr += `initial_BLUE: ${this.initial_BLUE}\n`;
    if (this.initial_WHITE) configStr += `initial_WHITE: ${this.initial_WHITE}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): Led {
    return new Led(
      configKey,
      config.red_pin,
      config.green_pin,
      config.blue_pin,
      config.white_pin,
      config.cycle_time,
      config.hardware_pwm,
      config.initial_RED,
      config.initial_GREEN,
      config.initial_BLUE,
      config.initial_WHITE
    );
  }

  static fromJson(configKey: string, config: any): Led {
    return new Led(
      configKey,
      config.red_pin,
      config.green_pin,
      config.blue_pin,
      config.white_pin,
      config.cycle_time,
      config.hardware_pwm,
      config.initial_RED,
      config.initial_GREEN,
      config.initial_BLUE,
      config.initial_WHITE
    );
  }
}