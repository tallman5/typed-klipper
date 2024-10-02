import { ConfigurableComponent } from "..";

export class DisplayGlyph extends ConfigurableComponent {
  constructor(
    configKey: string,
    public data?: string,
    public hd44780_data?: string,
    public hd44780_slot?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        data: this.data,
        hd44780_data: this.hd44780_data,
        hd44780_slot: this.hd44780_slot,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    if (this.data) configStr += `data: ${this.data}\n`;
    if (this.hd44780_data) configStr += `hd44780_data: ${this.hd44780_data}\n`;
    if (this.hd44780_slot) configStr += `hd44780_slot: ${this.hd44780_slot}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): DisplayGlyph {
    return new DisplayGlyph(
      configKey,
      config.data,
      config.hd44780_data,
      config.hd44780_slot
    );
  }

  static fromJson(configKey: string, config: any): DisplayGlyph {
    return new DisplayGlyph(
      configKey,
      config.data,
      config.hd44780_data,
      config.hd44780_slot
    );
  }
}