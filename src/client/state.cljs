(ns client.state)

(def SCREENSIZE 600)
(def TILESIZE (/ SCREENSIZE 11.0))
(def TILES (apply concat (map (fn [x] (map (fn [y] [x y])
                                           (range 11))) (range 11))))

(def CORNERS [[0 0] [0 10] [10 0] [10 10]])

(def init {:selected nil
           :hovered  nil
           :animation nil
           :movable  []
           :game     {:white  []
                      :black  []
                      :king   nil
                      :turn   0
                      :winner nil}})