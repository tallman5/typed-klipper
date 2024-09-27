import * as Models from '../models';
import { IConfigurableComponent } from './configurableComponent';

export const jsonToComponentMapper: { pattern: RegExp, handler: (configKey: string, config: any) => IConfigurableComponent }[] = [
    { pattern: /^extruder/, handler: (configKey, json) => Models.Extruder.fromJson(configKey, json) },
    // { pattern: /^fan/, handler: (configKey, json) => Models.Fan.fromJson(configKey, json) },
    // { pattern: /^heater/, handler: (configKey, json) => Models.HeaterGeneric.fromJson(configKey, json) },
    // { pattern: /^mcu/, handler: (configKey, json) => Models.Mcu.fromJson(configKey, json) },
    // { pattern: /^probe/, handler: (configKey, json) => Models.Probe.fromJson(configKey, json) },
    // { pattern: /^temperature_sensor/, handler: (configKey, json) => Models.TemperatureSensor.fromJson(configKey, json) },
];
