import { ConfigurableComponent } from "../transformations/configurableComponent";

export class Extruder1 extends ConfigurableComponent {
  constructor(
    configKey: string,
    public step_pin?: string,
    public dir_pin?: string,
    public shared_heater?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        step_pin: this.step_pin,
        dir_pin: this.dir_pin,
        shared_heater: this.shared_heater,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    if (this.step_pin) configStr += `step_pin: ${this.step_pin}
`;
    if (this.dir_pin) configStr += `dir_pin: ${this.dir_pin}
`;
    if (this.shared_heater) configStr += `shared_heater: ${this.shared_heater}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Extruder1 {
    return new Extruder1(
      configKey,
      config.step_pin,
      config.dir_pin,
      config.shared_heater
    );
  }
}