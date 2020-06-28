#!/usr/bin/env bash

cd /home/marco-private/Projects/hnefatafl
heroku login

git push heroku master
heroku logs --tail