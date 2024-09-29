# @tallman/typed-klipper

> [!WARNING]
> This package is still in Alpha.

## Features
1. Src (included in the package)
    1. Stongly typed classes, including properties, for Klipper configurations
    1. Classes have conversion methods for:
        1. Components from Moonraker JSON
        1. Component to Klipper configuration
        1. Component from Klipper configuration (in progress)
1. Utils (in the code project, not in the final package)
    1. Generate classes from the Klipper documentation
1. Tests
    1. Creating components from Moonraker JSON
    1. Creating components from Klipper configuration files (in progress)

## Utilities

### Auto-generating Typed Classes
Everything in the ```src/models/generated``` folder is generated using ```generate-klipper-classes.ts```.
It reads and parses the ```Config_Reference.md```.
Some minor mods are needed before and after running the generate script.
The following sections describes those mods.

### Before Running Generation

#### Modify Config_Reference.md
The Config_Reference.md is downloaded directly from Klipper's GitHub.
The following mods are done to ensure the auto-generation of the classes works well.

1. Enusre all ```#   (comments)``` comments are hashtag three spaces
1. adc_temperature: Comment out duplicate props
1. board_pins: comment out mcu
1. Rename all stepper_* to stepper
1. Rename extruder1 to extruder

### After Running Generation
The following manual mods are needed after generating the classes.
