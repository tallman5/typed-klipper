import { ConfigurableComponent } from "..";

export class Include extends ConfigurableComponent {
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

  static fromCfg(configKey: string, config: any): Include {
    return new Include(
      configKey,
      
    );
  }

  static fromJson(configKey: string, config: any): Include {
    return new Include(
      configKey,
      
    );
  }
}