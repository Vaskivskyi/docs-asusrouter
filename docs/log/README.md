# Change Log

This page contains all the changes in the last stable releases, including patch releases `x.x.V`.

## Home Assistant Integration

### 0.31.0 🚀 Merlin 388.7 support

`2024-05-01`

### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.31.0)

### 🚀 Features

- Added support for Merlin `388.7`

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.9.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.9.0)

## Library

### 1.10.0 🔨 AiMesh, threading & logging

`2024-05-21`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.10.0)

### 🚀 Features

- Import modules in a separate thread to avoid blocking the main thread
- Improved logging on the exceptions
- Added support for AiMesh reboot via `AsusSystem.AIMESH_REBOOT` state
- Moved AiMesh rebuild to `AsusSystem.AIMESH_REBUILD` state

### ⚰️ Deprecation

- Marked `AsusSystem.REBUILD_AIMESH` as deprecated. The new `AsusSystem.AIMESH_REBUILD` should be used instead. There is no yet defined version of removal, but its usage will cause a warning in the logs.
