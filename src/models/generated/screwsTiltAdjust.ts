import { ConfigurableComponent } from "..";

export class ScrewsTiltAdjust extends ConfigurableComponent {
  constructor(
    configKey: string,
    public screw1?: string,
    public screw1_name?: string,
    public screw2?: string,
    public screw2_name?: string,
    public speed?: string,
    public horizontal_move_z?: string,
    public screw_thread?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        screw1: this.screw1,
        screw1_name: this.screw1_name,
        screw2: this.screw2,
        screw2_name: this.screw2_name,
        speed: this.speed,
        horizontal_move_z: this.horizontal_move_z,
        screw_thread: this.screw_thread,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    if (this.screw1) configStr += `screw1: ${this.screw1}
`;
    if (this.screw1_name) configStr += `screw1_name: ${this.screw1_name}
`;
    if (this.screw2) configStr += `screw2: ${this.screw2}
`;
    if (this.screw2_name) configStr += `screw2_name: ${this.screw2_name}
`;
    if (this.speed) configStr += `speed: ${this.speed}
`;
    if (this.horizontal_move_z) configStr += `horizontal_move_z: ${this.horizontal_move_z}
`;
    if (this.screw_thread) configStr += `screw_thread: ${this.screw_thread}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): ScrewsTiltAdjust {
    return new ScrewsTiltAdjust(
      configKey,
      config.screw1,
      config.screw1_name,
      config.screw2,
      config.screw2_name,
      config.speed,
      config.horizontal_move_z,
      config.screw_thread
    );
  }
}