# Change Log

This page contains all the changes in the last stable releases, including patch releases `x.x.V`.

## Home Assistant Integration

### 0.29.0 💻 Clients stability and better control

`2024-02-15`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.29.0)

### 🚀 Features

- Moved `force_clients_update` to a separate button instead of regular call
- Added `restart_wired` button
- Added release notes to the update entity
- Removed SSDP discovery since it was causing issues for some user with re-discovery of the device (reports [#581](https://github.com/Vaskivskyi/ha-asusrouter/issues/581), [#741](https://github.com/Vaskivskyi/ha-asusrouter/issues/741))
- Added `rebuild_aimesh` button

### 🐛 Bug fixes

- Fixed issue with AsusRouter interfering with Web UI on too regular client forcing (report [#760](https://github.com/Vaskivskyi/ha-asusrouter/issues/760))
- Added capabilities check for the `device_tracker` entities before querying them (report [#785](https://github.com/Vaskivskyi/ha-asusrouter/issues/785))

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.7.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.7.0)

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

- Fixed issue with unknown port types in the legacy endpoint

### 📦 Dependencies

- Fixed `pytest` to `7.4.4` until `pytest-asyncio` becomes compatible
