# Running Flic Daemon

## Development
sudo ~/projects/fliclib-linux-hci/bin/armv6l/flicd -f flic-db.sqlite3 -w -s 0.0.0.0

## Production
sudo ~/projects/fliclib-linux-hci/bin/armv6l/flicd -f flic-db.sqlite3 -w -d


# Raspberry Pi Config
```shell
sudo raspi-config
```

# Add Bluetooth to Raspberry Pi 3
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update
sudo apt install htop curl git software-properties-common yarn python-pip
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
bash
nvm install stable
sudo ln -s `which nodejs` /usr/local/bin/node
npm i -g pm2@latest
pm2 completion install

pm2 startup
pm2 save


sudo apt -y dist-upgrade
sudo apt -y remove cups*
sudo apt -y remove gnome*
sudo apt -y remove x11-common*
sudo apt-get -y autoremove


mkdir scripts

nano scripts/scan-new-clients.sh

#!/bin/bash
node ~/projects/fliclib-linux-hci/clientlib/nodejs/newscanwizard.js

nano scripts/start-flic-daemon.sh

#!/bin/bash
sudo ~/projects/fliclib-linux-hci/bin/armv6l/flicd -f ~/flic-db.sqlite3 -w -s 0.0.0.0 -d


crontab -e
@reboot /home/pi/scripts/start-flic-daemon.sh


# [Wi-Fi Setup](https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md)
```shell
sudo su -
wpa_passphrase "ssid" "password" >> /etc/wpa_supplicant/wpa_supplicant.conf
wpa_cli reconfigure
```
