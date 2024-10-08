import { ConfigurableComponent } from "..";

export class Respond extends ConfigurableComponent {
  constructor(
    configKey: string,
    public default_type?: string,
    public default_prefix?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        default_type: this.default_type,
        default_prefix: this.default_prefix,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    if (this.default_type) configStr += `default_type: ${this.default_type}\n`;
    if (this.default_prefix) configStr += `default_prefix: ${this.default_prefix}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): Respond {
    return new Respond(
      configKey,
      config.default_type,
      config.default_prefix
    );
  }

  static fromJson(configKey: string, config: any): Respond {
    return new Respond(
      configKey,
      config.default_type,
      config.default_prefix
    );
  }
}