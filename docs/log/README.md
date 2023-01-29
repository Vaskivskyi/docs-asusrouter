# Change Log

:::tip This is only a list of releases + breaking changes.

For the full change log, click on the version number / title here or in the sidebar.
:::

## [0.18.3 🐛 A bugfix](/log/0.18.3.html)

`2023-01-29`

## [0.18.2 🐞 Improvements and fixes](/log/0.18.2.html)

`2023-01-28`

## [0.18.1 🛠️ Better FW handling and more](/log/0.18.1.html)

`2023-01-22`

## [0.18.0 🚀 Better backend](/log/0.18.0.html)

`2023-01-21`

## [0.17.4 🐛 One more](/log/0.17.4.html)

`2023-01-09`

## [0.17.3 💣 A new bugfix for older devices](/log/0.17.3.html)

`2023-01-09`

## [0.17.2 🔨 Migration improvement](/log/0.17.2.html)

`2023-01-09`

## [0.17.1 🐛 A bugfix](/log/0.17.1.html)

`2023-01-08`

## [0.17.0 🚀 AiMesh support](/log/0.17.0.html)

`2023-01-08`

## [0.16.1 👨‍👧‍👦 Guest WLAN bugfix](/log/0.16.1.html)

`2022-12-31`

#### 💥 Breaking

- `macmode` attribute of Guest WLAN switches / binary sensors changed to string instead of boolean. More details on the possible values [here](/features/guest-wlan.html#macmode)

## [0.16.0 🎁 Many small improvements](/log/0.16.0.html)

`2022-12-25`

#### 💥 Breaking

- Services `asusrouter.adjust_wlan` and `asusrouter.device_internet_access` are available only in `control` mode of the integration - which would be the correct expected behaviour.

## [0.15.1 📖 Dutch translation](/log/0.15.1.html)

`2022-12-18`

## [0.15.0 🌡️ More temperatures and fixes](/log/0.15.0.html)

`2022-12-18`

#### 💣 Known issues

- Updating to this version might disable your current temperature sensors and create the new ones. In this case, please remove the old entities, enable the new ones and assign them entity_id's as before.

#### 💥 Breaking

- Deprecated in [0.13.0](/log/0.13.0.html) `entity_id`, `mac` and `name` parameters of `asusrouter.device_internet_access` service are removed
- Migration from versions 0.5.1 and lower is removed - consider the [new migration FAQ](/guide/faq/#migration-from-an-old-version) if you need to update from an older version

## [0.14.3 📖 More translations](/log/0.14.3.html)

`2022-12-14`

## [0.14.2 📖 Two new languages](/log/0.14.2.html)

`2022-12-06`

## [0.14.1 📖 Updated translation](/log/0.14.1.html)

`2022-12-05`

## [0.14.0 🎄Remove device trackers and more](/log/0.14.0.html)

`2022-12-04`

## [0.13.1 🐛 Bugfix for HA 2022-12](/log/0.13.1.html)

`2022-12-02`

## [0.13.0 🔍 Latest connected devices tracking and improved parental control](/log/0.13.0.html)

`2022-11-27`
