# Temperature

::: tip Firmware-dependant
Amount and type of temperature sensors available for your device is both device and firmware-dependant.
:::

## Firmware limitations

|Firmware|          Versions|
|--------|------------------|
|Stock   |`>= 3.0.0.4.386.x`|
|Merlin  |`>= 3.0.0.4.380.x`|

## Sensor

### `{device}_temperature_cpu`

`AsusRouter >= 0.4.0`

-   Default entity state: `Disabled`
-   Type: `float`
-   Units: `°C` (native)
-   Details:

    The temperature of the device CPU. This sensor is available for almost all the devices and firmware.

### `{device}_temperature_2_4_ghz`

`AsusRouter >= 0.4.0`

-   Default entity state: `Disabled`
-   Type: `float`
-   Units: `°C` (native)
-   Details:

    The temperature of the device 2.4 GHz radio module.

### `{device}_temperature_5_ghz`

`AsusRouter >= 0.4.0`

-   Default entity state: `Disabled`
-   Type: `float`
-   Units: `°C` (native)
-   Details:

    The temperature of the device 5 GHz radio module.
