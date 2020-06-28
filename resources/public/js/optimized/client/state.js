// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('client.state');
goog.require('cljs.core');
goog.require('cljs.core.constants');
client.state.SCREENSIZE = (600);
client.state.TILESIZE = (client.state.SCREENSIZE / 11.0);
client.state.TILES = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((11)));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((11))));
client.state.TYPES = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$black,cljs.core.cst$kw$white,cljs.core.cst$kw$king], null);
client.state.CORNERS = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null)], null);
client.state.init = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$selected,null,cljs.core.cst$kw$hovered,null,cljs.core.cst$kw$animation,null,cljs.core.cst$kw$movable,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$game,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$white,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$black,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$king,null,cljs.core.cst$kw$turn,(0),cljs.core.cst$kw$winner,null], null)], null);
