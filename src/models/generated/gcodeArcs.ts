import { ConfigurableComponent } from "..";

export class GcodeArcs extends ConfigurableComponent {
  constructor(
    configKey: string,
    public resolution?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        resolution: this.resolution,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    if (this.resolution) configStr += `resolution: ${this.resolution}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): GcodeArcs {
    return new GcodeArcs(
      configKey,
      config.resolution
    );
  }
}