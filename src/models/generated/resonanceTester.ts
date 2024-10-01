import { ConfigurableComponent } from "..";

export class ResonanceTester extends ConfigurableComponent {
  constructor(
    configKey: string,
    public probe_points?: string,
    public accel_chip?: string,
    public accel_chip_x?: string,
    public accel_chip_y?: string,
    public max_smoothing?: string,
    public min_freq?: string,
    public max_freq?: string,
    public accel_per_hz?: string,
    public hz_per_sec?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        probe_points: this.probe_points,
        accel_chip: this.accel_chip,
        accel_chip_x: this.accel_chip_x,
        accel_chip_y: this.accel_chip_y,
        max_smoothing: this.max_smoothing,
        min_freq: this.min_freq,
        max_freq: this.max_freq,
        accel_per_hz: this.accel_per_hz,
        hz_per_sec: this.hz_per_sec,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    if (this.probe_points) configStr += `probe_points: ${this.probe_points}\n`;
    if (this.accel_chip) configStr += `accel_chip: ${this.accel_chip}\n`;
    if (this.accel_chip_x) configStr += `accel_chip_x: ${this.accel_chip_x}\n`;
    if (this.accel_chip_y) configStr += `accel_chip_y: ${this.accel_chip_y}\n`;
    if (this.max_smoothing) configStr += `max_smoothing: ${this.max_smoothing}\n`;
    if (this.min_freq) configStr += `min_freq: ${this.min_freq}\n`;
    if (this.max_freq) configStr += `max_freq: ${this.max_freq}\n`;
    if (this.accel_per_hz) configStr += `accel_per_hz: ${this.accel_per_hz}\n`;
    if (this.hz_per_sec) configStr += `hz_per_sec: ${this.hz_per_sec}\n`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): ResonanceTester {
    return new ResonanceTester(
      configKey,
      config.probe_points,
      config.accel_chip,
      config.accel_chip_x,
      config.accel_chip_y,
      config.max_smoothing,
      config.min_freq,
      config.max_freq,
      config.accel_per_hz,
      config.hz_per_sec
    );
  }
}