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

#### 0.24.2 (`2023-11-21`)

- **[Bugfix]** Fixed reboot flag not being reset, causing LED to turn off-on repeatedly (report [#709](https://github.com/Vaskivskyi/ha-asusrouter/issues/709))
- **[Bugfix]** Fixed issue with all devices marked `wired` and losing wireless attributes, e.g. `guest`, `rssi` and else (report [#719](https://github.com/Vaskivskyi/ha-asusrouter/issues/719), [#C674](https://community.home-assistant.io/t/custom-component-asusrouter-integration/416111/674?u=vaskivskyi))
- **[Dependency]** Bumped `asusrouter` library to [`1.1.2`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.1.2)

## Library

### 1.4.0 🚨 Tests and updates to workflows

`2023-12-21`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.4.0)

### 🚀 Features

- Added WLAN rename (`5ghz2 -> 6ghz`) for `RT-AXE95Q` (`ZenWiFi ET8`)

### 🚨 Testing

- Added tests for:
    - `asusrouter.modules.endpoint.onboarding`

### 🐣 GitHub

- Updated code coverage CI workflow
- Bumped `actions/setup-python` to `5.0.0`
- Bumped `actions/download-artifact` to `4.0.0`, `4.1.0`
- Bumped `actions/upload-artifact` to `4.0.0`
