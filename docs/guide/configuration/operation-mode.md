---
next: time-constants.md
---

# Operation mode

*Available during initial setup of the integration as well as via `Configure` option*

## Options

|                            Option|     Type|Default|                                                                               Description|
|----------------------------------|---------|-------|------------------------------------------------------------------------------------------|
|Enable device trackers            |`boolean`|`true` |Whether `device_tracker` entities are enabled for all the connected to your router devices|
|Enable device control             |`boolean`|`false`|Enable `switch` and `light` entities                                                      |
|Enable per-sensor update intervals|`boolean`|`false`|Allow different update intervals for different API endpoints                              |
