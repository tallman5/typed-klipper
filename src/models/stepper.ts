import { IComponentConfig } from "./componentConfig";

export interface IStepper extends IComponentConfig {
    dir_pin: string;
    enable_pin: string;
    endstop_pin: string;
    full_steps_per_rotation: number;
    gear_ratio: number;
    homing_positive_dir: boolean;
    homing_retract_dist: number;
    homing_retract_speed: number;
    homing_speed: number;
    microsteps: number;
    position_endstop: number;
    position_max: number;
    position_min: number;
    rotation_distance: string;
    second_homing_speed: number;
    step_pin: string;
    step_pulse_duration: number;
}
