import { ConfigurableComponent } from "..";

export class Tmc2660 extends ConfigurableComponent {
  constructor(
    configKey: string,
    public cs_pin: string,
    public run_current: string,
    public spi_speed?: string,
    public spi_bus?: string,
    public spi_software_sclk_pin?: string,
    public spi_software_mosi_pin?: string,
    public spi_software_miso_pin?: string,
    public interpolate?: string,
    public sense_resistor?: string,
    public idle_current_percent?: string,
    public driver_TBL?: string,
    public driver_RNDTF?: string,
    public driver_HDEC?: string,
    public driver_CHM?: string,
    public driver_HEND?: string,
    public driver_HSTRT?: string,
    public driver_TOFF?: string,
    public driver_SEIMIN?: string,
    public driver_SEDN?: string,
    public driver_SEMAX?: string,
    public driver_SEUP?: string,
    public driver_SEMIN?: string,
    public driver_SFILT?: string,
    public driver_SGT?: string,
    public driver_SLPH?: string,
    public driver_SLPL?: string,
    public driver_DISS2G?: string,
    public driver_TS2G?: string
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
        interpolate: this.interpolate,
        sense_resistor: this.sense_resistor,
        idle_current_percent: this.idle_current_percent,
        driver_TBL: this.driver_TBL,
        driver_RNDTF: this.driver_RNDTF,
        driver_HDEC: this.driver_HDEC,
        driver_CHM: this.driver_CHM,
        driver_HEND: this.driver_HEND,
        driver_HSTRT: this.driver_HSTRT,
        driver_TOFF: this.driver_TOFF,
        driver_SEIMIN: this.driver_SEIMIN,
        driver_SEDN: this.driver_SEDN,
        driver_SEMAX: this.driver_SEMAX,
        driver_SEUP: this.driver_SEUP,
        driver_SEMIN: this.driver_SEMIN,
        driver_SFILT: this.driver_SFILT,
        driver_SGT: this.driver_SGT,
        driver_SLPH: this.driver_SLPH,
        driver_SLPL: this.driver_SLPL,
        driver_DISS2G: this.driver_DISS2G,
        driver_TS2G: this.driver_TS2G,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `cs_pin: ${this.cs_pin}
`;
    configStr += `run_current: ${this.run_current}
`;
    if (this.spi_speed) configStr += `spi_speed: ${this.spi_speed}\n`;
    if (this.spi_bus) configStr += `spi_bus: ${this.spi_bus}\n`;
    if (this.spi_software_sclk_pin) configStr += `spi_software_sclk_pin: ${this.spi_software_sclk_pin}\n`;
    if (this.spi_software_mosi_pin) configStr += `spi_software_mosi_pin: ${this.spi_software_mosi_pin}\n`;
    if (this.spi_software_miso_pin) configStr += `spi_software_miso_pin: ${this.spi_software_miso_pin}\n`;
    if (this.interpolate) configStr += `interpolate: ${this.interpolate}\n`;
    if (this.sense_resistor) configStr += `sense_resistor: ${this.sense_resistor}\n`;
    if (this.idle_current_percent) configStr += `idle_current_percent: ${this.idle_current_percent}\n`;
    if (this.driver_TBL) configStr += `driver_TBL: ${this.driver_TBL}\n`;
    if (this.driver_RNDTF) configStr += `driver_RNDTF: ${this.driver_RNDTF}\n`;
    if (this.driver_HDEC) configStr += `driver_HDEC: ${this.driver_HDEC}\n`;
    if (this.driver_CHM) configStr += `driver_CHM: ${this.driver_CHM}\n`;
    if (this.driver_HEND) configStr += `driver_HEND: ${this.driver_HEND}\n`;
    if (this.driver_HSTRT) configStr += `driver_HSTRT: ${this.driver_HSTRT}\n`;
    if (this.driver_TOFF) configStr += `driver_TOFF: ${this.driver_TOFF}\n`;
    if (this.driver_SEIMIN) configStr += `driver_SEIMIN: ${this.driver_SEIMIN}\n`;
    if (this.driver_SEDN) configStr += `driver_SEDN: ${this.driver_SEDN}\n`;
    if (this.driver_SEMAX) configStr += `driver_SEMAX: ${this.driver_SEMAX}\n`;
    if (this.driver_SEUP) configStr += `driver_SEUP: ${this.driver_SEUP}\n`;
    if (this.driver_SEMIN) configStr += `driver_SEMIN: ${this.driver_SEMIN}\n`;
    if (this.driver_SFILT) configStr += `driver_SFILT: ${this.driver_SFILT}\n`;
    if (this.driver_SGT) configStr += `driver_SGT: ${this.driver_SGT}\n`;
    if (this.driver_SLPH) configStr += `driver_SLPH: ${this.driver_SLPH}\n`;
    if (this.driver_SLPL) configStr += `driver_SLPL: ${this.driver_SLPL}\n`;
    if (this.driver_DISS2G) configStr += `driver_DISS2G: ${this.driver_DISS2G}\n`;
    if (this.driver_TS2G) configStr += `driver_TS2G: ${this.driver_TS2G}\n`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Tmc2660 {
    return new Tmc2660(
      configKey,
      config.cs_pin,
      config.run_current,
      config.spi_speed,
      config.spi_bus,
      config.spi_software_sclk_pin,
      config.spi_software_mosi_pin,
      config.spi_software_miso_pin,
      config.interpolate,
      config.sense_resistor,
      config.idle_current_percent,
      config.driver_TBL,
      config.driver_RNDTF,
      config.driver_HDEC,
      config.driver_CHM,
      config.driver_HEND,
      config.driver_HSTRT,
      config.driver_TOFF,
      config.driver_SEIMIN,
      config.driver_SEDN,
      config.driver_SEMAX,
      config.driver_SEUP,
      config.driver_SEMIN,
      config.driver_SFILT,
      config.driver_SGT,
      config.driver_SLPH,
      config.driver_SLPL,
      config.driver_DISS2G,
      config.driver_TS2G
    );
  }
}