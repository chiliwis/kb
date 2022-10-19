import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
var jQuery = require('jquery');
require('jquery.easing')(jQuery);

AJS={BASE_URL:"",drag_obj:null,drag_elm:null,_drop_zones:[],_cur_pos:null,join:function(_1,_2){
  try{
  return _2.join(_1);
  }
  catch(e){
  var r=_2[0]||"";
  AJS.map(_2,function(_4){
  r+=_1+_4;
  },1);
  return r+"";
  }
  },getScrollTop:function(){
  var t;
  if(document.documentElement&&document.documentElement.scrollTop){
  t=document.documentElement.scrollTop;
  }else{
  if(document.body){
  t=document.body.scrollTop;
  }
  }
  return t;
  },addClass:function(){
  var _6=AJS.forceArray(arguments);
  var _7=_6.pop();
  var _8=function(o){
  if(!new RegExp("(^|\\s)"+_7+"(\\s|$)").test(o.className)){
  o.className+=(o.className?" ":"")+_7;
  }
  };
  AJS.map(_6,function(_a){
  _8(_a);
  });
  },setStyle:function(){
  var _b=AJS.forceArray(arguments);
  var _c=_b.pop();
  var _d=_b.pop();
  AJS.map(_b,function(_e){
  _e.style[_d]=AJS.getCssDim(_c);
  });
  },_getRealScope:function(fn,_10,_11,_12){
  var _13=window;
  _10=AJS.$A(_10);
  if(fn._cscope){
  _13=fn._cscope;
  }
  return function(){
  var _14=[];
  var i=0;
  if(_11){
  i=1;
  }
  AJS.map(arguments,function(arg){
  _14.push(arg);
  },i);
  _14=_14.concat(_10);
  if(_12){
  _14=_14.reverse();
  }
  return fn.apply(_13,_14);
  };
  },preloadImages:function(){
  AJS.AEV(window,"load",AJS.$p(function(_17){
  AJS.map(_17,function(src){
  var pic=new Image();
  pic.src=src;
  });
  },arguments));
  },_createDomShortcuts:function(){
  var _1a=["ul","li","td","tr","th","tbody","table","input","span","b","a","div","img","button","h1","h2","h3","br","textarea","form","p","select","option","iframe","script","center","dl","dt","dd","small","pre"];
  var _1b=function(elm){
  var _1d="return AJS.createDOM.apply(null, ['"+elm+"', arguments]);";
  var _1e="function() { "+_1d+"    }";
  eval("AJS."+elm.toUpperCase()+"="+_1e);
  };
  AJS.map(_1a,_1b);
  AJS.TN=function(_1f){
  return document.createTextNode(_1f);
  };
  },documentInsert:function(elm){
  if(typeof (elm)=="string"){
  elm=AJS.HTML2DOM(elm);
  }
  document.write("<span id=\"dummy_holder\"></span>");
  AJS.swapDOM(AJS.$("dummy_holder"),elm);
  },getWindowSize:function(doc){
  doc=doc||document;
  var _22,_23;
  if(self.innerHeight){
  _22=self.innerWidth;
  _23=self.innerHeight;
  }else{
  if(doc.documentElement&&doc.documentElement.clientHeight){
  _22=doc.documentElement.clientWidth;
  _23=doc.documentElement.clientHeight;
  }else{
  if(doc.body){
  _22=doc.body.clientWidth;
  _23=doc.body.clientHeight;
  }
  }
  }
  return {"w":_22,"h":_23};
  },flattenList:function(_24){
  var r=[];
  var _26=function(r,l){
  AJS.map(l,function(o){
  if(o==null){
  }else{
  if(AJS.isArray(o)){
  _26(r,o);
  }else{
  r.push(o);
  }
  }
  });
  };
  _26(r,_24);
  return r;
  },setEventKey:function(e){
  e.key=e.keyCode?e.keyCode:e.charCode;
  if(window.event){
  e.ctrl=window.event.ctrlKey;
  e.shift=window.event.shiftKey;
  }else{
  e.ctrl=e.ctrlKey;
  e.shift=e.shiftKey;
  }
  switch(e.key){
  case 63232:
  e.key=38;
  break;
  case 63233:
  e.key=40;
  break;
  case 63235:
  e.key=39;
  break;
  case 63234:
  e.key=37;
  break;
  }
  },removeElement:function(){
  var _2b=AJS.forceArray(arguments);
  AJS.map(_2b,function(elm){
  AJS.swapDOM(elm,null);
  });
  },_unloadListeners:function(){
  if(AJS.listeners){
  AJS.map(AJS.listeners,function(elm,_2e,fn){
  AJS.REV(elm,_2e,fn);
  });
  }
  AJS.listeners=[];
  },partial:function(fn){
  var _31=AJS.forceArray(arguments);
  return AJS.$b(fn,null,_31.slice(1,_31.length).reverse(),false,true);
  },getIndex:function(elm,_33,_34){
  for(var i=0;i<_33.length;i++){
  if(_34&&_34(_33[i])||elm==_33[i]){
  return i;
  }
  }
  return -1;
  },isDefined:function(o){
  return (o!="undefined"&&o!=null);
  },isArray:function(obj){
  return obj instanceof Array;
  },setLeft:function(){
  var _38=AJS.forceArray(arguments);
  _38.splice(_38.length-1,0,"left");
  AJS.setStyle.apply(null,_38);
  },appendChildNodes:function(elm){
  if(arguments.length>=2){
  AJS.map(arguments,function(n){
  if(AJS.isString(n)){
  n=AJS.TN(n);
  }
  if(AJS.isDefined(n)){
  elm.appendChild(n);
  }
  },1);
  }
  return elm;
  },isOpera:function(){
  return (navigator.userAgent.toLowerCase().indexOf("opera")!=-1);
  },isString:function(obj){
  return (typeof obj=="string");
  },hideElement:function(elm){
  var _3d=AJS.forceArray(arguments);
  AJS.map(_3d,function(elm){
  elm.style.display="none";
  });
  },setOpacity:function(elm,p){
  elm.style.opacity=p;
  elm.style.filter="alpha(opacity="+p*100+")";
  },setHeight:function(){
  var _41=AJS.forceArray(arguments);
  _41.splice(_41.length-1,0,"height");
  AJS.setStyle.apply(null,_41);
  },setWidth:function(){
  var _42=AJS.forceArray(arguments);
  _42.splice(_42.length-1,0,"width");
  AJS.setStyle.apply(null,_42);
  },createArray:function(v){
  if(AJS.isArray(v)&&!AJS.isString(v)){
  return v;
  }else{
  if(!v){
  return [];
  }else{
  return [v];
  }
  }
  },isDict:function(o){
  var _45=String(o);
  return _45.indexOf(" Object")!=-1;
  },isMozilla:function(){
  return (navigator.userAgent.toLowerCase().indexOf("gecko")!=-1&&navigator.productSub>=20030210);
  },_listenOnce:function(elm,_47,fn){
  var _49=function(){
  AJS.removeEventListener(elm,_47,_49);
  fn(arguments);
  };
  return _49;
  },addEventListener:function(elm,_4b,fn,_4d,_4e){
  if(!_4e){
  _4e=false;
  }
  var _4f=AJS.$A(elm);
  AJS.map(_4f,function(_50){
  if(_4d){
  fn=AJS._listenOnce(_50,_4b,fn);
  }
  if(AJS.isIn(_4b,["submit","load","scroll","resize"])){
  var old=elm["on"+_4b];
  elm["on"+_4b]=function(){
  if(old){
  fn(arguments);
  return old(arguments);
  }else{
  return fn(arguments);
  }
  };
  return;
  }
  if(AJS.isIn(_4b,["keypress","keydown","keyup","click"])){
  var _52=fn;
  fn=function(e){
  AJS.setEventKey(e);
  return _52.apply(null,arguments);
  };
  }
  if(_50.attachEvent){
  _50.attachEvent("on"+_4b,fn);
  }else{
  if(_50.addEventListener){
  _50.addEventListener(_4b,fn,_4e);
  }
  }
  AJS.listeners=AJS.$A(AJS.listeners);
  AJS.listeners.push([_50,_4b,fn]);
  });
  },createDOM:function(_54,_55){
  var i=0,_57;
  elm=document.createElement(_54);
  if(AJS.isDict(_55[i])){
  for(k in _55[0]){
  _57=_55[0][k];
  if(k=="style"){
  elm.style.cssText=_57;
  }else{
  if(k=="class"||k=="className"){
  elm.className=_57;
  }else{
  elm.setAttribute(k,_57);
  }
  }
  }
  i++;
  }
  if(_55[0]==null){
  i=1;
  }
  AJS.map(_55,function(n){
  if(n){
  if(AJS.isString(n)||AJS.isNumber(n)){
  n=AJS.TN(n);
  }
  elm.appendChild(n);
  }
  },i);
  return elm;
  },setTop:function(){
  var _59=AJS.forceArray(arguments);
  _59.splice(_59.length-1,0,"top");
  AJS.setStyle.apply(null,_59);
  },getElementsByTagAndClassName:function(_5a,_5b,_5c){
  var _5d=[];
  if(!AJS.isDefined(_5c)){
  _5c=document;
  }
  if(!AJS.isDefined(_5a)){
  _5a="*";
  }
  var els=_5c.getElementsByTagName(_5a);
  var _5f=els.length;
  var _60=new RegExp("(^|\\s)"+_5b+"(\\s|$)");
  for(i=0,j=0;i<_5f;i++){
  if(_60.test(els[i].className)||_5b==null){
  _5d[j]=els[i];
  j++;
  }
  }
  return _5d;
  },removeClass:function(){
  var _61=AJS.forceArray(arguments);
  var cls=_61.pop();
  var _63=function(o){
  o.className=o.className.replace(new RegExp("\\s?"+cls,"g"),"");
  };
  AJS.map(_61,function(elm){
  _63(elm);
  });
  },bindMethods:function(_66){
  for(var k in _66){
  var _68=_66[k];
  if(typeof (_68)=="function"){
  _66[k]=AJS.$b(_68,_66);
  }
  }
  },log:function(o){
  if(AJS.isMozilla()){
  console.log(o);
  }else{
  var div=AJS.DIV({"style":"color: green"});
  AJS.ACN(AJS.getBody(),AJS.setHTML(div,""+o));
  }
  },isNumber:function(obj){
  return (typeof obj=="number");
  },map:function(_6c,fn,_6e,_6f){
  var i=0,l=_6c.length;
  if(_6e){
  i=_6e;
  }
  if(_6f){
  l=_6f;
  }
  for(i;i<l;i++){
  fn.apply(null,[_6c[i],i]);
  }
  },removeEventListener:function(elm,_73,fn,_75){
  if(!_75){
  _75=false;
  }
  if(elm.removeEventListener){
  elm.removeEventListener(_73,fn,_75);
  if(AJS.isOpera()){
  elm.removeEventListener(_73,fn,!_75);
  }
  }else{
  if(elm.detachEvent){
  elm.detachEvent("on"+_73,fn);
  }
  }
  },getCssDim:function(dim){
  if(AJS.isString(dim)){
  return dim;
  }else{
  return dim+"px";
  }
  },setHTML:function(elm,_78){
  elm.innerHTML=_78;
  return elm;
  },bind:function(fn,_7a,_7b,_7c,_7d){
  fn._cscope=_7a;
  return AJS._getRealScope(fn,_7b,_7c,_7d);
  },forceArray:function(_7e){
  var r=[];
  AJS.map(_7e,function(elm){
  r.push(elm);
  });
  return r;
  },update:function(l1,l2){
  for(var i in l2){
  l1[i]=l2[i];
  }
  return l1;
  },getBody:function(){
  return AJS.$bytc("body")[0];
  },HTML2DOM:function(_84,_85){
  var d=AJS.DIV();
  d.innerHTML=_84;
  if(_85){
  return d.childNodes[0];
  }else{
  return d;
  }
  },getElement:function(id){
  if(AJS.isString(id)||AJS.isNumber(id)){
  return document.getElementById(id);
  }else{
  return id;
  }
  },showElement:function(){
  var _88=AJS.forceArray(arguments);
  AJS.map(_88,function(elm){
  elm.style.display="";
  });
  },swapDOM:function(_8a,src){
  _8a=AJS.getElement(_8a);
  var _8c=_8a.parentNode;
  if(src){
  src=AJS.getElement(src);
  _8c.replaceChild(src,_8a);
  }else{
  _8c.removeChild(_8a);
  }
  return src;
  },isIn:function(elm,_8e){
  var i=AJS.getIndex(elm,_8e);
  if(i!=-1){
  return true;
  }else{
  return false;
  }
  }};
  AJS.$=AJS.getElement;
  AJS.$$=AJS.getElements;
  AJS.$f=AJS.getFormElement;
  AJS.$p=AJS.partial;
  AJS.$b=AJS.bind;
  AJS.$A=AJS.createArray;
  AJS.DI=AJS.documentInsert;
  AJS.ACN=AJS.appendChildNodes;
  AJS.RCN=AJS.replaceChildNodes;
  AJS.AEV=AJS.addEventListener;
  AJS.REV=AJS.removeEventListener;
  AJS.$bytc=AJS.getElementsByTagAndClassName;
  AJS.addEventListener(window,"unload",AJS._unloadListeners);
  AJS._createDomShortcuts();
  AJS.Class=function(_90){
  var fn=function(){
  if(arguments[0]!="no_init"){
  return this.init.apply(this,arguments);
  }
  };
  fn.prototype=_90;
  AJS.update(fn,AJS.Class.prototype);
  return fn;
  };
  AJS.Class.prototype={extend:function(_92){
  var _93=new this("no_init");
  for(k in _92){
  var _94=_93[k];
  var cur=_92[k];
  if(_94&&_94!=cur&&typeof cur=="function"){
  cur=this._parentize(cur,_94);
  }
  _93[k]=cur;
  }
  return new AJS.Class(_93);
  },implement:function(_96){
  AJS.update(this.prototype,_96);
  },_parentize:function(cur,_98){
  return function(){
  this.parent=_98;
  return cur.apply(this,arguments);
  };
  }};
  AJS.$=AJS.getElement;
  AJS.$$=AJS.getElements;
  AJS.$f=AJS.getFormElement;
  AJS.$b=AJS.bind;
  AJS.$p=AJS.partial;
  AJS.$FA=AJS.forceArray;
  AJS.$A=AJS.createArray;
  AJS.DI=AJS.documentInsert;
  AJS.ACN=AJS.appendChildNodes;
  AJS.RCN=AJS.replaceChildNodes;
  AJS.AEV=AJS.addEventListener;
  AJS.REV=AJS.removeEventListener;
  AJS.$bytc=AJS.getElementsByTagAndClassName;
  AJSDeferred=function(req){
  this.callbacks=[];
  this.errbacks=[];
  this.req=req;
  };
  AJSDeferred.prototype={excCallbackSeq:function(req,_9b){
  var _9c=req.responseText;
  while(_9b.length>0){
  var fn=_9b.pop();
  var _9e=fn(_9c,req);
  if(_9e){
  _9c=_9e;
  }
  }
  },callback:function(){
  this.excCallbackSeq(this.req,this.callbacks);
  },errback:function(){
  if(this.errbacks.length==0){
  alert("Error encountered:\n"+this.req.responseText);
  }
  this.excCallbackSeq(this.req,this.errbacks);
  },addErrback:function(fn){
  this.errbacks.unshift(fn);
  },addCallback:function(fn){
  this.callbacks.unshift(fn);
  },addCallbacks:function(fn1,fn2){
  this.addCallback(fn1);
  this.addErrback(fn2);
  },sendReq:function(_a3){
  if(AJS.isObject(_a3)){
  this.req.send(AJS.queryArguments(_a3));
  }else{
  if(AJS.isDefined(_a3)){
  this.req.send(_a3);
  }else{
  this.req.send("");
  }
  }
  }};
  script_loaded=true;
  
  
  script_loaded=true;

  var GB_CURRENT=null;
