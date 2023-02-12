# Ports

## Limitations

<table><tr><td>

|Firmware|          Versions|
|--------|------------------|
|Stock   |`>= 3.0.0.4.380.x`|
|Merlin  |`>= 3.0.0.4.380.x`|
</td><td>

| Device mode|    Available|
|------------|-------------|
|Router      |:green_heart:|
|AiMesh Node |:green_heart:|
|Access point|:green_heart:|
|Media bridge|:green_heart:|
</td></tr></table>

## Binary sensor

### `{device}_port_status_{port_type}`

`AsusRouter >= 0.20.0`

:::tip Port types
    - LAN, USB, WAN ports.
    - sensors are firmware-dependant.
    - USB is available only for FW versions `388.x`
:::

-   Default entity state: `Disabled`
-   Value: `on` / `off` (connected / disconnected)
-   Details:

    Connection state of the ports of type `port_type`

    #### Attributes

    -   ##### list

        -   Type: `dict`
        -   Details:

            Each list is a dictionary with port number (ID) as a key and details dictionary as a value. Details dictionary contains binary `state` value for the state of each port as well as `max_rate` and `link_rate` for the speeds of the interface and connection in Mb/s. Other values are FW-dependant

## Deprecated

### `sensor.{device}_lan_speed`

`AsusRouter >= 0.2.0 | < 0.22.0`

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

### `sensor.{device}_wan_speed`

`AsusRouter >= 0.2.0 | < 0.22.0`

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
