
# Hnefatafl using Clojure and Quil 

Currently running at 
* https://fetlar-hnefatafl-dev.herokuapp.com
* https://fetlar-hnefatafl.herokuapp.com

## Server

Server source code is found in `/src/server` and will be compiled to `/target` using:

* `lein uberjar`

To start the server locally on the runtime run `main` from `/src/server/web`.

## Client

Client source code is stored in `/src/client` and will be compiled to `/resources/public/js` using:

* `lein cljsbuild auto`

## Deployment

* authenticate: `heroku login`
* connect to resource: `heroku git:remote -a {heroku-appname}`
* deploy: `git push heroku master`