GB_hide=function(){
GB_CURRENT.hide();
};
GreyBox=new AJS.Class({init:function(_1){
this.use_fx=AJS.fx;
this.type="page";
this.overlay_click_close=false;
this.salt=0;
this.root_dir=GB_ROOT_DIR;
this.callback_fns=[];
this.reload_on_close=false;
this.src_loader=this.root_dir+"loader_frame.html";
var _2=window.location.hostname.indexOf("www");
var _3=this.src_loader.indexOf("www");
if(_2!=-1&&_3==-1){
this.src_loader=this.src_loader.replace("://","://www.");
}
if(_2==-1&&_3!=-1){
this.src_loader=this.src_loader.replace("://www.","://");
}
this.show_loading=true;
AJS.update(this,_1);
},addCallback:function(fn){
if(fn){
this.callback_fns.push(fn);
}
},show:function(_5){
GB_CURRENT=this;
this.url=_5;
var _6=[AJS.$bytc("object"),AJS.$bytc("select")];
AJS.map(AJS.flattenList(_6),function(_7){
_7.style.visibility="hidden";
});
this.createElements();
return false;
},hide:function(){
var _8=this.callback_fns;
if(_8!=[]){
AJS.map(_8,function(fn){
fn();
});
}
this.onHide();
if(this.use_fx){
var _a=this.overlay;
AJS.fx.fadeOut(this.overlay,{onComplete:function(){
AJS.removeElement(_a);
_a=null;
},duration:300});
AJS.removeElement(this.g_window);
}else{
AJS.removeElement(this.g_window,this.overlay);
}
this.removeFrame();
AJS.REV(window,"scroll",_GB_setOverlayDimension);
AJS.REV(window,"resize",_GB_update);
var _b=[AJS.$bytc("object"),AJS.$bytc("select")];
AJS.map(AJS.flattenList(_b),function(_c){
_c.style.visibility="visible";
});
GB_CURRENT=null;
if(this.reload_on_close){
window.location.reload();
}
},update:function(){
this.setOverlayDimension();
this.setFrameSize();
this.setWindowPosition();
},createElements:function(){
this.initOverlay();
this.g_window=AJS.DIV({"id":"GB_window"});
AJS.hideElement(this.g_window);
AJS.getBody().insertBefore(this.g_window,this.overlay.nextSibling);
this.initFrame();
this.initHook();
this.update();
var me=this;
if(this.use_fx){
AJS.fx.fadeIn(this.overlay,{duration:300,to:0.7,onComplete:function(){
me.onShow();
AJS.showElement(me.g_window);
me.startLoading();
}});
}else{
AJS.setOpacity(this.overlay,0.7);
AJS.showElement(this.g_window);
this.onShow();
this.startLoading();
}
AJS.AEV(window,"scroll",_GB_setOverlayDimension);
AJS.AEV(window,"resize",_GB_update);
},removeFrame:function(){
try{
AJS.removeElement(this.iframe);
}
catch(e){
}
this.iframe=null;
},startLoading:function(){
this.iframe.src=this.src_loader+"?s="+this.salt++;
AJS.showElement(this.iframe);
},setOverlayDimension:function(){
var _e=AJS.getWindowSize();
if(AJS.isMozilla()||AJS.isOpera()){
AJS.setWidth(this.overlay,"100%");
}else{
AJS.setWidth(this.overlay,_e.w);
}
var _f=Math.max(AJS.getScrollTop()+_e.h,AJS.getScrollTop()+this.height);
if(_f<AJS.getScrollTop()){
AJS.setHeight(this.overlay,_f);
}else{
AJS.setHeight(this.overlay,AJS.getScrollTop()+_e.h);
}
},initOverlay:function(){
this.overlay=AJS.DIV({"id":"GB_overlay"});
if(this.overlay_click_close){
AJS.AEV(this.overlay,"click",GB_hide);
}
AJS.setOpacity(this.overlay,0);
AJS.getBody().insertBefore(this.overlay,AJS.getBody().firstChild);
},initFrame:function(){
if(!this.iframe){
var d={"name":"GB_frame","class":"GB_frame","frameBorder":0};
this.iframe=AJS.IFRAME(d);
this.middle_cnt=AJS.DIV({"class":"content"},this.iframe);
this.top_cnt=AJS.DIV();
this.bottom_cnt=AJS.DIV();
AJS.ACN(this.g_window,this.top_cnt,this.middle_cnt,this.bottom_cnt);
}
},onHide:function(){
},onShow:function(){
},setFrameSize:function(){
},setWindowPosition:function(){
},initHook:function(){
}});
_GB_update=function(){
if(GB_CURRENT){
GB_CURRENT.update();
}
};
_GB_setOverlayDimension=function(){
if(GB_CURRENT){
GB_CURRENT.setOverlayDimension();
}
};
AJS.preloadImages(GB_ROOT_DIR+"indicator.gif");
script_loaded=true;
var GB_SETS={};
function decoGreyboxLinks(){
var as=AJS.$bytc("a");
AJS.map(as,function(a){
if(a.getAttribute("href")&&a.getAttribute("rel")){
var rel=a.getAttribute("rel");
if(rel.indexOf("gb_")==0){
var _14=rel.match(/\w+/)[0];
var _15=rel.match(/\[(.*)\]/)[1];
var _16=0;
var _17={"caption":a.title||"","url":a.href};
if(_14=="gb_pageset"||_14=="gb_imageset"){
if(!GB_SETS[_15]){
GB_SETS[_15]=[];
}
GB_SETS[_15].push(_17);
_16=GB_SETS[_15].length;
}
if(_14=="gb_pageset"){
a.onclick=function(){
GB_showFullScreenSet(GB_SETS[_15],_16);
return false;
};
}
if(_14=="gb_imageset"){
a.onclick=function(){
GB_showImageSet(GB_SETS[_15],_16);
return false;
};
}
if(_14=="gb_image"){
a.onclick=function(){
GB_showImage(_17.caption,_17.url);
return false;
};
}
if(_14=="gb_page"){
a.onclick=function(){
var sp=_15.split(/, ?/);
GB_show(_17.caption,_17.url,parseInt(sp[1]),parseInt(sp[0]));
return false;
};
}
if(_14=="gb_page_fs"){
a.onclick=function(){
GB_showFullScreen(_17.caption,_17.url);
return false;
};
}
if(_14=="gb_page_center"){
a.onclick=function(){
var sp=_15.split(/, ?/);
GB_showCenter(_17.caption,_17.url,parseInt(sp[1]),parseInt(sp[0]));
return false;
};
}
}
}
});
}
AJS.AEV(window,"load",decoGreyboxLinks);
GB_showImage=function(_1a,url,_1c){
var _1d={width:300,height:300,type:"image",fullscreen:false,center_win:true,caption:_1a,callback_fn:_1c};
var win=new GB_Gallery(_1d);
return win.show(url);
};
GB_showPage=function(_1f,url,_21){
var _22={type:"page",caption:_1f,callback_fn:_21,fullscreen:true,center_win:false};
var win=new GB_Gallery(_22);
return win.show(url);
};
GB_Gallery=GreyBox.extend({init:function(_24){
this.parent({});
this.img_close=this.root_dir+"g_close.gif";
AJS.update(this,_24);
this.addCallback(this.callback_fn);
},initHook:function(){
AJS.addClass(this.g_window,"GB_Gallery");
var _25=AJS.DIV({"class":"inner"});
this.header=AJS.DIV({"class":"GB_header"},_25);
AJS.setOpacity(this.header,0);
AJS.getBody().insertBefore(this.header,this.overlay.nextSibling);
var _26=AJS.TD({"id":"GB_caption","class":"caption","width":"40%"},this.caption);
var _27=AJS.TD({"id":"GB_middle","class":"middle","width":"20%"});
var _28=AJS.IMG({"src":this.img_close});
AJS.AEV(_28,"click",GB_hide);
var _29=AJS.TD({"class":"close","width":"40%"},_28);
var _2a=AJS.TBODY(AJS.TR(_26,_27,_29));
var _2b=AJS.TABLE({"cellspacing":"0","cellpadding":0,"border":0},_2a);
AJS.ACN(_25,_2b);
if(this.fullscreen){
AJS.AEV(window,"scroll",AJS.$b(this.setWindowPosition,this));
}else{
AJS.AEV(window,"scroll",AJS.$b(this._setHeaderPos,this));
}
},setFrameSize:function(){
var _2c=this.overlay.offsetWidth;
var _2d=AJS.getWindowSize();
if(this.fullscreen){
this.width=_2c-40;
this.height=_2d.h-80;
}
AJS.setWidth(this.iframe,this.width);
AJS.setHeight(this.iframe,this.height);
AJS.setWidth(this.header,_2c);
},_setHeaderPos:function(){
AJS.setTop(this.header,AJS.getScrollTop()+10);
},setWindowPosition:function(){
var _2e=this.overlay.offsetWidth;
var _2f=AJS.getWindowSize();
AJS.setLeft(this.g_window,((_2e-50-this.width)/2));
var _30=AJS.getScrollTop()+55;
if(!this.center_win){
AJS.setTop(this.g_window,_30);
}else{
var fl=((_2f.h-this.height)/2)+20+AJS.getScrollTop();
if(fl<0){
fl=0;
}
if(_30>fl){
fl=_30;
}
AJS.setTop(this.g_window,fl);
}
this._setHeaderPos();
},onHide:function(){
AJS.removeElement(this.header);
AJS.removeClass(this.g_window,"GB_Gallery");
},onShow:function(){
if(this.use_fx){
AJS.fx.fadeIn(this.header,{to:1});
}else{
AJS.setOpacity(this.header,1);
}
}});
AJS.preloadImages(GB_ROOT_DIR+"g_close.gif");
GB_showFullScreenSet=function(set,_33,_34){
var _35={type:"page",fullscreen:true,center_win:false};
var _36=new GB_Sets(_35,set);
_36.addCallback(_34);
_36.showSet(_33-1);
return false;
};
GB_showImageSet=function(set,_38,_39){
var _3a={type:"image",fullscreen:false,center_win:true,width:300,height:300};
var _3b=new GB_Sets(_3a,set);
_3b.addCallback(_39);
_3b.showSet(_38-1);
return false;
};
GB_Sets=GB_Gallery.extend({init:function(_3c,set){
this.parent(_3c);
if(!this.img_next){
this.img_next=this.root_dir+"next.gif";
}
if(!this.img_prev){
this.img_prev=this.root_dir+"prev.gif";
}
this.current_set=set;
},showSet:function(_3e){
this.current_index=_3e;
var _3f=this.current_set[this.current_index];
this.show(_3f.url);
this._setCaption(_3f.caption);
this.btn_prev=AJS.IMG({"class":"left",src:this.img_prev});
this.btn_next=AJS.IMG({"class":"right",src:this.img_next});
AJS.AEV(this.btn_prev,"click",AJS.$b(this.switchPrev,this));
AJS.AEV(this.btn_next,"click",AJS.$b(this.switchNext,this));
GB_STATUS=AJS.SPAN({"class":"GB_navStatus"});
AJS.ACN(AJS.$("GB_middle"),this.btn_prev,GB_STATUS,this.btn_next);
this.updateStatus();
},updateStatus:function(){
AJS.setHTML(GB_STATUS,(this.current_index+1)+" / "+this.current_set.length);
if(this.current_index==0){
AJS.addClass(this.btn_prev,"disabled");
}else{
AJS.removeClass(this.btn_prev,"disabled");
}
if(this.current_index==this.current_set.length-1){
AJS.addClass(this.btn_next,"disabled");
}else{
AJS.removeClass(this.btn_next,"disabled");
}
},_setCaption:function(_40){
AJS.setHTML(AJS.$("GB_caption"),_40);
},updateFrame:function(){
var _41=this.current_set[this.current_index];
this._setCaption(_41.caption);
this.url=_41.url;
this.startLoading();
},switchPrev:function(){
if(this.current_index!=0){
this.current_index--;
this.updateFrame();
this.updateStatus();
}
},switchNext:function(){
if(this.current_index!=this.current_set.length-1){
this.current_index++;
this.updateFrame();
this.updateStatus();
}
}});
AJS.AEV(window,"load",function(){
AJS.preloadImages(GB_ROOT_DIR+"next.gif",GB_ROOT_DIR+"prev.gif");
});
GB_show=function(_42,url,_44,_45,_46){
var _47={caption:_42,height:_44||500,width:_45||500,fullscreen:false,callback_fn:_46};
var win=new GB_Window(_47);
return win.show(url);
};
GB_showCenter=function(_49,url,_4b,_4c,_4d){
var _4e={caption:_49,center_win:true,height:_4b||500,width:_4c||500,fullscreen:false,callback_fn:_4d};
var win=new GB_Window(_4e);
return win.show(url);
};
GB_showFullScreen=function(_50,url,_52){
var _53={caption:_50,fullscreen:true,callback_fn:_52};
var win=new GB_Window(_53);
return win.show(url);
};
GB_Window=GreyBox.extend({init:function(_55){
this.parent({});
this.img_header=this.root_dir+"header_bg.gif";
this.img_close=this.root_dir+"w_close.gif";
this.show_close_img=true;
AJS.update(this,_55);
this.addCallback(this.callback_fn);
},initHook:function(){
AJS.addClass(this.g_window,"GB_Window");
this.header=AJS.TABLE({"class":"header"});
this.header.style.backgroundImage="url("+this.img_header+")";
var _56=AJS.TD({"class":"caption"},this.caption);
var _57=AJS.TD({"class":"close"});
if(this.show_close_img){
var _58=AJS.IMG({"src":this.img_close});
var _59=AJS.SPAN("Close");
var btn=AJS.DIV(_58,_59);
AJS.AEV([_58,_59],"mouseover",function(){
AJS.addClass(_59,"on");
});
AJS.AEV([_58,_59],"mouseout",function(){
AJS.removeClass(_59,"on");
});
AJS.AEV([_58,_59],"mousedown",function(){
AJS.addClass(_59,"click");
});
AJS.AEV([_58,_59],"mouseup",function(){
AJS.removeClass(_59,"click");
});
AJS.AEV([_58,_59],"click",GB_hide);
AJS.ACN(_57,btn);
}
tbody_header=AJS.TBODY();
AJS.ACN(tbody_header,AJS.TR(_56,_57));
AJS.ACN(this.header,tbody_header);
AJS.ACN(this.top_cnt,this.header);
if(this.fullscreen){
AJS.AEV(window,"scroll",AJS.$b(this.setWindowPosition,this));
}
},setFrameSize:function(){
if(this.fullscreen){
var _5b=AJS.getWindowSize();
overlay_h=_5b.h;
this.width=Math.round(this.overlay.offsetWidth-(this.overlay.offsetWidth/100)*10);
this.height=Math.round(overlay_h-(overlay_h/100)*10);
}
AJS.setWidth(this.header,this.width+6);
AJS.setWidth(this.iframe,this.width);
AJS.setHeight(this.iframe,this.height);
},setWindowPosition:function(){
var _5c=AJS.getWindowSize();
AJS.setLeft(this.g_window,((_5c.w-this.width)/2)-13);
if(!this.center_win){
AJS.setTop(this.g_window,AJS.getScrollTop());
}else{
var fl=((_5c.h-this.height)/2)-20+AJS.getScrollTop();
if(fl<0){
fl=0;
}
AJS.setTop(this.g_window,fl);
}
}});
AJS.preloadImages(GB_ROOT_DIR+"w_close.gif",GB_ROOT_DIR+"header_bg.gif");


script_loaded=true;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
