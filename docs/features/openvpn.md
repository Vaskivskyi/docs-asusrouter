# OpenVPN

## Limitations

<table><tr><td>

|Firmware|          Versions|
|--------|------------------|
|Stock   |`>= 3.0.0.4.386.x`|
|Merlin  |`>= 3.0.0.4.380.x`|
</td><td>

| Device mode|    Available|
|------------|-------------|
|Router      |:green_heart:|
|AiMesh Node |:heart:      |
|Access point|:heart:      |
|Media bridge|:heart:      |
</td></tr></table>

## OpenVPN Client

`switch.{device}_openvpn_client_{x}` / `integration >= 0.5.0`

This switch describes the current state of the OpenVPN client `{x}`. Currently, all the devices have support for up to 5 clients.

### Attributes

... to be added ...

## OpenVPN Server

`switch.{device}_openvpn_server_{x}` / `integration >= 0.11.0`

This switch describes the current state of the OpenVPN server `{x}`. Currently, the stock firmware has support for 1 server only (`>= 3.0.0.4.388.x`), while older versions (`<= 3.0.0.4.386.x`) and Merlin has support for up to 2 servers.

### Attributes

... to be added ...
