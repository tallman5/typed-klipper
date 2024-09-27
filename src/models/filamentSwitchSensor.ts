import { ConfigurableComponent } from "../transformations/configurableComponent";

export class FilamentSwitchSensor extends ConfigurableComponent {
  constructor(
    configKey: string,
    public pause_on_runout?: string,
    public runout_gcode?: string,
    public insert_gcode?: string,
    public event_delay?: string,
    public pause_delay?: string,
    public switch_pin?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        pause_on_runout: this.pause_on_runout,
        runout_gcode: this.runout_gcode,
        insert_gcode: this.insert_gcode,
        event_delay: this.event_delay,
        pause_delay: this.pause_delay,
        switch_pin: this.switch_pin,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    if (this.pause_on_runout) configStr += `pause_on_runout: ${this.pause_on_runout}
`;
    if (this.runout_gcode) configStr += `runout_gcode: ${this.runout_gcode}
`;
    if (this.insert_gcode) configStr += `insert_gcode: ${this.insert_gcode}
`;
    if (this.event_delay) configStr += `event_delay: ${this.event_delay}
`;
    if (this.pause_delay) configStr += `pause_delay: ${this.pause_delay}
`;
    if (this.switch_pin) configStr += `switch_pin: ${this.switch_pin}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): FilamentSwitchSensor {
    return new FilamentSwitchSensor(
      configKey,
      config.pause_on_runout,
      config.runout_gcode,
      config.insert_gcode,
      config.event_delay,
      config.pause_delay,
      config.switch_pin
    );
  }
}