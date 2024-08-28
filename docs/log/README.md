# Change Log

This page contains all the changes in the last stable releases, including patch releases `x.x.V`.

## Home Assistant Integration

### 0.33.0 🚨 Aura support & firmware improvements

`2024-08-28`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.33.0)

### 🚀 Features

- Added sensor with the number of clients connected to guest networks via `sensor.{}_connected_guestnetwork_devices` (by @GaryHuang-ASUS)
- Added Aura RGB support:
  - `light.{}_aura` entity for the global colour/brightness control (as single-zone light)
  - `light.{}_aura_zone_{}` for the per-zone colour/brightness control (disabled by default to avoid cluttering the UI when not needed)
  - full effects support (`Gradient`, `Static`, `Breathing`, `Evolution`, `Rainbow`, `Wave`, `Marquee`)
- Improved handling of client entities
- Switched to the new firmware backend:
  - better support for different formats on FW branches (Stock, Merlin, Gnuton)
  - improved version comparison
  - added `update.{}_firmware_update_beta` entity for the beta firmware updates (disabled by default)
- Changed the default update time for the `update` entities to 10 minutes (can be changed in the integration settings in the same way as before)
- Updated the `asusrouter_device_disconnected` event to show the last known `guest`, `guest_id` and `connection_type` attributes

### 🐛 Bug fixes

- Fixed issue with some entities being assigned to AsusRouter before their native integrations
- Fixed issue with the `update` entity showing:
  - lower beta version as an update
  - version from a different branch (e.g. Stock when on Merlin)
  - `_rog` and non-`_rog` FW versions are treated as different (Merlin, Gnuton)
- Fixed issue with integration blocked by unsafe type conversion on startup

### 📚 Documentation

- Added AsusRouter logo
- Updated supported devices

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.12.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.12.0)

### 🩹 Patches

#### 0.33.1

`2024-08-28`

**[Bugfix]** Fixed blocking call when fetching Aura data on non-Aura devices
**[Dependency]** Bumped `asusrouter` library to [`1.12.1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.12.1)

#### 0.33.2

`2024-08-28`

**[Feature]** Improved logging of errors when creating entities
**[Bugfix]** Fixed issue with device info when creating client devices
**[Bugfix]** Fixed issue with beta flag handling in firmware strings
**[Dependency]** Bumped `asusrouter` library to [`1.12.2`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.12.2)

## Library

### 1.12.0 🚨 Aura support & firmware improvements

`2024-08-28`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.12.0)

### 🚀 Features

- Added Aura RGB support (`aura` module)
- Upgraded `firmware` module
- Migrated `AsusSystem` update and upgrade members to the new format (non-breaking change)

### 🐛 Bug fixes

- Fixed unsafe int conversion in the `onboarding` module

### 🚨 Testing

- Added mypy type checking settings

### 🔨 Other changes

- Fixed typo in the `AsusSystem` enum (by @TheCjw)
- Removed code duplication in the generic `read` function of endpoints

### 🐣 GitHub

- Added templates for issue reports

### 📚 Documentation

- Added better code example to the README (by @tomer-w)
- Added AsusRouter logo
- Updated supported devices

### 🩹 Patches

#### 1.12.1

`2024-08-28`

**[Bugfix]** Fixed blocking call when fetching Aura data on non-Aura devices

#### 1.12.2

`2024-08-28`

**[Feature]** Improved beta flag handling in firmware strings
