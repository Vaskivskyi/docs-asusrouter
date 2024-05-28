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

### 1.11.0 Ping-ping & JSON fixes

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
