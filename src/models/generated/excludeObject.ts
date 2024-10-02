import { ConfigurableComponent } from "..";

export class ExcludeObject extends ConfigurableComponent {
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

  static fromCfg(configKey: string, config: any): ExcludeObject {
    return new ExcludeObject(
      configKey,
      
    );
  }

  static fromJson(configKey: string, config: any): ExcludeObject {
    return new ExcludeObject(
      configKey,
      
    );
  }
}