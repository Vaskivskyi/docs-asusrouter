# Ports

## Limitations

<table><tr><td>

|Firmware|          Versions|
|--------|------------------|
|Stock   |`>= 3.0.0.4.380.x`|
|Merlin  |`>= 3.0.0.4.380.x`|
</td><td>

|Device mode|    Available|
|-----------|-------------|
|Router     |:green_heart:|
|AiMesh Node|:green_heart:|
</td></tr></table>

## Sensor

### `{device}_lan_speed`

`AsusRouter >= 0.2.0`

-   Default entity state: `Disabled`
-   Type: `integer`
-   Units: `Mbit/s`
-   Details:

    The total speed over all the connected LAN ports of the device.

    #### Attributes

    -   ##### lan_{x}

        -   Type: `integer`
        -   Units: `Mbit/s`
        -   Possible values:
            -   `0` - disconnected
            -   `1000` - 1 Gb/s
            -   `2500` - 2.5 Gb/s
        -   Details:

            The speed over the LAN port `{x}`.

### `{device}_wan_speed`

`AsusRouter >= 0.2.0`

-   Default entity state: `Disabled`
-   Type: `integer`
-   Units: `Mbit/s`
-   Details:

    The total speed over all the connected WAN ports of the device.

    #### Attributes

    -   ##### wan_{x}

        -   Type: `integer`
        -   Units: `Mbit/s`
        -   Possible values:
            -   `0` - disconnected
            -   `1000` - 1 Gb/s
            -   `2500` - 2.5 Gb/s
        -   Details:

            The speed over the WAN port `{x}`.
