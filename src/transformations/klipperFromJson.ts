import { IConfigurableComponent } from "../models/configurableComponent";
import { createComponentFromJson } from "./createComponentFromJson";
import { KlipperConfig } from "../models/klipperConfig";

export const klipperFromJson = (config: any): KlipperConfig => {
    let knownComponents: IConfigurableComponent[] = [];
    let unknownComponents: any[] = [];

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
                config[key]
            ];
        }
    }

    const result = new KlipperConfig(knownComponents, unknownComponents);
    return result;
}
