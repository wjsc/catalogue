#!/bin/bash
cd /var/www/catalogue/
npm install
pm2 --no-daemon start npm --name catalogue -- run start

