import { ConfigurableComponent } from "..";

export class PwmCycleTime extends ConfigurableComponent {
  constructor(
    configKey: string,
    public pin: string,
    public value?: string,
    public shutdown_value?: string,
    public cycle_time?: string,
    public scale?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        pin: this.pin,
        value: this.value,
        shutdown_value: this.shutdown_value,
        cycle_time: this.cycle_time,
        scale: this.scale,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `pin: ${this.pin}
`;
    if (this.value) configStr += `value: ${this.value}
`;
    if (this.shutdown_value) configStr += `shutdown_value: ${this.shutdown_value}
`;
    if (this.cycle_time) configStr += `cycle_time: ${this.cycle_time}
`;
    if (this.scale) configStr += `scale: ${this.scale}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): PwmCycleTime {
    return new PwmCycleTime(
      configKey,
      config.pin,
      config.value,
      config.shutdown_value,
      config.cycle_time,
      config.scale
    );
  }
}