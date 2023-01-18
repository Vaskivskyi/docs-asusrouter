---
title: "Asus RT-AX88U control from Home Assistant"
description: "Integrate your RT-AX88U into Home Assistant with AsusRouter"
---
<!-- !!! -->
<!-- This file is auto-generated -->
<!-- !!! -->
# RT-AX88U

|RT-AX88U|Tested / reported firmware|
|---|---|
|<img src="https://asusrouter.vaskivskyi.com/devices/RT-AX88U.png" width="300">|<b>Stock:</b><li>`386_45934`</li><li>`386_48631`</li><b>Merlin:</b><li>`386.5_2`</li><li>`386.8_0`</li><li>`388.1_0`</li>|
|<li><a href="https://www.asus.com/networking-iot-servers/wifi-routers/asus-gaming-routers/rt-ax88u/" rel="nofollow" target="_blank">Official webpage</a></li><li><a href="https://amzn.to/3i2VfYu" rel="nofollow sponsored" target="_blank">Buy it on Amazon [^amazon]</a></li>|<li>:green_heart: Tested to work with AsusRouter</li><li>:green_heart: Available for tests</li><li><a href="https://github.com/Vaskivskyi/ha-asusrouter/issues/new/choose" rel="nofollow" target="_blank">Add you report about this device</a></li>|

[^amazon]: As an Amazon Associate I earn from qualifying purchases. Not like I ever got anything yet (:

## Supported features

|Features|Support|Expose details|Specifications|
|--------|-------|--------------|--------------|
|[Main](/features/main.md)|:green_heart: Full|`default`||
|[AiMesh](/features/aimesh.md)|:green_heart: Full|`default`||
|[Connected devices](/features/connected-devices.md)|:green_heart: Full|`default`||
|[CPU](/features/cpu.md)|:green_heart: Full|`sensor.{device}_cpu` attributes:<br /><li>`core_{x}`, `x=[1,4]`</li>|1.8 GHz quad-core processor<li>`BCM490x - Cortex A53 ARMv8 revision 0`</li>|
|[Guest WLAN](/features/guest-wlan.md)|:green_heart: Full|`default`|<li>3x `2.4 GHz`</li><li>3x `5 GHz`</li>|
|[LED](/features/led.md)|:green_heart: Full|`default`||
|[Load average](/features/load-average.md)|:yellow_heart: Merlin-only|`default`||
|[Network](/features/network.md)|:green_heart: Full|interfaces:<li>`WAN`</li><li>`USB`</li><li>`Wired`</li><li>`Bridge`</li><li>`2.4 GHz`</li><li>`5 GHz`</li>||
|[OpenVPN](/features/openvpn.md)|:green_heart: Full|`default`||
|[Parental control](/features/parental-control.md)|:green_heart: Full|`default`||
|[Ports](/features/ports.md)|:green_heart: Full|`lan_speed` attributes:<li>`lan_{x}`, `x=[1,8]`</li><li>up to `1000 Mb/s`</li>`wan_speed` attributes:<li>`wan_0`</li><li>up to `1000 Mb/s`</li>|<li>LAN aggregation</li><li>WAN aggregation</li>|
|[RAM](/features/ram.md)|:green_heart: Full|`default`|1 GB|
|[Temperature](/features/temperature.md)|:green_heart: Full|Stock:<li>`CPU`</li>Merlin:<li>`CPU`</li><li>`2.4 GHz`</li><li>`5 GHz`</li>||
|[WAN](/features/wan.md)|:green_heart: Full|`default`|<li>Dual WAN</li>|
|[WLAN](/features/wlan.md)|:green_heart: Full|types:<li>`2.4 GHz`</li><li>`5 GHz`</li>|speed:<li>`<= 1148 Mb/s (2.4 GHz)`</li><li>`<= 4804 Mb/s (5 GHz)`</li>|


