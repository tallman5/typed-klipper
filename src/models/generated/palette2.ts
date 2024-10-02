import { ConfigurableComponent } from "..";

export class Palette2 extends ConfigurableComponent {
  constructor(
    configKey: string,
    public serial: string,
    public baud?: string,
    public feedrate_splice?: string,
    public feedrate_normal?: string,
    public auto_load_speed?: string,
    public auto_cancel_variation?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        serial: this.serial,
        baud: this.baud,
        feedrate_splice: this.feedrate_splice,
        feedrate_normal: this.feedrate_normal,
        auto_load_speed: this.auto_load_speed,
        auto_cancel_variation: this.auto_cancel_variation,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `serial: ${this.serial}
`;
    if (this.baud) configStr += `baud: ${this.baud}\n`;
    if (this.feedrate_splice) configStr += `feedrate_splice: ${this.feedrate_splice}\n`;
    if (this.feedrate_normal) configStr += `feedrate_normal: ${this.feedrate_normal}\n`;
    if (this.auto_load_speed) configStr += `auto_load_speed: ${this.auto_load_speed}\n`;
    if (this.auto_cancel_variation) configStr += `auto_cancel_variation: ${this.auto_cancel_variation}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): Palette2 {
    return new Palette2(
      configKey,
      config.serial,
      config.baud,
      config.feedrate_splice,
      config.feedrate_normal,
      config.auto_load_speed,
      config.auto_cancel_variation
    );
  }

  static fromJson(configKey: string, config: any): Palette2 {
    return new Palette2(
      configKey,
      config.serial,
      config.baud,
      config.feedrate_splice,
      config.feedrate_normal,
      config.auto_load_speed,
      config.auto_cancel_variation
    );
  }
}