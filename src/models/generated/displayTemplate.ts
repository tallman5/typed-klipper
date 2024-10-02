import { ConfigurableComponent } from "..";

export class DisplayTemplate extends ConfigurableComponent {
  constructor(
    configKey: string,
    public text: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        text: this.text,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `text: ${this.text}
`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): DisplayTemplate {
    return new DisplayTemplate(
      configKey,
      config.text
    );
  }

  static fromJson(configKey: string, config: any): DisplayTemplate {
    return new DisplayTemplate(
      configKey,
      config.text
    );
  }
}