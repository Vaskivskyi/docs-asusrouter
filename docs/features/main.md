# Main

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
|AiMesh Node |:green_heart:|
|Access point|:green_heart:|
|Media bridge|:green_heart:|
</td></tr></table>

## Button

### `{device}_reboot`

`AsusRouter >= 0.11.0`

-   Default entity state: `Enabled`
-   Details:

    Reboot the device.

### `{device}_restart_http_daemon`

`AsusRouter >= 0.11.0`

-   Default entity state: `Disabled`
-   Details:

    Restart HTTP daemon.

### `{device}_restart_firewall`

`AsusRouter >= 0.11.0`

-   Default entity state: `Disabled`
-   Details:

    Restart firewall.

### `{device}_restart_wireless`

`AsusRouter >= 0.11.0`

-   Default entity state: `Disabled`
-   Details:

    Restart wireless modules.

## Sensor

### `{device}_boot_time`

-   Default entity state: `Disabled`
-   Type: `string`
-   Details:

    The last time the router was rebooted.

## Update

### `{device}_firmware_update`

`AsusRouter >= 0.11.0`

-   Default entity state: `Enabled`
-   Details:

    Shows whether there is a newer firmware version available for your device. Only stable versions are considered.

## Deprecated

### `asusrouter.service_reboot`

::: danger Removed
`AsusRouter >= 0.7.0 | < 0.12.0`
:::

-   Details:

    This service allows rebooting ther device.
