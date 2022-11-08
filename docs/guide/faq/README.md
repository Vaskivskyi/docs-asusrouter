# FAQ

[[toc]]

## Router

### Firmware version

Firmware version for all the AsusWRT-powered devices consists of 3 parts:

-   `major`:
    -   `3.0.0.4` - all the stable stock builds and all the Merlin.
    -   `9.0.0.4` - beta versions of stock builds.
    -   Most of Merlin builds (including Gnuton) avoid showing `major` in the Web UI.
-   `minor`:
    -   a 3-digit value, e.g. `388`, `386` etc for stock FW.
    -   a double value, combining 3-digit stock `minor` and a sequence number, separetad with `.` or `_`, e.g. `380.70`, `386.8` etc.
-   `build`:
    -   a 5-digit value, e.g. `20558`.
    -   an even sequence number, e.g. `0`, `2`, `4` etc for Merlin FW.
    -   same as Merlin and `-gnuton` for Gnuton builds.

Examples:
-   `3.0.0.4.388_20558` for stock FW.
-   `3.0.0.4.386.6_2` for Merlin FW.
-   `3.0.0.4.386.04_0-gnuton` for Gnuton Merlin build.
