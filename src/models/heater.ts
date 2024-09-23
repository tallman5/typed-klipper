import { IComponentConfig } from "./componentConfig";

export interface IHeater extends IComponentConfig {
    heater_pin: string;
    sensor_type: string;
    // #   Type of sensor - common thermistors are "EPCOS 100K B57560G104F",
    // #   "ATC Semitec 104GT-2", "ATC Semitec 104NT-4-R025H42G", "Generic
    // #   3950","Honeywell 100K 135-104LAG-J01", "NTC 100K MGB18-104F39050L32",
    // #   "SliceEngineering 450", and "TDK NTCG104LH104JT1". See the
    // #   "Temperature sensors" section for other sensors. This parameter
    // #   must be provided.
    sensor_pin: string;
    control: string;
    min_temp: number;
    max_temp: number;
}
