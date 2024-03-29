# Change Log

This page contains all the changes in the last stable releases, including patch releases `x.x.V`.

## Home Assistant Integration

### 0.30.0 💻 Firmware control & quality features

`2024-03-20`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.30.0)

### 🚀 Features

- Added `color_mode` property to the LED entity to fully comply with HA 2024.3.x requirements (report [#807](https://github.com/Vaskivskyi/ha-asusrouter/issues/807))
- Added `button.{}_check_for_updates` entity
- Added support for a release note in non-AiMesh mode to support more devices
- Added support for a full release note in the update entity description in the HA UI
- Added installation of a new firmware from the HA UI (supported by any FW update that can be installed automatically from the web without a need to upload the file manually)

### 🐛 Bug fixes

- Added a check on the VPNC client data availability before processing it (report [#802](https://github.com/Vaskivskyi/ha-asusrouter/issues/802))
- Added explicit string conversion on saving parental control rules (reports [#773](https://github.com/Vaskivskyi/ha-asusrouter/issues/773), [#805](https://github.com/Vaskivskyi/ha-asusrouter/issues/805))

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.8.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.8.0)

## Library

### 1.8.0 💻 Firmware control & quality features

`2024-03-20`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.8.0)

### 🚀 Features

- Added `AsusSystem.FIRMWARE_UPGRADE` (no feedback) state to install a new firmware from web (if available). The firmware will be installed in the background and the device will reboot after the installation.
- Added `AsusSystem.FIRMWARE_CHECK` (no feedback) state to check for a new firmware.
- Added support for release note in the non-AiMesh mode to support more devices.

### 🐛 Bug fixes

- Added a check on the VPNC client data availability before processing it
- Added explicit string conversion on saving parent control rules
