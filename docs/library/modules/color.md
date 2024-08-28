# Color

## Description

**Source code:** `modules.color.py` | **Import:** `asusrouter.modules.color`

This module allows processing, comparing and operating with colors.

### `ColorRGB`

**Type:** `class`

**Arguments:**

```python
# Default arguments
r: int | tuple[int, int, int] = (0, 0, 0)
# Optional arguments
g: Optional[int] = None
b: Optional[int] = None
scale: int = 128
```

**Recommended usage:**

```python
# Initialize a ColorRGB object by explicitly providing RGB values
my_color = ColorRGB(r=64, g=32, b=128)
# or
my_color = ColorRGB(64, 32, 128)
# Initialize with less color values
# In the case of missing values, they will be set to `r` value
my_color = ColorRGB(r=64, g=32)
# Initialize with a tuple
my_color = ColorRGB(r=(64, 32, 128))
```

On invalid input, the default color will be assigned to the `ColorRGB` object. Valid input is processed with the [`from_rgb()`](#colorrgb-from-rgb) method.

#### Properties

| Property           | Type  | Description                                     |
| ------------------ | ----- | ----------------------------------------------- |
| `r`                | `int` | Red color                                       |
| `g`                | `int` | Green color                                     |
| `b`                | `int` | Blue color value                                |
| `scale`            | `int` | Scale value for the color                       |
| `color_brightness` | `int` | Brightness of the color (the brightest channel) |

All the properties are in the range `[0:scale]`.

### `ColorRGB.as_tuple()`

**Arguments:** `None`

**Returns:** `tuple[int, int, int]`

This method returns the RGB color as a tuple [`r`, `g`, `b`].

### `ColorRGB.from_rgb()`

**Arguments:**

```python
rgb: tuple[int, int, int] | str
delimiter: str = ","
```

**Returns:** `None`

**Updates properties:** `r`, `g`, `b`

This method is used to process the input RGB value into separate color channels. The method is based on [`_normalize_input_rgb()`](#colorrgb-normalize-input-rgb) and [`_normalize_scale()`](#colorrgb-normalize-scale) methods.

### `ColorRGB.from_rgbs()`

**Arguments:**

```python
rgb: tuple[int, int, int] | str
delimiter: str = ","
scale: Optional[int] = None
```

**Returns:** `None`

**Updates properties:** `r`, `g`, `b`, `scale`

This method allows loading a color of the custom scale which doesn't match the `scale` property of the object. After the new scale is set, [`from_rgb()`](#colorrgb-from-rgb) method is called.

### `ColorRGB._normalize_input_rgb()`

**Arguments:**

```python
rgb: Optional[tuple[int, ...] | str]
delimiter: str = ","
```

**Returns:** `tuple[int, int, int]`

This method is used to normalize the input RGB value into a tuple of integers. The method works with tuples of custom length and strings. If not enough values are provided, the missing values are set to `0`. If too many values are provided, the extra values are ignored.

### `ColorRGB._normalize_scale()`

**Arguments:**

```python
values: tuple[int, ...]
scale: int
```

**Returns:** `tuple[int, ...]`

This method is used to normalize the input tuple of values (of any length) into a tuple of integers in the range `[0:scale]`:

- if all the values are smaller than `scale`, they are returned as they are
- if any value is greater than `scale`, the values are scaled proportionally so that the highest value is equal to `scale`

### `ColorRGB.__eq__()`

**Arguments:** `other: object`

**Returns:** `bool`

This method compares two `ColorRGB` objects and returns `True` if they are equal. The comparison is done based on the `r`, `g`, `b` and `scale` properties. When comparing with other objects, the method always returns `False`.

This method implicitly allows usage of `ColorRGB.__ne__()` method.

**Example**

```python
my_color == other_color
# or opposite
my_color != other_color
```

### `ColorRGB.__repr__()`

**Arguments:** `None`

**Returns:** `str`

Mimics the [`__str__()`](#colorrgb-str) method.

### `ColorRGB.__str__()`

**Arguments:** `None`

**Returns:** `str`

This method returns the RGB color as a string in the format `r,g,b`.

### `ColorRGBB`

**Inherits from:** `ColorRGB`

**Type:** `class`

**Arguments:**

```python
rgb: tuple[int, int, int] | ColorRGB = (0, 0, 0)
br: Optional[int] = None
scale: int = 128
```

**Recommended usage:**

```python
# Initialize a ColorRGBB object by explicitly providing RGB and brightness values
my_color = ColorRGBB(rgb=(64, 32, 128), br=64)
# or
my_color = ColorRGBB((64, 32, 128), 64)
```

`ColorRGBB` class allows separating the brightness from the RGB color and is used by e.g. [Aura module](/library/modules/aura.md).

#### Properties

| Property           | Type  | Description                                     |
| ------------------ | ----- | ----------------------------------------------- |
| `r`                | `int` | Red color                                       |
| `g`                | `int` | Green color                                     |
| `b`                | `int` | Blue color                                      |
| `color_brightness` | `int` | Brightness of the color (the brightest channel) |
| `brightness`       | `int` | Brightness                                      |
| `scale`            | `int` | Scale value for the color                       |

All the properties are in the range `[0:scale]`.

### `ColorRGBB.from_rgb()`

**Arguments:**

```python
rgb: tuple[int, ...] | str | ColorRGB
delimiter: str = ","
scale: Optional[int] = None
```

**Returns:** `None`

**Updates properties:** `r`, `g`, `b`, `scale`

This method is used to load the RGB color. Brightness of the RGB color is ignored and the color is rescaled to the `scale` value. Uses [`ColorRGB._from_rgb()`](#colorrgb-from-rgb-1) method.

### `ColorRGBB.from_rgbwb()`

**Arguments:**

```python
rgb: tuple[int, ...] | str | ColorRGB
delimiter: str = ","
scale: Optional[int] = None
```

**Returns:** `None`

**Updates properties:** `r`, `g`, `b`, `brightness`, `scale`

This method is used to load the RGB color with brightness embedded in the color. The brightness is separated from the RGB color and the color is rescaled to the `scale` value. Uses [`ColorRGB._from_rgb()`](#colorrgb-from-rgb-1) method.

### `ColorRGBB.set_brightness()`

**Arguments:**

```python
br: int
```

**Returns:** `None`

**Updates properties:** `brightness`

This method is used to set the brightness of the color. The brightness is set to the `br` value if it is in the range `[0:scale]`. If the value is out of range, the brightness is set to the closest value in the range.

### `ColorRGBB.to_rgb()`

**Arguments:**

```python
scale: Optional[int] = None
```

**Returns:** `ColorRGB`

This method returns the RGB color as a `ColorRGB` object with brightness embedded in the RGB values. The color is rescaled to the `scale` value if provided. Uses [`ColorRGB._to_rgb()`](#colorrgbb-to-rgb-1) method.

### `ColorRGBB._from_rgb()`

**Arguments:**

```python
rgb: tuple[int, ...] | str
delimiter: str = ","
scale: Optional[int] = None
```

**Returns:** `tuple[int, int, int]`

This method is used to normalize the input RGB value into a tuple of integers. The method uses [`ColorRGB._normalize_input_rgb()`](#colorrgb-normalize-input-rgb) and [`ColorRGB._normalize_scale()`](#colorrgb-normalize-scale) methods.

### `ColorRGBB._to_rgb()`

**Arguments:**

```python
rgbb: Optional[tuple[int, ...]] = None
```

**Returns:** `tuple[int, int, int]`

This method is used to normalize the RGBB value into a tuple of integers. If RGBB value is not provided, the method uses the object's properties.

### `ColorRGBB.__repr__()`

**Arguments:** `None`

**Returns:** `str`

Mimics the [`__str__()`](#colorrgbb-str) method.

### `ColorRGBB.__str__()`

**Arguments:** `None`

**Returns:** `str`

This method returns the RGBB color as a string in the format `r,g,b,brightness,scale`.

### DEFAULT_COLOR

```python
DEFAULT_COLOR: tuple[int, int, int] = (0, 0, 0)
```

### DEFAULT_COLOR_DELIMITER

```python
DEFAULT_COLOR_DELIMITER: str = ","
```

### DEFAULT_COLOR_SCALE

```python
DEFAULT_COLOR_SCALE: int = 255
```

### DEFAULT_COLOR_SCALE_ASUS

```python
DEFAULT_COLOR_SCALE_ASUS: int = 128
```

### `average_color()`

**Type:** `function`

**Arguments:**

```python
colors: ColorRGB | list[ColorRGB]
```

**Returns:** `ColorRGB`

This function calculates the average color from the provided list of colors. If only one color is provided, the function returns the color as is.

The average value is calculated separately for each color channel. The scale of the resulting color is set to the maximum scale of the input colors.

**Example**

```python
color_1 = ColorRGB(64, 32, 128)
color_2 = ColorRGB(128, 64, 32)

average_color([color_1, color_2])
# Output: ColorRGB(96, 48, 80)
```

### `color_zone()`

**Type:** `function`

**Arguments:**

```python
color: Optional[str]
delimiter: str = ","
```

**Returns:** `int`

This function calculates the number of color zones in the provided color. The color is expected to be in the format `r,g,b`. The number of zones is always integer, all the extra channels are ignored.

**Example**

```python
zones = color_zone("64,32,128")
# Output: 1
zones = color_zone("64,32,128,255")
# Output: 1
zones = color_zone("64,32,128,255,32,17,64,5,128")
# Output: 3
zones = color_zone("64 32 128 128 64 32 32 128 64", delimiter=" ")
# Output: 3
```

### `parse_colors()`

**Type:** `function`

**Arguments:**

```python
color_str: Optional[str]
delimiter: str = ","
scale: int = 128
```

**Returns:** `Optional[list[ColorRGB]]`

This function parses the provided color string into a list of `ColorRGB` objects. The colors are expected to be in the format `r,g,b`. Both the channels and the colors are separated by the `delimiter`. The colors are rescaled to the `scale` value. Extra channels are ignored.

**Example**

```python
colors = parse_colors("64,32,128,128,64,32,32,128,64")
# Output: [ColorRGB(64, 32, 128), ColorRGB(128, 64, 32), ColorRGB(32, 128, 64)]
colors = parse_colors("64 32 128 128 64 32", delimiter=" ")
# Output: [ColorRGB(64, 32, 128), ColorRGB(128, 64, 32)]
colors = parse_colors("no color")
# Output: None
```
