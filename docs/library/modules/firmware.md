# Firmware

## Description

**Source code:** `modules.firmware.py` | **Import:** `asusrouter.modules.firmware`

This module allows processing, comparing and operating with firmware information of a device.

### `Firmware`

**Type:** `class`

**Arguments:**

```python
# Default argument
version: Optional[str] = None
# Optional arguments when version is explicitly set to None
major: Optional[str] = None
minor: Optional[int] = None
build: Optional[int] = None
revision: Optional[int | str] = None
```

**Recommended usage:**

```python
# Initialize a Firmware object by explicitly providing version
my_firmware = Firmware(version="3.0.0.4.386_40451")
# Acceptable initialization
my_firmware = Firmware("3004.386.5_2")
```

It is recommended to create a `Firmware` object using the `version` argument. The object will automatically be parsed into major, minor, build and revision parts using [`from_string()`](#firmware-from-string) method.

**Processing of the version:**

When `Firmware` object is initialized, additional processing is done automatically with:

- [`_update_beta()`](#firmware-update-beta)
- [`_update_rog()`](#firmware-update-rog)
- [`_update_source()`](#firmware-update-source)

**Other usage:**

```python
# Alternative initialization
# In this case, all the arguments should be provided
# in the correct format
my_firmware = Firmware(major="3.0.0.4", minor=388, build=57123)
```

Format for the arguments:

- `major` = `3.0.0.4`, `9.0.0.4`, `3.0.0.6`, `9.0.0.6`
- `minor` = `384`, `386`, `388`, `102`
- `build` = `40451`, `54041`, `5`, `7`
- `revision` = `2beta1`, `g386313`, `1gnuton-beta1`

#### Properties

| Property   | Type      | Description   |
| ---------- | --------- | ------------- |
| `major`    | `str`     | Major version |
| `minor`    | `int`     | Minor version |
| `build`    | `int`     | Build version |
| `revision` | `int/str` | Revision      |
| `beta`     | `bool`    | Beta version  |
| `rog`      | `bool`    | ROG build key |
| `source`   | `str`     | Source        |

#### `Firmware.from_string()`

**Arguments:**

```python
fw_string: Optional[str] = None
```

**Returns:** `None`

**Updates properties:** `major`, `minor`, `build`, `revision`, `beta`, `rog`

This method is used to parse the firmware version string into major, minor, build and revision parts. In addition, check for the ROG build key is done automatically. The parsing is done using the following regular expressions:

```python
(
    r"^(?P<major>[39].?0.?0.?[46])?[_.]?"
    r"(?P<minor>[0-9]{3})[_.]?"
    r"(?P<build>[0-9]+)[_.-]?"
    r"(?P<revision>[a-zA-Z0-9-_]+?)(?=_rog|$)?"
    r"(?P<rog>_rog)?$"
)
```

- `major` part can be reconstructed from formats including `3.0.0.4`, `3004` and their variations. It can be omitted.
- `major` and `minor` might be separated by a dot, an underscore or by nothing.
- `minor` part is always 3 digits long.
- `minor` and `build` might be separated by a dot, an underscore or by nothing.
- `build` part is any number of digits long.
- `build` and `revision` might be separated by a dot, an underscore, a dash or by nothing.
- `revision` part can contain any alphanumeric characters, dashes and underscores. It can be omitted or can include the `_rog` suffix.
- `_rog` suffix is optional and can be found at the end of the version string.

**Example usage:**

```python
my_firmware = Firmware()
my_firmware.from_string("3004.386.5_2")
```

#### `Firmware.__str__()`

**Arguments:** `None`

**Returns:** `str`

This method returns the firmware as a string in format `major.minor.build_revision` or `major.minor.build_revision_rog` if the ROG build key is present.

#### `Firmware.__repr__()`

**Arguments:** `None`

**Returns:** `str`

Mimics the [`__str__()`](#firmware-str) method.

#### `Firmware.__eq__()`

**Arguments:** `other: object`

**Returns:** `bool`

This method compares two `Firmware` objects and returns `True` if they are equal. The comparison is done based on the `major`, `minor`, `build` and `revision` properties only. The `beta`, `rog` and `source` properties are not taken into account. When comparing with other objects, the method always returns `False`.

This method implicitly allows usage of `Firmware.__ne__()` method.

**Example**

```python
my_firmware == other_firmware
# or opposite
my_firmware != other_firmware
```

#### `Firmware.__lt__()`

**Arguments:** `other: object`

**Returns:** `bool`

This method compares two `Firmware` objects and returns `True` if the first object is less than the second one. The comparison is done based on the `major`, `minor`, `build` and `revision` properties only. The `beta`, `rog` and `source` properties are not taken into account when comparing. When comparing with other objects or if the `source` property is different, the method always returns `False`. The last ensures that the comparison between e.g. `Merlin` and `Stock` firmware won't return false positive.

**Example**

```python
my_firmware < other_firmware
```

#### `Firmware.__gt__()`

**Arguments:** `other: object`

**Returns:** `bool`

This method compares two `Firmware` objects and returns `True` if the first object is greater than the second one. The method is based on the [`__lt__()`](#firmware-lt) and [`__eq__()`](#firmware-eq) methods.

**Example**

```python
my_firmware > other_firmware
```

#### `Firmware._update_beta()`

**Arguments:** `None`

**Returns:** `None`

**Updates properties:** `beta`

This method checks if the firmware major version has beta-digit (starting `9`) and sets the `Firmware.beta` property accordingly.

#### `Firmware._update_rog()`

**Arguments:** `None`

**Returns:** `None`

**Updates properties:** `rog`

This method checks if the firmware revision contains `_rog` suffix and sets the `Firmware.rog` property accordingly. If the suffix is found, it is removed from the revision. This ensures that revisions `1` and `1_rog` are treated as the same (as they are).

#### `Firmware._update_source()`

**Arguments:** `None`

**Returns:** `None`

**Updates properties:** `source`

This method checks the origin of the firmware version and sets the `Firmware.source` property accordingly.

The firmware discriminated based on the `revision` property. Revisions can be distinguished as follows:

| Source | Specifics                                                 |
| ------ | --------------------------------------------------------- |
| Gnuton | `gnuton` in revision                                      |
| Merlin | integer revision, otherwise `alpha` or `beta` in revision |
| Stock  | any other string in revision                              |

### `FirmwareType`

**Type:** `enum`

**Values:**

| Member                 | Value  | Description            |
| ---------------------- | ------ | ---------------------- |
| `FirmwareType.STOCK`   | `0`    | Stock firmware         |
| `FirmwareType.MERLIN`  | `1`    | Merlin custom firmware |
| `FirmwareType.GNUTON`  | `2`    | Gnuton custom firmware |
| `FirmwareType.UNKNOWN` | `-999` | Unknown firmware type  |

### `WebsError`

**Type:** `enum`

**Values:**

| Member                     | Value  | Description                                                               |
| -------------------------- | ------ | ------------------------------------------------------------------------- |
| `WebsError.NONE`           | `0`    | No error detected                                                         |
| `WebsError.DOWNLOAD_ERROR` | `1`    | Error during download of the firmware (e.g. cannot connect to the server) |
| `WebsError.SPACE_ERROR`    | `2`    | Not enough space on the device to proceed with the firmware update        |
| `WebsError.FW_ERROR`       | `3`    | Firmware is not compatible with the device or is corrupted                |
| `WebsError.UNKNOWN`        | `-999` | Unknown error                                                             |

### `WebsFlag`

**Type:** `enum`

**Values:**

| Member               | Value  | Description           |
| -------------------- | ------ | --------------------- |
| `WebsFlag.DONT`      | `0`    | Do not perform update |
| `WebsFlag.AVAILABLE` | `1`    | Update is available   |
| `WebsFlag.FORCE`     | `2`    | Force upgrade         |
| `WebsFlag.UNKNOWN`   | `-999` | Unknown flag          |

### `WebsUpdate`

**Type:** `enum`

**Values:**

| Member                | Value  | Description         |
| --------------------- | ------ | ------------------- |
| `WebsUpdate.ACTIVE`   | `0`    | Checking for update |
| `WebsUpdate.INACTIVE` | `1`    | Inactive            |
| `WebsUpdate.UNKNOWN`  | `-999` | Unknown             |

### `WebsUpgrade`

**Type:** `enum`

**Values:**

| Member                    | Value  | Description                |
| ------------------------- | ------ | -------------------------- |
| `WebsUpgrade.INACTIVE`    | `-1`   | Inactive                   |
| `WebsUpgrade.DOWNLOADING` | `0`    | Downloading new firmware   |
| `WebsUpgrade.FINISHED`    | `1`    | Firmware download finished |
| `WebsUpgrade.ACTIVE`      | `2`    | Firmware upgrade active    |
| `WebsUpgrade.UNKNOWN`     | `-999` | Unknown                    |
