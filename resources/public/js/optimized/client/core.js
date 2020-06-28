// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('client.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('client.view');
goog.require('client.actions');
goog.require('client.routing');
goog.require('client.state');
goog.require('client.connect');
client.core.store = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(client.state.init);
client.core.setup = (function client$core$setup(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["initialising game:",client.routing.game_id,"as",client.routing.player_id], 0));

quil.core.image_mode(cljs.core.cst$kw$corners);

quil.core.color_mode.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hsb,1.0);

client.view.load_graphics();

quil.core.ellipse_mode(cljs.core.cst$kw$corner);

quil.core.rect_mode(cljs.core.cst$kw$corner);

return client.connect.connect_socket(client.core.store);
});
client.core._main = (function client$core$_main(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$global_DASH_key_DASH_events], null),cljs.core.cst$kw$mouse_DASH_clicked,(function (state,event){
return client.actions.handle_click(client.core.store,event);
}),cljs.core.cst$kw$mouse_DASH_moved,(function (state,event){
return client.actions.handle_move(client.core.store,event);
}),cljs.core.cst$kw$update,(function (){
return client.view.prerender_board();
}),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.state.SCREENSIZE,client.state.SCREENSIZE], null),cljs.core.cst$kw$title,"Hnefatafl",cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(client.core.setup))?(function() { 
var G__7334__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(client.core.setup,args);
};
var G__7334 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7335__i = 0, G__7335__a = new Array(arguments.length -  0);
while (G__7335__i < G__7335__a.length) {G__7335__a[G__7335__i] = arguments[G__7335__i + 0]; ++G__7335__i;}
  args = new cljs.core.IndexedSeq(G__7335__a,0,null);
} 
return G__7334__delegate.call(this,args);};
G__7334.cljs$lang$maxFixedArity = 0;
G__7334.cljs$lang$applyTo = (function (arglist__7336){
var args = cljs.core.seq(arglist__7336);
return G__7334__delegate(args);
});
G__7334.cljs$core$IFn$_invoke$arity$variadic = G__7334__delegate;
return G__7334;
})()
:client.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$host,"canvas",cljs.core.cst$kw$key_DASH_pressed,(function (state,event){
return client.actions.handle_key(client.core.store,event);
}),cljs.core.cst$kw$draw,(function (){
return client.view.draw_state(client.core.store);
})], 0));
});
goog.exportSymbol('client.core._main', client.core._main);

if(cljs.core.truth_(cljs.core.some((function (p1__2915__2916__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__2915__2916__auto__);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$global_DASH_key_DASH_events], null)))){
} else {
quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,client.core._main,cljs.core.cst$kw$host_DASH_id,"canvas"], null));
}
