import { ConfigurableComponent } from "..";

export class Tmc2208 extends ConfigurableComponent {
  constructor(
    configKey: string,
    public uart_pin: string,
    public run_current: string,
    public tx_pin?: string,
    public select_pins?: string,
    public interpolate?: string,
    public hold_current?: string,
    public sense_resistor?: string,
    public stealthchop_threshold?: string,
    public driver_MULTISTEP_FILT?: string,
    public driver_IHOLDDELAY?: string,
    public driver_TPOWERDOWN?: string,
    public driver_TBL?: string,
    public driver_TOFF?: string,
    public driver_HEND?: string,
    public driver_HSTRT?: string,
    public driver_PWM_AUTOGRAD?: string,
    public driver_PWM_AUTOSCALE?: string,
    public driver_PWM_LIM?: string,
    public driver_PWM_REG?: string,
    public driver_PWM_FREQ?: string,
    public driver_PWM_GRAD?: string,
    public driver_PWM_OFS?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        uart_pin: this.uart_pin,
        run_current: this.run_current,
        tx_pin: this.tx_pin,
        select_pins: this.select_pins,
        interpolate: this.interpolate,
        hold_current: this.hold_current,
        sense_resistor: this.sense_resistor,
        stealthchop_threshold: this.stealthchop_threshold,
        driver_MULTISTEP_FILT: this.driver_MULTISTEP_FILT,
        driver_IHOLDDELAY: this.driver_IHOLDDELAY,
        driver_TPOWERDOWN: this.driver_TPOWERDOWN,
        driver_TBL: this.driver_TBL,
        driver_TOFF: this.driver_TOFF,
        driver_HEND: this.driver_HEND,
        driver_HSTRT: this.driver_HSTRT,
        driver_PWM_AUTOGRAD: this.driver_PWM_AUTOGRAD,
        driver_PWM_AUTOSCALE: this.driver_PWM_AUTOSCALE,
        driver_PWM_LIM: this.driver_PWM_LIM,
        driver_PWM_REG: this.driver_PWM_REG,
        driver_PWM_FREQ: this.driver_PWM_FREQ,
        driver_PWM_GRAD: this.driver_PWM_GRAD,
        driver_PWM_OFS: this.driver_PWM_OFS,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `uart_pin: ${this.uart_pin}
`;
    configStr += `run_current: ${this.run_current}
`;
    if (this.tx_pin) configStr += `tx_pin: ${this.tx_pin}
`;
    if (this.select_pins) configStr += `select_pins: ${this.select_pins}
`;
    if (this.interpolate) configStr += `interpolate: ${this.interpolate}
`;
    if (this.hold_current) configStr += `hold_current: ${this.hold_current}
`;
    if (this.sense_resistor) configStr += `sense_resistor: ${this.sense_resistor}
`;
    if (this.stealthchop_threshold) configStr += `stealthchop_threshold: ${this.stealthchop_threshold}
`;
    if (this.driver_MULTISTEP_FILT) configStr += `driver_MULTISTEP_FILT: ${this.driver_MULTISTEP_FILT}
`;
    if (this.driver_IHOLDDELAY) configStr += `driver_IHOLDDELAY: ${this.driver_IHOLDDELAY}
`;
    if (this.driver_TPOWERDOWN) configStr += `driver_TPOWERDOWN: ${this.driver_TPOWERDOWN}
`;
    if (this.driver_TBL) configStr += `driver_TBL: ${this.driver_TBL}
`;
    if (this.driver_TOFF) configStr += `driver_TOFF: ${this.driver_TOFF}
`;
    if (this.driver_HEND) configStr += `driver_HEND: ${this.driver_HEND}
`;
    if (this.driver_HSTRT) configStr += `driver_HSTRT: ${this.driver_HSTRT}
`;
    if (this.driver_PWM_AUTOGRAD) configStr += `driver_PWM_AUTOGRAD: ${this.driver_PWM_AUTOGRAD}
`;
    if (this.driver_PWM_AUTOSCALE) configStr += `driver_PWM_AUTOSCALE: ${this.driver_PWM_AUTOSCALE}
`;
    if (this.driver_PWM_LIM) configStr += `driver_PWM_LIM: ${this.driver_PWM_LIM}
`;
    if (this.driver_PWM_REG) configStr += `driver_PWM_REG: ${this.driver_PWM_REG}
`;
    if (this.driver_PWM_FREQ) configStr += `driver_PWM_FREQ: ${this.driver_PWM_FREQ}
`;
    if (this.driver_PWM_GRAD) configStr += `driver_PWM_GRAD: ${this.driver_PWM_GRAD}
`;
    if (this.driver_PWM_OFS) configStr += `driver_PWM_OFS: ${this.driver_PWM_OFS}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Tmc2208 {
    return new Tmc2208(
      configKey,
      config.uart_pin,
      config.run_current,
      config.tx_pin,
      config.select_pins,
      config.interpolate,
      config.hold_current,
      config.sense_resistor,
      config.stealthchop_threshold,
      config.driver_MULTISTEP_FILT,
      config.driver_IHOLDDELAY,
      config.driver_TPOWERDOWN,
      config.driver_TBL,
      config.driver_TOFF,
      config.driver_HEND,
      config.driver_HSTRT,
      config.driver_PWM_AUTOGRAD,
      config.driver_PWM_AUTOSCALE,
      config.driver_PWM_LIM,
      config.driver_PWM_REG,
      config.driver_PWM_FREQ,
      config.driver_PWM_GRAD,
      config.driver_PWM_OFS
    );
  }
}