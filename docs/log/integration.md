# Integration change log

## 🛠️ 0.39.0 Backend improvements and compatibility with HA 2025-9-x

`2025-09-03`

### 🚀 Features

- Unpinned `asusrouter` dependency from the exact version to `greater than` to ensure compatibility with any future HA version

### 🐞 Bug Fixes

- Improved error handling on data fetch

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.21.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.21.0)

### 🐣 GitHub & Development

- Improved issue templates

## 0.38.0 🪪 Device identifiers

`2025-08-23`

### 🚀 Features

- Added device `model_id` parameter
- Added device `serial_number` parameter

### 🐞 Bug Fixes

- Fixed bug in HA sensors list generation on raw data failure

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.20.1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.20.1)

### 🐣 GitHub & Development

- Improved code quality
- Improved development workflow

## 0.37.0 🌐 DDNS and better boot time handling

`2025-08-10`

### [→ 🐙GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.37.0)

### 🚀 Features

- Added DDNS binary sensor

### 🐛 Bug fixes

- Fixed issue with boot time sensor 1-second jitter (when the value between integration / HA reboots would be 1 second off), causing extra data to be saved to the database

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.18.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.18.0)

## 0.36.0 🌡️ Temperature bug fixes and a new uptime sensor

`2025-08-03`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.36.0)

### 🚀 Features

- Added `uptime` sensor to show the device uptime (native units - seconds)
- Added optimistic temperature reading from `asusrouter` backend library

### 🐛 Bug fixes

- Fixed issue with temperature readings being scaled 3 orders of magnitude off on some newer FW and devices (report [#906](https://github.com/Vaskivskyi/ha-asusrouter/issues/906))
- Fixed issue when a wrongly formatted firmware string was spamming in the log. Now it will log only once per unique string per integration instance (report [#940](https://github.com/Vaskivskyi/ha-asusrouter/issues/940))

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.17.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.17.0)

## 0.35.2 🐛 Fix for legacy devices

`2025-06-14`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.35.2)

### 🐛 Bug fixes

- Fixed issue with some legacy devices (e.g. `RT-AC66U`) on HA `2025.6.0+`

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.14.2`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.14.2)

## 0.35.1 🐛 HA 2025.6.0 compatibility

`2025-06-13`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.35.1)

### 🐛 Bug fixes

- Fixed issue with aiohttp version `3.12.7+` (HA `2025.6.0+`), cookie quoting and some devices

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.14.1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.14.1)

## 0.35.0 ⏱️ Better timing

`2025-03-23`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.35.0)

### 🚀 Features

- Switched Configuration Flow to the new HA format
- Improved the SSL verification-related code

### 📖 Translations

- Added Portuguese translation (by [@ViPeR5000](https://github.com/ViPeR5000))

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.14.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.14.0)

## 0.34.1 🐛 Bug fixes

`2024-11-10`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.34.1)

### 🐛 Bug fixes

- Fixed erroneous logging for some old firmware versions

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.13.1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.13.1)

## 0.34.0 ☎️ DSL support and connection improvements

`2024-09-07`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.34.0)

### 🚀 Features

- Added sensors for DSL upload and download rates (by @GaryHuang-ASUS)
- Improved connection handling in the backend library

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.13.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.13.0)

## 0.33.2 💻 Firmware and device handling improvements

`2024-08-28`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.33.2)

### 🚀 Features

- Improved logging of errors when creating entities

### 🐛 Bug fixes

- Fixed issue with device info when creating client devices
- Fixed issue with beta flag handling in firmware strings

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.12.2`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.12.2)

## 0.33.1 🐛 Bug fixes

`2024-08-28`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.33.1)

### 🐛 Bug fixes

- Fixed blocking call when fetching Aura data on non-Aura devices

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.12.1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.12.1)

## 0.33.0 🚨 Aura support & firmware improvements

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

## 0.32.1 🐛 JSON fixes & documentation

`2024-05-28`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.32.1)

### 🐛 Bug fixes

- Fixed JSON parsing for missing values (report [#832](https://github.com/Vaskivskyi/ha-asusrouter/issues/832))

### 📚 Documentation

- Added info on HTTPS connection as a preferred method for the integration
- Added info on the number of connected clients and its correspondence to the Web UI
- Updated supported devices

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.11.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.11.0)

## 0.32.0 🔨 AiMesh improvement and HA fixes

`2024-05-21`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.32.0)

### 🚀 Features

- Added support for the full AiMesh reboot with `button.{}_reboot_aimesh` entity
- Improved logging on connection errors

### 🐛 Bug fixes

- Fixed the blocking function call which was logging a warning in HA logs since `2024.5.x` (report [#823](https://github.com/Vaskivskyi/ha-asusrouter/issues/823))
- Improved handling of empty data (report [#C756](https://community.home-assistant.io/t/custom-component-asusrouter-integration/416111/756?u=vaskivskyi))

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.10.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.10.0)

## 0.31.0 🚀 Merlin 388.7 support

`2024-05-01`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.31.0)

### 🚀 Features

- Added support for Merlin `388.7`

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.9.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.9.0)

## 0.30.0 💻 Firmware control & quality features

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

## 0.29.0 💻 Clients stability and better control

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

## 0.28.0 🎛️ Control, choose, filter

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

## 0.27.2 💻 Client devices improvements

`2024-01-03`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.27.2)

