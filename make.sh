#!/bin/sh
rm -rfv "$HOME"/.mozilla/firefox/*.default-release/*
rm -rfv "$HOME"/.mozilla/firefox/Crash\ Reports/
rm -rfv "$HOME"/.mozilla/firefox/Pending\ Pings/
rm -rfv "$HOME"/.mozilla/firefox/Profile\ Groups/
cp -v "$HOME"/.mozilla/firefox/*.default/times.json "$HOME"/.mozilla/firefox/*.default-release/
cp -v user.js "$HOME"/.mozilla/firefox/*.default-release/
