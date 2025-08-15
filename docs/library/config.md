---
title: Configuration
---

`asusrouter.config`

## Module info

This module provides configuration management for the AsusRouter library. These configurations are used across the library to control various aspects of its behavior. The main idea is to provide users a possibility to control some aspects of the library's operation through a centralized configuration system.

---

## Exposed API

- **Enums**

  - `ARConfigKeyBase`: Base enum for configuration keys to inherit from.
  - `ARConfigKey`: Enum of configuration keys.

- **Defaults**

  - `CONFIG_DEFAULT_BOOL`: Default boolean configuration value.
  - `CONFIG_DEFAULT_INT`: Default integer configuration value.
  - `CONFIG_DEFAULT_ALREADY_NOTIFIED`: Default boolean value for already notified flags.
  - `CONFIG_DEFAULT`: Default values for each configuration key.
  - `TYPES_DEFAULT`: Default type converters for each key.

- **Functions**

  - `safe_bool_config(value)`: Converts a value to boolean, using a safe default.
  - `safe_int_config(value)`: Converts a value to integer, using a safe default.

- **Classes**

  - `ConfigBase`: Base class for thread-safe configuration managers to inherit from.

    - `set(key, value)`: Set a configuration option.
    - `get(key)`: Get a configuration option.
    - `keys()`: List all configuration keys.
    - `list()`: List all configuration options.
    - `reset()`: Reset all options to defaults.
    - `register_type(key, converter)`: Register a custom type converter.
    - `types`: Property exposing the type converters.
    - `__contains__(key)`: Standard function to support `key in config` checks.

  - `Config`: Global AsusRouter configuration manager.

- **Instances**

  - `ARConfig`: Singleton instance of `Config` for global use.

---

## `ARConfigKey`

### Debug Payload

- `ARConfigKey.DEBUG_PAYLOAD` (default `ARSecurityLevel.DEFAULT`)

  Controls which data in included in the debug logging. Refer to [`ARSecurityLevel`](/library/tools/security.md#arsecuritylevel) for the available security levels.

---

### Optimistic Data

- `ARConfigKey.OPTIMISTIC_DATA` (default `false`)

  Not implemented

---

### Optimistic Temperature

- `ARConfigKey.OPTIMISTIC_TEMPERATURE` (default `false`)

  Enable automated temperature adjustment

- `ARConfigKey.NOTIFIED_OPTIMISTIC_TEMPERATURE` (default `false`)

  Flag of whether user was already notified about the automated temperature adjustment

[Details in the Temperature module](/library/modules/endpoint/temperature.md)

---

### Robust Boottime

- `ARConfigKey.ROBUST_BOOTTIME` (default `false`)

  Enable robust boot time calculation

[Details in the Devicemap module](/library/modules/endpoint/devicemap.md)
