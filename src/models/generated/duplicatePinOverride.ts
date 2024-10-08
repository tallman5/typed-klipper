import { ConfigurableComponent } from "..";

export class DuplicatePinOverride extends ConfigurableComponent {
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
    let configStr = `[${this.configKey}]\n`;
    configStr += `pins: ${this.pins}
`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): DuplicatePinOverride {
    return new DuplicatePinOverride(
      configKey,
      config.pins
    );
  }

  static fromJson(configKey: string, config: any): DuplicatePinOverride {
    return new DuplicatePinOverride(
      configKey,
      config.pins
    );
  }
}