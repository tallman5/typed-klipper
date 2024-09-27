import { ConfigurableComponent } from "../transformations/configurableComponent";

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
    let configStr = `[${this.configKey}]
`;
    
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): ExcludeObject {
    return new ExcludeObject(
      configKey,
      
    );
  }
}