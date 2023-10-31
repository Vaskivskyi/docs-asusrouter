# Change Log

## Home Assistant Integration

### 0.23.0b4 🔨

`2023-10-31` / `beta`

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

### 0.23.0b3 🔨

`2023-10-30` / `beta`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.0b3)

### 🐛 Bug fixes

- Added handling of Unicode errors in JSON

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.0.0b2`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.0b2)

### 0.23.0b2 🔨

`2023-10-30` / `beta`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.0b2)

### 🐛 Bug fixes

- Fixed blocking issue when JSON cannot be parsed

### 🚀 Features

- Added logging on JSON parsing errors

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.0.0b1`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.0.0b1)

### 0.23.0b1 🔨

`2023-10-29` / `beta`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.0b1)

### 🐛 Bug fixes

- Fixed temperature sensors
- Fixed sysinfo sensors (report [#641](https://github.com/Vaskivskyi/ha-asusrouter/issues/641))

### 📚 Documentation

- Added `TUF-AX3000 V2` to the supported

### 0.23.0b0 🔨

`2023-10-29` / `beta`

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
