# Port forwarding

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
|AiMesh Node |:heart:      |
|Access point|:heart:      |
|Media bridge|:heart:      |
</td></tr></table>

## Binary sensor / switch

::: tip Available entities
Entities are created based on the `device control` option of AsusRouter. Refer to the [Operation mode](../guide/configuration/operation-mode.md) section for more info on how to change this option.
- `false`: `binary_sensor` entities are created
- `true`: `switch` entities are created
:::

### `{device}_port_forwarding`

`AsusRouter >= 0.19.0`

-   Default entity state: `Enabled`
-   Details:

    The current state of the port forwarding.

    #### Attributes

    -   #### list

        -   Type: `list(dict())`
        -   Details:

            The list of all the port forwarding rules. Each list element is a dictionary with 6 pairs key-value:
            -   `name` - name of the rule (optional)
            -   `ip` - state of the rule
            -   `port` - port of the local device (optional)
            -   `protocol` - communication protocol (`TCP`, `UDP`, `BOTH`)
            -   `ip_external` - allow connection only from specific IP address
            -   `port_external` - external port for connection

## Service

### `port_forwarding`

`AsusRouter >= 0.19.0`

::: warning Control mode-only service
This service is available only if the `device control` option of AsusRouter is set to `true`. Refer to the [Operation mode](../guide/configuration/operation-mode.md) section for more info on how to change this option.
:::

-   Details:

    Set / remove port forwarding rules.

    #### Attributes

    ::: tip Priority
    The first in this priority list is used, if many are provided for `remove_ip` action:
    - `ips`
    - `ip`
    :::

    -   #### action

        -   Type: `string`
        -   Possible values:
            -   `set` - internet access is blocked
            -   `remove` - remove rules with selected parameters
            -   `remove_ip` - remove all the rules for this IP address(es). Only available via YAML
        -   Details:

            Action to be performed

    -   #### ips

        -   Type: `list[string]`
        -   Details:

            List of IP addresses to apply `remove_ip` action. This parameter is available only via YAML
        -   Example:

            ```yaml
            ips:
            - 192.168.1.12
            - 192.168.1.77
            ```

    -   #### ip

        -   Type: `string`
        -   Details:

            Local IP address

    -   #### protocol

        -   Type: `string`
        -   Possible values:
            -   `TCP`
            -   `UDP`
            -   `BOTH`
        -   Details:

            Communication protocol. Can be both upper and lowercase

    -   #### port

        -   Type: `integer`
        -   Details:

            Local port

    -   #### ip_external

        -   Type: `string`
        -   Details:

            Limit connection to the only external IP address

    -   #### port_external

        -   Type: `string`
        -   Details:

            External port(s) for connection. Can be single ports separated with comma `,`, ranges using colon `:`, or their combinations

    -   #### name

        -   Type: `string`
        -   Details:

            Rule name to be used in the rules list
