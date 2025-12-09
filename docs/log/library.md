# Library change log

## 🐞 1.21.3 Bug fix for a bug fix

`2025-12-09`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.21.3)

### 🚀 Features

- Added exception protection for device data processing. The library should not crash fully on faulty data received from a single endpoint.

### 🐞 Bug Fixes

- Fixed complex JS variables parsing

### 🐣 GitHub & Development

- Extended unit tests for the JS parser

## 🐞 1.21.1 Bug Fix for new FW

`2025-12-07`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.21.1)

### 🐞 Bug Fixes

- Fixed issue with onboarding endpoint parsing (client data) for the new firmware versions

## 🌐 1.21.0 AiMesh network monitoring

`2025-09-03`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.21.0)

### 🚀 Features

- Added traffic monitoring for the AiMesh network via `asusrouter.modules.traffic`
  - Data rates can be independently monitored for any of the nodes (routers) connected to the AiMesh
  - Wired traffic (fronthaul or backhaul) via `ARTrafficSourceEthernet`
  - Wireless fronthaul (per band via its MAC address) via `ARTrafficSourceWiFi`
  - Wireless backhaul via `ARTrafficSourceBackhaul`
- Added units (and corresponding converters) for data and data rate in `asusrouter.tools.units`

### 🐞 Bug Fixes

- Improved error handling on data fetch

### 🧑‍🚀 v2 preparation

- Added new data fetch flow
  - Already in use for traffic monitoring (directly accessible through v1 calls)
- Added universal source module in `asusrouter.modules.source` for handling data sources

### 🐣 GitHub & Development

- Added new exception type `AsusRouterRequestFormatError`
- Other code improvements
- Bumped `ruff` to `0.12.11`

## 🐞 1.20.1 Bug fix

`2025-08-23`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.20.1)

### 🐞 Bug Fixes

- Fixed bug in HA sensors list generation on raw data failure

## ⚙️ 1.20.0 Instance configurations

`2025-08-23`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.20.0)

### 🚀 Features

- Added instance configuration management to `AsusRouter` class via `ARInstanceConfig` class in `asusrouter.config` module
- Added enum tools with `FromIntMixin` and `FromStrMixin` mixins to standardise value-to-enum conversion
- Added `DeviceOperationMode` definition in `asusrouter.modules.device`
- Added `dict_to_request` writer

### 🧑‍🚀 v2 preparation

This release starts implementing non-breaking changes to the library in preparation for the v2 upgrade. Such changes will be gradually introduced and will not be directly available without an explicit call.

- Added `ARCallableRegistry` via `asusrouter.registry`
- Added `MacAddress` class in `asusrouter.tools.identifiers`
- Added masking tools for `MacAddress` instances in `asusrouter.tools.masking`

### 🐣 GitHub & Development

- Bumped `codecov-action` to `5.5.0`

## ⚙️ 1.19.0 Connection configurations

`2025-08-16`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.19.0)

### 🚀 Features

- Added `asusrouter.tools.security` module and `ARSecurityLevel` level definition
- Added universal configuration manager base `ARConfigBase` and key base `ARConfigKeyBase`
- Added `ARConfigKey.DEBUG_PAYLOAD` configuration key to define which data can be exposed in the debug logging. Defaults to `ARSecurityLevel.DEFAULT`, which will automatically block any sensitive data (from the known sensitive endpoints + login endpoint)
- Added configuration management for connection settings in `asusrouter.connection_config` module
  - `ARConnectionConfig` connection configuration class
  - `ARConnectionConfigKey` connection configuration parameters
  - Configurations are set per instance of the `Connection` class and can be passed during `AsusRouter`, direct `Connection` initialisation, or dynamically set during runtime.
