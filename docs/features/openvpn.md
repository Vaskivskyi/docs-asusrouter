# OpenVPN

::: danger Stock 388.x firmware
This feature is currently not available for the stock firmware with versions `388.x`. Asus has completely rebuilt VPN features making them not compatible with the current implementation of AsusRouter
:::

## Limitations

<table><tr><td>

|Firmware|          Versions|
|--------|------------------|
|Stock   |`== 3.0.0.4.386.x`|
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

### `{device}_openvpn_client_{x}`

`AsusRouter >= 0.5.0`

-   Default entity state:
    -   `Disabled` (binary sensor).
    -   `Enabled` (switch).
-   Details:

    The current state of the OpenVPN client `{x}`. Currently, all the devices have support for up to 5 clients.

    #### Attributes

    -   ##### auth_read

        -   Type: `integer`
        -   Details:

            This attribute is available only when the state is `true`.

    -   ##### error_code

        -   Type: `integer`
        -   Details:

            Error code. `0` - no errors detected. This attribute is available in any state.

    -   ##### local_ip

        -   Type: `string`
        -   Details:

            This attribute is available only when the state is `true`.

    -   ##### {type}_compress_bytes

        -   Type: `integer`
        -   Details:

            For `{type}` in [`post`, `pre`] This attribute is available only when the state is `true`.

    -   ##### {type}_decompress_bytes

        -   Type: `integer`
        -   Details:

            For `{type}` in [`post`, `pre`] This attribute is available only when the state is `true`.

    -   ##### public_ip

        -   Type: `string`
        -   Details:

            This attribute is available only when the state is `true`.

    -   ##### server_auth

        -   Type: `string`
        -   Details:

            This attribute is available only when the state is `true`.

    -   ##### server_ip

        -   Type: `string`
        -   Details:

            This attribute is available only when the state is `true`.

    -   ##### server_port

        -   Type: `integer`
        -   Details:

            This attribute is available only when the state is `true`.

    -   ##### status

        -   Type: `string`
        -   Details:

            A string status of the client. This attribute is available in any state.

    -   ##### {type}_read_bytes

        -   Type: `integer`
        -   Details:

            For `{type}` in [`tcp_udp`, `tun_tap`] This attribute is available only when the state is `true`.

    -   ##### {type}_write_bytes

        -   Type: `integer`
        -   Details:

            For `{type}` in [`tcp_udp`, `tun_tap`] This attribute is available only when the state is `true`.

    -   ##### update_time

        -   Type: `string`
        -   Details:

            String with the latest time data was updated. This attribute is available only when the state is `true`.

### `{device}_openvpn_server_{x}`

`AsusRouter >= 0.11.0`

-   Default entity state:
    -   `Disabled` (binary sensor).
    -   `Enabled` (switch).
-   Details:

    The current state of the OpenVPN server `{x}`. Currently, all the devices have support for up to 2 servers.

    #### Attributes

    -   ##### client_list

        -   Type: `list`
        -   Details:

            This attribute is available only when the state is `true`.

    -   ##### routing_table

        -   Type: `list`
        -   Details:

            This attribute is available only when the state is `true`.
