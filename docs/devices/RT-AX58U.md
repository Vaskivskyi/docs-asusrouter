---
title: "Asus RT-AX58U control from Home Assistant"
description: "Integrate your RT-AX58U into Home Assistant with AsusRouter"
---
<!-- !!! -->
<!-- This file is auto-generated -->
<!-- !!! -->
# RT-AX58U

|RT-AX58U|Tested / reported firmware|
|---|---|
|<img src="https://asusrouter.vaskivskyi.com/devices/RT-AX58U.png" width="300">|<b>Stock:</b><li>`386_49674`</li><b>Merlin:</b><li>`386.7_2`</li>|
|<li><a href="https://www.asus.com/networking-iot-servers/wifi-routers/asus-wifi-routers/rt-ax58u/" rel="nofollow" target="_blank">Official webpage</a></li><li><a href="https://amzn.to/3jHri0L" rel="nofollow sponsored" target="_blank">Buy it on Amazon [^amazon]</a></li>|<li>:green_heart: Tested to work with AsusRouter</li><li><a href="https://github.com/Vaskivskyi/ha-asusrouter/issues/new/choose" rel="nofollow" target="_blank">Add you report about this device</a></li>|

[^amazon]: As an Amazon Associate I earn from qualifying purchases. Not like I ever got anything yet (:

## Supported features

|Features|Support|Expose details|Specifications|
|--------|-------|--------------|--------------|
|[Main](/features/main.md)|:green_heart: Full|`default`||
|[Connected devices](/features/connected-devices.md)|:green_heart: Full|`default`||
|[CPU](/features/cpu.md)|:green_heart: Full|`sensor.{device}_cpu` attributes:<br /><li>`core_{x}`, `x=[1,3]`</li>|1.5 GHz tri-core processor|
|[Guest WLAN](/features/guest-wlan.md)|:green_heart: Full|`default`|<li>3x `2.4 GHz`</li><li>3x `5 GHz`</li>|
|[LED](/features/led.md)|:green_heart: Full|`default`||
|[Load average](/features/load-average.md)|:yellow_heart: Merlin-only|`default`||
|[Network](/features/network.md)|:green_heart: Full|interfaces:<li>`WAN`</li><li>`USB`</li><li>`WIRED`</li><li>`BRIDGE`</li><li>`WLAN0` (2.4 GHz)</li><li>`WLAN1` (5 GHz)</li>||
|[OpenVPN](/features/openvpn.md)|:green_heart: Full|`default`||
|[Parental control](/features/parental-control.md)|:green_heart: Full|`default`||
|[Ports](/features/ports.md)|:green_heart: Full|`lan_speed` attributes:<li>`lan_{x}`, `x=[1,4]`</li><li>up to `1000 Mb/s`</li>`wan_speed` attributes:<li>`wan_0`</li><li>up to `1000 Mb/s`</li>||
|[RAM](/features/ram.md)|:green_heart: Full|`default`|512 MB|
|[Temperature](/features/temperature.md)|:green_heart: Full|Stock:<li>`CPU`</li>Merlin:<li>`CPU`</li><li>`2.4 GHz`</li><li>`5 GHz`</li>||
|[WAN](/features/wan.md)|:green_heart: Full|`default`|<li>Dual WAN</li>|
|[WLAN](/features/wlan.md)|:green_heart: Full|types:<li>`2.4 GHz`</li><li>`5 GHz`</li>|speed:<li>`<= 574 Mb/s (2.4 GHz)`</li><li>`<= 2402 Mb/s (5 GHz)`</li>|


