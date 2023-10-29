# Change Log

## Home Assistant Integration

### 0.23.0b0 🔨 New backend

`2023-10-29` / `beta`

#### [→ 🐙 GitHub change log ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.23.0b0)

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
