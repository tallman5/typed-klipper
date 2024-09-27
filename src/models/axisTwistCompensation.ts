import { ConfigurableComponent } from "../transformations/configurableComponent";

export class AxisTwistCompensation extends ConfigurableComponent {
  constructor(
    configKey: string,
    public calibrate_start_x: string,
    public calibrate_end_x: string,
    public calibrate_y: string,
    public speed?: string,
    public horizontal_move_z?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        calibrate_start_x: this.calibrate_start_x,
        calibrate_end_x: this.calibrate_end_x,
        calibrate_y: this.calibrate_y,
        speed: this.speed,
        horizontal_move_z: this.horizontal_move_z,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `calibrate_start_x: ${this.calibrate_start_x}
`;
    configStr += `calibrate_end_x: ${this.calibrate_end_x}
`;
    configStr += `calibrate_y: ${this.calibrate_y}
`;
    if (this.speed) configStr += `speed: ${this.speed}
`;
    if (this.horizontal_move_z) configStr += `horizontal_move_z: ${this.horizontal_move_z}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): AxisTwistCompensation {
    return new AxisTwistCompensation(
      configKey,
      config.calibrate_start_x,
      config.calibrate_end_x,
      config.calibrate_y,
      config.speed,
      config.horizontal_move_z
    );
  }
}