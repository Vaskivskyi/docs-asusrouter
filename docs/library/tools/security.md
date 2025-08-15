---
title: Security
---

`asusrouter.tools.security`

## Module info

This module provides security-related tools and enumerators to be used within the AsusRouter library.

---

## Exposed API

- **Enums**

  - `ARSecurityLevel`: Security levels for the data processed by AsusRouter.

---

## `ARSecurityLevel`

Enumeration representing the security levels for the data processed by AsusRouter.

### Members

- `ARSecurityLevel.UNKNOWN` (`-999`)
- `ARSecurityLevel.STRICT` (`0`): no user-related data is exposed
- `ARSecurityLevel.DEFAULT` (`1`): non-sensitive user-related data is exposed
- `ARSecurityLevel.SANITIZED` (`5`): user-related data is available but is automatically sanitized before being exposed
- `ARSecurityLevel.UNSAFE` (`9`): user-related data is exposed

### Methods

- `ARSecurityLevel.from_value(value: Any)` (class method)

  Converts a value to an `ARSecurityLevel`. Integer-compatible (including strings) and string (member name) values are accepted via converters. Fall back to `ARSecurityLevel.UNKNOWN` if the value cannot be converted.

- `ARSecurityLevel.at_least_strict` (class method)

  Checks if the current security level is `STRICT` or higher.

- `ARSecurityLevel.at_least_default` (class method)

  Checks if the current security level is `DEFAULT` or higher.

- `ARSecurityLevel.at_least_sanitized` (class method)

  Checks if the current security level is `SANITIZED` or higher.
