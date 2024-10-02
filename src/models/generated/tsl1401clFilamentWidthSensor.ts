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
    let configStr = `[${this.configKey}]\n`;
    if (this.pin) configStr += `pin: ${this.pin}\n`;
    if (this.default_nominal_filament_diameter) configStr += `default_nominal_filament_diameter: ${this.default_nominal_filament_diameter}\n`;
    if (this.max_difference) configStr += `max_difference: ${this.max_difference}\n`;
    if (this.measurement_delay) configStr += `measurement_delay: ${this.measurement_delay}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): Tsl1401clFilamentWidthSensor {
    return new Tsl1401clFilamentWidthSensor(
      configKey,
      config.pin,
      config.default_nominal_filament_diameter,
      config.max_difference,
      config.measurement_delay
    );
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