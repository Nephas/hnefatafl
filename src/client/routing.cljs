(ns client.routing
  (:require [clojure.string :as s]
            [clojure.string :as str]))

(def host (. (. js/document -location) -host))
(def origin (. (. js/document -location) -origin))
(def path (. (. js/document -location) -pathname))

(def player-id (cond (s/includes? path "black") :black
                     (s/includes? path "white") :white))

(def game-id (-> path
                 (str/split #"game/")
                 (second)
                 (str/split #"/")
                 (first)))

(def secure? (= "https:" (. (. js/document -location) -protocol)))
