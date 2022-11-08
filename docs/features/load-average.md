# Load average

::: warning Merlin-only
This feature is only supported by Merlin firmware.
:::

## Firmware limitations

|Firmware|          Versions|
|--------|------------------|
|Stock   |`not supported`   |
|Merlin  |`>= 3.0.0.4.380.x`|

## Sensor

### `{device}_load_average_{x}_min`

`AsusRouter >= 0.4.0`

-   Default entity state: `Disabled`
-   Type: `float`
-   Details:

    The Linux load average value over the `{x}` minutes for `1`, `5` and `15` minutes intervals.
