# Change Log

:::tip This is only a list of releases + breaking changes.

For the full change log, click on the version number / title here or in the sidebar.
:::

## [0.17.4 π One more](/log/0.17.4.html)

`2023-01-09`

## [0.17.3 π£ A new bugfix for older devices](/log/0.17.3.html)

`2023-01-09`

## [0.17.2 π¨ Migration improvement](/log/0.17.2.html)

`2023-01-09`

## [0.17.1 π A bugfix](/log/0.17.1.html)

`2023-01-08`

## [0.17.0 π AiMesh support](/log/0.17.0.html)

`2023-01-08`

## [0.16.1 π¨βπ§βπ¦ Guest WLAN bugfix](/log/0.16.1.html)

`2022-12-31`

#### π₯ Breaking

- `macmode` attribute of Guest WLAN switches / binary sensors changed to string instead of boolean. More details on the possible values [here](/features/guest-wlan.html#macmode)

## [0.16.0 π Many small improvements](/log/0.16.0.html)

`2022-12-25`

#### π₯ Breaking

- Services `asusrouter.adjust_wlan` and `asusrouter.device_internet_access` are available only in `control` mode of the integration - which would be the correct expected behaviour.

## [0.15.1 π Dutch translation](/log/0.15.1.html)

`2022-12-18`

## [0.15.0 π‘οΈ More temperatures and fixes](/log/0.15.0.html)

`2022-12-18`

#### π£ Known issues

- Updating to this version might disable your current temperature sensors and create the new ones. In this case, please remove the old entities, enable the new ones and assign them entity_id's as before.

#### π₯ Breaking

- Deprecated in [0.13.0](/log/0.13.0.html) `entity_id`, `mac` and `name` parameters of `asusrouter.device_internet_access` service are removed
- Migration from versions 0.5.1 and lower is removed - consider the [new migration FAQ](/guide/faq/#migration-from-an-old-version) if you need to update from an older version

## [0.14.3 π More translations](/log/0.14.3.html)

`2022-12-14`

## [0.14.2 π Two new languages](/log/0.14.2.html)

`2022-12-06`

## [0.14.1 π Updated translation](/log/0.14.1.html)

`2022-12-05`

## [0.14.0 πRemove device trackers and more](/log/0.14.0.html)

`2022-12-04`

## [0.13.1 π Bugfix for HA 2022-12](/log/0.13.1.html)

`2022-12-02`

## [0.13.0 π Latest connected devices tracking and improved parental control](/log/0.13.0.html)

`2022-11-27`
