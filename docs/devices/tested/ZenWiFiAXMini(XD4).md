# ZenWiFi AX Mini (XD4)

<table>
<tr><td><img src="/devices/ZenWiFiAXMini(XD4).png" width="300"></td><td>

- [Official webpage](https://www.asus.com/networking-iot-servers/whole-home-mesh-wifi-system/zenwifi-wifi-systems/asus-zenwifi-ax-mini-xd4/)
- [<img src="/flags/de.svg" height="30" style="vertical-align:bottom;" alt="Germany"> Amazon Germany](https://amzn.to/3UG4vjC)
- [<img src="/flags/es.svg" height="30" style="vertical-align:bottom;" alt="Spain"> Amazon Spain](https://amzn.to/3hsG5Lt)
- [<img src="/flags/it.svg" height="30" style="vertical-align:bottom;" alt="Italy"> Amazon Italy](https://amzn.to/3ULO6d6)
- [<img src="/flags/gb.svg" height="30" style="vertical-align:bottom;" alt="UK"> Amazon UK](https://amzn.to/3g33gvI)
- [<img src="/flags/us.svg" height="30" style="vertical-align:bottom;" alt="USA"> Amazon US](https://amzn.to/3XbF6Qv)
</td></tr>
<tr><td>Tested / reported firmware</td><td>

Stock:
- `386_48790`, `386_49599`

Merlin:
- ` `
</td></tr>
</table>

*As an Amazon Associate I earn from qualifying purchases. Not like I ever got anything yet (:

## Supported features

|Features|Support|Expose details|Specifications|
|--------|-------|--------------|--------------|
|[Main](/features/0_main.md)|:green_heart: Full|`default`|
|[Connected devices](/features/connected-devices.md)|:green_heart: Full|`default`|
|[CPU](/features/cpu.md)|:green_heart: Full|`sensor.{device}_cpu` attributes:<li>`core_1`</li>||
|[Guest WLAN](/features/guest-wlan.md)|:green_heart: Full|`default`|<li>3x 2.4 GHz</li><li>3x 5 GHz</li>|
|[LED](/features/led.md)|:green_heart: Full|`default`|
|[Load average](/features/load-average.md)|:yellow_heart: Merlin-only|`default`|
|[Network](/features/network.md)|:green_heart: Full|interfaces:<li>`WAN`</li><li>`USB`</li><li>`WIRED`</li><li>`WLAN0` (2.4 GHz)</li><li>`WLAN1` (5 GHz)</li><li>`BRIDGE`</li>|
|[OpenVPN](/features/openvpn.md)|:green_heart: Full|`default`|
|[Parental control](/features/parental-control.md)|:green_heart: Full|`default`|
|[Ports](/features/ports.md)|:green_heart: Full|`lan_speed` attributes:<li>`lan_1`</li><li>up to `1000`</li>`wan_speed` attributes:<li>`wan_0`</li><li>up to `1000`</li>||
|[RAM](/features/ram.md)|:green_heart: Full|`default`|256 MB|
|[Temperature](/features/temperature.md)|:green_heart: Full|Stock:<li>`cpu`</li>Merlin:<li>`cpu`</li><li>`2.4 GHz`</li><li>`5 GHz`</li>|
|[WAN](/features/wan.md)|:green_heart: Full|`default`||
|[WLAN](/features/wlan.md)|:green_heart: Full|types:<li>`2.4 GHz`</li><li>`5 GHz`</li>|<li>up to 574 Mbit/s (2.4 GHz)</li><li>up to 1201 Mbit/s (5 GHz)</li>|
