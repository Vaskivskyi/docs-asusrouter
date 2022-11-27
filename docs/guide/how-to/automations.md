# Automations

## Actions

## Conditions

## Triggers

### Events

To trigger you automation on any AsusRouter event, use the standart HA `event` platform.

```yaml
trigger:
  - platform: event
    event_type: asusrouter_device_connected
```

## Examples

### Device connection notification

This automation allows creating HA persistant notifications when a new device connects to your local network and `asusrouter_device_connected` event is raised in HA.

Similar automation can be used to get notifications on the other device events:
- `asusrouter_device_disconnected`
- `asusrouter_device_reconnected`

```yaml
alias: AsusRouter/New device connected
description: Create a HA notification for any new device connected to the local network
trigger:
    # Trigger automation on the AsusRouter event
  - platform: event
    event_type: asusrouter_device_connected
# No conditions are needed in this example
condition: []
action:
    # Create HA persistant notification
  - service: persistent_notification.create
    data_template:
        # Title of the notification
        title: Device has joined the local network
        # Body of the notification (allows templating)
        message: >-
            MAC: {{trigger.event.data.mac}},
            IP: {{trigger.event.data.ip}},
            name: {{trigger.event.data.name}}
mode: queued
max: 100

```

### Restart HTTP daemon when certain API endpoints stop responding

This automation will help with some devices, which experience freezes of certain API endpoints with time. Restart of HTTP daemon allows fixing the issue without need for a full device reboot and all the wireless devices reconnecting.

Endpoints, which might freeze are responsible for the following sensors:
- `{device}_lan_speed`
- `{device}_wan_speed`

```yaml
alias: AsusRouter/HTTPD
description: Restart HTTP daemon when endpoints stop responding
trigger:
  - platform: state
    entity_id:
      - sensor.{device}_lan_speed
    to: unknown
    for:
      hours: 0
      minutes: 2
      seconds: 0
condition: []
action:
  - device_id: notareauldeviceid
    domain: button
    entity_id: button.{device}_restart_http_daemon
    type: press
mode: single
```