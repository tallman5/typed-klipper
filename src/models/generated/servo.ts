import { ConfigurableComponent } from "..";

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
    let configStr = `[${this.configKey}]\n`;
    configStr += `pin: ${this.pin}
`;
    if (this.maximum_servo_angle) configStr += `maximum_servo_angle: ${this.maximum_servo_angle}\n`;
    if (this.minimum_pulse_width) configStr += `minimum_pulse_width: ${this.minimum_pulse_width}\n`;
    if (this.maximum_pulse_width) configStr += `maximum_pulse_width: ${this.maximum_pulse_width}\n`;
    if (this.initial_angle) configStr += `initial_angle: ${this.initial_angle}\n`;
    if (this.initial_pulse_width) configStr += `initial_pulse_width: ${this.initial_pulse_width}\n`;
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