---
title: "Asus BRT-AC828"
description: "Integrate your BRT-AC828 into Home Assistant with AsusRouter"
---
<!-- !!! -->
<!-- This file is auto-generated -->
<!-- !!! -->
# BRT-AC828

|BRT-AC828|Tested / reported firmware|
|---|---|
|<img src="https://asusrouter.vaskivskyi.com/devices/BRT-AC828.png" width="300">|<b>Stock:</b><li>`382_70348`</li><b>Merlin:</b><li>` `</li>|
|<li><a href="https://www.asus.com/networking-iot-servers/wifi-routers/asus-wifi-routers/brt-ac828/" rel="nofollow" target="_blank">Official webpage</a></li><li><a href="https://amzn.to/3X2wSL5" rel="nofollow sponsored" target="_blank">Buy it on Amazon [^amazon]</a></li>|<li>:green_heart: Tested to work with AsusRouter</li><li><a href="https://github.com/Vaskivskyi/ha-asusrouter/issues/new/choose" rel="nofollow" target="_blank">Add you report about this device</a></li>|

[^amazon]: As an Amazon Associate I earn from qualifying purchases. Not like I ever got anything yet (:

## Supported features

|Features|Support|Expose details|Specifications|
|--------|-------|--------------|--------------|
|[Main](/features/main.md)|:green_heart: Full|`default`||
|[AiMesh](/features/aimesh.md)|:heart: Not supported|`default`||
|[Connected devices](/features/connected-devices.md)|:green_heart: Full|`default`||
|[CPU](/features/cpu.md)|:green_heart: Full|`cpu` attributes:<br /><li>`core_{x}`, `x=[1,undefined]`</li>|undefined processor|
|[Guest WLAN](/features/guest-wlan.md)|:green_heart: Full|`default`|<li>3x `2.4 GHz`</li><li>3x `5 GHz`</li>|
|[LED](/features/led.md)|:heart: Not supported|`default`||
|[Load average](/features/load-average.md)|:yellow_heart: Merlin-only|`default`||
|[Network](/features/network.md)|:green_heart: Full|interfaces:<li>`WAN`</li><li>`USB`</li><li>`Wired`</li><li>`Bridge`</li><li>`2.4 GHz`</li><li>`5 GHz`</li>||
|[OpenVPN](/features/openvpn.md)|:green_heart: Full|`default`||
|[Parental control](/features/parental-control.md)|:green_heart: Full|`default`||
|[Port forwarding](/features/port-forwarding.md)|:green_heart: Full|`default`||
|[Ports](/features/ports.md)|:green_heart: Full|`lan_speed` attributes:<li>`lan_{x}`, `x=[1,8]`</li><li>up to `1000 Mb/s`</li>`wan_speed` attributes:<li>`wan_{x}`, `x=[0,1]`</li><li>up to `1000 Mb/s`</li>|<li>LAN aggregation</li><li>WAN aggregation</li>|
|[RAM](/features/ram.md)|:green_heart: Full|`default`|512 MB|
|[Temperature](/features/temperature.md)|:yellow_heart: Merlin-only|Merlin:<li>`2.4 GHz`</li><li>`5 GHz`</li>||
|[WAN](/features/wan.md)|:green_heart: Full|`default`|<li>Dual WAN</li>|
|[WireGuard](/features/wireguard.md)|:heart: Not supported|`default`||
|[WLAN](/features/wlan.md)|:green_heart: Full|types:<li>`2.4 GHz`</li><li>`5 GHz`</li>|speed:<li>`<= 574 Mb/s (2.4 GHz)`</li><li>`<= 1734 Mb/s (5 GHz)`</li>|


