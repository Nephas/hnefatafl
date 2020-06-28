// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('client.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('client.routing');
goog.require('client.rules');
goog.require('client.state');
goog.require('quil.core');
client.view.graphics = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
client.view.fetch_img = (function client$view$fetch_img(id){
return quil.core.request_image([cljs.core.str.cljs$core$IFn$_invoke$arity$1(client.routing.origin),"/img/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".png"].join(''));
});
client.view.load_graphics = (function client$view$load_graphics(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fetching images"], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(client.view.graphics,(function (p1__7174_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__7174_SHARP_,cljs.core.cst$kw$tile,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.view.fetch_img("tile_0"),client.view.fetch_img("tile_1"),client.view.fetch_img("tile_2"),client.view.fetch_img("tile_3")], null)),cljs.core.cst$kw$cursor,client.view.fetch_img("cursor")),cljs.core.cst$kw$white,client.view.fetch_img("white")),cljs.core.cst$kw$king,client.view.fetch_img("king")),cljs.core.cst$kw$black,client.view.fetch_img("black")),cljs.core.cst$kw$logo,client.view.fetch_img("clojure")),cljs.core.cst$kw$vegvisir,client.view.fetch_img("vegvisir")),cljs.core.cst$kw$ouroboros,client.view.fetch_img("ouroboros"));
}));
});
client.view.tiles_loaded_QMARK_ = (function client$view$tiles_loaded_QMARK_(){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.count(cljs.core.cst$kw$tile.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(client.view.graphics))))) && ((!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(client.view.graphics),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tile,(0)], null)).width === (0))))) && ((!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(client.view.graphics),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tile,(1)], null)).width === (0))))) && ((!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(client.view.graphics),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tile,(2)], null)).width === (0))))) && ((!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(client.view.graphics),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tile,(3)], null)).width === (0))))));
});
client.view.draw_tile = (function client$view$draw_tile(img,p__7175){
var vec__7176 = p__7175;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7176,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7176,(1),null);
var x__$1 = (client.state.TILESIZE * x);
var y__$1 = (client.state.TILESIZE * y);
return quil.core.image.cljs$core$IFn$_invoke$arity$5(img,x__$1,y__$1,(client.state.TILESIZE + x__$1),(client.state.TILESIZE + y__$1));
});
client.view.draw_board = (function client$view$draw_board(){
quil.core.no_tint();

var seq__7179_7187 = cljs.core.seq(client.state.TILES);
var chunk__7180_7188 = null;
var count__7181_7189 = (0);
var i__7182_7190 = (0);
while(true){
if((i__7182_7190 < count__7181_7189)){
var pos_7191 = chunk__7180_7188.cljs$core$IIndexed$_nth$arity$2(null,i__7182_7190);
var i_7192 = cljs.core.mod(cljs.core.hash(pos_7191),(4));
client.view.draw_tile(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(client.view.graphics),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tile,i_7192], null)),pos_7191);


var G__7193 = seq__7179_7187;
var G__7194 = chunk__7180_7188;
var G__7195 = count__7181_7189;
var G__7196 = (i__7182_7190 + (1));
seq__7179_7187 = G__7193;
chunk__7180_7188 = G__7194;
count__7181_7189 = G__7195;
i__7182_7190 = G__7196;
continue;
} else {
var temp__5720__auto___7197 = cljs.core.seq(seq__7179_7187);
if(temp__5720__auto___7197){
var seq__7179_7198__$1 = temp__5720__auto___7197;
if(cljs.core.chunked_seq_QMARK_(seq__7179_7198__$1)){
var c__4550__auto___7199 = cljs.core.chunk_first(seq__7179_7198__$1);
var G__7200 = cljs.core.chunk_rest(seq__7179_7198__$1);
var G__7201 = c__4550__auto___7199;
var G__7202 = cljs.core.count(c__4550__auto___7199);
var G__7203 = (0);
seq__7179_7187 = G__7200;
chunk__7180_7188 = G__7201;
count__7181_7189 = G__7202;
i__7182_7190 = G__7203;
continue;
} else {
var pos_7204 = cljs.core.first(seq__7179_7198__$1);
var i_7205 = cljs.core.mod(cljs.core.hash(pos_7204),(4));
client.view.draw_tile(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(client.view.graphics),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tile,i_7205], null)),pos_7204);


var G__7206 = cljs.core.next(seq__7179_7198__$1);
var G__7207 = null;
var G__7208 = (0);
var G__7209 = (0);
seq__7179_7187 = G__7206;
chunk__7180_7188 = G__7207;
count__7181_7189 = G__7208;
i__7182_7190 = G__7209;
continue;
}
} else {
}
}
break;
}