- Added fallback features for the connection:
  - To be enabled manually via `ARConnectionConfigKey.ALLOW_FALLBACK`
  - Fallback matrix follows:
    - HTTPS @ Custom port -> HTTPS @ Default port
    - HTTPS @ Default port -> HTTP @ Default port (if `ARConnectionConfigKey.STRICT_SSL` is `false`, default)
    - HTTP @ Custom port -> HTTP @ Default port
    - HTTP @ Default port -> HTTPS @ Default port (if `ARConnectionConfigKey.ALLOW_UPGRADE_HTTP_TO_HTTPS` is `true`, default)
  - Loop protection via tracking which fallback was already used
- Added new exceptions to the `asusrouter.error` module (SSL certificate errors, fallback errors)

### 🐞 Bug Fixes

- Fixed issue when SSL certificate verification relied on the provided session configs rather than AR settings

### 🐣 GitHub & Development

- Improved and extended unit tests for the `asusrouter.connection` module
- Bumped `uv.lock` dependencies:
  - `aiohttp` to `3.12.15`
  - `pytest-cov` to `6.2.1`
  - `ruff` to `0.12.9`

### 📖 Documentation

- Updated documentation for the latest features

## 🌡️ 1.18.2 More config controls

`2025-08-13`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.18.2)

### 🚀 Features

- Added `ARConfigKey.NOTIFIED_OPTIMISTIC_TEMPERATURE` value for custom control of the optimistic temperature notification warning

### 🐣 GitHub & Development

- Bumped `uv.lock` dependencies:
  - `pytest` to `8.4.1`
  - `pytest-asyncio` to `1.1.0`
  - `pydantic` to `2.11.7`
  - `mypy` to `1.17.1`
  - `urllib3` to `2.5.0`

## ⛏️ 1.18.1 Development release

`2025-08-12`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.18.1)

### 🐣 GitHub & Development

- Added `py.typed` and marked project as typed
- Bumped and fixed setuptools to `80.9.0`
- Updated deprecated fields in package description
- Updated dependabot configuration
- Bumped CI dependencies

## 🛠️ 1.18.0 DDNS, robust boottime and many dev improvements

`2025-08-10`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.18.0)

### 🚀 Features

- Added DDNS support via `AsusData.DDNS`
  - Full compatibility with Asus DDNS servers (`.com` and `.cn`)
- Added `ARConfigKey` enum to help with configuration management. This is now the only supported way to get and set `ARConfig` keys
- Added robust boot time measurement to fix 1-second jitter. Optional, can be set via `ARConfigKey.ROBUST_BOOTTIME` (default: `False`)

### 🐣 GitHub & Development

- Added `ruff` configurations
- Added `pre-commit` hooks
- Added CI check on `ruff`
- Improved the `CONTRIBUTING.md` documentation

### 📦 Dependencies

- Bumped `ruff` to `0.12.8`
- Set `pre-commit` to `4.3.0`

## 1.17.0 🐣 ARConfig, node control and optimistic temperature

`2025-08-03`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.17.0)

### 🚀 Features

- Added global `ARConfig` configuration to store settings during the library usage
- Added optimistic temperature conversion for automatic data fix when it is obviously wrong (controlled via the corresponding config)
- Added single AiMesh node reboot via `AsusSystem.NODE_REBOOT` state (requires MAC of the target node)
- Added config control for target node via `AsusSystem.NODE_CONFIG_CHANGE` state (requires MAC of the target node and config data)

## 1.16.0 🐣 AsusSystem members and GitHub Actions

`2025-08-02`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.16.0)

### 🚀 Features

- Added new `AsusSystem` members for onboarding (`AIMESH_ADD_NODE`, `AIMESH_ONBOARDING`)
- Adjusted FW parsing warning to be triggered only once for each unique FW string

### 🐣 GitHub

- Added Python 3.13 to the testing matrix
- Improved Actions workflows for better safety and performance
- Removed the release drafter, which was not in use

## 1.15.1 ⌚ Uptime fix

`2025-07-27`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.15.1)

### 🐛 Bug fixes

- Fixed issue when `uptime` was not updated if the boottime was not changed

## 1.15.0 ⌚ Uptime

`2025-07-27`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.15.0)

### 🚀 Features

- Added `uptime` value to the `AsusData.BOOTTIME` state corresponding to the device uptime in seconds

