import { ConfigurableComponent } from "..";

export class Tmc5160 extends ConfigurableComponent {
  constructor(
    configKey: string,
    public cs_pin: string,
    public run_current: string,
    public spi_speed?: string,
    public spi_bus?: string,
    public spi_software_sclk_pin?: string,
    public spi_software_mosi_pin?: string,
    public spi_software_miso_pin?: string,
    public chain_position?: string,
    public chain_length?: string,
    public interpolate?: string,
    public hold_current?: string,
    public sense_resistor?: string,
    public stealthchop_threshold?: string,
    public coolstep_threshold?: string,
    public high_velocity_threshold?: string,
    public driver_MSLUT0?: string,
    public driver_MSLUT1?: string,
    public driver_MSLUT2?: string,
    public driver_MSLUT3?: string,
    public driver_MSLUT4?: string,
    public driver_MSLUT5?: string,
    public driver_MSLUT6?: string,
    public driver_MSLUT7?: string,
    public driver_W0?: string,
    public driver_W1?: string,
    public driver_W2?: string,
    public driver_W3?: string,
    public driver_X1?: string,
    public driver_X2?: string,
    public driver_X3?: string,
    public driver_START_SIN?: string,
    public driver_START_SIN90?: string,
    public driver_MULTISTEP_FILT?: string,
    public driver_IHOLDDELAY?: string,
    public driver_TPOWERDOWN?: string,
    public driver_TBL?: string,
    public driver_TOFF?: string,
    public driver_HEND?: string,
    public driver_HSTRT?: string,
    public driver_FD3?: string,
    public driver_TPFD?: string,
    public driver_CHM?: string,
    public driver_VHIGHFS?: string,
    public driver_VHIGHCHM?: string,
    public driver_DISS2G?: string,
    public driver_DISS2VS?: string,
    public driver_PWM_AUTOSCALE?: string,
    public driver_PWM_AUTOGRAD?: string,
    public driver_PWM_FREQ?: string,
    public driver_FREEWHEEL?: string,
    public driver_PWM_GRAD?: string,
    public driver_PWM_OFS?: string,
    public driver_PWM_REG?: string,
    public driver_PWM_LIM?: string,
    public driver_SGT?: string,
    public driver_SEMIN?: string,
    public driver_SEUP?: string,
    public driver_SEMAX?: string,
    public driver_SEDN?: string,
    public driver_SEIMIN?: string,
    public driver_SFILT?: string,
    public driver_DRVSTRENGTH?: string,
    public driver_BBMCLKS?: string,
    public driver_BBMTIME?: string,
    public driver_FILT_ISENSE?: string,
    public diag0_pin?: string,
    public diag1_pin?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        cs_pin: this.cs_pin,
        run_current: this.run_current,
        spi_speed: this.spi_speed,
        spi_bus: this.spi_bus,
        spi_software_sclk_pin: this.spi_software_sclk_pin,
        spi_software_mosi_pin: this.spi_software_mosi_pin,
        spi_software_miso_pin: this.spi_software_miso_pin,
        chain_position: this.chain_position,
        chain_length: this.chain_length,
        interpolate: this.interpolate,
        hold_current: this.hold_current,
        sense_resistor: this.sense_resistor,
        stealthchop_threshold: this.stealthchop_threshold,
        coolstep_threshold: this.coolstep_threshold,
        high_velocity_threshold: this.high_velocity_threshold,
        driver_MSLUT0: this.driver_MSLUT0,
        driver_MSLUT1: this.driver_MSLUT1,
        driver_MSLUT2: this.driver_MSLUT2,
        driver_MSLUT3: this.driver_MSLUT3,
        driver_MSLUT4: this.driver_MSLUT4,
        driver_MSLUT5: this.driver_MSLUT5,
        driver_MSLUT6: this.driver_MSLUT6,
        driver_MSLUT7: this.driver_MSLUT7,
        driver_W0: this.driver_W0,
        driver_W1: this.driver_W1,
        driver_W2: this.driver_W2,
        driver_W3: this.driver_W3,
        driver_X1: this.driver_X1,
        driver_X2: this.driver_X2,
        driver_X3: this.driver_X3,
        driver_START_SIN: this.driver_START_SIN,
        driver_START_SIN90: this.driver_START_SIN90,
        driver_MULTISTEP_FILT: this.driver_MULTISTEP_FILT,
        driver_IHOLDDELAY: this.driver_IHOLDDELAY,
        driver_TPOWERDOWN: this.driver_TPOWERDOWN,
        driver_TBL: this.driver_TBL,
        driver_TOFF: this.driver_TOFF,
        driver_HEND: this.driver_HEND,
        driver_HSTRT: this.driver_HSTRT,
        driver_FD3: this.driver_FD3,
        driver_TPFD: this.driver_TPFD,
        driver_CHM: this.driver_CHM,
        driver_VHIGHFS: this.driver_VHIGHFS,
        driver_VHIGHCHM: this.driver_VHIGHCHM,
        driver_DISS2G: this.driver_DISS2G,
        driver_DISS2VS: this.driver_DISS2VS,
        driver_PWM_AUTOSCALE: this.driver_PWM_AUTOSCALE,
        driver_PWM_AUTOGRAD: this.driver_PWM_AUTOGRAD,
        driver_PWM_FREQ: this.driver_PWM_FREQ,
        driver_FREEWHEEL: this.driver_FREEWHEEL,
        driver_PWM_GRAD: this.driver_PWM_GRAD,
        driver_PWM_OFS: this.driver_PWM_OFS,
        driver_PWM_REG: this.driver_PWM_REG,
        driver_PWM_LIM: this.driver_PWM_LIM,
        driver_SGT: this.driver_SGT,
        driver_SEMIN: this.driver_SEMIN,
        driver_SEUP: this.driver_SEUP,
        driver_SEMAX: this.driver_SEMAX,
        driver_SEDN: this.driver_SEDN,
        driver_SEIMIN: this.driver_SEIMIN,
        driver_SFILT: this.driver_SFILT,
        driver_DRVSTRENGTH: this.driver_DRVSTRENGTH,
        driver_BBMCLKS: this.driver_BBMCLKS,
        driver_BBMTIME: this.driver_BBMTIME,
        driver_FILT_ISENSE: this.driver_FILT_ISENSE,
        diag0_pin: this.diag0_pin,
        diag1_pin: this.diag1_pin,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `cs_pin: ${this.cs_pin}
`;
    configStr += `run_current: ${this.run_current}
`;
    if (this.spi_speed) configStr += `spi_speed: ${this.spi_speed}
`;
    if (this.spi_bus) configStr += `spi_bus: ${this.spi_bus}
`;
    if (this.spi_software_sclk_pin) configStr += `spi_software_sclk_pin: ${this.spi_software_sclk_pin}
`;
    if (this.spi_software_mosi_pin) configStr += `spi_software_mosi_pin: ${this.spi_software_mosi_pin}
`;
    if (this.spi_software_miso_pin) configStr += `spi_software_miso_pin: ${this.spi_software_miso_pin}
`;
    if (this.chain_position) configStr += `chain_position: ${this.chain_position}
`;
    if (this.chain_length) configStr += `chain_length: ${this.chain_length}
`;
    if (this.interpolate) configStr += `interpolate: ${this.interpolate}
`;
    if (this.hold_current) configStr += `hold_current: ${this.hold_current}
`;
    if (this.sense_resistor) configStr += `sense_resistor: ${this.sense_resistor}
`;
    if (this.stealthchop_threshold) configStr += `stealthchop_threshold: ${this.stealthchop_threshold}
`;
    if (this.coolstep_threshold) configStr += `coolstep_threshold: ${this.coolstep_threshold}
`;
    if (this.high_velocity_threshold) configStr += `high_velocity_threshold: ${this.high_velocity_threshold}
`;
    if (this.driver_MSLUT0) configStr += `driver_MSLUT0: ${this.driver_MSLUT0}
`;
    if (this.driver_MSLUT1) configStr += `driver_MSLUT1: ${this.driver_MSLUT1}
`;
    if (this.driver_MSLUT2) configStr += `driver_MSLUT2: ${this.driver_MSLUT2}
`;
    if (this.driver_MSLUT3) configStr += `driver_MSLUT3: ${this.driver_MSLUT3}
`;
    if (this.driver_MSLUT4) configStr += `driver_MSLUT4: ${this.driver_MSLUT4}
`;
    if (this.driver_MSLUT5) configStr += `driver_MSLUT5: ${this.driver_MSLUT5}
`;
    if (this.driver_MSLUT6) configStr += `driver_MSLUT6: ${this.driver_MSLUT6}
`;
    if (this.driver_MSLUT7) configStr += `driver_MSLUT7: ${this.driver_MSLUT7}
`;
    if (this.driver_W0) configStr += `driver_W0: ${this.driver_W0}
`;
    if (this.driver_W1) configStr += `driver_W1: ${this.driver_W1}
`;
    if (this.driver_W2) configStr += `driver_W2: ${this.driver_W2}
`;
    if (this.driver_W3) configStr += `driver_W3: ${this.driver_W3}
`;
    if (this.driver_X1) configStr += `driver_X1: ${this.driver_X1}
`;
    if (this.driver_X2) configStr += `driver_X2: ${this.driver_X2}
`;
    if (this.driver_X3) configStr += `driver_X3: ${this.driver_X3}
`;
    if (this.driver_START_SIN) configStr += `driver_START_SIN: ${this.driver_START_SIN}
`;
    if (this.driver_START_SIN90) configStr += `driver_START_SIN90: ${this.driver_START_SIN90}
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
    if (this.driver_FD3) configStr += `driver_FD3: ${this.driver_FD3}
`;
    if (this.driver_TPFD) configStr += `driver_TPFD: ${this.driver_TPFD}
`;
    if (this.driver_CHM) configStr += `driver_CHM: ${this.driver_CHM}
`;
    if (this.driver_VHIGHFS) configStr += `driver_VHIGHFS: ${this.driver_VHIGHFS}
`;
    if (this.driver_VHIGHCHM) configStr += `driver_VHIGHCHM: ${this.driver_VHIGHCHM}
`;
    if (this.driver_DISS2G) configStr += `driver_DISS2G: ${this.driver_DISS2G}
`;
    if (this.driver_DISS2VS) configStr += `driver_DISS2VS: ${this.driver_DISS2VS}
`;
    if (this.driver_PWM_AUTOSCALE) configStr += `driver_PWM_AUTOSCALE: ${this.driver_PWM_AUTOSCALE}
`;
    if (this.driver_PWM_AUTOGRAD) configStr += `driver_PWM_AUTOGRAD: ${this.driver_PWM_AUTOGRAD}
`;
    if (this.driver_PWM_FREQ) configStr += `driver_PWM_FREQ: ${this.driver_PWM_FREQ}
`;
    if (this.driver_FREEWHEEL) configStr += `driver_FREEWHEEL: ${this.driver_FREEWHEEL}
`;
    if (this.driver_PWM_GRAD) configStr += `driver_PWM_GRAD: ${this.driver_PWM_GRAD}
`;
    if (this.driver_PWM_OFS) configStr += `driver_PWM_OFS: ${this.driver_PWM_OFS}
`;
    if (this.driver_PWM_REG) configStr += `driver_PWM_REG: ${this.driver_PWM_REG}
`;
    if (this.driver_PWM_LIM) configStr += `driver_PWM_LIM: ${this.driver_PWM_LIM}
`;
    if (this.driver_SGT) configStr += `driver_SGT: ${this.driver_SGT}
`;
    if (this.driver_SEMIN) configStr += `driver_SEMIN: ${this.driver_SEMIN}
`;
    if (this.driver_SEUP) configStr += `driver_SEUP: ${this.driver_SEUP}
`;
    if (this.driver_SEMAX) configStr += `driver_SEMAX: ${this.driver_SEMAX}
`;
    if (this.driver_SEDN) configStr += `driver_SEDN: ${this.driver_SEDN}
`;
    if (this.driver_SEIMIN) configStr += `driver_SEIMIN: ${this.driver_SEIMIN}
`;
    if (this.driver_SFILT) configStr += `driver_SFILT: ${this.driver_SFILT}
`;
    if (this.driver_DRVSTRENGTH) configStr += `driver_DRVSTRENGTH: ${this.driver_DRVSTRENGTH}
`;
    if (this.driver_BBMCLKS) configStr += `driver_BBMCLKS: ${this.driver_BBMCLKS}
`;
    if (this.driver_BBMTIME) configStr += `driver_BBMTIME: ${this.driver_BBMTIME}
`;
    if (this.driver_FILT_ISENSE) configStr += `driver_FILT_ISENSE: ${this.driver_FILT_ISENSE}
`;
    if (this.diag0_pin) configStr += `diag0_pin: ${this.diag0_pin}
`;
    if (this.diag1_pin) configStr += `diag1_pin: ${this.diag1_pin}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Tmc5160 {
    return new Tmc5160(
      configKey,
      config.cs_pin,
      config.run_current,
      config.spi_speed,
      config.spi_bus,
      config.spi_software_sclk_pin,
      config.spi_software_mosi_pin,
      config.spi_software_miso_pin,
      config.chain_position,
      config.chain_length,
      config.interpolate,
      config.hold_current,
      config.sense_resistor,
      config.stealthchop_threshold,
      config.coolstep_threshold,
      config.high_velocity_threshold,
      config.driver_MSLUT0,
      config.driver_MSLUT1,
      config.driver_MSLUT2,
      config.driver_MSLUT3,
      config.driver_MSLUT4,
      config.driver_MSLUT5,
      config.driver_MSLUT6,
      config.driver_MSLUT7,
      config.driver_W0,
      config.driver_W1,
      config.driver_W2,
      config.driver_W3,
      config.driver_X1,
      config.driver_X2,
      config.driver_X3,
      config.driver_START_SIN,
      config.driver_START_SIN90,
      config.driver_MULTISTEP_FILT,
      config.driver_IHOLDDELAY,
      config.driver_TPOWERDOWN,
      config.driver_TBL,
      config.driver_TOFF,
      config.driver_HEND,
      config.driver_HSTRT,
      config.driver_FD3,
      config.driver_TPFD,
      config.driver_CHM,
      config.driver_VHIGHFS,
      config.driver_VHIGHCHM,
      config.driver_DISS2G,
      config.driver_DISS2VS,
      config.driver_PWM_AUTOSCALE,
      config.driver_PWM_AUTOGRAD,
      config.driver_PWM_FREQ,
      config.driver_FREEWHEEL,
      config.driver_PWM_GRAD,
      config.driver_PWM_OFS,
      config.driver_PWM_REG,
      config.driver_PWM_LIM,
      config.driver_SGT,
      config.driver_SEMIN,
      config.driver_SEUP,
      config.driver_SEMAX,
      config.driver_SEDN,
      config.driver_SEIMIN,
      config.driver_SFILT,
      config.driver_DRVSTRENGTH,
      config.driver_BBMCLKS,
      config.driver_BBMTIME,
      config.driver_FILT_ISENSE,
      config.diag0_pin,
      config.diag1_pin
    );
  }
}