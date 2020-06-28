(ns server.page
  (:require [clojure.string :as str]
            [clojure.java.io :as io]))


(defn html-response [body]
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    body})

(defn page [path]
  (slurp (io/resource path)))

(defn lobby-link [id]
  (str "<li>"
       "<a href=\"/game/" id "/lobby\"> Game: " id "</a>"
       "</li>"))

(defn index-page [games]
  (let [gameid (str (+ 10000 (rand-int 89999)))]
    (-> (page "index.html")
        (str/replace #":id" gameid)
        (str/replace #":games" (str/join (map lobby-link games)))
        (html-response))))

(defn lobby-page [id]
  (-> (page "lobby.html")
      (str/replace #":id" id)
      (html-response)))

(defn game-page [id greeting]
  (-> (page "game.html")
      (str/replace #":greeting" greeting)
      (str/replace #":id" id)
      (html-response)))