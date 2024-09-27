import { ConfigurableComponent } from "../transformations/configurableComponent";

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
    let configStr = `[${this.configKey}]
`;
    configStr += `text: ${this.text}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): DisplayTemplate {
    return new DisplayTemplate(
      configKey,
      config.text
    );
  }
}