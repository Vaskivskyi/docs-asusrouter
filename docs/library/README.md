# Python Library

AsusRouter is a Python library that serves as a comprehensive API wrapper for interacting with ASUSWRT-powered routers. It communicates using HTTP(S) protocols and provides extensive control and monitoring capabilities. The library is compatible with both the stock AsusWRT firmware and AsusWRT-Merlin, making it a versatile tool for managing and monitoring ASUS network devices.

## Installation

### Prerequisites

AsusRouter requires Python `3.11` or higher and is tested with Python `3.11` and `3.12`.

### PyPI

The latest release of AsusRouter is available from PyPI.

```bash
pip install asusrouter
```

### GitHub

The latest development version of AsusRouter is available from GitHub. Refer to the [build instructions](/library/build.md) for more information.

## Usage

AsusRouter is an asynchronous library. It is designed to be used with the `asyncio` module and the `async`/`await` syntax. Refer to the [asyncio documentation](https://docs.python.org/3/library/asyncio.html) for more information.

### Creating a router object

The `AsusRouter` class is the main class of the library. It represents a single router device and provides methods for interacting with it.

```python
from asusrouter import AsusRouter

router = AsusRouter(
    hostname="192.168.1.1",     # Required - IP address or hostname of the router
    username="admin",           # Required
    password="admin",           # Required
    port=None,                  # Optional - default port would be selected based on use_ssl parameter
    use_ssl=False,              # Optional - use HTTPS instead of HTTP
)
```

### Retrieving router data

The `AsusRouter` class provides a set of methods for retrieving data from the router. The library provides an easy to use `AsusData` enum that contains all the available data types. Refer to the [data documentation](/library/AsusData.md) for more information.

```python
from asusrouter import AsusData

ram_info = await router.async_get_data(AsusData.RAM, force=False)
# `force` parameter is optional and defaults to False
# If set to True, the library will fetch the data from the router
# regardless of the cache state

print(ram_info)
```

**Example output:**

```json
{
  "free": 504632,
  "total": 1048576,
  "used": 543944,
  "usage": 51.87
}
```

#### Available data types

`AsusData` enum covers all the currently available data types. Refer to the [data documentation](/library/AsusData.md) for more information.

<details>
<summary>Full list</summary>

| `AsusData` type    | Description                      |
| ------------------ | -------------------------------- |
| `AIMESH`           | AiMesh information               |
| `BOOTTIME`         | Router boot time                 |
| `CLIENTS`          | Connected clients                |
| `CPU`              | CPU usage                        |
| `DEVICEMAP`        | Device map                       |
| `FIRMWARE`         | Firmware information             |
| `GWLAN`            | Guest WLAN                       |
| `LED`              | LED state                        |
| `NETWORK`          | Network traffic / speed          |
| `NODE_INFO`        | AiMesh Node information          |
| `OPENVPN_CLIENT`   | OpenVPN clients                  |
| `OPENVPN_SERVER`   | OpenVPN servers                  |
| `PARENTAL_CONTROL` | Parental control                 |
| `PORT_FORWARDING`  | Port forwarding                  |
| `PORTS`            | Port information (LAN, USB, WAN) |
| `RAM`              | RAM usage                        |
| `SPEEDTEST`        | Speedtest information            |
| `SYSINFO`          | System information (Merlin-only) |
| `TEMPERATURE`      | Temperature                      |
| `VPNC`             | VPN Client                       |
| `VPNC_CLIENTLIST`  | VPN Client list                  |
| `WAN`              | WAN information                  |
| `WIREGUARD_CLIENT` | WireGuard clients                |
| `WIREGUARD_SERVER` | WireGuard servers                |
| `WLAN`             | WLAN information                 |

</details>

### Setting router state

AsusRouter implements `async_set_state()` method that allows to set the state of the router. Refer to the [state documentation](/library/AsusState.md) for more information.

```python
from asusrouter.modules.port_forwarding import AsusPortForwarding

result = await router.async_set_state(AsusPortForwarding.ON)

print(result)
```

**Example output:**

```python
True # If the state was set successfully
False # If the state was not set successfully

# AsusRouter is checking device response to determine if the state was
# set successfully. Device might return `True` even if the state was not
# changed (e.g. if the state is already set)
```

### Setting router state with arguments

Some states require additional arguments to be set. The `async_set_state()` method accepts `arguments` parameter that should be a dictionary of arguments. Refer to the [state documentation](/library/AsusState.md) for more information.

```python

result = await router.async_set_state(
    AsusWLAN.ON,
    arguments={
        "api_type": "gwlan",  # Guest WLAN
        "api_id": "0.2",      # Guest WLAN #2 on 2.4 GHz
    },
)

print(result)
```

**Example output:**

```python
True # If the state was set successfully
False # If the state was not set successfully
```

### Calling system services

Using special `AsusSystem` enum, it is possible to call system services. Refer to the [system documentation](/library/AsusSystem.md) for more information. System services are called using `async_set_state()` method.

```python
from asusrouter.modules.system import AsusSystem

result await router.async_set_state(AsusSystem.RESTART_HTTPD)

print(result)
```

**Example output:**

```python
True # If the service was called successfully
False # If the service was not called successfully
```

#### Available system services

`AsusSystem` enum covers all the currently available system services. Refer to the [system documentation](/library/AsusSystem.md) for more information.

<details>
<summary>Full list</summary>

| `AsusSystem` type  | Description                      |
| ------------------ | -------------------------------- |
| `REBOOT`           | Reboot router                    |
| `RESTART_CHPASS`   | Restart `chpass`                 |
| `RESTART_DNSMASQ`  | Restart `dnsmasq`                |
| `RESTART_FIREWALL` | Restart firewall                 |
| `RESTART_HTTPD`    | Restart HTTP daemon              |
| `RESTART_LEDS`     | Restart LEDs                     |
| `RESTART_OPENVPND` | Restart OpenVPN daemon           |
| `RESTART_SAMBA`    | Restart Samba server             |
| `RESTART_TIME`     | Restart `time`                   |
| `RESTART_USB_IDLE` | Restart USB controller (if idle) |
| `RESTART_VPNC`     | Restart `vpnc`                   |
| `RESTART_WGS`      | Restart WireGuard server         |
| `RESTART_WIRELESS` | Restart WLAN modules             |
| `STOP_OPENVPND`    | Stop OpenVPN daemon              |
| `STOP_VPNC`        | Stop `vpnc`                      |
| `UPDATE_CLIENTS`   | Update clients                   |

</details>
