(ns client.actions
  (:require [client.rules :as b]
            [client.connect :refer [send]]
            [quil.core :as q]
            [client.state :as s]))

(defn commit! [state]
  (send (str "push " (:game state))))

(defn restart! []
  (send "restart"))

(defn handle-move [store event]
  (let [screenpos [(:x event) (:y event)]
        pos (mapv #(int (/ % s/TILESIZE)) screenpos)]
    (swap! store assoc :hovered pos)))

(defn handle-click [store event]
  (let [button (:button event)
        {target  :hovered
         source  :selected
         movable :movable
         game    :game} @store]
    (cond (and (= :left button) (b/own? game target))
          (swap! store #(-> %
                            (assoc :selected target)
                            (assoc :movable (b/movable-fields game target))))
          (and (= :right button) (b/is-acting? game)
               (b/own? game source) (b/movable? game source target))
          (do (swap! store assoc :transition [source target 0])
              (commit!
                (swap! store #(-> %
                                  (update :game b/move source target)
                                  (update :game b/strike-at target)
                                  (update-in [:game :turn] inc)
                                  (assoc :selected nil)
                                  (assoc :movable []))))))))

(defn handle-key [store event]
  (let [key (:key event)]
    (do (println "keypress: " (q/key-code) " - " (:key event))
        (if (= key :r) (restart!)))))