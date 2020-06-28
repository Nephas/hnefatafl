// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('client.routing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
client.routing.host = document.location.host;
client.routing.origin = document.location.origin;
client.routing.path = document.location.pathname;
client.routing.player_id = ((clojure.string.includes_QMARK_(client.routing.path,"black"))?cljs.core.cst$kw$black:((clojure.string.includes_QMARK_(client.routing.path,"white"))?cljs.core.cst$kw$white:null));
client.routing.game_id = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.second(clojure.string.split.cljs$core$IFn$_invoke$arity$2(client.routing.path,/game\//)),/\//));
client.routing.secure_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("https:",document.location.protocol);
