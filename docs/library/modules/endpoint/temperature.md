---
title: Temperature
---

`asusrouter.modules.endpoint.temperature`

## Module info

This module provides read and process methods for the [temperature endpoint](#).

> [!warning]
> This module can perform additional automated data corrections if set via the [`ARConfig`](/library/config.md). Refer to the [read()](#read) description.

> [!tip]
> This is an internal module. This means it is optimised for internal use rather for the direct user interaction.

---

## Exposed API

- **Defaults**

  - `EXPECTED_DECIMAL_PLACES`: Expected decimal places for temperature values (`2`).
  - `EXPECTED_TEMPERATURE_MIN`: Minimum expected temperature (`10.0`, expected to be always in Celsius).
  - `EXPECTED_TEMPERATURE_MAX`: Maximum expected temperature (`150.0`, expected to be always in Celsius).
  - `MAX_SCALE_COUNT`: Maximum number of scaling steps to apply when correcting temperature values (`5`).

- **Functions**

  - `read(content)`: Read a raw string loaded from the temperature endpoint into a standard data dictionary.
  - `process(data)`: Process the data into a standardized `AsusData`-compliant format.
  - `_scale_temperature(temperature, range_min, range_max, max_scale_count)`: Scale the temperature value to a specific range.

---

## `read()`

Process the raw data string from the temperature endpoint into a standard data dictionary.

If the [`ARConfig` option](/library/config.md) is set to `true` via `ARConfigKey.OPTIMISTIC_TEMPERATURE`, the function will attempt to correct any out-of-range temperature values using the `_scale_temperature` function. In this case, user will be notified ONCE with a log warning (except if the `ARConfigKey.NOTIFIED_OPTIMISTIC_TEMPERATURE` is set to `true` in advance by the user).

- **Arguments**

  - `content: str`: The raw data string from the temperature endpoint.

- **Returns**

  - `dict[str, float | None]`: The processed temperature data.

## `process()`

Convert temperature data in an `AsusData`-compliant format.

## `_scale_temperature()`

If any of the temperature values in the provided dictionary fall outside the expected range, they are scaled for 1 order of magnitude up or down to fit within the range. Only the maximum of `max_scale_count` scaling steps is applied.

- **Arguments**

  - `temperature: dict[str, float | None]`: The temperature data to scale.
  - `range_min: float`: The minimum value of the target range. Default is `EXPECTED_TEMPERATURE_MIN`.
  - `range_max: float`: The maximum value of the target range. Default is `EXPECTED_TEMPERATURE_MAX`.
  - `max_scale_count: int`: The maximum number of scaling steps to apply. Default is `MAX_SCALE_COUNT`.

- **Returns**

  - `dict[str, float | None]`: The scaled temperature data.
