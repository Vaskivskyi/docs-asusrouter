# Aura

## Description

**Source code:** `modules.aura.py` | **Import:** `asusrouter.modules.aura`

This module allows working with Aura RGB lighting of a device in both read and write modes.

### `AsusAura`

**Type:** `enum`

**Values:**

| Member      | Value  | Description               |
| ----------- | ------ | ------------------------- |
| `ON`        | `-1`   | Aura is on, generic value |
| `OFF`       | `0`    | Aura is off               |
| `GRADIENT`  | `1`    | Gradient mode             |
| `STATIC`    | `2`    | Static mode               |
| `BREATHING` | `3`    | Breathing mode            |
| `EVOLUTION` | `4`    | Evolution mode            |
| `RAINBOW`   | `5`    | Rainbow mode              |
| `WAVE`      | `6`    | Wave mode                 |
| `MARQUEE`   | `7`    | Marquee mode              |
| `UNKNOWN`   | `-999` | Unknown mode              |

This enum provides a complete list of available Aura modes. It can be used by the general [`AsusRouter.async_set_state()`](/library/asusrouter.md#asusrouter) method to set the Aura mode.

### `AsusAuraColor`

**Type:** `enum`

This enum provides a complete list of Aura modes which support color setting. Includes: `GRADIENT`, `STATIC`, `BREATHING` and `MARQUEE`. It can be used in the same way as [`AsusAura`](#asusaura) enum.

### `DefaultAuraColor`

**Type:** `enum`

**Values:**

| Member   | Value                      | Description     |
| -------- | -------------------------- | --------------- |
| `COLOR1` | `ColorRGBB((20, 0, 128))`  | Default color 1 |
| `COLOR2` | `ColorRGBB((110, 0, 100))` | Default color 2 |
| `COLOR3` | `ColorRGBB((128, 0, 80))`  | Default color 3 |

This enum provides a list of default Aura colors. Uses the [`ColorRGBB`](/library/modules/color.md#colorrgbb) class to represent colors.

### DEFAULT_AURA_SCHEME

```python
DEFAULT_AURA_SCHEME: AsusAura = AsusAura.STATIC
```

### DEFAULT_COLOR_PATTERN

```python
DEFAULT_COLOR_PATTERN: tuple[DefaultAuraColor] = (
    DefaultAuraColor.COLOR1,
    DefaultAuraColor.COLOR2,
    DefaultAuraColor.COLOR3,
    DefaultAuraColor.COLOR2
)
```

### `get_default_aura_color()`

**Type:** `function`

**Arguments:**

```python
zones: int
```

**Returns:** `tuple(ColorRGBB)`

This function returns a tuple of default Aura colors based on the number of zones. The default colors extended to the number of zones from the [`DefaultAuraColor`](#defaultauracolor) enum.

**Example:**

```python
colors = get_default_aura_color(3)
# Output: (ColorRGBB((20, 0, 128)), ColorRGBB((110, 0, 100)), ColorRGBB((128, 0, 80)))
colors = get_default_aura_color(2)
# Output: (ColorRGBB((20, 0, 128)), ColorRGBB((110, 0, 100)))
colors = get_default_aura_color(5)
# Output: (ColorRGBB((20, 0, 128)), ColorRGBB((110, 0, 100)), ColorRGBB((128, 0, 80)),
#           ColorRGBB((110, 0, 100)), ColorRGBB((20, 0, 128))
```

### `get_scheme_from_state()`

**Type:** `function`

**Arguments:**

```python
aura_state: dict[str, Any]
```

**Returns:** `AsusAura`

This function returns an Aura scheme based on the provided data from the device in the format provided by the [`process_aura()`](#process_aura) function. Falls back to the [`DEFAULT_AURA_SCHEME`](#default_aura_scheme) if the scheme cannot be found in the provided data.

**Example:**

```python
scheme = get_scheme_from_state({
    "scheme": AsusAura.STATIC,
})
# Output: AsusAura.STATIC
scheme = get_scheme_from_state({
    "scheme_prev": AsusAura.RAINBOW,
})
# Output: AsusAura.RAINBOW
scheme = get_scheme_from_state({
    "scheme": 1,
    "scheme_prev": 2,
})
# Output: AsusAura.GRADIENT
```

### `process_aura()`

**Type:** `function`

**Arguments:**

```python
data: dict[str, Any]
```

**Returns:** `dict[str, Any]`

This function processes the provided data from the device and returns a dictionary of the Aura data.

| Key                        | Type                        | Description                                                              |
| -------------------------- | --------------------------- | ------------------------------------------------------------------------ |
| `state`                    | `Optional[bool]`            | Aura is enabled / disabled. Set to `False` when `"scheme": AsusAura.OFF` |
| `night_mode`               | `Optional[bool]`            | Night mode is enabled / disabled                                         |
| `scheme`                   | [`AsusAura`](#asusaura)     | Current Aura scheme                                                      |
| `scheme_prev`              | [`AsusAura`](#asusaura)     | Previous Aura scheme                                                     |
| `zones`                    | `int`                       | Number of zones                                                          |
| `effect`                   | `dict[int, ]`               | Aura schemes data                                                        |
| `effect.{scheme}`          | `Optional[list[ColorRGBB]]` | Aura scheme colors of a specific scheme. `None` when color not supported |
| `active`                   | `dict`                      | Active scheme data                                                       |
| `active.color`             | `Optional[ColorRGBB]`       | Active scheme average color                                              |
| `active.brightness`        | `Optional[int]`             | Active scheme brightness                                                 |
| `active.{zone}.color`      | `Optional[ColorRGBB]`       | Single zone color of active scheme                                       |
| `active.{zone}.brightness` | `Optional[int]`             | Single zone brightness of active scheme                                  |

**Example:**

```python
data = {
    "AllLED": 1,
    "ledg_night_mode": "",
    "ledg_scheme": 1,
    "ledg_scheme_old": 2,
    "ledg_rgb1": "20,0,128,128,20,0,0,128,20",
    "ledg_rgb2": "20,0,128,128,20,0,0,128,20",
    "ledg_rgb6": "",
}
result = process_aura(data)
result
# Output: {
#     "state": True,
#     "night_mode": None,
#     "scheme": AsusAura.MARQUEE,
#     "scheme_prev": AsusAura.STATIC,
#     "zones": 3,
#     "effect": {
#         1: [ColorRGBB((20, 0, 128)), ColorRGBB((128, 20, 0)), ColorRGBB((0, 128, 20))],
#         2: [ColorRGBB((20, 0, 128)), ColorRGBB((128, 20, 0)), ColorRGBB((0, 128, 20))],
#         6: None,
#     },
#     "active": {
#         "color": ColorRGBB((128, 128, 128), 128),
#         "brightness": 128,
#         1: {
#             "color": ColorRGBB((20, 0, 128)),
#             "brightness": 128,
#         },
#         2: {
#             "color": ColorRGBB((128, 20, 0)),
#             "brightness": 128,
#         },
#         3: {
#             "color": ColorRGBB((0, 128, 20)),
#             "brightness": 128,
#         },
#     },
# }
```

### `set_brightness()`

**Type:** `function`

**Arguments:**

```python
colors: list[ColorRGBB]
brightness: Optional[int]
zone: Optional[int] = None
```

**Returns:** `None`

This function sets the brightness of the provided colors to the specified value (if valid). The input list is directly modified.

When the `zone` parameter is provided, the brightness is set only for the specified zone. Otherwise, the brightness is set for all zones.

**Example:**

```python
colors = [ColorRGBB((20, 0, 128)), ColorRGBB((110, 0, 100)), ColorRGBB((128, 0, 80))]
set_brightness(colors, 64)
colors
# Output: colors = [ColorRGBB((10, 0, 64)), ColorRGBB((55, 0, 50)), ColorRGBB((64, 0, 40)]
colors = [ColorRGBB((20, 0, 128)), ColorRGBB((110, 0, 100)), ColorRGBB((128, 0, 80))]
set_brightness(colors, 64, 1)
colors
# Output: colors = [ColorRGBB((20, 0, 128)), ColorRGBB((55, 0, 50)), ColorRGBB((128, 0, 80)]
```

### `set_color()`

**Type:** `function`

**Arguments:**

```python
colors: list[ColorRGBB]
color_to_set: Optional[ColorRGB | list[ColorRGB]]
zone: Optional[int] = None
zones: Optional[int] = None
```

**Returns:** `None`

This function sets the color of the provided list of colors to the specified value (if valid). The input list is directly modified.

When the `zone` parameter is provided, the color is set only for the specified zone. Otherwise, the color is set for all zones.

When the `zones` parameter is provided, the color can be set to any number of zones even if it exceeds the length of the input list.

If the `color_to_set` parameter is a list, the colors are set in the order provided. If the list is shorter than the number of zones, colors are repeated from the beginning.

**Example:**

```python
colors = [ColorRGBB((20, 0, 128)), ColorRGBB((110, 0, 100)), ColorRGBB((128, 0, 80))]
set_color(colors, ColorRGB((128, 0, 0)))
colors
# Output: colors = [ColorRGBB((128, 0, 0)), ColorRGBB((128, 0, 0)), ColorRGBB((128, 0, 0)]
colors = [ColorRGBB((20, 0, 128)), ColorRGBB((110, 0, 100)), ColorRGBB((128, 0, 80))]
set_color(colors, [ColorRGB((128, 0, 0)), ColorRGB((0, 128, 0))])
colors
# Output: colors = [ColorRGBB((128, 0, 0)), ColorRGBB((0, 128, 0)), ColorRGBB((128, 0, 0)]
colors = [ColorRGBB((20, 0, 128)), ColorRGBB((110, 0, 100))]
set_color(colors, ColorRGB((128, 0, 0)), zone=1)
colors
# Output: colors = [ColorRGBB((20, 0, 128)), ColorRGBB((128, 0, 0)]
colors = [ColorRGBB((20, 0, 128)), ColorRGBB((110, 0, 100))]
set_color(colors, [ColorRGB((128, 0, 0)), ColorRGB((0, 128, 0))], zones=3)
colors
# Output: colors = [ColorRGBB((128, 0, 0)), ColorRGBB((0, 128, 0)), ColorRGBB((128, 0, 0)]
```

### `set_state()`

> [!warning]
> Direct usage of this function is not recommended. Use the general [`AsusRouter.async_set_state()`](/library/asusrouter.md#asusrouter-async-set-state) method instead.

**Type:** `function`

**Arguments:**

```python
callback: Callable[..., Awaitable[bool]]
state: AsusAura
**kwargs: Any
```

**Valid kwargs:**

```python
# Required
identity: AsusDevice
# Optional
router_state: dict # {AsusData.AURA: AsusDataState}
color: Optional[ColorRGB | list[ColorRGB]]
brightness: Optional[int]
zone: Optional[int]
```

**Returns:** `bool`

This function sets the Aura state to the specified value using the provided callback function for communication with the device.

It is recommended to use the general [`AsusRouter.async_set_state()`](/library/asusrouter.md#asusrouter-async-set-state) method to set the Aura state instead of calling this function directly to ensure proper communication with the correct device. The function will not be run without the `identity` parameter set to a correct (Aura-capable) [`AsusDevice`](/library/modules/identity.md#asusdevice) object.

The colors will be set if the state supports it (see [`AsusAuraColor`](#asusauracolor) enum).

The function will return `True` if the state was successfully set (and confirmed by the device) and `False` otherwise (regardless of whether the request was sent to the device or blocked inside the function).

**Example:**

```python
# Initialize the router object
router = AsusRouter(...)
# Set the Aura state using the general (safe) method
router.async_set_state(AsusAura.MARQUEE, color=ColorRGB((128, 0, 0)), brightness=64, zone=1)
```
