import { ConfigurableComponent } from "..";

export class HeaterBed extends ConfigurableComponent {
  constructor(
    configKey: string,
    public heater_pin: string,
    public sensor_type: string,
    public sensor_pin: string,
    public control: string,
    public min_temp: string,
    public max_temp: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        heater_pin: this.heater_pin,
        sensor_type: this.sensor_type,
        sensor_pin: this.sensor_pin,
        control: this.control,
        min_temp: this.min_temp,
        max_temp: this.max_temp,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `heater_pin: ${this.heater_pin}
`;
    configStr += `sensor_type: ${this.sensor_type}
`;
    configStr += `sensor_pin: ${this.sensor_pin}
`;
    configStr += `control: ${this.control}
`;
    configStr += `min_temp: ${this.min_temp}
`;
    configStr += `max_temp: ${this.max_temp}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): HeaterBed {
    return new HeaterBed(
      configKey,
      config.heater_pin,
      config.sensor_type,
      config.sensor_pin,
      config.control,
      config.min_temp,
      config.max_temp
    );
  }
}