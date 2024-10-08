import { ConfigurableComponent } from "..";

export class DualCarriage extends ConfigurableComponent {
  constructor(
    configKey: string,
    public axis: string,
    public safe_distance?: string,
    public step_pin?: string,
    public dir_pin?: string,
    public enable_pin?: string,
    public microsteps?: string,
    public rotation_distance?: string,
    public endstop_pin?: string,
    public position_endstop?: string,
    public position_min?: string,
    public position_max?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        axis: this.axis,
        safe_distance: this.safe_distance,
        step_pin: this.step_pin,
        dir_pin: this.dir_pin,
        enable_pin: this.enable_pin,
        microsteps: this.microsteps,
        rotation_distance: this.rotation_distance,
        endstop_pin: this.endstop_pin,
        position_endstop: this.position_endstop,
        position_min: this.position_min,
        position_max: this.position_max,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `axis: ${this.axis}
`;
    if (this.safe_distance) configStr += `safe_distance: ${this.safe_distance}\n`;
    if (this.step_pin) configStr += `step_pin: ${this.step_pin}\n`;
    if (this.dir_pin) configStr += `dir_pin: ${this.dir_pin}\n`;
    if (this.enable_pin) configStr += `enable_pin: ${this.enable_pin}\n`;
    if (this.microsteps) configStr += `microsteps: ${this.microsteps}\n`;
    if (this.rotation_distance) configStr += `rotation_distance: ${this.rotation_distance}\n`;
    if (this.endstop_pin) configStr += `endstop_pin: ${this.endstop_pin}\n`;
    if (this.position_endstop) configStr += `position_endstop: ${this.position_endstop}\n`;
    if (this.position_min) configStr += `position_min: ${this.position_min}\n`;
    if (this.position_max) configStr += `position_max: ${this.position_max}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): DualCarriage {
    return new DualCarriage(
      configKey,
      config.axis,
      config.safe_distance,
      config.step_pin,
      config.dir_pin,
      config.enable_pin,
      config.microsteps,
      config.rotation_distance,
      config.endstop_pin,
      config.position_endstop,
      config.position_min,
      config.position_max
    );
  }

  static fromJson(configKey: string, config: any): DualCarriage {
    return new DualCarriage(
      configKey,
      config.axis,
      config.safe_distance,
      config.step_pin,
      config.dir_pin,
      config.enable_pin,
      config.microsteps,
      config.rotation_distance,
      config.endstop_pin,
      config.position_endstop,
      config.position_min,
      config.position_max
    );
  }
}