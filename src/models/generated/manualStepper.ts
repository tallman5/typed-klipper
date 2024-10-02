import { ConfigurableComponent } from "..";

export class ManualStepper extends ConfigurableComponent {
  constructor(
    configKey: string,
    public step_pin?: string,
    public dir_pin?: string,
    public enable_pin?: string,
    public microsteps?: string,
    public rotation_distance?: string,
    public velocity?: string,
    public accel?: string,
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
        velocity: this.velocity,
        accel: this.accel,
        endstop_pin: this.endstop_pin,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    if (this.step_pin) configStr += `step_pin: ${this.step_pin}\n`;
    if (this.dir_pin) configStr += `dir_pin: ${this.dir_pin}\n`;
    if (this.enable_pin) configStr += `enable_pin: ${this.enable_pin}\n`;
    if (this.microsteps) configStr += `microsteps: ${this.microsteps}\n`;
    if (this.rotation_distance) configStr += `rotation_distance: ${this.rotation_distance}\n`;
    if (this.velocity) configStr += `velocity: ${this.velocity}\n`;
    if (this.accel) configStr += `accel: ${this.accel}\n`;
    if (this.endstop_pin) configStr += `endstop_pin: ${this.endstop_pin}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): ManualStepper {
    return new ManualStepper(
      configKey,
      config.step_pin,
      config.dir_pin,
      config.enable_pin,
      config.microsteps,
      config.rotation_distance,
      config.velocity,
      config.accel,
      config.endstop_pin
    );
  }

  static fromJson(configKey: string, config: any): ManualStepper {
    return new ManualStepper(
      configKey,
      config.step_pin,
      config.dir_pin,
      config.enable_pin,
      config.microsteps,
      config.rotation_distance,
      config.velocity,
      config.accel,
      config.endstop_pin
    );
  }
}