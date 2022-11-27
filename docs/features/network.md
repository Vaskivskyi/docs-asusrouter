# Network

## Firmware limitations

|Firmware|          Versions|
|--------|------------------|
|Stock   |`>= 3.0.0.4.380.x`|
|Merlin  |`>= 3.0.0.4.380.x`|

## Sensor

### `{device}_{interface}_download`

`AsusRouter >= 0.1.0`

-   Default entity state: `Enabled`
-   Type: `float` | `integer`
-   Units: [`bit`, `kbit`, `Mbit`, `Gbit`, `B`, `kB`, `MB`, `GB`] ([how to select](../guide/configuration/network-interfaces.md))
-   Default units: `GB`
-   Details:

    The total amount of traffic downloaded via `{interface}` since the last reboot of the device or traffic overflow.

    #### Attributes

    -   ##### bytes

        -   Type: `integer`
        -   Units: `B`
        -   Details:

            The raw traffic value as obtained from the device.

### `{device}_{interface}_download_speed`

`AsusRouter >= 0.1.0`

-   Default entity state: `Enabled`
-   Type: `float` | `integer`
-   Units: [`bit/s`, `kbit/s`, `Mbit/s`, `Gbit/s`, `B/s`, `kB/s`, `MB/s`, `GB/s`] ([how to select](../guide/configuration/network-interfaces.md))
-   Default units: `Mbit/s`
-   Details:

    The average download speed via `{interface}` over the last `t` seconds, where `t` is the time interval between fetching network data.

    The sensor requires 2 consecutive polls of data from the device to start showing an actual state. Until then, the sensor state will be reported as `unknown`.

    #### Attributes

    -   ##### bytes

        -   Type: `integer`
        -   Units: `bits/s`
        -   Details:

            The average speed value as calculated from the traffic.

### `{device}_{interface}_upload`

`AsusRouter >= 0.1.0`

-   Default entity state: `Enabled`
-   Type: `float` | `integer`
-   Units: [`bit`, `kbit`, `Mbit`, `Gbit`, `B`, `kB`, `MB`, `GB`] ([how to select](../guide/configuration/network-interfaces.md))
-   Default units: `GB`
-   Details:

    The total amount of traffic uploaded via `{interface}` since the last reboot of the device or traffic overflow.

    #### Attributes

    -   ##### bytes

        -   Type: `integer`
        -   Units: `B`
        -   Details:

            The raw traffic value as obtained from the device.

### `{device}_{interface}_upload_speed`

`AsusRouter >= 0.1.0`

-   Default entity state: `Enabled`
-   Type: `float` | `integer`
-   Units: [`bit/s`, `kbit/s`, `Mbit/s`, `Gbit/s`, `B/s`, `kB/s`, `MB/s`, `GB/s`] ([how to select](../guide/configuration/network-interfaces.md))
-   Default units: `Mbit/s`
-   Details:

    The average upload speed via `{interface}` over the last `t` seconds, where `t` is the time interval between fetching network data.

    The sensor requires 2 consecutive polls of data from the device to start showing an actual state. Until then, the sensor state will be reported as `unknown`.

    #### Attributes

    -   ##### bytes

        -   Type: `integer`
        -   Units: `bits/s`
        -   Details:

            The average speed value as calculated from the traffic.
