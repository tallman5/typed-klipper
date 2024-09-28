import { ConfigurableComponent } from "..";

export class Tsl1401clFilamentWidthSensor extends ConfigurableComponent {
  constructor(
    configKey: string,
    public pin?: string,
    public default_nominal_filament_diameter?: string,
    public max_difference?: string,
    public measurement_delay?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        pin: this.pin,
        default_nominal_filament_diameter: this.default_nominal_filament_diameter,
        max_difference: this.max_difference,
        measurement_delay: this.measurement_delay,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    if (this.pin) configStr += `pin: ${this.pin}
`;
    if (this.default_nominal_filament_diameter) configStr += `default_nominal_filament_diameter: ${this.default_nominal_filament_diameter}
`;
    if (this.max_difference) configStr += `max_difference: ${this.max_difference}
`;
    if (this.measurement_delay) configStr += `measurement_delay: ${this.measurement_delay}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Tsl1401clFilamentWidthSensor {
    return new Tsl1401clFilamentWidthSensor(
      configKey,
      config.pin,
      config.default_nominal_filament_diameter,
      config.max_difference,
      config.measurement_delay
    );
  }
}