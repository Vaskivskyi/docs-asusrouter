# Change Log

This page contains all the changes in the last stable releases, including patch releases `x.x.V`.

## Home Assistant Integration

### 0.32.0 🔨 AiMesh improvement and HA fixes

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

### 🩹 Patches

#### 0.32.1 🐛 JSON fixes & documentation

`2024-05-28`

- **[Bugfix]** Fixed JSON parsing for missing values
- **[Docs]** Updated documentation
- **[Docs]** Updated supported devices

## Library

### 1.12.0 🚨 Aura support & firmware improvements

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
- Removed code duplication in generic `read` function of endpoints

### 🐣 GitHub

- Added templates for issue reports

### 📚 Documentation

- Added better code example to the README (by @tomer-w)
- Added AsusRouter logo
- Updated supported devices
