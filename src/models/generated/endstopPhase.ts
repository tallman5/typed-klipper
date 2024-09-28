import { ConfigurableComponent } from "..";

export class EndstopPhase extends ConfigurableComponent {
  constructor(
    configKey: string,
    public endstop_accuracy?: string,
    public trigger_phase?: string,
    public endstop_align_zero?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        endstop_accuracy: this.endstop_accuracy,
        trigger_phase: this.trigger_phase,
        endstop_align_zero: this.endstop_align_zero,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    if (this.endstop_accuracy) configStr += `endstop_accuracy: ${this.endstop_accuracy}
`;
    if (this.trigger_phase) configStr += `trigger_phase: ${this.trigger_phase}
`;
    if (this.endstop_align_zero) configStr += `endstop_align_zero: ${this.endstop_align_zero}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): EndstopPhase {
    return new EndstopPhase(
      configKey,
      config.endstop_accuracy,
      config.trigger_phase,
      config.endstop_align_zero
    );
  }
}