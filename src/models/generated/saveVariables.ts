import { ConfigurableComponent } from "..";

export class SaveVariables extends ConfigurableComponent {
  constructor(
    configKey: string,
    public filename: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        filename: this.filename,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `filename: ${this.filename}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): SaveVariables {
    return new SaveVariables(
      configKey,
      config.filename
    );
  }
}