---
sidebarDepth: 1
---

# Library change log

## 1.1.0b2

`2023-11-17`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.1.0b2)

### 🐛 Bug fixes

- Fixed missing arguments on state setting

## 1.1.0b1

`2023-11-13`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.1.0b1)

### 🐛 Bug fixes

- Fixed missing values for OpenVPN client
- Fixed unsafe dict pop

## 1.1.0b0

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
