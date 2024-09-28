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
    let configStr = `[${this.configKey}]
`;
    
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): SdcardLoop {
    return new SdcardLoop(
      configKey,
      
    );
  }
}