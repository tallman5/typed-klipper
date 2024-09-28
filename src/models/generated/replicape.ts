import { ConfigurableComponent } from "..";

export class Replicape extends ConfigurableComponent {
  constructor(
    configKey: string,
    public revision: string,
    public host_mcu: string,
    public enable_pin?: string,
    public standstill_power_down?: string,
    public stepper_x_microstep_mode?: string,
    public stepper_y_microstep_mode?: string,
    public stepper_z_microstep_mode?: string,
    public stepper_e_microstep_mode?: string,
    public stepper_h_microstep_mode?: string,
    public stepper_x_current?: string,
    public stepper_y_current?: string,
    public stepper_z_current?: string,
    public stepper_e_current?: string,
    public stepper_h_current?: string,
    public stepper_x_chopper_off_time_high?: string,
    public stepper_y_chopper_off_time_high?: string,
    public stepper_z_chopper_off_time_high?: string,
    public stepper_e_chopper_off_time_high?: string,
    public stepper_h_chopper_off_time_high?: string,
    public stepper_x_chopper_hysteresis_high?: string,
    public stepper_y_chopper_hysteresis_high?: string,
    public stepper_z_chopper_hysteresis_high?: string,
    public stepper_e_chopper_hysteresis_high?: string,
    public stepper_h_chopper_hysteresis_high?: string,
    public stepper_x_chopper_blank_time_high?: string,
    public stepper_y_chopper_blank_time_high?: string,
    public stepper_z_chopper_blank_time_high?: string,
    public stepper_e_chopper_blank_time_high?: string,
    public stepper_h_chopper_blank_time_high?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        revision: this.revision,
        host_mcu: this.host_mcu,
        enable_pin: this.enable_pin,
        standstill_power_down: this.standstill_power_down,
        stepper_x_microstep_mode: this.stepper_x_microstep_mode,
        stepper_y_microstep_mode: this.stepper_y_microstep_mode,
        stepper_z_microstep_mode: this.stepper_z_microstep_mode,
        stepper_e_microstep_mode: this.stepper_e_microstep_mode,
        stepper_h_microstep_mode: this.stepper_h_microstep_mode,
        stepper_x_current: this.stepper_x_current,
        stepper_y_current: this.stepper_y_current,
        stepper_z_current: this.stepper_z_current,
        stepper_e_current: this.stepper_e_current,
        stepper_h_current: this.stepper_h_current,
        stepper_x_chopper_off_time_high: this.stepper_x_chopper_off_time_high,
        stepper_y_chopper_off_time_high: this.stepper_y_chopper_off_time_high,
        stepper_z_chopper_off_time_high: this.stepper_z_chopper_off_time_high,
        stepper_e_chopper_off_time_high: this.stepper_e_chopper_off_time_high,
        stepper_h_chopper_off_time_high: this.stepper_h_chopper_off_time_high,
        stepper_x_chopper_hysteresis_high: this.stepper_x_chopper_hysteresis_high,
        stepper_y_chopper_hysteresis_high: this.stepper_y_chopper_hysteresis_high,
        stepper_z_chopper_hysteresis_high: this.stepper_z_chopper_hysteresis_high,
        stepper_e_chopper_hysteresis_high: this.stepper_e_chopper_hysteresis_high,
        stepper_h_chopper_hysteresis_high: this.stepper_h_chopper_hysteresis_high,
        stepper_x_chopper_blank_time_high: this.stepper_x_chopper_blank_time_high,
        stepper_y_chopper_blank_time_high: this.stepper_y_chopper_blank_time_high,
        stepper_z_chopper_blank_time_high: this.stepper_z_chopper_blank_time_high,
        stepper_e_chopper_blank_time_high: this.stepper_e_chopper_blank_time_high,
        stepper_h_chopper_blank_time_high: this.stepper_h_chopper_blank_time_high,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `revision: ${this.revision}
`;
    configStr += `host_mcu: ${this.host_mcu}
`;
    if (this.enable_pin) configStr += `enable_pin: ${this.enable_pin}
`;
    if (this.standstill_power_down) configStr += `standstill_power_down: ${this.standstill_power_down}
`;
    if (this.stepper_x_microstep_mode) configStr += `stepper_x_microstep_mode: ${this.stepper_x_microstep_mode}
`;
    if (this.stepper_y_microstep_mode) configStr += `stepper_y_microstep_mode: ${this.stepper_y_microstep_mode}
`;
    if (this.stepper_z_microstep_mode) configStr += `stepper_z_microstep_mode: ${this.stepper_z_microstep_mode}
`;
    if (this.stepper_e_microstep_mode) configStr += `stepper_e_microstep_mode: ${this.stepper_e_microstep_mode}
`;
    if (this.stepper_h_microstep_mode) configStr += `stepper_h_microstep_mode: ${this.stepper_h_microstep_mode}
`;
    if (this.stepper_x_current) configStr += `stepper_x_current: ${this.stepper_x_current}
`;
    if (this.stepper_y_current) configStr += `stepper_y_current: ${this.stepper_y_current}
`;
    if (this.stepper_z_current) configStr += `stepper_z_current: ${this.stepper_z_current}
`;
    if (this.stepper_e_current) configStr += `stepper_e_current: ${this.stepper_e_current}
`;
    if (this.stepper_h_current) configStr += `stepper_h_current: ${this.stepper_h_current}
`;
    if (this.stepper_x_chopper_off_time_high) configStr += `stepper_x_chopper_off_time_high: ${this.stepper_x_chopper_off_time_high}
`;
    if (this.stepper_y_chopper_off_time_high) configStr += `stepper_y_chopper_off_time_high: ${this.stepper_y_chopper_off_time_high}
`;
    if (this.stepper_z_chopper_off_time_high) configStr += `stepper_z_chopper_off_time_high: ${this.stepper_z_chopper_off_time_high}
`;
    if (this.stepper_e_chopper_off_time_high) configStr += `stepper_e_chopper_off_time_high: ${this.stepper_e_chopper_off_time_high}
`;
    if (this.stepper_h_chopper_off_time_high) configStr += `stepper_h_chopper_off_time_high: ${this.stepper_h_chopper_off_time_high}
`;
    if (this.stepper_x_chopper_hysteresis_high) configStr += `stepper_x_chopper_hysteresis_high: ${this.stepper_x_chopper_hysteresis_high}
`;
    if (this.stepper_y_chopper_hysteresis_high) configStr += `stepper_y_chopper_hysteresis_high: ${this.stepper_y_chopper_hysteresis_high}
`;
    if (this.stepper_z_chopper_hysteresis_high) configStr += `stepper_z_chopper_hysteresis_high: ${this.stepper_z_chopper_hysteresis_high}
`;
    if (this.stepper_e_chopper_hysteresis_high) configStr += `stepper_e_chopper_hysteresis_high: ${this.stepper_e_chopper_hysteresis_high}
`;
    if (this.stepper_h_chopper_hysteresis_high) configStr += `stepper_h_chopper_hysteresis_high: ${this.stepper_h_chopper_hysteresis_high}
`;
    if (this.stepper_x_chopper_blank_time_high) configStr += `stepper_x_chopper_blank_time_high: ${this.stepper_x_chopper_blank_time_high}
`;
    if (this.stepper_y_chopper_blank_time_high) configStr += `stepper_y_chopper_blank_time_high: ${this.stepper_y_chopper_blank_time_high}
`;
    if (this.stepper_z_chopper_blank_time_high) configStr += `stepper_z_chopper_blank_time_high: ${this.stepper_z_chopper_blank_time_high}
`;
    if (this.stepper_e_chopper_blank_time_high) configStr += `stepper_e_chopper_blank_time_high: ${this.stepper_e_chopper_blank_time_high}
`;
    if (this.stepper_h_chopper_blank_time_high) configStr += `stepper_h_chopper_blank_time_high: ${this.stepper_h_chopper_blank_time_high}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Replicape {
    return new Replicape(
      configKey,
      config.revision,
      config.host_mcu,
      config.enable_pin,
      config.standstill_power_down,
      config.stepper_x_microstep_mode,
      config.stepper_y_microstep_mode,
      config.stepper_z_microstep_mode,
      config.stepper_e_microstep_mode,
      config.stepper_h_microstep_mode,
      config.stepper_x_current,
      config.stepper_y_current,
      config.stepper_z_current,
      config.stepper_e_current,
      config.stepper_h_current,
      config.stepper_x_chopper_off_time_high,
      config.stepper_y_chopper_off_time_high,
      config.stepper_z_chopper_off_time_high,
      config.stepper_e_chopper_off_time_high,
      config.stepper_h_chopper_off_time_high,
      config.stepper_x_chopper_hysteresis_high,
      config.stepper_y_chopper_hysteresis_high,
      config.stepper_z_chopper_hysteresis_high,
      config.stepper_e_chopper_hysteresis_high,
      config.stepper_h_chopper_hysteresis_high,
      config.stepper_x_chopper_blank_time_high,
      config.stepper_y_chopper_blank_time_high,
      config.stepper_z_chopper_blank_time_high,
      config.stepper_e_chopper_blank_time_high,
      config.stepper_h_chopper_blank_time_high
    );
  }
}