# Parental control

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

## Binary sensor / switch

::: tip Available entities
Entities are created based on the `device control` option of AsusRouter. Refer to the [Operation mode](../guide/configuration/operation-mode.md) section for more info on how to change this option.
- `false`: `binary_sensor` entities are created
- `true`: `switch` entities are created
:::

### `{device}_parental_control`

`AsusRouter >= 0.12.0`

-   Default entity state: `Enabled`
-   Details:

    The current state of the parental control.

    #### Attributes

    -   #### list

        -   Type: `list(dict())`
        -   Details:

            The list of all the devices currently connected to the router. Each list element is a dictionary with 3 pairs key-value:
            -   `mac` - MAC address
            -   `name` - hostname of the device
            -   `state` - state of the rule

                Possible values:
                -   `block` - internet access is blocked
                -   `disable` - this rule is disabled

## Service

### `device_internet_access`

`AsusRouter >= 0.12.0`

::: warning Control mode-only service
This service is available only if the `device control` option of AsusRouter is set to `true`. Refer to the [Operation mode](../guide/configuration/operation-mode.md) section for more info on how to change this option.
:::

-   Details:

    Add / change device internet access using parental control feature of the router.

    #### Attributes

    ::: tip Priority
    The first in this priority list is used, if many are provided:
    - `devices`
    - `entities`
    :::

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

    -   #### devices

        -   Type: `list[dict]`
        -   Details: List of dictionaries with `mac` and `name` keys.
        -   Example:
            ```yaml
            devices:
            - mac: 01:23:45:67:89:01
                name: Device/1
            - mac: 01:23:45:67:89:02
            - mac: 01:23:45:67:89:03
                name: Device/3
            ```

    -   #### state

        -   Type: `string`
        -   Possible values:
            -   `block` - internet access is blocked
            -   `disable` - this rule is disabled
            -   `remove` - remove the rule for this device
        -   Details:

            State of the rule

    <details>
    <summary>entity_id</summary>

    ::: danger Removed
    `AsusRouter >= 0.12.0 | < 0.15.0`

    Use [`entities`](#entities) instead
    :::

    -   Type: `string`
    -   Details:

        `entity_id` of device_tracker.
    </details>

    <details>
    <summary>mac</summary>

    ::: danger Removed
    in `0.15.0`

    Use [`devices`](#devices) instead
    :::

    -   Type: `string`
    -   Details:

        MAC address of device.
    </details>

    <details>
    <summary>name</summary>

    ::: danger Removed
    in `0.15.0`

    Use [`devices`](#devices) instead
    :::

    -   Type: `string`
    -   Details:

        Device name to be saved in parental control rules. If not selected, hostname from the entity will be used. If not selected and MAC is used, MAC will also be used as name
    </details>
