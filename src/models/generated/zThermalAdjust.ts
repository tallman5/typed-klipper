import { ConfigurableComponent } from "..";

export class ZThermalAdjust extends ConfigurableComponent {
  constructor(
    configKey: string,
    public temp_coeff?: string,
    public smooth_time?: string,
    public z_adjust_off_above?: string,
    public max_z_adjustment?: string,
    public sensor_type?: string,
    public sensor_pin?: string,
    public min_temp?: string,
    public max_temp?: string,
    public gcode_id?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        temp_coeff: this.temp_coeff,
        smooth_time: this.smooth_time,
        z_adjust_off_above: this.z_adjust_off_above,
        max_z_adjustment: this.max_z_adjustment,
        sensor_type: this.sensor_type,
        sensor_pin: this.sensor_pin,
        min_temp: this.min_temp,
        max_temp: this.max_temp,
        gcode_id: this.gcode_id,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    if (this.temp_coeff) configStr += `temp_coeff: ${this.temp_coeff}\n`;
    if (this.smooth_time) configStr += `smooth_time: ${this.smooth_time}\n`;
    if (this.z_adjust_off_above) configStr += `z_adjust_off_above: ${this.z_adjust_off_above}\n`;
    if (this.max_z_adjustment) configStr += `max_z_adjustment: ${this.max_z_adjustment}\n`;
    if (this.sensor_type) configStr += `sensor_type: ${this.sensor_type}\n`;
    if (this.sensor_pin) configStr += `sensor_pin: ${this.sensor_pin}\n`;
    if (this.min_temp) configStr += `min_temp: ${this.min_temp}\n`;
    if (this.max_temp) configStr += `max_temp: ${this.max_temp}\n`;
    if (this.gcode_id) configStr += `gcode_id: ${this.gcode_id}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): ZThermalAdjust {
    return new ZThermalAdjust(
      configKey,
      config.temp_coeff,
      config.smooth_time,
      config.z_adjust_off_above,
      config.max_z_adjustment,
      config.sensor_type,
      config.sensor_pin,
      config.min_temp,
      config.max_temp,
      config.gcode_id
    );
  }

  static fromJson(configKey: string, config: any): ZThermalAdjust {
    return new ZThermalAdjust(
      configKey,
      config.temp_coeff,
      config.smooth_time,
      config.z_adjust_off_above,
      config.max_z_adjustment,
      config.sensor_type,
      config.sensor_pin,
      config.min_temp,
      config.max_temp,
      config.gcode_id
    );
  }
}