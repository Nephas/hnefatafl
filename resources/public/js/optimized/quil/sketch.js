// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
Processing.disableInit();
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(Processing.prototype.PConstants["JAVA2D"]),cljs.core.cst$kw$p2d,(Processing.prototype.PConstants["P2D"]),cljs.core.cst$kw$p3d,(Processing.prototype.PConstants["P3D"]),cljs.core.cst$kw$opengl,(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var el = applet.quil_canvas;
el.setAttribute("width",width);

el.setAttribute("height",height);

applet.width = window.parseInt(goog.style.getComputedStyle(el,"width"));

return applet.height = window.parseInt(goog.style.getComputedStyle(el,"height"));
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__9768 = arguments.length;
switch (G__9768) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().size((width | (0)),(height | (0)),quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__9770 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseScrolled,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__9771 = null;
var count__9772 = (0);
var i__9773 = (0);
while(true){
if((i__9773 < count__9772)){
var vec__9784 = chunk__9771.cljs$core$IIndexed$_nth$arity$2(null,i__9773);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9784,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9784,(1),null);
var temp__5720__auto___9794 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5720__auto___9794)){
var handler_9795 = temp__5720__auto___9794;
(prc[cljs.core.name(processing_name)] = ((function (seq__9770,chunk__9771,count__9772,i__9773,handler_9795,temp__5720__auto___9794,vec__9784,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR__orig_val__9787 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__9788 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__9788;

try{return (handler_9795.cljs$core$IFn$_invoke$arity$0 ? handler_9795.cljs$core$IFn$_invoke$arity$0() : handler_9795.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__9787;
}});})(seq__9770,chunk__9771,count__9772,i__9773,handler_9795,temp__5720__auto___9794,vec__9784,processing_name,quil_name))
);
} else {
}


var G__9796 = seq__9770;
var G__9797 = chunk__9771;
var G__9798 = count__9772;
var G__9799 = (i__9773 + (1));
seq__9770 = G__9796;
chunk__9771 = G__9797;
count__9772 = G__9798;
i__9773 = G__9799;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__9770);
if(temp__5720__auto__){
var seq__9770__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9770__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__9770__$1);
var G__9800 = cljs.core.chunk_rest(seq__9770__$1);
var G__9801 = c__4550__auto__;
var G__9802 = cljs.core.count(c__4550__auto__);
var G__9803 = (0);
seq__9770 = G__9800;
chunk__9771 = G__9801;
count__9772 = G__9802;
i__9773 = G__9803;
continue;
} else {
var vec__9789 = cljs.core.first(seq__9770__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9789,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9789,(1),null);
var temp__5720__auto___9804__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5720__auto___9804__$1)){
var handler_9805 = temp__5720__auto___9804__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__9770,chunk__9771,count__9772,i__9773,handler_9805,temp__5720__auto___9804__$1,vec__9789,processing_name,quil_name,seq__9770__$1,temp__5720__auto__){
return (function (){
var _STAR_applet_STAR__orig_val__9792 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__9793 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__9793;

try{return (handler_9805.cljs$core$IFn$_invoke$arity$0 ? handler_9805.cljs$core$IFn$_invoke$arity$0() : handler_9805.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__9792;
}});})(seq__9770,chunk__9771,count__9772,i__9773,handler_9805,temp__5720__auto___9804__$1,vec__9789,processing_name,quil_name,seq__9770__$1,temp__5720__auto__))
);
} else {
}


var G__9806 = cljs.core.next(seq__9770__$1);
var G__9807 = null;
var G__9808 = (0);
var G__9809 = (0);
seq__9770 = G__9806;
chunk__9771 = G__9807;
count__9772 = G__9808;
i__9773 = G__9809;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__9812 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__9811 = ((function (G__9812){
return (function (p1__9810_SHARP_){
return (p1__9810_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__9810_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__9810_SHARP_.call(null,options));
});})(G__9812))
;
return fexpr__9811(G__9812);
})()], 0));
var sketch_size = (function (){var or__4131__auto__ = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__9813_9817 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__9813_9817.cljs$core$IFn$_invoke$arity$0 ? fexpr__9813_9817.cljs$core$IFn$_invoke$arity$0() : fexpr__9813_9817.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__9814 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__9814.cljs$core$IFn$_invoke$arity$0 ? fexpr__9814.cljs$core$IFn$_invoke$arity$0() : fexpr__9814.call(null));
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
var G__9816 = ((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll);
var fexpr__9815 = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__9815.cljs$core$IFn$_invoke$arity$1 ? fexpr__9815.cljs$core$IFn$_invoke$arity$1(G__9816) : fexpr__9815.call(null,G__9816));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$setup,setup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mouse_DASH_wheel,mouse_wheel], 0));
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);

