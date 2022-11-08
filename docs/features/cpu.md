# CPU

## Firmware limitations

|Firmware|          Versions|
|--------|------------------|
|Stock   |`>= 3.0.0.4.380.x`|
|Merlin  |`>= 3.0.0.4.380.x`|

## Sensor

### `{device}_cpu`

`AsusRouter >= 0.1.0`

-   Default entity state: `Disabled`
-   Type: `float`
-   Units: `%`
-   Details:

    The average CPU utilization over the last `t` seconds, where `t` is the time interval between fetching CPU data.

    The sensor requires 2 consecutive polls of data from the device to start showing an actual state. Until then, the sensor state will be reported as `unknown`.

#### Attributes

-   ##### core_{x}

    `AsusRouter >= 0.1.5`

    -   Type: `float`
    -   Units: `%`
    -   Details:

        The average core utilization for core `{x}` the same way as the sensor.
