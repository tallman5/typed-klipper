import { ConfigurableComponent } from "..";

export class OutputPin extends ConfigurableComponent {
  constructor(
    configKey: string,
    public pin: string,
    public pwm?: string,
    public value?: string,
    public shutdown_value?: string,
    public cycle_time?: string,
    public hardware_pwm?: string,
    public scale?: string,
    public maximum_mcu_duration?: string,
    public static_value?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        pin: this.pin,
        pwm: this.pwm,
        value: this.value,
        shutdown_value: this.shutdown_value,
        cycle_time: this.cycle_time,
        hardware_pwm: this.hardware_pwm,
        scale: this.scale,
        maximum_mcu_duration: this.maximum_mcu_duration,
        static_value: this.static_value,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `pin: ${this.pin}
`;
    if (this.pwm) configStr += `pwm: ${this.pwm}
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
    if (this.maximum_mcu_duration) configStr += `maximum_mcu_duration: ${this.maximum_mcu_duration}
`;
    if (this.static_value) configStr += `static_value: ${this.static_value}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): OutputPin {
    return new OutputPin(
      configKey,
      config.pin,
      config.pwm,
      config.value,
      config.shutdown_value,
      config.cycle_time,
      config.hardware_pwm,
      config.scale,
      config.maximum_mcu_duration,
      config.static_value
    );
  }
}