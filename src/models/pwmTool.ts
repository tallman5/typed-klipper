import { ConfigurableComponent } from "../transformations/configurableComponent";

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
    let configStr = `[${this.configKey}]
`;
    configStr += `pin: ${this.pin}
`;
    if (this.maximum_mcu_duration) configStr += `maximum_mcu_duration: ${this.maximum_mcu_duration}
`;
    if (this.value) configStr += `value: ${this.value}
`;
    if (this.shutdown_value) configStr += `shutdown_value: ${this.shutdown_value}
`;
    if (this.cycle_time) configStr += `cycle_time: ${this.cycle_time}
`;
    if (this.hardware_pwm) configStr += `hardware_pwm: ${this.hardware_pwm}
`;
    if (this.scale) configStr += `scale: ${this.scale}
`;
    return configStr.trim();
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