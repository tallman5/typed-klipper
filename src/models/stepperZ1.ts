import { ConfigurableComponent } from "../transformations/configurableComponent";

export class StepperZ1 extends ConfigurableComponent {
  constructor(
    configKey: string,
    public step_pin?: string,
    public dir_pin?: string,
    public enable_pin?: string,
    public microsteps?: string,
    public rotation_distance?: string,
    public endstop_pin?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        step_pin: this.step_pin,
        dir_pin: this.dir_pin,
        enable_pin: this.enable_pin,
        microsteps: this.microsteps,
        rotation_distance: this.rotation_distance,
        endstop_pin: this.endstop_pin,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
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
    if (this.endstop_pin) configStr += `endstop_pin: ${this.endstop_pin}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): StepperZ1 {
    return new StepperZ1(
      configKey,
      config.step_pin,
      config.dir_pin,
      config.enable_pin,
      config.microsteps,
      config.rotation_distance,
      config.endstop_pin
    );
  }
}