var seq__7183 = cljs.core.seq(client.state.CORNERS);
var chunk__7184 = null;
var count__7185 = (0);
var i__7186 = (0);
while(true){
if((i__7186 < count__7185)){
var pos = chunk__7184.cljs$core$IIndexed$_nth$arity$2(null,i__7186);
var i_7210 = cljs.core.mod(cljs.core.hash(pos),(4));
quil.core.tint.cljs$core$IFn$_invoke$arity$3(0.0,0.5,0.5);

client.view.draw_tile(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(client.view.graphics),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tile,i_7210], null)),pos);


var G__7211 = seq__7183;
var G__7212 = chunk__7184;
var G__7213 = count__7185;
var G__7214 = (i__7186 + (1));
seq__7183 = G__7211;
chunk__7184 = G__7212;
count__7185 = G__7213;
i__7186 = G__7214;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__7183);
if(temp__5720__auto__){
var seq__7183__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7183__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__7183__$1);
var G__7215 = cljs.core.chunk_rest(seq__7183__$1);
var G__7216 = c__4550__auto__;
var G__7217 = cljs.core.count(c__4550__auto__);
var G__7218 = (0);
seq__7183 = G__7215;
chunk__7184 = G__7216;
count__7185 = G__7217;
i__7186 = G__7218;
continue;
} else {
var pos = cljs.core.first(seq__7183__$1);
var i_7219 = cljs.core.mod(cljs.core.hash(pos),(4));
quil.core.tint.cljs$core$IFn$_invoke$arity$3(0.0,0.5,0.5);

client.view.draw_tile(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(client.view.graphics),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tile,i_7219], null)),pos);


var G__7220 = cljs.core.next(seq__7183__$1);
var G__7221 = null;
var G__7222 = (0);
var G__7223 = (0);
seq__7183 = G__7220;
chunk__7184 = G__7221;
count__7185 = G__7222;
i__7186 = G__7223;
continue;
}
} else {
return null;
}
}
break;
}
});
client.view.prerender_board = (function client$view$prerender_board(){
if((((cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(client.view.graphics)) == null)) && (client.view.tiles_loaded_QMARK_()))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["prerendering game board"], 0));

var gr = quil.core.create_graphics.cljs$core$IFn$_invoke$arity$2(client.state.SCREENSIZE,client.state.SCREENSIZE);
var gr__3988__auto___7226 = gr;
var _STAR_graphics_STAR__orig_val__7224_7227 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__7225_7228 = gr__3988__auto___7226;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__7225_7228;

try{gr__3988__auto___7226.beginDraw();

quil.core.image_mode(cljs.core.cst$kw$corners);

quil.core.color_mode.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hsb,1.0);

quil.core.no_tint();

client.view.draw_board();

gr__3988__auto___7226.endDraw();
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__7224_7227;
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(client.view.graphics,cljs.core.assoc,cljs.core.cst$kw$board,gr);
} else {
return null;
}
});
client.view.oscillate = (function client$view$oscillate(min,max){
return (min + ((max - min) * quil.core.sin((quil.core.millis() / (1000)))));
});
client.view.draw_ornaments = (function client$view$draw_ornaments(game){
var value_7229 = (((cljs.core.cst$kw$winner.cljs$core$IFn$_invoke$arity$1(game) == null))?0.33:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$winner.cljs$core$IFn$_invoke$arity$1(game),cljs.core.cst$kw$white))?1.0:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$winner.cljs$core$IFn$_invoke$arity$1(game),cljs.core.cst$kw$black))?0.0:null)));
quil.core.tint.cljs$core$IFn$_invoke$arity$4(0.0,0.0,value_7229,0.5);

var tr__3976__auto___7230 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.5 * client.state.SCREENSIZE),(0.5 * client.state.SCREENSIZE)], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__3976__auto___7230);

var tr__3982__auto___7231 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.millis() / (-30000))], null);
quil.core.push_matrix();

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.rotate,tr__3982__auto___7231);

quil.core.image.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$ouroboros.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(client.view.graphics)),(-0.5 * client.state.SCREENSIZE),(-0.5 * client.state.SCREENSIZE),(0.5 * client.state.SCREENSIZE),(0.5 * client.state.SCREENSIZE));
}finally {quil.core.pop_matrix();
}}finally {quil.core.pop_matrix();
}
var value_7232 = (((!((cljs.core.cst$kw$winner.cljs$core$IFn$_invoke$arity$1(game) == null))))?0.33:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client.rules.acting_player(game),cljs.core.cst$kw$white))?client.view.oscillate(0.8,1.0):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client.rules.acting_player(game),cljs.core.cst$kw$black))?client.view.oscillate(0.0,0.2):null)));
quil.core.tint.cljs$core$IFn$_invoke$arity$4(0.0,0.0,value_7232,0.5);

