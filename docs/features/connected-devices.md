# Connected devices

## Firmware limitations

|Firmware|          Versions|
|--------|------------------|
|Stock   |`=> 3.0.0.4.380.x`|
|Merlin  |`=> 3.0.0.4.380.x`|

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

-   Data:
    -   mac
    -   ip
    -   name
    -   connection_type (`>= 0.12.0`)
    -   guest (`>= 0.12.0`)
-   Details:

    The event is raised when a new device is connected to the router (if it was not tracked before).

    This event is enabled by default. Refer to the [Events](../guide/configuration/events.md) section for more info on how to enable / disable this event.

### `asusrouter_device_disconnected`

`AsusRouter >= 0.11.0`

-   Data:
    -   mac
    -   ip
    -   name
    -   connection_type (`>= 0.12.0`)
    -   guest (`>= 0.12.0`)
-   Details:

    The event is raised when a device is disconnected from the router.

    This event is disabled by default. Refer to the [Events](../guide/configuration/events.md) section for more info on how to enable / disable this event.

### `asusrouter_device_reconnected`

`AsusRouter >= 0.11.0`

-   Data:
    -   mac
    -   ip
    -   name
    -   connection_type (`>= 0.12.0`)
    -   guest (`>= 0.12.0`)
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

    -   Type: `list(dict())`
    -   Details:

        The list of all the devices currently connected to the router. Each list element is a dictionary with 3 pairs key-value:
        -   `mac` - MAC address
        -   `ip` - IP address
        -   `name` - hostname of the device
        -   `connection_type` - type of connection (`Wired`, `2.4 GHz`, `5 GHz`) (`>= 0.12.0`)
        -   `guest` - connected to a guest network (`>= 0.12.0`)

## Service

### Other

#### `device_internet_access`

*[Refer to the Parental control section](parental-control.md#device-internet-access)*
