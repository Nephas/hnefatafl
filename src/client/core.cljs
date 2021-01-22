(ns client.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [client.view :as v]
            [client.actions :as a]
            [client.routing :as r]
            [client.state :as s]
            [client.connect :as c]))


(def store (atom s/init))

(defn setup []
  (println "initialising game:" r/game-id "as" r/player-id)
  (q/image-mode :corners)
  (q/color-mode :hsb 1.0)
  (v/load-graphics)
  (q/ellipse-mode :corner)
  (q/rect-mode :corner)
  (c/connect-socket store))

(q/defsketch -main
             :title "Hnefatafl"
             :size [s/SCREENSIZE s/SCREENSIZE]
             :setup setup

             :host "canvas"

             :key-pressed (fn [_ event] (a/handle-key store event))
             :mouse-clicked (fn [_ event] (a/handle-click store event))
             :mouse-moved (fn [_ event] (a/handle-move store event))
             :update (fn [] (v/prerender-board))
             :draw (fn [] (v/draw-state store))

             :middleware [m/fun-mode]
             :features [:global-key-events])