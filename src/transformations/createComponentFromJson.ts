import { IConfigurableComponent } from "./configurableComponent";
import { jsonToComponentMapper } from "./jsonToComponentMapper";

export function createComponentFromJson(key: string, json: any): IConfigurableComponent | null {
    for (const { pattern, handler } of jsonToComponentMapper) {
        if (pattern.test(key)) {
            return handler(key, json);
        }
    }
    return null;
}
