# RT-AX86U

<table>
<tr><td><img src="/devices/RT-AX86U.png" width="300"></td><td>

- [Official webpage](https://www.asus.com/networking-iot-servers/wifi-routers/asus-gaming-routers/rt-ax86u/)
- [<img src="/flags/de.svg" height="30" style="vertical-align:bottom;" alt="Germany"> Amazon Germany](https://amzn.to/3UQt8cV)
- [<img src="/flags/es.svg" height="30" style="vertical-align:bottom;" alt="Spain"> Amazon Spain](https://amzn.to/3hqq095)
- [<img src="/flags/it.svg" height="30" style="vertical-align:bottom;" alt="Italy"> Amazon Italy](https://amzn.to/3tq3lwl)
- [<img src="/flags/gb.svg" height="30" style="vertical-align:bottom;" alt="UK"> Amazon UK](https://amzn.to/3fXEpJA)
- [<img src="/flags/us.svg" height="30" style="vertical-align:bottom;" alt="USA"> Amazon US](https://amzn.to/3US0los)
</td></tr>
<tr><td>Tested / reported firmware</td><td>

Stock:
- `386_46061`, `386_48260`

Merlin:
- `386.7_2`
</td></tr>
</table>

*As an Amazon Associate I earn from qualifying purchases. Not like I ever got anything yet (:

## Supported features

|Features|Support|Expose details|Specifications|
|--------|-------|--------------|--------------|
|[Main](/features/0_main.md)|:green_heart: Full|`default`|
|[Connected devices](/features/connected-devices.md)|:green_heart: Full|`default`|
|[CPU](/features/cpu.md)|:green_heart: Full|`sensor.{device}_cpu` attributes:<li>`core_{x}`, `x=[1,4]`</li>|1.8 GHz quad-core processor|
|[Guest WLAN](/features/guest-wlan.md)|:green_heart: Full|`default`|<li>3x 2.4 GHz</li><li>3x 5 GHz</li>|
|[LED](/features/led.md)|:green_heart: Full|`default`|
|[Load average](/features/load-average.md)|:yellow_heart: Merlin-only|`default`|
|[Network](/features/network.md)|:green_heart: Full|interfaces:<li>`WAN`</li><li>`USB`</li><li>`WIRED`</li><li>`WLAN0` (2.4 GHz)</li><li>`WLAN1` (5 GHz)</li><li>`BRIDGE`</li>|
|[OpenVPN](/features/openvpn.md)|:green_heart: Full|`default`|
|[Parental control](/features/parental-control.md)|:green_heart: Full|`default`|
|[Ports](/features/ports.md)|:green_heart: Full [^wan25]|`lan_speed` attributes:<li>`lan_{x}`, `x=[1,5]`</li><li>up to `1000` each `[1,4]`</li><li>up to `2500` for `lan_5`</li>`wan_speed` attributes:<li>`wan_0`</li><li>up to `1000`</li>|<li>LAN aggregation</li><li>WAN aggregation</li>|
|[RAM](/features/ram.md)|:green_heart: Full|`default`|1 GB|
|[Temperature](/features/temperature.md)|:green_heart: Full|Stock:<li>`cpu`</li>Merlin:<li>`cpu`</li><li>`2.4 GHz`</li><li>`5 GHz`</li>|
|[WAN](/features/wan.md)|:green_heart: Full|`default`|<li>Dual WAN</li>|
|[WLAN](/features/wlan.md)|:green_heart: Full|types:<li>`2.4 GHz`</li><li>`5 GHz`</li>|<li>up to 861 Mbit/s (2.4 GHz)</li><li>up to 4804 Mbit/s (5 GHz)</li>|

[^wan25]: There are no reports yet on usage of 2.5 Gb port as WAN. Errors might occur
