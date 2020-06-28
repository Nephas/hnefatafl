(ns client.connect
  (:require
    [cljs.reader :as reader]
    [client.routing :as r]))



(def socket (atom nil))

(defn send [msg]
  (.send @socket msg))

(defn connect-socket [store]
  (let [protocol (if r/secure? "wss:" "ws:")
        channel (str protocol "//" r/host "/game/" r/game-id "/ws")]
    (println "connecting to socket" channel)
    (reset! socket (js/WebSocket. channel))

    (set! (.-onopen @socket)
          (fn [] (send (str "connect " r/player-id))))

    (set! (.-onerror @socket)
          (fn [] (js/alert "error")))

    (set! (.-onmessage @socket)
          (fn [event]
            (let [data (reader/read-string (.-data event))]
              (cond (map? data) (swap! store assoc :game data)
                    (nil? data) (send "reset")
                    true (println "string:" data)))))))
