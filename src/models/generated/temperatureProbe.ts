import { ConfigurableComponent } from "..";

export class TemperatureProbe extends ConfigurableComponent {
  constructor(
    configKey: string,
    public sensor_type?: string,
    public sensor_pin?: string,
    public min_temp?: string,
    public max_temp?: string,
    public smooth_time?: string,
    public gcode_id?: string,
    public speed?: string,
    public horizontal_move_z?: string,
    public resting_z?: string,
    public calibration_position?: string,
    public calibration_bed_temp?: string,
    public calibration_extruder_temp?: string,
    public extruder_heating_z?: string,
    public max_validation_temp?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        sensor_type: this.sensor_type,
        sensor_pin: this.sensor_pin,
        min_temp: this.min_temp,
        max_temp: this.max_temp,
        smooth_time: this.smooth_time,
        gcode_id: this.gcode_id,
        speed: this.speed,
        horizontal_move_z: this.horizontal_move_z,
        resting_z: this.resting_z,
        calibration_position: this.calibration_position,
        calibration_bed_temp: this.calibration_bed_temp,
        calibration_extruder_temp: this.calibration_extruder_temp,
        extruder_heating_z: this.extruder_heating_z,
        max_validation_temp: this.max_validation_temp,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    if (this.sensor_type) configStr += `sensor_type: ${this.sensor_type}\n`;
    if (this.sensor_pin) configStr += `sensor_pin: ${this.sensor_pin}\n`;
    if (this.min_temp) configStr += `min_temp: ${this.min_temp}\n`;
    if (this.max_temp) configStr += `max_temp: ${this.max_temp}\n`;
    if (this.smooth_time) configStr += `smooth_time: ${this.smooth_time}\n`;
    if (this.gcode_id) configStr += `gcode_id: ${this.gcode_id}\n`;
    if (this.speed) configStr += `speed: ${this.speed}\n`;
    if (this.horizontal_move_z) configStr += `horizontal_move_z: ${this.horizontal_move_z}\n`;
    if (this.resting_z) configStr += `resting_z: ${this.resting_z}\n`;
    if (this.calibration_position) configStr += `calibration_position: ${this.calibration_position}\n`;
    if (this.calibration_bed_temp) configStr += `calibration_bed_temp: ${this.calibration_bed_temp}\n`;
    if (this.calibration_extruder_temp) configStr += `calibration_extruder_temp: ${this.calibration_extruder_temp}\n`;
    if (this.extruder_heating_z) configStr += `extruder_heating_z: ${this.extruder_heating_z}\n`;
    if (this.max_validation_temp) configStr += `max_validation_temp: ${this.max_validation_temp}\n`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): TemperatureProbe {
    return new TemperatureProbe(
      configKey,
      config.sensor_type,
      config.sensor_pin,
      config.min_temp,
      config.max_temp,
      config.smooth_time,
      config.gcode_id,
      config.speed,
      config.horizontal_move_z,
      config.resting_z,
      config.calibration_position,
      config.calibration_bed_temp,
      config.calibration_extruder_temp,
      config.extruder_heating_z,
      config.max_validation_temp
    );
  }
}