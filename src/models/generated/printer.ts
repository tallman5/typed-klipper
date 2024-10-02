import { ConfigurableComponent } from "..";

export class Printer extends ConfigurableComponent {
  constructor(
    configKey: string,
    public kinematics: string,
    public max_velocity: string,
    public max_accel: string,
    public minimum_cruise_ratio?: string,
    public square_corner_velocity?: string,
    public max_accel_to_decel?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        kinematics: this.kinematics,
        max_velocity: this.max_velocity,
        max_accel: this.max_accel,
        minimum_cruise_ratio: this.minimum_cruise_ratio,
        square_corner_velocity: this.square_corner_velocity,
        max_accel_to_decel: this.max_accel_to_decel,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `kinematics: ${this.kinematics}
`;
    configStr += `max_velocity: ${this.max_velocity}
`;
    configStr += `max_accel: ${this.max_accel}
`;
    if (this.minimum_cruise_ratio) configStr += `minimum_cruise_ratio: ${this.minimum_cruise_ratio}\n`;
    if (this.square_corner_velocity) configStr += `square_corner_velocity: ${this.square_corner_velocity}\n`;
    if (this.max_accel_to_decel) configStr += `max_accel_to_decel: ${this.max_accel_to_decel}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): Printer {
    return new Printer(
      configKey,
      config.kinematics,
      config.max_velocity,
      config.max_accel,
      config.minimum_cruise_ratio,
      config.square_corner_velocity,
      config.max_accel_to_decel
    );
  }

  static fromJson(configKey: string, config: any): Printer {
    return new Printer(
      configKey,
      config.kinematics,
      config.max_velocity,
      config.max_accel,
      config.minimum_cruise_ratio,
      config.square_corner_velocity,
      config.max_accel_to_decel
    );
  }
}