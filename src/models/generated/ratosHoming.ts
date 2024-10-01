import { ConfigurableComponent } from "..";

export class RatosHoming extends ConfigurableComponent {
  constructor(
    configKey: string,
    public axes: string,
    public gcode: string,
    public z_hop: string,
    public z_hop_speed: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        axes: this.axes,
        gcode: this.gcode,
        z_hop: this.z_hop,
        z_hop_speed: this.z_hop_speed,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `axes: ${this.axes}
`;
    configStr += `gcode: ${this.gcode}
`;
    configStr += `z_hop: ${this.z_hop}
`;
    configStr += `z_hop_speed: ${this.z_hop_speed}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): RatosHoming {
    return new RatosHoming(
      configKey,
      config.axes,
      config.gcode,
      config.z_hop,
      config.z_hop_speed
    );
  }
}