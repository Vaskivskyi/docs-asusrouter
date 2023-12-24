# Change Log

This page contains all the changes in the last stable releases, including patch releases `x.x.V`.

## Home Assistant Integration

### 0.25.0 💻 Force clients update & more

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

## Library

### 1.5.0 🚀 New features and fixes

`2023-12-24`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.5.0)

### 🚀 Features

- Improved client status detection

### 🐛 Bug fixes

- Fixed issue with data mix in cache when multiple instances are used
