import { ConfigurableComponent } from "..";

export class HomingOverride extends ConfigurableComponent {
  constructor(
    configKey: string,
    public gcode: string,
    public axes?: string,
    public set_position_x?: string,
    public set_position_y?: string,
    public set_position_z?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        gcode: this.gcode,
        axes: this.axes,
        set_position_x: this.set_position_x,
        set_position_y: this.set_position_y,
        set_position_z: this.set_position_z,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `gcode: ${this.gcode}
`;
    if (this.axes) configStr += `axes: ${this.axes}
`;
    if (this.set_position_x) configStr += `set_position_x: ${this.set_position_x}
`;
    if (this.set_position_y) configStr += `set_position_y: ${this.set_position_y}
`;
    if (this.set_position_z) configStr += `set_position_z: ${this.set_position_z}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): HomingOverride {
    return new HomingOverride(
      configKey,
      config.gcode,
      config.axes,
      config.set_position_x,
      config.set_position_y,
      config.set_position_z
    );
  }
}