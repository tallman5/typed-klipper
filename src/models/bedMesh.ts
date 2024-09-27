import { ConfigurableComponent } from "../transformations/configurableComponent";

export class BedMesh extends ConfigurableComponent {
  constructor(
    configKey: string,
    public speed?: string,
    public horizontal_move_z?: string,
    public mesh_radius?: string,
    public mesh_origin?: string,
    public mesh_min?: string,
    public mesh_max?: string,
    public probe_count?: string,
    public round_probe_count?: string,
    public fade_start?: string,
    public fade_end?: string,
    public fade_target?: string,
    public split_delta_z?: string,
    public move_check_distance?: string,
    public mesh_pps?: string,
    public algorithm?: string,
    public bicubic_tension?: string,
    public zero_reference_position?: string,
    public faulty_region_1_min?: string,
    public faulty_region_1_max?: string,
    public adaptive_margin?: string,
    public scan_overshoot?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        speed: this.speed,
        horizontal_move_z: this.horizontal_move_z,
        mesh_radius: this.mesh_radius,
        mesh_origin: this.mesh_origin,
        mesh_min: this.mesh_min,
        mesh_max: this.mesh_max,
        probe_count: this.probe_count,
        round_probe_count: this.round_probe_count,
        fade_start: this.fade_start,
        fade_end: this.fade_end,
        fade_target: this.fade_target,
        split_delta_z: this.split_delta_z,
        move_check_distance: this.move_check_distance,
        mesh_pps: this.mesh_pps,
        algorithm: this.algorithm,
        bicubic_tension: this.bicubic_tension,
        zero_reference_position: this.zero_reference_position,
        faulty_region_1_min: this.faulty_region_1_min,
        faulty_region_1_max: this.faulty_region_1_max,
        adaptive_margin: this.adaptive_margin,
        scan_overshoot: this.scan_overshoot,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]
`;
    if (this.speed) configStr += `speed: ${this.speed}
`;
    if (this.horizontal_move_z) configStr += `horizontal_move_z: ${this.horizontal_move_z}
`;
    if (this.mesh_radius) configStr += `mesh_radius: ${this.mesh_radius}
`;
    if (this.mesh_origin) configStr += `mesh_origin: ${this.mesh_origin}
`;
    if (this.mesh_min) configStr += `mesh_min: ${this.mesh_min}
`;
    if (this.mesh_max) configStr += `mesh_max: ${this.mesh_max}
`;
    if (this.probe_count) configStr += `probe_count: ${this.probe_count}
`;
    if (this.round_probe_count) configStr += `round_probe_count: ${this.round_probe_count}
`;
    if (this.fade_start) configStr += `fade_start: ${this.fade_start}
`;
    if (this.fade_end) configStr += `fade_end: ${this.fade_end}
`;
    if (this.fade_target) configStr += `fade_target: ${this.fade_target}
`;
    if (this.split_delta_z) configStr += `split_delta_z: ${this.split_delta_z}
`;
    if (this.move_check_distance) configStr += `move_check_distance: ${this.move_check_distance}
`;
    if (this.mesh_pps) configStr += `mesh_pps: ${this.mesh_pps}
`;
    if (this.algorithm) configStr += `algorithm: ${this.algorithm}
`;
    if (this.bicubic_tension) configStr += `bicubic_tension: ${this.bicubic_tension}
`;
    if (this.zero_reference_position) configStr += `zero_reference_position: ${this.zero_reference_position}
`;
    if (this.faulty_region_1_min) configStr += `faulty_region_1_min: ${this.faulty_region_1_min}
`;
    if (this.faulty_region_1_max) configStr += `faulty_region_1_max: ${this.faulty_region_1_max}
`;
    if (this.adaptive_margin) configStr += `adaptive_margin: ${this.adaptive_margin}
`;
    if (this.scan_overshoot) configStr += `scan_overshoot: ${this.scan_overshoot}
`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): BedMesh {
    return new BedMesh(
      configKey,
      config.speed,
      config.horizontal_move_z,
      config.mesh_radius,
      config.mesh_origin,
      config.mesh_min,
      config.mesh_max,
      config.probe_count,
      config.round_probe_count,
      config.fade_start,
      config.fade_end,
      config.fade_target,
      config.split_delta_z,
      config.move_check_distance,
      config.mesh_pps,
      config.algorithm,
      config.bicubic_tension,
      config.zero_reference_position,
      config.faulty_region_1_min,
      config.faulty_region_1_max,
      config.adaptive_margin,
      config.scan_overshoot
    );
  }
}