return prc.target_frame_rate = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((60));
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_(features,cljs.core.cst$kw$global_DASH_key_DASH_events)){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5720__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5720__auto__)){
var proc_obj = temp__5720__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9820 = arguments.length;
var i__4731__auto___9821 = (0);
while(true){
if((i__4731__auto___9821 < len__4730__auto___9820)){
args__4736__auto__.push((arguments[i__4731__auto___9821]));

var G__9822 = (i__4731__auto___9821 + (1));
i__4731__auto___9821 = G__9822;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = (function (){var G__9819 = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
return goog.dom.getElement(G__9819);
})();
var renderer = (function (){var or__4131__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch(host_elem);

var proc_obj = (new Processing(host_elem,quil.sketch.make_sketch(opts_map)));
host_elem.processing_obj = proc_obj;

proc_obj.quil_canvas = host_elem;

return proc_obj;
} else {
return console.error((cljs.core.truth_(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
quil.sketch.sketch.cljs$lang$applyTo = (function (seq9818){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9818));
});

quil.sketch.sketch_init_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__9831 = quil.sketch.empty_body_QMARK_();
var seq__9823_9832 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__9824_9833 = null;
var count__9825_9834 = (0);
var i__9826_9835 = (0);
while(true){
if((i__9826_9835 < count__9825_9834)){
var sk_9836 = chunk__9824_9833.cljs$core$IIndexed$_nth$arity$2(null,i__9826_9835);
if(add_elem_QMARK__9831){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_9836));
} else {
}

var fexpr__9829_9837 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_9836);
(fexpr__9829_9837.cljs$core$IFn$_invoke$arity$0 ? fexpr__9829_9837.cljs$core$IFn$_invoke$arity$0() : fexpr__9829_9837.call(null));


var G__9838 = seq__9823_9832;
var G__9839 = chunk__9824_9833;
var G__9840 = count__9825_9834;
var G__9841 = (i__9826_9835 + (1));
seq__9823_9832 = G__9838;
chunk__9824_9833 = G__9839;
count__9825_9834 = G__9840;
i__9826_9835 = G__9841;
continue;
} else {
var temp__5720__auto___9842 = cljs.core.seq(seq__9823_9832);
if(temp__5720__auto___9842){
var seq__9823_9843__$1 = temp__5720__auto___9842;
if(cljs.core.chunked_seq_QMARK_(seq__9823_9843__$1)){
var c__4550__auto___9844 = cljs.core.chunk_first(seq__9823_9843__$1);
var G__9845 = cljs.core.chunk_rest(seq__9823_9843__$1);
var G__9846 = c__4550__auto___9844;
var G__9847 = cljs.core.count(c__4550__auto___9844);
var G__9848 = (0);
seq__9823_9832 = G__9845;
chunk__9824_9833 = G__9846;
count__9825_9834 = G__9847;
i__9826_9835 = G__9848;
continue;
} else {
var sk_9849 = cljs.core.first(seq__9823_9843__$1);
if(add_elem_QMARK__9831){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_9849));
} else {
}

var fexpr__9830_9850 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_9849);
(fexpr__9830_9850.cljs$core$IFn$_invoke$arity$0 ? fexpr__9830_9850.cljs$core$IFn$_invoke$arity$0() : fexpr__9830_9850.call(null));


var G__9851 = cljs.core.next(seq__9823_9843__$1);
var G__9852 = null;
var G__9853 = (0);
var G__9854 = (0);
seq__9823_9832 = G__9851;
chunk__9824_9833 = G__9852;
count__9825_9834 = G__9853;
i__9826_9835 = G__9854;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
