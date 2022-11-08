---
next: events.md
---

# Network interfaces

*Available during initial setup of the integration as well as via `Configure` option*

## Options

|           Option|          Type| Default|                                                                                                   Description|
|-----------------|--------------|--------|--------------------------------------------------------------------------------------------------------------|
|Interfaces       |`list(string)`|`[]`    |List of interfaces to monitor.<br/><br/>`WAN`, `WIRED`, `BRIDGE`, `WLAN0`, `WLAN1`, `WLAN2`, `WLAN3`, `USB`   |
|Units for speed  |`string`      |`Mbit/s`|Units for all the speed sensonrs<br/><br/>`bit/s`, `kbit/s`, `Mbit/s`, `Gbit/s`, `B/s`, `kB/s`, `MB/s`, `GB/s`|
|Units for traffic|`string`      |`GB`    |Units for all the traffic sensors.<br/><br/>`bit`, `kbit`, `Mbit`, `Gbit`, `B`, `kB`, `MB`, `GB`              |

## Interfaces

The list of available interfaces depends on the device model. In general, all the devices have:
- `WAN` - interface between the router and ISP.
- `WIRED` - all the wired connections via LAN ports.
- `BRIDGE` - traffic routed between different interfaces.

Wireless interfaces include (depending on device capabilities):
- `WLAN0` - WiFi 2.4 GHz.
- `WLAN1` - WiFi 5 GHz.
- `WLAN2` - WiFi 5 GHz-2.
- `WLAN3` - WiFi 6 GHz.

Other interfaces:
- `USB` - interface between router and connected mobile phone / USB modem.

## Units of measurement

All the derivatives for units of measurement are calculated in the same way as Asus firmware is doing it. This means, that:
- `1 kB = 1 024 B`
- `1 MB = 1 024 kB = 1 048 576 B`
- `1 GB = 1 024 MB = 1 048 576 kB = 1 073 741 824 B`

This ensures that user experience when using AsusRouter is exactly the same as when using native Web UI.

::: warning Warning (HA Statistics)
If you change units of measurement when the values were already saved to HA statistics, it will complane about unit change.
To fix this, you would need to remove the old data in `Developer Tools - Statistics`
:::
