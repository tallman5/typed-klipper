# Utilities

## Auto-generating Typed Classes
Most of the classes in the models folder are generated using ```generate-klipper-classes.ts```.
It reads and parses the ```Config_Reference.md```.
It is not 100% accurate.
However it does generate most of the code.
After generating the classes, some minor modifications are needed.
The following sections describe what's needed before and after running the script.

## Before Running Generation

### Modify Config_Reference.md
The Config_Reference.md is downloaded directly from Klipper's GitHub.
The following mods are done to ensure the auto-generation of the classes works well.

1. Enusre all ```#   (comments)``` comments are hashtag three spaces
1. adc_temperature: Comment out duplicate props
1. board_pins: comment out mcu
1. Rename all stepper_* to stepper
1. Rename extruder1 to extruder

## After Running Generation
The following manual mods are needed after generating the classes.
