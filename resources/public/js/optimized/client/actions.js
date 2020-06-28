// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('client.actions');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('client.rules');
goog.require('client.connect');
goog.require('quil.core');
goog.require('client.state');
client.actions.commit_BANG_ = (function client$actions$commit_BANG_(state){
return client.connect.send(["push ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(state))].join(''));
});
client.actions.reset_BANG_ = (function client$actions$reset_BANG_(){
return client.connect.send("reset");
});
client.actions.handle_move = (function client$actions$handle_move(store,event){
var screenpos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(event),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(event)], null);
var pos = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (screenpos){
return (function (p1__7327_SHARP_){
return ((p1__7327_SHARP_ / client.state.TILESIZE) | (0));
});})(screenpos))
,screenpos);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(store,cljs.core.assoc,cljs.core.cst$kw$hovered,pos);
});
client.actions.handle_click = (function client$actions$handle_click(store,event){
var button = cljs.core.cst$kw$button.cljs$core$IFn$_invoke$arity$1(event);
var map__7330 = cljs.core.deref(store);
var map__7330__$1 = (((((!((map__7330 == null))))?(((((map__7330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7330):map__7330);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7330__$1,cljs.core.cst$kw$hovered);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7330__$1,cljs.core.cst$kw$selected);
var movable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7330__$1,cljs.core.cst$kw$movable);
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7330__$1,cljs.core.cst$kw$game);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$left,button)) && (client.rules.own_QMARK_(game,target)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(store,((function (button,map__7330,map__7330__$1,target,source,movable,game){
return (function (p1__7328_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__7328_SHARP_,cljs.core.cst$kw$selected,target),cljs.core.cst$kw$movable,client.rules.movable_fields(game,target));
});})(button,map__7330,map__7330__$1,target,source,movable,game))
);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right,button)) && (client.rules.is_acting_QMARK_(game)) && (client.rules.own_QMARK_(game,source)) && (client.rules.movable_QMARK_(game,source,target)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(store,cljs.core.assoc,cljs.core.cst$kw$transition,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [source,target,(0)], null));

return client.actions.commit_BANG_(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(store,((function (button,map__7330,map__7330__$1,target,source,movable,game){
return (function (p1__7329_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(p1__7329_SHARP_,cljs.core.cst$kw$game,client.rules.move,source,target),cljs.core.cst$kw$game,client.rules.strike_at,target),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$turn], null),cljs.core.inc),cljs.core.cst$kw$selected,null),cljs.core.cst$kw$movable,cljs.core.PersistentVector.EMPTY);
});})(button,map__7330,map__7330__$1,target,source,movable,game))
));
} else {
return null;
}
}
});
client.actions.handle_key = (function client$actions$handle_key(store,event){
var key = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(event);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["keypress: ",quil.core.key_code()," - ",cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(event)], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$r)){
return client.actions.reset_BANG_();
} else {
return null;
}
});
