(ns server.web
  (:require [compojure.core :refer [context defroutes GET ANY]]
            [compojure.route :as route]
            [org.httpkit.server :as http]
            [environ.core :refer [env]]
            [clojure.string :as str]
            [server.state :as s]
            [server.page :as p]
            [server.validation :as v]))

(def store (atom {}))

(def channels (atom {}))

(defn broadcast-at [id msg]
  (doseq [other (get @channels id)]
    (http/send! other msg)))

(defn serialize-game [id]
  (str (get @store id)))

(defn initialize-game [id]
  (swap! store assoc id s/init))

(defn handle [msg channel id]
  (cond (str/includes? msg "connect")
        (do (println id "-" msg)
            (swap! channels update id conj channel)
            (http/send! channel (serialize-game id))
            (broadcast-at id msg))

        (str/includes? msg "restart")
        (do (println id "-" msg)
            (initialize-game id)
            (broadcast-at id (serialize-game id)))

        (str/includes? msg "push")
        (let [new-state (read-string (last (str/split msg #"push")))]
          (do (println id "- commiting turn" (:turn new-state))
              (swap! store assoc id new-state)
              (swap! store update id v/update-winner)
              (broadcast-at id (serialize-game id))))))

(defn ws-handler [id]
  (fn [req]
    (http/with-channel req channel
                       (http/on-close channel (fn [status] (println id "- disconnect channel")))
                       (http/on-receive channel (fn [msg] (handle msg channel id))))))

(defroutes routes
           (route/resources "/")
           (route/files "/img")
           (route/files "/font")
           (GET "/" [] (p/index-page (keys @store)))
           (GET "/rules" [] (p/html-response (p/page "rules.html")))
           (context "/game/:id" [id]
             (GET "/ws" [] (ws-handler id))
             (GET "/lobby" [] (p/lobby-page id))
             (GET "/black" [] (p/game-page id "Take the King!"))
             (GET "/white" [] (p/game-page id "Protect the King!"))))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (println (str "http://localhost:" port))
    (http/run-server routes {:port port})))
