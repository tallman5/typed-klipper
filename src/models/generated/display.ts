import { ConfigurableComponent } from "..";

export class Display extends ConfigurableComponent {
  constructor(
    configKey: string,
    public lcd_type: string,
    public display_group?: string,
    public menu_timeout?: string,
    public menu_root?: string,
    public menu_reverse_navigation?: string,
    public encoder_pins?: string,
    public encoder_steps_per_detent?: string,
    public click_pin?: string,
    public back_pin?: string,
    public up_pin?: string,
    public down_pin?: string,
    public kill_pin?: string,
    public analog_pullup_resistor?: string,
    public analog_range_click_pin?: string,
    public analog_range_back_pin?: string,
    public analog_range_up_pin?: string,
    public analog_range_down_pin?: string,
    public analog_range_kill_pin?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        lcd_type: this.lcd_type,
        display_group: this.display_group,
        menu_timeout: this.menu_timeout,
        menu_root: this.menu_root,
        menu_reverse_navigation: this.menu_reverse_navigation,
        encoder_pins: this.encoder_pins,
        encoder_steps_per_detent: this.encoder_steps_per_detent,
        click_pin: this.click_pin,
        back_pin: this.back_pin,
        up_pin: this.up_pin,
        down_pin: this.down_pin,
        kill_pin: this.kill_pin,
        analog_pullup_resistor: this.analog_pullup_resistor,
        analog_range_click_pin: this.analog_range_click_pin,
        analog_range_back_pin: this.analog_range_back_pin,
        analog_range_up_pin: this.analog_range_up_pin,
        analog_range_down_pin: this.analog_range_down_pin,
        analog_range_kill_pin: this.analog_range_kill_pin,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `lcd_type: ${this.lcd_type}
`;
    if (this.display_group) configStr += `display_group: ${this.display_group}
`;
    if (this.menu_timeout) configStr += `menu_timeout: ${this.menu_timeout}
`;
    if (this.menu_root) configStr += `menu_root: ${this.menu_root}
`;
    if (this.menu_reverse_navigation) configStr += `menu_reverse_navigation: ${this.menu_reverse_navigation}
`;
    if (this.encoder_pins) configStr += `encoder_pins: ${this.encoder_pins}
`;
    if (this.encoder_steps_per_detent) configStr += `encoder_steps_per_detent: ${this.encoder_steps_per_detent}
`;
    if (this.click_pin) configStr += `click_pin: ${this.click_pin}
`;
    if (this.back_pin) configStr += `back_pin: ${this.back_pin}
`;
    if (this.up_pin) configStr += `up_pin: ${this.up_pin}
`;
    if (this.down_pin) configStr += `down_pin: ${this.down_pin}
`;
    if (this.kill_pin) configStr += `kill_pin: ${this.kill_pin}
`;
    if (this.analog_pullup_resistor) configStr += `analog_pullup_resistor: ${this.analog_pullup_resistor}
`;
    if (this.analog_range_click_pin) configStr += `analog_range_click_pin: ${this.analog_range_click_pin}
`;
    if (this.analog_range_back_pin) configStr += `analog_range_back_pin: ${this.analog_range_back_pin}
`;
    if (this.analog_range_up_pin) configStr += `analog_range_up_pin: ${this.analog_range_up_pin}
`;
    if (this.analog_range_down_pin) configStr += `analog_range_down_pin: ${this.analog_range_down_pin}
`;
    if (this.analog_range_kill_pin) configStr += `analog_range_kill_pin: ${this.analog_range_kill_pin}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Display {
    return new Display(
      configKey,
      config.lcd_type,
      config.display_group,
      config.menu_timeout,
      config.menu_root,
      config.menu_reverse_navigation,
      config.encoder_pins,
      config.encoder_steps_per_detent,
      config.click_pin,
      config.back_pin,
      config.up_pin,
      config.down_pin,
      config.kill_pin,
      config.analog_pullup_resistor,
      config.analog_range_click_pin,
      config.analog_range_back_pin,
      config.analog_range_up_pin,
      config.analog_range_down_pin,
      config.analog_range_kill_pin
    );
  }
}