# Legal disclaimer

## AsusRouter projects

AsusRouter is a collection of open-source projects that aim to allow users to monitor and control their network devices using Python programming language and the Home Assistant ecosystem.

Currently, AsusRouter consists of the following parts:

- Python library: [GitHub repo](https://github.com/Vaskivskyi/asusrouter) and [PyPI package](https://pypi.org/project/asusrouter/)
- Home Assistant integration: [GitHub repo](https://github.com/Vaskivskyi/ha-asusrouter)
- Python emulator: [GitHub repo](https://github.com/Vaskivskyi/asusrouter-emulator)
- Documentation: [GitHub repo](https://github.com/Vaskivskyi/docs-asusrouter) and [Website](https://asusrouter.vaskivskyi.com/)

## Legal disclaimer

AsusRouter (further referred to as the Project) is not affiliated with ASUSTek Computer Inc., its subsidiaries, or its affiliates, further referred to as Asus. The Project is not claiming any connection to Asus or its products.

The Project uses the name “AsusRouter” for a better user experience and clarity of the project's purpose. The Project has no intention to infringe on any trademarks or copyrights of Asus.

<!-- Add a link to report legal issues -->
<div align="center" style="font-size:x-large"><a href="https://github.com/Vaskivskyi/docs-asusrouter/issues/new" target="_blank">-=Report content issue=-</a></div>

## Device interactions

AsusRouter library code (further, Library) interacts with devices directly (without any 3rd-party intermediaries) using the available HTTP(S) APIs and protocols. Users are required to provide credentials to access the devices.

The Library allows users to collect data stored in the device's memory. This can include sensitive information. Sensitive information might contain (but is not limited to) user credentials, device serial numbers, MAC addresses (including the client devices) or any other information that can be used to identify the user or the device.

The Library does not store or share any sensitive information. If the data is stored, shared or processed by the user, the user is solely responsible for its safety.

<div align="center" style="font-size:x-large"><a href="https://github.com/Vaskivskyi/asusrouter/issues/new" target="_blank">-=Report data security issue=-</a></div>

AsusRouter integration for Home Assistant (further, Integration) uses the Library to interact with the devices. The Integration is designed to provide the user with the ability to monitor and control the devices using the Home Assistant ecosystem (further, HA). To use the Integration, the user is required to provide the Integration with the credentials to access the devices. The credentials are stored in the HA instance directly and cannot be accessed by the Integration without an explicit call from the HA instance.

When set up by the user, the Integration provides the HA instance with the following sensitive data: device serial number and MAC address(es), which is required to identify the device uniquely within the HA. During the operation, the Integration provides the HA with the data chosen by the user. The user can enable or disable separate types of data via the Integration configuration in HA. Any device data is stored in the HA instance database if defined by the user or the HA instance configuration.

<div align="center" style="font-size:x-large"><a href="https://github.com/Vaskivskyi/ha-asusrouter/issues/new" target="_blank">-=Report HA security issue=-</a></div>

## Device description

The Project collects general device information (hardware and software specifications, available features, device images, etc.):

- from the devices available to the Project maintainers
- from the user's reports and feedback, voluntarily provided to the Project
- from the publicly available official Asus website and documentation
- from other publicly available sources, including but not limited to news articles, online stores and forums

The Project aims to provide the user with the most accurate and up-to-date information about the devices. However, the Project cannot guarantee the accuracy of the information provided.

The Project is not responsible for any inaccuracies in the device description. Before making any decisions based on the information provided by the Project, the user is encouraged to verify the information from the official sources - each device page contains links to the official Asus website and documentation.

<div align="center" style="font-size:x-large"><a href="https://github.com/Vaskivskyi/docs-asusrouter/issues/new" target="_blank">-=Report content issue=-</a></div>

## Device emulation

AsusRouter Emulator (further, Emulator) is a Python project that aims to provide the user with the ability to test the Library and the Integration, as well as their own projects, without the need to have a real device. The Emulator is designed to mimic the behavior of the real device as closely as possible by providing similar data structures and responses. The Emulator does not store any sensitive information and uses randomized data based on the selected device model and firmware version. The accuracy of the Emulator is not guaranteed and might differ from the real device behavior.

<div align="center" style="font-size:x-large"><a href="https://github.com/Vaskivskyi/asusrouter-emulator/issues/new" target="_blank">-=Report emulator issue=-</a></div>
