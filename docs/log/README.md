# Change Log

## Home Assistant Integration

### 0.23.2 🚀 Better features for older devices

`2023-11-03`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.2)

### 🐛 Bug fixes

- Fixed issue with temperature processing for older devices (report [#661](https://github.com/Vaskivskyi/ha-asusrouter/issues/661), [#665](https://github.com/Vaskivskyi/ha-asusrouter/issues/665))
- Fixed issue with the clients processing for legacy format (report [#661](https://github.com/Vaskivskyi/ha-asusrouter/issues/661))

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.0.2`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.2)

### 0.23.1 🐛 Bugfix / FW 380

`2023-11-02`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.1)

### 🐛 Bug fixes

- Fixed issue with an empty latest_connected list (report [#659](https://github.com/Vaskivskyi/ha-asusrouter/issues/659), [#662](https://github.com/Vaskivskyi/ha-asusrouter/issues/662))
- Fixed issue with device identity on 380 FW (report [661](https://github.com/Vaskivskyi/ha-asusrouter/issues/661))

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.0.1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.1)

### 0.23.0 🔨 New backend

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

## Library

### 1.0.3 🐛 `380` - `384` bugfixes

`2023-11-04`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.3)

### 🐛 Bug fixes

- Fixed issue for `380` - `384` FW versions

### 🐣 GitHub

- Updated build and release workflow

### 1.0.2 🚀 Better features for older devices

`2023-11-03`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.2)

### 🚀 Features

- Added parsing for the legacy format of `Update Clients` endpoint

### 🐛 Bug fixes

- Improved temperature reading code to prevent errors with older FW

### 1.0.1 🐛 Bugfix / FW 380

`2023-11-02`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.1)

### 🐛 Bug fixes

- Fixed identity error on 380 FW

### 1.0.0 🔨 New core

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
