export interface IConfigurableComponent {
    configKey: string;
    toJSON(): any;
    toCfg(): string;
}

export abstract class ConfigurableComponent implements IConfigurableComponent {
    constructor(
        public configKey: string
    ) { }

    abstract toJSON(): any;
    abstract toCfg(): string;
}
