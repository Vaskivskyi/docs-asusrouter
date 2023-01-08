# Guest WLAN

## Limitations

<table><tr><td>

|Firmware|          Versions|
|--------|------------------|
|Stock   |`>= 3.0.0.4.386.x`|
|Merlin  |`>= 3.0.0.4.386.x`|
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

### `{device}_guest_{type}_{x}`

`AsusRouter >= 0.11.0`

-   Default entity state: `Enabled`
-   Details:

    The current state of the guest wireless network `{type}`, where `{type}` is [`2_4_ghz`, `5_ghz`, `5_ghz_2`, `6_ghz`] number `{x}`. Most of devices have 3 guest networks of each type.

    #### Attributes

    -   #### api_id

        -   Type: service attribute

    -   #### api_type

        -   Type: service attribute

    -   #### aimesh_sync

        -   Type: `boolean`
        -   Details:

            Whether guest network is broadcasted from each AiMesh node.

    -   ##### auth_method

        -   Type: `string`

    -   ##### bw_limit

        -   Type: `boolean`
        -   Details:

            Whether bandwidth limit is enabled.

    -   ##### bw_limit_download

        -   Type: `integer`
        -   Units: `kbit/s`
        -   Details:

            Download bandwidth limit. `0` - unlimited.

    -   ##### bw_limit_upload

        -   Type: `integer`
        -   Units: `kbit/s`
        -   Details:

            Upload bandwidth limit. `0` - unlimited.

    -   ##### expire

        -   Type: `integer`
        -   Units: `s`
        -   Details:

            Enable guest network for a limited amount of time. `0` indicates feature being off.

    -   ##### expire_in

        -   Type: `integer`
        -   Units: `s`
        -   Details:

            When the network will be disabled (if `expire` is set).

    -   ##### hidden

        -   Type: `boolean`

    -   ##### lan_access

        -   Type: `boolean`

    -   ##### maclist

        -   Type: `string`

    -   ##### macmode

        -   Type: `string`
        -   Possible values:
            -   `allow` - allow access only for devices in maclist
            -   `deny` - deny access for devices in maclist
            -   `disabled` - disable mac filter
        -   Details:

            State of the MAC filter

    -   ##### password

        -   Type: `string`
        -   Details:

            This attribute is only available if the `hide passwords` option is set to `false`. Refer to the [Security](../guide/configuration/security.md) section for more info on how to change this option.

    -   ##### ssid

        -   Type: `string`

    -   ##### wpa_encryption

        -   Type: `string`

## Service

### `adjust_wlan`

`AsusRouter >= 0.11.0`

-   Details:

    Allows changing guest WLAN settings.

    #### Attributes

    -   #### entity_id

        -   Type: `string`
        -   Details:

            `entity_id` of the guest WLAN.

    -   ##### bw_enabled

        -   Type: `boolean`
        -   Details:

            Whether bandwidth limit is enabled.

    -   ##### bw_dl

        -   Type: `integer`
        -   Units: `kbit/s`
        -   Details:

            Download bandwidth limit. `0` - unlimited.

    -   ##### bw_ul

        -   Type: `integer`
        -   Units: `kbit/s`
        -   Details:

            Upload bandwidth limit. `0` - unlimited.

    -   #### closed

        -   Type: `boolean`
        -   Details:

            Whether SSID should be hidden.

    -   ##### expire

        -   Type: `integer`
        -   Units: `s`
        -   Details:

            Enable guest network for a limited amount of time. `0` indicates feature being off.

    -   ##### lan_access

        -   Type: `boolean`

    -   #### password

        -   Type: `string`

    -   #### ssid

        -   Type: `string`

    -   #### state

        -   Type: `boolean`
        -   Details:

            Whether WLAN should be on.

    -   #### sync_node

        -   Type: `boolean`
        -   Details:

            Whether guest network is broadcasted from each AiMesh node.
