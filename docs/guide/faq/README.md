# FAQ

[[toc]]

## AiMesh

AiMesh support development is currently on hold. Development requires an additional device. You can support purchase of a device required via donate on [Buy Me a Coffee](https://www.buymeacoffee.com/vaskivskyi/w/2147).

## AsusRouter vs AsusWRT

This list contain only some of the AsusRouter features. Due to the constant development, the full feature list should be checked [here](/features/).

<table>
<tr><th>Feature</th><th>AsusRouter</th><th>AsusWRT</th><th>Both</th></tr>
<tr><td>Connection</td><td><ul>
<li>HTTP(S) API</li>
</ul></td><td><ul>
<li>SSH / telnet</li>
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
<li>Traffic and speed for WAN, WLANs, Wired network, USB and more</li>
<li>CPU, RAM</li>
<li>OpenVPN (client, server)</li>
<li>Ports (LAN, WAN)</li>
<li>WAN</li>
<li>WLAN, guest WLAN</li>
</ul></td><td><ul>
<li>Traffic and speed for Linux interface, e.g. `eth0`</li>
</ul></td><td><ul>
<li>Load average</li>
<li>Temperature</li>
</ul></td></tr>
<tr><td>Control</td><td><ul>
<li>Device reboot & restart of router services</li>
<li>LED</li>
<li>OpenVPN (client, server)</li>
<li>WLAN, guest WLAN</li>
</ul></td><td><ul>

</ul></td><td><ul>

</ul></td></tr>
</table>

## Aura RGB

Aura RGB support development is currently on hold. Development requires an additional device. You can support purchase of a device required via donate on [Buy Me a Coffee](https://www.buymeacoffee.com/vaskivskyi/w/2147).

## Connected devices

### Hostname / device_tracker name

The following priority list is used for naming:

- Friendly name of the device (if set in the router admin panel)
- Name as reported by the connected device
- MAC address if neither of the above is known

## Entities

### LAN / WAN speed sensors become unavailable with time

This problem is connected to the device HTTP daemon - some API endpoint become unavailable (also from Web UI or official mobile app). This problem can be solved restarting HTTP daemon using the [`button.{device}_restart_http_daemon`](/features/0_main.html#device-restart-http-daemon) from HA.

- If entities became unavailable when AsusRouter was already running, sensors will recover by themself.
- If entities were unavailable from the AsusRouter load, you would need to manually reload integration.

An example automation is available here: [link](/guide/how-to/automations.html#restart-http-daemon-when-certain-api-endpoints-stop-responding)

## Guest WLAN

### Support for 5 GHz-2 and 6 GHz guest WLANs

Development requires a device supporting these frequencies. You can support purchase of a device required via donate on [Buy Me a Coffee](https://www.buymeacoffee.com/vaskivskyi/w/2147).

## Ports

### 10 Gb/s ports

10 Gb/s ports are not yet supported by AsusRouter. A compatible device is required.

### DSL ports

DSL ports are not yet supported by AsusRouter. A compatible device is required.

### SFP+ ports

SFP+ ports are not yet supported by AsusRouter. A compatible device is required.

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
