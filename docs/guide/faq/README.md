# FAQ

:::tip

This FAQ is for the HomeAssistant integration.

:::

[[toc]]

## AiMesh

AiMesh is supported on the basic level. Further development is currently in progress. Development and debugging requires a [compatible device](#when-the-feature-will-be-implemented).

## AsusRouter vs AsusWRT

This list contain only some of the AsusRouter features. Due to the constant development, the full feature list should be checked [here](/features/).

As per December 2023, the stock AsusWRT integration does already have support for the HTTP(S) API. At the same time, it is still limited to the basic features.

<table>
<tr><th>Feature</th><th>AsusRouter</th><th>AsusWRT</th><th>Both</th></tr>
<tr><td>Connection</td><td><ul>
<li>HTTP(S) API</li>
</ul></td><td><ul>
<li>SSH / telnet / HTTP(S) API</li>
</ul></td><td><ul>

</ul></td></tr>
<tr><td>Device tracking</td><td><ul>
<li>Many device attributes</li>
<li>Full list of connected devices (MAC, IP, hostname)</li>
</ul></td><td><ul>

</ul></td><td><ul>
<li>`device_trackers`</li>
<li>`connected_devices` sensor</li>
</ul></td></tr>
<tr><td>Monitoring</td><td><ul>
<li>AiMesh support</li>
<li>Traffic and speed on all network interfaces (per user selection)</li>
<li>CPU, RAM, temperatures</li>
<li>OpenVPN, WireGuard (client, server)</li>
<li>Ports (LAN, WAN, USB)</li>
<li>Internet and WAN status (+ dual WAN, aggregation)</li>
</ul></td><td><ul>
<li>Traffic and speed for Linux interface, e.g. `eth0`</li>
</ul></td><td><ul>
<li>Load average</li>
<li>Temperature</li>
</ul></td></tr>
<tr><td>Control</td><td><ul>
<li>Device reboot & restart of router services</li>
<li>LED</li>
<li>OpenVPN, WireGuard (client, server)</li>
<li>Parental control, port forwarding</li>
<li>WLAN (including guest networks)</li>
</ul></td><td><ul>

</ul></td><td><ul>

</ul></td></tr>
</table>

## Aura RGB

Aura RGB support development is currently on hold. Development and debugging requires a [compatible device](#when-the-feature-will-be-implemented).

## Connected devices

### Hostname / device_tracker name

The following priority list is used for naming:

- Friendly name of the device (if set in the router admin panel)
- Name as reported by the connected device
- MAC address if neither of the above is known

## Entities

## Migration from an old version

Some versions of AsusRouter might implement breaking changes, which will not allow migration from really old versions. In this case, you would need to manually update to a correct version still supporting migration before actually updating to the latest release.

With the release of AsusRouter [0.15.0](/log/integration.html#_0-15-0-🌡%EF%B8%8F-more-temperatures-and-fixes), migration from 0.5.1 and earlier has been removed.

### Migration sequences

- Find the step that contains your AsusRouter version (consider ranges, e.g. `0.14.0` is already included into step with versions [`0.6.0` : `0.14.3`])
- Perform all the following steps one by one

#### Steps:

1. Migrate to any in [`0.6.0` : `0.14.3`]
2. Migrate to any in [`0.15.0` : `0.16.1`]
3. Migrate to any in [`0.17.0` : `0.20.0`]
2. Migrate to the latest release

## Networks

### 6 GHz WLANs

AsusRouter has basic support of 6 GHz networks. Further development and debugging requires a [compatible device](#when-the-feature-will-be-implemented).

## Ports

AsusRouter fully suports:

- Port types: `LAN`, `WAN`, `USB`, `SFP+`, `MoCA`
- Port speeds (internet): `10`, `100`, `1000`, `2500`, `5000`, `10000` Mb/s
- Port speeds (USB): `480`, `5000`, `10000`, `20000` Mb/s

### DSL ports

DSL ports are not yet supported by AsusRouter. Development and debugging requires a [compatible device](#when-the-feature-will-be-implemented).

### PLC ports

PLC ports are not yet supported by AsusRouter. Development and debugging requires a [compatible device](#when-the-feature-will-be-implemented).

## Router

### Firmware

Firmware version for all the AsusWRT-powered devices consists of 3 parts:

-   `major`:
    -   `3.0.0.4` - all the stable stock builds and all the Merlin.
    -   `9.0.0.4` - beta versions of stock builds.
    -   Most of Merlin builds (including Gnuton) avoid showing `major` in the Web UI.
-   `minor`:
    -   a 3-digit value, e.g. `388`, `386` etc for stock FW.
    -   a double value, combining 3-digit stock `minor` and a sequence number, separetad with `.` or `_`, e.g. `380.70`, `386.8` etc.
-   `build`:
    -   a 5-digit value, e.g. `20558`.
    -   an even sequence number, e.g. `0`, `2`, `4` etc for Merlin FW.
    -   same as Merlin and `-gnuton` for Gnuton builds.

Examples:
-   `3.0.0.4.388_20558` for stock FW.
-   `3.0.0.4.386.6_2` for Merlin FW.
-   `3.0.0.4.386.04_0-gnuton` for Gnuton Merlin build.

## When the feature will be implemented?

If some of the features are missing from AsusRouter, this is only because no compatible device is available for development and testing. You can support purchase of a device required via donate on [Buy Me a Coffee](https://www.buymeacoffee.com/vaskivskyi/w/2147).
