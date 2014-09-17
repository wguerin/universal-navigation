/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

/*
	This is an optimized version of Dojo, built for deployment and not for
	development. To get sources and documentation, please visit:

		http://dojotoolkit.org
*/

window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.gfx.shape"],["provide","dojox.gfx.path"],["provide","dojox.gfx.svg"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.gfx.shape"]){_4._hasResource["dojox.gfx.shape"]=true;_4.provide("dojox.gfx.shape");_4.declare("dojox.gfx.shape.Shape",null,{constructor:function(){this.rawNode=null;this.shape=null;this.matrix=null;this.fillStyle=null;this.strokeStyle=null;this.bbox=null;this.parent=null;this.parentMatrix=null;},getNode:function(){return this.rawNode;},getShape:function(){return this.shape;},getTransform:function(){return this.matrix;},getFill:function(){return this.fillStyle;},getStroke:function(){return this.strokeStyle;},getParent:function(){return this.parent;},getBoundingBox:function(){return this.bbox;},getTransformedBoundingBox:function(){var b=this.getBoundingBox();if(!b){return null;}var m=this._getRealMatrix();gm=_6.gfx.matrix;return [gm.multiplyPoint(m,b.x,b.y),gm.multiplyPoint(m,b.x+b.width,b.y),gm.multiplyPoint(m,b.x+b.width,b.y+b.height),gm.multiplyPoint(m,b.x,b.y+b.height)];},getEventSource:function(){return this.rawNode;},setShape:function(_7){this.shape=_6.gfx.makeParameters(this.shape,_7);this.bbox=null;return this;},setFill:function(_8){if(!_8){this.fillStyle=null;return this;}var f=null;if(typeof (_8)=="object"&&"type" in _8){switch(_8.type){case "linear":f=_6.gfx.makeParameters(_6.gfx.defaultLinearGradient,_8);break;case "radial":f=_6.gfx.makeParameters(_6.gfx.defaultRadialGradient,_8);break;case "pattern":f=_6.gfx.makeParameters(_6.gfx.defaultPattern,_8);break;}}else{f=_6.gfx.normalizeColor(_8);}this.fillStyle=f;return this;},setStroke:function(_9){if(!_9){this.strokeStyle=null;return this;}if(typeof _9=="string"||_4.isArray(_9)||_9 instanceof _4.Color){_9={color:_9};}var s=this.strokeStyle=_6.gfx.makeParameters(_6.gfx.defaultStroke,_9);s.color=_6.gfx.normalizeColor(s.color);return this;},setTransform:function(_a){this.matrix=_6.gfx.matrix.clone(_a?_6.gfx.matrix.normalize(_a):_6.gfx.matrix.identity);return this._applyTransform();},_applyTransform:function(){return this;},moveToFront:function(){var p=this.getParent();if(p){p._moveChildToFront(this);this._moveToFront();}return this;},moveToBack:function(){var p=this.getParent();if(p){p._moveChildToBack(this);this._moveToBack();}return this;},_moveToFront:function(){},_moveToBack:function(){},applyRightTransform:function(_b){return _b?this.setTransform([this.matrix,_b]):this;},applyLeftTransform:function(_c){return _c?this.setTransform([_c,this.matrix]):this;},applyTransform:function(_d){return _d?this.setTransform([this.matrix,_d]):this;},removeShape:function(_e){if(this.parent){this.parent.remove(this,_e);}return this;},_setParent:function(_f,_10){this.parent=_f;return this._updateParentMatrix(_10);},_updateParentMatrix:function(_11){this.parentMatrix=_11?_6.gfx.matrix.clone(_11):null;return this._applyTransform();},_getRealMatrix:function(){var m=this.matrix;var p=this.parent;while(p){if(p.matrix){m=_6.gfx.matrix.multiply(p.matrix,m);}p=p.parent;}return m;}});_6.gfx.shape._eventsProcessing={connect:function(_12,_13,_14){return arguments.length>2?_4.connect(this.getEventSource(),_12,_13,_14):_4.connect(this.getEventSource(),_12,_13);},disconnect:function(_15){_4.disconnect(_15);}};_4.extend(_6.gfx.shape.Shape,_6.gfx.shape._eventsProcessing);_6.gfx.shape.Container={_init:function(){this.children=[];},openBatch:function(){},closeBatch:function(){},add:function(_16){var _17=_16.getParent();if(_17){_17.remove(_16,true);}this.children.push(_16);return _16._setParent(this,this._getRealMatrix());},remove:function(_18,_19){for(var i=0;i<this.children.length;++i){if(this.children[i]==_18){if(_19){}else{_18.parent=null;_18.parentMatrix=null;}this.children.splice(i,1);break;}}return this;},clear:function(){this.children=[];return this;},_moveChildToFront:function(_1a){for(var i=0;i<this.children.length;++i){if(this.children[i]==_1a){this.children.splice(i,1);this.children.push(_1a);break;}}return this;},_moveChildToBack:function(_1b){for(var i=0;i<this.children.length;++i){if(this.children[i]==_1b){this.children.splice(i,1);this.children.unshift(_1b);break;}}return this;}};_4.declare("dojox.gfx.shape.Surface",null,{constructor:function(){this.rawNode=null;this._parent=null;this._nodes=[];this._events=[];},destroy:function(){_4.forEach(this._nodes,_4.destroy);this._nodes=[];_4.forEach(this._events,_4.disconnect);this._events=[];this.rawNode=null;if(_4.isIE){while(this._parent.lastChild){_4.destroy(this._parent.lastChild);}}else{this._parent.innerHTML="";}this._parent=null;},getEventSource:function(){return this.rawNode;},_getRealMatrix:function(){return null;},isLoaded:true,onLoad:function(_1c){},whenLoaded:function(_1d,_1e){var f=_4.hitch(_1d,_1e);if(this.isLoaded){f(this);}else{var h=_4.connect(this,"onLoad",function(_1f){_4.disconnect(h);f(_1f);});}}});_4.extend(_6.gfx.shape.Surface,_6.gfx.shape._eventsProcessing);_4.declare("dojox.gfx.Point",null,{});_4.declare("dojox.gfx.Rectangle",null,{});_4.declare("dojox.gfx.shape.Rect",_6.gfx.shape.Shape,{constructor:function(_20){this.shape=_6.gfx.getDefault("Rect");this.rawNode=_20;},getBoundingBox:function(){return this.shape;}});_4.declare("dojox.gfx.shape.Ellipse",_6.gfx.shape.Shape,{constructor:function(_21){this.shape=_6.gfx.getDefault("Ellipse");this.rawNode=_21;},getBoundingBox:function(){if(!this.bbox){var _22=this.shape;this.bbox={x:_22.cx-_22.rx,y:_22.cy-_22.ry,width:2*_22.rx,height:2*_22.ry};}return this.bbox;}});_4.declare("dojox.gfx.shape.Circle",_6.gfx.shape.Shape,{constructor:function(_23){this.shape=_6.gfx.getDefault("Circle");this.rawNode=_23;},getBoundingBox:function(){if(!this.bbox){var _24=this.shape;this.bbox={x:_24.cx-_24.r,y:_24.cy-_24.r,width:2*_24.r,height:2*_24.r};}return this.bbox;}});_4.declare("dojox.gfx.shape.Line",_6.gfx.shape.Shape,{constructor:function(_25){this.shape=_6.gfx.getDefault("Line");this.rawNode=_25;},getBoundingBox:function(){if(!this.bbox){var _26=this.shape;this.bbox={x:Math.min(_26.x1,_26.x2),y:Math.min(_26.y1,_26.y2),width:Math.abs(_26.x2-_26.x1),height:Math.abs(_26.y2-_26.y1)};}return this.bbox;}});_4.declare("dojox.gfx.shape.Polyline",_6.gfx.shape.Shape,{constructor:function(_27){this.shape=_6.gfx.getDefault("Polyline");this.rawNode=_27;},setShape:function(_28,_29){if(_28&&_28 instanceof Array){this.inherited(arguments,[{points:_28}]);if(_29&&this.shape.points.length){this.shape.points.push(this.shape.points[0]);}}else{this.inherited(arguments,[_28]);}return this;},_normalizePoints:function(){var p=this.shape.points,l=p&&p.length;if(l&&typeof p[0]=="number"){var _2a=[];for(var i=0;i<l;i+=2){_2a.push({x:p[i],y:p[i+1]});}this.shape.points=_2a;}},getBoundingBox:function(){if(!this.bbox&&this.shape.points.length){var p=this.shape.points;var l=p.length;var t=p[0];var _2b={l:t.x,t:t.y,r:t.x,b:t.y};for(var i=1;i<l;++i){t=p[i];if(_2b.l>t.x){_2b.l=t.x;}if(_2b.r<t.x){_2b.r=t.x;}if(_2b.t>t.y){_2b.t=t.y;}if(_2b.b<t.y){_2b.b=t.y;}}this.bbox={x:_2b.l,y:_2b.t,width:_2b.r-_2b.l,height:_2b.b-_2b.t};}return this.bbox;}});_4.declare("dojox.gfx.shape.Image",_6.gfx.shape.Shape,{constructor:function(_2c){this.shape=_6.gfx.getDefault("Image");this.rawNode=_2c;},getBoundingBox:function(){return this.shape;},setStroke:function(){return this;},setFill:function(){return this;}});_4.declare("dojox.gfx.shape.Text",_6.gfx.shape.Shape,{constructor:function(_2d){this.fontStyle=null;this.shape=_6.gfx.getDefault("Text");this.rawNode=_2d;},getFont:function(){return this.fontStyle;},setFont:function(_2e){this.fontStyle=typeof _2e=="string"?_6.gfx.splitFontString(_2e):_6.gfx.makeParameters(_6.gfx.defaultFont,_2e);this._setFont();return this;}});_6.gfx.shape.Creator={createShape:function(_2f){var gfx=_6.gfx;switch(_2f.type){case gfx.defaultPath.type:return this.createPath(_2f);case gfx.defaultRect.type:return this.createRect(_2f);case gfx.defaultCircle.type:return this.createCircle(_2f);case gfx.defaultEllipse.type:return this.createEllipse(_2f);case gfx.defaultLine.type:return this.createLine(_2f);case gfx.defaultPolyline.type:return this.createPolyline(_2f);case gfx.defaultImage.type:return this.createImage(_2f);case gfx.defaultText.type:return this.createText(_2f);case gfx.defaultTextPath.type:return this.createTextPath(_2f);}return null;},createGroup:function(){return this.createObject(_6.gfx.Group);},createRect:function(_30){return this.createObject(_6.gfx.Rect,_30);},createEllipse:function(_31){return this.createObject(_6.gfx.Ellipse,_31);},createCircle:function(_32){return this.createObject(_6.gfx.Circle,_32);},createLine:function(_33){return this.createObject(_6.gfx.Line,_33);},createPolyline:function(_34){return this.createObject(_6.gfx.Polyline,_34);},createImage:function(_35){return this.createObject(_6.gfx.Image,_35);},createText:function(_36){return this.createObject(_6.gfx.Text,_36);},createPath:function(_37){return this.createObject(_6.gfx.Path,_37);},createTextPath:function(_38){return this.createObject(_6.gfx.TextPath,{}).setText(_38);},createObject:function(_39,_3a){return null;}};}if(!_4._hasResource["dojox.gfx.path"]){_4._hasResource["dojox.gfx.path"]=true;_4.provide("dojox.gfx.path");_4.declare("dojox.gfx.path.Path",_6.gfx.shape.Shape,{constructor:function(_3b){this.shape=_4.clone(_6.gfx.defaultPath);this.segments=[];this.tbbox=null;this.absolute=true;this.last={};this.rawNode=_3b;this.segmented=false;},setAbsoluteMode:function(_3c){this._confirmSegmented();this.absolute=typeof _3c=="string"?(_3c=="absolute"):_3c;return this;},getAbsoluteMode:function(){this._confirmSegmented();return this.absolute;},getBoundingBox:function(){this._confirmSegmented();return (this.bbox&&("l" in this.bbox))?{x:this.bbox.l,y:this.bbox.t,width:this.bbox.r-this.bbox.l,height:this.bbox.b-this.bbox.t}:null;},_getRealBBox:function(){this._confirmSegmented();if(this.tbbox){return this.tbbox;}var _3d=this.bbox,_3e=this._getRealMatrix();this.bbox=null;for(var i=0,len=this.segments.length;i<len;++i){this._updateWithSegment(this.segments[i],_3e);}var t=this.bbox;this.bbox=_3d;this.tbbox=t?[{x:t.l,y:t.t},{x:t.r,y:t.t},{x:t.r,y:t.b},{x:t.l,y:t.b}]:null;return this.tbbox;},getLastPosition:function(){this._confirmSegmented();return "x" in this.last?this.last:null;},_applyTransform:function(){this.tbbox=null;return this.inherited(arguments);},_updateBBox:function(x,y,_3f){if(_3f){var t=_6.gfx.matrix.multiplyPoint(_3f,x,y);x=t.x;y=t.y;}if(this.bbox&&("l" in this.bbox)){if(this.bbox.l>x){this.bbox.l=x;}if(this.bbox.r<x){this.bbox.r=x;}if(this.bbox.t>y){this.bbox.t=y;}if(this.bbox.b<y){this.bbox.b=y;}}else{this.bbox={l:x,b:y,r:x,t:y};}},_updateWithSegment:function(_40,_41){var n=_40.args,l=n.length;switch(_40.action){case "M":case "L":case "C":case "S":case "Q":case "T":for(var i=0;i<l;i+=2){this._updateBBox(n[i],n[i+1],_41);}this.last.x=n[l-2];this.last.y=n[l-1];this.absolute=true;break;case "H":for(var i=0;i<l;++i){this._updateBBox(n[i],this.last.y,_41);}this.last.x=n[l-1];this.absolute=true;break;case "V":for(var i=0;i<l;++i){this._updateBBox(this.last.x,n[i],_41);}this.last.y=n[l-1];this.absolute=true;break;case "m":var _42=0;if(!("x" in this.last)){this._updateBBox(this.last.x=n[0],this.last.y=n[1],_41);_42=2;}for(var i=_42;i<l;i+=2){this._updateBBox(this.last.x+=n[i],this.last.y+=n[i+1],_41);}this.absolute=false;break;case "l":case "t":for(var i=0;i<l;i+=2){this._updateBBox(this.last.x+=n[i],this.last.y+=n[i+1],_41);}this.absolute=false;break;case "h":for(var i=0;i<l;++i){this._updateBBox(this.last.x+=n[i],this.last.y,_41);}this.absolute=false;break;case "v":for(var i=0;i<l;++i){this._updateBBox(this.last.x,this.last.y+=n[i],_41);}this.absolute=false;break;case "c":for(var i=0;i<l;i+=6){this._updateBBox(this.last.x+n[i],this.last.y+n[i+1],_41);this._updateBBox(this.last.x+n[i+2],this.last.y+n[i+3],_41);this._updateBBox(this.last.x+=n[i+4],this.last.y+=n[i+5],_41);}this.absolute=false;break;case "s":case "q":for(var i=0;i<l;i+=4){this._updateBBox(this.last.x+n[i],this.last.y+n[i+1],_41);this._updateBBox(this.last.x+=n[i+2],this.last.y+=n[i+3],_41);}this.absolute=false;break;case "A":for(var i=0;i<l;i+=7){this._updateBBox(n[i+5],n[i+6],_41);}this.last.x=n[l-2];this.last.y=n[l-1];this.absolute=true;break;case "a":for(var i=0;i<l;i+=7){this._updateBBox(this.last.x+=n[i+5],this.last.y+=n[i+6],_41);}this.absolute=false;break;}var _43=[_40.action];for(var i=0;i<l;++i){_43.push(_6.gfx.formatNumber(n[i],true));}if(typeof this.shape.path=="string"){this.shape.path+=_43.join("");}else{Array.prototype.push.apply(this.shape.path,_43);}},_validSegments:{m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},_pushSegment:function(_44,_45){this.tbbox=null;var _46=this._validSegments[_44.toLowerCase()];if(typeof _46=="number"){if(_46){if(_45.length>=_46){var _47={action:_44,args:_45.slice(0,_45.length-_45.length%_46)};this.segments.push(_47);this._updateWithSegment(_47);}}else{var _47={action:_44,args:[]};this.segments.push(_47);this._updateWithSegment(_47);}}},_collectArgs:function(_48,_49){for(var i=0;i<_49.length;++i){var t=_49[i];if(typeof t=="boolean"){_48.push(t?1:0);}else{if(typeof t=="number"){_48.push(t);}else{if(t instanceof Array){this._collectArgs(_48,t);}else{if("x" in t&&"y" in t){_48.push(t.x,t.y);}}}}}},moveTo:function(){this._confirmSegmented();var _4a=[];this._collectArgs(_4a,arguments);this._pushSegment(this.absolute?"M":"m",_4a);return this;},lineTo:function(){this._confirmSegmented();var _4b=[];this._collectArgs(_4b,arguments);this._pushSegment(this.absolute?"L":"l",_4b);return this;},hLineTo:function(){this._confirmSegmented();var _4c=[];this._collectArgs(_4c,arguments);this._pushSegment(this.absolute?"H":"h",_4c);return this;},vLineTo:function(){this._confirmSegmented();var _4d=[];this._collectArgs(_4d,arguments);this._pushSegment(this.absolute?"V":"v",_4d);return this;},curveTo:function(){this._confirmSegmented();var _4e=[];this._collectArgs(_4e,arguments);this._pushSegment(this.absolute?"C":"c",_4e);return this;},smoothCurveTo:function(){this._confirmSegmented();var _4f=[];this._collectArgs(_4f,arguments);this._pushSegment(this.absolute?"S":"s",_4f);return this;},qCurveTo:function(){this._confirmSegmented();var _50=[];this._collectArgs(_50,arguments);this._pushSegment(this.absolute?"Q":"q",_50);return this;},qSmoothCurveTo:function(){this._confirmSegmented();var _51=[];this._collectArgs(_51,arguments);this._pushSegment(this.absolute?"T":"t",_51);return this;},arcTo:function(){this._confirmSegmented();var _52=[];this._collectArgs(_52,arguments);this._pushSegment(this.absolute?"A":"a",_52);return this;},closePath:function(){this._confirmSegmented();this._pushSegment("Z",[]);return this;},_confirmSegmented:function(){if(!this.segmented){var _53=this.shape.path;this.shape.path=[];this._setPath(_53);this.shape.path=this.shape.path.join("");this.segmented=true;}},_setPath:function(_54){var p=_4.isArray(_54)?_54:_54.match(_6.gfx.pathSvgRegExp);this.segments=[];this.absolute=true;this.bbox={};this.last={};if(!p){return;}var _55="",_56=[],l=p.length;for(var i=0;i<l;++i){var t=p[i],x=parseFloat(t);if(isNaN(x)){if(_55){this._pushSegment(_55,_56);}_56=[];_55=t;}else{_56.push(x);}}this._pushSegment(_55,_56);},setShape:function(_57){this.inherited(arguments,[typeof _57=="string"?{path:_57}:_57]);this.segmented=false;this.segments=[];if(!_6.gfx.lazyPathSegmentation){this._confirmSegmented();}return this;},_2PI:Math.PI*2});_4.declare("dojox.gfx.path.TextPath",_6.gfx.path.Path,{constructor:function(_58){if(!("text" in this)){this.text=_4.clone(_6.gfx.defaultTextPath);}if(!("fontStyle" in this)){this.fontStyle=_4.clone(_6.gfx.defaultFont);}},getText:function(){return this.text;},setText:function(_59){this.text=_6.gfx.makeParameters(this.text,typeof _59=="string"?{text:_59}:_59);this._setText();return this;},getFont:function(){return this.fontStyle;},setFont:function(_5a){this.fontStyle=typeof _5a=="string"?_6.gfx.splitFontString(_5a):_6.gfx.makeParameters(_6.gfx.defaultFont,_5a);this._setFont();return this;}});}if(!_4._hasResource["dojox.gfx.svg"]){_4._hasResource["dojox.gfx.svg"]=true;_4.provide("dojox.gfx.svg");(function(){var d=_4,g=_6.gfx,gs=g.shape,svg=g.svg;svg.useSvgWeb=(typeof window.svgweb!="undefined");function _5b(ns,_5c){if(_4.doc.createElementNS){return _4.doc.createElementNS(ns,_5c);}else{return _4.doc.createElement(_5c);}};function _5d(_5e){if(svg.useSvgWeb){return _4.doc.createTextNode(_5e,true);}else{return _4.doc.createTextNode(_5e);}};function _5f(){if(svg.useSvgWeb){return _4.doc.createDocumentFragment(true);}else{return _4.doc.createDocumentFragment();}};svg.xmlns={xlink:"http://www.w3.org/1999/xlink",svg:"http://www.w3.org/2000/svg"};svg.getRef=function(_60){if(!_60||_60=="none"){return null;}if(_60.match(/^url\(#.+\)$/)){return d.byId(_60.slice(5,-1));}if(_60.match(/^#dojoUnique\d+$/)){return d.byId(_60.slice(1));}return null;};svg.dasharray={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]};d.declare("dojox.gfx.svg.Shape",gs.Shape,{setFill:function(_61){if(!_61){this.fillStyle=null;this.rawNode.setAttribute("fill","none");this.rawNode.setAttribute("fill-opacity",0);return this;}var f;var _62=function(x){this.setAttribute(x,f[x].toFixed(8));};if(typeof (_61)=="object"&&"type" in _61){switch(_61.type){case "linear":f=g.makeParameters(g.defaultLinearGradient,_61);var _63=this._setFillObject(f,"linearGradient");d.forEach(["x1","y1","x2","y2"],_62,_63);break;case "radial":f=g.makeParameters(g.defaultRadialGradient,_61);var _63=this._setFillObject(f,"radialGradient");d.forEach(["cx","cy","r"],_62,_63);break;case "pattern":f=g.makeParameters(g.defaultPattern,_61);var _64=this._setFillObject(f,"pattern");d.forEach(["x","y","width","height"],_62,_64);break;}this.fillStyle=f;return this;}var f=g.normalizeColor(_61);this.fillStyle=f;this.rawNode.setAttribute("fill",f.toCss());this.rawNode.setAttribute("fill-opacity",f.a);this.rawNode.setAttribute("fill-rule","evenodd");return this;},setStroke:function(_65){var rn=this.rawNode;if(!_65){this.strokeStyle=null;rn.setAttribute("stroke","none");rn.setAttribute("stroke-opacity",0);return this;}if(typeof _65=="string"||d.isArray(_65)||_65 instanceof d.Color){_65={color:_65};}var s=this.strokeStyle=g.makeParameters(g.defaultStroke,_65);s.color=g.normalizeColor(s.color);if(s){rn.setAttribute("stroke",s.color.toCss());rn.setAttribute("stroke-opacity",s.color.a);rn.setAttribute("stroke-width",s.width);rn.setAttribute("stroke-linecap",s.cap);if(typeof s.join=="number"){rn.setAttribute("stroke-linejoin","miter");rn.setAttribute("stroke-miterlimit",s.join);}else{rn.setAttribute("stroke-linejoin",s.join);}var da=s.style.toLowerCase();if(da in svg.dasharray){da=svg.dasharray[da];}if(da instanceof Array){da=d._toArray(da);for(var i=0;i<da.length;++i){da[i]*=s.width;}if(s.cap!="butt"){for(var i=0;i<da.length;i+=2){da[i]-=s.width;if(da[i]<1){da[i]=1;}}for(var i=1;i<da.length;i+=2){da[i]+=s.width;}}da=da.join(",");}rn.setAttribute("stroke-dasharray",da);rn.setAttribute("dojoGfxStrokeStyle",s.style);}return this;},_getParentSurface:function(){var _66=this.parent;for(;_66&&!(_66 instanceof g.Surface);_66=_66.parent){}return _66;},_setFillObject:function(f,_67){var _68=svg.xmlns.svg;this.fillStyle=f;var _69=this._getParentSurface(),_6a=_69.defNode,_6b=this.rawNode.getAttribute("fill"),ref=svg.getRef(_6b);if(ref){_6b=ref;if(_6b.tagName.toLowerCase()!=_67.toLowerCase()){var id=_6b.id;_6b.parentNode.removeChild(_6b);_6b=_5b(_68,_67);_6b.setAttribute("id",id);_6a.appendChild(_6b);}else{while(_6b.childNodes.length){_6b.removeChild(_6b.lastChild);}}}else{_6b=_5b(_68,_67);_6b.setAttribute("id",g._base._getUniqueId());_6a.appendChild(_6b);}if(_67=="pattern"){_6b.setAttribute("patternUnits","userSpaceOnUse");var img=_5b(_68,"image");img.setAttribute("x",0);img.setAttribute("y",0);img.setAttribute("width",f.width.toFixed(8));img.setAttribute("height",f.height.toFixed(8));img.setAttributeNS(svg.xmlns.xlink,"xlink:href",f.src);_6b.appendChild(img);}else{_6b.setAttribute("gradientUnits","userSpaceOnUse");for(var i=0;i<f.colors.length;++i){var c=f.colors[i],t=_5b(_68,"stop"),cc=c.color=g.normalizeColor(c.color);t.setAttribute("offset",c.offset.toFixed(8));t.setAttribute("stop-color",cc.toCss());t.setAttribute("stop-opacity",cc.a);_6b.appendChild(t);}}this.rawNode.setAttribute("fill","url(#"+_6b.getAttribute("id")+")");this.rawNode.removeAttribute("fill-opacity");this.rawNode.setAttribute("fill-rule","evenodd");return _6b;},_applyTransform:function(){var _6c=this.matrix;if(_6c){var tm=this.matrix;this.rawNode.setAttribute("transform","matrix("+tm.xx.toFixed(8)+","+tm.yx.toFixed(8)+","+tm.xy.toFixed(8)+","+tm.yy.toFixed(8)+","+tm.dx.toFixed(8)+","+tm.dy.toFixed(8)+")");}else{this.rawNode.removeAttribute("transform");}return this;},setRawNode:function(_6d){var r=this.rawNode=_6d;if(this.shape.type!="image"){r.setAttribute("fill","none");}r.setAttribute("fill-opacity",0);r.setAttribute("stroke","none");r.setAttribute("stroke-opacity",0);r.setAttribute("stroke-width",1);r.setAttribute("stroke-linecap","butt");r.setAttribute("stroke-linejoin","miter");r.setAttribute("stroke-miterlimit",4);},setShape:function(_6e){this.shape=g.makeParameters(this.shape,_6e);for(var i in this.shape){if(i!="type"){this.rawNode.setAttribute(i,this.shape[i]);}}this.bbox=null;return this;},_moveToFront:function(){this.rawNode.parentNode.appendChild(this.rawNode);return this;},_moveToBack:function(){this.rawNode.parentNode.insertBefore(this.rawNode,this.rawNode.parentNode.firstChild);return this;}});_4.declare("dojox.gfx.svg.Group",svg.Shape,{constructor:function(){gs.Container._init.call(this);},setRawNode:function(_6f){this.rawNode=_6f;}});svg.Group.nodeType="g";_4.declare("dojox.gfx.svg.Rect",[svg.Shape,gs.Rect],{setShape:function(_70){this.shape=g.makeParameters(this.shape,_70);this.bbox=null;for(var i in this.shape){if(i!="type"&&i!="r"){this.rawNode.setAttribute(i,this.shape[i]);}}if(this.shape.r){this.rawNode.setAttribute("ry",this.shape.r);this.rawNode.setAttribute("rx",this.shape.r);}return this;}});svg.Rect.nodeType="rect";_4.declare("dojox.gfx.svg.Ellipse",[svg.Shape,gs.Ellipse],{});svg.Ellipse.nodeType="ellipse";_4.declare("dojox.gfx.svg.Circle",[svg.Shape,gs.Circle],{});svg.Circle.nodeType="circle";_4.declare("dojox.gfx.svg.Line",[svg.Shape,gs.Line],{});svg.Line.nodeType="line";_4.declare("dojox.gfx.svg.Polyline",[svg.Shape,gs.Polyline],{setShape:function(_71,_72){if(_71&&_71 instanceof Array){this.shape=g.makeParameters(this.shape,{points:_71});if(_72&&this.shape.points.length){this.shape.points.push(this.shape.points[0]);}}else{this.shape=g.makeParameters(this.shape,_71);}this.bbox=null;this._normalizePoints();var _73=[],p=this.shape.points;for(var i=0;i<p.length;++i){_73.push(p[i].x.toFixed(8),p[i].y.toFixed(8));}this.rawNode.setAttribute("points",_73.join(" "));return this;}});svg.Polyline.nodeType="polyline";_4.declare("dojox.gfx.svg.Image",[svg.Shape,gs.Image],{setShape:function(_74){this.shape=g.makeParameters(this.shape,_74);this.bbox=null;var _75=this.rawNode;for(var i in this.shape){if(i!="type"&&i!="src"){_75.setAttribute(i,this.shape[i]);}}_75.setAttribute("preserveAspectRatio","none");_75.setAttributeNS(svg.xmlns.xlink,"xlink:href",this.shape.src);return this;}});svg.Image.nodeType="image";_4.declare("dojox.gfx.svg.Text",[svg.Shape,gs.Text],{setShape:function(_76){this.shape=g.makeParameters(this.shape,_76);this.bbox=null;var r=this.rawNode,s=this.shape;r.setAttribute("x",s.x);r.setAttribute("y",s.y);r.setAttribute("text-anchor",s.align);r.setAttribute("text-decoration",s.decoration);r.setAttribute("rotate",s.rotated?90:0);r.setAttribute("kerning",s.kerning?"auto":0);r.setAttribute("text-rendering","optimizeLegibility");if(r.firstChild){r.firstChild.nodeValue=s.text;}else{r.appendChild(_5d(s.text));}return this;},getTextWidth:function(){var _77=this.rawNode,_78=_77.parentNode,_79=_77.cloneNode(true);_79.style.visibility="hidden";var _7a=0,_7b=_79.firstChild.nodeValue;_78.appendChild(_79);if(_7b!=""){while(!_7a){if(_79.getBBox){_7a=parseInt(_79.getBBox().width);}else{_7a=68;}}}_78.removeChild(_79);return _7a;}});svg.Text.nodeType="text";_4.declare("dojox.gfx.svg.Path",[svg.Shape,g.path.Path],{_updateWithSegment:function(_7c){this.inherited(arguments);if(typeof (this.shape.path)=="string"){this.rawNode.setAttribute("d",this.shape.path);}},setShape:function(_7d){this.inherited(arguments);if(this.shape.path){this.rawNode.setAttribute("d",this.shape.path);}else{this.rawNode.removeAttribute("d");}return this;}});svg.Path.nodeType="path";_4.declare("dojox.gfx.svg.TextPath",[svg.Shape,g.path.TextPath],{_updateWithSegment:function(_7e){this.inherited(arguments);this._setTextPath();},setShape:function(_7f){this.inherited(arguments);this._setTextPath();return this;},_setTextPath:function(){if(typeof this.shape.path!="string"){return;}var r=this.rawNode;if(!r.firstChild){var tp=_5b(svg.xmlns.svg,"textPath"),tx=_5d("");tp.appendChild(tx);r.appendChild(tp);}var ref=r.firstChild.getAttributeNS(svg.xmlns.xlink,"href"),_80=ref&&svg.getRef(ref);if(!_80){var _81=this._getParentSurface();if(_81){var _82=_81.defNode;_80=_5b(svg.xmlns.svg,"path");var id=g._base._getUniqueId();_80.setAttribute("id",id);_82.appendChild(_80);r.firstChild.setAttributeNS(svg.xmlns.xlink,"xlink:href","#"+id);}}if(_80){_80.setAttribute("d",this.shape.path);}},_setText:function(){var r=this.rawNode;if(!r.firstChild){var tp=_5b(svg.xmlns.svg,"textPath"),tx=_5d("");tp.appendChild(tx);r.appendChild(tp);}r=r.firstChild;var t=this.text;r.setAttribute("alignment-baseline","middle");switch(t.align){case "middle":r.setAttribute("text-anchor","middle");r.setAttribute("startOffset","50%");break;case "end":r.setAttribute("text-anchor","end");r.setAttribute("startOffset","100%");break;default:r.setAttribute("text-anchor","start");r.setAttribute("startOffset","0%");break;}r.setAttribute("baseline-shift","0.5ex");r.setAttribute("text-decoration",t.decoration);r.setAttribute("rotate",t.rotated?90:0);r.setAttribute("kerning",t.kerning?"auto":0);r.firstChild.data=t.text;}});svg.TextPath.nodeType="text";_4.declare("dojox.gfx.svg.Surface",gs.Surface,{constructor:function(){gs.Container._init.call(this);},destroy:function(){this.defNode=null;this.inherited(arguments);},setDimensions:function(_83,_84){if(!this.rawNode){return this;}this.rawNode.setAttribute("width",_83);this.rawNode.setAttribute("height",_84);return this;},getDimensions:function(){var t=this.rawNode?{width:g.normalizedLength(this.rawNode.getAttribute("width")),height:g.normalizedLength(this.rawNode.getAttribute("height"))}:null;return t;}});svg.createSurface=function(_85,_86,_87){var s=new svg.Surface();s.rawNode=_5b(svg.xmlns.svg,"svg");if(_86){s.rawNode.setAttribute("width",_86);}if(_87){s.rawNode.setAttribute("height",_87);}var _88=_5b(svg.xmlns.svg,"defs");s.rawNode.appendChild(_88);s.defNode=_88;s._parent=d.byId(_85);s._parent.appendChild(s.rawNode);return s;};var _89={_setFont:function(){var f=this.fontStyle;this.rawNode.setAttribute("font-style",f.style);this.rawNode.setAttribute("font-variant",f.variant);this.rawNode.setAttribute("font-weight",f.weight);this.rawNode.setAttribute("font-size",f.size);this.rawNode.setAttribute("font-family",f.family);}};var C=gs.Container,_8a={openBatch:function(){this.fragment=_5f();},closeBatch:function(){if(this.fragment){this.rawNode.appendChild(this.fragment);delete this.fragment;}},add:function(_8b){if(this!=_8b.getParent()){if(this.fragment){this.fragment.appendChild(_8b.rawNode);}else{this.rawNode.appendChild(_8b.rawNode);}C.add.apply(this,arguments);}return this;},remove:function(_8c,_8d){if(this==_8c.getParent()){if(this.rawNode==_8c.rawNode.parentNode){this.rawNode.removeChild(_8c.rawNode);}if(this.fragment&&this.fragment==_8c.rawNode.parentNode){this.fragment.removeChild(_8c.rawNode);}C.remove.apply(this,arguments);}return this;},clear:function(){var r=this.rawNode;while(r.lastChild){r.removeChild(r.lastChild);}var _8e=this.defNode;if(_8e){while(_8e.lastChild){_8e.removeChild(_8e.lastChild);}r.appendChild(_8e);}return C.clear.apply(this,arguments);},_moveChildToFront:C._moveChildToFront,_moveChildToBack:C._moveChildToBack};var _8f={createObject:function(_90,_91){if(!this.rawNode){return null;}var _92=new _90(),_93=_5b(svg.xmlns.svg,_90.nodeType);_92.setRawNode(_93);_92.setShape(_91);this.add(_92);return _92;}};d.extend(svg.Text,_89);d.extend(svg.TextPath,_89);d.extend(svg.Group,_8a);d.extend(svg.Group,gs.Creator);d.extend(svg.Group,_8f);d.extend(svg.Surface,_8a);d.extend(svg.Surface,gs.Creator);d.extend(svg.Surface,_8f);if(svg.useSvgWeb){svg.createSurface=function(_94,_95,_96){var s=new svg.Surface();if(!_95||!_96){var pos=d.position(_94);_95=_95||pos.w;_96=_96||pos.h;}_94=d.byId(_94);var id=_94.id?_94.id+"_svgweb":g._base._getUniqueId();var _97=_5b(svg.xmlns.svg,"svg");_97.id=id;_97.setAttribute("width",_95);_97.setAttribute("height",_96);svgweb.appendChild(_97,_94);_97.addEventListener("SVGLoad",function(){s.rawNode=this;s.isLoaded=true;var _98=_5b(svg.xmlns.svg,"defs");s.rawNode.appendChild(_98);s.defNode=_98;if(s.onLoad){s.onLoad(s);}},false);s.isLoaded=false;return s;};svg.Surface.extend({destroy:function(){var _99=this.rawNode;svgweb.removeChild(_99,_99.parentNode);}});var _9a={connect:function(_9b,_9c,_9d){if(_9b.substring(0,2)==="on"){_9b=_9b.substring(2);}if(arguments.length==2){_9d=_9c;}else{_9d=d.hitch(_9c,_9d);}this.getEventSource().addEventListener(_9b,_9d,false);return [this,_9b,_9d];},disconnect:function(_9e){this.getEventSource().removeEventListener(_9e[1],_9e[2],false);delete _9e[0];}};_4.extend(svg.Shape,_9a);_4.extend(svg.Surface,_9a);}if(g.loadAndSwitch==="svg"){g.switchTo("svg");delete g.loadAndSwitch;}})();}}};});