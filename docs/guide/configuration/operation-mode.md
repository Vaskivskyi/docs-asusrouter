---
next: time-constants.md
---

# Operation mode

*Available during initial setup of the integration as well as via `Configure` option*

## Options

|                            Option|     Type|Default|                                                                                 Description|
|----------------------------------|---------|-------|--------------------------------------------------------------------------------------------|
|Enable device trackers            |`boolean`|`true` |Whether `device_tracker` entities are enabled for all the connected to your router devices  |
|Enable per-sensor update intervals|`boolean`|`false`|Allow different update intervals for different API endpoints                                |
|Number of latest connected devices|`integer`|`5`    |Number of the latest connected devices to be saved to the `sensor.{device}_latest_connected`|
