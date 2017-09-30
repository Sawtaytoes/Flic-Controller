# Flic HTTP Controller

Toggle home automation devices over LAN. This project provides a framework to create your own similar system. It currently supports two other projects: _LIFX Controller_ and _WeMo Controller_.

- [Configuration](docs/configuration.md)
- [Process Monitoring](docs/process-monitoring.md)
- [Project Commands](docs/project-commands.md)


## Start the Process
> _**NOTE:** You can swap the command `yarn` for `npm run`._

```shell
yarn start
```


## Requirements

- [fliclib-linux-hci](https://github.com/50ButtonsEach/fliclib-linux-hci)
- Linux (required by fliclib-linux-dist)
- Node.js

> _**NOTE:** When running on a **Raspberry Pi**, it's recommended to use **Raspbian**. Ubuntu 16.04 does not have proper driver support for the Broadcom Bluetooth chip._
