import { ConfigurableComponent } from "../transformations/configurableComponent";

export class Neopixel extends ConfigurableComponent {
  constructor(
    configKey: string,
    public pin: string,
    public chain_count?: string,
    public color_order?: string,
    public initial_RED?: string,
    public initial_GREEN?: string,
    public initial_BLUE?: string,
    public initial_WHITE?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        pin: this.pin,
        chain_count: this.chain_count,
        color_order: this.color_order,
        initial_RED: this.initial_RED,
        initial_GREEN: this.initial_GREEN,
        initial_BLUE: this.initial_BLUE,
        initial_WHITE: this.initial_WHITE,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `pin: ${this.pin}
`;
    if (this.chain_count) configStr += `chain_count: ${this.chain_count}
`;
    if (this.color_order) configStr += `color_order: ${this.color_order}
`;
    if (this.initial_RED) configStr += `initial_RED: ${this.initial_RED}
`;
    if (this.initial_GREEN) configStr += `initial_GREEN: ${this.initial_GREEN}
`;
    if (this.initial_BLUE) configStr += `initial_BLUE: ${this.initial_BLUE}
`;
    if (this.initial_WHITE) configStr += `initial_WHITE: ${this.initial_WHITE}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Neopixel {
    return new Neopixel(
      configKey,
      config.pin,
      config.chain_count,
      config.color_order,
      config.initial_RED,
      config.initial_GREEN,
      config.initial_BLUE,
      config.initial_WHITE
    );
  }
}