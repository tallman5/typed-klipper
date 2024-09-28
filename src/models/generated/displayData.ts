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
    let configStr = `[${this.configKey}]
`;
    configStr += `position: ${this.position}
`;
    configStr += `text: ${this.text}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): DisplayData {
    return new DisplayData(
      configKey,
      config.position,
      config.text
    );
  }
}