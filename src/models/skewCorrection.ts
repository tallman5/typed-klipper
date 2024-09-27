import { ConfigurableComponent } from "../transformations/configurableComponent";

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
    let configStr = `[${this.configKey}]
`;
    
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): SkewCorrection {
    return new SkewCorrection(
      configKey,
      
    );
  }
}