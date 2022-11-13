# RT-AC52U B1

<table>
<tr><td><img src="/devices/RT-AC52UB1.png" width="300"></td><td>

- [Official webpage](https://www.asus.com/me-en/networking-iot-servers/wifi-routers/asus-wifi-routers/rt-ac52u-b1/)
- [<img src="/flags/de.svg" height="30" style="vertical-align:bottom;" alt="Germany"> Amazon Germany](https://amzn.to/3E5KnQA)
- [<img src="/flags/es.svg" height="30" style="vertical-align:bottom;" alt="Spain"> Amazon Spain](https://amzn.to/3GbdMeN)
- [<img src="/flags/it.svg" height="30" style="vertical-align:bottom;" alt="Italy"> Amazon Italy](https://amzn.to/3tpYLyc)
- [<img src="/flags/gb.svg" height="30" style="vertical-align:bottom;" alt="UK"> Amazon UK](https://amzn.to/3AbJnt0)
- [<img src="/flags/us.svg" height="30" style="vertical-align:bottom;" alt="USA"> Amazon US](https://amzn.to/3fV88TD)
</td></tr>
<tr><td>Tested / reported firmware</td><td>

Stock:
- ` `

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
|[LED](/features/led.md)|:heart: Not supported|`default`|
|[Load average](/features/load-average.md)|:yellow_heart: Merlin-only|`default`|
|[Network](/features/network.md)|:green_heart: Full|interfaces:<li>`WAN`</li><li>`USB`</li><li>`WIRED`</li><li>`WLAN0` (2.4 GHz)</li><li>`WLAN1` (5 GHz)</li><li>`BRIDGE`</li>|
|[OpenVPN](/features/openvpn.md)|:green_heart: Full|`default`|
|[Parental control](/features/parental-control.md)|:green_heart: Full|`default`|
|[Ports](/features/ports.md)|:green_heart: Full|`lan_speed` attributes:<li>`lan_{x}`, `x=[1,4]`</li><li>up to `100` each</li>`wan_speed` attributes:<li>`wan_0`</li><li>up to `100`</li>||
|[RAM](/features/ram.md)|:green_heart: Full|`default`|64 MB|
|[Temperature](/features/temperature.md)|:yellow_heart: Merlin-only|Stock:<li>` `</li>Merlin:<li>`2.4 GHz`</li><li>`5 GHz`</li>|
|[WAN](/features/wan.md)|:green_heart: Full|`default`||
|[WLAN](/features/wlan.md)|:green_heart: Full|types:<li>`2.4 GHz`</li><li>`5 GHz`</li>|<li>up to 300 Mbit/s (2.4 GHz)</li><li>up to 433 Mbit/s (5 GHz)</li>|
