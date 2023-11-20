# Change Log

This page contains all the changes in the last stable releases, including patch releases `x.x.V`.

## Home Assistant Integration

### 0.24.0 🌍 VPNs, WANs and stability

`2023-11-19`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.24.0)

### 💥 Breaking

- Implemented changes in `wan` binary sensor. Refer to the `Features` section for details

### 🚀 Features

- Added support for VPN Fusion (VPN clients, stock FW `388+`)
- Added support for WireGuard (clients + server) (stock and Merlin FW `388+`) (report [#594](https://github.com/Vaskivskyi/ha-asusrouter/issues/594))
- Added support for OpenVPN (clients + servers) (stock FW `388+`) (report [#470](https://github.com/Vaskivskyi/ha-asusrouter/issues/470))
- Added support for secondary WAN and changed WAN sensors (report [#603](https://github.com/Vaskivskyi/ha-asusrouter/issues/603))
    - Binary sensor `wan` (`wan_secondary`)
    - Sensors `wan_ip` and `wan_ip_extra` (`wan_ip_secondary` and `wan_ip_secondary_extra`)
- Added `internet` binary sensor to show the general state of the device internet connection (and IP address as an attribute of the sensor)
- Added `dualwan` binary sensor
- Added `wan_aggregation` binary sensor

### 🐛 Bug fixes

- Fixed error in historic data calculation
- Other minor fixes in data processing
- Fixed issue with blocked possibility to reload integration
- Fixed diagnostics module
- Fixed missing arguments on state setting (report [#710](https://github.com/Vaskivskyi/ha-asusrouter/issues/710))
- Fixed network sensors interval
- Fixed missing values for OpenVPN client
- Fixed missing temperature sensors
- Fixed unsafe dictionary operation

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.1.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.1.0)

### 🩹 Patches

#### 0.24.1 (`2023-11-20`)

- **[Bugfix]** Fixed issue with WireGuard phantom data appearing on FW below 388 (report [#715](https://github.com/Vaskivskyi/ha-asusrouter/issues/715))
- **[Dependency]** Bumped `asusrouter` library to [`1.1.1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.1.1)

## Library

### 1.1.0 🌍 VPNs, WANs and tests

`2023-11-19`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.1.0)

### 🚀 Features

- Added support for VPN Fusion (stock `388+`)
- Added support for OpenVPN (stock `388+`)
- Added support for WireGuard (stock and merlin `388+`)
- Improved HA converters (+ new `convert_to_ha_data` for proper flattening data)
- Added start-up calculated values as `None` (CPU)
- Added data drop for cases of the same data on multiple endpoints
- Added `dump` tools for logging and dumping replies of the device
- Small improvements over the code
- Improved logging on connection failure
- Added Dual WAN support
- Added WAN Aggregation support

### 🐛 Bug fixes

- Fixed error in historic data calculation
- Other minor fixes in data processing
- Blocked request attempts on closed session
- Fixed missing values for OpenVPN client
- Fixed unsafe dict pop
- Fixed missing arguments on state setting

### 🚨 Testing

- Added unit tests for tools: cleaners, converters, readers, writers
- Added unit tests for some endpoint modules
- Added full device test for RT-AX88U / Merlin / 388

### 🔨 Other changes

- Minor improvements to logging and code stability

### 🐣 GitHub

- Added testing workflow for all incomming PRs and pushes to the dev / main branch

### 🩹 Patches

#### 1.1.1 (`2023-11-20`)

- **[Bugfix]** Removed WireGuard and VPNC data maps for version below 388
- **[Other]** Fixed typo in logging
