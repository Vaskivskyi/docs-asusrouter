# Change Log

This page contains all the changes in the last stable releases, including patch releases `x.x.V`.

## Home Assistant Integration

### 0.34.0 ☎️ DSL support and connection improvements

`2024-09-07`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.34.0)

### 🚀 Features

- Added sensors for DSL upload and download rates (by @GaryHuang-ASUS)
- Improved connection handling in the backend library

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.13.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.13.0)

## Library

### 1.13.0 ☎️ DSL support and connection improvements

`2024-09-07`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.13.0)

### 🚀 Features

- Added new `AsusData.DSL` state (by @GaryHuang-ASUS)
- Added DSL endpoint check for the identity
- Improved session management in the connection module
- Improved initialization of the connection module

### 📦 Dependencies

- Bumped `python-dateutil` to `2.9.0.post0`
