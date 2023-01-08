# Connected devices

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
|AiMesh Node|:heart:      |
</td></tr></table>

## Identity

Connected device identity is a base information about the device. It is exposed in the lists of devices and events. The following attributes are the part of device identity:

`AsusRouter >= 0.9.0`

- `mac` - MAC address of the device
- `ip` - IP address assigned to the device
- `name` - hostname of the device [as discribed here](/guide/faq/#hostname-device-tracker-name)

`AsusRouter >= 0.12.0`
- `connection_type` - type of the connection [`Wired`, `2.4 GHz`, `5 GHz`, `5 GHz-2`, `6 GHz`]
- `guest` - whether device is connected to the guest network

`AsusRouter >= 0.13.0`
- `connected` - time, when device was connected to the router for the current session. For wireless devices, provides actual connection time. For wired devices shows time, when AsusRouter noticed it online first

`AsusRouter >= 0.15.0`
- `guest_id` - id of the guest network device is connected to. Can be `1`, `2` or `3` for connected devices and `0` when not connected to a guest network

`AsusRouter >= 0.17.0`
- `node` - MAC address of AiMesh node to which device is connected

## Binary sensor / switch

### Other

#### `{device}_parental_control`

*[Refer to the Parental control section](parental-control.md#device-parental-control)*

## Device tracker

::: tip
`device_tracker` entities are created only when `device trackers` option is enabled. Refer to the [Operation mode](../guide/configuration/operation-mode.md) section for more info on how to change this option.
:::

### `{connected_device}`

`AsusRouter >= 0.1.0`

-   State: `home` / `not_home`
-   Details:

    Initial entity name is created based on the `host_name` attribute.

    #### Attributes

    -   ##### connection_time

        -   Type: `string`
        -   Details:

            This attribute is available only when the state is `true`.

    -   ##### connection_type

        -   Type: `string`
        -   Possible values: `Wired`, `2.4 GHz`, `5 GHz`, `5 GHz-2`, `6 GHz`
        -   Details:

            This attribute is available only when the state is `true`.

    -   ##### host_name

        -   Type: `string`
        -   Details:

            This attribute is available in any state.

            Hostname is defined with the following priority:

            -   device name set by user via Web UI
            -   device name as reported by the device
            -   device MAC address if nothing else is provided

    -   ##### internet_mode

        -   Type: `string`
        -   Possible values:
            -   `allow` - internet access is allowed
            -   `block` - internet access is forbiden
            -   `time` - schedule is set
        -   Details:

            This attribute is available only when the state is `true`.

    -   ##### internet

        -   Type: `boolean`
        -   Details:

            Indicates, whether device is currently has internet access. This attribute is available only when the state is `true`.

    -   ##### ip

        -   Type: `string`
        -   Details:

            This attribute is available only when the state is `true`.

    -   ##### ip_type

        -   Type: `string`
        -   Details:

            This attribute is available only when the state is `true`.

    -   ##### last_activity

        -   Type: `string`
        -   Details:

            This attribute is available only when the state is `true`.

    -   ##### mac

        -   Type: `string`
        -   Details:

            This attribute is available in any state.

    -   ##### rssi

        -   Type: `int`
        -   Details:

            This attribute is available only when the state is `true`.

    -   ##### rx_speed

        -   Type: `float`
        -   Details:

            This attribute is available only when the state is `true`.

    -   ##### source_type

        -   Type: `string`
        -   Value: `router`
        -   Details:

            This attribute is available in any state.

    -   ##### tx_speed

        -   Type: `float`
        -   Details:

            This attribute is available only when the state is `true`.

## Events

### `asusrouter_device_connected`

`AsusRouter >= 0.10.0`

-   Data: [`connected device identity`](#identity)
-   Details:

    The event is raised when a new device is connected to the router (if it was not tracked before).

    This event is enabled by default. Refer to the [Events](../guide/configuration/events.md) section for more info on how to enable / disable this event.

### `asusrouter_device_disconnected`

`AsusRouter >= 0.11.0`

-   Data: [`connected device identity`](#identity)
-   Details:

    The event is raised when a device is disconnected from the router.

    This event is disabled by default. Refer to the [Events](../guide/configuration/events.md) section for more info on how to enable / disable this event.

### `asusrouter_device_reconnected`

`AsusRouter >= 0.11.0`

-   Data: [`connected device identity`](#identity)
-   Details:

    The event is raised when a device is connected to the router (if it was already tracked before).

    This event is disabled by default. Refer to the [Events](../guide/configuration/events.md) section for more info on how to enable / disable this event.

## Sensor

### `{device}_connected_devices`

`AsusRouter >= 0.1.0`

-   Default entity state: `Enabled`
-   Type: `integer`
-   Details:

    The total number of devices connected to the router.

    #### Attributes

    -   ##### devices

        `AsusRouter >= 0.9.0`

        -   Type: `list[dict]`
        -   Details:

            The list of all the devices currently connected to the router. Each list element is a [`connected device identity`](#identity).

### `{device}_latest_connected`

`AsusRouter >= 0.13.0`

-   Default entity state: `Disabled`
-   Type: `datetime`
-   Details:

    Datetime of the latest device connected to the router.

    #### Attributes

    -   ##### list

        -   Type: `list[dict]`
        -   Details:

            The list of all the latest devices connected to the router. Each list element is a [`connected device identity`](#identity).

## Service

### `asusrouter.remove_trackers`

`AsusRouter >= 0.14.0`

-   Details:

    Allows removing `device_tracker` entities. When run, the service removes selected trackers from watching. This allows users to manually remove the entities.

    -   Only device_trackers for devices being offline can be removed from watching and from HA.
    -   If device_trackers are not removed, they will be again activated on HA restart.

    #### Attributes

    -   #### entities

        -   Type: `list[entity_id]`
        -   Details:

            List of entity ids of device_trackers.
        -   Example:

            ```yaml
            entities:
            - device_tracker.device_1
            - device_tracker.device_2
            - device_tracker.device_3
            ```

### Other

#### `device_internet_access`

*[Refer to the Parental control section](parental-control.md#device-internet-access)*
