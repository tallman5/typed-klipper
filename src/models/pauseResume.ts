import { ConfigurableComponent } from "../transformations/configurableComponent";

export class PauseResume extends ConfigurableComponent {
  constructor(
    configKey: string,
    public recover_velocity?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        recover_velocity: this.recover_velocity,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    if (this.recover_velocity) configStr += `recover_velocity: ${this.recover_velocity}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): PauseResume {
    return new PauseResume(
      configKey,
      config.recover_velocity
    );
  }
}