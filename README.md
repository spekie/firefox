# userjs

My `user-overrides.js` file for [arkenfox](https://github.com/arkenfox/user.js)

## Installing

Run the Mozilla Firefox web browser at least once so it can create the directories necessary to start the browser profile, run the shell scripts included in the repository as shown below.

First run "clean.sh" in a shell like this:
```sh
./clean.sh
```
[clean.sh](clean.sh) will clear the `mozilla` directories in `$XDG_CACHE_HOME` and `$XDG_CONFIG_HOME` it will also save the default firefox profile directory however it will clear all data, history, settings and more.

Then run "make.sh" in a shell like this:
```sh
./make.sh
```
[make.sh](make.sh) will clone the [arkenfox](https://github.com/arkenfox/user.js) repository, copy the arkenfox scripts and user.js, as well as [user-overrides.js](user-overrides.js) to the default firefox profile directory

Lastly use `cd` to go into the default firefox profile directory and run the [arkenfox](https://github.com/arkenfox/user.js) shell scripts `updater.sh` to apply the overrides and `prefsCleaner.sh` when needed.
```sh
cd "$XDG_CONFIG_HOME"/mozilla/firefox/*.default-release/
./updater.sh
```
