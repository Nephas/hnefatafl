(ns server.validation)

(def CORNERS [[0 0] [0 10] [10 0] [10 10]])

(defn contains? [coll item]
  (not (empty? (filter #(= % item) coll))))

(defn check-white [pos]
  (contains? CORNERS pos))

(defn check-black [pawns [x y]]
  (and (contains? pawns [x (dec y)])
       (contains? pawns [x (inc y)])
       (contains? pawns [(dec x) y])
       (contains? pawns [(inc x) y])))

(defn update-winner [state]
  (let [king (first (:king state))
        pawns (:black state)]
    (cond (check-white king)
          (assoc state :winner :white)

          (check-black pawns king)
          (assoc state :winner :black)

          true state)))