### 🚀 Features

- Added device connections to allow:
  - `device_tracker` entity merge into the created device
  - merge device with the existing instances from other integrations

### 🐛 Bug fixes

- Fixed issue with calling `device_internet_access` from NodeRED without device name (report [#C706](https://community.home-assistant.io/t/custom-component-asusrouter-integration/416111/706?u=vaskivskyi))

## 0.27.1 🩹 Ignore wrong parental control rules

`2023-12-31`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.27.1)

### 🚀 Features

- Added a check on parental control rules before adding them as entities (report [#753](https://github.com/Vaskivskyi/ha-asusrouter/issues/753))

## 0.27.0 🐣 Parental control & clients stability

`2023-12-31`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.27.0)

### 🚀 Features

- Added service `device_internet_access` to control the device internet access (via parental control rules)
- Added `block_internet` switches for the devices with parental control rules (report [#622](https://github.com/Vaskivskyi/ha-asusrouter/issues/622))
- Added possibility to create HA devices for clients when creating their entities (optional, disabled by default)
- Added global `block_internet` switch to block internet access for all the devices
- Added `remove_trackers` service to release old `device_tracker` entities and get a possibility to remove them (report [#729](https://github.com/Vaskivskyi/ha-asusrouter/issues/729))
- Added support for services translation
- Added support for ports speeds (LAN / WAN): 10 Mb/s, 5 Gb/s, 10 Gb/s
- Added support for ports speeds (USB): 480 Mb/s, 5 Gb/s, 10 Gb/s, 20 Gb/s
- Updated device model to correspond to the `UI Model Name` (name as shown in the Web UI) (report [#578](https://github.com/Vaskivskyi/ha-asusrouter/issues/578))

### 🐛 Bug fixes

- Fixed extra sensors shown when they should not be available for the selected operation mode
- Fixed issue on the client status detection when AiMesh is supported but no nodes assigned
- Fixed issue with clients data mix
- Fixed issue with session not available error for the last requests when restarting the integration

### 📖 Translations

- Added Ukrainian translation for `device_internet_access` and `remove_trackers` services

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.6.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.6.0), [`1.6.1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.6.1)

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

## 0.26.0 💻 Clients tracking & multiple instances improvements

`2023-12-24`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.26.0)

### 🚀 Features

- Improved client status detection (partially fixes [#570](https://github.com/Vaskivskyi/ha-asusrouter/issues/570))

### 🐛 Bug fixes

- Fixed issue with data mix in cache when multiple instances are used (report [#690](https://github.com/Vaskivskyi/ha-asusrouter/issues/690))

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.5.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.5.0)

## 0.25.0 💻 Force clients update & more

`2023-12-21`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.25.0)

### 🚀 Features

- Added `force_clients` possibility, which sends a separate request to update the client list
- Added `force_clients` (boolean) and `force_clients_waittime` (float, in seconds) settings to the config flow

### 🐛 Bug fixes

- Fixed bug with integration failing to load with unknown VPN settings (Surfshark, L2PT, PP2P) via VPN Fusion (Stock FW `388+`) (report [#726](https://github.com/Vaskivskyi/ha-asusrouter/issues/726))
- Fixed bug with Guest WLAN switches (report [#727](https://github.com/Vaskivskyi/ha-asusrouter/issues/727), [#731](https://github.com/Vaskivskyi/ha-asusrouter/issues/731))
- Fixed bug with `6 GHz` WLAN being reported as `5 GHz-2` on some models (report [#591](https://github.com/Vaskivskyi/ha-asusrouter/issues/591))
  - All the models properly reporting `6 GHz` as supported in the services
  - `RT-AXE95Q` (`ZenWiFi ET8`)

### 🔨 Other changes

- Improved exceptions messages

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.2.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.2.0), [`1.3.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.3.0), [`1.4.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.4.0)

## 0.25.0b1 🐛 Fixes

`2023-12-03`

<details>
<summary>Release notes</summary>

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.25.0b1)

### 🐛 Bug fixes

- Fixed bug with integration failing to load with unknown VPN settings (Surfshark, L2PT, PP2P) via VPN Fusion (Stock FW `388+`) (report [#726](https://github.com/Vaskivskyi/ha-asusrouter/issues/726))
- Fixed bug with Guest WLAN switches (report [#727](https://github.com/Vaskivskyi/ha-asusrouter/issues/727), [#731](https://github.com/Vaskivskyi/ha-asusrouter/issues/731))
- Fixed bug with `6 GHz` WLAN being reported as `5 GHz-2` on some models (report [#591](https://github.com/Vaskivskyi/ha-asusrouter/issues/591))

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.3.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.3.0)

</details>

## 0.25.0b0 💻 Force clients update

`2023-11-23`

<details>
<summary>Release notes</summary>

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.25.0b0)

### 🚀 Features

- Added `force_clients` possibility, which sends a separate request to update the client list
- Added `force_clients` (boolean) and `force_clients_waittime` (float, in seconds) settings to the config flow

### 🔨 Other changes

- Improved exceptions messages

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.2.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.2.0)

</details>

## 0.24.2 🩹

`2023-11-21`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.24.2)

### 🐛 Bug fixes

- Fixed reboot flag not being reset, causing LED to turn off-on repeatedly (report [#709](https://github.com/Vaskivskyi/ha-asusrouter/issues/709))
- Fixed issue with all devices marked `wired` and losing wireless attributes, e.g. `guest`, `rssi` and else (report [#719](https://github.com/Vaskivskyi/ha-asusrouter/issues/719), [#C674](https://community.home-assistant.io/t/custom-component-asusrouter-integration/416111/674?u=vaskivskyi))

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.1.2`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.1.2)

## 0.24.1 🩹

`2023-11-20`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.24.1)

### 🐛 Bug fixes

- Fixed issue with WireGuard phantom data appearing on FW below 388 (report [#715](https://github.com/Vaskivskyi/ha-asusrouter/issues/715))

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.1.1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.1.1)

## 0.24.0 🌍 VPNs, WANs and stability

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

## 0.24.0b3

`2023-11-17`

<details>
<summary>Release notes</summary>

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.24.0b3)

### 🐛 Bug fixes

- Fixed missing arguments on state setting (report [#710](https://github.com/Vaskivskyi/ha-asusrouter/issues/710))

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.1.0b2`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.1.0b2)

</details>

## 0.24.0b2

`2023-11-16`

<details>
<summary>Release notes</summary>

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.24.0b2)

### 🚀 Features

- Added integration reload on sensors interval change

### 🐛 Bug fixes

- Fixed network sensors interval

</details>

## 0.24.0b1

`2023-11-13`

<details>
<summary>Release notes</summary>

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.24.0b1)

### 🐛 Bug fixes

- Fixed missing values for OpenVPN client
- Fixed missing temperature sensors
- Fixed unsafe dictionary operation

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.1.0b1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.1.0b1)

</details>

## 0.24.0b0

`2023-11-12`

<details>
<summary>Release notes</summary>

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.24.0b0)

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

- Fixed issue with blocked possibility to reload integration
- Fixed diagnostics module

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.1.0b0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.1.0b0)

</details>

## 0.23.7 🩹 Error loop fix

`2023-11-09`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.7)

### 🚀 Features

- Switched to receive a new client session for connection

## 0.23.6 🕐 Error loop fix

`2023-11-05`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.6)

### 🐛 Bug fixes

- Fixed an infinite loop with authorization error (report [#675](https://github.com/Vaskivskyi/ha-asusrouter/issues/675))

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.0.5`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.5)

## 0.23.5 🐛 Error handling

`2023-11-05`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.5)

### 🐛 Bug fixes

- Fixed error handling on integration startup

## 0.23.4 🐛 More legacy bugfixes

`2023-11-04`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.4)

### 🐛 Bug fixes

- Fixed bug with 5 GHz clients for older devices

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.0.4`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.4)

## 0.23.3 🐛 `380` - `384` bugfixes

`2023-11-04`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.3)

### 🐛 Bug fixes

- Fixed issue for `380` - `384` FW versions (report [#661](https://github.com/Vaskivskyi/ha-asusrouter/issues/661))

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.0.3`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.3)

## 0.23.2 🚀 Better features for older devices

`2023-11-03`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.2)

### 🐛 Bug fixes

- Fixed issue with temperature processing for older devices (report [#661](https://github.com/Vaskivskyi/ha-asusrouter/issues/661), [#665](https://github.com/Vaskivskyi/ha-asusrouter/issues/665))
- Fixed issue with the clients processing for legacy format (report [#661](https://github.com/Vaskivskyi/ha-asusrouter/issues/661))

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.0.2`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.2)

## 0.23.1 🐛 Bugfix / FW 380

`2023-11-02`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.1)

### 🐛 Bug fixes

- Fixed issue with an empty latest_connected list (report [#659](https://github.com/Vaskivskyi/ha-asusrouter/issues/659), [#662](https://github.com/Vaskivskyi/ha-asusrouter/issues/662))
- Fixed issue with device identity on 380 FW (report [661](https://github.com/Vaskivskyi/ha-asusrouter/issues/661))

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.0.1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.1)

## 0.23.0 🔨 New backend

`2023-11-01`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.0)

This release brings a fully-rebuild core of the library, making it faster and simpler.

### 🔒 Requirements

- Minimum HA version set to 2023.10.0

### 💥 Breaking

- Python `3.11+` is now required
- `Temp:` Removed HA services
- For pairs of `binary_sensor`/`switch` entities, removed `binary_sensor`
- Removed option `device_control` in the configuration flow
- With HA unit conversion supports, the native value for speed and traffic sensors changed, which creates a breaking change for HA history
- Removed `bytes` / `bits` attributes of traffic / speed sensors

### 🚀 Features

- Added support for HA `EntityCategory`
- Added support for HA unit conversion (traffic and speed sensors)
- Added error codes 9, 10 and 11 reported by device (`another`, `captcha`, `reset required`)
- Added proper timeout when login blocked
- Added USB WAN data recovery when interface is off
- Added debug logging for SSDP discovery and fired events
- Implemented `0` values for the network speed sensors on integration load. This will prevent `unknown` values on startup or reboot, when the actual speed cannot yet be calculated
- Improved FW processing for different generations
- Improved clients monitoring
- Improved `latest_connected` sensor
- Removed orphaned attributes for disconnected clients

### 🐛 Bug fixes

- Fixed issue with wrong FW update status (report [#605](https://github.com/Vaskivskyi/ha-asusrouter/issues/605), [#620](https://github.com/Vaskivskyi/ha-asusrouter/issues/620))
- Improved JSON parsing
- Added UnicodeDecodeError ignore on reading content (report [#564](https://github.com/Vaskivskyi/ha-asusrouter/issues/564), [#611](https://github.com/Vaskivskyi/ha-asusrouter/issues/611))

### 📖 Translations

- Updated Spanish translation ([@Nyaran](https://github.com/Nyaran))
- Updated Portuguese translation ([@edwardtfn](https://github.com/edwardtfn))
- Fixed Ukrainian translation ([@olegkrawchuk](https://github.com/olegkrawchuk))
- Added Russian translation ([@Kvasenok](https://github.com/Kvasenok))
- Added Hungarian translation ([@zsigus](https://github.com/zsigus))
- Added German translation ([@felixhaeberle](https://github.com/felixhaeberle))

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.0.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.0)
- Bumped `homeassistant` to `2023.10.0`

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

## 0.23.0b4 🔨

`2023-10-31` / `beta`

<details>
<summary>Release notes</summary>

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.0b4)

### 🚀 Features

- Implemented `0` values for the network speed sensors on integration load. This will prevent `unknown` values on startup or reboot, when the actual speed cannot yet be calculated
- Add Unicode error handling

### 🐛 Bug fixes

- Removed orphaned attributes from device trackers when clients are disconnected
- Fixed `latest_connected` sensor
- Fixed bug when no parental control or port forwarding rules are set ([report #651](https://github.com/Vaskivskyi/ha-asusrouter/issues/651))
- Fixed missing USB WAN sensors when interface is not connected

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.0.0b3`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.0b3)
</details>

## 0.23.0b3 🔨

`2023-10-30` / `beta`

<details>
<summary>Release notes</summary>

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.0b3)

### 🐛 Bug fixes

- Added handling of Unicode errors in JSON

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.0.0b2`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.0b2)
</details>

## 0.23.0b2 🔨

`2023-10-30` / `beta`

<details>
<summary>Release notes</summary>

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.0b2)

### 🐛 Bug fixes

- Fixed blocking issue when JSON cannot be parsed

### 🚀 Features

- Added logging on JSON parsing errors

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.0.0b1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.0b1)
</details>

## 0.23.0b1 🔨

`2023-10-29` / `beta`

<details>
<summary>Release notes</summary>

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.0b1)

### 🐛 Bug fixes

- Fixed temperature sensors
- Fixed sysinfo sensors (report [#641](https://github.com/Vaskivskyi/ha-asusrouter/issues/641))

### 📚 Documentation

- Added `TUF-AX3000 V2` to the supported
</details>

## 0.23.0b0 🔨

`2023-10-29` / `beta`

<details>
<summary>Release notes</summary>

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.0b0)

### 💣 Known issues

- Issue with temperature sensors (WLAN sensors not available)
- Issue with `load_avg` sensors
- Does not load on stock FW due to a bug with `load_avg` sensors

### 🔒 Requirements

- Minimum HA version set to 2023.10.0

### 🚀 Features

- Rebuilt backend
- Improved device tracking
- Added support for more error codes reported by the device (`another`, `captcha`, `reset required`)
- Improved firmware processing for different generations
- Added support for HA `EntityCategory`
- Added support for HA unit conversion (traffic and speed sensors)

### 🐛 Bug fixes

- Fixed issue with wrong FW update status (report [#605](https://github.com/Vaskivskyi/ha-asusrouter/issues/605))

### 💥 Breaking

- `Temp:` Removed HA services
- For pairs of `binary_sensor`/`switch` entities, removed `binary_sensor`
- Removed option `device_control` in the configuration flow
- With HA unit conversion supports, the native value for speed and traffic sensors changed, which creates a breaking change for HA history
- Removed `bytes` / `bits` attributes of traffic / speed sensors

### 📖 Translations

- Updated Spanish translation ([@Nyaran](https://github.com/Nyaran))
- Updated Portuguese translation ([@edwardtfn](https://github.com/edwardtfn))
- Fixed Ukrainian translation ([@olegkrawchuk](https://github.com/olegkrawchuk))
- Added Russian translation ([@Kvasenok](https://github.com/Kvasenok))
- Added Hungarian translation ([@zsigus](https://github.com/zsigus))
- Added German translation ([@felixhaeberle](https://github.com/felixhaeberle))

### 📚 Documentation

- Updated device list
- Changed release log layout on the documentation webpage

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.0.0b0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.0b0)
</details>

## 0.22.0 💻 On the way to a better configuration

`2023-03-05`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.22.0)

### 🚀 Features

- Improved SSDP discovery:
  - Ignore devices with no serial number available
  - Discovery is now based on FW instead of the manufacturer (only discover AsusWRT-powered devices)
- Improved configuration and options flow:
  - Block multiple setups for a single serial number
  - Configurable options are now sorted into a menu
  - Allow to set up integration with no options (integration can now be setup in 3 short steps)
  - Sorted options to be better grouped
  - When credentials are not changed, the check will be now skipped (to minimize the number of connections)

### 🐛 Bug fixes

- Fixed bug in SSDP discovery (report [#549](https://github.com/Vaskivskyi/ha-asusrouter/issues/549))
- Fixed bug with `platform does not generate unique IDs` (report [#528](https://github.com/Vaskivskyi/ha-asusrouter/issues/528))

### 📖 Translations

- Updated Spanish translation ([@Nyaran](https://github.com/Nyaran))

### 📚 Documentation

- Updated supported devices

### 🔨 Other changes

- Removed `lan_speed` and `wan_speed` sensors deprecated in `0.20.0`. Please, use the new sensors `port_status_lan` and `port_status_wan` ([more details](/features/ports.html))
- Removed domain name from the entities’ unique ids

## 0.21.1 🚀 Support for HA 2023.3.x

`2023-02-24`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.21.1)

### 🚀 Features

- Added support for HA 2023.3.x

### 📦 Dependencies

- Bumped `asusrouter` library to [`0.20.3`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.20.3)

## 0.21.0 🔑 Network discovery

`2023-02-22`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.21.0)

### 🚀 Features

- Added network discovery
- Added detailed title for network discovery

### 🐛 Bug fixes

- Fixed bug with port forwarding settings, when some of the parameters are not provided (report [#538](https://github.com/Vaskivskyi/ha-asusrouter/issues/538))
- Fixed bug in parental control service (report [#C479](https://community.home-assistant.io/t/custom-component-asusrouter-integration/416111/479?u=vaskivskyi))

### 💥 Breaking

- This release is removing direct migration from versions before `0.17.0`. If you are still on an older version, please firstly update to any between `0.17.0` and `0.20.0` and only after that update to `0.21.0`. The `migration guidline` for different versions is updated [in the documentation](/guide/faq/#migration-from-an-old-version)

### 📚 Documentation

- Updated supported devices

### 📦 Dependencies

- Bumped `asusrouter` library to [`0.20.2`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.20.2)

### 🔨 Other changes

- Removed name step from the configuration flow

## 0.20.0 🌵 Port Status

`2023-02-12`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.20.0)

### ⚠️ Deprecation warning

- Sensors `lan_speed` and `wan_speed` are deprecated. They will be removed in version 0.22.0. Please, use the new sensors `port_status_lan` and `port_status_wan`

### 🚀 Features

- Added new Port status sensors (LAN - `port_status_lan`, USB - `port_status_usb`, WAN - `port_status_wan`), reporting more information on the physical ports connections. The feature is fully supported by FW version `388.x`. With older versions, new sensors might reflect fewer data (mimicking deprecated `lan_speed` and `wan_speed` sensors with the new format). [More details on the new features](/features/ports.html#device-port-status-port-type)

### 🐛 Bug fixes

- Fixed bug in the backend library causing errors when device API stops reporting some information (report [#C471](https://community.home-assistant.io/t/custom-component-asusrouter-integration/416111/471?u=vaskivskyi))

### 📚 Documentation

- Updated supported devices

### 📦 Dependencies

- Bumped `asusrouter` library to [`0.20.1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.20.1)

### 🔨 Other changes

- Improved code typing
- Sorted integration manifest to fulfil the latest HA requirements

## 0.19.0 🌍 Port forwarding

`2023-02-05`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.19.0)

### 🔒 Requirements

- Minimum Home Assistant version bumped to `2023.2.0`

### 🚀 Features

- Finished code optimization to fulfil most of the HA Core requirements
- Added Port forwarding features (feature request [#136](https://github.com/Vaskivskyi/ha-asusrouter/issues/136)):
  - Port forwarding binary sensor / switch for the feature status
  - Service to set / remove port forwarding rules. Please follow the docs to find [more YAML features than available via HA frontend](/features/port-forwarding.html).
- Added Media bridge mode (feature request [#494](https://github.com/Vaskivskyi/ha-asusrouter/issues/494)):
  - The mode supports all the features of the Access point, but creates device trackers only for devices connected via wire

### 📚 Documentation

- Added new Port forwarding documentation
- Updated supported devices

### 📦 Dependencies

- Bumped `asusrouter` library to [`0.20.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.20.0)

### 🔨 Other changes

- Refactored all the integration code

## 0.18.4 🔒 Improvement for HA 2023.2.x

`2023-02-03`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.18.4)

### 🐛 Bug fixes

- Fixed warning on HA 2023.2.x

## 0.18.3 🐛 A bugfix

`2023-01-29`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.18.3)

### 🐛 Bug fixes

- Fixed bug in parental control module

### 📦 Dependencies

- Bumped `asusrouter` library to [`0.19.7`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.19.7)

## 0.18.2 🐞 Improvements and fixes

`2023-01-28`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.18.2)

### 🚀 Features

- Added fallback API endpoint for connected devices data on `x.380.x` FW builds
- Improved data processing for LAN/WAN ports
- Improved calculation of `usage` data (CPU, network, RAM and other sensors)
- Improved device reboot handling

### 🐛 Bug fixes

- Fixed LED blinking loop on device reboot
- Fixed bug with the button module
- Fixed bug with CPU and network sensors stucking in an `unknown` state in some cases
- Fixed bug with partial parental control rules
- Fixed behaviour on connection errors

### 📚 Documentation

- Added links to GitHub release logs for all the documented releases
- Small cosmetic changes

### 📦 Dependencies

- Bumped `asusrouter` library to [`0.19.4`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.19.4), [`0.19.5`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.19.5), [`0.19.6`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.19.6)

## 0.18.1 🛠️ Better FW handling and more

`2023-01-22`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.18.1)

### 🚀 Features

- Improved parsing of FW versions

### 🐛 Bug fixes

- Fixed bug with VPN switches (report [#C414](https://community.home-assistant.io/t/custom-component-asusrouter-integration/416111/414?u=vaskivskyi))
- Fixed bug with handling errors on API requests for WLAN and GWLAN data

### 📦 Dependencies

- Bumped `asusrouter` library to [`0.19.2`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.19.2), [`0.19.3`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.19.3)

## 0.18.0 🚀 Better backend

`2023-01-21`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.18.0)

### 🚀 Features

- Updated backend [`asusrouter`](https://github.com/Vaskivskyi/asusrouter) library and communication with Asus API:
  - minimized number of API requests
  - updated obtaining of connected devices data
  - updated LED features
  - updated communication with all the used API endpoints
- Added secondary WAN info (feature request [#464](https://github.com/Vaskivskyi/ha-asusrouter/issues/464))
- Added access point mode of operation (feature request [#C397](https://community.home-assistant.io/t/custom-component-asusrouter-integration/416111/397?u=vaskivskyi))
- Removed deprecated fields and simplified configuration flow

### 🐛 Bug fixes

- Fixed bug with beta FW versions (report [#467](https://github.com/Vaskivskyi/ha-asusrouter/issues/467))
- Removed `restart_firewall` button from AiMesh node mode of operation (a node cannot control firewall in any case, so the entity was useless)

### 📖 Translations

- Updated French translation (@novisys)

### 📚 Documentation

- Updated compatible devices list

### 📦 Dependencies

- Migrated to `asusrouter` library [`0.18.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.18.0), [`0.18.1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.18.1), [`0.18.2`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.18.2), [`0.18.3`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.18.3)
- Migrated to `asusrouter` library [`0.19.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.19.0), [`0.19.1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.19.1)

## 0.17.4 🐛 One more

`2023-01-09`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.17.4)

### 🐛 Bug fixes

- Fixed bug in the backend library bothering some users with older FW

### 📦 Dependencies

- Bumped `asusrouter` library to [`0.17.1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.17.1)

## 0.17.3 💣 A new bugfix for older devices

`2023-01-09`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.17.3)

### 🐛 Bug fixes

- Fixed issue for the devices with missing `label_mac` value from NVRAM (some older devices with Merlin builds) preventing AsusRouter from start (report [#451](https://github.com/Vaskivskyi/ha-asusrouter/issues/451))

### 📦 Dependencies

- Bumped `asusrouter` library to [`0.17.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.17.0)

## 0.17.2 🔨 Migration improvement

`2023-01-09`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.17.2)

### 🐛 Bug fixes

- Fix removing duplicates on `unique_id` migration (reports [#C371](https://community.home-assistant.io/t/custom-component-asusrouter-integration/416111/371?u=vaskivskyi), [#443](https://github.com/Vaskivskyi/ha-asusrouter/issues/443), [#450](https://github.com/Vaskivskyi/ha-asusrouter/issues/450))

### 📖 Translations

- Completed Spanish translation (@edwardtfn)
- Completed Portuguese (Brazil) translation (@edwardtfn)

### 🐣 GitHub / HACS

- Added link to the [`AsusRouter` -> `HA Core` merge feature request](https://community.home-assistant.io/t/add-asusrouter-integration-to-ha-core/515756?u=vaskivskyi)

## 0.17.1 🐛 A bugfix

`2023-01-08`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.17.1)

### 🐛 Bug fixes

- Fixed bug with AiMesh 5 GHz-2 connection between nodes (report [#C364](https://community.home-assistant.io/t/custom-component-asusrouter-integration/416111/364?u=vaskivskyi))

### 📦 Dependencies

- Bumped `asusrouter` library to [`0.16.1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.16.1)

## 0.17.0 🚀 AiMesh support

`2023-01-08`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.17.0)

### 🔒 Requirements

- Minimum Home Assistant version bumped to `2023.1.0`

### 🚀 Features

- Devices:
  - Added device modes (`Router` or `AiMesh node`) which can be selected during initial integration configuration or via `Configure` option on the Integrations page
  - Devices in `Router` mode support all the features of AsusRouter
  - Devices in `AiMesh node` mode support the following feature groups: `Main`, `CPU`, `LED`, `Load average`, `Network`, `Ports`, `RAM`, `Temperature`. Other features are disabled as unreliable / duplicating
- Added AiMesh support (FW: `386.x+` only, [details](/features/aimesh.html)):
  - Wireless backhaul
  - Wired backhaul
  - Node status `binary_sensor` entities
  - Node devices
  - Node-related events: `asusrouter_node_connected`, `asusrouter_node_disconnected`, `asusrouter_node_reconnected`
  - `via_device` attribute for the node devices
  - AiMesh data is updated at the same rate as connected devices
- Added node MAC to the connected device identity
- Adjusted entities attributes to be sorted alphabetically in the frontend (except for some default attributes of `device_tracker` entities)
- Improved generation of unique IDs
- Network interfaces are renamed to more obvoius names (`WLAN0` -> `2.4 GHz`, `WLAN1` -> `5 GHz` and so on). `entity_id` will stay as they are if already in use. For new users, `entity_id` will have new naming

### 🐛 Bug fixes

- Added new API endpoint to monitor online status - device trackers should become more reliable (FW: `386.x+` only)
- Fixed naming of temperature sensors after bug in [`0.15.0`](#0150-🌡️-more-temperatures-and-fixes)
- Fixed `Platform asusrouter does not generate unique IDs.`
- Fixed problems with unique IDs for multiple devices setup
- Fixed events options

### 📖 Translations

- A new string `Device mode` was added to the configuration flow (in respect to the new device modes implemented). It still requires the following translations: `cs`, `es`, `fr`, `nl`, `pt-BR`, `sk`. You can translate it on lines `18`, `31` and `111` of the corresponding traslation file (marked with `[NT]` as `Not Translated`)
- A string was updated from `Device trackers update` to `Devices / AiMesh update` to signify thew same time interval for all the devices. Requires translations: `cs`, `es`, `fr`, `nl`, `pt-BR`, `sk`. Lines `49` and `141`
- New strings added for node events. Missing `cs`, `es`, `fr`, `nl`, `pt-BR`, `sk`. Lines `175:177`

### 📚 Documentation

- Added scripts for automatic generation of devices and available features
- Updated compatible devices list
- Updated feature list to show which of features are available in which device mode

### 📦 Dependencies

- Bumped `asusrouter` library to [`0.16.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.16.0)

### 🔨 Other changes

- Switched to `UnitOfDataRate` enum (`>= 2023.1.0`)
- Switched to `UnitOfInformation` enum (`>= 2023.1.0`)

## 0.16.1 👨‍👧‍👦 Guest WLAN bugfix

`2022-12-31`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.16.1)

### 🐛 Bug fixes

- Fixed bug with the block by MAC settings of the Guest WLAN networks (report [#C319](https://community.home-assistant.io/t/custom-component-asusrouter-integration/416111/319?u=vaskivskyi))

### 💥 Breaking

- `macmode` attribute of Guest WLAN switches / binary sensors changed to string instead of boolean. More details on the possible values [here](/features/guest-wlan.html#macmode)

### 📦 Dependencies

- Bumped `asusrouter` library to [`0.15.2`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.15.2)

### 🐣 GitHub / HACS

- Updated the supported device list in GitHub Readme

## 0.16.0 🎁 Many small improvements

`2022-12-25`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.16.0)

### 🚀 Features

- Improved hiding of protected values from the entities attributes
- Security-protected attributes are hidden from the `binary_sensor` entities
- Move all the `control`/`no-control` features from the library to the integration
- The confirmation step is removed from the options flow as obsolete - there is no need anymore to manually reload the integration after changing its settings

### 🐛 Bug fixes

- Fixed `Device is connected in no-control mode. Sending commands is blocked` when in no-control mode, raised by the `update` entity.
- Fixed bug with missing timemaps in parental control rules (report [#369](https://github.com/Vaskivskyi/ha-asusrouter/issues/369))

### 💥 Breaking

- Services `asusrouter.adjust_wlan` and `asusrouter.device_internet_access` are available only in `control` mode of the integration - which would be the correct expected behaviour.

### 📦 Dependencies

- Bump `asusrouter` library to [`0.15.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.15.0) -> [`0.15.1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.15.1)

### 🔨 Other changes

- Simplified obtaining of `temperature` sensors list from the backend
- Simplified code for static entities
- Simplified generation of the static entities
- Improved constants usage

## 0.15.1 📖 Dutch translation

`2022-12-18`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.15.1)

### 📖 Translations

- Added <img src="https://asusrouter.vaskivskyi.com/flags/nl.svg" height="20"> Dutch translation (author: [@poudenes](https://github.com/poudenes))

## 0.15.0 🌡️ More temperatures and fixes

`2022-12-18`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.15.0)

### 💣 Known issues

- Updating to this version might disable your current temperature sensors and create the new ones. In this case, please remove the old entities, enable the new ones and assign them entity_id's as before.

### 🔒 Requirements

- Minimum Home Assistant version bumped to `2022.11.0`

### 🚀 New features

- New `guest_id` integer attribute added to the device identities (and `device_tracker` entities), which shows the number of guest WLAN (e.g. `1`, `2` or `3` when connected or `0` when not connected to a guest network)
- Added support for the temperature of `5 GHz-2` and `6 GHz` wireless modules (device and firmware dependant)

### 🐛 Bug fixes

- `guest` binary attribute of `device_tracker` entities fixed (reports [#C294](https://community.home-assistant.io/t/custom-component-asusrouter-integration/416111/294?u=vaskivskyi), [#384](https://github.com/Vaskivskyi/ha-asusrouter/issues/384))

### 💥 Breaking

- Deprecated in [0.13.0](#0130-🔍-latest-connected-devices-tracking-and-improved-parental-control) `entity_id`, `mac` and `name` parameters of `asusrouter.device_internet_access` service are removed
- Migration from versions 0.5.1 and lower is removed - consider the [new migration FAQ](/guide/faq/#migration-from-an-old-version) if you need to update from an older version

### 📚 Documentation

#### Documentation webpage

- Search feature is added to the documentation using the Algolia DocSearch platform
- [Change log](/log/) is added to the documentation
- [Credits](/credits/) are added to the documentation

### 📦 Dependencies

- Bump `asusrouter` library to [`0.14.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.14.0)

### 🐣 GitHub / HACS

- Update build status badge
- Update release drafter

### 🔨 Other changes

- `integration_type` property is added to the manifest (`>= 2022.11.0`)
- Switched to `UnitOfTemperature` enum (`>= 2022.11.0`)
- Switched to `SourceType` enum (`>= 2022.9.0`)
- Code improvements

## 0.14.3 📖 More translations

`2022-12-14`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.14.3)

### 📖 Translations

- Added <img src="https://asusrouter.vaskivskyi.com/flags/sk.svg" height="20"> Slovak translation (author: [@blavak68](https://github.com/blavak68))
- Completed <img src="https://asusrouter.vaskivskyi.com/flags/br.svg" height="20"> Portuguese (Brazil) translation (author: [@edwardtfn](https://github.com/edwardtfn))

## 0.14.2 📖 Two new languages

`2022-12-06`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.14.2)

### 📖 Translations

- Added <img src="https://asusrouter.vaskivskyi.com/flags/cz.svg" height="20"> Czech translation (author: [@pepe59](https://github.com/pepe59))
- Added <img src="https://asusrouter.vaskivskyi.com/flags/fr.svg" height="20"> French translation (author: [@novisys](https://github.com/novisys))

## 0.14.1 📖 Updated translation

`2022-12-05`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.14.1)

### 📖 Translations

- Updated <img src="https://asusrouter.vaskivskyi.com/flags/es.svg" height="20"> Spanish translation (author: [@Nyaran](https://github.com/Nyaran))

## 0.14.0 🎄Remove device trackers and more

`2022-12-04`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.14.0)

### 🚀 New features

- Added support for the wireless modules temperatures on Merlin 388 builds
- New `remove_trackers` service

### 📦 Dependencies

- Bump `asusrouter` library to [`0.13.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.13.0)

## 0.13.1 🐛 Bugfix for HA 2022-12

`2022-12-02`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.13.1)

### 🐛 Bug fixes

- Fixed problems with dependencies on HomeAssistant `>= 2022.12.0beta1`

## 0.13.0 🔍 Latest connected devices tracking and improved parental control

`2022-11-27`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.13.0)

### 🚀 New features

- New `entities` and `devices` parameters of the `asusrouter.device_internet_access` service to allow setting multiple devices state at once
- New `sensor.{device}_latest_connected` sensor - [details](/features/connected-devices.html#device-latest-connected)
- Allowed setting the number of latest connected devices to show
- New attributes for device identity - `conneted` - providing a datetime when device has connected

### 🐛 Bug fixes

- Fixed wrong wireless entities names
- Fixed bug with parental control rules, when no rules were set yet

### 💥 Deprecation warning

- `entity_id`, `mac` and `name` parameters of the `asusrouter.device_internet_access` service are now deprecated and will be removed in version `0.15.0`.

### 📖 Translations

- Added a missing translations string

### 📦 Dependencies

- Bump `asusrouter` library to [`0.12.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/0.12.0)

### 🔨 Other changes

- Code cleanup
- Better constants usage
