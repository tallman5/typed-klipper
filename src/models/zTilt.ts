import { ConfigurableComponent } from "../transformations/configurableComponent";

export class ZTilt extends ConfigurableComponent {
  constructor(
    configKey: string,
    public z_positions?: string,
    public points?: string,
    public speed?: string,
    public horizontal_move_z?: string,
    public retries?: string,
    public retry_tolerance?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        z_positions: this.z_positions,
        points: this.points,
        speed: this.speed,
        horizontal_move_z: this.horizontal_move_z,
        retries: this.retries,
        retry_tolerance: this.retry_tolerance,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    if (this.z_positions) configStr += `z_positions: ${this.z_positions}
`;
    if (this.points) configStr += `points: ${this.points}
`;
    if (this.speed) configStr += `speed: ${this.speed}
`;
    if (this.horizontal_move_z) configStr += `horizontal_move_z: ${this.horizontal_move_z}
`;
    if (this.retries) configStr += `retries: ${this.retries}
`;
    if (this.retry_tolerance) configStr += `retry_tolerance: ${this.retry_tolerance}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): ZTilt {
    return new ZTilt(
      configKey,
      config.z_positions,
      config.points,
      config.speed,
      config.horizontal_move_z,
      config.retries,
      config.retry_tolerance
    );
  }
}