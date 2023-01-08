# AiMesh

## Limitations

<table><tr><td>

|Firmware|          Versions|
|--------|------------------|
|Stock   |`>= 3.0.0.4.386.x`|
|Merlin  |`>= 3.0.0.4.386.x`|
</td><td>

|Device mode|     Available|
|-----------|--------------|
|Router     |:green_heart: |
|AiMesh Node|:yellow_heart:|
</td></tr></table>

## Identity

AiMesh node identity is a base information about the node / router. It is exposed in the lists of nodes and events. The following attributes are the part of node identity:

`AsusRouter >= 0.17.0`

- `mac` - MAC address of the device
- `ip` - IP address assigned to the device
- `alias` - alias of the node (as set by user through device Web UI)
- `model` - device model
- `type` - type of node [`router`, `node`]
- `connected` - current connection status (`boolean`)

## Device

`AsusRouter >= 0.17.0`

For each AiMesh node a Home Assistant device is created, providing the basic device info:

- Model
- Manufacturer
- Firmware version
- Connected via (a link to the main `router` device through which `node` is connected)

Device name is set via `model` value.

## Binary sensor

### `aimesh_{model}_{mac}`

`AsusRouter >= 0.17.0`

-   Default entity state: `Enabled`
-   Details:

    The current state of AiMesh node. This binary sensor is automatically added to the [AiMesh device](#device).

    #### Attributes

    -   ##### [identity attributes](#identity)

        -   except: `connected`

    -   ##### level

        -   Type: `int`
        -   Details:

            Level of the node in AiMesh topology. `router` is always `0`.

    -   ##### parent

        -   Type: `dict`
        -   Attributes:
            -   connection - [`wired`, `2ghz`, `5ghz`, `5ghz2`, `6ghz`]
            -   mac
            -   rssi
            -   ssid
        -   Details:

            Information about the parent node. If `connection` is `wired`, other attributes are not present.

    -   ##### product_id

        -   Type: `string`
        -   Details:

            Product ID of the device. In most cases is the same as `model`.

## Sensor

### `{device}_aimesh`

`AsusRouter >= 0.17.0`

:::warning Mode
This sensor is created only for devices in `Router` mode
:::

-   Default entity state: `Enabled`
-   Type: `integer`
-   Details:

    The total number of AiMesh devices in the network (including the `router`).

    #### Attributes

    -   ##### list

        -   Type: `list[dict]`
        -   Details:

            The list of all the nodes currently connected to the router. Each list element is an [`identity`](#identity).

## Events

### `asusrouter_node_connected`

`AsusRouter >= 0.17.0`

-   Data: [`identity`](#identity)
-   Details:

    The event is raised when a new AiMesh node is connected to the router (if it was not connected before).

    This event is enabled by default. Refer to the [Events](../guide/configuration/events.md) section for more info on how to enable / disable this event.

### `asusrouter_device_disconnected`

`AsusRouter >= 0.17.0`

-   Data: [`identity`](#identity)
-   Details:

    The event is raised when an AiMesh node is disconnected from the router.

    This event is enabled by default. Refer to the [Events](../guide/configuration/events.md) section for more info on how to enable / disable this event.

### `asusrouter_device_reconnected`

`AsusRouter >= 0.17.0`

-   Data: [`identity`](#identity)
-   Details:

    The event is raised when an AiMesh node is connected to the router (if it was already tracked before).

    This event is enabled by default. Refer to the [Events](../guide/configuration/events.md) section for more info on how to enable / disable this event.
