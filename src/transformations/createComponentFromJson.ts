import * as Models from '../models';

export function createComponentFromJson(key: string, json: any): Models.IConfigurableComponent | null {
    for (const { pattern, handler } of Models.moonrakerToComponentMapper) {
        if (pattern.test(key)) {
            return handler(key, json);
        }
    }
    return null;
}
