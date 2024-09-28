import { ConfigurableComponent } from "..";

export class HallFilamentWidthSensor extends ConfigurableComponent {
  constructor(
    configKey: string,
    public adc1: string,
    public adc2: string,
    public cal_dia1?: string,
    public cal_dia2?: string,
    public raw_dia1?: string,
    public raw_dia2?: string,
    public default_nominal_filament_diameter?: string,
    public max_difference?: string,
    public measurement_delay?: string,
    public enable?: string,
    public measurement_interval?: string,
    public logging?: string,
    public min_diameter?: string,
    public max_diameter?: string,
    public use_current_dia_while_delay?: string,
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
        adc1: this.adc1,
        adc2: this.adc2,
        cal_dia1: this.cal_dia1,
        cal_dia2: this.cal_dia2,
        raw_dia1: this.raw_dia1,
        raw_dia2: this.raw_dia2,
        default_nominal_filament_diameter: this.default_nominal_filament_diameter,
        max_difference: this.max_difference,
        measurement_delay: this.measurement_delay,
        enable: this.enable,
        measurement_interval: this.measurement_interval,
        logging: this.logging,
        min_diameter: this.min_diameter,
        max_diameter: this.max_diameter,
        use_current_dia_while_delay: this.use_current_dia_while_delay,
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
    configStr += `adc1: ${this.adc1}
`;
    configStr += `adc2: ${this.adc2}
`;
    if (this.cal_dia1) configStr += `cal_dia1: ${this.cal_dia1}
`;
    if (this.cal_dia2) configStr += `cal_dia2: ${this.cal_dia2}
`;
    if (this.raw_dia1) configStr += `raw_dia1: ${this.raw_dia1}
`;
    if (this.raw_dia2) configStr += `raw_dia2: ${this.raw_dia2}
`;
    if (this.default_nominal_filament_diameter) configStr += `default_nominal_filament_diameter: ${this.default_nominal_filament_diameter}
`;
    if (this.max_difference) configStr += `max_difference: ${this.max_difference}
`;
    if (this.measurement_delay) configStr += `measurement_delay: ${this.measurement_delay}
`;
    if (this.enable) configStr += `enable: ${this.enable}
`;
    if (this.measurement_interval) configStr += `measurement_interval: ${this.measurement_interval}
`;
    if (this.logging) configStr += `logging: ${this.logging}
`;
    if (this.min_diameter) configStr += `min_diameter: ${this.min_diameter}
`;
    if (this.max_diameter) configStr += `max_diameter: ${this.max_diameter}
`;
    if (this.use_current_dia_while_delay) configStr += `use_current_dia_while_delay: ${this.use_current_dia_while_delay}
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

  static fromJson(configKey: string, config: any): HallFilamentWidthSensor {
    return new HallFilamentWidthSensor(
      configKey,
      config.adc1,
      config.adc2,
      config.cal_dia1,
      config.cal_dia2,
      config.raw_dia1,
      config.raw_dia2,
      config.default_nominal_filament_diameter,
      config.max_difference,
      config.measurement_delay,
      config.enable,
      config.measurement_interval,
      config.logging,
      config.min_diameter,
      config.max_diameter,
      config.use_current_dia_while_delay,
      config.pause_on_runout,
      config.runout_gcode,
      config.insert_gcode,
      config.event_delay,
      config.pause_delay
    );
  }
}