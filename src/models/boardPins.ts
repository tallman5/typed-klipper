import { ConfigurableComponent } from "../transformations/configurableComponent";

export class BoardPins extends ConfigurableComponent {
  constructor(
    configKey: string,
    public mcu: string,
    public aliases: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        mcu: this.mcu,
        aliases: this.aliases,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `mcu: ${this.mcu}
`;
    configStr += `aliases: ${this.aliases}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): BoardPins {
    return new BoardPins(
      configKey,
      config.mcu,
      config.aliases
    );
  }
}