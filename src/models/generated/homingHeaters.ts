import { ConfigurableComponent } from "..";

export class HomingHeaters extends ConfigurableComponent {
  constructor(
    configKey: string,
    public steppers?: string,
    public heaters?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        steppers: this.steppers,
        heaters: this.heaters,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    if (this.steppers) configStr += `steppers: ${this.steppers}\n`;
    if (this.heaters) configStr += `heaters: ${this.heaters}\n`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): HomingHeaters {
    return new HomingHeaters(
      configKey,
      config.steppers,
      config.heaters
    );
  }
}