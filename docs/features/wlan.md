# WLAN

## Limitations

<table><tr><td>

|Firmware|          Versions|
|--------|------------------|
|Stock   |`>= 3.0.0.4.386.x`|
|Merlin  |`>= 3.0.0.4.386.x`|
</td><td>

| Device mode|    Available|
|------------|-------------|
|Router      |:green_heart:|
|AiMesh Node |:heart:      |
|Access point|:green_heart:|
|Media bridge|:green_heart:|
</td></tr></table>

## Binary sensor / switch

::: tip Available entities
Entities are created based on the `device control` option of AsusRouter. Refer to the [Operation mode](../guide/configuration/operation-mode.md) section for more info on how to change this option.
- `false`: `binary_sensor` entities are created
- `true`: `switch` entities are created
:::

### `{device}_wireless_{type}`

`AsusRouter >= 0.7.0`

-   Default entity state: `Enabled`
-   Details:

    The current state of the wireless network `{type}`, where `{type}` is [`2_4_ghz`, `5_ghz`, `5_ghz_2`, `6_ghz`].

    #### Attributes

    -   #### api_id

        -   Type: service attribute

    -   #### api_type

        -   Type: service attribute

    -   ##### auth_method

        -   Type: `string`

    -   ##### channel

        -   Type: `integer`

    -   ##### channel_bandwidth

        -   Type: `integer`

    -   ##### chanspec

        -   Type: `integer`

    -   ##### country_code

        -   Type: `string`

    -   ##### gmode_check

    -   ##### group_key_rotation

        -   Type: `integer`

    -   ##### hidden

        -   Type: `boolean`

    -   ##### maclist_x

        -   Type: `string`

    -   ##### macmode

        -   Type: `string`

    -   ##### mbo_enable

        -   Type: `integer`

    -   ##### mfp

        -   Type: `integer`

    -   ##### mode

        -   Type: `integer`

    -   ##### password

        -   Type: `string`
        -   Details:

            This attribute is only available if the `hide passwords` option is set to `false`. Refer to the [Security](../guide/configuration/security.md) section for more info on how to change this option.

    -   ##### radius_ipaddr

        -   Type: `string`

    -   ##### radius_key

        -   Type: `string`

    -   ##### radius_port

        -   Type: `integer`

    -   ##### ssid

        -   Type: `string`

    -   ##### wpa_encryption

        -   Type: `string`

    -   ##### xbox_optimized

## Service

### `adjust_wlan`

`AsusRouter >= 0.11.0`

::: warning Control mode-only service
This service is available only if the `device control` option of AsusRouter is set to `true`. Refer to the [Operation mode](../guide/configuration/operation-mode.md) section for more info on how to change this option.
:::

-   Details:

    Allows changing WLAN settings.

    #### Attributes

    -   #### entity_id

        -   Type: `string`
        -   Details:

            `entity_id` of the WLAN.

    -   #### closed

        -   Type: `boolean`
        -   Details:

            Whether SSID should be hidden.

    -   #### password

        -   Type: `string`

    -   #### ssid

        -   Type: `string`

    -   #### state

        -   Type: `boolean`
        -   Details:

            Whether WLAN should be on.
