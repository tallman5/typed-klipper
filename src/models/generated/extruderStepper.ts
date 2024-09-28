import { ConfigurableComponent } from "..";

export class ExtruderStepper extends ConfigurableComponent {
  constructor(
    configKey: string,
    public extruder: string,
    public step_pin?: string,
    public dir_pin?: string,
    public enable_pin?: string,
    public microsteps?: string,
    public rotation_distance?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        extruder: this.extruder,
        step_pin: this.step_pin,
        dir_pin: this.dir_pin,
        enable_pin: this.enable_pin,
        microsteps: this.microsteps,
        rotation_distance: this.rotation_distance,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `extruder: ${this.extruder}
`;
    if (this.step_pin) configStr += `step_pin: ${this.step_pin}
`;
    if (this.dir_pin) configStr += `dir_pin: ${this.dir_pin}
`;
    if (this.enable_pin) configStr += `enable_pin: ${this.enable_pin}
`;
    if (this.microsteps) configStr += `microsteps: ${this.microsteps}
`;
    if (this.rotation_distance) configStr += `rotation_distance: ${this.rotation_distance}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): ExtruderStepper {
    return new ExtruderStepper(
      configKey,
      config.extruder,
      config.step_pin,
      config.dir_pin,
      config.enable_pin,
      config.microsteps,
      config.rotation_distance
    );
  }
}