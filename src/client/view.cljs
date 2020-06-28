(ns client.view
  (:require [client.routing :as r]
            [client.rules :as b]
            [client.state :as s]
            [quil.core :as q]))

(def graphics (atom {}))

(defn fetch-img [id]
  (q/request-image (str r/origin "/img/" id ".png")))

(defn load-graphics []
  (println "fetching images")
  (swap! graphics #(-> % (assoc :tile [(fetch-img "tile_0")
                                       (fetch-img "tile_1")
                                       (fetch-img "tile_2")
                                       (fetch-img "tile_3")])
                       (assoc :cursor (fetch-img "cursor"))
                       (assoc :white (fetch-img "white"))
                       (assoc :king (fetch-img "king"))
                       (assoc :black (fetch-img "black"))
                       (assoc :logo (fetch-img "clojure"))
                       (assoc :vegvisir (fetch-img "vegvisir"))
                       (assoc :ouroboros (fetch-img "ouroboros")))))

(defn tiles-loaded? []
  (and (= 4 (count (:tile @graphics)))
       (not (zero? (.-width (get-in @graphics [:tile 0]))))
       (not (zero? (.-width (get-in @graphics [:tile 1]))))
       (not (zero? (.-width (get-in @graphics [:tile 2]))))
       (not (zero? (.-width (get-in @graphics [:tile 3]))))))

(defn draw-tile [img [x y]]
  (let [x (* s/TILESIZE x)
        y (* s/TILESIZE y)]
    (q/image img x y (+ s/TILESIZE x) (+ s/TILESIZE y))))

(defn draw-board []
  (q/no-tint)
  (doseq [pos s/TILES]
    (let [i (mod (hash pos) 4)]
      (draw-tile (get-in @graphics [:tile i]) pos)))

  (doseq [pos s/CORNERS]
    (let [i (mod (hash pos) 4)]
      (q/tint 0.0 0.5 0.5)
      (draw-tile (get-in @graphics [:tile i]) pos))))

(defn prerender-board []
  (when (and (nil? (:board @graphics)) (tiles-loaded?))
    (println "prerendering game board")
    (let [gr (q/create-graphics s/SCREENSIZE s/SCREENSIZE)]
      (q/with-graphics gr
                       (q/image-mode :corners)
                       (q/color-mode :hsb 1.0)
                       (q/no-tint)
                       (draw-board))
      (swap! graphics assoc :board gr))))

(defn oscillate [min max]
  (+ min (* (- max min) (q/sin (/ (q/millis) 1000)))))

(defn draw-ornaments [game]
  (let [value (cond (nil? (:winner game)) 0.33
                    (= (:winner game) :white) 1.0
                    (= (:winner game) :black) 0.0)]
    (q/tint 0.0 0.0 value 0.5))

  (q/with-translation [(* 0.5 s/SCREENSIZE) (* 0.5 s/SCREENSIZE)]
                      (q/with-rotation [(/ (q/millis) -30000)]
                                       (q/image (:ouroboros @graphics)
                                                (* -0.5 s/SCREENSIZE) (* -0.5 s/SCREENSIZE)
                                                (* 0.5 s/SCREENSIZE) (* 0.5 s/SCREENSIZE))))

  (let [value (cond (some? (:winner game)) 0.33
                    (= (b/acting-player game) :white) (oscillate 0.8 1.0)
                    (= (b/acting-player game) :black) (oscillate 0.0 0.2))]
    (q/tint 0.0 0.0 value 0.5))

  (q/image (:vegvisir @graphics) 0 0 s/SCREENSIZE s/SCREENSIZE))

(defn draw-figures [game]
  (q/no-tint)
  (doseq [pos (:white game)]
    (draw-tile (:white @graphics) pos))
  (doseq [pos (:black game)]
    (draw-tile (:black @graphics) pos))
  (doseq [pos (:king game)]
    (draw-tile (:king @graphics) pos)))

(defn draw-gui [store]
  (q/tint 0.0 0.5 0.5)
  (doseq [highlight (:movable @store)]
    (draw-tile (:cursor @graphics) highlight))

  (let [highlight (:selected @store)]
    (when (some? highlight)
      (draw-tile (:cursor @graphics) highlight)))

  (q/tint 0.0 0.0 0.8)
  (let [highlight (:hovered @store)]
    (when (some? highlight)
      (draw-tile (:cursor @graphics) highlight))))

(defn draw-state [store]
  (when (and (tiles-loaded?) (some? (:board @graphics)))
    (q/image (:board @graphics) 0 0 s/SCREENSIZE s/SCREENSIZE)
    (draw-ornaments (:game @store))
    (draw-figures (:game @store))
    (draw-gui store)))