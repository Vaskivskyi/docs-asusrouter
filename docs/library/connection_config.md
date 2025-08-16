---
title: Connection Configuration
---

`asusrouter.connection_config`

## Module info

This module provides configuration management tools for the connection settings in the AsusRouter library. The configurations are used per-instance of the `Connection` class and can be passed directly to it, through `AsusRouter` initialization on startup, or dynamically set during runtime. Details on how exactly the configurations are used can be found in the [Connection module documentation](/library/connection.md).

---

## Exposed API

- **Enums**

  - `ARConnectionConfigKey`: Enum of connection configuration keys.

- **Defaults**

  - `CONNECTION_CONFIG_DEFAULT`: Default values for each connection configuration key.
  - `CONNECTION_CONFIG_TYPES_DEFAULTS`: Default types for each connection configuration key.

- **Classes**

  - `ARConnectionConfig`: Class representing the connection configuration.

---

## `ARConnectionConfig`

### Fallback Configuration

Keys responsible for the fallback behaviour of the connection.

- `ARConnectionConfigKey.ALLOW_FALLBACK` (default: `false`)

  Enables all types of fallback on connection errors.

- `ARConnectionConfigKey.ALLOW_MULTIPLE_FALLBACKS` (default: `false`)

  Enables multiple fallback attempts. If enabled, the fallback mechanism can be triggered multiple times on non-consecutive request errors. This means, unsuccessful requests attempts (if not one after the other) can still be restored. Does not affect loop protection.

- `ARConnectionConfigKey.ALLOW_UPGRADE_HTTP_TO_HTTPS` (default: `true`)

  Allows upgrading HTTP connections to HTTPS as a fallback mechanism.

- `ARConnectionConfigKey.STRICT_SSL` (default: `false`)

  If set, forbids downgrading HTTPS connections to HTTP as a fallback mechanism.

- `ARConnectionConfigKey.NOTIFIED_STRICT_SSL_NO_SSL` (default: `false`)

  Flag for monitoring whether user was already notified about strict SSL being enabled and causing fallback blocking.

---

### SSL Configuration

- `ARConnectionConfigKey.USE_SSL` (default: `false`)

  If set, enables the use of SSL/TLS for connections. This configuration is overwritten if `use_ssl` argument is passed on `Connection` or `AsusRouter` initialization.

- `ARConnectionConfigKey.VERIFY_SSL` (default: `false`)

  Option to verify SSL/TLS certificates on requests.

- `ARConnectionConfigKey.NOTIFIED_VERIFY_SSL_FAILED` (default: `false`)

  Flag for monitoring whether user was already notified about SSL verification failures.

---

### General configuration

- `ARConnectionConfigKey.PORT` (default: `0`)

  Port number for the connection. This configuration is overwritten if `port` argument is passed on `Connection` or `AsusRouter` initialization. The default value of `0` guarantees usage of the known default port for the selected protocol.
