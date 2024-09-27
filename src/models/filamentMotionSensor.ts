import { ConfigurableComponent } from "../transformations/configurableComponent";

export class FilamentMotionSensor extends ConfigurableComponent {
  constructor(
    configKey: string,
    public detection_length: string,
    public extruder: string,
    public switch_pin: string,
    public pause_on_runout?: string,
    public runout_gcode?: string,
    public insert_gcode?: string,
    public event_delay?: string,
    public pause_delay?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        detection_length: this.detection_length,
        extruder: this.extruder,
        switch_pin: this.switch_pin,
        pause_on_runout: this.pause_on_runout,
        runout_gcode: this.runout_gcode,
        insert_gcode: this.insert_gcode,
        event_delay: this.event_delay,
        pause_delay: this.pause_delay,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `detection_length: ${this.detection_length}
`;
    configStr += `extruder: ${this.extruder}
`;
    configStr += `switch_pin: ${this.switch_pin}
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
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): FilamentMotionSensor {
    return new FilamentMotionSensor(
      configKey,
      config.detection_length,
      config.extruder,
      config.switch_pin,
      config.pause_on_runout,
      config.runout_gcode,
      config.insert_gcode,
      config.event_delay,
      config.pause_delay
    );
  }
}