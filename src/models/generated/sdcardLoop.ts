import { ConfigurableComponent } from "..";

export class SdcardLoop extends ConfigurableComponent {
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

  static fromCfg(configKey: string, config: any): SdcardLoop {
    return new SdcardLoop(
      configKey,
      
    );
  }

  static fromJson(configKey: string, config: any): SdcardLoop {
    return new SdcardLoop(
      configKey,
      
    );
  }
}