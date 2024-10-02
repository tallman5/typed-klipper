import { ConfigurableComponent } from "..";

export class DisplayData extends ConfigurableComponent {
  constructor(
    configKey: string,
    public position: string,
    public text: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        position: this.position,
        text: this.text,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `position: ${this.position}
`;
    configStr += `text: ${this.text}
`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): DisplayData {
    return new DisplayData(
      configKey,
      config.position,
      config.text
    );
  }

  static fromJson(configKey: string, config: any): DisplayData {
    return new DisplayData(
      configKey,
      config.position,
      config.text
    );
  }
}