import { Stepper } from "./generated";
import { Printer } from "./generated/printer";

// Not yet tested

export enum PrinterKinematic {
    cartesian, corexy, corexz, hybrid_corexy,
    hybrid_corexz, rotary_delta, delta,
    deltesian, polar, winch, none
}

export class XyzPrinter extends Printer {
    constructor(
        configKey: string,
        kinematics: string,
        max_velocity: string,
        max_accel: string,
        public stepper_x: Stepper,
        public stepper_y: Stepper,
        public stepper_z: Stepper,
        minimum_cruise_ratio?: string,
        square_corner_velocity?: string,
        max_accel_to_decel?: string
    ) {
        super(
            configKey,
            kinematics,
            max_velocity,
            max_accel,
            minimum_cruise_ratio,
            square_corner_velocity,
            max_accel_to_decel
        );
    }

    toJSON(): any {
        const baseConfig = super.toJSON();
        baseConfig[this.configKey]["stepper_x"] = this.stepper_x;
        baseConfig[this.configKey]["stepper_y"] = this.stepper_y;
        baseConfig[this.configKey]["stepper_z"] = this.stepper_z;
        return baseConfig;
    }

    toCfg(): string {
        let configStr = super.toCfg();
        configStr += `
  stepper_x: ${this.stepper_x}
  stepper_y: ${this.stepper_y}
  stepper_z: ${this.stepper_z}
  `;
        return configStr.trim();
    }

    static fromJson(configKey: string, config: any): XyzPrinter {
        return new XyzPrinter(
            configKey,
            config.kinematics,
            config.max_velocity,
            config.max_accel,
            config.stepper_x,
            config.stepper_y,
            config.stepper_z,
            config.minimum_cruise_ratio,
            config.square_corner_velocity,
            config.max_accel_to_decel
        );
    }
}
