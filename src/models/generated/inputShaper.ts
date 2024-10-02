import { ConfigurableComponent } from "..";

export class InputShaper extends ConfigurableComponent {
  constructor(
    configKey: string,
    public shaper_freq_x?: string,
    public shaper_freq_y?: string,
    public shaper_type?: string,
    public shaper_type_x?: string,
    public shaper_type_y?: string,
    public damping_ratio_x?: string,
    public damping_ratio_y?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        shaper_freq_x: this.shaper_freq_x,
        shaper_freq_y: this.shaper_freq_y,
        shaper_type: this.shaper_type,
        shaper_type_x: this.shaper_type_x,
        shaper_type_y: this.shaper_type_y,
        damping_ratio_x: this.damping_ratio_x,
        damping_ratio_y: this.damping_ratio_y,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    if (this.shaper_freq_x) configStr += `shaper_freq_x: ${this.shaper_freq_x}\n`;
    if (this.shaper_freq_y) configStr += `shaper_freq_y: ${this.shaper_freq_y}\n`;
    if (this.shaper_type) configStr += `shaper_type: ${this.shaper_type}\n`;
    if (this.shaper_type_x) configStr += `shaper_type_x: ${this.shaper_type_x}\n`;
    if (this.shaper_type_y) configStr += `shaper_type_y: ${this.shaper_type_y}\n`;
    if (this.damping_ratio_x) configStr += `damping_ratio_x: ${this.damping_ratio_x}\n`;
    if (this.damping_ratio_y) configStr += `damping_ratio_y: ${this.damping_ratio_y}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): InputShaper {
    return new InputShaper(
      configKey,
      config.shaper_freq_x,
      config.shaper_freq_y,
      config.shaper_type,
      config.shaper_type_x,
      config.shaper_type_y,
      config.damping_ratio_x,
      config.damping_ratio_y
    );
  }

  static fromJson(configKey: string, config: any): InputShaper {
    return new InputShaper(
      configKey,
      config.shaper_freq_x,
      config.shaper_freq_y,
      config.shaper_type,
      config.shaper_type_x,
      config.shaper_type_y,
      config.damping_ratio_x,
      config.damping_ratio_y
    );
  }
}