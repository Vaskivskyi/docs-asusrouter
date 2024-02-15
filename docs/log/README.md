# Change Log

This page contains all the changes in the last stable releases, including patch releases `x.x.V`.

## Home Assistant Integration

### 0.28.0 🎛️ Control, choose, filter

`2024-01-06`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.28.0)

### 🚀 Features

- Added option to filter connected devices (clients) (disabled by default)
    - `No filter` - all the devices are monitored. Device trackers are created (if enabled) + events are fired.
    - `Include only` - only the selected clients are monitored. Note, that in this mode, event `asusrouter_device_connected` cannot work to notify about new devices.
    - `Exclude devices` - all the devices are monitored, except the selected ones.
- Added option to create HA device when user enables corresponding `device_tracker` entity (disabled by default) (report [#48](https://github.com/Vaskivskyi/ha-asusrouter/issues/48))
- Added automatic device removal when no entity is left for the device (or when `device_tracker` is disabled)
- Added option to remove `devices` attribute from the `connected_devices` sensor (disabled by default). This will help users with 100s of clients to avoid HA errors (report [#628](https://github.com/Vaskivskyi/ha-asusrouter/issues/628))
- Removed the blank line in the configuration flow (report [#752](https://github.com/Vaskivskyi/ha-asusrouter/issues/752))

### 📖 Translations

- Updated Ukrainian translation for the new configuration options

## Library

### 1.7.0 🚀 Unbind client forcing & more system services

`2024-02-15`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.7.0)

### 🚀 Features

- Added more system services (`AsusSystem.{x}`). Refer to the code for the full list
- Added handling of the unknown port types in the legacy endpoint
- Removed `force_clients` from clients poll (non-breaking)
- Added FW release note when available


### 🐛 Bug fixes

- Fixed issue with 

### 📦 Dependencies

- Fixed `pytest` to `7.4.4` until `pytest-asyncio` becomes compatible
