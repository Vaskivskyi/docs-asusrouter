---
title: "Asus ROG Rapture GT-BE98 | GT-BE25000"
description: "Integrate your GT-BE98 into Home Assistant with AsusRouter"
---
<!-- !!! -->
<!-- This file is auto-generated -->
<!-- !!! -->
# ROG Rapture GT-BE98 | GT-BE25000

|ROG Rapture GT-BE98|Tested / reported firmware|
|---|---|
|<img src="https://asusrouter.vaskivskyi.com/devices/GT-BE98.png" width="300">|<b>Stock:</b><li>`102_34372`</li><b>Merlin:</b><li>` `</li>|
|<li><a href="https://rog.asus.com/networking/rog-rapture-gt-be98-model/" rel="nofollow" target="_blank">Official webpage</a></li><li><a href="https://amzn.to/3vGztgz" rel="nofollow sponsored" target="_blank">Buy it on Amazon [^amazon]</a></li>|<li>:green_heart: Tested to work with AsusRouter</li><li><a href="https://github.com/Vaskivskyi/ha-asusrouter/issues/new/choose" rel="nofollow" target="_blank">Add you report about this device</a></li>|

[^amazon]: As an Amazon Associate I earn from qualifying purchases. Not like I ever got anything yet (:

## Supported features

|Features|Support|Expose details|Specifications|
|--------|-------|--------------|--------------|
|[Main](/features/main.md)|:green_heart: Full|`default`||
|[AiMesh](/features/aimesh.md)|:green_heart: Full|`default`||
|[Connected devices](/features/connected-devices.md)|:green_heart: Full|`default`||
|[CPU](/features/cpu.md)|:green_heart: Full|`cpu` attributes:<br /><li>`core_{x}`, `x=[1,4]`</li>|2.6 GHz quad-core processor|
|[Guest WLAN](/features/guest-wlan.md)|:green_heart: Full|`default`|<li>3x `2.4 GHz`</li><li>3x `5 GHz`</li><li>3x `5 GHz-2`</li><li>3x `6 GHz`</li>|
|[LED](/features/led.md)|:green_heart: Full|`default`||
|[Load average](/features/load-average.md)|:yellow_heart: Merlin-only|`default`||
|[Network](/features/network.md)|:green_heart: Full|interfaces:<li>`WAN`</li><li>`USB`</li><li>`Wired`</li><li>`Bridge`</li><li>`2.4 GHz`</li><li>`5 GHz`</li><li>`5 GHz-2`</li><li>`6 GHz`[^6ghz]</li>||
|[OpenVPN](/features/openvpn.md)|:green_heart: Full|`default`||
|[Parental control](/features/parental-control.md)|:green_heart: Full|`default`||
|[Port forwarding](/features/port-forwarding.md)|:green_heart: Full|`default`||
|[Ports](/features/ports.md)|:green_heart: Full|`lan_speed` attributes:<li>`lan_{x}`, `x=[1,4]`</li><li>up to `2500 Mb/s`</li><li>`lan_5`</li><li>up to `1000 Mb/s`</li><li>`lan_6`</li><li>up to `10000 Mb/s`</li>`wan_speed` attributes:<li>`wan_0`</li><li>up to `10000 Mb/s`</li>|<li>LAN aggregation</li>|
|[RAM](/features/ram.md)|:green_heart: Full|`default`|2 GB|
|[Temperature](/features/temperature.md)|:green_heart: Full|Stock:<li>`CPU`</li>Merlin:<li>`CPU`</li><li>`2.4 GHz`</li><li>`5 GHz`</li><li>`5 GHz-2`</li><li>`6 GHz`</li>||
|[WAN](/features/wan.md)|:green_heart: Full|`default`|<li>Dual WAN</li>|
|[WireGuard](/features/wireguard.md)|:green_heart: Full|`default`||
|[WLAN](/features/wlan.md)|:green_heart: Full|types:<li>`2.4 GHz`</li><li>`5 GHz`</li><li>`5 GHz-2`</li><li>`6 GHz`</li>|speed:<li>`<= 1376 Mb/s (2.4 GHz)`</li><li>`<= 5762 Mb/s (5 GHz)`</li><li>`<= 5762 Mb/s (5 GHz-2)`</li><li>`<= 11525 Mb/s (6 GHz)`</li>|


[^6ghz]: AsusRouter has basic support of 6 GHz networks. A compatible device is required for tests. [Details](/guide/faq/#_6-ghz-wlans)
