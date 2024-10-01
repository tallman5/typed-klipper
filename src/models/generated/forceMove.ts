import { ConfigurableComponent } from "..";

export class ForceMove extends ConfigurableComponent {
  constructor(
    configKey: string,
    public enable_force_move?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        enable_force_move: this.enable_force_move,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    if (this.enable_force_move) configStr += `enable_force_move: ${this.enable_force_move}\n`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): ForceMove {
    return new ForceMove(
      configKey,
      config.enable_force_move
    );
  }
}