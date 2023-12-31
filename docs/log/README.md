# Change Log

This page contains all the changes in the last stable releases, including patch releases `x.x.V`.

## Home Assistant Integration

### 0.26.0 💻 Clients tracking & multiple instances improvements

`2023-12-24`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/ha-asusrouter/releases/tag/0.26.0)

### 🚀 Features

- Improved client status detection (partially fixes [#570](https://github.com/Vaskivskyi/ha-asusrouter/issues/570))

### 🐛 Bug fixes

- Fixed issue with data mix in cache when multiple instances are used (report [#690](https://github.com/Vaskivskyi/ha-asusrouter/issues/690))

### 📦 Dependencies

- Bumped `asusrouter` library to [`1.5.0`](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.5.0)

## Library

### 1.6.0 🐣 Parental control & clients stability

`2023-12-31`

#### [→ 🐙 GitHub release ←](https://github.com/Vaskivskyi/asusrouter/releases/tag/1.6.0)

### 🚀 Features

- Added `AsusSystem.REBUILD_AIMESH` state to start AiMesh optimization
- Added `int_as_bits` and `int_as_capabilities` converters
- Added `AccessPoint` dataclass
- Added support for ports when using modern endpoint for `AsusData.PORTS`:
    - Monitor the main (default, no arguments), selected (providing `device = MAC_ADDRESS`) or all (`device = "all"`) AiMesh node(s)
    - `PortSpeed` members: `LINK_10` (10 Mb/s), `LINK_5000` (5 Gb/s)
    - `USBSpeed` members: `USB_20` (480 Mb/s), `USB_30` (5 Gb/s), `USB_31` (10 Gb/s), `USB_32` (20 Gb/s)
    - `PortType` members:
        - `MOCA`, `SFPP` (implemented)
        - `POWERLINE` (planned)
    - `PortCapability` members: `WAN`, `LAN`, `GAME`, `PLC`, `WAN2`, `WAN3`, `SFPP`, `USB`, `MOBILE`, `WANLAN`, `MOCA`, `IPTV_BRIDGE`, `IPTV_VOIP`, `IPTV_STB`, `DUALWAN_SECONDARY`, `DUALWAN_PRIMIRY`
- Added support for ports when using legacy endpoint for `AsusData.PORTS`:
    - `PortSpeed` members: `LINK_10` (10 Mb/s), `LINK_5000` (5 Gb/s), `LINK_10000` (10 Gb/s)
- Added parental control rule features:
    - Allowed `ParentalControlRule` to be sent as a state to `AsusRouter.async_set_state`
    - Added `PCRuleType` enum with members:
        - `DISABLE`, `BLOCK`, `TIME` corresponding to the rule types - using any of them as the rule type will add or update the rule
        - `REMOVE` - using this as a type will remove the rule for a corresponding MAC address
- Switched to creation of a new session if the old one is not available anymore

### 🐛 Bug fixes

- Fixed issue on the client status detection when AiMesh is supported but no nodes assigned

### 🔨 Other changes

- Moved aand refactored all the parental control rules processing to be in `asusrouter.modules.parental_control` module

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
