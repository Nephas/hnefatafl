// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('client.connect');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');
goog.require('client.routing');
client.connect.socket = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
client.connect.send = (function client$connect$send(msg){
return cljs.core.deref(client.connect.socket).send(msg);
});
client.connect.connect_socket = (function client$connect$connect_socket(store){
var protocol = ((client.routing.secure_QMARK_)?"wss:":"ws:");
var channel = [protocol,"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(client.routing.host),"/game/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(client.routing.game_id),"/ws"].join('');
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["connecting to socket",channel], 0));

cljs.core.reset_BANG_(client.connect.socket,(new WebSocket(channel)));

cljs.core.deref(client.connect.socket).onopen = ((function (protocol,channel){
return (function (){
return client.connect.send(["connect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(client.routing.player_id)].join(''));
});})(protocol,channel))
;

cljs.core.deref(client.connect.socket).onerror = ((function (protocol,channel){
return (function (){
return alert("error");
});})(protocol,channel))
;

return cljs.core.deref(client.connect.socket).onmessage = ((function (protocol,channel){
return (function (event){
var data = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(event.data);
if(cljs.core.map_QMARK_(data)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(store,cljs.core.assoc,cljs.core.cst$kw$game,data);
} else {
if((data == null)){
return client.connect.send("reset");
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["string:",data], 0));

}
}
});})(protocol,channel))
;
});
