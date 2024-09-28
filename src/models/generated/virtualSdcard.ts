import { ConfigurableComponent } from "..";

export class VirtualSdcard extends ConfigurableComponent {
  constructor(
    configKey: string,
    public path: string,
    public on_error_gcode?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        path: this.path,
        on_error_gcode: this.on_error_gcode,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    configStr += `path: ${this.path}
`;
    if (this.on_error_gcode) configStr += `on_error_gcode: ${this.on_error_gcode}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): VirtualSdcard {
    return new VirtualSdcard(
      configKey,
      config.path,
      config.on_error_gcode
    );
  }
}