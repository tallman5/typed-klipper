import { ConfigurableComponent } from "..";

export class Dotstar extends ConfigurableComponent {
  constructor(
    configKey: string,
    public data_pin: string,
    public clock_pin: string,
    public chain_count?: string,
    public initial_RED?: string,
    public initial_GREEN?: string,
    public initial_BLUE?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        data_pin: this.data_pin,
        clock_pin: this.clock_pin,
        chain_count: this.chain_count,
        initial_RED: this.initial_RED,
        initial_GREEN: this.initial_GREEN,
        initial_BLUE: this.initial_BLUE,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `data_pin: ${this.data_pin}
`;
    configStr += `clock_pin: ${this.clock_pin}
`;
    if (this.chain_count) configStr += `chain_count: ${this.chain_count}
`;
    if (this.initial_RED) configStr += `initial_RED: ${this.initial_RED}
`;
    if (this.initial_GREEN) configStr += `initial_GREEN: ${this.initial_GREEN}
`;
    if (this.initial_BLUE) configStr += `initial_BLUE: ${this.initial_BLUE}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Dotstar {
    return new Dotstar(
      configKey,
      config.data_pin,
      config.clock_pin,
      config.chain_count,
      config.initial_RED,
      config.initial_GREEN,
      config.initial_BLUE
    );
  }
}