# WAN

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
|Access point|:heart:      |
|Media bridge|:heart:      |
</td></tr></table>

## Binary sensor

### `{device}_wan`

`AsusRouter >= 0.3.0`

-   Default entity state: `Enabled`
-   Details:

    The status of WAN connection.

    #### Attributes

    -   ##### dns

        -   Type: `string`
        -   Details:

            DNS servers IP addresses as a single string, separated with ` ` (space).

    -   ##### gateway

        -   Type: `string`
        -   Details:

            Gateway IP address.

    -   ##### ip

        -   Type: `string`
        -   Details:

            WAN IP address.

    -   ##### ip_type

        -   Type: `string`
        -   Details:

            Method of obtaining IP address.

    -   ##### mask

        -   Type: `string`
        -   Details:

            WAN mask.

    -   ##### private_subnet

        -   Type: `integer`
        -   Details:

            An integer value whether WAN is connected to private subnet (`1`) or not (`0`).

    -   ##### xdns

        `AsusRouter >= 0.18.0`

        -   Type: `string`
        -   Details:

            Secondary DNS servers IP addresses as a single string, separated with ` ` (space).

    -   ##### xgateway

        `AsusRouter >= 0.18.0`

        -   Type: `string`
        -   Details:

            Secondary gateway IP address.

    -   ##### xip

        `AsusRouter >= 0.18.0`

        -   Type: `string`
        -   Details:

            Secondary WAN IP address.

    -   ##### xip_type

        `AsusRouter >= 0.18.0`

        -   Type: `string`
        -   Details:

            Secondary method of obtaining IP address.

    -   ##### xmask

        `AsusRouter >= 0.18.0`

        -   Type: `string`
        -   Details:

            Secondary WAN mask.

## Sensor

### `{device}_wan_ip`

`AsusRouter >= 0.3.0`

-   Default entity state: `Disabled`
-   Details:

    The IP address assigned to the WAN interface.

    #### Attributes

    -   ##### dns

        -   Type: `string`
        -   Details:

            DNS servers IP addresses as a single string, separated with ` ` (space).

    -   ##### gateway

        -   Type: `string`
        -   Details:

            Gateway IP address.

    -   ##### ip_type

        -   Type: `string`
        -   Details:

            Method of obtaining IP address.

    -   ##### mask

        -   Type: `string`
        -   Details:

            WAN mask.

    -   ##### private_subnet

        -   Type: `integer`
        -   Details:

            An integer value whether WAN is connected to private subnet (`1`) or not (`0`).

    -   ##### xdns

        `AsusRouter >= 0.18.0`

        -   Type: `string`
        -   Details:

            Secondary DNS servers IP addresses as a single string, separated with ` ` (space).

    -   ##### xgateway

        `AsusRouter >= 0.18.0`

        -   Type: `string`
        -   Details:

            Secondary gateway IP address.

    -   ##### xip

        `AsusRouter >= 0.18.0`

        -   Type: `string`
        -   Details:

            Secondary WAN IP address.

    -   ##### xip_type

        `AsusRouter >= 0.18.0`

        -   Type: `string`
        -   Details:

            Secondary method of obtaining IP address.

    -   ##### xmask

        `AsusRouter >= 0.18.0`

        -   Type: `string`
        -   Details:

            Secondary WAN mask.

### Other

#### `{device}_wan_download`

*[Refer to the Network section](network.md#device-interface-download)*

#### `{device}_wan_download_speed`

*[Refer to the Network section](network.md#device-interface-download-speed)*

#### `{device}_wan_upload`

*[Refer to the Network section](network.md#device-interface-upload)*

#### `{device}_wan_upload_speed`

*[Refer to the Network section](network.md#device-interface-upload-speed)*
