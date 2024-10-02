import { ConfigurableComponent } from "..";

export class SkewCorrection extends ConfigurableComponent {
  constructor(
    configKey: string,
    
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    
    return configStr.trim();
  }

  static fromCfg(configKey: string, config: any): SkewCorrection {
    return new SkewCorrection(
      configKey,
      
    );
  }

  static fromJson(configKey: string, config: any): SkewCorrection {
    return new SkewCorrection(
      configKey,
      
    );
  }
}