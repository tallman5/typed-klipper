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
    let configStr = `[${this.configKey}]
`;
    configStr += `aliases: ${this.aliases}
`;
    if (this.mcu) configStr += `mcu: ${this.mcu}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): BoardPins {
    return new BoardPins(
      configKey,
      config.aliases,
      config.mcu
    );
  }
}