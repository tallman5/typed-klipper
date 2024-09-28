import { ConfigurableComponent } from "..";

export class QuadGantryLevel extends ConfigurableComponent {
  constructor(
    configKey: string,
    public gantry_corners?: string,
    public points?: string,
    public speed?: string,
    public horizontal_move_z?: string,
    public max_adjust?: string,
    public retries?: string,
    public retry_tolerance?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        gantry_corners: this.gantry_corners,
        points: this.points,
        speed: this.speed,
        horizontal_move_z: this.horizontal_move_z,
        max_adjust: this.max_adjust,
        retries: this.retries,
        retry_tolerance: this.retry_tolerance,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    if (this.gantry_corners) configStr += `gantry_corners: ${this.gantry_corners}
`;
    if (this.points) configStr += `points: ${this.points}
`;
    if (this.speed) configStr += `speed: ${this.speed}
`;
    if (this.horizontal_move_z) configStr += `horizontal_move_z: ${this.horizontal_move_z}
`;
    if (this.max_adjust) configStr += `max_adjust: ${this.max_adjust}
`;
    if (this.retries) configStr += `retries: ${this.retries}
`;
    if (this.retry_tolerance) configStr += `retry_tolerance: ${this.retry_tolerance}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): QuadGantryLevel {
    return new QuadGantryLevel(
      configKey,
      config.gantry_corners,
      config.points,
      config.speed,
      config.horizontal_move_z,
      config.max_adjust,
      config.retries,
      config.retry_tolerance
    );
  }
}