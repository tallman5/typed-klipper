import { ConfigurableComponent } from "..";

export class BoardPins extends ConfigurableComponent {
  constructor(
    configKey: string,
    public aliases: string,
    public mcu?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        aliases: this.aliases,
        mcu: this.mcu,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `aliases: ${this.aliases}
`;
    if (this.mcu) configStr += `mcu: ${this.mcu}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): BoardPins {
    return new BoardPins(
      configKey,
      config.aliases,
      config.mcu
    );
  }

  static fromJson(configKey: string, config: any): BoardPins {
    return new BoardPins(
      configKey,
      config.aliases,
      config.mcu
    );
  }
}