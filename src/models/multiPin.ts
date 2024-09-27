import { ConfigurableComponent } from "../transformations/configurableComponent";

export class MultiPin extends ConfigurableComponent {
  constructor(
    configKey: string,
    public pins: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        pins: this.pins,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `pins: ${this.pins}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): MultiPin {
    return new MultiPin(
      configKey,
      config.pins
    );
  }
}