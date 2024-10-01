import { ConfigurableComponent } from "..";

export class BedScrews extends ConfigurableComponent {
  constructor(
    configKey: string,
    public screw1?: string,
    public screw1_name?: string,
    public screw1_fine_adjust?: string,
    public screw2?: string,
    public screw2_name?: string,
    public screw2_fine_adjust?: string,
    public horizontal_move_z?: string,
    public probe_height?: string,
    public speed?: string,
    public probe_speed?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        screw1: this.screw1,
        screw1_name: this.screw1_name,
        screw1_fine_adjust: this.screw1_fine_adjust,
        screw2: this.screw2,
        screw2_name: this.screw2_name,
        screw2_fine_adjust: this.screw2_fine_adjust,
        horizontal_move_z: this.horizontal_move_z,
        probe_height: this.probe_height,
        speed: this.speed,
        probe_speed: this.probe_speed,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    if (this.screw1) configStr += `screw1: ${this.screw1}\n`;
    if (this.screw1_name) configStr += `screw1_name: ${this.screw1_name}\n`;
    if (this.screw1_fine_adjust) configStr += `screw1_fine_adjust: ${this.screw1_fine_adjust}\n`;
    if (this.screw2) configStr += `screw2: ${this.screw2}\n`;
    if (this.screw2_name) configStr += `screw2_name: ${this.screw2_name}\n`;
    if (this.screw2_fine_adjust) configStr += `screw2_fine_adjust: ${this.screw2_fine_adjust}\n`;
    if (this.horizontal_move_z) configStr += `horizontal_move_z: ${this.horizontal_move_z}\n`;
    if (this.probe_height) configStr += `probe_height: ${this.probe_height}\n`;
    if (this.speed) configStr += `speed: ${this.speed}\n`;
    if (this.probe_speed) configStr += `probe_speed: ${this.probe_speed}\n`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): BedScrews {
    return new BedScrews(
      configKey,
      config.screw1,
      config.screw1_name,
      config.screw1_fine_adjust,
      config.screw2,
      config.screw2_name,
      config.screw2_fine_adjust,
      config.horizontal_move_z,
      config.probe_height,
      config.speed,
      config.probe_speed
    );
  }
}