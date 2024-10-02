import { ConfigurableComponent } from "..";

export class BedTilt extends ConfigurableComponent {
  constructor(
    configKey: string,
    public x_adjust?: string,
    public y_adjust?: string,
    public z_adjust?: string,
    public points?: string,
    public speed?: string,
    public horizontal_move_z?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        x_adjust: this.x_adjust,
        y_adjust: this.y_adjust,
        z_adjust: this.z_adjust,
        points: this.points,
        speed: this.speed,
        horizontal_move_z: this.horizontal_move_z,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    if (this.x_adjust) configStr += `x_adjust: ${this.x_adjust}\n`;
    if (this.y_adjust) configStr += `y_adjust: ${this.y_adjust}\n`;
    if (this.z_adjust) configStr += `z_adjust: ${this.z_adjust}\n`;
    if (this.points) configStr += `points: ${this.points}\n`;
    if (this.speed) configStr += `speed: ${this.speed}\n`;
    if (this.horizontal_move_z) configStr += `horizontal_move_z: ${this.horizontal_move_z}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): BedTilt {
    return new BedTilt(
      configKey,
      config.x_adjust,
      config.y_adjust,
      config.z_adjust,
      config.points,
      config.speed,
      config.horizontal_move_z
    );
  }

  static fromJson(configKey: string, config: any): BedTilt {
    return new BedTilt(
      configKey,
      config.x_adjust,
      config.y_adjust,
      config.z_adjust,
      config.points,
      config.speed,
      config.horizontal_move_z
    );
  }
}