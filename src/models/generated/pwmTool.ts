import { ConfigurableComponent } from "..";

export class PwmTool extends ConfigurableComponent {
  constructor(
    configKey: string,
    public pin: string,
    public maximum_mcu_duration?: string,
    public value?: string,
    public shutdown_value?: string,
    public cycle_time?: string,
    public hardware_pwm?: string,
    public scale?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        pin: this.pin,
        maximum_mcu_duration: this.maximum_mcu_duration,
        value: this.value,
        shutdown_value: this.shutdown_value,
        cycle_time: this.cycle_time,
        hardware_pwm: this.hardware_pwm,
        scale: this.scale,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `pin: ${this.pin}
`;
    if (this.maximum_mcu_duration) configStr += `maximum_mcu_duration: ${this.maximum_mcu_duration}\n`;
    if (this.value) configStr += `value: ${this.value}\n`;
    if (this.shutdown_value) configStr += `shutdown_value: ${this.shutdown_value}\n`;
    if (this.cycle_time) configStr += `cycle_time: ${this.cycle_time}\n`;
    if (this.hardware_pwm) configStr += `hardware_pwm: ${this.hardware_pwm}\n`;
    if (this.scale) configStr += `scale: ${this.scale}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): PwmTool {
    return new PwmTool(
      configKey,
      config.pin,
      config.maximum_mcu_duration,
      config.value,
      config.shutdown_value,
      config.cycle_time,
      config.hardware_pwm,
      config.scale
    );
  }

  static fromJson(configKey: string, config: any): PwmTool {
    return new PwmTool(
      configKey,
      config.pin,
      config.maximum_mcu_duration,
      config.value,
      config.shutdown_value,
      config.cycle_time,
      config.hardware_pwm,
      config.scale
    );
  }
}