import { ConfigurableComponent } from "..";

export class GcodeButton extends ConfigurableComponent {
  constructor(
    configKey: string,
    public pin: string,
    public analog_range?: string,
    public analog_pullup_resistor?: string,
    public press_gcode?: string,
    public release_gcode?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        pin: this.pin,
        analog_range: this.analog_range,
        analog_pullup_resistor: this.analog_pullup_resistor,
        press_gcode: this.press_gcode,
        release_gcode: this.release_gcode,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `pin: ${this.pin}
`;
    if (this.analog_range) configStr += `analog_range: ${this.analog_range}\n`;
    if (this.analog_pullup_resistor) configStr += `analog_pullup_resistor: ${this.analog_pullup_resistor}\n`;
    if (this.press_gcode) configStr += `press_gcode: ${this.press_gcode}\n`;
    if (this.release_gcode) configStr += `release_gcode: ${this.release_gcode}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): GcodeButton {
    return new GcodeButton(
      configKey,
      config.pin,
      config.analog_range,
      config.analog_pullup_resistor,
      config.press_gcode,
      config.release_gcode
    );
  }

  static fromJson(configKey: string, config: any): GcodeButton {
    return new GcodeButton(
      configKey,
      config.pin,
      config.analog_range,
      config.analog_pullup_resistor,
      config.press_gcode,
      config.release_gcode
    );
  }
}