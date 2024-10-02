import { ConfigurableComponent } from "..";

export class Mcp4018 extends ConfigurableComponent {
  constructor(
    configKey: string,
    public scl_pin: string,
    public sda_pin: string,
    public wiper: string,
    public scale?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        scl_pin: this.scl_pin,
        sda_pin: this.sda_pin,
        wiper: this.wiper,
        scale: this.scale,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `scl_pin: ${this.scl_pin}
`;
    configStr += `sda_pin: ${this.sda_pin}
`;
    configStr += `wiper: ${this.wiper}
`;
    if (this.scale) configStr += `scale: ${this.scale}\n`;
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): Mcp4018 {
    return new Mcp4018(
      configKey,
      config.scl_pin,
      config.sda_pin,
      config.wiper,
      config.scale
    );
  }

  static fromJson(configKey: string, config: any): Mcp4018 {
    return new Mcp4018(
      configKey,
      config.scl_pin,
      config.sda_pin,
      config.wiper,
      config.scale
    );
  }
}