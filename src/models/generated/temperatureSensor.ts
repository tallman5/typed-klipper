import { ConfigurableComponent } from "..";

export class TemperatureSensor extends ConfigurableComponent {
  constructor(
    configKey: string,
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
        sensor_type: this.sensor_type,
        sensor_pin: this.sensor_pin,
        min_temp: this.min_temp,
        max_temp: this.max_temp,
        gcode_id: this.gcode_id,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    if (this.sensor_type) configStr += `sensor_type: ${this.sensor_type}
`;
    if (this.sensor_pin) configStr += `sensor_pin: ${this.sensor_pin}
`;
    if (this.min_temp) configStr += `min_temp: ${this.min_temp}
`;
    if (this.max_temp) configStr += `max_temp: ${this.max_temp}
`;
    if (this.gcode_id) configStr += `gcode_id: ${this.gcode_id}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): TemperatureSensor {
    return new TemperatureSensor(
      configKey,
      config.sensor_type,
      config.sensor_pin,
      config.min_temp,
      config.max_temp,
      config.gcode_id
    );
  }
}