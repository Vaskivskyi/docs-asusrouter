---
sidebarDepth: 1
---

# Library change log

## 1.7.0 🚀 Unbind client forcing & more system services

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

## 1.6.1 📜 Model name and identity

`2023-12-31`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.6.1)

### 🚀 Features

- Get model name for identity from onboarding (if available) to correspond to the `UI Model Name` in Web UI
- Added `product_id` to identity

## 1.6.0 🐣 Parental control & clients stability

`2023-12-31`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.6.0)

### 🚀 Features

- Added `AsusSystem.REBUILD_AIMESH` state to start AiMesh optimization
- Added `int_as_bits` and `int_as_capabilities` converters
- Added `AccessPoint` dataclass
- Added support for ports when using modern endpoint for `AsusData.PORTS`:
    - Monitor the main (default, no arguments), selected (providing `device = MAC_ADDRESS`) or all (`device = "all"`) AiMesh node(s)
    - `PortSpeed` members: `LINK_10` (10 Mb/s), `LINK_5000` (5 Gb/s)
    - `USBSpeed` members: `USB_20` (480 Mb/s), `USB_30` (5 Gb/s), `USB_31` (10 Gb/s), `USB_32` (20 Gb/s)
    - `PortType` members:
        - `MOCA`, `SFPP` (implemented)
        - `POWERLINE` (planned)
    - `PortCapability` members: `WAN`, `LAN`, `GAME`, `PLC`, `WAN2`, `WAN3`, `SFPP`, `USB`, `MOBILE`, `WANLAN`, `MOCA`, `IPTV_BRIDGE`, `IPTV_VOIP`, `IPTV_STB`, `DUALWAN_SECONDARY`, `DUALWAN_PRIMIRY`
- Added support for ports when using legacy endpoint for `AsusData.PORTS`:
    - `PortSpeed` members: `LINK_10` (10 Mb/s), `LINK_5000` (5 Gb/s), `LINK_10000` (10 Gb/s)
- Added parental control rule features:
    - Allowed `ParentalControlRule` to be sent as a state to `AsusRouter.async_set_state`
    - Added `PCRuleType` enum with members:
        - `DISABLE`, `BLOCK`, `TIME` corresponding to the rule types - using any of them as the rule type will add or update the rule
        - `REMOVE` - using this as a type will remove the rule for a corresponding MAC address
- Switched to creation of a new session if the old one is not available anymore

### 🐛 Bug fixes

- Fixed issue on the client status detection when AiMesh is supported but no nodes assigned

### 🔨 Other changes

- Moved and refactored all the parental control rules processing to be in `asusrouter.modules.parental_control` module

### 📚 Documentation

- Confirmed support for the new device
    - `GT-AX11000 Pro` / `388.24198`
    - `RT-AX88U Pro` / `388.4_0` (Merlin)
    - `Zen WiFi ET8` / `388.23759`
    - `Zen WiFi Pro ET12` / `388.23013`
- Confirmed support for the new FW versions which were not reported before:
    - `4G-AX55U` / `380.8102`
    - `GT-AX11000` / `388.4_0` (Merlin)
    - `RT-AC88U` / `386.12_2`
    - `RT-AX55` / `386.52041`
    - `RT-AX56U` / `388.1_0` (Merlin), `388.2_2` (Merlin)
    - `RT-AX58U` / `388.4_0` (Merlin)
    - `RT-AX86U` / `388.4_0` (Merlin)
    - `TUF-AX5400` / `388.23285`, `388.4_0` (Merlin)

## 1.5.0 💻 Clients tracking & multiple instances improvements

`2023-12-24`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.5.0)

### 🚀 Features

- Improved client status detection

### 🐛 Bug fixes

- Fixed issue with data mix in cache when multiple instances are used

## 1.4.0 🚨 Tests and updates to workflows

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

## 1.3.0 🔨 More tests and improvements

`2023-12-03`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.3.0)

### 🚀 Features

- Added `get_arguments` converter
- Added support for `l2pt`, `pptp` and `surfshark` VPNs as part of `vpnc` module
- Added WLAN rename when indeces are not in the expected order (e.g. `6ghz` is present, but not `5ghz2`)
- Added `AsusBlockAll` state for the general internet access block

### 🐛 Bug fixes

- Switched to keyword arguments in `AsusRouter.keep_state` call

### 🚨 Testing

- Added tests for:
    - `asusrouter.modules.client`
    - `asusrouter.modules.led`
    - `asusrouter.modules.openvpn`
    - `asusrouter.modules.parental_control`
    - `asusrouter.modules.port_forwarding`
    - `asusrouter.modules.state`
    - `asusrouter.modules.system`
    - `asusrouter.modules.vpnc`
    - `asusrouter.modules.wireguard`
    - `asusrouter.modules.wlan`

### 🔨 Other changes

