(defproject hnefatafl "1.0.0-SNAPSHOT"
  :description "Demo Clojure web app"
  :url "https://fetlar-hnefatafl.herokuapp.com"
  :license {:name "Eclipse Public License v1.0"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.520"]

                 [compojure "1.6.1"]
                 [ring/ring-jetty-adapter "1.7.1"]
                 [http-kit "2.3.0"]
                 [environ "1.1.0"]

                 [quil "2.7.1"]
                 [org.clojure/data.json "1.0.0"]]
  :min-lein-version "2.0.0"

  :plugins [[environ/environ.lein "0.3.1"]
            [lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.15"]]

  :hooks [environ.leiningen.hooks
          leiningen.cljsbuild
          ]

  :uberjar-name "server-standalone.jar"
  :cljsbuild {:builds [{:id           "optimized"
                        :source-paths ["src"]
                        :compiler     {:main          "client.core"
                                       :output-to     "resources/public/js/main.js"
                                       :output-dir    "resources/public/js/optimized"
                                       :asset-path    "js/optimized"
                                       :optimizations :advanced}}]})
