---
title: "Asus RT-BE96U control from Home Assistant"
description: "Integrate your RT-BE96U into Home Assistant with AsusRouter"
---
<!-- !!! -->
<!-- This file is auto-generated -->
<!-- !!! -->
# RT-BE96U

|RT-BE96U|Tested / reported firmware|
|---|---|
|<img src="https://asusrouter.vaskivskyi.com/devices/RT-BE96U.png" width="300">|<b>Stock:</b><li>` `</li><b>Merlin:</b><li>` `</li>|
|<li><a href="https://www.asus.com/networking-iot-servers/wifi-routers/asus-gaming-routers/rt-be96u/" rel="nofollow" target="_blank">Official webpage</a></li><li><a href="https://amzn.to/3vJu8oD" rel="nofollow sponsored" target="_blank">Buy it on Amazon [^amazon]</a></li>|<li>:yellow_heart: This device has not been tested yet, but should work with AsusRouter</li><li><a href="https://github.com/Vaskivskyi/ha-asusrouter/issues/new/choose" rel="nofollow" target="_blank">Add you report about this device</a></li>|

[^amazon]: As an Amazon Associate I earn from qualifying purchases. Not like I ever got anything yet (:

## Supported features

|Features|Support|Expose details|Specifications|
|--------|-------|--------------|--------------|
|[Main](/features/main.md)|:green_heart: Full|`default`||
|[AiMesh](/features/aimesh.md)|:green_heart: Full|`default`||
|[Connected devices](/features/connected-devices.md)|:green_heart: Full|`default`||
|[CPU](/features/cpu.md)|:green_heart: Full|`sensor.{device}_cpu` attributes:<br /><li>`core_{x}`, `x=[1,4]`</li>|2.6 GHz quad-core processor|
|[Guest WLAN](/features/guest-wlan.md)|:green_heart: Full|`default`|<li>3x `2.4 GHz`</li><li>3x `5 GHz`</li><li>3x `6 GHz`</li>|
|[LED](/features/led.md)|:green_heart: Full|`default`||
|[Load average](/features/load-average.md)|:yellow_heart: Merlin-only|`default`||
|[Network](/features/network.md)|:green_heart: Full|interfaces:<li>`WAN`</li><li>`USB`</li><li>`WIRED`</li><li>`BRIDGE`</li><li>`WLAN0` (2.4 GHz)</li><li>`WLAN1` (5 GHz)</li><li>`WLAN3` (6 GHz)[^6ghz]</li>||
|[OpenVPN](/features/openvpn.md)|:green_heart: Full|`default`||
|[Parental control](/features/parental-control.md)|:green_heart: Full|`default`||
|[Ports](/features/ports.md)|:green_heart: Full|`lan_speed` attributes:<li>`lan_{x}`, `x=[1,4]`</li><li>up to `1000 Mb/s`</li><li>`lan_{x}`, `x=[5,6]`</li><li>up to `10000 Mb/s`</li>`wan_speed` attributes:<li>`wan_0`</li><li>up to `1000 Mb/s`</li>|<li>LAN aggregation</li><li>WAN aggregation</li>|
|[RAM](/features/ram.md)|:green_heart: Full|`default`|2 GB|
|[Temperature](/features/temperature.md)|:green_heart: Full|Stock:<li>`CPU`</li>Merlin:<li>`CPU`</li><li>`2.4 GHz`</li><li>`5 GHz`</li><li>`6 GHz`</li>||
|[WAN](/features/wan.md)|:green_heart: Full|`default`|<li>Dual WAN</li>|
|[WLAN](/features/wlan.md)|:green_heart: Full|types:<li>`2.4 GHz`</li><li>`5 GHz`</li><li>`6 GHz`</li>|speed:<li>`<= 1376 Mb/s (2.4 GHz)`</li><li>`<= 5762 Mb/s (5 GHz)`</li><li>`<= 11525 Mb/s (6 GHz)`</li>|


[^2gb]: There are no reports yet on usage of 2.5 Gb/s speeds on WAN. Errors might occur. [Details](/guide/faq/#_2-5-gb-s-ports)
[^10gb]: 10 Gb/s speeds are not yet supported by AsusRouter on either LAN or WAN. Errors might occur. [Details](/guide/faq/#_10-gb-s-ports)
[^6ghz]: 6 GHz networks were not yet tested. A compatible device is required for tests. [Details](/guide/faq/#_6-ghz-wlans)