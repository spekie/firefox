#!/bin/sh
git clone https://github.com/arkenfox/user.js.git
cp -v user-overrides.js "$XDG_CONFIG_HOME"/mozilla/firefox/*.default-release/
cd user.js
cp -v prefsCleaner.sh "$XDG_CONFIG_HOME"/mozilla/firefox/*.default-release/
cp -v updater.sh "$XDG_CONFIG_HOME"/mozilla/firefox/*.default-release/
cp -v user.js "$XDG_CONFIG_HOME"/mozilla/firefox/*.default-release/
