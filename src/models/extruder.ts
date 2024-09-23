import { IHeater } from "./heater";

export interface IExtruder extends IHeater {
    step_pin: string;
    dir_pin: string;
    enable_pin: string;
    microsteps: number;
    rotation_distance: number;
    full_steps_per_rotation: number;
    gear_ratio: string;
    nozzle_diameter: number;
    filament_diameter: number;
    max_extrude_cross_section: number;
    instantaneous_corner_velocity: number;
    max_extrude_only_distance: number;
    max_extrude_only_velocity: number;
    max_extrude_only_accel: number;
    pressure_advance: number;
    pressure_advance_smooth_time: number;
    max_power: number;
    pullup_resistor: number;
    smooth_time: number;
    pid_Kp: number;
    pid_Ki: number;
    pid_Kd: number;
    max_delta: number;
    pwm_cycle_time: number;
    min_extrude_temp: number;
}
