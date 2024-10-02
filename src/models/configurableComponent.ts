export interface IConfigurableComponent {
    configKey: string;
    toCfg(): string;
    toJSON(): any;
}

export abstract class ConfigurableComponent implements IConfigurableComponent {
    constructor(
        public configKey: string
    ) { }

    // abstract fromCfg(cfgContent: string): ConfigurableComponent;
    // abstract fromJSON(config: any): ConfigurableComponent;
    abstract toCfg(): string;
    abstract toJSON(): any;
}
