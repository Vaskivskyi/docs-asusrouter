---
next: network-interfaces.md
---

# Time constants

*Available during initial setup of the integration as well as via `Configure` option*

## Options

|                Option|     Type|Default|                                                                                                                                                                                                          Description|
|----------------------|---------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Caching time          |`integer`|`5`    |Time to cache data from the API endpoints<br/>Units:`seconds`                                                                                                                                                        |
|Device trackers update|`integer`|`30`   |Time interval for devices monitoring. This value is used for both `device_tracker` entities, as well as `connected devices` sensor<br/>Units:`seconds`                                                               |
|Consider home         |`integer`|`45`   |Time to consider device connected after the last `home` state.<br/>Units: `seconds`<br/>Refer to the section [Consider home](#consider-home)                                                                         |
|Firmware data         |`integer`|`21600`|Interval to update the `update` entity<br/>Units: `seconds`<br/>Default value is equal `6 hours`                                                                                                                     |
|Entities update       |`integer`|`30`   |Interval to update all the other entities<br/>Units: `seconds`<br/>Available if `Operation mode / Enable per-sensor update intervals` is set to `False`                                                              |
|{Type} data           |`integer`|`30`   |Interval to update data fom a single {type}<br/>Units: `seconds`<br/>Available if `Operation mode / Enable per-sensor update intervals` is set to `True`<br/>Refer to the section [Entities update](#entities-update)|

## Consider home

This value controls how fast does device tracker change state to `not home` after the last `home` state was recorder.

- `consider home <= device tracker update`, device tracker will get `not home` state as soon as device state is checked and it is not connected.
- `consider home > device tracker update`, `not home` state will be assigned only after device is offline for longer than `consider home`.

## Entities update

Currently AsusRouter supports the following data types, which are polled separately:

- CPU
- Guest WLAN
- Light
- Misc
- Network stat
- Ports
- RAM
- Sysinfo
- Temperature
- VPN
- WAN
- WLAN

Each of these types support setting polling interval.
