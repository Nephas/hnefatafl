// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('client.rules');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('client.routing');
goog.require('client.state');
client.rules.contains_QMARK_ = (function client$rules$contains_QMARK_(coll,item){
return (!(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7122_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__7122_SHARP_,item);
}),coll))));
});
client.rules.get_type = (function client$rules$get_type(game,pos){
var map__7123 = game;
var map__7123__$1 = (((((!((map__7123 == null))))?(((((map__7123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7123):map__7123);
var black_pawns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7123__$1,cljs.core.cst$kw$black);
var white_pawns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7123__$1,cljs.core.cst$kw$white);
var king = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7123__$1,cljs.core.cst$kw$king);
if(client.rules.contains_QMARK_(black_pawns,pos)){
return cljs.core.cst$kw$black;
} else {
if(client.rules.contains_QMARK_(white_pawns,pos)){
return cljs.core.cst$kw$white;
} else {
if(client.rules.contains_QMARK_(king,pos)){
return cljs.core.cst$kw$king;
} else {
return null;

}
}
}
});
client.rules.ascending_range = (function client$rules$ascending_range(x1,x2){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((function (){var x__4222__auto__ = x1;
var y__4223__auto__ = x2;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})(),(function (){var x__4219__auto__ = x1;
var y__4220__auto__ = x2;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
});
client.rules.without = (function client$rules$without(p__7126,positions){
var vec__7127 = p__7126;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7127,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7127,(1),null);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__7127,x,y){
return (function (p1__7125_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__7125_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(vec__7127,x,y))
,positions);
});
client.rules.acting_player = (function client$rules$acting_player(game){
if(cljs.core.even_QMARK_(cljs.core.cst$kw$turn.cljs$core$IFn$_invoke$arity$1(game))){
return cljs.core.cst$kw$black;
} else {
return cljs.core.cst$kw$white;
}
});
client.rules.is_acting_QMARK_ = (function client$rules$is_acting_QMARK_(game){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client.routing.player_id,client.rules.acting_player(game));
});
client.rules.free_QMARK_ = (function client$rules$free_QMARK_(game,pos){
return (client.rules.get_type(game,pos) == null);
});
client.rules.corner_QMARK_ = (function client$rules$corner_QMARK_(pos){
return client.rules.contains_QMARK_(client.state.CORNERS,pos);
});
client.rules.blocked_QMARK_ = (function client$rules$blocked_QMARK_(game,pos){
return (!(client.rules.free_QMARK_(game,pos)));
});
client.rules.own_QMARK_ = (function client$rules$own_QMARK_(game,pos){
var type = client.rules.get_type(game,pos);
var black_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client.routing.player_id,cljs.core.cst$kw$black)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$black)));
var white_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client.routing.player_id,cljs.core.cst$kw$white)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$white)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$king)))));
return ((black_QMARK_) || (white_QMARK_));
});
client.rules.enemy_QMARK_ = (function client$rules$enemy_QMARK_(game,pos){
return (!(client.rules.own_QMARK_(game,pos)));
});
client.rules.king_QMARK_ = (function client$rules$king_QMARK_(game,pos){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$king,client.rules.get_type(game,pos))));
});
client.rules.pawn_QMARK_ = (function client$rules$pawn_QMARK_(game,pos){
var type = client.rules.get_type(game,pos);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$white)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$black)));
});
client.rules.in_line_QMARK_ = (function client$rules$in_line_QMARK_(p__7130,p__7131){
var vec__7132 = p__7130;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7132,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7132,(1),null);
var vec__7135 = p__7131;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7135,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7135,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,x2)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y1,y2)));
});
client.rules.unblocked_QMARK_ = (function client$rules$unblocked_QMARK_(game,p__7141,p__7142){
var vec__7143 = p__7141;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7143,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7143,(1),null);
var vec__7146 = p__7142;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7146,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7146,(1),null);
var spaces = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,x2))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__7143,x1,y1,vec__7146,x2,y2){
return (function (p1__7138_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[x1,p1__7138_SHARP_],null));
});})(vec__7143,x1,y1,vec__7146,x2,y2))
,client.rules.ascending_range(y1,y2)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y1,y2))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__7143,x1,y1,vec__7146,x2,y2){
return (function (p1__7139_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__7139_SHARP_,y1],null));
});})(vec__7143,x1,y1,vec__7146,x2,y2))
,client.rules.ascending_range(x1,x2)):null));
return (cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (spaces,vec__7143,x1,y1,vec__7146,x2,y2){
return (function (p1__7140_SHARP_){
return client.rules.blocked_QMARK_(game,p1__7140_SHARP_);
});})(spaces,vec__7143,x1,y1,vec__7146,x2,y2))
,client.rules.without(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),spaces))) === (0));
});
client.rules.movable_QMARK_ = (function client$rules$movable_QMARK_(game,source,target){
var and__4120__auto__ = client.rules.free_QMARK_(game,target);
if(and__4120__auto__){
var and__4120__auto____$1 = ((client.rules.pawn_QMARK_(game,source))?(!(client.rules.corner_QMARK_(target))):true);
if(and__4120__auto____$1){
return ((client.rules.in_line_QMARK_(source,target)) && (client.rules.unblocked_QMARK_(game,source,target)));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
client.rules.movable_fields = (function client$rules$movable_fields(game,source){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7149_SHARP_){
return client.rules.movable_QMARK_(game,source,p1__7149_SHARP_);
}),client.state.TILES);
});
client.rules.create = (function client$rules$create(game,pos,type){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(game,type,cljs.core.conj,pos);
});
client.rules.clear = (function client$rules$clear(var_args){
var G__7152 = arguments.length;
switch (G__7152) {
case 3:
return client.rules.clear.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return client.rules.clear.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

client.rules.clear.cljs$core$IFn$_invoke$arity$3 = (function (game,pos,type){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(game,type,(function (p1__7150_SHARP_){
return client.rules.without(pos,p1__7150_SHARP_);
}));
});

client.rules.clear.cljs$core$IFn$_invoke$arity$2 = (function (game,pos){
var type = client.rules.get_type(game,pos);
return client.rules.clear.cljs$core$IFn$_invoke$arity$3(game,pos,type);
});

client.rules.clear.cljs$lang$maxFixedArity = 3;

client.rules.move = (function client$rules$move(game,source,target){
var type = client.rules.get_type(game,source);
return client.rules.create(client.rules.clear.cljs$core$IFn$_invoke$arity$3(game,source,type),target,type);
});
client.rules.strike = (function client$rules$strike(game,pos,direction){
var neighbor = (direction.cljs$core$IFn$_invoke$arity$2 ? direction.cljs$core$IFn$_invoke$arity$2(pos,(1)) : direction.call(null,pos,(1)));
var next_neighbor = (direction.cljs$core$IFn$_invoke$arity$2 ? direction.cljs$core$IFn$_invoke$arity$2(pos,(2)) : direction.call(null,pos,(2)));
if(((client.rules.enemy_QMARK_(game,neighbor)) && (client.rules.pawn_QMARK_(game,neighbor)) && (((client.rules.own_QMARK_(game,next_neighbor)) || (client.rules.corner_QMARK_(next_neighbor)))))){
return client.rules.clear.cljs$core$IFn$_invoke$arity$2(game,neighbor);
} else {
return game;
}
});
client.rules.strike_at = (function client$rules$strike_at(game,target){
var left = (function (p__7154,i){
var vec__7155 = p__7154;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7155,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7155,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - i),y], null);
});
var right = ((function (left){
return (function (p__7158,i){
var vec__7159 = p__7158;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7159,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7159,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + i),y], null);
});})(left))
;
var up = ((function (left,right){
return (function (p__7162,i){
var vec__7163 = p__7162;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7163,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7163,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - i)], null);
});})(left,right))
;
var down = ((function (left,right,up){
return (function (p__7166,i){
var vec__7167 = p__7166;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7167,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7167,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + i)], null);
});})(left,right,up))
;
return client.rules.strike(client.rules.strike(client.rules.strike(client.rules.strike(game,target,up),target,down),target,left),target,right);
});
