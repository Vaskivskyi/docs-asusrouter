---
next: events.md
---

# Network interfaces

*Available during initial setup of the integration as well as via `Configure` option*

## Options

|           Option|          Type| Default|                                                                                                    Description|
|-----------------|--------------|--------|---------------------------------------------------------------------------------------------------------------|
|Interfaces       |`list(string)`|`[]`    |List of interfaces to monitor.<br/><br/>`WAN`, `Wired`, `Bridge`, `2.4 GHz`, `5 GHz`, `5 GHz-2`, `6 GHz`, `USB`|

## Interfaces

The list of available interfaces depends on the device model. In general, all the devices have:
- `WAN` - interface between the router and ISP.
- `WIRED` - all the wired connections via LAN ports.
- `BRIDGE` - traffic routed between different interfaces.

Wireless interfaces include (depending on device capabilities):
- `2.4 GHz` - WiFi 2.4 GHz.
- `5 GHz` - WiFi 5 GHz.
- `5 GHz-2` - WiFi 5 GHz-2.
- `6 GHz` - WiFi 6 GHz.

Other interfaces:
- `USB` - interface between router and connected mobile phone / USB modem.
