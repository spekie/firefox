#!/bin/sh
rm -rfv "$XDG_CACHE_HOME"/mozilla/
rm -rfv "$XDG_CONFIG_HOME"/mozilla/firefox/*.default-release/*
rm -rfv "$XDG_CONFIG_HOME"/mozilla/firefox/Crash\ Reports/
rm -rfv "$XDG_CONFIG_HOME"/mozilla/firefox/Pending\ Pings/
rm -rfv "$XDG_CONFIG_HOME"/mozilla/firefox/Profile\ Groups/
cp -v "$XDG_CONFIG_HOME"/mozilla/firefox/*.default/times.json "$XDG_CONFIG_HOME"/mozilla/firefox/*.default-release/