return quil.core.image.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$vegvisir.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(client.view.graphics)),(0),(0),client.state.SCREENSIZE,client.state.SCREENSIZE);
});
client.view.draw_figures = (function client$view$draw_figures(game){
quil.core.no_tint();

var seq__7233_7245 = cljs.core.seq(cljs.core.cst$kw$white.cljs$core$IFn$_invoke$arity$1(game));
var chunk__7234_7246 = null;
var count__7235_7247 = (0);
var i__7236_7248 = (0);
while(true){
if((i__7236_7248 < count__7235_7247)){
var pos_7249 = chunk__7234_7246.cljs$core$IIndexed$_nth$arity$2(null,i__7236_7248);
client.view.draw_tile(cljs.core.cst$kw$white.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(client.view.graphics)),pos_7249);


var G__7250 = seq__7233_7245;
var G__7251 = chunk__7234_7246;
var G__7252 = count__7235_7247;
var G__7253 = (i__7236_7248 + (1));
seq__7233_7245 = G__7250;
chunk__7234_7246 = G__7251;
count__7235_7247 = G__7252;
i__7236_7248 = G__7253;
continue;
} else {
var temp__5720__auto___7254 = cljs.core.seq(seq__7233_7245);
if(temp__5720__auto___7254){
var seq__7233_7255__$1 = temp__5720__auto___7254;
if(cljs.core.chunked_seq_QMARK_(seq__7233_7255__$1)){
var c__4550__auto___7256 = cljs.core.chunk_first(seq__7233_7255__$1);
var G__7257 = cljs.core.chunk_rest(seq__7233_7255__$1);
var G__7258 = c__4550__auto___7256;
var G__7259 = cljs.core.count(c__4550__auto___7256);
var G__7260 = (0);
seq__7233_7245 = G__7257;
chunk__7234_7246 = G__7258;
count__7235_7247 = G__7259;
i__7236_7248 = G__7260;
continue;
} else {
var pos_7261 = cljs.core.first(seq__7233_7255__$1);
client.view.draw_tile(cljs.core.cst$kw$white.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(client.view.graphics)),pos_7261);


var G__7262 = cljs.core.next(seq__7233_7255__$1);
var G__7263 = null;
var G__7264 = (0);
var G__7265 = (0);
seq__7233_7245 = G__7262;
chunk__7234_7246 = G__7263;
count__7235_7247 = G__7264;
i__7236_7248 = G__7265;
continue;
}
} else {
}
}
break;
}

var seq__7237_7266 = cljs.core.seq(cljs.core.cst$kw$black.cljs$core$IFn$_invoke$arity$1(game));
var chunk__7238_7267 = null;
var count__7239_7268 = (0);
var i__7240_7269 = (0);
while(true){
if((i__7240_7269 < count__7239_7268)){
var pos_7270 = chunk__7238_7267.cljs$core$IIndexed$_nth$arity$2(null,i__7240_7269);
client.view.draw_tile(cljs.core.cst$kw$black.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(client.view.graphics)),pos_7270);


var G__7271 = seq__7237_7266;
var G__7272 = chunk__7238_7267;
var G__7273 = count__7239_7268;
var G__7274 = (i__7240_7269 + (1));
seq__7237_7266 = G__7271;
chunk__7238_7267 = G__7272;
count__7239_7268 = G__7273;
i__7240_7269 = G__7274;
continue;
} else {
var temp__5720__auto___7275 = cljs.core.seq(seq__7237_7266);
if(temp__5720__auto___7275){
var seq__7237_7276__$1 = temp__5720__auto___7275;
if(cljs.core.chunked_seq_QMARK_(seq__7237_7276__$1)){
var c__4550__auto___7277 = cljs.core.chunk_first(seq__7237_7276__$1);
var G__7278 = cljs.core.chunk_rest(seq__7237_7276__$1);
var G__7279 = c__4550__auto___7277;
var G__7280 = cljs.core.count(c__4550__auto___7277);
var G__7281 = (0);
seq__7237_7266 = G__7278;
chunk__7238_7267 = G__7279;
count__7239_7268 = G__7280;
i__7240_7269 = G__7281;
continue;
} else {
var pos_7282 = cljs.core.first(seq__7237_7276__$1);
client.view.draw_tile(cljs.core.cst$kw$black.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(client.view.graphics)),pos_7282);


var G__7283 = cljs.core.next(seq__7237_7276__$1);
var G__7284 = null;
var G__7285 = (0);
var G__7286 = (0);
seq__7237_7266 = G__7283;
chunk__7238_7267 = G__7284;
count__7239_7268 = G__7285;
i__7240_7269 = G__7286;
continue;
}
} else {
}
}
break;
}

