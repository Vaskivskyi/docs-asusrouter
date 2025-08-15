---
title: Devicemap
---

`asusrouter.modules.endpoint.devicemap`

## Module info

This module provides read and process methods for the [devicemap endpoint](#).

> [!warning]
> This module can perform additional automated data corrections if set via the [`ARConfig`](/library/config.md). Refer to the [read_uptime_string()](#read-uptime-string) description.

> [!tip]
> This is an internal module. This means it is optimised for internal use rather for the direct user interaction.

---

## Exposed API

- **Functions**

  - `read(content)`: Read a raw string loaded from the devicemap endpoint into a standard data dictionary.
  - `read_index(xml_content)`: Read the XML content and extract the relevant information by index.
  - `read_key(xml_content, key)`: Read the XML content and extract the relevant information by key.
  - `read_special(xml_content)`: Read the XML content and extract special information.
  - `read_uptime_string(content)`: Read the raw uptime string and convert it to a standard `datetime` object + uptime value.
  - `process(data)`: Process the raw data into a standardized `AsusData`-compliant format.
  - `process_boottime(data, prev_boottime)`: Process the boottime information using (if provided) information from the previous query.
  - `process_ovpn(data)`: Process the OpenVPN data.

---

## `read_uptime_string()`

Read the raw uptime string and convert it to a standard `datetime` object + uptime value.

The raw data obtained from a device has a jitter of 1 second. This is related to the fact that the data is presented as a current time + uptime value. As a result, calculation of the actual boot time can be affected. If the [`ARConfig` option](/library/config.md) is set `true` via `ARConfigKey.ROBUST_BOOTTIME`, the module will attempt to compensate for this jitter by artificially lowering time resolution to 2 seconds. This is performed by returning boot time with only even numbers of seconds.

- **Arguments**

  - `content: str`: The raw uptime string to process.

- **Returns**

  - `tuple[datetime, int]`: A tuple containing the processed `datetime` object as the time when device booted the last time and the integer uptime value.