## 1.14.2 🐛 Bugfix for those with no `PORT_STATUS` endpoint

`2025-06-14`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.14.2)

### 🐛 Bug fixes

- Fixed aiohttp error when non-existing `PORT_STATUS` endpoint was queued with `POST` method

## 1.14.1 🐛 aiohttp fix

`2025-06-13`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.14.1)

### 🐛 Bug fixes

- Fixed issue with aiohttp version `3.12.7+`, cookie quoting and some devices

## 1.14.0 📡 Improved connection

`2025-03-23`

#### [→ 🐙GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.14.0)

### 🚀 Features

- Improved connection logic
- Improved fallbacks for the failed connection

### 🔨 Other changes

- Switched to `uv` and `ruff` for the development environment
- Refactored the connection module

### 📦 Dependencies

- Bumped development dependencies

## 1.13.1 🐛 Bugfixes

`2024-11-10`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.13.1)

### 🐛 Bug fixes

- Fixed erroneous logging for some old firmware versions

## 1.13.0 ☎️ DSL support and connection improvements

`2024-09-07`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.13.0)

### 🚀 Features

- Added new `AsusData.DSL` state (by @GaryHuang-ASUS)
- Added DSL endpoint check for the identity
- Improved session management in the connection module
- Improved initialization of the connection module

### 📦 Dependencies

- Bumped `python-dateutil` to `2.9.0.post0`

## 1.12.2 💻 Firmware handling improvements

`2024-08-28`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.12.2)

### 🚀 Features

- Improved beta flag handling in firmware strings

## 1.12.1 🐛 Bugfixes

`2024-08-28`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.12.1)

### 🐛 Bug fixes

- Fixed blocking call when fetching Aura data on non-Aura devices

## 1.12.0 🚨 Aura support & firmware improvements

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

## 1.11.0 Ping-ping & JSON fixes

`2024-05-28`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.11.0)

### 🚀 Features

- Added possibility to force request type for aiohttp with `asusrouter.const.RequestType`. `POST` and `GET` are available
- Added custom `request` argument support for `AsusRouter.async_get_data` (any dict).
- Added `AsusData.PING` state to to ping a device or get the last ping result (request is required to get result)
  - `request = {"type": $type$, "target": $domain$}`
  - `type` is one of: `0` (get data), `1` (ping, loss, jitter), `2` (ping only)
  - `target` can be a domain or IP address

### 🐛 Bug fixes

- Fixed JSON parsing for missing values

### 📚 Documentation

- Updated supported devices

## 1.10.0 🔨 AiMesh, threading & logging

`2024-05-21`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.10.0)

### 🚀 Features

- Import modules in a separate thread to avoid blocking the main thread
- Improved logging on the exceptions
- Added support for AiMesh reboot via `AsusSystem.AIMESH_REBOOT` state
- Moved AiMesh rebuild to `AsusSystem.AIMESH_REBUILD` state

### ⚰️ Deprecation

- Marked `AsusSystem.REBUILD_AIMESH` as deprecated. The new `AsusSystem.AIMESH_REBUILD` should be used instead. There is no yet defined version of removal, but its usage will cause a warning in the logs.

## 1.9.0 🤖 Merlin 388.7 support

`2024-05-01`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.9.0)

### 🚀 Features

- Added support for the new sysinfo layout with Merlin `388.7`

## 1.8.0 💻 Firmware control & quality features

`2024-03-20`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.8.0)

### 🚀 Features

- Added `AsusSystem.FIRMWARE_UPGRADE` (no feedback) state to install a new firmware from web (if available). The firmware will be installed in the background and the device will reboot after the installation.
- Added `AsusSystem.FIRMWARE_CHECK` (no feedback) state to check for a new firmware.
- Added support for release note in the non-AiMesh mode to support more devices.

### 🐛 Bug fixes

- Added a check on the VPNC client data availability before processing it
- Added explicit string conversion on saving parent control rules

## 1.7.0 🚀 Unbind client forcing & more system services

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
