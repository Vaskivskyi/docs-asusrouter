# Parental control

## Firmware limitations

|Firmware|          Versions|
|--------|------------------|
|Stock   |`=> 3.0.0.4.380.x`|
|Merlin  |`=> 3.0.0.4.380.x`|

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

-   Details:

    Add / change device internet access using parental control feature of the router.

#### Attributes

::: tip Priority

`mac` has higher priority, if both `mac` and `device_tracker` are entered.

:::

-   #### entity_id

    -   Type: `string`
    -   Details:

        `entity_id` of device_tracker.

-   #### mac

    -   Type: `string`
    -   Details:

        MAC address of device.

-   #### state

    -   Type: `string`
    -   Possible values:
        -   `block` - internet access is blocked
        -   `disable` - this rule is disabled
        -   `remove` - remove the rule for this device
    -   Details:

        State of the rule

-   #### name

    -   Type: `string`
    -   Details:

        Device name to be saved in parental control rules. If not selected, hostname from the entity will be used. If not selected and MAC is used, MAC will also be used as name
