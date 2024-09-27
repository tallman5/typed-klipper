import { ConfigurableComponent } from "../transformations/configurableComponent";

export class SafeZHome extends ConfigurableComponent {
  constructor(
    configKey: string,
    public home_xy_position: string,
    public speed?: string,
    public z_hop?: string,
    public z_hop_speed?: string,
    public move_to_previous?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        home_xy_position: this.home_xy_position,
        speed: this.speed,
        z_hop: this.z_hop,
        z_hop_speed: this.z_hop_speed,
        move_to_previous: this.move_to_previous,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `home_xy_position: ${this.home_xy_position}
`;
    if (this.speed) configStr += `speed: ${this.speed}
`;
    if (this.z_hop) configStr += `z_hop: ${this.z_hop}
`;
    if (this.z_hop_speed) configStr += `z_hop_speed: ${this.z_hop_speed}
`;
    if (this.move_to_previous) configStr += `move_to_previous: ${this.move_to_previous}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): SafeZHome {
    return new SafeZHome(
      configKey,
      config.home_xy_position,
      config.speed,
      config.z_hop,
      config.z_hop_speed,
      config.move_to_previous
    );
  }
}