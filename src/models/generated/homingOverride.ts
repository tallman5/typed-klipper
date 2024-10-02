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
    let configStr = `[${this.configKey}]\n`;
    configStr += `gcode: ${this.gcode}
`;
    if (this.axes) configStr += `axes: ${this.axes}\n`;
    if (this.set_position_x) configStr += `set_position_x: ${this.set_position_x}\n`;
    if (this.set_position_y) configStr += `set_position_y: ${this.set_position_y}\n`;
    if (this.set_position_z) configStr += `set_position_z: ${this.set_position_z}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): HomingOverride {
    return new HomingOverride(
      configKey,
      config.gcode,
      config.axes,
      config.set_position_x,
      config.set_position_y,
      config.set_position_z
    );
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