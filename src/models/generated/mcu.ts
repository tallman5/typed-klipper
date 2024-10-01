import { ConfigurableComponent } from "..";

export class Mcu extends ConfigurableComponent {
  constructor(
    configKey: string,
    public serial: string,
    public baud?: string,
    public canbus_uuid?: string,
    public canbus_interface?: string,
    public restart_method?: string
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        serial: this.serial,
        baud: this.baud,
        canbus_uuid: this.canbus_uuid,
        canbus_interface: this.canbus_interface,
        restart_method: this.restart_method,
      }
    };
  }

  toCfg(): string {
    let configStr = `[${this.configKey}]\n`;
    configStr += `serial: ${this.serial}
`;
    if (this.baud) configStr += `baud: ${this.baud}\n`;
    if (this.canbus_uuid) configStr += `canbus_uuid: ${this.canbus_uuid}\n`;
    if (this.canbus_interface) configStr += `canbus_interface: ${this.canbus_interface}\n`;
    if (this.restart_method) configStr += `restart_method: ${this.restart_method}\n`;
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): Mcu {
    return new Mcu(
      configKey,
      config.serial,
      config.baud,
      config.canbus_uuid,
      config.canbus_interface,
      config.restart_method
    );
  }
}