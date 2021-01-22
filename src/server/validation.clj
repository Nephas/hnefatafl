(ns server.validation)

(def CORNERS [[0 0] [0 10] [10 0] [10 10]])

(defn check-white [pos]
  (some #{pos} CORNERS))

(defn check-black [pawns [x y]]
  (and (some #{[x (dec y)]} pawns)
       (some #{[x (inc y)]} pawns)
       (some #{[(dec x) y]} pawns)
       (some #{[(inc x) y]} pawns)))

(defn update-winner [state]
  (let [king (first (:king state))
        pawns (:black state)]
    (cond (check-white king)
          (assoc state :winner :white)

          (check-black pawns king)
          (assoc state :winner :black)

          true state)))
