import { IComponentConfig } from "./componentConfig";
import { IStepper } from "./stepper";

export interface IPrinter extends IComponentConfig {
    kinematics: string;
    max_velocity: number;
    max_accel: number;
    minimum_cruise_ratio: number;
    square_corner_velocity: number;
    max_accel_to_decel: number;
}

export interface IPrinterCoreXy extends IPrinter {
    max_z_accel: number;
    max_z_velocity: number;
    stepper_x: IStepper;
    stepper_y: IStepper;
    stepper_z: IStepper;
}
