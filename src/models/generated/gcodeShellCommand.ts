import { ConfigurableComponent } from "..";

export class GcodeShellCommand extends ConfigurableComponent {
  constructor(
    configKey: string,
    public command: string,
    public timeout: string,
    public verbose?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        command: this.command,
        timeout: this.timeout,
        verbose: this.verbose,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `command: ${this.command}
`;
    configStr += `timeout: ${this.timeout}
`;
    if (this.verbose) configStr += `verbose: ${this.verbose}\n`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): GcodeShellCommand {
    return new GcodeShellCommand(
      configKey,
      config.command,
      config.timeout,
      config.verbose
    );
  }
}