# RAM

## Limitations

<table><tr><td>

|Firmware|          Versions|
|--------|------------------|
|Stock   |`>= 3.0.0.4.380.x`|
|Merlin  |`>= 3.0.0.4.380.x`|
</td><td>

| Device mode|    Available|
|------------|-------------|
|Router      |:green_heart:|
|AiMesh Node |:green_heart:|
|Access point|:green_heart:|
</td></tr></table>

## Sensor

### `{device}_ram`

`AsusRouter >= 0.1.0`

-   Default entity state: `Disabled`
-   Type: `float`
-   Units: `%`
-   Details:

    The actual RAM utilization at the time of the poll.

    #### Attributes

    -   ##### free

        -   Type: `integer`
        -   Units: `KB`
        -   Details:

            The actual amount of free RAM.

    -   ##### total

        -   Type: `integer`
        -   Units: `KB`
        -   Details:

            The total amount of RAM.

    -   ##### used

        -   Type: `integer`
        -   Units: `KB`
        -   Details:

            The actual amount of used RAM.
