(ns client.routing
  (:require [clojure.string :refer [split includes?]]))

(def host (. (. js/document -location) -host))
(def origin (. (. js/document -location) -origin))
(def path (. (. js/document -location) -pathname))

(def player-id (cond (includes? path "black") :black
                     (includes? path "white") :white))

(def game-id (-> path
                 (split #"game/")
                 (second)
                 (split #"/")
                 (first)))

(def secure? (= "https:" (. (. js/document -location) -protocol)))
