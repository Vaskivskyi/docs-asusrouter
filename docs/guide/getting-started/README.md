---
next: ../configuration/
---

# Getting started

## Prerequisites

1. An AsusWRT-powered router. Including devices with original (stock) firmware (versions starting with `3.0.0.4`) as well as with AsusWRT-Merlin FW and its derivatives (e.g. Gnuton builds).
2. A Home Assistant instance with version 2023.1.0 or higher.

## Installation

There are two supported ways to install AsusRouter to your HA instance - Home Assistant Community Store (HACS) and manual installation from the stable branch of the integration GitHub.

Keep in mind, manual installation of development (`main`) branch **is not** and **will not be supported**!

### HACS

You can add this repository to your HACS going the following path:

`HACS -> Integrations -> Explore & Download Repositories -> AsusRouter`

### Manual

Copy content of the [stable branch](https://github.com/Vaskivskyi/ha-asusrouter/tree/stable) `custom_components/asusrouter/` to `custom_components/asusrouter/` in your Home Assistant folder.

## Initial setup

After AsusRouter is installed, you can add your device from Home Assistant UI.

[![Open your Home Assistant instance and start setting up a new integration.](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=asusrouter)

### Device discovery

You need to specify the device IP address (e.g. `192.168.1.1`) or hostname (e.g. `my.router.com`) as the first step of integration setup. AsusRouter will automatically check whether you device can be reached.

#### Troubleshooting

|                      Error|Log level|                                               Description|
|---------------------------|---------|----------------------------------------------------------|
|Hostname cannot be resolved|ERROR    |The hostname cannot be resolved. Use the device IP address|

### Setup

To connect to the device you need to provide the following minimum data:
- Username (for logging into the Web UI)
- Password
- Port (the default value `0` will select either `80` for non-SSL or `8443` for SSL connection)
- SSL connection (`true` is recommended)
- Device operation mode (router, AiMesh node, access point (AP) or media bridge)

#### Troubleshooting

|             Error|Log level|                                                                                Description|
|------------------|---------|-------------------------------------------------------------------------------------------|
|Connection refused|ERROR    |The device is refusing connection. Check the logs                                          |
|Wrong credentials |ERROR    |Check `username` and `password`                                                            |
|Login is blocked  |ERROR    |Too many attempts with wrong credentials were made. The timeout value is provided in HA log|
|Error / Unknown   |ERROR    |Refer to the HA log for details                                                            |

### Configuration

When the setup is successful, you will be provided with advanced options.
