(ns client.rules
  (:require [client.routing :as r]
            [client.state :as s]))


(defn contains? [coll item]
  (not (empty? (filter #(= % item) coll))))

(defn get-type [game pos]
  (let [{black-pawns :black
         white-pawns :white
         king        :king} game]
    (cond (contains? black-pawns pos) :black
          (contains? white-pawns pos) :white
          (contains? king pos) :king
          true nil)))

(defn ascending-range [x1 x2]
  (range (min x1 x2) (max x1 x2)))

(defn without [[x y] positions]
  (remove #(= % [x y]) positions))

(defn acting-player [game]
  (if (even? (:turn game))
    :black :white))

(defn is-acting? [game]
  (= r/player-id (acting-player game)))

(defn free? [game pos]
  (nil? (get-type game pos)))

(defn corner? [pos]
  (contains? s/CORNERS pos))

(defn blocked? [game pos]
  (not (free? game pos)))

(defn own? [game pos]
  (let [type (get-type game pos)
        black? (and (= r/player-id :black) (= type :black))
        white? (and (= r/player-id :white) (or (= type :white) (= type :king)))]
    (or black? white?)))

(defn enemy? [game pos]
  (not (own? game pos)))

(defn king? [game pos]
  (not (= :king (get-type game pos))))

(defn pawn? [game pos]
  (let [type (get-type game pos)]
    (or (= type :white) (= type :black))))

(defn in-line? [[x1 y1] [x2 y2]]
  (or (= x1 x2) (= y1 y2)))

(defn unblocked? [game [x1 y1] [x2 y2]]
  (let [spaces (cond (= x1 x2) (map #(vector x1 %) (ascending-range y1 y2))
                     (= y1 y2) (map #(vector % y1) (ascending-range x1 x2)))]
    (zero? (count (filter #(blocked? game %)
                          (without [x1 y1] spaces))))))

(defn movable? [game source target]
  (and (free? game target)
       (if (pawn? game source) (not (corner? target)) true)
       (in-line? source target)
       (unblocked? game source target)))

(defn movable-fields [game source]
  (filter #(movable? game source %) s/TILES))

(defn create [game pos type]
  (update game type conj pos))

(defn clear
  ([game pos type]
   (update game type #(without pos %)))
  ([game pos]
   (let [type (get-type game pos)]
     (clear game pos type))))

(defn move [game source target]
  (let [type (get-type game source)]
    (-> game
        (clear source type)
        (create target type))))

(defn strike [game pos direction]
  (let [neighbor (direction pos 1)
        next-neighbor (direction pos 2)]
    (if (and (enemy? game neighbor)
             (pawn? game neighbor)
             (or (own? game next-neighbor) (corner? next-neighbor)))
      (clear game neighbor)
      game)))

(defn strike-at [game target]
  (let [left (fn [[x y] i] [(- x i) y])
        right (fn [[x y] i] [(+ x i) y])
        up (fn [[x y] i] [x (- y i)])
        down (fn [[x y] i] [x (+ y i)])]
    (-> game
        (strike target up)
        (strike target down)
        (strike target left)
        (strike target right))))
