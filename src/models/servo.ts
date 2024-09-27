import { ConfigurableComponent } from "../transformations/configurableComponent";

export class Servo extends ConfigurableComponent {
  constructor(
    configKey: string,
    public pin: string,
    public maximum_servo_angle?: string,
    public minimum_pulse_width?: string,
    public maximum_pulse_width?: string,
    public initial_angle?: string,
    public initial_pulse_width?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        pin: this.pin,
        maximum_servo_angle: this.maximum_servo_angle,
        minimum_pulse_width: this.minimum_pulse_width,
        maximum_pulse_width: this.maximum_pulse_width,
        initial_angle: this.initial_angle,
        initial_pulse_width: this.initial_pulse_width,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `pin: ${this.pin}
`;
    if (this.maximum_servo_angle) configStr += `maximum_servo_angle: ${this.maximum_servo_angle}
`;
    if (this.minimum_pulse_width) configStr += `minimum_pulse_width: ${this.minimum_pulse_width}
`;
    if (this.maximum_pulse_width) configStr += `maximum_pulse_width: ${this.maximum_pulse_width}
`;
    if (this.initial_angle) configStr += `initial_angle: ${this.initial_angle}
`;
    if (this.initial_pulse_width) configStr += `initial_pulse_width: ${this.initial_pulse_width}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Servo {
    return new Servo(
      configKey,
      config.pin,
      config.maximum_servo_angle,
      config.minimum_pulse_width,
      config.maximum_pulse_width,
      config.initial_angle,
      config.initial_pulse_width
    );
  }
}