- Refactored:
    - All the modules listed above in the testing section
    - `AsusRouter.async_set_state` to use `kwargs`

### 📚 Documentation

- Added [Python Library section](/library/) with a short manual on how to use the library

## 1.2.0 💻 Force clients update, services & more

`2023-11-23`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.2.0)

### 🚀 Features

- Added `AsusSystem.UPDATE_CLIENTS` state and compatible service
- Added `force_clients` possibility on each `AsusData.CLIENTS` queue
- Added runtime-available `set_force_clients()` method for setting both state and wait time of the feature
- Added new `AsusSystem` states: `RESTART_CHPASS`, `RESTART_DNSMASQ`, `RESTART_LEDS`, `RESTART_OPENVPND`, `RESTART_SAMBA`, `RESTART_TIME`, `RESTART_USB_IDLE`, `RESTART_VPNC`, `RESTART_WGS`, `STOP_OPENVPND`, `STOP_VPNC`
- Added new `.tools.converters`: `safe_timestamp_to_utc`, `safe_utc_to_timestamp`, `safe_utc_to_timestamp_milli`
- Added `AsusData.SPEEDTEST` and `AsusData.SPEEDTEST_RESULT`

### 🚨 Testing

- Added tests for `asusrouter.modules.service`

### 🔨 Other changes

- Improved exceptions messages

### 🐣 GitHub

- Updated CI workflow to be more modular and allow parallel unit- and device-testing
- Added testing with `Python 3.12`

## 1.1.2 🩹

`2023-11-21`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.1.1)

### 🐛 Bug fixes

- Fixed reboot flag not being reset
- Fixed connection type code

### 🚨 Testing

- Added tests for the connection module

### 📚 Documentation

- Updated supported devices

## 1.1.1 🩹

`2023-11-20`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.1.1)

### 🐛 Bug fixes

- Removed WireGuard and VPNC data maps for version below 388

### 🔨 Other changes

- Fixed typo in logging

## 1.1.0 🌍 VPNs, WANs and tests

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

<details>
<summary>1.1.0b2</summary>

`2023-11-17`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.1.0b2)

### 🐛 Bug fixes

- Fixed missing arguments on state setting

</details>

<details>
<summary>1.1.0b1</summary>

`2023-11-13`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.1.0b1)

### 🐛 Bug fixes

- Fixed missing values for OpenVPN client
- Fixed unsafe dict pop

</details>

<details>
<summary>1.1.0b0</summary>

`2023-11-12`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.1.0b0)

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

- Blocked request attempts on closed session

</details>

## 1.0.5 🕐 Error loop fix

`2023-11-05`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.5)

### 🐛 Bug fixes

- Fixed an infinite loop with authorization error

## 1.0.4 🐛 More legacy bugfixes

`2023-11-04`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.4)

### 🐛 Bug fixes

- Fixed bug with 5 GHz clients for older devices

## 1.0.3 🐛 `380` - `384` bugfixes

`2023-11-04`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.3)

### 🐛 Bug fixes

- Fixed issue for `380` - `384` FW versions

### 🐣 GitHub

- Updated build and release workflow

## 1.0.2 🚀 Better features for older devices

`2023-11-03`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.2)

### 🚀 Features

- Added parsing for the legacy format of `Update Clients` endpoint

### 🐛 Bug fixes

- Improved temperature reading code to prevent errors with older FW

## 1.0.1 🐛 Bugfix / FW 380

`2023-11-02`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.1)

### 🐛 Bug fixes

- Fixed identity error on 380 FW

## 1.0.0 🔨 New core

`2023-11-01`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.0)

This release brings a fully-rebuild core of the library, making it faster and simpler.

### 💥 Breaking

- Python `3.11+` is now required

### 🚀 Features

- Added error codes 9, 10 and 11 reported by device
- Improved FW processing for different generations
- Improved clients monitoring
- Added USB WAN data recovery when interface is off
- Added network speed values on first empty run
- Added proper timeout when login blocked

### 🐛 Bug fixes

- Improved JSON parsing
- Added UnicodeDecodeError ignore on reading content

### 📚 Documentation

- Confirmed support for device / firmware:
    - `DSL-AC68U` / `386.50117`
    - `RT-AC66U B1` / `386.51255`
    - `RT-AC86U` / `386.49709`
    - `RT-AC88U` / `386.48260`, `386.5_0`
    - `RT-AX58U` / `388.22237`
    - `RT-AX86U Pro` / `388.23565`
    - `RT-AX88U` / `388.24198`, `388.2_0`, `388.4_0`
    - `RT-AXE7800` / `388_22068`
    - `TUF-AX5400` / `388.22525`
    - `TUF-AX6000` / `388.32432`
    - `TUF-AX3000 V2` / `388.23785`
    - `ZenWiFi AX (XT8)` / `388.23285`
    - `ZenWiFi XT9` / `388_23285`
