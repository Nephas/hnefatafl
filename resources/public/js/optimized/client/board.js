// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('client.board');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('client.routing');
client.board.TYPES = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$black,cljs.core.cst$kw$white,cljs.core.cst$kw$king], null);
client.board.CORNERS = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null)], null);
client.board.contains_QMARK_ = (function client$board$contains_QMARK_(coll,item){
return (!(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__3248_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__3248_SHARP_,item);
}),coll))));
});
client.board.get_type = (function client$board$get_type(game,pos){
var map__3249 = game;
var map__3249__$1 = (((((!((map__3249 == null))))?(((((map__3249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3249):map__3249);
var black_pawns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3249__$1,cljs.core.cst$kw$black);
var white_pawns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3249__$1,cljs.core.cst$kw$white);
var king = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3249__$1,cljs.core.cst$kw$king);
if(client.board.contains_QMARK_(black_pawns,pos)){
return cljs.core.cst$kw$black;
} else {
if(client.board.contains_QMARK_(white_pawns,pos)){
return cljs.core.cst$kw$white;
} else {
if(client.board.contains_QMARK_(king,pos)){
return cljs.core.cst$kw$king;
} else {
return null;

}
}
}
});
client.board.ascending_range = (function client$board$ascending_range(x1,x2){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((function (){var x__4222__auto__ = x1;
var y__4223__auto__ = x2;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})(),(function (){var x__4219__auto__ = x1;
var y__4220__auto__ = x2;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
});
client.board.without = (function client$board$without(p__3252,positions){
var vec__3253 = p__3252;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3253,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3253,(1),null);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__3253,x,y){
return (function (p1__3251_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__3251_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(vec__3253,x,y))
,positions);
});
client.board.acting_player = (function client$board$acting_player(game){
if(cljs.core.even_QMARK_(cljs.core.cst$kw$turn.cljs$core$IFn$_invoke$arity$1(game))){
return cljs.core.cst$kw$black;
} else {
return cljs.core.cst$kw$white;
}
});
client.board.is_acting_QMARK_ = (function client$board$is_acting_QMARK_(game){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client.routing.player_id,client.board.acting_player(game));
});
client.board.free_QMARK_ = (function client$board$free_QMARK_(game,pos){
return (client.board.get_type(game,pos) == null);
});
client.board.corner_QMARK_ = (function client$board$corner_QMARK_(pos){
return client.board.contains_QMARK_(client.board.CORNERS,pos);
});
client.board.blocked_QMARK_ = (function client$board$blocked_QMARK_(game,pos){
return (!(client.board.free_QMARK_(game,pos)));
});
client.board.own_QMARK_ = (function client$board$own_QMARK_(game,pos){
var type = client.board.get_type(game,pos);
var black_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client.routing.player_id,cljs.core.cst$kw$black)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$black)));
var white_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client.routing.player_id,cljs.core.cst$kw$white)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$white)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$king)))));
return ((black_QMARK_) || (white_QMARK_));
});
client.board.enemy_QMARK_ = (function client$board$enemy_QMARK_(game,pos){
return (!(client.board.own_QMARK_(game,pos)));
});
client.board.in_line_QMARK_ = (function client$board$in_line_QMARK_(p__3256,p__3257){
var vec__3258 = p__3256;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3258,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3258,(1),null);
var vec__3261 = p__3257;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3261,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3261,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,x2)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y1,y2)));
});
client.board.unblocked_QMARK_ = (function client$board$unblocked_QMARK_(game,p__3267,p__3268){
var vec__3269 = p__3267;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3269,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3269,(1),null);
var vec__3272 = p__3268;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3272,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3272,(1),null);
var spaces = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,x2))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__3269,x1,y1,vec__3272,x2,y2){
return (function (p1__3264_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[x1,p1__3264_SHARP_],null));
});})(vec__3269,x1,y1,vec__3272,x2,y2))
,client.board.ascending_range(y1,y2)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y1,y2))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__3269,x1,y1,vec__3272,x2,y2){
return (function (p1__3265_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__3265_SHARP_,y1],null));
});})(vec__3269,x1,y1,vec__3272,x2,y2))
,client.board.ascending_range(x1,x2)):null));
return (cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (spaces,vec__3269,x1,y1,vec__3272,x2,y2){
return (function (p1__3266_SHARP_){
return client.board.blocked_QMARK_(game,p1__3266_SHARP_);
});})(spaces,vec__3269,x1,y1,vec__3272,x2,y2))
,client.board.without(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),spaces))) === (0));
});
client.board.movable_QMARK_ = (function client$board$movable_QMARK_(game,source,target){
return ((client.board.is_acting_QMARK_(game)) && ((!(client.board.corner_QMARK_(target)))) && (client.board.own_QMARK_(game,source)) && (client.board.free_QMARK_(game,target)) && (client.board.in_line_QMARK_(source,target)) && (client.board.unblocked_QMARK_(game,source,target)));
});
client.board.create = (function client$board$create(game,pos,type){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(game,type,cljs.core.conj,pos);
});
client.board.clear = (function client$board$clear(var_args){
var G__3277 = arguments.length;
switch (G__3277) {
case 3:
return client.board.clear.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return client.board.clear.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

client.board.clear.cljs$core$IFn$_invoke$arity$3 = (function (game,pos,type){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(game,type,(function (p1__3275_SHARP_){
return client.board.without(pos,p1__3275_SHARP_);
}));
});

client.board.clear.cljs$core$IFn$_invoke$arity$2 = (function (game,pos){
var type = client.board.get_type(game,pos);
return client.board.clear.cljs$core$IFn$_invoke$arity$3(game,pos,type);
});

client.board.clear.cljs$lang$maxFixedArity = 3;

client.board.move = (function client$board$move(game,source,target){
var type = client.board.get_type(game,source);
return client.board.create(client.board.clear.cljs$core$IFn$_invoke$arity$3(game,source,type),target,type);
});
client.board.strike = (function client$board$strike(game,pos,direction){
var neighbor = (direction.cljs$core$IFn$_invoke$arity$2 ? direction.cljs$core$IFn$_invoke$arity$2(pos,(1)) : direction.call(null,pos,(1)));
var next_neighbor = (direction.cljs$core$IFn$_invoke$arity$2 ? direction.cljs$core$IFn$_invoke$arity$2(pos,(2)) : direction.call(null,pos,(2)));
if(((client.board.enemy_QMARK_(game,neighbor)) && (((client.board.own_QMARK_(game,next_neighbor)) || (client.board.corner_QMARK_(next_neighbor)))))){
return client.board.clear.cljs$core$IFn$_invoke$arity$2(game,neighbor);
} else {
return game;
}
});
client.board.strike_at = (function client$board$strike_at(game,target){
var left = (function (p__3279,i){
var vec__3280 = p__3279;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3280,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3280,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - i),y], null);
});
var right = ((function (left){
return (function (p__3283,i){
var vec__3284 = p__3283;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3284,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3284,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + i),y], null);
});})(left))
;
var up = ((function (left,right){
return (function (p__3287,i){
var vec__3288 = p__3287;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3288,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3288,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - i)], null);
});})(left,right))
;
var down = ((function (left,right,up){
return (function (p__3291,i){
var vec__3292 = p__3291;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3292,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3292,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + i)], null);
});})(left,right,up))
;
return client.board.strike(client.board.strike(client.board.strike(client.board.strike(game,target,up),target,down),target,left),target,right);
});
