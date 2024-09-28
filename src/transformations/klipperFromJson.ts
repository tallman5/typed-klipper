import { ConfigurableComponent, IConfigurableComponent } from "../models/configurableComponent";
import { createComponentFromJson } from "./createComponentFromJson";
import { KlipperConfig } from "../models/klipperConfig";

export const klipperFromJson = (config: any): KlipperConfig => {
    let knownComponents: IConfigurableComponent[] = [];
    let unknownComponents: IConfigurableComponent[] = [];

    for (const key in config) {
        const newComponent = createComponentFromJson(key, config[key]);
        if (newComponent) {
            knownComponents = [
                ...knownComponents,
                newComponent
            ];
        }
        else {
            unknownComponents = [
                ...unknownComponents,
                {
                    configKey: key,
                    toJSON: function () { throw new Error("Function not implemented."); },
                    toCfg: function (): string { throw new Error("Function not implemented."); }
                }
            ];
        }
    }

    const result = new KlipperConfig(knownComponents, unknownComponents);
    return result;
}
