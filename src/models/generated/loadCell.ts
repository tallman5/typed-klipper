import { ConfigurableComponent } from "..";

export class LoadCell extends ConfigurableComponent {
  constructor(
    configKey: string,
    public sensor_type: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        sensor_type: this.sensor_type,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `sensor_type: ${this.sensor_type}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): LoadCell {
    return new LoadCell(
      configKey,
      config.sensor_type
    );
  }
}