import { IComponentConfig } from "./componentConfig";

export interface IMcu extends IComponentConfig {
    serial: string;
    baud: number;
    canbus_uuid: string;
    canbus_interface: string;
    restart_method: string;
}