var seq__7241 = cljs.core.seq(cljs.core.cst$kw$king.cljs$core$IFn$_invoke$arity$1(game));
var chunk__7242 = null;
var count__7243 = (0);
var i__7244 = (0);
while(true){
if((i__7244 < count__7243)){
var pos = chunk__7242.cljs$core$IIndexed$_nth$arity$2(null,i__7244);
client.view.draw_tile(cljs.core.cst$kw$king.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(client.view.graphics)),pos);


var G__7287 = seq__7241;
var G__7288 = chunk__7242;
var G__7289 = count__7243;
var G__7290 = (i__7244 + (1));
seq__7241 = G__7287;
chunk__7242 = G__7288;
count__7243 = G__7289;
i__7244 = G__7290;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__7241);
if(temp__5720__auto__){
var seq__7241__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7241__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__7241__$1);
var G__7291 = cljs.core.chunk_rest(seq__7241__$1);
var G__7292 = c__4550__auto__;
var G__7293 = cljs.core.count(c__4550__auto__);
var G__7294 = (0);
seq__7241 = G__7291;
chunk__7242 = G__7292;
count__7243 = G__7293;
i__7244 = G__7294;
continue;
} else {
var pos = cljs.core.first(seq__7241__$1);
client.view.draw_tile(cljs.core.cst$kw$king.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(client.view.graphics)),pos);


var G__7295 = cljs.core.next(seq__7241__$1);
var G__7296 = null;
var G__7297 = (0);
var G__7298 = (0);
seq__7241 = G__7295;
chunk__7242 = G__7296;
count__7243 = G__7297;
i__7244 = G__7298;
continue;
}
} else {
return null;
}
}
break;
}
});
client.view.draw_gui = (function client$view$draw_gui(store){
quil.core.tint.cljs$core$IFn$_invoke$arity$3(0.0,0.5,0.5);

var seq__7299_7303 = cljs.core.seq(cljs.core.cst$kw$movable.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(store)));
var chunk__7300_7304 = null;
var count__7301_7305 = (0);
var i__7302_7306 = (0);
while(true){
if((i__7302_7306 < count__7301_7305)){
var highlight_7307 = chunk__7300_7304.cljs$core$IIndexed$_nth$arity$2(null,i__7302_7306);
client.view.draw_tile(cljs.core.cst$kw$cursor.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(client.view.graphics)),highlight_7307);


var G__7308 = seq__7299_7303;
var G__7309 = chunk__7300_7304;
var G__7310 = count__7301_7305;
var G__7311 = (i__7302_7306 + (1));
seq__7299_7303 = G__7308;
chunk__7300_7304 = G__7309;
count__7301_7305 = G__7310;
i__7302_7306 = G__7311;
continue;
} else {
var temp__5720__auto___7312 = cljs.core.seq(seq__7299_7303);
if(temp__5720__auto___7312){
var seq__7299_7313__$1 = temp__5720__auto___7312;
if(cljs.core.chunked_seq_QMARK_(seq__7299_7313__$1)){
var c__4550__auto___7314 = cljs.core.chunk_first(seq__7299_7313__$1);
var G__7315 = cljs.core.chunk_rest(seq__7299_7313__$1);
var G__7316 = c__4550__auto___7314;
var G__7317 = cljs.core.count(c__4550__auto___7314);
var G__7318 = (0);
seq__7299_7303 = G__7315;
chunk__7300_7304 = G__7316;
count__7301_7305 = G__7317;
i__7302_7306 = G__7318;
continue;
} else {
var highlight_7319 = cljs.core.first(seq__7299_7313__$1);
client.view.draw_tile(cljs.core.cst$kw$cursor.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(client.view.graphics)),highlight_7319);


var G__7320 = cljs.core.next(seq__7299_7313__$1);
var G__7321 = null;
var G__7322 = (0);
var G__7323 = (0);
seq__7299_7303 = G__7320;
chunk__7300_7304 = G__7321;
count__7301_7305 = G__7322;
i__7302_7306 = G__7323;
continue;
}
} else {
}
}
break;
}

var highlight_7324 = cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(store));
if((!((highlight_7324 == null)))){
client.view.draw_tile(cljs.core.cst$kw$cursor.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(client.view.graphics)),highlight_7324);
} else {
}

quil.core.tint.cljs$core$IFn$_invoke$arity$3(0.0,0.0,0.8);

var highlight = cljs.core.cst$kw$hovered.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(store));
if((!((highlight == null)))){
return client.view.draw_tile(cljs.core.cst$kw$cursor.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(client.view.graphics)),highlight);
} else {
return null;
}
});
client.view.draw_state = (function client$view$draw_state(store){
if(((client.view.tiles_loaded_QMARK_()) && ((!((cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(client.view.graphics)) == null)))))){
quil.core.image.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(client.view.graphics)),(0),(0),client.state.SCREENSIZE,client.state.SCREENSIZE);

client.view.draw_ornaments(cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(store)));

client.view.draw_figures(cljs.core.cst$kw$game.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(store)));

return client.view.draw_gui(store);
} else {
return null;
}
});
