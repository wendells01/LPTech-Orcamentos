function XE(n,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function ZE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Md={exports:{}},Ja={},jd={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function eT(){if(Kg)return ke;Kg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),I=Symbol.iterator;function C(L){return L===null||typeof L!="object"?null:(L=I&&L[I]||L["@@iterator"],typeof L=="function"?L:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,z={};function M(L,G,xe){this.props=L,this.context=G,this.refs=z,this.updater=xe||V}M.prototype.isReactComponent={},M.prototype.setState=function(L,G){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,G,"setState")},M.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function Z(){}Z.prototype=M.prototype;function se(L,G,xe){this.props=L,this.context=G,this.refs=z,this.updater=xe||V}var ae=se.prototype=new Z;ae.constructor=se,W(ae,M.prototype),ae.isPureReactComponent=!0;var he=Array.isArray,Te=Object.prototype.hasOwnProperty,Ce={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function x(L,G,xe){var Re,Pe={},Ne=null,ze=null;if(G!=null)for(Re in G.ref!==void 0&&(ze=G.ref),G.key!==void 0&&(Ne=""+G.key),G)Te.call(G,Re)&&!P.hasOwnProperty(Re)&&(Pe[Re]=G[Re]);var Me=arguments.length-2;if(Me===1)Pe.children=xe;else if(1<Me){for(var We=Array(Me),qt=0;qt<Me;qt++)We[qt]=arguments[qt+2];Pe.children=We}if(L&&L.defaultProps)for(Re in Me=L.defaultProps,Me)Pe[Re]===void 0&&(Pe[Re]=Me[Re]);return{$$typeof:n,type:L,key:Ne,ref:ze,props:Pe,_owner:Ce.current}}function R(L,G){return{$$typeof:n,type:L.type,key:G,ref:L.ref,props:L.props,_owner:L._owner}}function D(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function N(L){var G={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(xe){return G[xe]})}var O=/\/+/g;function A(L,G){return typeof L=="object"&&L!==null&&L.key!=null?N(""+L.key):G.toString(36)}function qe(L,G,xe,Re,Pe){var Ne=typeof L;(Ne==="undefined"||Ne==="boolean")&&(L=null);var ze=!1;if(L===null)ze=!0;else switch(Ne){case"string":case"number":ze=!0;break;case"object":switch(L.$$typeof){case n:case e:ze=!0}}if(ze)return ze=L,Pe=Pe(ze),L=Re===""?"."+A(ze,0):Re,he(Pe)?(xe="",L!=null&&(xe=L.replace(O,"$&/")+"/"),qe(Pe,G,xe,"",function(qt){return qt})):Pe!=null&&(D(Pe)&&(Pe=R(Pe,xe+(!Pe.key||ze&&ze.key===Pe.key?"":(""+Pe.key).replace(O,"$&/")+"/")+L)),G.push(Pe)),1;if(ze=0,Re=Re===""?".":Re+":",he(L))for(var Me=0;Me<L.length;Me++){Ne=L[Me];var We=Re+A(Ne,Me);ze+=qe(Ne,G,xe,We,Pe)}else if(We=C(L),typeof We=="function")for(L=We.call(L),Me=0;!(Ne=L.next()).done;)Ne=Ne.value,We=Re+A(Ne,Me++),ze+=qe(Ne,G,xe,We,Pe);else if(Ne==="object")throw G=String(L),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return ze}function Ke(L,G,xe){if(L==null)return L;var Re=[],Pe=0;return qe(L,Re,"","",function(Ne){return G.call(xe,Ne,Pe++)}),Re}function $(L){if(L._status===-1){var G=L._result;G=G(),G.then(function(xe){(L._status===0||L._status===-1)&&(L._status=1,L._result=xe)},function(xe){(L._status===0||L._status===-1)&&(L._status=2,L._result=xe)}),L._status===-1&&(L._status=0,L._result=G)}if(L._status===1)return L._result.default;throw L._result}var re={current:null},te={transition:null},pe={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:te,ReactCurrentOwner:Ce};function oe(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:Ke,forEach:function(L,G,xe){Ke(L,function(){G.apply(this,arguments)},xe)},count:function(L){var G=0;return Ke(L,function(){G++}),G},toArray:function(L){return Ke(L,function(G){return G})||[]},only:function(L){if(!D(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ke.Component=M,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=se,ke.StrictMode=s,ke.Suspense=g,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,ke.act=oe,ke.cloneElement=function(L,G,xe){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Re=W({},L.props),Pe=L.key,Ne=L.ref,ze=L._owner;if(G!=null){if(G.ref!==void 0&&(Ne=G.ref,ze=Ce.current),G.key!==void 0&&(Pe=""+G.key),L.type&&L.type.defaultProps)var Me=L.type.defaultProps;for(We in G)Te.call(G,We)&&!P.hasOwnProperty(We)&&(Re[We]=G[We]===void 0&&Me!==void 0?Me[We]:G[We])}var We=arguments.length-2;if(We===1)Re.children=xe;else if(1<We){Me=Array(We);for(var qt=0;qt<We;qt++)Me[qt]=arguments[qt+2];Re.children=Me}return{$$typeof:n,type:L.type,key:Pe,ref:Ne,props:Re,_owner:ze}},ke.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},ke.createElement=x,ke.createFactory=function(L){var G=x.bind(null,L);return G.type=L,G},ke.createRef=function(){return{current:null}},ke.forwardRef=function(L){return{$$typeof:f,render:L}},ke.isValidElement=D,ke.lazy=function(L){return{$$typeof:E,_payload:{_status:-1,_result:L},_init:$}},ke.memo=function(L,G){return{$$typeof:y,type:L,compare:G===void 0?null:G}},ke.startTransition=function(L){var G=te.transition;te.transition={};try{L()}finally{te.transition=G}},ke.unstable_act=oe,ke.useCallback=function(L,G){return re.current.useCallback(L,G)},ke.useContext=function(L){return re.current.useContext(L)},ke.useDebugValue=function(){},ke.useDeferredValue=function(L){return re.current.useDeferredValue(L)},ke.useEffect=function(L,G){return re.current.useEffect(L,G)},ke.useId=function(){return re.current.useId()},ke.useImperativeHandle=function(L,G,xe){return re.current.useImperativeHandle(L,G,xe)},ke.useInsertionEffect=function(L,G){return re.current.useInsertionEffect(L,G)},ke.useLayoutEffect=function(L,G){return re.current.useLayoutEffect(L,G)},ke.useMemo=function(L,G){return re.current.useMemo(L,G)},ke.useReducer=function(L,G,xe){return re.current.useReducer(L,G,xe)},ke.useRef=function(L){return re.current.useRef(L)},ke.useState=function(L){return re.current.useState(L)},ke.useSyncExternalStore=function(L,G,xe){return re.current.useSyncExternalStore(L,G,xe)},ke.useTransition=function(){return re.current.useTransition()},ke.version="18.3.1",ke}var Gg;function Of(){return Gg||(Gg=1,jd.exports=eT()),jd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function tT(){if(Qg)return Ja;Qg=1;var n=Of(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,g,y){var E,I={},C=null,V=null;y!==void 0&&(C=""+y),g.key!==void 0&&(C=""+g.key),g.ref!==void 0&&(V=g.ref);for(E in g)s.call(g,E)&&!l.hasOwnProperty(E)&&(I[E]=g[E]);if(f&&f.defaultProps)for(E in g=f.defaultProps,g)I[E]===void 0&&(I[E]=g[E]);return{$$typeof:e,type:f,key:C,ref:V,props:I,_owner:o.current}}return Ja.Fragment=t,Ja.jsx=c,Ja.jsxs=c,Ja}var Yg;function nT(){return Yg||(Yg=1,Md.exports=tT()),Md.exports}var v=nT(),Q=Of();const rT=ZE(Q),sT=XE({__proto__:null,default:rT},[Q]);var Ju={},Fd={exports:{}},Xt={},Ud={exports:{}},zd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function iT(){return Jg||(Jg=1,(function(n){function e(te,pe){var oe=te.length;te.push(pe);e:for(;0<oe;){var L=oe-1>>>1,G=te[L];if(0<o(G,pe))te[L]=pe,te[oe]=G,oe=L;else break e}}function t(te){return te.length===0?null:te[0]}function s(te){if(te.length===0)return null;var pe=te[0],oe=te.pop();if(oe!==pe){te[0]=oe;e:for(var L=0,G=te.length,xe=G>>>1;L<xe;){var Re=2*(L+1)-1,Pe=te[Re],Ne=Re+1,ze=te[Ne];if(0>o(Pe,oe))Ne<G&&0>o(ze,Pe)?(te[L]=ze,te[Ne]=oe,L=Ne):(te[L]=Pe,te[Re]=oe,L=Re);else if(Ne<G&&0>o(ze,oe))te[L]=ze,te[Ne]=oe,L=Ne;else break e}}return pe}function o(te,pe){var oe=te.sortIndex-pe.sortIndex;return oe!==0?oe:te.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var g=[],y=[],E=1,I=null,C=3,V=!1,W=!1,z=!1,M=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(te){for(var pe=t(y);pe!==null;){if(pe.callback===null)s(y);else if(pe.startTime<=te)s(y),pe.sortIndex=pe.expirationTime,e(g,pe);else break;pe=t(y)}}function he(te){if(z=!1,ae(te),!W)if(t(g)!==null)W=!0,$(Te);else{var pe=t(y);pe!==null&&re(he,pe.startTime-te)}}function Te(te,pe){W=!1,z&&(z=!1,Z(x),x=-1),V=!0;var oe=C;try{for(ae(pe),I=t(g);I!==null&&(!(I.expirationTime>pe)||te&&!N());){var L=I.callback;if(typeof L=="function"){I.callback=null,C=I.priorityLevel;var G=L(I.expirationTime<=pe);pe=n.unstable_now(),typeof G=="function"?I.callback=G:I===t(g)&&s(g),ae(pe)}else s(g);I=t(g)}if(I!==null)var xe=!0;else{var Re=t(y);Re!==null&&re(he,Re.startTime-pe),xe=!1}return xe}finally{I=null,C=oe,V=!1}}var Ce=!1,P=null,x=-1,R=5,D=-1;function N(){return!(n.unstable_now()-D<R)}function O(){if(P!==null){var te=n.unstable_now();D=te;var pe=!0;try{pe=P(!0,te)}finally{pe?A():(Ce=!1,P=null)}}else Ce=!1}var A;if(typeof se=="function")A=function(){se(O)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,Ke=qe.port2;qe.port1.onmessage=O,A=function(){Ke.postMessage(null)}}else A=function(){M(O,0)};function $(te){P=te,Ce||(Ce=!0,A())}function re(te,pe){x=M(function(){te(n.unstable_now())},pe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(te){te.callback=null},n.unstable_continueExecution=function(){W||V||(W=!0,$(Te))},n.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<te?Math.floor(1e3/te):5},n.unstable_getCurrentPriorityLevel=function(){return C},n.unstable_getFirstCallbackNode=function(){return t(g)},n.unstable_next=function(te){switch(C){case 1:case 2:case 3:var pe=3;break;default:pe=C}var oe=C;C=pe;try{return te()}finally{C=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(te,pe){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var oe=C;C=te;try{return pe()}finally{C=oe}},n.unstable_scheduleCallback=function(te,pe,oe){var L=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?L+oe:L):oe=L,te){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=oe+G,te={id:E++,callback:pe,priorityLevel:te,startTime:oe,expirationTime:G,sortIndex:-1},oe>L?(te.sortIndex=oe,e(y,te),t(g)===null&&te===t(y)&&(z?(Z(x),x=-1):z=!0,re(he,oe-L))):(te.sortIndex=G,e(g,te),W||V||(W=!0,$(Te))),te},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(te){var pe=C;return function(){var oe=C;C=pe;try{return te.apply(this,arguments)}finally{C=oe}}}})(zd)),zd}var Xg;function oT(){return Xg||(Xg=1,Ud.exports=iT()),Ud.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function aT(){if(Zg)return Xt;Zg=1;var n=Of(),e=oT();function t(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(r,i){c(r,i),c(r+"Capture",i)}function c(r,i){for(o[r]=i,r=0;r<i.length;r++)s.add(i[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},I={};function C(r){return g.call(I,r)?!0:g.call(E,r)?!1:y.test(r)?I[r]=!0:(E[r]=!0,!1)}function V(r,i,a,h){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function W(r,i,a,h){if(i===null||typeof i>"u"||V(r,i,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function z(r,i,a,h,d,p,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=h,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=i,this.sanitizeURL=p,this.removeEmptyString=w}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){M[r]=new z(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];M[i]=new z(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){M[r]=new z(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){M[r]=new z(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){M[r]=new z(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){M[r]=new z(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){M[r]=new z(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){M[r]=new z(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){M[r]=new z(r,5,!1,r.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function se(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace(Z,se);M[i]=new z(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace(Z,se);M[i]=new z(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace(Z,se);M[i]=new z(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){M[r]=new z(r,1,!1,r.toLowerCase(),null,!1,!1)}),M.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){M[r]=new z(r,1,!1,r.toLowerCase(),null,!0,!0)});function ae(r,i,a,h){var d=M.hasOwnProperty(i)?M[i]:null;(d!==null?d.type!==0:h||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(W(i,a,d,h)&&(a=null),h||d===null?C(i)&&(a===null?r.removeAttribute(i):r.setAttribute(i,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,h=d.attributeNamespace,a===null?r.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,h?r.setAttributeNS(h,i,a):r.setAttribute(i,a))))}var he=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Te=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),Ke=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),te=Symbol.iterator;function pe(r){return r===null||typeof r!="object"?null:(r=te&&r[te]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,L;function G(r){if(L===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+r}var xe=!1;function Re(r,i){if(!r||xe)return"";xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(B){var h=B}Reflect.construct(r,[],i)}else{try{i.call()}catch(B){h=B}r.call(i.prototype)}else{try{throw Error()}catch(B){h=B}r()}}catch(B){if(B&&h&&typeof B.stack=="string"){for(var d=B.stack.split(`
`),p=h.stack.split(`
`),w=d.length-1,S=p.length-1;1<=w&&0<=S&&d[w]!==p[S];)S--;for(;1<=w&&0<=S;w--,S--)if(d[w]!==p[S]){if(w!==1||S!==1)do if(w--,S--,0>S||d[w]!==p[S]){var k=`
`+d[w].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=w&&0<=S);break}}}finally{xe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?G(r):""}function Pe(r){switch(r.tag){case 5:return G(r.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function Ne(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case P:return"Fragment";case Ce:return"Portal";case R:return"Profiler";case x:return"StrictMode";case A:return"Suspense";case qe:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case N:return(r.displayName||"Context")+".Consumer";case D:return(r._context.displayName||"Context")+".Provider";case O:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ke:return i=r.displayName||null,i!==null?i:Ne(r.type)||"Memo";case $:i=r._payload,r=r._init;try{return Ne(r(i))}catch{}}return null}function ze(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(i);case 8:return i===x?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Me(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function We(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qt(r){var i=We(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),h=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){h=""+w,p.call(this,w)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function Mi(r){r._valueTracker||(r._valueTracker=qt(r))}function ra(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),h="";return r&&(h=We(r)?r.checked?"true":"false":r.value),r=h,r!==a?(i.setValue(r),!0):!1}function Wr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function ji(r,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Ll(r,i){var a=i.defaultValue==null?"":i.defaultValue,h=i.checked!=null?i.checked:i.defaultChecked;a=Me(i.value!=null?i.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Fi(r,i){i=i.checked,i!=null&&ae(r,"checked",i,!1)}function Ks(r,i){Fi(r,i);var a=Me(i.value),h=i.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?ft(r,i.type,a):i.hasOwnProperty("defaultValue")&&ft(r,i.type,Me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function sa(r,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var h=i.type;if(!(h!=="submit"&&h!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,a||i===r.value||(r.value=i),r.defaultValue=i}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function ft(r,i,a){(i!=="number"||Wr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var at=Array.isArray;function xn(r,i,a,h){if(r=r.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=i.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&h&&(r[a].defaultSelected=!0)}else{for(a=""+Me(a),i=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,h&&(r[d].defaultSelected=!0);return}i!==null||r[d].disabled||(i=r[d])}i!==null&&(i.selected=!0)}}function ia(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function oa(r,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(at(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}r._wrapperState={initialValue:Me(a)}}function Ml(r,i){var a=Me(i.value),h=Me(i.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),i.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function Hr(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function aa(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ui(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?aa(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Kr,jl=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,h,d){MSApp.execUnsafeLocalFunction(function(){return r(i,a,h,d)})}:r})(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(Kr=Kr||document.createElement("div"),Kr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Kr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function Gs(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var Gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fl=["Webkit","ms","Moz","O"];Object.keys(Gr).forEach(function(r){Fl.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),Gr[i]=Gr[r]})});function Qr(r,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Gr.hasOwnProperty(r)&&Gr[r]?(""+i).trim():i+"px"}function zi(r,i){r=r.style;for(var a in i)if(i.hasOwnProperty(a)){var h=a.indexOf("--")===0,d=Qr(a,i[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,d):r[a]=d}}var la=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sn(r,i){if(i){if(la[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Bi(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yr=null;function $i(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var vr=null,wr=null,st=null;function ua(r){if(r=La(r)){if(typeof vr!="function")throw Error(t(280));var i=r.stateNode;i&&(i=du(i),vr(r.stateNode,r.type,i))}}function Jr(r){wr?st?st.push(r):st=[r]:wr=r}function Xr(){if(wr){var r=wr,i=st;if(st=wr=null,ua(r),i)for(r=0;r<i.length;r++)ua(i[r])}}function Ul(r,i){return r(i)}function zl(){}var Un=!1;function Bl(r,i,a){if(Un)return r(i,a);Un=!0;try{return Ul(r,i,a)}finally{Un=!1,(wr!==null||st!==null)&&(zl(),Xr())}}function Qs(r,i){var a=r.stateNode;if(a===null)return null;var h=du(a);if(h===null)return null;a=h[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Zr=!1;if(f)try{var es={};Object.defineProperty(es,"passive",{get:function(){Zr=!0}}),window.addEventListener("test",es,es),window.removeEventListener("test",es,es)}catch{Zr=!1}function $l(r,i,a,h,d,p,w,S,k){var B=Array.prototype.slice.call(arguments,3);try{i.apply(a,B)}catch(J){this.onError(J)}}var Er=!1,zn=null,qi=!1,fn=null,ql={onError:function(r){Er=!0,zn=r}};function Wl(r,i,a,h,d,p,w,S,k){Er=!1,zn=null,$l.apply(ql,arguments)}function ca(r,i,a,h,d,p,w,S,k){if(Wl.apply(this,arguments),Er){if(Er){var B=zn;Er=!1,zn=null}else throw Error(t(198));qi||(qi=!0,fn=B)}}function An(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function ha(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function Hl(r){if(An(r)!==r)throw Error(t(188))}function Kl(r){var i=r.alternate;if(!i){if(i=An(r),i===null)throw Error(t(188));return i!==r?null:r}for(var a=r,h=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(h=d.return,h!==null){a=h;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Hl(d),r;if(p===h)return Hl(d),i;p=p.sibling}throw Error(t(188))}if(a.return!==h.return)a=d,h=p;else{for(var w=!1,S=d.child;S;){if(S===a){w=!0,a=d,h=p;break}if(S===h){w=!0,h=d,a=p;break}S=S.sibling}if(!w){for(S=p.child;S;){if(S===a){w=!0,a=p,h=d;break}if(S===h){w=!0,h=p,a=d;break}S=S.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:i}function Gl(r){return r=Kl(r),r!==null?Ys(r):null}function Ys(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=Ys(r);if(i!==null)return i;r=r.sibling}return null}var da=e.unstable_scheduleCallback,Wi=e.unstable_cancelCallback,Js=e.unstable_shouldYield,Tr=e.unstable_requestPaint,Ye=e.unstable_now,ph=e.unstable_getCurrentPriorityLevel,Hi=e.unstable_ImmediatePriority,fa=e.unstable_UserBlockingPriority,Xs=e.unstable_NormalPriority,pa=e.unstable_LowPriority,Ki=e.unstable_IdlePriority,Zs=null,nn=null;function Ql(r){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Zs,r,void 0,(r.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:ei,Bn=Math.log,pn=Math.LN2;function ei(r){return r>>>=0,r===0?32:31-(Bn(r)/pn|0)|0}var $n=64,ts=4194304;function Ue(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Ir(r,i){var a=r.pendingLanes;if(a===0)return 0;var h=0,d=r.suspendedLanes,p=r.pingedLanes,w=a&268435455;if(w!==0){var S=w&~d;S!==0?h=Ue(S):(p&=w,p!==0&&(h=Ue(p)))}else w=a&~d,w!==0?h=Ue(w):p!==0&&(h=Ue(p));if(h===0)return 0;if(i!==0&&i!==h&&(i&d)===0&&(d=h&-h,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((h&4)!==0&&(h|=a&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=h;0<i;)a=31-rn(i),d=1<<a,h|=r[a],i&=~d;return h}function ti(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ni(r,i){for(var a=r.suspendedLanes,h=r.pingedLanes,d=r.expirationTimes,p=r.pendingLanes;0<p;){var w=31-rn(p),S=1<<w,k=d[w];k===-1?((S&a)===0||(S&h)!==0)&&(d[w]=ti(S,i)):k<=i&&(r.expiredLanes|=S),p&=~S}}function ma(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ga(){var r=$n;return $n<<=1,($n&4194240)===0&&($n=64),r}function ya(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function ri(r,i,a){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-rn(i),r[i]=a}function mh(r,i){var a=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-rn(a),p=1<<d;i[d]=0,h[d]=-1,r[d]=-1,a&=~p}}function _a(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var h=31-rn(a),d=1<<h;d&i|r[h]&i&&(r[h]|=i),a&=~d}}var Oe=0;function qn(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var va,Gi,wa,Ea,Ta,Wn=!1,Qi=[],Hn=null,Kn=null,Rt=null,si=new Map,xr=new Map,sn=[],Yl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ns(r,i){switch(r){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":si.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xr.delete(i.pointerId)}}function Rn(r,i,a,h,d,p){return r===null||r.nativeEvent!==p?(r={blockedOn:i,domEventName:a,eventSystemFlags:h,nativeEvent:p,targetContainers:[d]},i!==null&&(i=La(i),i!==null&&Gi(i)),r):(r.eventSystemFlags|=h,i=r.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),r)}function Jl(r,i,a,h,d){switch(i){case"focusin":return Hn=Rn(Hn,r,i,a,h,d),!0;case"dragenter":return Kn=Rn(Kn,r,i,a,h,d),!0;case"mouseover":return Rt=Rn(Rt,r,i,a,h,d),!0;case"pointerover":var p=d.pointerId;return si.set(p,Rn(si.get(p)||null,r,i,a,h,d)),!0;case"gotpointercapture":return p=d.pointerId,xr.set(p,Rn(xr.get(p)||null,r,i,a,h,d)),!0}return!1}function Yi(r){var i=li(r.target);if(i!==null){var a=An(i);if(a!==null){if(i=a.tag,i===13){if(i=ha(a),i!==null){r.blockedOn=i,Ta(r.priority,function(){wa(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function He(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=Ji(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);Yr=h,a.target.dispatchEvent(h),Yr=null}else return i=La(a),i!==null&&Gi(i),r.blockedOn=a,!1;i.shift()}return!0}function Xl(r,i,a){He(r)&&a.delete(i)}function gh(){Wn=!1,Hn!==null&&He(Hn)&&(Hn=null),Kn!==null&&He(Kn)&&(Kn=null),Rt!==null&&He(Rt)&&(Rt=null),si.forEach(Xl),xr.forEach(Xl)}function rs(r,i){r.blockedOn===i&&(r.blockedOn=null,Wn||(Wn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,gh)))}function ss(r){function i(d){return rs(d,r)}if(0<Qi.length){rs(Qi[0],r);for(var a=1;a<Qi.length;a++){var h=Qi[a];h.blockedOn===r&&(h.blockedOn=null)}}for(Hn!==null&&rs(Hn,r),Kn!==null&&rs(Kn,r),Rt!==null&&rs(Rt,r),si.forEach(i),xr.forEach(i),a=0;a<sn.length;a++)h=sn[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<sn.length&&(a=sn[0],a.blockedOn===null);)Yi(a),a.blockedOn===null&&sn.shift()}var Sr=he.ReactCurrentBatchConfig,Ar=!0;function Gn(r,i,a,h){var d=Oe,p=Sr.transition;Sr.transition=null;try{Oe=1,Ia(r,i,a,h)}finally{Oe=d,Sr.transition=p}}function Zl(r,i,a,h){var d=Oe,p=Sr.transition;Sr.transition=null;try{Oe=4,Ia(r,i,a,h)}finally{Oe=d,Sr.transition=p}}function Ia(r,i,a,h){if(Ar){var d=Ji(r,i,a,h);if(d===null)Rh(r,i,h,Qn,a),ns(r,h);else if(Jl(d,r,i,a,h))h.stopPropagation();else if(ns(r,h),i&4&&-1<Yl.indexOf(r)){for(;d!==null;){var p=La(d);if(p!==null&&va(p),p=Ji(r,i,a,h),p===null&&Rh(r,i,h,Qn,a),p===d)break;d=p}d!==null&&h.stopPropagation()}else Rh(r,i,h,null,a)}}var Qn=null;function Ji(r,i,a,h){if(Qn=null,r=$i(h),r=li(r),r!==null)if(i=An(r),i===null)r=null;else if(a=i.tag,a===13){if(r=ha(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return Qn=r,null}function Xi(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ph()){case Hi:return 1;case fa:return 4;case Xs:case pa:return 16;case Ki:return 536870912;default:return 16}default:return 16}}var on=null,Zi=null,Rr=null;function eu(){if(Rr)return Rr;var r,i=Zi,a=i.length,h,d="value"in on?on.value:on.textContent,p=d.length;for(r=0;r<a&&i[r]===d[r];r++);var w=a-r;for(h=1;h<=w&&i[a-h]===d[p-h];h++);return Rr=d.slice(r,1<h?1-h:void 0)}function ii(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function Yn(){return!0}function xa(){return!1}function Ot(r){function i(a,h,d,p,w){this._reactName=a,this._targetInst=d,this.type=h,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Yn:xa,this.isPropagationStopped=xa,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yn)},persist:function(){},isPersistent:Yn}),i}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oi=Ot(Jn),is=oe({},Jn,{view:0,detail:0}),eo=Ot(is),to,no,an,ai=oe({},is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Se,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==an&&(an&&r.type==="mousemove"?(to=r.screenX-an.screenX,no=r.screenY-an.screenY):no=to=0,an=r),to)},movementY:function(r){return"movementY"in r?r.movementY:no}}),Sa=Ot(ai),tu=oe({},ai,{dataTransfer:0}),nu=Ot(tu),ro=oe({},is,{relatedTarget:0}),Ct=Ot(ro),ru=oe({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),su=Ot(ru),os=oe({},Jn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),u=Ot(os),m=oe({},Jn,{data:0}),_=Ot(m),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ne(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=q[r])?!!i[r]:!1}function Se(){return ne}var lt=oe({},is,{key:function(r){if(r.key){var i=T[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=ii(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?F[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Se,charCode:function(r){return r.type==="keypress"?ii(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?ii(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),$e=Ot(lt),pt=oe({},ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ln=Ot(pt),Cr=oe({},is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Se}),Xn=Ot(Cr),Zn=oe({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),so=Ot(Zn),Aa=oe({},ai,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Hw=Ot(Aa),Kw=[9,13,27,32],yh=f&&"CompositionEvent"in window,Ra=null;f&&"documentMode"in document&&(Ra=document.documentMode);var Gw=f&&"TextEvent"in window&&!Ra,Fp=f&&(!yh||Ra&&8<Ra&&11>=Ra),Up=" ",zp=!1;function Bp(r,i){switch(r){case"keyup":return Kw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $p(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var io=!1;function Qw(r,i){switch(r){case"compositionend":return $p(i);case"keypress":return i.which!==32?null:(zp=!0,Up);case"textInput":return r=i.data,r===Up&&zp?null:r;default:return null}}function Yw(r,i){if(io)return r==="compositionend"||!yh&&Bp(r,i)?(r=eu(),Rr=Zi=on=null,io=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Fp&&i.locale!=="ko"?null:i.data;default:return null}}var Jw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qp(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!Jw[r.type]:i==="textarea"}function Wp(r,i,a,h){Jr(h),i=uu(i,"onChange"),0<i.length&&(a=new oi("onChange","change",null,a,h),r.push({event:a,listeners:i}))}var Ca=null,ka=null;function Xw(r){um(r,0)}function iu(r){var i=co(r);if(ra(i))return r}function Zw(r,i){if(r==="change")return i}var Hp=!1;if(f){var _h;if(f){var vh="oninput"in document;if(!vh){var Kp=document.createElement("div");Kp.setAttribute("oninput","return;"),vh=typeof Kp.oninput=="function"}_h=vh}else _h=!1;Hp=_h&&(!document.documentMode||9<document.documentMode)}function Gp(){Ca&&(Ca.detachEvent("onpropertychange",Qp),ka=Ca=null)}function Qp(r){if(r.propertyName==="value"&&iu(ka)){var i=[];Wp(i,ka,r,$i(r)),Bl(Xw,i)}}function eE(r,i,a){r==="focusin"?(Gp(),Ca=i,ka=a,Ca.attachEvent("onpropertychange",Qp)):r==="focusout"&&Gp()}function tE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return iu(ka)}function nE(r,i){if(r==="click")return iu(i)}function rE(r,i){if(r==="input"||r==="change")return iu(i)}function sE(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var Cn=typeof Object.is=="function"?Object.is:sE;function Pa(r,i){if(Cn(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),h=Object.keys(i);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var d=a[h];if(!g.call(i,d)||!Cn(r[d],i[d]))return!1}return!0}function Yp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Jp(r,i){var a=Yp(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=i&&h>=i)return{node:a,offset:i-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yp(a)}}function Xp(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?Xp(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function Zp(){for(var r=window,i=Wr();i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=Wr(r.document)}return i}function wh(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function iE(r){var i=Zp(),a=r.focusedElem,h=r.selectionRange;if(i!==a&&a&&a.ownerDocument&&Xp(a.ownerDocument.documentElement,a)){if(h!==null&&wh(a)){if(i=h.start,r=h.end,r===void 0&&(r=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(r,a.value.length);else if(r=(i=a.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,p=Math.min(h.start,d);h=h.end===void 0?p:Math.min(h.end,d),!r.extend&&p>h&&(d=h,h=p,p=d),d=Jp(a,p);var w=Jp(a,h);d&&w&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),r.removeAllRanges(),p>h?(r.addRange(i),r.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),r.addRange(i)))}}for(i=[],r=a;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)r=i[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var oE=f&&"documentMode"in document&&11>=document.documentMode,oo=null,Eh=null,Na=null,Th=!1;function em(r,i,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Th||oo==null||oo!==Wr(h)||(h=oo,"selectionStart"in h&&wh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Na&&Pa(Na,h)||(Na=h,h=uu(Eh,"onSelect"),0<h.length&&(i=new oi("onSelect","select",null,i,a),r.push({event:i,listeners:h}),i.target=oo)))}function ou(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var ao={animationend:ou("Animation","AnimationEnd"),animationiteration:ou("Animation","AnimationIteration"),animationstart:ou("Animation","AnimationStart"),transitionend:ou("Transition","TransitionEnd")},Ih={},tm={};f&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function au(r){if(Ih[r])return Ih[r];if(!ao[r])return r;var i=ao[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in tm)return Ih[r]=i[a];return r}var nm=au("animationend"),rm=au("animationiteration"),sm=au("animationstart"),im=au("transitionend"),om=new Map,am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function as(r,i){om.set(r,i),l(i,[r])}for(var xh=0;xh<am.length;xh++){var Sh=am[xh],aE=Sh.toLowerCase(),lE=Sh[0].toUpperCase()+Sh.slice(1);as(aE,"on"+lE)}as(nm,"onAnimationEnd"),as(rm,"onAnimationIteration"),as(sm,"onAnimationStart"),as("dblclick","onDoubleClick"),as("focusin","onFocus"),as("focusout","onBlur"),as(im,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function lm(r,i,a){var h=r.type||"unknown-event";r.currentTarget=a,ca(h,i,void 0,r),r.currentTarget=null}function um(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],d=h.event;h=h.listeners;e:{var p=void 0;if(i)for(var w=h.length-1;0<=w;w--){var S=h[w],k=S.instance,B=S.currentTarget;if(S=S.listener,k!==p&&d.isPropagationStopped())break e;lm(d,S,B),p=k}else for(w=0;w<h.length;w++){if(S=h[w],k=S.instance,B=S.currentTarget,S=S.listener,k!==p&&d.isPropagationStopped())break e;lm(d,S,B),p=k}}}if(qi)throw r=fn,qi=!1,fn=null,r}function Je(r,i){var a=i[bh];a===void 0&&(a=i[bh]=new Set);var h=r+"__bubble";a.has(h)||(cm(i,r,2,!1),a.add(h))}function Ah(r,i,a){var h=0;i&&(h|=4),cm(a,r,h,i)}var lu="_reactListening"+Math.random().toString(36).slice(2);function ba(r){if(!r[lu]){r[lu]=!0,s.forEach(function(a){a!=="selectionchange"&&(uE.has(a)||Ah(a,!1,r),Ah(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[lu]||(i[lu]=!0,Ah("selectionchange",!1,i))}}function cm(r,i,a,h){switch(Xi(i)){case 1:var d=Gn;break;case 4:d=Zl;break;default:d=Ia}a=d.bind(null,i,a,r),d=void 0,!Zr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),h?d!==void 0?r.addEventListener(i,a,{capture:!0,passive:d}):r.addEventListener(i,a,!0):d!==void 0?r.addEventListener(i,a,{passive:d}):r.addEventListener(i,a,!1)}function Rh(r,i,a,h,d){var p=h;if((i&1)===0&&(i&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var S=h.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(w===4)for(w=h.return;w!==null;){var k=w.tag;if((k===3||k===4)&&(k=w.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;w=w.return}for(;S!==null;){if(w=li(S),w===null)return;if(k=w.tag,k===5||k===6){h=p=w;continue e}S=S.parentNode}}h=h.return}Bl(function(){var B=p,J=$i(a),X=[];e:{var Y=om.get(r);if(Y!==void 0){var le=oi,de=r;switch(r){case"keypress":if(ii(a)===0)break e;case"keydown":case"keyup":le=$e;break;case"focusin":de="focus",le=Ct;break;case"focusout":de="blur",le=Ct;break;case"beforeblur":case"afterblur":le=Ct;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=nu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Xn;break;case nm:case rm:case sm:le=su;break;case im:le=so;break;case"scroll":le=eo;break;case"wheel":le=Hw;break;case"copy":case"cut":case"paste":le=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=ln}var fe=(i&4)!==0,ut=!fe&&r==="scroll",j=fe?Y!==null?Y+"Capture":null:Y;fe=[];for(var b=B,U;b!==null;){U=b;var ee=U.stateNode;if(U.tag===5&&ee!==null&&(U=ee,j!==null&&(ee=Qs(b,j),ee!=null&&fe.push(Va(b,ee,U)))),ut)break;b=b.return}0<fe.length&&(Y=new le(Y,de,null,a,J),X.push({event:Y,listeners:fe}))}}if((i&7)===0){e:{if(Y=r==="mouseover"||r==="pointerover",le=r==="mouseout"||r==="pointerout",Y&&a!==Yr&&(de=a.relatedTarget||a.fromElement)&&(li(de)||de[kr]))break e;if((le||Y)&&(Y=J.window===J?J:(Y=J.ownerDocument)?Y.defaultView||Y.parentWindow:window,le?(de=a.relatedTarget||a.toElement,le=B,de=de?li(de):null,de!==null&&(ut=An(de),de!==ut||de.tag!==5&&de.tag!==6)&&(de=null)):(le=null,de=B),le!==de)){if(fe=Sa,ee="onMouseLeave",j="onMouseEnter",b="mouse",(r==="pointerout"||r==="pointerover")&&(fe=ln,ee="onPointerLeave",j="onPointerEnter",b="pointer"),ut=le==null?Y:co(le),U=de==null?Y:co(de),Y=new fe(ee,b+"leave",le,a,J),Y.target=ut,Y.relatedTarget=U,ee=null,li(J)===B&&(fe=new fe(j,b+"enter",de,a,J),fe.target=U,fe.relatedTarget=ut,ee=fe),ut=ee,le&&de)t:{for(fe=le,j=de,b=0,U=fe;U;U=lo(U))b++;for(U=0,ee=j;ee;ee=lo(ee))U++;for(;0<b-U;)fe=lo(fe),b--;for(;0<U-b;)j=lo(j),U--;for(;b--;){if(fe===j||j!==null&&fe===j.alternate)break t;fe=lo(fe),j=lo(j)}fe=null}else fe=null;le!==null&&hm(X,Y,le,fe,!1),de!==null&&ut!==null&&hm(X,ut,de,fe,!0)}}e:{if(Y=B?co(B):window,le=Y.nodeName&&Y.nodeName.toLowerCase(),le==="select"||le==="input"&&Y.type==="file")var me=Zw;else if(qp(Y))if(Hp)me=rE;else{me=tE;var ye=eE}else(le=Y.nodeName)&&le.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(me=nE);if(me&&(me=me(r,B))){Wp(X,me,a,J);break e}ye&&ye(r,Y,B),r==="focusout"&&(ye=Y._wrapperState)&&ye.controlled&&Y.type==="number"&&ft(Y,"number",Y.value)}switch(ye=B?co(B):window,r){case"focusin":(qp(ye)||ye.contentEditable==="true")&&(oo=ye,Eh=B,Na=null);break;case"focusout":Na=Eh=oo=null;break;case"mousedown":Th=!0;break;case"contextmenu":case"mouseup":case"dragend":Th=!1,em(X,a,J);break;case"selectionchange":if(oE)break;case"keydown":case"keyup":em(X,a,J)}var _e;if(yh)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else io?Bp(r,a)&&(Ee="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Fp&&a.locale!=="ko"&&(io||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&io&&(_e=eu()):(on=J,Zi="value"in on?on.value:on.textContent,io=!0)),ye=uu(B,Ee),0<ye.length&&(Ee=new _(Ee,r,null,a,J),X.push({event:Ee,listeners:ye}),_e?Ee.data=_e:(_e=$p(a),_e!==null&&(Ee.data=_e)))),(_e=Gw?Qw(r,a):Yw(r,a))&&(B=uu(B,"onBeforeInput"),0<B.length&&(J=new _("onBeforeInput","beforeinput",null,a,J),X.push({event:J,listeners:B}),J.data=_e))}um(X,i)})}function Va(r,i,a){return{instance:r,listener:i,currentTarget:a}}function uu(r,i){for(var a=i+"Capture",h=[];r!==null;){var d=r,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Qs(r,a),p!=null&&h.unshift(Va(r,p,d)),p=Qs(r,i),p!=null&&h.push(Va(r,p,d))),r=r.return}return h}function lo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function hm(r,i,a,h,d){for(var p=i._reactName,w=[];a!==null&&a!==h;){var S=a,k=S.alternate,B=S.stateNode;if(k!==null&&k===h)break;S.tag===5&&B!==null&&(S=B,d?(k=Qs(a,p),k!=null&&w.unshift(Va(a,k,S))):d||(k=Qs(a,p),k!=null&&w.push(Va(a,k,S)))),a=a.return}w.length!==0&&r.push({event:i,listeners:w})}var cE=/\r\n?/g,hE=/\u0000|\uFFFD/g;function dm(r){return(typeof r=="string"?r:""+r).replace(cE,`
`).replace(hE,"")}function cu(r,i,a){if(i=dm(i),dm(r)!==i&&a)throw Error(t(425))}function hu(){}var Ch=null,kh=null;function Ph(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Nh=typeof setTimeout=="function"?setTimeout:void 0,dE=typeof clearTimeout=="function"?clearTimeout:void 0,fm=typeof Promise=="function"?Promise:void 0,fE=typeof queueMicrotask=="function"?queueMicrotask:typeof fm<"u"?function(r){return fm.resolve(null).then(r).catch(pE)}:Nh;function pE(r){setTimeout(function(){throw r})}function Dh(r,i){var a=i,h=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(h===0){r.removeChild(d),ss(i);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=d}while(a);ss(i)}function ls(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function pm(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}var uo=Math.random().toString(36).slice(2),er="__reactFiber$"+uo,Oa="__reactProps$"+uo,kr="__reactContainer$"+uo,bh="__reactEvents$"+uo,mE="__reactListeners$"+uo,gE="__reactHandles$"+uo;function li(r){var i=r[er];if(i)return i;for(var a=r.parentNode;a;){if(i=a[kr]||a[er]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=pm(r);r!==null;){if(a=r[er])return a;r=pm(r)}return i}r=a,a=r.parentNode}return null}function La(r){return r=r[er]||r[kr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function co(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function du(r){return r[Oa]||null}var Vh=[],ho=-1;function us(r){return{current:r}}function Xe(r){0>ho||(r.current=Vh[ho],Vh[ho]=null,ho--)}function Ge(r,i){ho++,Vh[ho]=r.current,r.current=i}var cs={},Lt=us(cs),Kt=us(!1),ui=cs;function fo(r,i){var a=r.type.contextTypes;if(!a)return cs;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===i)return h.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(r){return r=r.childContextTypes,r!=null}function fu(){Xe(Kt),Xe(Lt)}function mm(r,i,a){if(Lt.current!==cs)throw Error(t(168));Ge(Lt,i),Ge(Kt,a)}function gm(r,i,a){var h=r.stateNode;if(i=i.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var d in h)if(!(d in i))throw Error(t(108,ze(r)||"Unknown",d));return oe({},a,h)}function pu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||cs,ui=Lt.current,Ge(Lt,r),Ge(Kt,Kt.current),!0}function ym(r,i,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=gm(r,i,ui),h.__reactInternalMemoizedMergedChildContext=r,Xe(Kt),Xe(Lt),Ge(Lt,r)):Xe(Kt),Ge(Kt,a)}var Pr=null,mu=!1,Oh=!1;function _m(r){Pr===null?Pr=[r]:Pr.push(r)}function yE(r){mu=!0,_m(r)}function hs(){if(!Oh&&Pr!==null){Oh=!0;var r=0,i=Oe;try{var a=Pr;for(Oe=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}Pr=null,mu=!1}catch(d){throw Pr!==null&&(Pr=Pr.slice(r+1)),da(Hi,hs),d}finally{Oe=i,Oh=!1}}return null}var po=[],mo=0,gu=null,yu=0,mn=[],gn=0,ci=null,Nr=1,Dr="";function hi(r,i){po[mo++]=yu,po[mo++]=gu,gu=r,yu=i}function vm(r,i,a){mn[gn++]=Nr,mn[gn++]=Dr,mn[gn++]=ci,ci=r;var h=Nr;r=Dr;var d=32-rn(h)-1;h&=~(1<<d),a+=1;var p=32-rn(i)+d;if(30<p){var w=d-d%5;p=(h&(1<<w)-1).toString(32),h>>=w,d-=w,Nr=1<<32-rn(i)+d|a<<d|h,Dr=p+r}else Nr=1<<p|a<<d|h,Dr=r}function Lh(r){r.return!==null&&(hi(r,1),vm(r,1,0))}function Mh(r){for(;r===gu;)gu=po[--mo],po[mo]=null,yu=po[--mo],po[mo]=null;for(;r===ci;)ci=mn[--gn],mn[gn]=null,Dr=mn[--gn],mn[gn]=null,Nr=mn[--gn],mn[gn]=null}var un=null,cn=null,et=!1,kn=null;function wm(r,i){var a=wn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=r,i=r.deletions,i===null?(r.deletions=[a],r.flags|=16):i.push(a)}function Em(r,i){switch(r.tag){case 5:var a=r.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,un=r,cn=ls(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,un=r,cn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ci!==null?{id:Nr,overflow:Dr}:null,r.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=wn(18,null,null,0),a.stateNode=i,a.return=r,r.child=a,un=r,cn=null,!0):!1;default:return!1}}function jh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Fh(r){if(et){var i=cn;if(i){var a=i;if(!Em(r,i)){if(jh(r))throw Error(t(418));i=ls(a.nextSibling);var h=un;i&&Em(r,i)?wm(h,a):(r.flags=r.flags&-4097|2,et=!1,un=r)}}else{if(jh(r))throw Error(t(418));r.flags=r.flags&-4097|2,et=!1,un=r}}}function Tm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;un=r}function _u(r){if(r!==un)return!1;if(!et)return Tm(r),et=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!Ph(r.type,r.memoizedProps)),i&&(i=cn)){if(jh(r))throw Im(),Error(t(418));for(;i;)wm(r,i),i=ls(i.nextSibling)}if(Tm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(i===0){cn=ls(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}r=r.nextSibling}cn=null}}else cn=un?ls(r.stateNode.nextSibling):null;return!0}function Im(){for(var r=cn;r;)r=ls(r.nextSibling)}function go(){cn=un=null,et=!1}function Uh(r){kn===null?kn=[r]:kn.push(r)}var _E=he.ReactCurrentBatchConfig;function Ma(r,i,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var d=h,p=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(w){var S=d.refs;w===null?delete S[p]:S[p]=w},i._stringRef=p,i)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function vu(r,i){throw r=Object.prototype.toString.call(i),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function xm(r){var i=r._init;return i(r._payload)}function Sm(r){function i(j,b){if(r){var U=j.deletions;U===null?(j.deletions=[b],j.flags|=16):U.push(b)}}function a(j,b){if(!r)return null;for(;b!==null;)i(j,b),b=b.sibling;return null}function h(j,b){for(j=new Map;b!==null;)b.key!==null?j.set(b.key,b):j.set(b.index,b),b=b.sibling;return j}function d(j,b){return j=vs(j,b),j.index=0,j.sibling=null,j}function p(j,b,U){return j.index=U,r?(U=j.alternate,U!==null?(U=U.index,U<b?(j.flags|=2,b):U):(j.flags|=2,b)):(j.flags|=1048576,b)}function w(j){return r&&j.alternate===null&&(j.flags|=2),j}function S(j,b,U,ee){return b===null||b.tag!==6?(b=Nd(U,j.mode,ee),b.return=j,b):(b=d(b,U),b.return=j,b)}function k(j,b,U,ee){var me=U.type;return me===P?J(j,b,U.props.children,ee,U.key):b!==null&&(b.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===$&&xm(me)===b.type)?(ee=d(b,U.props),ee.ref=Ma(j,b,U),ee.return=j,ee):(ee=$u(U.type,U.key,U.props,null,j.mode,ee),ee.ref=Ma(j,b,U),ee.return=j,ee)}function B(j,b,U,ee){return b===null||b.tag!==4||b.stateNode.containerInfo!==U.containerInfo||b.stateNode.implementation!==U.implementation?(b=Dd(U,j.mode,ee),b.return=j,b):(b=d(b,U.children||[]),b.return=j,b)}function J(j,b,U,ee,me){return b===null||b.tag!==7?(b=vi(U,j.mode,ee,me),b.return=j,b):(b=d(b,U),b.return=j,b)}function X(j,b,U){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Nd(""+b,j.mode,U),b.return=j,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Te:return U=$u(b.type,b.key,b.props,null,j.mode,U),U.ref=Ma(j,null,b),U.return=j,U;case Ce:return b=Dd(b,j.mode,U),b.return=j,b;case $:var ee=b._init;return X(j,ee(b._payload),U)}if(at(b)||pe(b))return b=vi(b,j.mode,U,null),b.return=j,b;vu(j,b)}return null}function Y(j,b,U,ee){var me=b!==null?b.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return me!==null?null:S(j,b,""+U,ee);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Te:return U.key===me?k(j,b,U,ee):null;case Ce:return U.key===me?B(j,b,U,ee):null;case $:return me=U._init,Y(j,b,me(U._payload),ee)}if(at(U)||pe(U))return me!==null?null:J(j,b,U,ee,null);vu(j,U)}return null}function le(j,b,U,ee,me){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return j=j.get(U)||null,S(b,j,""+ee,me);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Te:return j=j.get(ee.key===null?U:ee.key)||null,k(b,j,ee,me);case Ce:return j=j.get(ee.key===null?U:ee.key)||null,B(b,j,ee,me);case $:var ye=ee._init;return le(j,b,U,ye(ee._payload),me)}if(at(ee)||pe(ee))return j=j.get(U)||null,J(b,j,ee,me,null);vu(b,ee)}return null}function de(j,b,U,ee){for(var me=null,ye=null,_e=b,Ee=b=0,St=null;_e!==null&&Ee<U.length;Ee++){_e.index>Ee?(St=_e,_e=null):St=_e.sibling;var Fe=Y(j,_e,U[Ee],ee);if(Fe===null){_e===null&&(_e=St);break}r&&_e&&Fe.alternate===null&&i(j,_e),b=p(Fe,b,Ee),ye===null?me=Fe:ye.sibling=Fe,ye=Fe,_e=St}if(Ee===U.length)return a(j,_e),et&&hi(j,Ee),me;if(_e===null){for(;Ee<U.length;Ee++)_e=X(j,U[Ee],ee),_e!==null&&(b=p(_e,b,Ee),ye===null?me=_e:ye.sibling=_e,ye=_e);return et&&hi(j,Ee),me}for(_e=h(j,_e);Ee<U.length;Ee++)St=le(_e,j,Ee,U[Ee],ee),St!==null&&(r&&St.alternate!==null&&_e.delete(St.key===null?Ee:St.key),b=p(St,b,Ee),ye===null?me=St:ye.sibling=St,ye=St);return r&&_e.forEach(function(ws){return i(j,ws)}),et&&hi(j,Ee),me}function fe(j,b,U,ee){var me=pe(U);if(typeof me!="function")throw Error(t(150));if(U=me.call(U),U==null)throw Error(t(151));for(var ye=me=null,_e=b,Ee=b=0,St=null,Fe=U.next();_e!==null&&!Fe.done;Ee++,Fe=U.next()){_e.index>Ee?(St=_e,_e=null):St=_e.sibling;var ws=Y(j,_e,Fe.value,ee);if(ws===null){_e===null&&(_e=St);break}r&&_e&&ws.alternate===null&&i(j,_e),b=p(ws,b,Ee),ye===null?me=ws:ye.sibling=ws,ye=ws,_e=St}if(Fe.done)return a(j,_e),et&&hi(j,Ee),me;if(_e===null){for(;!Fe.done;Ee++,Fe=U.next())Fe=X(j,Fe.value,ee),Fe!==null&&(b=p(Fe,b,Ee),ye===null?me=Fe:ye.sibling=Fe,ye=Fe);return et&&hi(j,Ee),me}for(_e=h(j,_e);!Fe.done;Ee++,Fe=U.next())Fe=le(_e,j,Ee,Fe.value,ee),Fe!==null&&(r&&Fe.alternate!==null&&_e.delete(Fe.key===null?Ee:Fe.key),b=p(Fe,b,Ee),ye===null?me=Fe:ye.sibling=Fe,ye=Fe);return r&&_e.forEach(function(JE){return i(j,JE)}),et&&hi(j,Ee),me}function ut(j,b,U,ee){if(typeof U=="object"&&U!==null&&U.type===P&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Te:e:{for(var me=U.key,ye=b;ye!==null;){if(ye.key===me){if(me=U.type,me===P){if(ye.tag===7){a(j,ye.sibling),b=d(ye,U.props.children),b.return=j,j=b;break e}}else if(ye.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===$&&xm(me)===ye.type){a(j,ye.sibling),b=d(ye,U.props),b.ref=Ma(j,ye,U),b.return=j,j=b;break e}a(j,ye);break}else i(j,ye);ye=ye.sibling}U.type===P?(b=vi(U.props.children,j.mode,ee,U.key),b.return=j,j=b):(ee=$u(U.type,U.key,U.props,null,j.mode,ee),ee.ref=Ma(j,b,U),ee.return=j,j=ee)}return w(j);case Ce:e:{for(ye=U.key;b!==null;){if(b.key===ye)if(b.tag===4&&b.stateNode.containerInfo===U.containerInfo&&b.stateNode.implementation===U.implementation){a(j,b.sibling),b=d(b,U.children||[]),b.return=j,j=b;break e}else{a(j,b);break}else i(j,b);b=b.sibling}b=Dd(U,j.mode,ee),b.return=j,j=b}return w(j);case $:return ye=U._init,ut(j,b,ye(U._payload),ee)}if(at(U))return de(j,b,U,ee);if(pe(U))return fe(j,b,U,ee);vu(j,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,b!==null&&b.tag===6?(a(j,b.sibling),b=d(b,U),b.return=j,j=b):(a(j,b),b=Nd(U,j.mode,ee),b.return=j,j=b),w(j)):a(j,b)}return ut}var yo=Sm(!0),Am=Sm(!1),wu=us(null),Eu=null,_o=null,zh=null;function Bh(){zh=_o=Eu=null}function $h(r){var i=wu.current;Xe(wu),r._currentValue=i}function qh(r,i,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,h!==null&&(h.childLanes|=i)):h!==null&&(h.childLanes&i)!==i&&(h.childLanes|=i),r===a)break;r=r.return}}function vo(r,i){Eu=r,zh=_o=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&i)!==0&&(Qt=!0),r.firstContext=null)}function yn(r){var i=r._currentValue;if(zh!==r)if(r={context:r,memoizedValue:i,next:null},_o===null){if(Eu===null)throw Error(t(308));_o=r,Eu.dependencies={lanes:0,firstContext:r}}else _o=_o.next=r;return i}var di=null;function Wh(r){di===null?di=[r]:di.push(r)}function Rm(r,i,a,h){var d=i.interleaved;return d===null?(a.next=a,Wh(i)):(a.next=d.next,d.next=a),i.interleaved=a,br(r,h)}function br(r,i){r.lanes|=i;var a=r.alternate;for(a!==null&&(a.lanes|=i),a=r,r=r.return;r!==null;)r.childLanes|=i,a=r.alternate,a!==null&&(a.childLanes|=i),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ds=!1;function Hh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cm(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Vr(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function fs(r,i,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(je&2)!==0){var d=h.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),h.pending=i,br(r,a)}return d=h.interleaved,d===null?(i.next=i,Wh(h)):(i.next=d.next,d.next=i),h.interleaved=i,br(r,a)}function Tu(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var h=i.lanes;h&=r.pendingLanes,a|=h,i.lanes=a,_a(r,a)}}function km(r,i){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=w:p=p.next=w,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:h.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}function Iu(r,i,a,h){var d=r.updateQueue;ds=!1;var p=d.firstBaseUpdate,w=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var k=S,B=k.next;k.next=null,w===null?p=B:w.next=B,w=k;var J=r.alternate;J!==null&&(J=J.updateQueue,S=J.lastBaseUpdate,S!==w&&(S===null?J.firstBaseUpdate=B:S.next=B,J.lastBaseUpdate=k))}if(p!==null){var X=d.baseState;w=0,J=B=k=null,S=p;do{var Y=S.lane,le=S.eventTime;if((h&Y)===Y){J!==null&&(J=J.next={eventTime:le,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var de=r,fe=S;switch(Y=i,le=a,fe.tag){case 1:if(de=fe.payload,typeof de=="function"){X=de.call(le,X,Y);break e}X=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=fe.payload,Y=typeof de=="function"?de.call(le,X,Y):de,Y==null)break e;X=oe({},X,Y);break e;case 2:ds=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,Y=d.effects,Y===null?d.effects=[S]:Y.push(S))}else le={eventTime:le,lane:Y,tag:S.tag,payload:S.payload,callback:S.callback,next:null},J===null?(B=J=le,k=X):J=J.next=le,w|=Y;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;Y=S,S=Y.next,Y.next=null,d.lastBaseUpdate=Y,d.shared.pending=null}}while(!0);if(J===null&&(k=X),d.baseState=k,d.firstBaseUpdate=B,d.lastBaseUpdate=J,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);mi|=w,r.lanes=w,r.memoizedState=X}}function Pm(r,i,a){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var h=r[i],d=h.callback;if(d!==null){if(h.callback=null,h=a,typeof d!="function")throw Error(t(191,d));d.call(h)}}}var ja={},tr=us(ja),Fa=us(ja),Ua=us(ja);function fi(r){if(r===ja)throw Error(t(174));return r}function Kh(r,i){switch(Ge(Ua,i),Ge(Fa,r),Ge(tr,ja),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ui(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=Ui(i,r)}Xe(tr),Ge(tr,i)}function wo(){Xe(tr),Xe(Fa),Xe(Ua)}function Nm(r){fi(Ua.current);var i=fi(tr.current),a=Ui(i,r.type);i!==a&&(Ge(Fa,r),Ge(tr,a))}function Gh(r){Fa.current===r&&(Xe(tr),Xe(Fa))}var tt=us(0);function xu(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Qh=[];function Yh(){for(var r=0;r<Qh.length;r++)Qh[r]._workInProgressVersionPrimary=null;Qh.length=0}var Su=he.ReactCurrentDispatcher,Jh=he.ReactCurrentBatchConfig,pi=0,nt=null,wt=null,It=null,Au=!1,za=!1,Ba=0,vE=0;function Mt(){throw Error(t(321))}function Xh(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!Cn(r[a],i[a]))return!1;return!0}function Zh(r,i,a,h,d,p){if(pi=p,nt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Su.current=r===null||r.memoizedState===null?IE:xE,r=a(h,d),za){p=0;do{if(za=!1,Ba=0,25<=p)throw Error(t(301));p+=1,It=wt=null,i.updateQueue=null,Su.current=SE,r=a(h,d)}while(za)}if(Su.current=ku,i=wt!==null&&wt.next!==null,pi=0,It=wt=nt=null,Au=!1,i)throw Error(t(300));return r}function ed(){var r=Ba!==0;return Ba=0,r}function nr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?nt.memoizedState=It=r:It=It.next=r,It}function _n(){if(wt===null){var r=nt.alternate;r=r!==null?r.memoizedState:null}else r=wt.next;var i=It===null?nt.memoizedState:It.next;if(i!==null)It=i,wt=r;else{if(r===null)throw Error(t(310));wt=r,r={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},It===null?nt.memoizedState=It=r:It=It.next=r}return It}function $a(r,i){return typeof i=="function"?i(r):i}function td(r){var i=_n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=wt,d=h.baseQueue,p=a.pending;if(p!==null){if(d!==null){var w=d.next;d.next=p.next,p.next=w}h.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,h=h.baseState;var S=w=null,k=null,B=p;do{var J=B.lane;if((pi&J)===J)k!==null&&(k=k.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),h=B.hasEagerState?B.eagerState:r(h,B.action);else{var X={lane:J,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};k===null?(S=k=X,w=h):k=k.next=X,nt.lanes|=J,mi|=J}B=B.next}while(B!==null&&B!==p);k===null?w=h:k.next=S,Cn(h,i.memoizedState)||(Qt=!0),i.memoizedState=h,i.baseState=w,i.baseQueue=k,a.lastRenderedState=h}if(r=a.interleaved,r!==null){d=r;do p=d.lane,nt.lanes|=p,mi|=p,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function nd(r){var i=_n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do p=r(p,w.action),w=w.next;while(w!==d);Cn(p,i.memoizedState)||(Qt=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,h]}function Dm(){}function bm(r,i){var a=nt,h=_n(),d=i(),p=!Cn(h.memoizedState,d);if(p&&(h.memoizedState=d,Qt=!0),h=h.queue,rd(Lm.bind(null,a,h,r),[r]),h.getSnapshot!==i||p||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,qa(9,Om.bind(null,a,h,d,i),void 0,null),xt===null)throw Error(t(349));(pi&30)!==0||Vm(a,i,d)}return d}function Vm(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=nt.updateQueue,i===null?(i={lastEffect:null,stores:null},nt.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function Om(r,i,a,h){i.value=a,i.getSnapshot=h,Mm(i)&&jm(r)}function Lm(r,i,a){return a(function(){Mm(i)&&jm(r)})}function Mm(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!Cn(r,a)}catch{return!0}}function jm(r){var i=br(r,1);i!==null&&bn(i,r,1,-1)}function Fm(r){var i=nr();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:r},i.queue=r,r=r.dispatch=TE.bind(null,nt,r),[i.memoizedState,r]}function qa(r,i,a,h){return r={tag:r,create:i,destroy:a,deps:h,next:null},i=nt.updateQueue,i===null?(i={lastEffect:null,stores:null},nt.updateQueue=i,i.lastEffect=r.next=r):(a=i.lastEffect,a===null?i.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,i.lastEffect=r)),r}function Um(){return _n().memoizedState}function Ru(r,i,a,h){var d=nr();nt.flags|=r,d.memoizedState=qa(1|i,a,void 0,h===void 0?null:h)}function Cu(r,i,a,h){var d=_n();h=h===void 0?null:h;var p=void 0;if(wt!==null){var w=wt.memoizedState;if(p=w.destroy,h!==null&&Xh(h,w.deps)){d.memoizedState=qa(i,a,p,h);return}}nt.flags|=r,d.memoizedState=qa(1|i,a,p,h)}function zm(r,i){return Ru(8390656,8,r,i)}function rd(r,i){return Cu(2048,8,r,i)}function Bm(r,i){return Cu(4,2,r,i)}function $m(r,i){return Cu(4,4,r,i)}function qm(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function Wm(r,i,a){return a=a!=null?a.concat([r]):null,Cu(4,4,qm.bind(null,i,r),a)}function sd(){}function Hm(r,i){var a=_n();i=i===void 0?null:i;var h=a.memoizedState;return h!==null&&i!==null&&Xh(i,h[1])?h[0]:(a.memoizedState=[r,i],r)}function Km(r,i){var a=_n();i=i===void 0?null:i;var h=a.memoizedState;return h!==null&&i!==null&&Xh(i,h[1])?h[0]:(r=r(),a.memoizedState=[r,i],r)}function Gm(r,i,a){return(pi&21)===0?(r.baseState&&(r.baseState=!1,Qt=!0),r.memoizedState=a):(Cn(a,i)||(a=ga(),nt.lanes|=a,mi|=a,r.baseState=!0),i)}function wE(r,i){var a=Oe;Oe=a!==0&&4>a?a:4,r(!0);var h=Jh.transition;Jh.transition={};try{r(!1),i()}finally{Oe=a,Jh.transition=h}}function Qm(){return _n().memoizedState}function EE(r,i,a){var h=ys(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},Ym(r))Jm(i,a);else if(a=Rm(r,i,a,h),a!==null){var d=Ht();bn(a,r,h,d),Xm(a,i,h)}}function TE(r,i,a){var h=ys(r),d={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ym(r))Jm(i,d);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var w=i.lastRenderedState,S=p(w,a);if(d.hasEagerState=!0,d.eagerState=S,Cn(S,w)){var k=i.interleaved;k===null?(d.next=d,Wh(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}a=Rm(r,i,d,h),a!==null&&(d=Ht(),bn(a,r,h,d),Xm(a,i,h))}}function Ym(r){var i=r.alternate;return r===nt||i!==null&&i===nt}function Jm(r,i){za=Au=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function Xm(r,i,a){if((a&4194240)!==0){var h=i.lanes;h&=r.pendingLanes,a|=h,i.lanes=a,_a(r,a)}}var ku={readContext:yn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},IE={readContext:yn,useCallback:function(r,i){return nr().memoizedState=[r,i===void 0?null:i],r},useContext:yn,useEffect:zm,useImperativeHandle:function(r,i,a){return a=a!=null?a.concat([r]):null,Ru(4194308,4,qm.bind(null,i,r),a)},useLayoutEffect:function(r,i){return Ru(4194308,4,r,i)},useInsertionEffect:function(r,i){return Ru(4,2,r,i)},useMemo:function(r,i){var a=nr();return i=i===void 0?null:i,r=r(),a.memoizedState=[r,i],r},useReducer:function(r,i,a){var h=nr();return i=a!==void 0?a(i):i,h.memoizedState=h.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},h.queue=r,r=r.dispatch=EE.bind(null,nt,r),[h.memoizedState,r]},useRef:function(r){var i=nr();return r={current:r},i.memoizedState=r},useState:Fm,useDebugValue:sd,useDeferredValue:function(r){return nr().memoizedState=r},useTransition:function(){var r=Fm(!1),i=r[0];return r=wE.bind(null,r[1]),nr().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,a){var h=nt,d=nr();if(et){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),xt===null)throw Error(t(349));(pi&30)!==0||Vm(h,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,zm(Lm.bind(null,h,p,r),[r]),h.flags|=2048,qa(9,Om.bind(null,h,p,a,i),void 0,null),a},useId:function(){var r=nr(),i=xt.identifierPrefix;if(et){var a=Dr,h=Nr;a=(h&~(1<<32-rn(h)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ba++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=vE++,i=":"+i+"r"+a.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},xE={readContext:yn,useCallback:Hm,useContext:yn,useEffect:rd,useImperativeHandle:Wm,useInsertionEffect:Bm,useLayoutEffect:$m,useMemo:Km,useReducer:td,useRef:Um,useState:function(){return td($a)},useDebugValue:sd,useDeferredValue:function(r){var i=_n();return Gm(i,wt.memoizedState,r)},useTransition:function(){var r=td($a)[0],i=_n().memoizedState;return[r,i]},useMutableSource:Dm,useSyncExternalStore:bm,useId:Qm,unstable_isNewReconciler:!1},SE={readContext:yn,useCallback:Hm,useContext:yn,useEffect:rd,useImperativeHandle:Wm,useInsertionEffect:Bm,useLayoutEffect:$m,useMemo:Km,useReducer:nd,useRef:Um,useState:function(){return nd($a)},useDebugValue:sd,useDeferredValue:function(r){var i=_n();return wt===null?i.memoizedState=r:Gm(i,wt.memoizedState,r)},useTransition:function(){var r=nd($a)[0],i=_n().memoizedState;return[r,i]},useMutableSource:Dm,useSyncExternalStore:bm,useId:Qm,unstable_isNewReconciler:!1};function Pn(r,i){if(r&&r.defaultProps){i=oe({},i),r=r.defaultProps;for(var a in r)i[a]===void 0&&(i[a]=r[a]);return i}return i}function id(r,i,a,h){i=r.memoizedState,a=a(h,i),a=a==null?i:oe({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Pu={isMounted:function(r){return(r=r._reactInternals)?An(r)===r:!1},enqueueSetState:function(r,i,a){r=r._reactInternals;var h=Ht(),d=ys(r),p=Vr(h,d);p.payload=i,a!=null&&(p.callback=a),i=fs(r,p,d),i!==null&&(bn(i,r,d,h),Tu(i,r,d))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var h=Ht(),d=ys(r),p=Vr(h,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=fs(r,p,d),i!==null&&(bn(i,r,d,h),Tu(i,r,d))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=Ht(),h=ys(r),d=Vr(a,h);d.tag=2,i!=null&&(d.callback=i),i=fs(r,d,h),i!==null&&(bn(i,r,h,a),Tu(i,r,h))}};function Zm(r,i,a,h,d,p,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,p,w):i.prototype&&i.prototype.isPureReactComponent?!Pa(a,h)||!Pa(d,p):!0}function eg(r,i,a){var h=!1,d=cs,p=i.contextType;return typeof p=="object"&&p!==null?p=yn(p):(d=Gt(i)?ui:Lt.current,h=i.contextTypes,p=(h=h!=null)?fo(r,d):cs),i=new i(a,p),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Pu,r.stateNode=i,i._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=p),i}function tg(r,i,a,h){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,h),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,h),i.state!==r&&Pu.enqueueReplaceState(i,i.state,null)}function od(r,i,a,h){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},Hh(r);var p=i.contextType;typeof p=="object"&&p!==null?d.context=yn(p):(p=Gt(i)?ui:Lt.current,d.context=fo(r,p)),d.state=r.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(id(r,i,p,a),d.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Pu.enqueueReplaceState(d,d.state,null),Iu(r,a,d,h),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function Eo(r,i){try{var a="",h=i;do a+=Pe(h),h=h.return;while(h);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:r,source:i,stack:d,digest:null}}function ad(r,i,a){return{value:r,source:null,stack:a??null,digest:i??null}}function ld(r,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var AE=typeof WeakMap=="function"?WeakMap:Map;function ng(r,i,a){a=Vr(-1,a),a.tag=3,a.payload={element:null};var h=i.value;return a.callback=function(){Mu||(Mu=!0,Id=h),ld(r,i)},a}function rg(r,i,a){a=Vr(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var d=i.value;a.payload=function(){return h(d)},a.callback=function(){ld(r,i)}}var p=r.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){ld(r,i),typeof h!="function"&&(ms===null?ms=new Set([this]):ms.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function sg(r,i,a){var h=r.pingCache;if(h===null){h=r.pingCache=new AE;var d=new Set;h.set(i,d)}else d=h.get(i),d===void 0&&(d=new Set,h.set(i,d));d.has(a)||(d.add(a),r=UE.bind(null,r,i,a),i.then(r,r))}function ig(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function og(r,i,a,h,d){return(r.mode&1)===0?(r===i?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Vr(-1,1),i.tag=2,fs(a,i,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var RE=he.ReactCurrentOwner,Qt=!1;function Wt(r,i,a,h){i.child=r===null?Am(i,null,a,h):yo(i,r.child,a,h)}function ag(r,i,a,h,d){a=a.render;var p=i.ref;return vo(i,d),h=Zh(r,i,a,h,p,d),a=ed(),r!==null&&!Qt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,Or(r,i,d)):(et&&a&&Lh(i),i.flags|=1,Wt(r,i,h,d),i.child)}function lg(r,i,a,h,d){if(r===null){var p=a.type;return typeof p=="function"&&!Pd(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,ug(r,i,p,h,d)):(r=$u(a.type,null,h,i,i.mode,d),r.ref=i.ref,r.return=i,i.child=r)}if(p=r.child,(r.lanes&d)===0){var w=p.memoizedProps;if(a=a.compare,a=a!==null?a:Pa,a(w,h)&&r.ref===i.ref)return Or(r,i,d)}return i.flags|=1,r=vs(p,h),r.ref=i.ref,r.return=i,i.child=r}function ug(r,i,a,h,d){if(r!==null){var p=r.memoizedProps;if(Pa(p,h)&&r.ref===i.ref)if(Qt=!1,i.pendingProps=h=p,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Qt=!0);else return i.lanes=r.lanes,Or(r,i,d)}return ud(r,i,a,h,d)}function cg(r,i,a){var h=i.pendingProps,d=h.children,p=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(Io,hn),hn|=a;else{if((a&1073741824)===0)return r=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,Ge(Io,hn),hn|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=p!==null?p.baseLanes:a,Ge(Io,hn),hn|=h}else p!==null?(h=p.baseLanes|a,i.memoizedState=null):h=a,Ge(Io,hn),hn|=h;return Wt(r,i,d,a),i.child}function hg(r,i){var a=i.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function ud(r,i,a,h,d){var p=Gt(a)?ui:Lt.current;return p=fo(i,p),vo(i,d),a=Zh(r,i,a,h,p,d),h=ed(),r!==null&&!Qt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,Or(r,i,d)):(et&&h&&Lh(i),i.flags|=1,Wt(r,i,a,d),i.child)}function dg(r,i,a,h,d){if(Gt(a)){var p=!0;pu(i)}else p=!1;if(vo(i,d),i.stateNode===null)Du(r,i),eg(i,a,h),od(i,a,h,d),h=!0;else if(r===null){var w=i.stateNode,S=i.memoizedProps;w.props=S;var k=w.context,B=a.contextType;typeof B=="object"&&B!==null?B=yn(B):(B=Gt(a)?ui:Lt.current,B=fo(i,B));var J=a.getDerivedStateFromProps,X=typeof J=="function"||typeof w.getSnapshotBeforeUpdate=="function";X||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(S!==h||k!==B)&&tg(i,w,h,B),ds=!1;var Y=i.memoizedState;w.state=Y,Iu(i,h,w,d),k=i.memoizedState,S!==h||Y!==k||Kt.current||ds?(typeof J=="function"&&(id(i,a,J,h),k=i.memoizedState),(S=ds||Zm(i,a,S,h,Y,k,B))?(X||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=h,i.memoizedState=k),w.props=h,w.state=k,w.context=B,h=S):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),h=!1)}else{w=i.stateNode,Cm(r,i),S=i.memoizedProps,B=i.type===i.elementType?S:Pn(i.type,S),w.props=B,X=i.pendingProps,Y=w.context,k=a.contextType,typeof k=="object"&&k!==null?k=yn(k):(k=Gt(a)?ui:Lt.current,k=fo(i,k));var le=a.getDerivedStateFromProps;(J=typeof le=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(S!==X||Y!==k)&&tg(i,w,h,k),ds=!1,Y=i.memoizedState,w.state=Y,Iu(i,h,w,d);var de=i.memoizedState;S!==X||Y!==de||Kt.current||ds?(typeof le=="function"&&(id(i,a,le,h),de=i.memoizedState),(B=ds||Zm(i,a,B,h,Y,de,k)||!1)?(J||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,de,k),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,de,k)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(i.flags|=1024),i.memoizedProps=h,i.memoizedState=de),w.props=h,w.state=de,w.context=k,h=B):(typeof w.componentDidUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(i.flags|=1024),h=!1)}return cd(r,i,a,h,p,d)}function cd(r,i,a,h,d,p){hg(r,i);var w=(i.flags&128)!==0;if(!h&&!w)return d&&ym(i,a,!1),Or(r,i,p);h=i.stateNode,RE.current=i;var S=w&&typeof a.getDerivedStateFromError!="function"?null:h.render();return i.flags|=1,r!==null&&w?(i.child=yo(i,r.child,null,p),i.child=yo(i,null,S,p)):Wt(r,i,S,p),i.memoizedState=h.state,d&&ym(i,a,!0),i.child}function fg(r){var i=r.stateNode;i.pendingContext?mm(r,i.pendingContext,i.pendingContext!==i.context):i.context&&mm(r,i.context,!1),Kh(r,i.containerInfo)}function pg(r,i,a,h,d){return go(),Uh(d),i.flags|=256,Wt(r,i,a,h),i.child}var hd={dehydrated:null,treeContext:null,retryLane:0};function dd(r){return{baseLanes:r,cachePool:null,transitions:null}}function mg(r,i,a){var h=i.pendingProps,d=tt.current,p=!1,w=(i.flags&128)!==0,S;if((S=w)||(S=r!==null&&r.memoizedState===null?!1:(d&2)!==0),S?(p=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),Ge(tt,d&1),r===null)return Fh(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((i.mode&1)===0?i.lanes=1:r.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=h.children,r=h.fallback,p?(h=i.mode,p=i.child,w={mode:"hidden",children:w},(h&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=qu(w,h,0,null),r=vi(r,h,a,null),p.return=i,r.return=i,p.sibling=r,i.child=p,i.child.memoizedState=dd(a),i.memoizedState=hd,r):fd(i,w));if(d=r.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return CE(r,i,w,h,S,d,a);if(p){p=h.fallback,w=i.mode,d=r.child,S=d.sibling;var k={mode:"hidden",children:h.children};return(w&1)===0&&i.child!==d?(h=i.child,h.childLanes=0,h.pendingProps=k,i.deletions=null):(h=vs(d,k),h.subtreeFlags=d.subtreeFlags&14680064),S!==null?p=vs(S,p):(p=vi(p,w,a,null),p.flags|=2),p.return=i,h.return=i,h.sibling=p,i.child=h,h=p,p=i.child,w=r.child.memoizedState,w=w===null?dd(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=r.childLanes&~a,i.memoizedState=hd,h}return p=r.child,r=p.sibling,h=vs(p,{mode:"visible",children:h.children}),(i.mode&1)===0&&(h.lanes=a),h.return=i,h.sibling=null,r!==null&&(a=i.deletions,a===null?(i.deletions=[r],i.flags|=16):a.push(r)),i.child=h,i.memoizedState=null,h}function fd(r,i){return i=qu({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function Nu(r,i,a,h){return h!==null&&Uh(h),yo(i,r.child,null,a),r=fd(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function CE(r,i,a,h,d,p,w){if(a)return i.flags&256?(i.flags&=-257,h=ad(Error(t(422))),Nu(r,i,w,h)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(p=h.fallback,d=i.mode,h=qu({mode:"visible",children:h.children},d,0,null),p=vi(p,d,w,null),p.flags|=2,h.return=i,p.return=i,h.sibling=p,i.child=h,(i.mode&1)!==0&&yo(i,r.child,null,w),i.child.memoizedState=dd(w),i.memoizedState=hd,p);if((i.mode&1)===0)return Nu(r,i,w,null);if(d.data==="$!"){if(h=d.nextSibling&&d.nextSibling.dataset,h)var S=h.dgst;return h=S,p=Error(t(419)),h=ad(p,h,void 0),Nu(r,i,w,h)}if(S=(w&r.childLanes)!==0,Qt||S){if(h=xt,h!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(h.suspendedLanes|w))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,br(r,d),bn(h,r,d,-1))}return kd(),h=ad(Error(t(421))),Nu(r,i,w,h)}return d.data==="$?"?(i.flags|=128,i.child=r.child,i=zE.bind(null,r),d._reactRetry=i,null):(r=p.treeContext,cn=ls(d.nextSibling),un=i,et=!0,kn=null,r!==null&&(mn[gn++]=Nr,mn[gn++]=Dr,mn[gn++]=ci,Nr=r.id,Dr=r.overflow,ci=i),i=fd(i,h.children),i.flags|=4096,i)}function gg(r,i,a){r.lanes|=i;var h=r.alternate;h!==null&&(h.lanes|=i),qh(r.return,i,a)}function pd(r,i,a,h,d){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=h,p.tail=a,p.tailMode=d)}function yg(r,i,a){var h=i.pendingProps,d=h.revealOrder,p=h.tail;if(Wt(r,i,h.children,a),h=tt.current,(h&2)!==0)h=h&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&gg(r,a,i);else if(r.tag===19)gg(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(Ge(tt,h),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)r=a.alternate,r!==null&&xu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),pd(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(r=d.alternate,r!==null&&xu(r)===null){i.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}pd(i,!0,a,null,p);break;case"together":pd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Du(r,i){(i.mode&1)===0&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function Or(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),mi|=i.lanes,(a&i.childLanes)===0)return null;if(r!==null&&i.child!==r.child)throw Error(t(153));if(i.child!==null){for(r=i.child,a=vs(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=vs(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function kE(r,i,a){switch(i.tag){case 3:fg(i),go();break;case 5:Nm(i);break;case 1:Gt(i.type)&&pu(i);break;case 4:Kh(i,i.stateNode.containerInfo);break;case 10:var h=i.type._context,d=i.memoizedProps.value;Ge(wu,h._currentValue),h._currentValue=d;break;case 13:if(h=i.memoizedState,h!==null)return h.dehydrated!==null?(Ge(tt,tt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?mg(r,i,a):(Ge(tt,tt.current&1),r=Or(r,i,a),r!==null?r.sibling:null);Ge(tt,tt.current&1);break;case 19:if(h=(a&i.childLanes)!==0,(r.flags&128)!==0){if(h)return yg(r,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ge(tt,tt.current),h)break;return null;case 22:case 23:return i.lanes=0,cg(r,i,a)}return Or(r,i,a)}var _g,md,vg,wg;_g=function(r,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},md=function(){},vg=function(r,i,a,h){var d=r.memoizedProps;if(d!==h){r=i.stateNode,fi(tr.current);var p=null;switch(a){case"input":d=ji(r,d),h=ji(r,h),p=[];break;case"select":d=oe({},d,{value:void 0}),h=oe({},h,{value:void 0}),p=[];break;case"textarea":d=ia(r,d),h=ia(r,h),p=[];break;default:typeof d.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=hu)}Sn(a,h);var w;a=null;for(B in d)if(!h.hasOwnProperty(B)&&d.hasOwnProperty(B)&&d[B]!=null)if(B==="style"){var S=d[B];for(w in S)S.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(o.hasOwnProperty(B)?p||(p=[]):(p=p||[]).push(B,null));for(B in h){var k=h[B];if(S=d!=null?d[B]:void 0,h.hasOwnProperty(B)&&k!==S&&(k!=null||S!=null))if(B==="style")if(S){for(w in S)!S.hasOwnProperty(w)||k&&k.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in k)k.hasOwnProperty(w)&&S[w]!==k[w]&&(a||(a={}),a[w]=k[w])}else a||(p||(p=[]),p.push(B,a)),a=k;else B==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,S=S?S.__html:void 0,k!=null&&S!==k&&(p=p||[]).push(B,k)):B==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(B,""+k):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(o.hasOwnProperty(B)?(k!=null&&B==="onScroll"&&Je("scroll",r),p||S===k||(p=[])):(p=p||[]).push(B,k))}a&&(p=p||[]).push("style",a);var B=p;(i.updateQueue=B)&&(i.flags|=4)}},wg=function(r,i,a,h){a!==h&&(i.flags|=4)};function Wa(r,i){if(!et)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function jt(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(i)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,h|=d.subtreeFlags&14680064,h|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,h|=d.subtreeFlags,h|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=h,r.childLanes=a,i}function PE(r,i,a){var h=i.pendingProps;switch(Mh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(i),null;case 1:return Gt(i.type)&&fu(),jt(i),null;case 3:return h=i.stateNode,wo(),Xe(Kt),Xe(Lt),Yh(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(_u(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,kn!==null&&(Ad(kn),kn=null))),md(r,i),jt(i),null;case 5:Gh(i);var d=fi(Ua.current);if(a=i.type,r!==null&&i.stateNode!=null)vg(r,i,a,h,d),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!h){if(i.stateNode===null)throw Error(t(166));return jt(i),null}if(r=fi(tr.current),_u(i)){h=i.stateNode,a=i.type;var p=i.memoizedProps;switch(h[er]=i,h[Oa]=p,r=(i.mode&1)!==0,a){case"dialog":Je("cancel",h),Je("close",h);break;case"iframe":case"object":case"embed":Je("load",h);break;case"video":case"audio":for(d=0;d<Da.length;d++)Je(Da[d],h);break;case"source":Je("error",h);break;case"img":case"image":case"link":Je("error",h),Je("load",h);break;case"details":Je("toggle",h);break;case"input":Ll(h,p),Je("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!p.multiple},Je("invalid",h);break;case"textarea":oa(h,p),Je("invalid",h)}Sn(a,p),d=null;for(var w in p)if(p.hasOwnProperty(w)){var S=p[w];w==="children"?typeof S=="string"?h.textContent!==S&&(p.suppressHydrationWarning!==!0&&cu(h.textContent,S,r),d=["children",S]):typeof S=="number"&&h.textContent!==""+S&&(p.suppressHydrationWarning!==!0&&cu(h.textContent,S,r),d=["children",""+S]):o.hasOwnProperty(w)&&S!=null&&w==="onScroll"&&Je("scroll",h)}switch(a){case"input":Mi(h),sa(h,p,!0);break;case"textarea":Mi(h),Hr(h);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(h.onclick=hu)}h=d,i.updateQueue=h,h!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=aa(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(a,{is:h.is}):(r=w.createElement(a),a==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,a),r[er]=i,r[Oa]=h,_g(r,i,!1,!1),i.stateNode=r;e:{switch(w=Bi(a,h),a){case"dialog":Je("cancel",r),Je("close",r),d=h;break;case"iframe":case"object":case"embed":Je("load",r),d=h;break;case"video":case"audio":for(d=0;d<Da.length;d++)Je(Da[d],r);d=h;break;case"source":Je("error",r),d=h;break;case"img":case"image":case"link":Je("error",r),Je("load",r),d=h;break;case"details":Je("toggle",r),d=h;break;case"input":Ll(r,h),d=ji(r,h),Je("invalid",r);break;case"option":d=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},d=oe({},h,{value:void 0}),Je("invalid",r);break;case"textarea":oa(r,h),d=ia(r,h),Je("invalid",r);break;default:d=h}Sn(a,d),S=d;for(p in S)if(S.hasOwnProperty(p)){var k=S[p];p==="style"?zi(r,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&jl(r,k)):p==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Gs(r,k):typeof k=="number"&&Gs(r,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Je("scroll",r):k!=null&&ae(r,p,k,w))}switch(a){case"input":Mi(r),sa(r,h,!1);break;case"textarea":Mi(r),Hr(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Me(h.value));break;case"select":r.multiple=!!h.multiple,p=h.value,p!=null?xn(r,!!h.multiple,p,!1):h.defaultValue!=null&&xn(r,!!h.multiple,h.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=hu)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return jt(i),null;case 6:if(r&&i.stateNode!=null)wg(r,i,r.memoizedProps,h);else{if(typeof h!="string"&&i.stateNode===null)throw Error(t(166));if(a=fi(Ua.current),fi(tr.current),_u(i)){if(h=i.stateNode,a=i.memoizedProps,h[er]=i,(p=h.nodeValue!==a)&&(r=un,r!==null))switch(r.tag){case 3:cu(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&cu(h.nodeValue,a,(r.mode&1)!==0)}p&&(i.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[er]=i,i.stateNode=h}return jt(i),null;case 13:if(Xe(tt),h=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(et&&cn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Im(),go(),i.flags|=98560,p=!1;else if(p=_u(i),h!==null&&h.dehydrated!==null){if(r===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[er]=i}else go(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;jt(i),p=!1}else kn!==null&&(Ad(kn),kn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(i.child.flags|=8192,(i.mode&1)!==0&&(r===null||(tt.current&1)!==0?Et===0&&(Et=3):kd())),i.updateQueue!==null&&(i.flags|=4),jt(i),null);case 4:return wo(),md(r,i),r===null&&ba(i.stateNode.containerInfo),jt(i),null;case 10:return $h(i.type._context),jt(i),null;case 17:return Gt(i.type)&&fu(),jt(i),null;case 19:if(Xe(tt),p=i.memoizedState,p===null)return jt(i),null;if(h=(i.flags&128)!==0,w=p.rendering,w===null)if(h)Wa(p,!1);else{if(Et!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(w=xu(r),w!==null){for(i.flags|=128,Wa(p,!1),h=w.updateQueue,h!==null&&(i.updateQueue=h,i.flags|=4),i.subtreeFlags=0,h=a,a=i.child;a!==null;)p=a,r=h,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=r,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,r=w.dependencies,p.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ge(tt,tt.current&1|2),i.child}r=r.sibling}p.tail!==null&&Ye()>xo&&(i.flags|=128,h=!0,Wa(p,!1),i.lanes=4194304)}else{if(!h)if(r=xu(w),r!==null){if(i.flags|=128,h=!0,a=r.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Wa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!et)return jt(i),null}else 2*Ye()-p.renderingStartTime>xo&&a!==1073741824&&(i.flags|=128,h=!0,Wa(p,!1),i.lanes=4194304);p.isBackwards?(w.sibling=i.child,i.child=w):(a=p.last,a!==null?a.sibling=w:i.child=w,p.last=w)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ye(),i.sibling=null,a=tt.current,Ge(tt,h?a&1|2:a&1),i):(jt(i),null);case 22:case 23:return Cd(),h=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(i.flags|=8192),h&&(i.mode&1)!==0?(hn&1073741824)!==0&&(jt(i),i.subtreeFlags&6&&(i.flags|=8192)):jt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function NE(r,i){switch(Mh(i),i.tag){case 1:return Gt(i.type)&&fu(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return wo(),Xe(Kt),Xe(Lt),Yh(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 5:return Gh(i),null;case 13:if(Xe(tt),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(t(340));go()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return Xe(tt),null;case 4:return wo(),null;case 10:return $h(i.type._context),null;case 22:case 23:return Cd(),null;case 24:return null;default:return null}}var bu=!1,Ft=!1,DE=typeof WeakSet=="function"?WeakSet:Set,ce=null;function To(r,i){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){it(r,i,h)}else a.current=null}function gd(r,i,a){try{a()}catch(h){it(r,i,h)}}var Eg=!1;function bE(r,i){if(Ch=Ar,r=Zp(),wh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var d=h.anchorOffset,p=h.focusNode;h=h.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var w=0,S=-1,k=-1,B=0,J=0,X=r,Y=null;t:for(;;){for(var le;X!==a||d!==0&&X.nodeType!==3||(S=w+d),X!==p||h!==0&&X.nodeType!==3||(k=w+h),X.nodeType===3&&(w+=X.nodeValue.length),(le=X.firstChild)!==null;)Y=X,X=le;for(;;){if(X===r)break t;if(Y===a&&++B===d&&(S=w),Y===p&&++J===h&&(k=w),(le=X.nextSibling)!==null)break;X=Y,Y=X.parentNode}X=le}a=S===-1||k===-1?null:{start:S,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(kh={focusedElem:r,selectionRange:a},Ar=!1,ce=i;ce!==null;)if(i=ce,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,ce=r;else for(;ce!==null;){i=ce;try{var de=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(de!==null){var fe=de.memoizedProps,ut=de.memoizedState,j=i.stateNode,b=j.getSnapshotBeforeUpdate(i.elementType===i.type?fe:Pn(i.type,fe),ut);j.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var U=i.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){it(i,i.return,ee)}if(r=i.sibling,r!==null){r.return=i.return,ce=r;break}ce=i.return}return de=Eg,Eg=!1,de}function Ha(r,i,a){var h=i.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var d=h=h.next;do{if((d.tag&r)===r){var p=d.destroy;d.destroy=void 0,p!==void 0&&gd(i,a,p)}d=d.next}while(d!==h)}}function Vu(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==i)}}function yd(r){var i=r.ref;if(i!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof i=="function"?i(r):i.current=r}}function Tg(r){var i=r.alternate;i!==null&&(r.alternate=null,Tg(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[er],delete i[Oa],delete i[bh],delete i[mE],delete i[gE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Ig(r){return r.tag===5||r.tag===3||r.tag===4}function xg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Ig(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function _d(r,i,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(r,i):a.insertBefore(r,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(r,a)):(i=a,i.appendChild(r)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=hu));else if(h!==4&&(r=r.child,r!==null))for(_d(r,i,a),r=r.sibling;r!==null;)_d(r,i,a),r=r.sibling}function vd(r,i,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(vd(r,i,a),r=r.sibling;r!==null;)vd(r,i,a),r=r.sibling}var kt=null,Nn=!1;function ps(r,i,a){for(a=a.child;a!==null;)Sg(r,i,a),a=a.sibling}function Sg(r,i,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Zs,a)}catch{}switch(a.tag){case 5:Ft||To(a,i);case 6:var h=kt,d=Nn;kt=null,ps(r,i,a),kt=h,Nn=d,kt!==null&&(Nn?(r=kt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):kt.removeChild(a.stateNode));break;case 18:kt!==null&&(Nn?(r=kt,a=a.stateNode,r.nodeType===8?Dh(r.parentNode,a):r.nodeType===1&&Dh(r,a),ss(r)):Dh(kt,a.stateNode));break;case 4:h=kt,d=Nn,kt=a.stateNode.containerInfo,Nn=!0,ps(r,i,a),kt=h,Nn=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){d=h=h.next;do{var p=d,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&gd(a,i,w),d=d.next}while(d!==h)}ps(r,i,a);break;case 1:if(!Ft&&(To(a,i),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(S){it(a,i,S)}ps(r,i,a);break;case 21:ps(r,i,a);break;case 22:a.mode&1?(Ft=(h=Ft)||a.memoizedState!==null,ps(r,i,a),Ft=h):ps(r,i,a);break;default:ps(r,i,a)}}function Ag(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new DE),i.forEach(function(h){var d=BE.bind(null,r,h);a.has(h)||(a.add(h),h.then(d,d))})}}function Dn(r,i){var a=i.deletions;if(a!==null)for(var h=0;h<a.length;h++){var d=a[h];try{var p=r,w=i,S=w;e:for(;S!==null;){switch(S.tag){case 5:kt=S.stateNode,Nn=!1;break e;case 3:kt=S.stateNode.containerInfo,Nn=!0;break e;case 4:kt=S.stateNode.containerInfo,Nn=!0;break e}S=S.return}if(kt===null)throw Error(t(160));Sg(p,w,d),kt=null,Nn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(B){it(d,i,B)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Rg(i,r),i=i.sibling}function Rg(r,i){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Dn(i,r),rr(r),h&4){try{Ha(3,r,r.return),Vu(3,r)}catch(fe){it(r,r.return,fe)}try{Ha(5,r,r.return)}catch(fe){it(r,r.return,fe)}}break;case 1:Dn(i,r),rr(r),h&512&&a!==null&&To(a,a.return);break;case 5:if(Dn(i,r),rr(r),h&512&&a!==null&&To(a,a.return),r.flags&32){var d=r.stateNode;try{Gs(d,"")}catch(fe){it(r,r.return,fe)}}if(h&4&&(d=r.stateNode,d!=null)){var p=r.memoizedProps,w=a!==null?a.memoizedProps:p,S=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{S==="input"&&p.type==="radio"&&p.name!=null&&Fi(d,p),Bi(S,w);var B=Bi(S,p);for(w=0;w<k.length;w+=2){var J=k[w],X=k[w+1];J==="style"?zi(d,X):J==="dangerouslySetInnerHTML"?jl(d,X):J==="children"?Gs(d,X):ae(d,J,X,B)}switch(S){case"input":Ks(d,p);break;case"textarea":Ml(d,p);break;case"select":var Y=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var le=p.value;le!=null?xn(d,!!p.multiple,le,!1):Y!==!!p.multiple&&(p.defaultValue!=null?xn(d,!!p.multiple,p.defaultValue,!0):xn(d,!!p.multiple,p.multiple?[]:"",!1))}d[Oa]=p}catch(fe){it(r,r.return,fe)}}break;case 6:if(Dn(i,r),rr(r),h&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,p=r.memoizedProps;try{d.nodeValue=p}catch(fe){it(r,r.return,fe)}}break;case 3:if(Dn(i,r),rr(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{ss(i.containerInfo)}catch(fe){it(r,r.return,fe)}break;case 4:Dn(i,r),rr(r);break;case 13:Dn(i,r),rr(r),d=r.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Td=Ye())),h&4&&Ag(r);break;case 22:if(J=a!==null&&a.memoizedState!==null,r.mode&1?(Ft=(B=Ft)||J,Dn(i,r),Ft=B):Dn(i,r),rr(r),h&8192){if(B=r.memoizedState!==null,(r.stateNode.isHidden=B)&&!J&&(r.mode&1)!==0)for(ce=r,J=r.child;J!==null;){for(X=ce=J;ce!==null;){switch(Y=ce,le=Y.child,Y.tag){case 0:case 11:case 14:case 15:Ha(4,Y,Y.return);break;case 1:To(Y,Y.return);var de=Y.stateNode;if(typeof de.componentWillUnmount=="function"){h=Y,a=Y.return;try{i=h,de.props=i.memoizedProps,de.state=i.memoizedState,de.componentWillUnmount()}catch(fe){it(h,a,fe)}}break;case 5:To(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Pg(X);continue}}le!==null?(le.return=Y,ce=le):Pg(X)}J=J.sibling}e:for(J=null,X=r;;){if(X.tag===5){if(J===null){J=X;try{d=X.stateNode,B?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(S=X.stateNode,k=X.memoizedProps.style,w=k!=null&&k.hasOwnProperty("display")?k.display:null,S.style.display=Qr("display",w))}catch(fe){it(r,r.return,fe)}}}else if(X.tag===6){if(J===null)try{X.stateNode.nodeValue=B?"":X.memoizedProps}catch(fe){it(r,r.return,fe)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===r)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===r)break e;for(;X.sibling===null;){if(X.return===null||X.return===r)break e;J===X&&(J=null),X=X.return}J===X&&(J=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Dn(i,r),rr(r),h&4&&Ag(r);break;case 21:break;default:Dn(i,r),rr(r)}}function rr(r){var i=r.flags;if(i&2){try{e:{for(var a=r.return;a!==null;){if(Ig(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var d=h.stateNode;h.flags&32&&(Gs(d,""),h.flags&=-33);var p=xg(r);vd(r,p,d);break;case 3:case 4:var w=h.stateNode.containerInfo,S=xg(r);_d(r,S,w);break;default:throw Error(t(161))}}catch(k){it(r,r.return,k)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function VE(r,i,a){ce=r,Cg(r)}function Cg(r,i,a){for(var h=(r.mode&1)!==0;ce!==null;){var d=ce,p=d.child;if(d.tag===22&&h){var w=d.memoizedState!==null||bu;if(!w){var S=d.alternate,k=S!==null&&S.memoizedState!==null||Ft;S=bu;var B=Ft;if(bu=w,(Ft=k)&&!B)for(ce=d;ce!==null;)w=ce,k=w.child,w.tag===22&&w.memoizedState!==null?Ng(d):k!==null?(k.return=w,ce=k):Ng(d);for(;p!==null;)ce=p,Cg(p),p=p.sibling;ce=d,bu=S,Ft=B}kg(r)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ce=p):kg(r)}}function kg(r){for(;ce!==null;){var i=ce;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ft||Vu(5,i);break;case 1:var h=i.stateNode;if(i.flags&4&&!Ft)if(a===null)h.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Pn(i.type,a.memoizedProps);h.componentDidUpdate(d,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Pm(i,p,h);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Pm(i,w,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var B=i.alternate;if(B!==null){var J=B.memoizedState;if(J!==null){var X=J.dehydrated;X!==null&&ss(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||i.flags&512&&yd(i)}catch(Y){it(i,i.return,Y)}}if(i===r){ce=null;break}if(a=i.sibling,a!==null){a.return=i.return,ce=a;break}ce=i.return}}function Pg(r){for(;ce!==null;){var i=ce;if(i===r){ce=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ce=a;break}ce=i.return}}function Ng(r){for(;ce!==null;){var i=ce;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Vu(4,i)}catch(k){it(i,a,k)}break;case 1:var h=i.stateNode;if(typeof h.componentDidMount=="function"){var d=i.return;try{h.componentDidMount()}catch(k){it(i,d,k)}}var p=i.return;try{yd(i)}catch(k){it(i,p,k)}break;case 5:var w=i.return;try{yd(i)}catch(k){it(i,w,k)}}}catch(k){it(i,i.return,k)}if(i===r){ce=null;break}var S=i.sibling;if(S!==null){S.return=i.return,ce=S;break}ce=i.return}}var OE=Math.ceil,Ou=he.ReactCurrentDispatcher,wd=he.ReactCurrentOwner,vn=he.ReactCurrentBatchConfig,je=0,xt=null,mt=null,Pt=0,hn=0,Io=us(0),Et=0,Ka=null,mi=0,Lu=0,Ed=0,Ga=null,Yt=null,Td=0,xo=1/0,Lr=null,Mu=!1,Id=null,ms=null,ju=!1,gs=null,Fu=0,Qa=0,xd=null,Uu=-1,zu=0;function Ht(){return(je&6)!==0?Ye():Uu!==-1?Uu:Uu=Ye()}function ys(r){return(r.mode&1)===0?1:(je&2)!==0&&Pt!==0?Pt&-Pt:_E.transition!==null?(zu===0&&(zu=ga()),zu):(r=Oe,r!==0||(r=window.event,r=r===void 0?16:Xi(r.type)),r)}function bn(r,i,a,h){if(50<Qa)throw Qa=0,xd=null,Error(t(185));ri(r,a,h),((je&2)===0||r!==xt)&&(r===xt&&((je&2)===0&&(Lu|=a),Et===4&&_s(r,Pt)),Jt(r,h),a===1&&je===0&&(i.mode&1)===0&&(xo=Ye()+500,mu&&hs()))}function Jt(r,i){var a=r.callbackNode;ni(r,i);var h=Ir(r,r===xt?Pt:0);if(h===0)a!==null&&Wi(a),r.callbackNode=null,r.callbackPriority=0;else if(i=h&-h,r.callbackPriority!==i){if(a!=null&&Wi(a),i===1)r.tag===0?yE(bg.bind(null,r)):_m(bg.bind(null,r)),fE(function(){(je&6)===0&&hs()}),a=null;else{switch(qn(h)){case 1:a=Hi;break;case 4:a=fa;break;case 16:a=Xs;break;case 536870912:a=Ki;break;default:a=Xs}a=zg(a,Dg.bind(null,r))}r.callbackPriority=i,r.callbackNode=a}}function Dg(r,i){if(Uu=-1,zu=0,(je&6)!==0)throw Error(t(327));var a=r.callbackNode;if(So()&&r.callbackNode!==a)return null;var h=Ir(r,r===xt?Pt:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||i)i=Bu(r,h);else{i=h;var d=je;je|=2;var p=Og();(xt!==r||Pt!==i)&&(Lr=null,xo=Ye()+500,yi(r,i));do try{jE();break}catch(S){Vg(r,S)}while(!0);Bh(),Ou.current=p,je=d,mt!==null?i=0:(xt=null,Pt=0,i=Et)}if(i!==0){if(i===2&&(d=ma(r),d!==0&&(h=d,i=Sd(r,d))),i===1)throw a=Ka,yi(r,0),_s(r,h),Jt(r,Ye()),a;if(i===6)_s(r,h);else{if(d=r.current.alternate,(h&30)===0&&!LE(d)&&(i=Bu(r,h),i===2&&(p=ma(r),p!==0&&(h=p,i=Sd(r,p))),i===1))throw a=Ka,yi(r,0),_s(r,h),Jt(r,Ye()),a;switch(r.finishedWork=d,r.finishedLanes=h,i){case 0:case 1:throw Error(t(345));case 2:_i(r,Yt,Lr);break;case 3:if(_s(r,h),(h&130023424)===h&&(i=Td+500-Ye(),10<i)){if(Ir(r,0)!==0)break;if(d=r.suspendedLanes,(d&h)!==h){Ht(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Nh(_i.bind(null,r,Yt,Lr),i);break}_i(r,Yt,Lr);break;case 4:if(_s(r,h),(h&4194240)===h)break;for(i=r.eventTimes,d=-1;0<h;){var w=31-rn(h);p=1<<w,w=i[w],w>d&&(d=w),h&=~p}if(h=d,h=Ye()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*OE(h/1960))-h,10<h){r.timeoutHandle=Nh(_i.bind(null,r,Yt,Lr),h);break}_i(r,Yt,Lr);break;case 5:_i(r,Yt,Lr);break;default:throw Error(t(329))}}}return Jt(r,Ye()),r.callbackNode===a?Dg.bind(null,r):null}function Sd(r,i){var a=Ga;return r.current.memoizedState.isDehydrated&&(yi(r,i).flags|=256),r=Bu(r,i),r!==2&&(i=Yt,Yt=a,i!==null&&Ad(i)),r}function Ad(r){Yt===null?Yt=r:Yt.push.apply(Yt,r)}function LE(r){for(var i=r;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var d=a[h],p=d.getSnapshot;d=d.value;try{if(!Cn(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _s(r,i){for(i&=~Ed,i&=~Lu,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var a=31-rn(i),h=1<<a;r[a]=-1,i&=~h}}function bg(r){if((je&6)!==0)throw Error(t(327));So();var i=Ir(r,0);if((i&1)===0)return Jt(r,Ye()),null;var a=Bu(r,i);if(r.tag!==0&&a===2){var h=ma(r);h!==0&&(i=h,a=Sd(r,h))}if(a===1)throw a=Ka,yi(r,0),_s(r,i),Jt(r,Ye()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,_i(r,Yt,Lr),Jt(r,Ye()),null}function Rd(r,i){var a=je;je|=1;try{return r(i)}finally{je=a,je===0&&(xo=Ye()+500,mu&&hs())}}function gi(r){gs!==null&&gs.tag===0&&(je&6)===0&&So();var i=je;je|=1;var a=vn.transition,h=Oe;try{if(vn.transition=null,Oe=1,r)return r()}finally{Oe=h,vn.transition=a,je=i,(je&6)===0&&hs()}}function Cd(){hn=Io.current,Xe(Io)}function yi(r,i){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,dE(a)),mt!==null)for(a=mt.return;a!==null;){var h=a;switch(Mh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&fu();break;case 3:wo(),Xe(Kt),Xe(Lt),Yh();break;case 5:Gh(h);break;case 4:wo();break;case 13:Xe(tt);break;case 19:Xe(tt);break;case 10:$h(h.type._context);break;case 22:case 23:Cd()}a=a.return}if(xt=r,mt=r=vs(r.current,null),Pt=hn=i,Et=0,Ka=null,Ed=Lu=mi=0,Yt=Ga=null,di!==null){for(i=0;i<di.length;i++)if(a=di[i],h=a.interleaved,h!==null){a.interleaved=null;var d=h.next,p=a.pending;if(p!==null){var w=p.next;p.next=d,h.next=w}a.pending=h}di=null}return r}function Vg(r,i){do{var a=mt;try{if(Bh(),Su.current=ku,Au){for(var h=nt.memoizedState;h!==null;){var d=h.queue;d!==null&&(d.pending=null),h=h.next}Au=!1}if(pi=0,It=wt=nt=null,za=!1,Ba=0,wd.current=null,a===null||a.return===null){Et=1,Ka=i,mt=null;break}e:{var p=r,w=a.return,S=a,k=i;if(i=Pt,S.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var B=k,J=S,X=J.tag;if((J.mode&1)===0&&(X===0||X===11||X===15)){var Y=J.alternate;Y?(J.updateQueue=Y.updateQueue,J.memoizedState=Y.memoizedState,J.lanes=Y.lanes):(J.updateQueue=null,J.memoizedState=null)}var le=ig(w);if(le!==null){le.flags&=-257,og(le,w,S,p,i),le.mode&1&&sg(p,B,i),i=le,k=B;var de=i.updateQueue;if(de===null){var fe=new Set;fe.add(k),i.updateQueue=fe}else de.add(k);break e}else{if((i&1)===0){sg(p,B,i),kd();break e}k=Error(t(426))}}else if(et&&S.mode&1){var ut=ig(w);if(ut!==null){(ut.flags&65536)===0&&(ut.flags|=256),og(ut,w,S,p,i),Uh(Eo(k,S));break e}}p=k=Eo(k,S),Et!==4&&(Et=2),Ga===null?Ga=[p]:Ga.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var j=ng(p,k,i);km(p,j);break e;case 1:S=k;var b=p.type,U=p.stateNode;if((p.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(ms===null||!ms.has(U)))){p.flags|=65536,i&=-i,p.lanes|=i;var ee=rg(p,S,i);km(p,ee);break e}}p=p.return}while(p!==null)}Mg(a)}catch(me){i=me,mt===a&&a!==null&&(mt=a=a.return);continue}break}while(!0)}function Og(){var r=Ou.current;return Ou.current=ku,r===null?ku:r}function kd(){(Et===0||Et===3||Et===2)&&(Et=4),xt===null||(mi&268435455)===0&&(Lu&268435455)===0||_s(xt,Pt)}function Bu(r,i){var a=je;je|=2;var h=Og();(xt!==r||Pt!==i)&&(Lr=null,yi(r,i));do try{ME();break}catch(d){Vg(r,d)}while(!0);if(Bh(),je=a,Ou.current=h,mt!==null)throw Error(t(261));return xt=null,Pt=0,Et}function ME(){for(;mt!==null;)Lg(mt)}function jE(){for(;mt!==null&&!Js();)Lg(mt)}function Lg(r){var i=Ug(r.alternate,r,hn);r.memoizedProps=r.pendingProps,i===null?Mg(r):mt=i,wd.current=null}function Mg(r){var i=r;do{var a=i.alternate;if(r=i.return,(i.flags&32768)===0){if(a=PE(a,i,hn),a!==null){mt=a;return}}else{if(a=NE(a,i),a!==null){a.flags&=32767,mt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Et=6,mt=null;return}}if(i=i.sibling,i!==null){mt=i;return}mt=i=r}while(i!==null);Et===0&&(Et=5)}function _i(r,i,a){var h=Oe,d=vn.transition;try{vn.transition=null,Oe=1,FE(r,i,a,h)}finally{vn.transition=d,Oe=h}return null}function FE(r,i,a,h){do So();while(gs!==null);if((je&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var p=a.lanes|a.childLanes;if(mh(r,p),r===xt&&(mt=xt=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ju||(ju=!0,zg(Xs,function(){return So(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=vn.transition,vn.transition=null;var w=Oe;Oe=1;var S=je;je|=4,wd.current=null,bE(r,a),Rg(a,r),iE(kh),Ar=!!Ch,kh=Ch=null,r.current=a,VE(a),Tr(),je=S,Oe=w,vn.transition=p}else r.current=a;if(ju&&(ju=!1,gs=r,Fu=d),p=r.pendingLanes,p===0&&(ms=null),Ql(a.stateNode),Jt(r,Ye()),i!==null)for(h=r.onRecoverableError,a=0;a<i.length;a++)d=i[a],h(d.value,{componentStack:d.stack,digest:d.digest});if(Mu)throw Mu=!1,r=Id,Id=null,r;return(Fu&1)!==0&&r.tag!==0&&So(),p=r.pendingLanes,(p&1)!==0?r===xd?Qa++:(Qa=0,xd=r):Qa=0,hs(),null}function So(){if(gs!==null){var r=qn(Fu),i=vn.transition,a=Oe;try{if(vn.transition=null,Oe=16>r?16:r,gs===null)var h=!1;else{if(r=gs,gs=null,Fu=0,(je&6)!==0)throw Error(t(331));var d=je;for(je|=4,ce=r.current;ce!==null;){var p=ce,w=p.child;if((ce.flags&16)!==0){var S=p.deletions;if(S!==null){for(var k=0;k<S.length;k++){var B=S[k];for(ce=B;ce!==null;){var J=ce;switch(J.tag){case 0:case 11:case 15:Ha(8,J,p)}var X=J.child;if(X!==null)X.return=J,ce=X;else for(;ce!==null;){J=ce;var Y=J.sibling,le=J.return;if(Tg(J),J===B){ce=null;break}if(Y!==null){Y.return=le,ce=Y;break}ce=le}}}var de=p.alternate;if(de!==null){var fe=de.child;if(fe!==null){de.child=null;do{var ut=fe.sibling;fe.sibling=null,fe=ut}while(fe!==null)}}ce=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,ce=w;else e:for(;ce!==null;){if(p=ce,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ha(9,p,p.return)}var j=p.sibling;if(j!==null){j.return=p.return,ce=j;break e}ce=p.return}}var b=r.current;for(ce=b;ce!==null;){w=ce;var U=w.child;if((w.subtreeFlags&2064)!==0&&U!==null)U.return=w,ce=U;else e:for(w=b;ce!==null;){if(S=ce,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Vu(9,S)}}catch(me){it(S,S.return,me)}if(S===w){ce=null;break e}var ee=S.sibling;if(ee!==null){ee.return=S.return,ce=ee;break e}ce=S.return}}if(je=d,hs(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Zs,r)}catch{}h=!0}return h}finally{Oe=a,vn.transition=i}}return!1}function jg(r,i,a){i=Eo(a,i),i=ng(r,i,1),r=fs(r,i,1),i=Ht(),r!==null&&(ri(r,1,i),Jt(r,i))}function it(r,i,a){if(r.tag===3)jg(r,r,a);else for(;i!==null;){if(i.tag===3){jg(i,r,a);break}else if(i.tag===1){var h=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(ms===null||!ms.has(h))){r=Eo(a,r),r=rg(i,r,1),i=fs(i,r,1),r=Ht(),i!==null&&(ri(i,1,r),Jt(i,r));break}}i=i.return}}function UE(r,i,a){var h=r.pingCache;h!==null&&h.delete(i),i=Ht(),r.pingedLanes|=r.suspendedLanes&a,xt===r&&(Pt&a)===a&&(Et===4||Et===3&&(Pt&130023424)===Pt&&500>Ye()-Td?yi(r,0):Ed|=a),Jt(r,i)}function Fg(r,i){i===0&&((r.mode&1)===0?i=1:(i=ts,ts<<=1,(ts&130023424)===0&&(ts=4194304)));var a=Ht();r=br(r,i),r!==null&&(ri(r,i,a),Jt(r,a))}function zE(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),Fg(r,a)}function BE(r,i){var a=0;switch(r.tag){case 13:var h=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(i),Fg(r,a)}var Ug;Ug=function(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps||Kt.current)Qt=!0;else{if((r.lanes&a)===0&&(i.flags&128)===0)return Qt=!1,kE(r,i,a);Qt=(r.flags&131072)!==0}else Qt=!1,et&&(i.flags&1048576)!==0&&vm(i,yu,i.index);switch(i.lanes=0,i.tag){case 2:var h=i.type;Du(r,i),r=i.pendingProps;var d=fo(i,Lt.current);vo(i,a),d=Zh(null,i,h,r,d,a);var p=ed();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gt(h)?(p=!0,pu(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Hh(i),d.updater=Pu,i.stateNode=d,d._reactInternals=i,od(i,h,r,a),i=cd(null,i,h,!0,p,a)):(i.tag=0,et&&p&&Lh(i),Wt(null,i,d,a),i=i.child),i;case 16:h=i.elementType;e:{switch(Du(r,i),r=i.pendingProps,d=h._init,h=d(h._payload),i.type=h,d=i.tag=qE(h),r=Pn(h,r),d){case 0:i=ud(null,i,h,r,a);break e;case 1:i=dg(null,i,h,r,a);break e;case 11:i=ag(null,i,h,r,a);break e;case 14:i=lg(null,i,h,Pn(h.type,r),a);break e}throw Error(t(306,h,""))}return i;case 0:return h=i.type,d=i.pendingProps,d=i.elementType===h?d:Pn(h,d),ud(r,i,h,d,a);case 1:return h=i.type,d=i.pendingProps,d=i.elementType===h?d:Pn(h,d),dg(r,i,h,d,a);case 3:e:{if(fg(i),r===null)throw Error(t(387));h=i.pendingProps,p=i.memoizedState,d=p.element,Cm(r,i),Iu(i,h,null,a);var w=i.memoizedState;if(h=w.element,p.isDehydrated)if(p={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=Eo(Error(t(423)),i),i=pg(r,i,h,a,d);break e}else if(h!==d){d=Eo(Error(t(424)),i),i=pg(r,i,h,a,d);break e}else for(cn=ls(i.stateNode.containerInfo.firstChild),un=i,et=!0,kn=null,a=Am(i,null,h,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(go(),h===d){i=Or(r,i,a);break e}Wt(r,i,h,a)}i=i.child}return i;case 5:return Nm(i),r===null&&Fh(i),h=i.type,d=i.pendingProps,p=r!==null?r.memoizedProps:null,w=d.children,Ph(h,d)?w=null:p!==null&&Ph(h,p)&&(i.flags|=32),hg(r,i),Wt(r,i,w,a),i.child;case 6:return r===null&&Fh(i),null;case 13:return mg(r,i,a);case 4:return Kh(i,i.stateNode.containerInfo),h=i.pendingProps,r===null?i.child=yo(i,null,h,a):Wt(r,i,h,a),i.child;case 11:return h=i.type,d=i.pendingProps,d=i.elementType===h?d:Pn(h,d),ag(r,i,h,d,a);case 7:return Wt(r,i,i.pendingProps,a),i.child;case 8:return Wt(r,i,i.pendingProps.children,a),i.child;case 12:return Wt(r,i,i.pendingProps.children,a),i.child;case 10:e:{if(h=i.type._context,d=i.pendingProps,p=i.memoizedProps,w=d.value,Ge(wu,h._currentValue),h._currentValue=w,p!==null)if(Cn(p.value,w)){if(p.children===d.children&&!Kt.current){i=Or(r,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var S=p.dependencies;if(S!==null){w=p.child;for(var k=S.firstContext;k!==null;){if(k.context===h){if(p.tag===1){k=Vr(-1,a&-a),k.tag=2;var B=p.updateQueue;if(B!==null){B=B.shared;var J=B.pending;J===null?k.next=k:(k.next=J.next,J.next=k),B.pending=k}}p.lanes|=a,k=p.alternate,k!==null&&(k.lanes|=a),qh(p.return,a,i),S.lanes|=a;break}k=k.next}}else if(p.tag===10)w=p.type===i.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(t(341));w.lanes|=a,S=w.alternate,S!==null&&(S.lanes|=a),qh(w,a,i),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===i){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}Wt(r,i,d.children,a),i=i.child}return i;case 9:return d=i.type,h=i.pendingProps.children,vo(i,a),d=yn(d),h=h(d),i.flags|=1,Wt(r,i,h,a),i.child;case 14:return h=i.type,d=Pn(h,i.pendingProps),d=Pn(h.type,d),lg(r,i,h,d,a);case 15:return ug(r,i,i.type,i.pendingProps,a);case 17:return h=i.type,d=i.pendingProps,d=i.elementType===h?d:Pn(h,d),Du(r,i),i.tag=1,Gt(h)?(r=!0,pu(i)):r=!1,vo(i,a),eg(i,h,d),od(i,h,d,a),cd(null,i,h,!0,r,a);case 19:return yg(r,i,a);case 22:return cg(r,i,a)}throw Error(t(156,i.tag))};function zg(r,i){return da(r,i)}function $E(r,i,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(r,i,a,h){return new $E(r,i,a,h)}function Pd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function qE(r){if(typeof r=="function")return Pd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===O)return 11;if(r===Ke)return 14}return 2}function vs(r,i){var a=r.alternate;return a===null?(a=wn(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function $u(r,i,a,h,d,p){var w=2;if(h=r,typeof r=="function")Pd(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case P:return vi(a.children,d,p,i);case x:w=8,d|=8;break;case R:return r=wn(12,a,i,d|2),r.elementType=R,r.lanes=p,r;case A:return r=wn(13,a,i,d),r.elementType=A,r.lanes=p,r;case qe:return r=wn(19,a,i,d),r.elementType=qe,r.lanes=p,r;case re:return qu(a,d,p,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case D:w=10;break e;case N:w=9;break e;case O:w=11;break e;case Ke:w=14;break e;case $:w=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return i=wn(w,a,i,d),i.elementType=r,i.type=h,i.lanes=p,i}function vi(r,i,a,h){return r=wn(7,r,h,i),r.lanes=a,r}function qu(r,i,a,h){return r=wn(22,r,h,i),r.elementType=re,r.lanes=a,r.stateNode={isHidden:!1},r}function Nd(r,i,a){return r=wn(6,r,null,i),r.lanes=a,r}function Dd(r,i,a){return i=wn(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function WE(r,i,a,h,d){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ya(0),this.expirationTimes=ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ya(0),this.identifierPrefix=h,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function bd(r,i,a,h,d,p,w,S,k){return r=new WE(r,i,a,S,k),i===1?(i=1,p===!0&&(i|=8)):i=0,p=wn(3,null,null,i),r.current=p,p.stateNode=r,p.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hh(p),r}function HE(r,i,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:h==null?null:""+h,children:r,containerInfo:i,implementation:a}}function Bg(r){if(!r)return cs;r=r._reactInternals;e:{if(An(r)!==r||r.tag!==1)throw Error(t(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Gt(a))return gm(r,a,i)}return i}function $g(r,i,a,h,d,p,w,S,k){return r=bd(a,h,!0,r,d,p,w,S,k),r.context=Bg(null),a=r.current,h=Ht(),d=ys(a),p=Vr(h,d),p.callback=i??null,fs(a,p,d),r.current.lanes=d,ri(r,d,h),Jt(r,h),r}function Wu(r,i,a,h){var d=i.current,p=Ht(),w=ys(d);return a=Bg(a),i.context===null?i.context=a:i.pendingContext=a,i=Vr(p,w),i.payload={element:r},h=h===void 0?null:h,h!==null&&(i.callback=h),r=fs(d,i,w),r!==null&&(bn(r,d,w,p),Tu(r,d,w)),w}function Hu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function qg(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function Vd(r,i){qg(r,i),(r=r.alternate)&&qg(r,i)}function KE(){return null}var Wg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Od(r){this._internalRoot=r}Ku.prototype.render=Od.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(t(409));Wu(r,i,null,null)},Ku.prototype.unmount=Od.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;gi(function(){Wu(null,r,null,null)}),i[kr]=null}};function Ku(r){this._internalRoot=r}Ku.prototype.unstable_scheduleHydration=function(r){if(r){var i=Ea();r={blockedOn:null,target:r,priority:i};for(var a=0;a<sn.length&&i!==0&&i<sn[a].priority;a++);sn.splice(a,0,r),a===0&&Yi(r)}};function Ld(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Gu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Hg(){}function GE(r,i,a,h,d){if(d){if(typeof h=="function"){var p=h;h=function(){var B=Hu(w);p.call(B)}}var w=$g(i,h,r,0,null,!1,!1,"",Hg);return r._reactRootContainer=w,r[kr]=w.current,ba(r.nodeType===8?r.parentNode:r),gi(),w}for(;d=r.lastChild;)r.removeChild(d);if(typeof h=="function"){var S=h;h=function(){var B=Hu(k);S.call(B)}}var k=bd(r,0,!1,null,null,!1,!1,"",Hg);return r._reactRootContainer=k,r[kr]=k.current,ba(r.nodeType===8?r.parentNode:r),gi(function(){Wu(i,k,a,h)}),k}function Qu(r,i,a,h,d){var p=a._reactRootContainer;if(p){var w=p;if(typeof d=="function"){var S=d;d=function(){var k=Hu(w);S.call(k)}}Wu(i,w,r,d)}else w=GE(a,i,r,d,h);return Hu(w)}va=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ue(i.pendingLanes);a!==0&&(_a(i,a|1),Jt(i,Ye()),(je&6)===0&&(xo=Ye()+500,hs()))}break;case 13:gi(function(){var h=br(r,1);if(h!==null){var d=Ht();bn(h,r,1,d)}}),Vd(r,1)}},Gi=function(r){if(r.tag===13){var i=br(r,134217728);if(i!==null){var a=Ht();bn(i,r,134217728,a)}Vd(r,134217728)}},wa=function(r){if(r.tag===13){var i=ys(r),a=br(r,i);if(a!==null){var h=Ht();bn(a,r,i,h)}Vd(r,i)}},Ea=function(){return Oe},Ta=function(r,i){var a=Oe;try{return Oe=r,i()}finally{Oe=a}},vr=function(r,i,a){switch(i){case"input":if(Ks(r,a),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var h=a[i];if(h!==r&&h.form===r.form){var d=du(h);if(!d)throw Error(t(90));ra(h),Ks(h,d)}}}break;case"textarea":Ml(r,a);break;case"select":i=a.value,i!=null&&xn(r,!!a.multiple,i,!1)}},Ul=Rd,zl=gi;var QE={usingClientEntryPoint:!1,Events:[La,co,du,Jr,Xr,Rd]},Ya={findFiberByHostInstance:li,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},YE={bundleType:Ya.bundleType,version:Ya.version,rendererPackageName:Ya.rendererPackageName,rendererConfig:Ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:he.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Gl(r),r===null?null:r.stateNode},findFiberByHostInstance:Ya.findFiberByHostInstance||KE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yu.isDisabled&&Yu.supportsFiber)try{Zs=Yu.inject(YE),nn=Yu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QE,Xt.createPortal=function(r,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ld(i))throw Error(t(200));return HE(r,i,null,a)},Xt.createRoot=function(r,i){if(!Ld(r))throw Error(t(299));var a=!1,h="",d=Wg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=bd(r,1,!1,null,null,a,!1,h,d),r[kr]=i.current,ba(r.nodeType===8?r.parentNode:r),new Od(i)},Xt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Gl(i),r=r===null?null:r.stateNode,r},Xt.flushSync=function(r){return gi(r)},Xt.hydrate=function(r,i,a){if(!Gu(i))throw Error(t(200));return Qu(null,r,i,!0,a)},Xt.hydrateRoot=function(r,i,a){if(!Ld(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,d=!1,p="",w=Wg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=$g(i,null,r,1,a??null,d,!1,p,w),r[kr]=i.current,ba(r),h)for(r=0;r<h.length;r++)a=h[r],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Ku(i)},Xt.render=function(r,i,a){if(!Gu(i))throw Error(t(200));return Qu(null,r,i,!1,a)},Xt.unmountComponentAtNode=function(r){if(!Gu(r))throw Error(t(40));return r._reactRootContainer?(gi(function(){Qu(null,null,r,!1,function(){r._reactRootContainer=null,r[kr]=null})}),!0):!1},Xt.unstable_batchedUpdates=Rd,Xt.unstable_renderSubtreeIntoContainer=function(r,i,a,h){if(!Gu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Qu(r,i,a,!1,h)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var ey;function J_(){if(ey)return Fd.exports;ey=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Fd.exports=aT(),Fd.exports}var ty;function lT(){if(ty)return Ju;ty=1;var n=J_();return Ju.createRoot=n.createRoot,Ju.hydrateRoot=n.hydrateRoot,Ju}var uT=lT();J_();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dl(){return dl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},dl.apply(this,arguments)}var Rs;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Rs||(Rs={}));const ny="popstate";function cT(n){n===void 0&&(n={});function e(s,o){let{pathname:l,search:c,hash:f}=s.location;return rf("",{pathname:l,search:c,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:mc(o)}return dT(e,t,null,n)}function ht(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Lf(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hT(){return Math.random().toString(36).substr(2,8)}function ry(n,e){return{usr:n.state,key:n.key,idx:e}}function rf(n,e,t,s){return t===void 0&&(t=null),dl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Wo(e):e,{state:t,key:e&&e.key||s||hT()})}function mc(n){let{pathname:e="/",search:t="",hash:s=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Wo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substr(s),n=n.substr(0,s)),n&&(e.pathname=n)}return e}function dT(n,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,c=o.history,f=Rs.Pop,g=null,y=E();y==null&&(y=0,c.replaceState(dl({},c.state,{idx:y}),""));function E(){return(c.state||{idx:null}).idx}function I(){f=Rs.Pop;let M=E(),Z=M==null?null:M-y;y=M,g&&g({action:f,location:z.location,delta:Z})}function C(M,Z){f=Rs.Push;let se=rf(z.location,M,Z);y=E()+1;let ae=ry(se,y),he=z.createHref(se);try{c.pushState(ae,"",he)}catch(Te){if(Te instanceof DOMException&&Te.name==="DataCloneError")throw Te;o.location.assign(he)}l&&g&&g({action:f,location:z.location,delta:1})}function V(M,Z){f=Rs.Replace;let se=rf(z.location,M,Z);y=E();let ae=ry(se,y),he=z.createHref(se);c.replaceState(ae,"",he),l&&g&&g({action:f,location:z.location,delta:0})}function W(M){let Z=o.location.origin!=="null"?o.location.origin:o.location.href,se=typeof M=="string"?M:mc(M);return se=se.replace(/ $/,"%20"),ht(Z,"No window.location.(origin|href) available to create URL for href: "+se),new URL(se,Z)}let z={get action(){return f},get location(){return n(o,c)},listen(M){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(ny,I),g=M,()=>{o.removeEventListener(ny,I),g=null}},createHref(M){return e(o,M)},createURL:W,encodeLocation(M){let Z=W(M);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:C,replace:V,go(M){return c.go(M)}};return z}var sy;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(sy||(sy={}));function fT(n,e,t){return t===void 0&&(t="/"),pT(n,e,t)}function pT(n,e,t,s){let o=typeof e=="string"?Wo(e):e,l=Mf(o.pathname||"/",t);if(l==null)return null;let c=X_(n);mT(c);let f=null;for(let g=0;f==null&&g<c.length;++g){let y=RT(l);f=xT(c[g],y)}return f}function X_(n,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let o=(l,c,f)=>{let g={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};g.relativePath.startsWith("/")&&(ht(g.relativePath.startsWith(s),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(s.length));let y=ks([s,g.relativePath]),E=t.concat(g);l.children&&l.children.length>0&&(ht(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),X_(l.children,e,E,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:TT(y,l.index),routesMeta:E})};return n.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,c);else for(let g of Z_(l.path))o(l,c,g)}),e}function Z_(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let c=Z_(s.join("/")),f=[];return f.push(...c.map(g=>g===""?l:[l,g].join("/"))),o&&f.push(...c),f.map(g=>n.startsWith("/")&&g===""?"/":g)}function mT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:IT(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const gT=/^:[\w-]+$/,yT=3,_T=2,vT=1,wT=10,ET=-2,iy=n=>n==="*";function TT(n,e){let t=n.split("/"),s=t.length;return t.some(iy)&&(s+=ET),e&&(s+=_T),t.filter(o=>!iy(o)).reduce((o,l)=>o+(gT.test(l)?yT:l===""?vT:wT),s)}function IT(n,e){return n.length===e.length&&n.slice(0,-1).every((s,o)=>s===e[o])?n[n.length-1]-e[e.length-1]:0}function xT(n,e,t){let{routesMeta:s}=n,o={},l="/",c=[];for(let f=0;f<s.length;++f){let g=s[f],y=f===s.length-1,E=l==="/"?e:e.slice(l.length)||"/",I=ST({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},E),C=g.route;if(!I)return null;Object.assign(o,I.params),c.push({params:o,pathname:ks([l,I.pathname]),pathnameBase:DT(ks([l,I.pathnameBase])),route:C}),I.pathnameBase!=="/"&&(l=ks([l,I.pathnameBase]))}return c}function ST(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=AT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((y,E,I)=>{let{paramName:C,isOptional:V}=E;if(C==="*"){let z=f[I]||"";c=l.slice(0,l.length-z.length).replace(/(.)\/+$/,"$1")}const W=f[I];return V&&!W?y[C]=void 0:y[C]=(W||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function AT(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Lf(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let s=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,g)=>(s.push({paramName:f,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function RT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Lf(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Mf(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}const CT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kT=n=>CT.test(n);function PT(n,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof n=="string"?Wo(n):n,l;if(t)if(kT(t))l=t;else{if(t.includes("//")){let c=t;t=t.replace(/\/\/+/g,"/"),Lf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+t))}t.startsWith("/")?l=oy(t.substring(1),"/"):l=oy(t,e)}else l=e;return{pathname:l,search:bT(s),hash:VT(o)}}function oy(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Bd(n,e,t,s){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function NT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function jf(n,e){let t=NT(n);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function Ff(n,e,t,s){s===void 0&&(s=!1);let o;typeof n=="string"?o=Wo(n):(o=dl({},n),ht(!o.pathname||!o.pathname.includes("?"),Bd("?","pathname","search",o)),ht(!o.pathname||!o.pathname.includes("#"),Bd("#","pathname","hash",o)),ht(!o.search||!o.search.includes("#"),Bd("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,f;if(c==null)f=t;else{let I=e.length-1;if(!s&&c.startsWith("..")){let C=c.split("/");for(;C[0]==="..";)C.shift(),I-=1;o.pathname=C.join("/")}f=I>=0?e[I]:"/"}let g=PT(o,f),y=c&&c!=="/"&&c.endsWith("/"),E=(l||c===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(y||E)&&(g.pathname+="/"),g}const ks=n=>n.join("/").replace(/\/\/+/g,"/"),DT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),bT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,VT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function OT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const ev=["post","put","patch","delete"];new Set(ev);const LT=["get",...ev];new Set(LT);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},fl.apply(this,arguments)}const Uf=Q.createContext(null),MT=Q.createContext(null),$s=Q.createContext(null),Fc=Q.createContext(null),qr=Q.createContext({outlet:null,matches:[],isDataRoute:!1}),tv=Q.createContext(null);function jT(n,e){let{relative:t}=e===void 0?{}:e;Ho()||ht(!1);let{basename:s,navigator:o}=Q.useContext($s),{hash:l,pathname:c,search:f}=rv(n,{relative:t}),g=c;return s!=="/"&&(g=c==="/"?s:ks([s,c])),o.createHref({pathname:g,search:f,hash:l})}function Ho(){return Q.useContext(Fc)!=null}function Ko(){return Ho()||ht(!1),Q.useContext(Fc).location}function nv(n){Q.useContext($s).static||Q.useLayoutEffect(n)}function Go(){let{isDataRoute:n}=Q.useContext(qr);return n?XT():FT()}function FT(){Ho()||ht(!1);let n=Q.useContext(Uf),{basename:e,future:t,navigator:s}=Q.useContext($s),{matches:o}=Q.useContext(qr),{pathname:l}=Ko(),c=JSON.stringify(jf(o,t.v7_relativeSplatPath)),f=Q.useRef(!1);return nv(()=>{f.current=!0}),Q.useCallback(function(y,E){if(E===void 0&&(E={}),!f.current)return;if(typeof y=="number"){s.go(y);return}let I=Ff(y,JSON.parse(c),l,E.relative==="path");n==null&&e!=="/"&&(I.pathname=I.pathname==="/"?e:ks([e,I.pathname])),(E.replace?s.replace:s.push)(I,E.state,E)},[e,s,c,l,n])}function UT(){let{matches:n}=Q.useContext(qr),e=n[n.length-1];return e?e.params:{}}function rv(n,e){let{relative:t}=e===void 0?{}:e,{future:s}=Q.useContext($s),{matches:o}=Q.useContext(qr),{pathname:l}=Ko(),c=JSON.stringify(jf(o,s.v7_relativeSplatPath));return Q.useMemo(()=>Ff(n,JSON.parse(c),l,t==="path"),[n,c,l,t])}function zT(n,e){return BT(n,e)}function BT(n,e,t,s){Ho()||ht(!1);let{navigator:o}=Q.useContext($s),{matches:l}=Q.useContext(qr),c=l[l.length-1],f=c?c.params:{};c&&c.pathname;let g=c?c.pathnameBase:"/";c&&c.route;let y=Ko(),E;if(e){var I;let M=typeof e=="string"?Wo(e):e;g==="/"||(I=M.pathname)!=null&&I.startsWith(g)||ht(!1),E=M}else E=y;let C=E.pathname||"/",V=C;if(g!=="/"){let M=g.replace(/^\//,"").split("/");V="/"+C.replace(/^\//,"").split("/").slice(M.length).join("/")}let W=fT(n,{pathname:V}),z=KT(W&&W.map(M=>Object.assign({},M,{params:Object.assign({},f,M.params),pathname:ks([g,o.encodeLocation?o.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?g:ks([g,o.encodeLocation?o.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),l,t,s);return e&&z?Q.createElement(Fc.Provider,{value:{location:fl({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:Rs.Pop}},z):z}function $T(){let n=JT(),e=OT(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),t?Q.createElement("pre",{style:o},t):null,null)}const qT=Q.createElement($T,null);class WT extends Q.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Q.createElement(qr.Provider,{value:this.props.routeContext},Q.createElement(tv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function HT(n){let{routeContext:e,match:t,children:s}=n,o=Q.useContext(Uf);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Q.createElement(qr.Provider,{value:e},s)}function KT(n,e,t,s){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let c=n,f=(o=t)==null?void 0:o.errors;if(f!=null){let E=c.findIndex(I=>I.route.id&&(f==null?void 0:f[I.route.id])!==void 0);E>=0||ht(!1),c=c.slice(0,Math.min(c.length,E+1))}let g=!1,y=-1;if(t&&s&&s.v7_partialHydration)for(let E=0;E<c.length;E++){let I=c[E];if((I.route.HydrateFallback||I.route.hydrateFallbackElement)&&(y=E),I.route.id){let{loaderData:C,errors:V}=t,W=I.route.loader&&C[I.route.id]===void 0&&(!V||V[I.route.id]===void 0);if(I.route.lazy||W){g=!0,y>=0?c=c.slice(0,y+1):c=[c[0]];break}}}return c.reduceRight((E,I,C)=>{let V,W=!1,z=null,M=null;t&&(V=f&&I.route.id?f[I.route.id]:void 0,z=I.route.errorElement||qT,g&&(y<0&&C===0?(ZT("route-fallback"),W=!0,M=null):y===C&&(W=!0,M=I.route.hydrateFallbackElement||null)));let Z=e.concat(c.slice(0,C+1)),se=()=>{let ae;return V?ae=z:W?ae=M:I.route.Component?ae=Q.createElement(I.route.Component,null):I.route.element?ae=I.route.element:ae=E,Q.createElement(HT,{match:I,routeContext:{outlet:E,matches:Z,isDataRoute:t!=null},children:ae})};return t&&(I.route.ErrorBoundary||I.route.errorElement||C===0)?Q.createElement(WT,{location:t.location,revalidation:t.revalidation,component:z,error:V,children:se(),routeContext:{outlet:null,matches:Z,isDataRoute:!0}}):se()},null)}var sv=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(sv||{}),iv=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(iv||{});function GT(n){let e=Q.useContext(Uf);return e||ht(!1),e}function QT(n){let e=Q.useContext(MT);return e||ht(!1),e}function YT(n){let e=Q.useContext(qr);return e||ht(!1),e}function ov(n){let e=YT(),t=e.matches[e.matches.length-1];return t.route.id||ht(!1),t.route.id}function JT(){var n;let e=Q.useContext(tv),t=QT(),s=ov();return e!==void 0?e:(n=t.errors)==null?void 0:n[s]}function XT(){let{router:n}=GT(sv.UseNavigateStable),e=ov(iv.UseNavigateStable),t=Q.useRef(!1);return nv(()=>{t.current=!0}),Q.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,fl({fromRouteId:e},l)))},[n,e])}const ay={};function ZT(n,e,t){ay[n]||(ay[n]=!0)}function eI(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function gc(n){let{to:e,replace:t,state:s,relative:o}=n;Ho()||ht(!1);let{future:l,static:c}=Q.useContext($s),{matches:f}=Q.useContext(qr),{pathname:g}=Ko(),y=Go(),E=Ff(e,jf(f,l.v7_relativeSplatPath),g,o==="path"),I=JSON.stringify(E);return Q.useEffect(()=>y(JSON.parse(I),{replace:t,state:s,relative:o}),[y,I,o,t,s]),null}function Ts(n){ht(!1)}function tI(n){let{basename:e="/",children:t=null,location:s,navigationType:o=Rs.Pop,navigator:l,static:c=!1,future:f}=n;Ho()&&ht(!1);let g=e.replace(/^\/*/,"/"),y=Q.useMemo(()=>({basename:g,navigator:l,static:c,future:fl({v7_relativeSplatPath:!1},f)}),[g,f,l,c]);typeof s=="string"&&(s=Wo(s));let{pathname:E="/",search:I="",hash:C="",state:V=null,key:W="default"}=s,z=Q.useMemo(()=>{let M=Mf(E,g);return M==null?null:{location:{pathname:M,search:I,hash:C,state:V,key:W},navigationType:o}},[g,E,I,C,V,W,o]);return z==null?null:Q.createElement($s.Provider,{value:y},Q.createElement(Fc.Provider,{children:t,value:z}))}function nI(n){let{children:e,location:t}=n;return zT(sf(e),t)}new Promise(()=>{});function sf(n,e){e===void 0&&(e=[]);let t=[];return Q.Children.forEach(n,(s,o)=>{if(!Q.isValidElement(s))return;let l=[...e,o];if(s.type===Q.Fragment){t.push.apply(t,sf(s.props.children,l));return}s.type!==Ts&&ht(!1),!s.props.index||!s.props.children||ht(!1);let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=sf(s.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function of(){return of=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},of.apply(this,arguments)}function rI(n,e){if(n==null)return{};var t={},s=Object.keys(n),o,l;for(l=0;l<s.length;l++)o=s[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function sI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function iI(n,e){return n.button===0&&(!e||e==="_self")&&!sI(n)}const oI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],aI="6";try{window.__reactRouterVersion=aI}catch{}const lI="startTransition",ly=sT[lI];function uI(n){let{basename:e,children:t,future:s,window:o}=n,l=Q.useRef();l.current==null&&(l.current=cT({window:o,v5Compat:!0}));let c=l.current,[f,g]=Q.useState({action:c.action,location:c.location}),{v7_startTransition:y}=s||{},E=Q.useCallback(I=>{y&&ly?ly(()=>g(I)):g(I)},[g,y]);return Q.useLayoutEffect(()=>c.listen(E),[c,E]),Q.useEffect(()=>eI(s),[s]),Q.createElement(tI,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:c,future:s})}const cI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,or=Q.forwardRef(function(e,t){let{onClick:s,relative:o,reloadDocument:l,replace:c,state:f,target:g,to:y,preventScrollReset:E,viewTransition:I}=e,C=rI(e,oI),{basename:V}=Q.useContext($s),W,z=!1;if(typeof y=="string"&&hI.test(y)&&(W=y,cI))try{let ae=new URL(window.location.href),he=y.startsWith("//")?new URL(ae.protocol+y):new URL(y),Te=Mf(he.pathname,V);he.origin===ae.origin&&Te!=null?y=Te+he.search+he.hash:z=!0}catch{}let M=jT(y,{relative:o}),Z=dI(y,{replace:c,state:f,target:g,preventScrollReset:E,relative:o,viewTransition:I});function se(ae){s&&s(ae),ae.defaultPrevented||Z(ae)}return Q.createElement("a",of({},C,{href:W||M,onClick:z||l?s:se,ref:t,target:g}))});var uy;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(uy||(uy={}));var cy;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(cy||(cy={}));function dI(n,e){let{target:t,replace:s,state:o,preventScrollReset:l,relative:c,viewTransition:f}=e===void 0?{}:e,g=Go(),y=Ko(),E=rv(n,{relative:c});return Q.useCallback(I=>{if(iI(I,t)){I.preventDefault();let C=s!==void 0?s:mc(y)===mc(E);g(n,{replace:C,state:o,preventScrollReset:l,relative:c,viewTransition:f})}},[y,g,E,s,o,t,n,l,c,f])}const fI=()=>{};var hy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},pI=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const o=n[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],f=n[t++],g=((o&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},lv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,f=c?n[o+1]:0,g=o+2<n.length,y=g?n[o+2]:0,E=l>>2,I=(l&3)<<4|f>>4;let C=(f&15)<<2|y>>6,V=y&63;g||(V=64,c||(C=64)),s.push(t[E],t[I],t[C],t[V])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(av(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):pI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const I=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||I==null)throw new mI;const C=l<<2|f>>4;if(s.push(C),y!==64){const V=f<<4&240|y>>2;if(s.push(V),I!==64){const W=y<<6&192|I;s.push(W)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gI=function(n){const e=av(n);return lv.encodeByteArray(e,!0)},yc=function(n){return gI(n).replace(/\./g,"")},uv=function(n){try{return lv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=()=>yI().__FIREBASE_DEFAULTS__,vI=()=>{if(typeof process>"u"||typeof hy>"u")return;const n=hy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&uv(n[1]);return e&&JSON.parse(e)},Uc=()=>{try{return fI()||_I()||vI()||wI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},cv=n=>{var e,t;return(t=(e=Uc())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},hv=n=>{const e=cv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},dv=()=>{var n;return(n=Uc())==null?void 0:n.config},fv=n=>{var e;return(e=Uc())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[yc(JSON.stringify(t)),yc(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function TI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function II(){var e;const n=(e=Uc())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function AI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RI(){const n=$t();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function CI(){return!II()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kI(){try{return typeof indexedDB=="object"}catch{return!1}}function PI(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="FirebaseError";class yr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=NI,Object.setPrototypeOf(this,yr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sl.prototype.create)}}class Sl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?DI(l,s):"Error",f=`${this.serviceName}: ${c} (${o}).`;return new yr(o,f,s)}}function DI(n,e){return n.replace(bI,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const bI=/\{\$([^}]+)}/g;function VI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ii(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=n[o],c=e[o];if(dy(l)&&dy(c)){if(!Ii(l,c))return!1}else if(l!==c)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function dy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function tl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function nl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function OI(n,e){const t=new LI(n,e);return t.subscribe.bind(t)}class LI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");MI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=$d),o.error===void 0&&(o.error=$d),o.complete===void 0&&(o.complete=$d);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function $d(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zf(n){return(await fetch(n,{credentials:"include"})).ok}class Ls{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new EI;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UI(e))try{this.getOrInitializeService({instanceIdentifier:wi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wi){return this.instances.has(e)}getOptions(e=wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&c.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:FI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=wi){return this.component?this.component.multipleInstances?e:wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FI(n){return n===wi?void 0:n}function UI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(De||(De={}));const BI={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},$I=De.INFO,qI={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},WI=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),o=qI[e];if(o)console[o](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bf{constructor(e){this.name=e,this._logLevel=$I,this._logHandler=WI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const HI=(n,e)=>e.some(t=>n instanceof t);let fy,py;function KI(){return fy||(fy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GI(){return py||(py=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mv=new WeakMap,af=new WeakMap,gv=new WeakMap,qd=new WeakMap,$f=new WeakMap;function QI(n){const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Ps(n.result)),o()},c=()=>{s(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&mv.set(t,n)}).catch(()=>{}),$f.set(e,n),e}function YI(n){if(af.has(n))return;const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});af.set(n,e)}let lf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return af.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ps(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function JI(n){lf=n(lf)}function XI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Wd(this),e,...t);return gv.set(s,e.sort?e.sort():[e]),Ps(s)}:GI().includes(n)?function(...e){return n.apply(Wd(this),e),Ps(mv.get(this))}:function(...e){return Ps(n.apply(Wd(this),e))}}function ZI(n){return typeof n=="function"?XI(n):(n instanceof IDBTransaction&&YI(n),HI(n,KI())?new Proxy(n,lf):n)}function Ps(n){if(n instanceof IDBRequest)return QI(n);if(qd.has(n))return qd.get(n);const e=ZI(n);return e!==n&&(qd.set(n,e),$f.set(e,n)),e}const Wd=n=>$f.get(n);function ex(n,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),f=Ps(c);return s&&c.addEventListener("upgradeneeded",g=>{s(Ps(c.result),g.oldVersion,g.newVersion,Ps(c.transaction),g)}),t&&c.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const tx=["get","getKey","getAll","getAllKeys","count"],nx=["put","add","delete","clear"],Hd=new Map;function my(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Hd.get(e))return Hd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=nx.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||tx.includes(t)))return;const l=async function(c,...f){const g=this.transaction(c,o?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&g.done]))[0]};return Hd.set(e,l),l}JI(n=>({...n,get:(e,t,s)=>my(e,t)||n.get(e,t,s),has:(e,t)=>!!my(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sx(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function sx(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uf="@firebase/app",gy="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Bf("@firebase/app"),ix="@firebase/app-compat",ox="@firebase/analytics-compat",ax="@firebase/analytics",lx="@firebase/app-check-compat",ux="@firebase/app-check",cx="@firebase/auth",hx="@firebase/auth-compat",dx="@firebase/database",fx="@firebase/data-connect",px="@firebase/database-compat",mx="@firebase/functions",gx="@firebase/functions-compat",yx="@firebase/installations",_x="@firebase/installations-compat",vx="@firebase/messaging",wx="@firebase/messaging-compat",Ex="@firebase/performance",Tx="@firebase/performance-compat",Ix="@firebase/remote-config",xx="@firebase/remote-config-compat",Sx="@firebase/storage",Ax="@firebase/storage-compat",Rx="@firebase/firestore",Cx="@firebase/ai",kx="@firebase/firestore-compat",Px="firebase",Nx="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="[DEFAULT]",Dx={[uf]:"fire-core",[ix]:"fire-core-compat",[ax]:"fire-analytics",[ox]:"fire-analytics-compat",[ux]:"fire-app-check",[lx]:"fire-app-check-compat",[cx]:"fire-auth",[hx]:"fire-auth-compat",[dx]:"fire-rtdb",[fx]:"fire-data-connect",[px]:"fire-rtdb-compat",[mx]:"fire-fn",[gx]:"fire-fn-compat",[yx]:"fire-iid",[_x]:"fire-iid-compat",[vx]:"fire-fcm",[wx]:"fire-fcm-compat",[Ex]:"fire-perf",[Tx]:"fire-perf-compat",[Ix]:"fire-rc",[xx]:"fire-rc-compat",[Sx]:"fire-gcs",[Ax]:"fire-gcs-compat",[Rx]:"fire-fst",[kx]:"fire-fst-compat",[Cx]:"fire-vertex","fire-js":"fire-js",[Px]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new Map,bx=new Map,hf=new Map;function yy(n,e){try{n.container.addComponent(e)}catch(t){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xi(n){const e=n.name;if(hf.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;hf.set(e,n);for(const t of _c.values())yy(t,n);for(const t of bx.values())yy(t,n);return!0}function zc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Tn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ns=new Sl("app","Firebase",Vx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ns.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=Nx;function yv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:cf,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Ns.create("bad-app-name",{appName:String(o)});if(t||(t=dv()),!t)throw Ns.create("no-options");const l=_c.get(o);if(l){if(Ii(t,l.options)&&Ii(s,l.config))return l;throw Ns.create("duplicate-app",{appName:o})}const c=new zI(o);for(const g of hf.values())c.addComponent(g);const f=new Ox(t,s,c);return _c.set(o,f),f}function qf(n=cf){const e=_c.get(n);if(!e&&n===cf&&dv())return yv();if(!e)throw Ns.create("no-app",{appName:n});return e}function ar(n,e,t){let s=Dx[n]??n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(c.join(" "));return}xi(new Ls(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx="firebase-heartbeat-database",Mx=1,pl="firebase-heartbeat-store";let Kd=null;function _v(){return Kd||(Kd=ex(Lx,Mx,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(pl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ns.create("idb-open",{originalErrorMessage:n.message})})),Kd}async function jx(n){try{const t=(await _v()).transaction(pl),s=await t.objectStore(pl).get(vv(n));return await t.done,s}catch(e){if(e instanceof yr)Ur.warn(e.message);else{const t=Ns.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ur.warn(t.message)}}}async function _y(n,e){try{const s=(await _v()).transaction(pl,"readwrite");await s.objectStore(pl).put(e,vv(n)),await s.done}catch(t){if(t instanceof yr)Ur.warn(t.message);else{const s=Ns.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ur.warn(s.message)}}}function vv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx=1024,Ux=30;class zx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $x(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=vy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>Ux){const c=qx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ur.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vy(),{heartbeatsToSend:s,unsentEntries:o}=Bx(this._heartbeatsCache.heartbeats),l=yc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ur.warn(t),""}}}function vy(){return new Date().toISOString().substring(0,10)}function Bx(n,e=Fx){const t=[];let s=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),wy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),wy(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class $x{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kI()?PI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await jx(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return _y(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return _y(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wy(n){return yc(JSON.stringify({version:2,heartbeats:n})).length}function qx(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(n){xi(new Ls("platform-logger",e=>new rx(e),"PRIVATE")),xi(new Ls("heartbeat",e=>new zx(e),"PRIVATE")),ar(uf,gy,n),ar(uf,gy,"esm2020"),ar("fire-js","")}Wx("");function wv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hx=wv,Ev=new Sl("auth","Firebase",wv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=new Bf("@firebase/auth");function Kx(n,...e){vc.logLevel<=De.WARN&&vc.warn(`Auth (${Ni}): ${n}`,...e)}function ic(n,...e){vc.logLevel<=De.ERROR&&vc.error(`Auth (${Ni}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(n,...e){throw Wf(n,...e)}function lr(n,...e){return Wf(n,...e)}function Tv(n,e,t){const s={...Hx(),[e]:t};return new Sl("auth","Firebase",s).create(e,{appName:n.name})}function Ds(n){return Tv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wf(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Ev.create(n,...e)}function ve(n,e,...t){if(!n)throw Wf(e,...t)}function Mr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ic(e),new Error(e)}function zr(n,e){n||Mr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Gx(){return Ey()==="http:"||Ey()==="https:"}function Ey(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gx()||SI()||"connection"in navigator)?navigator.onLine:!0}function Yx(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t){this.shortDelay=e,this.longDelay=t,zr(t>e,"Short delay should be less than long delay!"),this.isMobile=TI()||AI()}get(){return Qx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(n,e){zr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Zx=new Rl(3e4,6e4);function Di(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function qs(n,e,t,s,o={}){return xv(n,o,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const f=Al({key:n.config.apiKey,...c}).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const y={method:e,headers:g,...l};return xI()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&Qo(n.emulatorConfig.host)&&(y.credentials="include"),Iv.fetch()(await Sv(n,n.config.apiHost,t,f),y)})}async function xv(n,e,t){n._canInitEmulator=!1;const s={...Jx,...e};try{const o=new tS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Xu(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[g,y]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xu(n,"credential-already-in-use",c);if(g==="EMAIL_EXISTS")throw Xu(n,"email-already-in-use",c);if(g==="USER_DISABLED")throw Xu(n,"user-disabled",c);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Tv(n,E,y);jn(n,E)}}catch(o){if(o instanceof yr)throw o;jn(n,"network-request-failed",{message:String(o)})}}async function Bc(n,e,t,s,o={}){const l=await qs(n,e,t,s,o);return"mfaPendingCredential"in l&&jn(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Sv(n,e,t,s){const o=`${e}${t}?${s}`,l=n,c=l.config.emulator?Hf(n.config,o):`${n.config.apiScheme}://${o}`;return Xx.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function eS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(lr(this.auth,"network-request-failed")),Zx.get())})}}function Xu(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=lr(n,e,s);return o.customData._tokenResponse=t,o}function Ty(n){return n!==void 0&&n.enterprise!==void 0}class nS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return eS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rS(n,e){return qs(n,"GET","/v2/recaptchaConfig",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sS(n,e){return qs(n,"POST","/v1/accounts:delete",e)}async function wc(n,e){return qs(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iS(n,e=!1){const t=dt(n),s=await t.getIdToken(e),o=Kf(s);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:al(Gd(o.auth_time)),issuedAtTime:al(Gd(o.iat)),expirationTime:al(Gd(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Gd(n){return Number(n)*1e3}function Kf(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return ic("JWT malformed, contained fewer than 3 sections"),null;try{const o=uv(t);return o?JSON.parse(o):(ic("Failed to decode base64 JWT payload"),null)}catch(o){return ic("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Iy(n){const e=Kf(n);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof yr&&oS(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function oS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=al(this.lastLoginAt),this.creationTime=al(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ec(n){var I;const e=n.auth,t=await n.getIdToken(),s=await ml(n,wc(e,{idToken:t}));ve(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const l=(I=o.providerUserInfo)!=null&&I.length?Av(o.providerUserInfo):[],c=uS(n.providerData,l),f=n.isAnonymous,g=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),y=f?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ff(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,E)}async function lS(n){const e=dt(n);await Ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uS(n,e){return[...n.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Av(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cS(n,e){const t=await xv(n,{},async()=>{const s=Al({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=await Sv(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:s};return n.emulatorConfig&&Qo(n.emulatorConfig.host)&&(g.credentials="include"),Iv.fetch()(c,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hS(n,e){return qs(n,"POST","/v2/accounts:revokeToken",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Iy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=Iy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await cS(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,c=new No;return s&&(ve(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(ve(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new No,this.toJSON())}_performRefresh(){return Mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(n,e){ve(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class On{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new aS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ff(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await ml(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return iS(this,e)}reload(){return lS(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new On({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ec(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(Ds(this.auth));const e=await this.getIdToken();return await ml(this,sS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,f=t.tenantId??void 0,g=t._redirectEventId??void 0,y=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:I,emailVerified:C,isAnonymous:V,providerData:W,stsTokenManager:z}=t;ve(I&&z,e,"internal-error");const M=No.fromJSON(this.name,z);ve(typeof I=="string",e,"internal-error"),Es(s,e.name),Es(o,e.name),ve(typeof C=="boolean",e,"internal-error"),ve(typeof V=="boolean",e,"internal-error"),Es(l,e.name),Es(c,e.name),Es(f,e.name),Es(g,e.name),Es(y,e.name),Es(E,e.name);const Z=new On({uid:I,auth:e,email:o,emailVerified:C,displayName:s,isAnonymous:V,photoURL:c,phoneNumber:l,tenantId:f,stsTokenManager:M,createdAt:y,lastLoginAt:E});return W&&Array.isArray(W)&&(Z.providerData=W.map(se=>({...se}))),g&&(Z._redirectEventId=g),Z}static async _fromIdTokenResponse(e,t,s=!1){const o=new No;o.updateFromServerResponse(t);const l=new On({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Ec(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Av(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new No;f.updateFromIdToken(s);const g=new On({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new ff(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new Map;function jr(n){zr(n instanceof Function,"Expected a class definition");let e=xy.get(n);return e?(zr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,xy.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Rv.type="NONE";const Sy=Rv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(n,e,t){return`firebase:${n}:${e}:${t}`}class Do{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=oc(this.userKey,o.apiKey,l),this.fullPersistenceKey=oc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await wc(this.auth,{idToken:e}).catch(()=>{});return t?On._fromGetAccountInfoResponse(this.auth,t,e):null}return On._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Do(jr(Sy),e,s);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||jr(Sy);const c=oc(s,e.config.apiKey,e.name);let f=null;for(const y of t)try{const E=await y._get(c);if(E){let I;if(typeof E=="string"){const C=await wc(e,{idToken:E}).catch(()=>{});if(!C)break;I=await On._fromGetAccountInfoResponse(e,C,E)}else I=On._fromJSON(e,E);y!==l&&(f=I),l=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Do(l,e,s):(l=g[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new Do(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bv(e))return"Blackberry";if(Vv(e))return"Webos";if(kv(e))return"Safari";if((e.includes("chrome/")||Pv(e))&&!e.includes("edge/"))return"Chrome";if(Dv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Cv(n=$t()){return/firefox\//i.test(n)}function kv(n=$t()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pv(n=$t()){return/crios\//i.test(n)}function Nv(n=$t()){return/iemobile/i.test(n)}function Dv(n=$t()){return/android/i.test(n)}function bv(n=$t()){return/blackberry/i.test(n)}function Vv(n=$t()){return/webos/i.test(n)}function Gf(n=$t()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function dS(n=$t()){var e;return Gf(n)&&!!((e=window.navigator)!=null&&e.standalone)}function fS(){return RI()&&document.documentMode===10}function Ov(n=$t()){return Gf(n)||Dv(n)||Vv(n)||bv(n)||/windows phone/i.test(n)||Nv(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(n,e=[]){let t;switch(n){case"Browser":t=Ay($t());break;case"Worker":t=`${Ay($t())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ni}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,f)=>{try{const g=e(l);c(g)}catch(g){f(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mS(n,e={}){return qs(n,"GET","/v2/passwordPolicy",Di(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=6;class yS{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??gS,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ry(this),this.idTokenSubscription=new Ry(this),this.beforeStateQueue=new pS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ev,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=jr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await Do.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await wc(this,{idToken:e}),s=await On._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(Tn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!c||c===f)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ec(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(Ds(this));const t=e?dt(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(Ds(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(Ds(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mS(this),t=new yS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Sl("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await hS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&jr(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await Do.create(this,[jr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{c=!0,g()}}else{const g=e.addObserver(t);return()=>{c=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Kx(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Yo(n){return dt(n)}class Ry{constructor(e){this.auth=e,this.observer=null,this.addObserver=OI(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $c={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vS(n){$c=n}function Mv(n){return $c.loadJS(n)}function wS(){return $c.recaptchaEnterpriseScript}function ES(){return $c.gapiScript}function TS(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class IS{constructor(){this.enterprise=new xS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class xS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const SS="recaptcha-enterprise",jv="NO_RECAPTCHA";class AS{constructor(e){this.type=SS,this.auth=Yo(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{rS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new nS(g);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(g=>{f(g)})})}function o(l,c,f){const g=window.grecaptcha;Ty(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(jv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new IS().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(f=>{if(!t&&Ty(window.grecaptcha))o(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let g=wS();g.length!==0&&(g+=f),Mv(g).then(()=>{o(f,l,c)}).catch(y=>{c(y)})}}).catch(f=>{c(f)})})}}async function Cy(n,e,t,s=!1,o=!1){const l=new AS(n);let c;if(o)c=jv;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function ky(n,e,t,s,o){var l;if((l=n._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Cy(n,e,t,t==="getOobCode");return s(n,c)}else return s(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Cy(n,e,t,t==="getOobCode");return s(n,f)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(n,e){const t=zc(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ii(l,e??{}))return o;jn(o,"already-initialized")}return t.initialize({options:e})}function CS(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(jr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function kS(n,e,t){const s=Yo(n);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=Fv(e),{host:c,port:f}=PS(e),g=f===null?"":`:${f}`,y={url:`${l}//${c}${g}/`},E=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(Ii(y,s.config.emulator)&&Ii(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Qo(c)?zf(`${l}//${c}${g}`):NS()}function Fv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function PS(n){const e=Fv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Py(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:Py(c)}}}function Py(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function NS(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mr("not implemented")}_getIdTokenResponse(e){return Mr("not implemented")}_linkToIdToken(e,t){return Mr("not implemented")}_getReauthenticationResolver(e){return Mr("not implemented")}}async function DS(n,e){return qs(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bS(n,e){return Bc(n,"POST","/v1/accounts:signInWithPassword",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(n,e){return Bc(n,"POST","/v1/accounts:signInWithEmailLink",Di(n,e))}async function OS(n,e){return Bc(n,"POST","/v1/accounts:signInWithEmailLink",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends Qf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new gl(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new gl(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ky(e,t,"signInWithPassword",bS);case"emailLink":return VS(e,{email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ky(e,s,"signUpPassword",DS);case"emailLink":return OS(e,{idToken:t,email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(n,e){return Bc(n,"POST","/v1/accounts:signInWithIdp",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS="http://localhost";class Si extends Qf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):jn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...l}=t;if(!s||!o)return null;const c=new Si(s,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return bo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,bo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bo(e,t)}buildRequest(){const e={requestUri:LS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Al(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jS(n){const e=tl(nl(n)).link,t=e?tl(nl(e)).deep_link_id:null,s=tl(nl(n)).deep_link_id;return(s?tl(nl(s)).link:null)||s||t||e||n}class Yf{constructor(e){const t=tl(nl(e)),s=t.apiKey??null,o=t.oobCode??null,l=MS(t.mode??null);ve(s&&o&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=jS(e);try{return new Yf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this.providerId=Jo.PROVIDER_ID}static credential(e,t){return gl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Yf.parseLink(t);return ve(s,"argument-error"),gl._fromEmailAndCode(e,s.code,s.tenantId)}}Jo.PROVIDER_ID="password";Jo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends Uv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends Cl{constructor(){super("facebook.com")}static credential(e){return Si._fromParams({providerId:Is.PROVIDER_ID,signInMethod:Is.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Is.credentialFromTaggedObject(e)}static credentialFromError(e){return Is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Is.credential(e.oauthAccessToken)}catch{return null}}}Is.FACEBOOK_SIGN_IN_METHOD="facebook.com";Is.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends Cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Si._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xs.credentialFromTaggedObject(e)}static credentialFromError(e){return xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return xs.credential(t,s)}catch{return null}}}xs.GOOGLE_SIGN_IN_METHOD="google.com";xs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends Cl{constructor(){super("github.com")}static credential(e){return Si._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ss.credentialFromTaggedObject(e)}static credentialFromError(e){return Ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ss.credential(e.oauthAccessToken)}catch{return null}}}Ss.GITHUB_SIGN_IN_METHOD="github.com";Ss.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends Cl{constructor(){super("twitter.com")}static credential(e,t){return Si._fromParams({providerId:As.PROVIDER_ID,signInMethod:As.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return As.credentialFromTaggedObject(e)}static credentialFromError(e){return As.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return As.credential(t,s)}catch{return null}}}As.TWITTER_SIGN_IN_METHOD="twitter.com";As.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await On._fromIdTokenResponse(e,s,o),c=Ny(s);return new Fo({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Ny(s);return new Fo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Ny(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends yr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Tc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Tc(e,t,s,o)}}function zv(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Tc._fromErrorAndOperation(n,l,e,s):l})}async function FS(n,e,t=!1){const s=await ml(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Fo._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function US(n,e,t=!1){const{auth:s}=n;if(Tn(s.app))return Promise.reject(Ds(s));const o="reauthenticate";try{const l=await ml(n,zv(s,o,e,n),t);ve(l.idToken,s,"internal-error");const c=Kf(l.idToken);ve(c,s,"internal-error");const{sub:f}=c;return ve(n.uid===f,s,"user-mismatch"),Fo._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&jn(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bv(n,e,t=!1){if(Tn(n.app))return Promise.reject(Ds(n));const s="signIn",o=await zv(n,s,e),l=await Fo._fromIdTokenResponse(n,s,o);return t||await n._updateCurrentUser(l.user),l}async function zS(n,e){return Bv(Yo(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(n){const e=Yo(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function $S(n,e,t){return Tn(n.app)?Promise.reject(Ds(n)):zS(dt(n),Jo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&BS(n),s})}function qS(n,e,t,s){return dt(n).onIdTokenChanged(e,t,s)}function WS(n,e,t){return dt(n).beforeAuthStateChanged(e,t)}function HS(n,e,t,s){return dt(n).onAuthStateChanged(e,t,s)}function KS(n){return dt(n).signOut()}const Ic="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ic,"1"),this.storage.removeItem(Ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=1e3,QS=10;class qv extends $v{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ov(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,g)=>{this.notifyListeners(c,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);fS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,QS):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},GS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qv.type="LOCAL";const YS=qv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv extends $v{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Wv.type="SESSION";const Hv=Wv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new qc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(c).map(async y=>y(t.origin,l)),g=await JS(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((f,g)=>{const y=Jf("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);c={messageChannel:o,onMessage(I){const C=I;if(C.data.eventId===y)switch(C.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(C.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(){return window}function ZS(n){ur().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(){return typeof ur().WorkerGlobalScope<"u"&&typeof ur().importScripts=="function"}async function eA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function nA(){return Kv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="firebaseLocalStorageDb",rA=1,xc="firebaseLocalStorage",Qv="fbase_key";class kl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wc(n,e){return n.transaction([xc],e?"readwrite":"readonly").objectStore(xc)}function sA(){const n=indexedDB.deleteDatabase(Gv);return new kl(n).toPromise()}function pf(){const n=indexedDB.open(Gv,rA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(xc,{keyPath:Qv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(xc)?e(s):(s.close(),await sA(),e(await pf()))})})}async function Dy(n,e,t){const s=Wc(n,!0).put({[Qv]:e,value:t});return new kl(s).toPromise()}async function iA(n,e){const t=Wc(n,!1).get(e),s=await new kl(t).toPromise();return s===void 0?null:s.value}function by(n,e){const t=Wc(n,!0).delete(e);return new kl(t).toPromise()}const oA=800,aA=3;class Yv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>aA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qc._getInstance(nA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await eA(),!this.activeServiceWorker)return;this.sender=new XS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pf();return await Dy(e,Ic,"1"),await by(e,Ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Dy(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>iA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>by(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Wc(o,!1).getAll();return new kl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yv.type="LOCAL";const lA=Yv;new Rl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(n,e){return e?jr(e):(ve(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf extends Qf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cA(n){return Bv(n.auth,new Xf(n),n.bypassAuthState)}function hA(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),US(t,new Xf(n),n.bypassAuthState)}async function dA(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),FS(t,new Xf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cA;case"linkViaPopup":case"linkViaRedirect":return dA;case"reauthViaPopup":case"reauthViaRedirect":return hA;default:jn(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=new Rl(2e3,1e4);class Po extends Jv{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,Po.currentPopupAction&&Po.currentPopupAction.cancel(),Po.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=Jf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(lr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(lr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Po.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fA.get())};e()}}Po.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA="pendingRedirect",ac=new Map;class mA extends Jv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ac.get(this.auth._key());if(!e){try{const s=await gA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ac.set(this.auth._key(),e)}return this.bypassAuthState||ac.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gA(n,e){const t=vA(e),s=_A(n);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function yA(n,e){ac.set(n._key(),e)}function _A(n){return jr(n._redirectPersistence)}function vA(n){return oc(pA,n.config.apiKey,n.name)}async function wA(n,e,t=!1){if(Tn(n.app))return Promise.reject(Ds(n));const s=Yo(n),o=uA(s,e),c=await new mA(s,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=600*1e3;class TA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Xv(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(lr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vy(e))}saveEventToCache(e){this.cachedEventUids.add(Vy(e)),this.lastProcessedEventTime=Date.now()}}function Vy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Xv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(n,e={}){return qs(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AA=/^https?/;async function RA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await xA(n);for(const t of e)try{if(CA(t))return}catch{}jn(n,"unauthorized-domain")}function CA(n){const e=df(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!AA.test(t))return!1;if(SA.test(n))return s===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=new Rl(3e4,6e4);function Oy(){const n=ur().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function PA(n){return new Promise((e,t)=>{var o,l,c;function s(){Oy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Oy(),t(lr(n,"network-request-failed"))},timeout:kA.get()})}if((l=(o=ur().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=ur().gapi)!=null&&c.load)s();else{const f=TS("iframefcb");return ur()[f]=()=>{gapi.load?s():t(lr(n,"network-request-failed"))},Mv(`${ES()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw lc=null,e})}let lc=null;function NA(n){return lc=lc||PA(n),lc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=new Rl(5e3,15e3),bA="__/auth/iframe",VA="emulator/auth/iframe",OA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MA(n){const e=n.config;ve(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Hf(e,VA):`https://${n.config.authDomain}/${bA}`,s={apiKey:e.apiKey,appName:n.name,v:Ni},o=LA.get(n.config.apiHost);o&&(s.eid=o);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Al(s).slice(1)}`}async function jA(n){const e=await NA(n),t=ur().gapi;return ve(t,n,"internal-error"),e.open({where:document.body,url:MA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OA,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const c=lr(n,"network-request-failed"),f=ur().setTimeout(()=>{l(c)},DA.get());function g(){ur().clearTimeout(f),o(s)}s.ping(g).then(g,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UA=500,zA=600,BA="_blank",$A="http://localhost";class Ly{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qA(n,e,t,s=UA,o=zA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const g={...FA,width:s.toString(),height:o.toString(),top:l,left:c},y=$t().toLowerCase();t&&(f=Pv(y)?BA:t),Cv(y)&&(e=e||$A,g.scrollbars="yes");const E=Object.entries(g).reduce((C,[V,W])=>`${C}${V}=${W},`,"");if(dS(y)&&f!=="_self")return WA(e||"",f),new Ly(null);const I=window.open(e||"",f,E);ve(I,n,"popup-blocked");try{I.focus()}catch{}return new Ly(I)}function WA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA="__/auth/handler",KA="emulator/auth/handler",GA=encodeURIComponent("fac");async function My(n,e,t,s,o,l){ve(n.config.authDomain,n,"auth-domain-config-required"),ve(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Ni,eventId:o};if(e instanceof Uv){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",VI(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,I]of Object.entries({}))c[E]=I}if(e instanceof Cl){const E=e.getScopes().filter(I=>I!=="");E.length>0&&(c.scopes=E.join(","))}n.tenantId&&(c.tid=n.tenantId);const f=c;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const g=await n._getAppCheckToken(),y=g?`#${GA}=${encodeURIComponent(g)}`:"";return`${QA(n)}?${Al(f).slice(1)}${y}`}function QA({config:n}){return n.emulator?Hf(n,KA):`https://${n.authDomain}/${HA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="webStorageSupport";class YA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hv,this._completeRedirectFn=wA,this._overrideRedirectResult=yA}async _openPopup(e,t,s,o){var c;zr((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await My(e,t,s,df(),o);return qA(e,l,Jf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await My(e,t,s,df(),o);return ZS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(zr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await jA(e),s=new TA(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qd,{type:Qd},o=>{var c;const l=(c=o==null?void 0:o[0])==null?void 0:c[Qd];l!==void 0&&t(!!l),jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=RA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ov()||kv()||Gf()}}const JA=YA;var jy="@firebase/auth",Fy="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eR(n){xi(new Ls("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=s.options;ve(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lv(n)},y=new _S(s,o,l,g);return CS(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),xi(new Ls("auth-internal",e=>{const t=Yo(e.getProvider("auth").getImmediate());return(s=>new XA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ar(jy,Fy,ZA(n)),ar(jy,Fy,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=300,nR=fv("authIdTokenMaxAge")||tR;let Uy=null;const rR=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>nR)return;const o=t==null?void 0:t.token;Uy!==o&&(Uy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function sR(n=qf()){const e=zc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=RS(n,{popupRedirectResolver:JA,persistence:[lA,YS,Hv]}),s=fv("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=rR(l.toString());WS(t,c,()=>c(t.currentUser)),qS(t,f=>c(f))}}const o=cv("auth");return o&&kS(t,`http://${o}`),t}function iR(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}vS({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=o=>{const l=lr("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",iR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eR("Browser");var oR="firebase",aR="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ar(oR,aR,"app");var zy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bs,Zv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,x){function R(){}R.prototype=x.prototype,P.F=x.prototype,P.prototype=new R,P.prototype.constructor=P,P.D=function(D,N,O){for(var A=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)A[qe-2]=arguments[qe];return x.prototype[N].apply(D,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,x,R){R||(R=0);const D=Array(16);if(typeof x=="string")for(var N=0;N<16;++N)D[N]=x.charCodeAt(R++)|x.charCodeAt(R++)<<8|x.charCodeAt(R++)<<16|x.charCodeAt(R++)<<24;else for(N=0;N<16;++N)D[N]=x[R++]|x[R++]<<8|x[R++]<<16|x[R++]<<24;x=P.g[0],R=P.g[1],N=P.g[2];let O=P.g[3],A;A=x+(O^R&(N^O))+D[0]+3614090360&4294967295,x=R+(A<<7&4294967295|A>>>25),A=O+(N^x&(R^N))+D[1]+3905402710&4294967295,O=x+(A<<12&4294967295|A>>>20),A=N+(R^O&(x^R))+D[2]+606105819&4294967295,N=O+(A<<17&4294967295|A>>>15),A=R+(x^N&(O^x))+D[3]+3250441966&4294967295,R=N+(A<<22&4294967295|A>>>10),A=x+(O^R&(N^O))+D[4]+4118548399&4294967295,x=R+(A<<7&4294967295|A>>>25),A=O+(N^x&(R^N))+D[5]+1200080426&4294967295,O=x+(A<<12&4294967295|A>>>20),A=N+(R^O&(x^R))+D[6]+2821735955&4294967295,N=O+(A<<17&4294967295|A>>>15),A=R+(x^N&(O^x))+D[7]+4249261313&4294967295,R=N+(A<<22&4294967295|A>>>10),A=x+(O^R&(N^O))+D[8]+1770035416&4294967295,x=R+(A<<7&4294967295|A>>>25),A=O+(N^x&(R^N))+D[9]+2336552879&4294967295,O=x+(A<<12&4294967295|A>>>20),A=N+(R^O&(x^R))+D[10]+4294925233&4294967295,N=O+(A<<17&4294967295|A>>>15),A=R+(x^N&(O^x))+D[11]+2304563134&4294967295,R=N+(A<<22&4294967295|A>>>10),A=x+(O^R&(N^O))+D[12]+1804603682&4294967295,x=R+(A<<7&4294967295|A>>>25),A=O+(N^x&(R^N))+D[13]+4254626195&4294967295,O=x+(A<<12&4294967295|A>>>20),A=N+(R^O&(x^R))+D[14]+2792965006&4294967295,N=O+(A<<17&4294967295|A>>>15),A=R+(x^N&(O^x))+D[15]+1236535329&4294967295,R=N+(A<<22&4294967295|A>>>10),A=x+(N^O&(R^N))+D[1]+4129170786&4294967295,x=R+(A<<5&4294967295|A>>>27),A=O+(R^N&(x^R))+D[6]+3225465664&4294967295,O=x+(A<<9&4294967295|A>>>23),A=N+(x^R&(O^x))+D[11]+643717713&4294967295,N=O+(A<<14&4294967295|A>>>18),A=R+(O^x&(N^O))+D[0]+3921069994&4294967295,R=N+(A<<20&4294967295|A>>>12),A=x+(N^O&(R^N))+D[5]+3593408605&4294967295,x=R+(A<<5&4294967295|A>>>27),A=O+(R^N&(x^R))+D[10]+38016083&4294967295,O=x+(A<<9&4294967295|A>>>23),A=N+(x^R&(O^x))+D[15]+3634488961&4294967295,N=O+(A<<14&4294967295|A>>>18),A=R+(O^x&(N^O))+D[4]+3889429448&4294967295,R=N+(A<<20&4294967295|A>>>12),A=x+(N^O&(R^N))+D[9]+568446438&4294967295,x=R+(A<<5&4294967295|A>>>27),A=O+(R^N&(x^R))+D[14]+3275163606&4294967295,O=x+(A<<9&4294967295|A>>>23),A=N+(x^R&(O^x))+D[3]+4107603335&4294967295,N=O+(A<<14&4294967295|A>>>18),A=R+(O^x&(N^O))+D[8]+1163531501&4294967295,R=N+(A<<20&4294967295|A>>>12),A=x+(N^O&(R^N))+D[13]+2850285829&4294967295,x=R+(A<<5&4294967295|A>>>27),A=O+(R^N&(x^R))+D[2]+4243563512&4294967295,O=x+(A<<9&4294967295|A>>>23),A=N+(x^R&(O^x))+D[7]+1735328473&4294967295,N=O+(A<<14&4294967295|A>>>18),A=R+(O^x&(N^O))+D[12]+2368359562&4294967295,R=N+(A<<20&4294967295|A>>>12),A=x+(R^N^O)+D[5]+4294588738&4294967295,x=R+(A<<4&4294967295|A>>>28),A=O+(x^R^N)+D[8]+2272392833&4294967295,O=x+(A<<11&4294967295|A>>>21),A=N+(O^x^R)+D[11]+1839030562&4294967295,N=O+(A<<16&4294967295|A>>>16),A=R+(N^O^x)+D[14]+4259657740&4294967295,R=N+(A<<23&4294967295|A>>>9),A=x+(R^N^O)+D[1]+2763975236&4294967295,x=R+(A<<4&4294967295|A>>>28),A=O+(x^R^N)+D[4]+1272893353&4294967295,O=x+(A<<11&4294967295|A>>>21),A=N+(O^x^R)+D[7]+4139469664&4294967295,N=O+(A<<16&4294967295|A>>>16),A=R+(N^O^x)+D[10]+3200236656&4294967295,R=N+(A<<23&4294967295|A>>>9),A=x+(R^N^O)+D[13]+681279174&4294967295,x=R+(A<<4&4294967295|A>>>28),A=O+(x^R^N)+D[0]+3936430074&4294967295,O=x+(A<<11&4294967295|A>>>21),A=N+(O^x^R)+D[3]+3572445317&4294967295,N=O+(A<<16&4294967295|A>>>16),A=R+(N^O^x)+D[6]+76029189&4294967295,R=N+(A<<23&4294967295|A>>>9),A=x+(R^N^O)+D[9]+3654602809&4294967295,x=R+(A<<4&4294967295|A>>>28),A=O+(x^R^N)+D[12]+3873151461&4294967295,O=x+(A<<11&4294967295|A>>>21),A=N+(O^x^R)+D[15]+530742520&4294967295,N=O+(A<<16&4294967295|A>>>16),A=R+(N^O^x)+D[2]+3299628645&4294967295,R=N+(A<<23&4294967295|A>>>9),A=x+(N^(R|~O))+D[0]+4096336452&4294967295,x=R+(A<<6&4294967295|A>>>26),A=O+(R^(x|~N))+D[7]+1126891415&4294967295,O=x+(A<<10&4294967295|A>>>22),A=N+(x^(O|~R))+D[14]+2878612391&4294967295,N=O+(A<<15&4294967295|A>>>17),A=R+(O^(N|~x))+D[5]+4237533241&4294967295,R=N+(A<<21&4294967295|A>>>11),A=x+(N^(R|~O))+D[12]+1700485571&4294967295,x=R+(A<<6&4294967295|A>>>26),A=O+(R^(x|~N))+D[3]+2399980690&4294967295,O=x+(A<<10&4294967295|A>>>22),A=N+(x^(O|~R))+D[10]+4293915773&4294967295,N=O+(A<<15&4294967295|A>>>17),A=R+(O^(N|~x))+D[1]+2240044497&4294967295,R=N+(A<<21&4294967295|A>>>11),A=x+(N^(R|~O))+D[8]+1873313359&4294967295,x=R+(A<<6&4294967295|A>>>26),A=O+(R^(x|~N))+D[15]+4264355552&4294967295,O=x+(A<<10&4294967295|A>>>22),A=N+(x^(O|~R))+D[6]+2734768916&4294967295,N=O+(A<<15&4294967295|A>>>17),A=R+(O^(N|~x))+D[13]+1309151649&4294967295,R=N+(A<<21&4294967295|A>>>11),A=x+(N^(R|~O))+D[4]+4149444226&4294967295,x=R+(A<<6&4294967295|A>>>26),A=O+(R^(x|~N))+D[11]+3174756917&4294967295,O=x+(A<<10&4294967295|A>>>22),A=N+(x^(O|~R))+D[2]+718787259&4294967295,N=O+(A<<15&4294967295|A>>>17),A=R+(O^(N|~x))+D[9]+3951481745&4294967295,P.g[0]=P.g[0]+x&4294967295,P.g[1]=P.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,P.g[2]=P.g[2]+N&4294967295,P.g[3]=P.g[3]+O&4294967295}s.prototype.v=function(P,x){x===void 0&&(x=P.length);const R=x-this.blockSize,D=this.C;let N=this.h,O=0;for(;O<x;){if(N==0)for(;O<=R;)o(this,P,O),O+=this.blockSize;if(typeof P=="string"){for(;O<x;)if(D[N++]=P.charCodeAt(O++),N==this.blockSize){o(this,D),N=0;break}}else for(;O<x;)if(D[N++]=P[O++],N==this.blockSize){o(this,D),N=0;break}}this.h=N,this.o+=x},s.prototype.A=function(){var P=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);P[0]=128;for(var x=1;x<P.length-8;++x)P[x]=0;x=this.o*8;for(var R=P.length-8;R<P.length;++R)P[R]=x&255,x/=256;for(this.v(P),P=Array(16),x=0,R=0;R<4;++R)for(let D=0;D<32;D+=8)P[x++]=this.g[R]>>>D&255;return P};function l(P,x){var R=f;return Object.prototype.hasOwnProperty.call(R,P)?R[P]:R[P]=x(P)}function c(P,x){this.h=x;const R=[];let D=!0;for(let N=P.length-1;N>=0;N--){const O=P[N]|0;D&&O==x||(R[N]=O,D=!1)}this.g=R}var f={};function g(P){return-128<=P&&P<128?l(P,function(x){return new c([x|0],x<0?-1:0)}):new c([P|0],P<0?-1:0)}function y(P){if(isNaN(P)||!isFinite(P))return I;if(P<0)return M(y(-P));const x=[];let R=1;for(let D=0;P>=R;D++)x[D]=P/R|0,R*=4294967296;return new c(x,0)}function E(P,x){if(P.length==0)throw Error("number format error: empty string");if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(P.charAt(0)=="-")return M(E(P.substring(1),x));if(P.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=y(Math.pow(x,8));let D=I;for(let O=0;O<P.length;O+=8){var N=Math.min(8,P.length-O);const A=parseInt(P.substring(O,O+N),x);N<8?(N=y(Math.pow(x,N)),D=D.j(N).add(y(A))):(D=D.j(R),D=D.add(y(A)))}return D}var I=g(0),C=g(1),V=g(16777216);n=c.prototype,n.m=function(){if(z(this))return-M(this).m();let P=0,x=1;for(let R=0;R<this.g.length;R++){const D=this.i(R);P+=(D>=0?D:4294967296+D)*x,x*=4294967296}return P},n.toString=function(P){if(P=P||10,P<2||36<P)throw Error("radix out of range: "+P);if(W(this))return"0";if(z(this))return"-"+M(this).toString(P);const x=y(Math.pow(P,6));var R=this;let D="";for(;;){const N=he(R,x).g;R=Z(R,N.j(x));let O=((R.g.length>0?R.g[0]:R.h)>>>0).toString(P);if(R=N,W(R))return O+D;for(;O.length<6;)O="0"+O;D=O+D}},n.i=function(P){return P<0?0:P<this.g.length?this.g[P]:this.h};function W(P){if(P.h!=0)return!1;for(let x=0;x<P.g.length;x++)if(P.g[x]!=0)return!1;return!0}function z(P){return P.h==-1}n.l=function(P){return P=Z(this,P),z(P)?-1:W(P)?0:1};function M(P){const x=P.g.length,R=[];for(let D=0;D<x;D++)R[D]=~P.g[D];return new c(R,~P.h).add(C)}n.abs=function(){return z(this)?M(this):this},n.add=function(P){const x=Math.max(this.g.length,P.g.length),R=[];let D=0;for(let N=0;N<=x;N++){let O=D+(this.i(N)&65535)+(P.i(N)&65535),A=(O>>>16)+(this.i(N)>>>16)+(P.i(N)>>>16);D=A>>>16,O&=65535,A&=65535,R[N]=A<<16|O}return new c(R,R[R.length-1]&-2147483648?-1:0)};function Z(P,x){return P.add(M(x))}n.j=function(P){if(W(this)||W(P))return I;if(z(this))return z(P)?M(this).j(M(P)):M(M(this).j(P));if(z(P))return M(this.j(M(P)));if(this.l(V)<0&&P.l(V)<0)return y(this.m()*P.m());const x=this.g.length+P.g.length,R=[];for(var D=0;D<2*x;D++)R[D]=0;for(D=0;D<this.g.length;D++)for(let N=0;N<P.g.length;N++){const O=this.i(D)>>>16,A=this.i(D)&65535,qe=P.i(N)>>>16,Ke=P.i(N)&65535;R[2*D+2*N]+=A*Ke,se(R,2*D+2*N),R[2*D+2*N+1]+=O*Ke,se(R,2*D+2*N+1),R[2*D+2*N+1]+=A*qe,se(R,2*D+2*N+1),R[2*D+2*N+2]+=O*qe,se(R,2*D+2*N+2)}for(P=0;P<x;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=x;P<2*x;P++)R[P]=0;return new c(R,0)};function se(P,x){for(;(P[x]&65535)!=P[x];)P[x+1]+=P[x]>>>16,P[x]&=65535,x++}function ae(P,x){this.g=P,this.h=x}function he(P,x){if(W(x))throw Error("division by zero");if(W(P))return new ae(I,I);if(z(P))return x=he(M(P),x),new ae(M(x.g),M(x.h));if(z(x))return x=he(P,M(x)),new ae(M(x.g),x.h);if(P.g.length>30){if(z(P)||z(x))throw Error("slowDivide_ only works with positive integers.");for(var R=C,D=x;D.l(P)<=0;)R=Te(R),D=Te(D);var N=Ce(R,1),O=Ce(D,1);for(D=Ce(D,2),R=Ce(R,2);!W(D);){var A=O.add(D);A.l(P)<=0&&(N=N.add(R),O=A),D=Ce(D,1),R=Ce(R,1)}return x=Z(P,N.j(x)),new ae(N,x)}for(N=I;P.l(x)>=0;){for(R=Math.max(1,Math.floor(P.m()/x.m())),D=Math.ceil(Math.log(R)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),O=y(R),A=O.j(x);z(A)||A.l(P)>0;)R-=D,O=y(R),A=O.j(x);W(O)&&(O=C),N=N.add(O),P=Z(P,A)}return new ae(N,P)}n.B=function(P){return he(this,P).h},n.and=function(P){const x=Math.max(this.g.length,P.g.length),R=[];for(let D=0;D<x;D++)R[D]=this.i(D)&P.i(D);return new c(R,this.h&P.h)},n.or=function(P){const x=Math.max(this.g.length,P.g.length),R=[];for(let D=0;D<x;D++)R[D]=this.i(D)|P.i(D);return new c(R,this.h|P.h)},n.xor=function(P){const x=Math.max(this.g.length,P.g.length),R=[];for(let D=0;D<x;D++)R[D]=this.i(D)^P.i(D);return new c(R,this.h^P.h)};function Te(P){const x=P.g.length+1,R=[];for(let D=0;D<x;D++)R[D]=P.i(D)<<1|P.i(D-1)>>>31;return new c(R,P.h)}function Ce(P,x){const R=x>>5;x%=32;const D=P.g.length-R,N=[];for(let O=0;O<D;O++)N[O]=x>0?P.i(O+R)>>>x|P.i(O+R+1)<<32-x:P.i(O+R);return new c(N,P.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Zv=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=E,bs=c}).apply(typeof zy<"u"?zy:typeof self<"u"?self:typeof window<"u"?window:{});var Zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var e0,rl,t0,uc,mf,n0,r0,s0;(function(){var n,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zu=="object"&&Zu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=t(this);function o(u,m){if(m)e:{var _=s;u=u.split(".");for(var T=0;T<u.length-1;T++){var F=u[T];if(!(F in _))break e;_=_[F]}u=u[u.length-1],T=_[u],m=m(T),m!=T&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(m){var _=[],T;for(T in m)Object.prototype.hasOwnProperty.call(m,T)&&_.push([T,m[T]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function f(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function g(u,m,_){return u.call.apply(u.bind,arguments)}function y(u,m,_){return y=g,y.apply(null,arguments)}function E(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function I(u,m){function _(){}_.prototype=m.prototype,u.Z=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Ob=function(T,F,q){for(var ne=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)ne[Se-2]=arguments[Se];return m.prototype[F].apply(T,ne)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function V(u){const m=u.length;if(m>0){const _=Array(m);for(let T=0;T<m;T++)_[T]=u[T];return _}return[]}function W(u,m){for(let T=1;T<arguments.length;T++){const F=arguments[T];var _=typeof F;if(_=_!="object"?_:F?Array.isArray(F)?"array":_:"null",_=="array"||_=="object"&&typeof F.length=="number"){_=u.length||0;const q=F.length||0;u.length=_+q;for(let ne=0;ne<q;ne++)u[_+ne]=F[ne]}else u.push(F)}}class z{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function M(u){c.setTimeout(()=>{throw u},0)}function Z(){var u=P;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class se{constructor(){this.h=this.g=null}add(m,_){const T=ae.get();T.set(m,_),this.h?this.h.next=T:this.g=T,this.h=T}}var ae=new z(()=>new he,u=>u.reset());class he{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,Ce=!1,P=new se,x=()=>{const u=Promise.resolve(void 0);Te=()=>{u.then(R)}};function R(){for(var u;u=Z();){try{u.h.call(u.g)}catch(_){M(_)}var m=ae;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}Ce=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};c.addEventListener("test",_,m),c.removeEventListener("test",_,m)}catch{}return u})();function A(u){return/^[\s\xa0]*$/.test(u)}function qe(u,m){N.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}I(qe,N),qe.prototype.init=function(u,m){const _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(_=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&qe.Z.h.call(this)},qe.prototype.h=function(){qe.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ke="closure_listenable_"+(Math.random()*1e6|0),$=0;function re(u,m,_,T,F){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!T,this.ha=F,this.key=++$,this.da=this.fa=!1}function te(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pe(u,m,_){for(const T in u)m.call(_,u[T],T,u)}function oe(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function L(u){const m={};for(const _ in u)m[_]=u[_];return m}const G="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xe(u,m){let _,T;for(let F=1;F<arguments.length;F++){T=arguments[F];for(_ in T)u[_]=T[_];for(let q=0;q<G.length;q++)_=G[q],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function Re(u){this.src=u,this.g={},this.h=0}Re.prototype.add=function(u,m,_,T,F){const q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);const ne=Ne(u,m,T,F);return ne>-1?(m=u[ne],_||(m.fa=!1)):(m=new re(m,this.src,q,!!T,F),m.fa=_,u.push(m)),m};function Pe(u,m){const _=m.type;if(_ in u.g){var T=u.g[_],F=Array.prototype.indexOf.call(T,m,void 0),q;(q=F>=0)&&Array.prototype.splice.call(T,F,1),q&&(te(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Ne(u,m,_,T){for(let F=0;F<u.length;++F){const q=u[F];if(!q.da&&q.listener==m&&q.capture==!!_&&q.ha==T)return F}return-1}var ze="closure_lm_"+(Math.random()*1e6|0),Me={};function We(u,m,_,T,F){if(Array.isArray(m)){for(let q=0;q<m.length;q++)We(u,m[q],_,T,F);return null}return _=sa(_),u&&u[Ke]?u.J(m,_,f(T)?!!T.capture:!1,F):qt(u,m,_,!1,T,F)}function qt(u,m,_,T,F,q){if(!m)throw Error("Invalid event type");const ne=f(F)?!!F.capture:!!F;let Se=Fi(u);if(Se||(u[ze]=Se=new Re(u)),_=Se.add(m,_,T,ne,q),_.proxy)return _;if(T=Mi(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)O||(F=ne),F===void 0&&(F=!1),u.addEventListener(m.toString(),T,F);else if(u.attachEvent)u.attachEvent(ji(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Mi(){function u(_){return m.call(u.src,u.listener,_)}const m=Ll;return u}function ra(u,m,_,T,F){if(Array.isArray(m))for(var q=0;q<m.length;q++)ra(u,m[q],_,T,F);else T=f(T)?!!T.capture:!!T,_=sa(_),u&&u[Ke]?(u=u.i,q=String(m).toString(),q in u.g&&(m=u.g[q],_=Ne(m,_,T,F),_>-1&&(te(m[_]),Array.prototype.splice.call(m,_,1),m.length==0&&(delete u.g[q],u.h--)))):u&&(u=Fi(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Ne(m,_,T,F)),(_=u>-1?m[u]:null)&&Wr(_))}function Wr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ke])Pe(m.i,u);else{var _=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(_,T,u.capture):m.detachEvent?m.detachEvent(ji(_),T):m.addListener&&m.removeListener&&m.removeListener(T),(_=Fi(m))?(Pe(_,u),_.h==0&&(_.src=null,m[ze]=null)):te(u)}}}function ji(u){return u in Me?Me[u]:Me[u]="on"+u}function Ll(u,m){if(u.da)u=!0;else{m=new qe(m,this);const _=u.listener,T=u.ha||u.src;u.fa&&Wr(u),u=_.call(T,m)}return u}function Fi(u){return u=u[ze],u instanceof Re?u:null}var Ks="__closure_events_fn_"+(Math.random()*1e9>>>0);function sa(u){return typeof u=="function"?u:(u[Ks]||(u[Ks]=function(m){return u.handleEvent(m)}),u[Ks])}function ft(){D.call(this),this.i=new Re(this),this.M=this,this.G=null}I(ft,D),ft.prototype[Ke]=!0,ft.prototype.removeEventListener=function(u,m,_,T){ra(this,u,m,_,T)};function at(u,m){var _,T=u.G;if(T)for(_=[];T;T=T.G)_.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new N(m,u);else if(m instanceof N)m.target=m.target||u;else{var F=m;m=new N(T,u),xe(m,F)}F=!0;let q,ne;if(_)for(ne=_.length-1;ne>=0;ne--)q=m.g=_[ne],F=xn(q,T,!0,m)&&F;if(q=m.g=u,F=xn(q,T,!0,m)&&F,F=xn(q,T,!1,m)&&F,_)for(ne=0;ne<_.length;ne++)q=m.g=_[ne],F=xn(q,T,!1,m)&&F}ft.prototype.N=function(){if(ft.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const _=u.g[m];for(let T=0;T<_.length;T++)te(_[T]);delete u.g[m],u.h--}}this.G=null},ft.prototype.J=function(u,m,_,T){return this.i.add(String(u),m,!1,_,T)},ft.prototype.K=function(u,m,_,T){return this.i.add(String(u),m,!0,_,T)};function xn(u,m,_,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let F=!0;for(let q=0;q<m.length;++q){const ne=m[q];if(ne&&!ne.da&&ne.capture==_){const Se=ne.listener,lt=ne.ha||ne.src;ne.fa&&Pe(u.i,ne),F=Se.call(lt,T)!==!1&&F}}return F&&!T.defaultPrevented}function ia(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=y(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:c.setTimeout(u,m||0)}function oa(u){u.g=ia(()=>{u.g=null,u.i&&(u.i=!1,oa(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Ml extends D{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:oa(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hr(u){D.call(this),this.h=u,this.g={}}I(Hr,D);var aa=[];function Ui(u){pe(u.g,function(m,_){this.g.hasOwnProperty(_)&&Wr(m)},u),u.g={}}Hr.prototype.N=function(){Hr.Z.N.call(this),Ui(this)},Hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Kr=c.JSON.stringify,jl=c.JSON.parse,Gs=class{stringify(u){return c.JSON.stringify(u,void 0)}parse(u){return c.JSON.parse(u,void 0)}};function Gr(){}function Fl(){}var Qr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function zi(){N.call(this,"d")}I(zi,N);function la(){N.call(this,"c")}I(la,N);var Sn={},Bi=null;function Yr(){return Bi=Bi||new ft}Sn.Ia="serverreachability";function $i(u){N.call(this,Sn.Ia,u)}I($i,N);function vr(u){const m=Yr();at(m,new $i(m))}Sn.STAT_EVENT="statevent";function wr(u,m){N.call(this,Sn.STAT_EVENT,u),this.stat=m}I(wr,N);function st(u){const m=Yr();at(m,new wr(m,u))}Sn.Ja="timingevent";function ua(u,m){N.call(this,Sn.Ja,u),this.size=m}I(ua,N);function Jr(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){u()},m)}function Xr(){this.g=!0}Xr.prototype.ua=function(){this.g=!1};function Ul(u,m,_,T,F,q){u.info(function(){if(u.g)if(q){var ne="",Se=q.split("&");for(let $e=0;$e<Se.length;$e++){var lt=Se[$e].split("=");if(lt.length>1){const pt=lt[0];lt=lt[1];const ln=pt.split("_");ne=ln.length>=2&&ln[1]=="type"?ne+(pt+"="+lt+"&"):ne+(pt+"=redacted&")}}}else ne=null;else ne=q;return"XMLHTTP REQ ("+T+") [attempt "+F+"]: "+m+`
`+_+`
`+ne})}function zl(u,m,_,T,F,q,ne){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+F+"]: "+m+`
`+_+`
`+q+" "+ne})}function Un(u,m,_,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Qs(u,_)+(T?" "+T:"")})}function Bl(u,m){u.info(function(){return"TIMEOUT: "+m})}Xr.prototype.info=function(){};function Qs(u,m){if(!u.g)return m;if(!m)return null;try{const q=JSON.parse(m);if(q){for(u=0;u<q.length;u++)if(Array.isArray(q[u])){var _=q[u];if(!(_.length<2)){var T=_[1];if(Array.isArray(T)&&!(T.length<1)){var F=T[0];if(F!="noop"&&F!="stop"&&F!="close")for(let ne=1;ne<T.length;ne++)T[ne]=""}}}}return Kr(q)}catch{return m}}var Zr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},es={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},$l;function Er(){}I(Er,Gr),Er.prototype.g=function(){return new XMLHttpRequest},$l=new Er;function zn(u){return encodeURIComponent(String(u))}function qi(u){var m=1;u=u.split(":");const _=[];for(;m>0&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function fn(u,m,_,T){this.j=u,this.i=m,this.l=_,this.S=T||1,this.V=new Hr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ql}function ql(){this.i=null,this.g="",this.h=!1}var Wl={},ca={};function An(u,m,_){u.M=1,u.A=Ir(pn(m)),u.u=_,u.R=!0,ha(u,null)}function ha(u,m){u.F=Date.now(),Ys(u),u.B=pn(u.A);var _=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),Ea(_.i,"t",T),u.C=0,_=u.j.L,u.h=new ql,u.g=tu(u.j,_?m:null,!u.u),u.P>0&&(u.O=new Ml(y(u.Y,u,u.g),u.P)),m=u.V,_=u.g,T=u.ba;var F="readystatechange";Array.isArray(F)||(F&&(aa[0]=F.toString()),F=aa);for(let q=0;q<F.length;q++){const ne=We(_,F[q],T||m.handleEvent,!1,m.h||m);if(!ne)break;m.g[ne.key]=ne}m=u.J?L(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),vr(),Ul(u.i,u.v,u.B,u.l,u.S,u.u)}fn.prototype.ba=function(u){u=u.target;const m=this.O;m&&Gn(u)==3?m.j():this.Y(u)},fn.prototype.Y=function(u){try{if(u==this.g)e:{const Se=Gn(this.g),lt=this.g.ya(),$e=this.g.ca();if(!(Se<3)&&(Se!=3||this.g&&(this.h.h||this.g.la()||Zl(this.g)))){this.K||Se!=4||lt==7||(lt==8||$e<=0?vr(3):vr(2)),Wi(this);var m=this.g.ca();this.X=m;var _=Hl(this);if(this.o=m==200,zl(this.i,this.v,this.B,this.l,this.S,Se,m),this.o){if(this.U&&!this.L){t:{if(this.g){var T,F=this.g;if((T=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(T)){var q=T;break t}}q=null}if(u=q)Un(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ye(this,u);else{this.o=!1,this.m=3,st(12),Tr(this),Js(this);break e}}if(this.R){u=!0;let pt;for(;!this.K&&this.C<_.length;)if(pt=Gl(this,_),pt==ca){Se==4&&(this.m=4,st(14),u=!1),Un(this.i,this.l,null,"[Incomplete Response]");break}else if(pt==Wl){this.m=4,st(15),Un(this.i,this.l,_,"[Invalid Chunk]"),u=!1;break}else Un(this.i,this.l,pt,null),Ye(this,pt);if(Kl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||_.length!=0||this.h.h||(this.m=1,st(16),u=!1),this.o=this.o&&u,!u)Un(this.i,this.l,_,"[Invalid Chunked Response]"),Tr(this),Js(this);else if(_.length>0&&!this.W){this.W=!0;var ne=this.j;ne.g==this&&ne.aa&&!ne.P&&(ne.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),oi(ne),ne.P=!0,st(11))}}else Un(this.i,this.l,_,null),Ye(this,_);Se==4&&Tr(this),this.o&&!this.K&&(Se==4?to(this.j,this):(this.o=!1,Ys(this)))}else Ia(this.g),m==400&&_.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),Tr(this),Js(this)}}}catch{}finally{}};function Hl(u){if(!Kl(u))return u.g.la();const m=Zl(u.g);if(m==="")return"";let _="";const T=m.length,F=Gn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return Tr(u),Js(u),"";u.h.i=new c.TextDecoder}for(let q=0;q<T;q++)u.h.h=!0,_+=u.h.i.decode(m[q],{stream:!(F&&q==T-1)});return m.length=0,u.h.g+=_,u.C=0,u.h.g}function Kl(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function Gl(u,m){var _=u.C,T=m.indexOf(`
`,_);return T==-1?ca:(_=Number(m.substring(_,T)),isNaN(_)?Wl:(T+=1,T+_>m.length?ca:(m=m.slice(T,T+_),u.C=T+_,m)))}fn.prototype.cancel=function(){this.K=!0,Tr(this)};function Ys(u){u.T=Date.now()+u.H,da(u,u.H)}function da(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=Jr(y(u.aa,u),m)}function Wi(u){u.D&&(c.clearTimeout(u.D),u.D=null)}fn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Bl(this.i,this.B),this.M!=2&&(vr(),st(17)),Tr(this),this.m=2,Js(this)):da(this,this.T-u)};function Js(u){u.j.I==0||u.K||to(u.j,u)}function Tr(u){Wi(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,Ui(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function Ye(u,m){try{var _=u.j;if(_.I!=0&&(_.g==u||pa(_.h,u))){if(!u.L&&pa(_.h,u)&&_.I==3){try{var T=_.Ba.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var F=T;if(F[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<u.F)eo(_),on(_);else break e;Jn(_),st(18)}}else _.xa=F[1],0<_.xa-_.K&&F[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=Jr(y(_.Va,_),6e3));Xs(_.h)<=1&&_.ta&&(_.ta=void 0)}else an(_,11)}else if((u.L||_.g==u)&&eo(_),!A(m))for(F=_.Ba.g.parse(m),m=0;m<F.length;m++){let $e=F[m];const pt=$e[0];if(!(pt<=_.K))if(_.K=pt,$e=$e[1],_.I==2)if($e[0]=="c"){_.M=$e[1],_.ba=$e[2];const ln=$e[3];ln!=null&&(_.ka=ln,_.j.info("VER="+_.ka));const Cr=$e[4];Cr!=null&&(_.za=Cr,_.j.info("SVER="+_.za));const Xn=$e[5];Xn!=null&&typeof Xn=="number"&&Xn>0&&(T=1.5*Xn,_.O=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const Zn=u.g;if(Zn){const so=Zn.g?Zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(so){var q=T.h;q.g||so.indexOf("spdy")==-1&&so.indexOf("quic")==-1&&so.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Ki(q,q.h),q.h=null))}if(T.G){const Aa=Zn.g?Zn.g.getResponseHeader("X-HTTP-Session-Id"):null;Aa&&(T.wa=Aa,Ue(T.J,T.G,Aa))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-u.F,_.j.info("Handshake RTT: "+_.T+"ms")),T=_;var ne=u;if(T.na=Sa(T,T.L?T.ba:null,T.W),ne.L){Zs(T.h,ne);var Se=ne,lt=T.O;lt&&(Se.H=lt),Se.D&&(Wi(Se),Ys(Se)),T.g=ne}else Ot(T);_.i.length>0&&Rr(_)}else $e[0]!="stop"&&$e[0]!="close"||an(_,7);else _.I==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?an(_,7):Xi(_):$e[0]!="noop"&&_.l&&_.l.qa($e),_.A=0)}}vr(4)}catch{}}var ph=class{constructor(u,m){this.g=u,this.map=m}};function Hi(u){this.l=u||10,c.PerformanceNavigationTiming?(u=c.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fa(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Xs(u){return u.h?1:u.g?u.g.size:0}function pa(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Ki(u,m){u.g?u.g.add(m):u.h=m}function Zs(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Hi.prototype.cancel=function(){if(this.i=nn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function nn(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.G);return m}return V(u.i)}var Ql=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rn(u,m){if(u){u=u.split("&");for(let _=0;_<u.length;_++){const T=u[_].indexOf("=");let F,q=null;T>=0?(F=u[_].substring(0,T),q=u[_].substring(T+1)):F=u[_],m(F,q?decodeURIComponent(q.replace(/\+/g," ")):"")}}}function Bn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof Bn?(this.l=u.l,ei(this,u.j),this.o=u.o,this.g=u.g,$n(this,u.u),this.h=u.h,ts(this,Ta(u.i)),this.m=u.m):u&&(m=String(u).match(Ql))?(this.l=!1,ei(this,m[1]||"",!0),this.o=ti(m[2]||""),this.g=ti(m[3]||"",!0),$n(this,m[4]),this.h=ti(m[5]||"",!0),ts(this,m[6]||"",!0),this.m=ti(m[7]||"")):(this.l=!1,this.i=new Oe(null,this.l))}Bn.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(ni(m,ga,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ni(m,ga,!0),"@"),u.push(zn(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&u.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ni(_,_.charAt(0)=="/"?ri:ya,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ni(_,_a)),u.join("")},Bn.prototype.resolve=function(u){const m=pn(this);let _=!!u.j;_?ei(m,u.j):_=!!u.o,_?m.o=u.o:_=!!u.g,_?m.g=u.g:_=u.u!=null;var T=u.h;if(_)$n(m,u.u);else if(_=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var F=m.h.lastIndexOf("/");F!=-1&&(T=m.h.slice(0,F+1)+T)}if(F=T,F==".."||F==".")T="";else if(F.indexOf("./")!=-1||F.indexOf("/.")!=-1){T=F.lastIndexOf("/",0)==0,F=F.split("/");const q=[];for(let ne=0;ne<F.length;){const Se=F[ne++];Se=="."?T&&ne==F.length&&q.push(""):Se==".."?((q.length>1||q.length==1&&q[0]!="")&&q.pop(),T&&ne==F.length&&q.push("")):(q.push(Se),T=!0)}T=q.join("/")}else T=F}return _?m.h=T:_=u.i.toString()!=="",_?ts(m,Ta(u.i)):_=!!u.m,_&&(m.m=u.m),m};function pn(u){return new Bn(u)}function ei(u,m,_){u.j=_?ti(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function $n(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function ts(u,m,_){m instanceof Oe?(u.i=m,Qi(u.i,u.l)):(_||(m=ni(m,mh)),u.i=new Oe(m,u.l))}function Ue(u,m,_){u.i.set(m,_)}function Ir(u){return Ue(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function ti(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ni(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,ma),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ma(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var ga=/[#\/\?@]/g,ya=/[#\?:]/g,ri=/[#\?]/g,mh=/[#\?@]/g,_a=/#/g;function Oe(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function qn(u){u.g||(u.g=new Map,u.h=0,u.i&&rn(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Oe.prototype,n.add=function(u,m){qn(this),this.i=null,u=Wn(this,u);let _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function va(u,m){qn(u),m=Wn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Gi(u,m){return qn(u),m=Wn(u,m),u.g.has(m)}n.forEach=function(u,m){qn(this),this.g.forEach(function(_,T){_.forEach(function(F){u.call(m,F,T,this)},this)},this)};function wa(u,m){qn(u);let _=[];if(typeof m=="string")Gi(u,m)&&(_=_.concat(u.g.get(Wn(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)_=_.concat(u[m]);return _}n.set=function(u,m){return qn(this),this.i=null,u=Wn(this,u),Gi(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=wa(this,u),u.length>0?String(u[0]):m):m};function Ea(u,m,_){va(u,m),_.length>0&&(u.i=null,u.g.set(Wn(u,m),V(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let T=0;T<m.length;T++){var _=m[T];const F=zn(_);_=wa(this,_);for(let q=0;q<_.length;q++){let ne=F;_[q]!==""&&(ne+="="+zn(_[q])),u.push(ne)}}return this.i=u.join("&")};function Ta(u){const m=new Oe;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function Wn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Qi(u,m){m&&!u.j&&(qn(u),u.i=null,u.g.forEach(function(_,T){const F=T.toLowerCase();T!=F&&(va(this,T),Ea(this,F,_))},u)),u.j=m}function Hn(u,m){const _=new Xr;if(c.Image){const T=new Image;T.onload=E(Rt,_,"TestLoadImage: loaded",!0,m,T),T.onerror=E(Rt,_,"TestLoadImage: error",!1,m,T),T.onabort=E(Rt,_,"TestLoadImage: abort",!1,m,T),T.ontimeout=E(Rt,_,"TestLoadImage: timeout",!1,m,T),c.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Kn(u,m){const _=new Xr,T=new AbortController,F=setTimeout(()=>{T.abort(),Rt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(q=>{clearTimeout(F),q.ok?Rt(_,"TestPingServer: ok",!0,m):Rt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),Rt(_,"TestPingServer: error",!1,m)})}function Rt(u,m,_,T,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),T(_)}catch{}}function si(){this.g=new Gs}function xr(u){this.i=u.Sb||null,this.h=u.ab||!1}I(xr,Gr),xr.prototype.g=function(){return new sn(this.i,this.h)};function sn(u,m){ft.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(sn,ft),n=sn.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,Rn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||c).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ns(this)),this.readyState=0},n.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Yl(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Yl(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}n.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?ns(this):Rn(this),this.readyState==3&&Yl(this)}},n.Oa=function(u){this.g&&(this.response=this.responseText=u,ns(this))},n.Na=function(u){this.g&&(this.response=u,ns(this))},n.ga=function(){this.g&&ns(this)};function ns(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Rn(u)}n.setRequestHeader=function(u,m){this.A.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Rn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(sn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Jl(u){let m="";return pe(u,function(_,T){m+=T,m+=":",m+=_,m+=`\r
`}),m}function Yi(u,m,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=Jl(_),typeof u=="string"?_!=null&&zn(_):Ue(u,m,_))}function He(u){ft.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(He,ft);var Xl=/^https?$/i,gh=["POST","PUT"];n=He.prototype,n.Fa=function(u){this.H=u},n.ea=function(u,m,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():$l.g(),this.g.onreadystatechange=C(y(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){rs(this,q);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var F in T)_.set(F,T[F]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const q of T.keys())_.set(q,T.get(q));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),F=c.FormData&&u instanceof c.FormData,!(Array.prototype.indexOf.call(gh,m,void 0)>=0)||T||F||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ne]of _)this.g.setRequestHeader(q,ne);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(q){rs(this,q)}};function rs(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,ss(u),Ar(u)}function ss(u){u.A||(u.A=!0,at(u,"complete"),at(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,at(this,"complete"),at(this,"abort"),Ar(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ar(this,!0)),He.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Sr(this):this.Xa())},n.Xa=function(){Sr(this)};function Sr(u){if(u.h&&typeof l<"u"){if(u.v&&Gn(u)==4)setTimeout(u.Ca.bind(u),0);else if(at(u,"readystatechange"),Gn(u)==4){u.h=!1;try{const q=u.ca();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var T;if(T=q===0){let ne=String(u.D).match(Ql)[1]||null;!ne&&c.self&&c.self.location&&(ne=c.self.location.protocol.slice(0,-1)),T=!Xl.test(ne?ne.toLowerCase():"")}_=T}if(_)at(u,"complete"),at(u,"success");else{u.o=6;try{var F=Gn(u)>2?u.g.statusText:""}catch{F=""}u.l=F+" ["+u.ca()+"]",ss(u)}}finally{Ar(u)}}}}function Ar(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const _=u.g;u.g=null,m||at(u,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Gn(u){return u.g?u.g.readyState:0}n.ca=function(){try{return Gn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),jl(m)}};function Zl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ia(u){const m={};u=(u.g&&Gn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(A(u[T]))continue;var _=qi(u[T]);const F=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=m[F]||[];m[F]=q,q.push(_)}oe(m,function(T){return T.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Ji(u){this.za=0,this.i=[],this.j=new Xr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Qn("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Qn("baseRetryDelayMs",5e3,u),this.Za=Qn("retryDelaySeedMs",1e4,u),this.Ta=Qn("forwardChannelMaxRetries",2,u),this.va=Qn("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Hi(u&&u.concurrentRequestLimit),this.Ba=new si,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ji.prototype,n.ka=8,n.I=1,n.connect=function(u,m,_,T){st(0),this.W=u,this.H=m||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.J=Sa(this,null,this.W),Rr(this)};function Xi(u){if(Zi(u),u.I==3){var m=u.V++,_=pn(u.J);if(Ue(_,"SID",u.M),Ue(_,"RID",m),Ue(_,"TYPE","terminate"),Yn(u,_),m=new fn(u,u.j,m),m.M=2,m.A=Ir(pn(_)),_=!1,c.navigator&&c.navigator.sendBeacon)try{_=c.navigator.sendBeacon(m.A.toString(),"")}catch{}!_&&c.Image&&(new Image().src=m.A,_=!0),_||(m.g=tu(m.j,null),m.g.ea(m.A)),m.F=Date.now(),Ys(m)}ai(u)}function on(u){u.g&&(oi(u),u.g.cancel(),u.g=null)}function Zi(u){on(u),u.v&&(c.clearTimeout(u.v),u.v=null),eo(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&c.clearTimeout(u.m),u.m=null)}function Rr(u){if(!fa(u.h)&&!u.m){u.m=!0;var m=u.Ea;Te||x(),Ce||(Te(),Ce=!0),P.add(m,u),u.D=0}}function eu(u,m){return Xs(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=Jr(y(u.Ea,u,m),no(u,u.D)),u.D++,!0)}n.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const F=new fn(this,this.j,u);let q=this.o;if(this.U&&(q?(q=L(q),xe(q,this.U)):q=this.U),this.u!==null||this.R||(F.J=q,q=null),this.S)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,m>4096){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=xa(this,F,m),_=pn(this.J),Ue(_,"RID",u),Ue(_,"CVER",22),this.G&&Ue(_,"X-HTTP-Session-Id",this.G),Yn(this,_),q&&(this.R?m="headers="+zn(Jl(q))+"&"+m:this.u&&Yi(_,this.u,q)),Ki(this.h,F),this.Ra&&Ue(_,"TYPE","init"),this.S?(Ue(_,"$req",m),Ue(_,"SID","null"),F.U=!0,An(F,_,null)):An(F,_,m),this.I=2}}else this.I==3&&(u?ii(this,u):this.i.length==0||fa(this.h)||ii(this))};function ii(u,m){var _;m?_=m.l:_=u.V++;const T=pn(u.J);Ue(T,"SID",u.M),Ue(T,"RID",_),Ue(T,"AID",u.K),Yn(u,T),u.u&&u.o&&Yi(T,u.u,u.o),_=new fn(u,u.j,_,u.D+1),u.u===null&&(_.J=u.o),m&&(u.i=m.G.concat(u.i)),m=xa(u,_,1e3),_.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Ki(u.h,_),An(_,T,m)}function Yn(u,m){u.H&&pe(u.H,function(_,T){Ue(m,T,_)}),u.l&&pe({},function(_,T){Ue(m,T,_)})}function xa(u,m,_){_=Math.min(u.i.length,_);const T=u.l?y(u.l.Ka,u.l,u):null;e:{var F=u.i;let Se=-1;for(;;){const lt=["count="+_];Se==-1?_>0?(Se=F[0].g,lt.push("ofs="+Se)):Se=0:lt.push("ofs="+Se);let $e=!0;for(let pt=0;pt<_;pt++){var q=F[pt].g;const ln=F[pt].map;if(q-=Se,q<0)Se=Math.max(0,F[pt].g-100),$e=!1;else try{q="req"+q+"_"||"";try{var ne=ln instanceof Map?ln:Object.entries(ln);for(const[Cr,Xn]of ne){let Zn=Xn;f(Xn)&&(Zn=Kr(Xn)),lt.push(q+Cr+"="+encodeURIComponent(Zn))}}catch(Cr){throw lt.push(q+"type="+encodeURIComponent("_badmap")),Cr}}catch{T&&T(ln)}}if($e){ne=lt.join("&");break e}}ne=void 0}return u=u.i.splice(0,_),m.G=u,ne}function Ot(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;Te||x(),Ce||(Te(),Ce=!0),P.add(m,u),u.A=0}}function Jn(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=Jr(y(u.Da,u),no(u,u.A)),u.A++,!0)}n.Da=function(){if(this.v=null,is(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=Jr(y(this.Wa,this),u)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),on(this),is(this))};function oi(u){u.B!=null&&(c.clearTimeout(u.B),u.B=null)}function is(u){u.g=new fn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=pn(u.na);Ue(m,"RID","rpc"),Ue(m,"SID",u.M),Ue(m,"AID",u.K),Ue(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&Ue(m,"TO",u.ia),Ue(m,"TYPE","xmlhttp"),Yn(u,m),u.u&&u.o&&Yi(m,u.u,u.o),u.O&&(u.g.H=u.O);var _=u.g;u=u.ba,_.M=1,_.A=Ir(pn(m)),_.u=null,_.R=!0,ha(_,u)}n.Va=function(){this.C!=null&&(this.C=null,on(this),Jn(this),st(19))};function eo(u){u.C!=null&&(c.clearTimeout(u.C),u.C=null)}function to(u,m){var _=null;if(u.g==m){eo(u),oi(u),u.g=null;var T=2}else if(pa(u.h,m))_=m.G,Zs(u.h,m),T=1;else return;if(u.I!=0){if(m.o)if(T==1){_=m.u?m.u.length:0,m=Date.now()-m.F;var F=u.D;T=Yr(),at(T,new ua(T,_)),Rr(u)}else Ot(u);else if(F=m.m,F==3||F==0&&m.X>0||!(T==1&&eu(u,m)||T==2&&Jn(u)))switch(_&&_.length>0&&(m=u.h,m.i=m.i.concat(_)),F){case 1:an(u,5);break;case 4:an(u,10);break;case 3:an(u,6);break;default:an(u,2)}}}function no(u,m){let _=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(_*=2),_*m}function an(u,m){if(u.j.info("Error code "+m),m==2){var _=y(u.bb,u),T=u.Ua;const F=!T;T=new Bn(T||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ei(T,"https"),Ir(T),F?Hn(T.toString(),_):Kn(T.toString(),_)}else st(2);u.I=0,u.l&&u.l.pa(m),ai(u),Zi(u)}n.bb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function ai(u){if(u.I=0,u.ja=[],u.l){const m=nn(u.h);(m.length!=0||u.i.length!=0)&&(W(u.ja,m),W(u.ja,u.i),u.h.i.length=0,V(u.i),u.i.length=0),u.l.oa()}}function Sa(u,m,_){var T=_ instanceof Bn?pn(_):new Bn(_);if(T.g!="")m&&(T.g=m+"."+T.g),$n(T,T.u);else{var F=c.location;T=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;const q=new Bn(null);T&&ei(q,T),m&&(q.g=m),F&&$n(q,F),_&&(q.h=_),T=q}return _=u.G,m=u.wa,_&&m&&Ue(T,_,m),Ue(T,"VER",u.ka),Yn(u,T),T}function tu(u,m,_){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new He(new xr({ab:_})):new He(u.ma),m.Fa(u.L),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function nu(){}n=nu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ro(){}ro.prototype.g=function(u,m){return new Ct(u,m)};function Ct(u,m){ft.call(this),this.g=new Ji(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!A(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!A(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new os(this)}I(Ct,ft),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Xi(this.g)},Ct.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.v&&(_={},_.__data__=Kr(u),u=_);m.i.push(new ph(m.Ya++,u)),m.I==3&&Rr(m)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Xi(this.g),delete this.g,Ct.Z.N.call(this)};function ru(u){zi.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}I(ru,zi);function su(){la.call(this),this.status=1}I(su,la);function os(u){this.g=u}I(os,nu),os.prototype.ra=function(){at(this.g,"a")},os.prototype.qa=function(u){at(this.g,new ru(u))},os.prototype.pa=function(u){at(this.g,new su)},os.prototype.oa=function(){at(this.g,"b")},ro.prototype.createWebChannel=ro.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,s0=function(){return new ro},r0=function(){return Yr()},n0=Sn,mf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Zr.NO_ERROR=0,Zr.TIMEOUT=8,Zr.HTTP_ERROR=6,uc=Zr,es.COMPLETE="complete",t0=es,Fl.EventType=Qr,Qr.OPEN="a",Qr.CLOSE="b",Qr.ERROR="c",Qr.MESSAGE="d",ft.prototype.listen=ft.prototype.J,rl=Fl,He.prototype.listenOnce=He.prototype.K,He.prototype.getLastError=He.prototype.Ha,He.prototype.getLastErrorCode=He.prototype.ya,He.prototype.getStatus=He.prototype.ca,He.prototype.getResponseJson=He.prototype.La,He.prototype.getResponseText=He.prototype.la,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Fa,e0=He}).apply(typeof Zu<"u"?Zu:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xo="12.11.0";function lR(n){Xo=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new Bf("@firebase/firestore");function Ao(){return Ai.logLevel}function ue(n,...e){if(Ai.logLevel<=De.DEBUG){const t=e.map(Zf);Ai.debug(`Firestore (${Xo}): ${n}`,...t)}}function Br(n,...e){if(Ai.logLevel<=De.ERROR){const t=e.map(Zf);Ai.error(`Firestore (${Xo}): ${n}`,...t)}}function Ri(n,...e){if(Ai.logLevel<=De.WARN){const t=e.map(Zf);Ai.warn(`Firestore (${Xo}): ${n}`,...t)}}function Zf(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,i0(n,s,t)}function i0(n,e,t){let s=`FIRESTORE (${Xo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Br(s),new Error(s)}function Be(n,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,n||i0(e,o,s)}function Ae(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends yr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(zt.UNAUTHENTICATED)))}shutdown(){}}class cR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class hR{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Fr,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Fr)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Be(typeof s.accessToken=="string",31837,{l:s}),new o0(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string",2055,{h:e}),new zt(e)}}class dR{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class fR{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new dR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class By{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pR{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Be(this.o===void 0,3512);const s=l=>{l.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ue("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new By(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new By(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=mR(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function be(n,e){return n<e?-1:n>e?1:0}function gf(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const o=n.charAt(s),l=e.charAt(s);if(o!==l)return Yd(o)===Yd(l)?be(o,l):Yd(o)?1:-1}return be(n.length,e.length)}const gR=55296,yR=57343;function Yd(n){const e=n.charCodeAt(0);return e>=gR&&e<=yR}function Uo(n,e,t){return n.length===e.length&&n.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="__name__";class sr{constructor(e,t,s){t===void 0?t=0:t>e.length&&we(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&we(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return sr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof sr?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=sr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return be(e.length,t.length)}static compareSegments(e,t){const s=sr.isNumericId(e),o=sr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?sr.extractNumericId(e).compare(sr.extractNumericId(t)):gf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return bs.fromString(e.substring(4,e.length-2))}}class Qe extends sr{construct(e,t,s){return new Qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(H.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Qe(t)}static emptyPath(){return new Qe([])}}const _R=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends sr{construct(e,t,s){return new Dt(e,t,s)}static isValidIdentifier(e){return _R.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$y}static keyField(){return new Dt([$y])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ie(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ie(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else f==="`"?(c=!c,o++):f!=="."||c?(s+=f,o++):(l(),o++)}if(l(),c)throw new ie(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Qe.fromString(e))}static fromName(e){return new ge(Qe.fromString(e).popFirst(5))}static empty(){return new ge(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Qe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(n,e,t){if(!t)throw new ie(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function vR(n,e,t,s){if(e===!0&&s===!0)throw new ie(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function qy(n){if(!ge.isDocumentKey(n))throw new ie(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Wy(n){if(ge.isDocumentKey(n))throw new ie(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function l0(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Hc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we(12329,{type:typeof n})}function pr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ie(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hc(n);throw new ie(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n,e){const t={typeString:n};return e&&(t.value=e),t}function Pl(n,e){if(!l0(n))throw new ie(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(o&&typeof c!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ie(H.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=-62135596800,Ky=1e6;class Ze{static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Ky);return new Ze(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Hy)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ky}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ze._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Pl(e,Ze._jsonSchema))return new Ze(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Hy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ze._jsonSchemaVersion="firestore/timestamp/1.0",Ze._jsonSchema={type:_t("string",Ze._jsonSchemaVersion),seconds:_t("number"),nanoseconds:_t("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new Ze(0,0))}static max(){return new Ie(new Ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=-1;function wR(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(s===1e9?new Ze(t+1,0):new Ze(t,s));return new Ms(o,ge.empty(),e)}function ER(n){return new Ms(n.readTime,n.key,yl)}class Ms{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ms(Ie.min(),ge.empty(),yl)}static max(){return new Ms(Ie.max(),ge.empty(),yl)}}function TR(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(n.documentKey,e.documentKey),t!==0?t:be(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==IR)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,s)=>{t(e)}))}static reject(e){return new K(((t,s)=>{s(e)}))}static waitFor(e){return new K(((t,s)=>{let o=0,l=0,c=!1;e.forEach((f=>{++o,f.next((()=>{++l,c&&l===o&&t()}),(g=>s(g)))})),c=!0,l===o&&t()}))}static or(e){let t=K.resolve(!1);for(const s of e)t=t.next((o=>o?K.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new K(((s,o)=>{const l=e.length,c=new Array(l);let f=0;for(let g=0;g<l;g++){const y=g;t(e[y]).next((E=>{c[y]=E,++f,f===l&&s(c)}),(E=>o(E)))}}))}static doWhile(e,t){return new K(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function SR(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ea(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Kc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=-1;function Gc(n){return n==null}function Sc(n){return n===0&&1/n==-1/0}function AR(n){return typeof n=="number"&&Number.isInteger(n)&&!Sc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="";function RR(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Gy(e)),e=CR(n.get(t),e);return Gy(e)}function CR(n,e){let t=e;const s=n.length;for(let o=0;o<s;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case u0:t+="";break;default:t+=l}}return t}function Gy(n){return n+u0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ws(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function c0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ec(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ec(this.root,e,this.comparator,!1)}getReverseIterator(){return new ec(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ec(this.root,e,this.comparator,!0)}}class ec{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Nt.RED,this.left=o??Nt.EMPTY,this.right=l??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Nt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yy(this.data.getIterator())}getIteratorFrom(e){return new Yy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Tt(this.comparator);return t.data=e,t}}class Yy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new dn([])}unionWith(e){let t=new Tt(Dt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new dn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Uo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new h0("Invalid base64 string: "+l):l}})(e);return new Vt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l})(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const kR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function js(n){if(Be(!!n,39018),typeof n=="string"){let e=0;const t=kR.exec(n);if(Be(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ct(n.seconds),nanos:ct(n.nanos)}}function ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Fs(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="server_timestamp",f0="__type__",p0="__previous_value__",m0="__local_write_time__";function np(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[f0])==null?void 0:s.stringValue)===d0}function Qc(n){const e=n.mapValue.fields[p0];return np(e)?Qc(e):e}function _l(n){const e=js(n.mapValue.fields[m0].timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,t,s,o,l,c,f,g,y,E,I){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=E,this.apiKey=I}}const Ac="(default)";class vl{constructor(e,t){this.projectId=e,this.database=t||Ac}static empty(){return new vl("","")}get isDefaultDatabase(){return this.database===Ac}isEqual(e){return e instanceof vl&&e.projectId===this.projectId&&e.database===this.database}}function NR(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new ie(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vl(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="__type__",DR="__max__",tc={mapValue:{}},y0="__vector__",Rc="value";function Us(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?np(n)?4:VR(n)?9007199254740991:bR(n)?10:11:we(28295,{value:n})}function mr(n,e){if(n===e)return!0;const t=Us(n);if(t!==Us(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return _l(n).isEqual(_l(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=js(o.timestampValue),f=js(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Fs(o.bytesValue).isEqual(Fs(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return ct(o.geoPointValue.latitude)===ct(l.geoPointValue.latitude)&&ct(o.geoPointValue.longitude)===ct(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ct(o.integerValue)===ct(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=ct(o.doubleValue),f=ct(l.doubleValue);return c===f?Sc(c)===Sc(f):isNaN(c)&&isNaN(f)}return!1})(n,e);case 9:return Uo(n.arrayValue.values||[],e.arrayValue.values||[],mr);case 10:case 11:return(function(o,l){const c=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Qy(c)!==Qy(f))return!1;for(const g in c)if(c.hasOwnProperty(g)&&(f[g]===void 0||!mr(c[g],f[g])))return!1;return!0})(n,e);default:return we(52216,{left:n})}}function wl(n,e){return(n.values||[]).find((t=>mr(t,e)))!==void 0}function zo(n,e){if(n===e)return 0;const t=Us(n),s=Us(e);if(t!==s)return be(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=ct(l.integerValue||l.doubleValue),g=ct(c.integerValue||c.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(n,e);case 3:return Jy(n.timestampValue,e.timestampValue);case 4:return Jy(_l(n),_l(e));case 5:return gf(n.stringValue,e.stringValue);case 6:return(function(l,c){const f=Fs(l),g=Fs(c);return f.compareTo(g)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),g=c.split("/");for(let y=0;y<f.length&&y<g.length;y++){const E=be(f[y],g[y]);if(E!==0)return E}return be(f.length,g.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=be(ct(l.latitude),ct(c.latitude));return f!==0?f:be(ct(l.longitude),ct(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Xy(n.arrayValue,e.arrayValue);case 10:return(function(l,c){var C,V,W,z;const f=l.fields||{},g=c.fields||{},y=(C=f[Rc])==null?void 0:C.arrayValue,E=(V=g[Rc])==null?void 0:V.arrayValue,I=be(((W=y==null?void 0:y.values)==null?void 0:W.length)||0,((z=E==null?void 0:E.values)==null?void 0:z.length)||0);return I!==0?I:Xy(y,E)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===tc.mapValue&&c===tc.mapValue)return 0;if(l===tc.mapValue)return 1;if(c===tc.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),y=c.fields||{},E=Object.keys(y);g.sort(),E.sort();for(let I=0;I<g.length&&I<E.length;++I){const C=gf(g[I],E[I]);if(C!==0)return C;const V=zo(f[g[I]],y[E[I]]);if(V!==0)return V}return be(g.length,E.length)})(n.mapValue,e.mapValue);default:throw we(23264,{he:t})}}function Jy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return be(n,e);const t=js(n),s=js(e),o=be(t.seconds,s.seconds);return o!==0?o:be(t.nanos,s.nanos)}function Xy(n,e){const t=n.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=zo(t[o],s[o]);if(l)return l}return be(t.length,s.length)}function Bo(n){return yf(n)}function yf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=js(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Fs(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ge.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=yf(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of s)l?l=!1:o+=",",o+=`${c}:${yf(t.fields[c])}`;return o+"}"})(n.mapValue):we(61005,{value:n})}function cc(n){switch(Us(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qc(n);return e?16+cc(e):16;case 5:return 2*n.stringValue.length;case 6:return Fs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+cc(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let o=0;return Ws(s.fields,((l,c)=>{o+=l.length+cc(c)})),o})(n.mapValue);default:throw we(13486,{value:n})}}function Zy(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function _f(n){return!!n&&"integerValue"in n}function rp(n){return!!n&&"arrayValue"in n}function e_(n){return!!n&&"nullValue"in n}function t_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function hc(n){return!!n&&"mapValue"in n}function bR(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[g0])==null?void 0:s.stringValue)===y0}function ll(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ws(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=ll(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ll(n.arrayValue.values[t]);return e}return{...n}}function VR(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===DR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!hc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ll(t)}setAll(e){let t=Dt.emptyPath(),s={},o=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=f.popLast()}c?s[f.lastSegment()]=ll(c):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());hc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];hc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ws(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new en(ll(this.value))}}function _0(n){const e=[];return Ws(n.fields,((t,s)=>{const o=new Dt([t]);if(hc(s)){const l=_0(s.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)})),new dn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,s,o,l,c,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new Bt(e,0,Ie.min(),Ie.min(),Ie.min(),en.empty(),0)}static newFoundDocument(e,t,s,o){return new Bt(e,1,t,Ie.min(),s,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Ie.min(),Ie.min(),en.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Ie.min(),Ie.min(),en.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,t){this.position=e,this.inclusive=t}}function n_(n,e,t){let s=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?s=ge.comparator(ge.fromName(c.referenceValue),t.key):s=zo(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function r_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!mr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t="asc"){this.field=e,this.dir=t}}function OR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{}class yt extends v0{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new MR(e,t,s):t==="array-contains"?new UR(e,s):t==="in"?new zR(e,s):t==="not-in"?new BR(e,s):t==="array-contains-any"?new $R(e,s):new yt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new jR(e,s):new FR(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(zo(t,this.value)):t!==null&&Us(this.value)===Us(t)&&this.matchesComparison(zo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends v0{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Fn(e,t)}matches(e){return w0(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function w0(n){return n.op==="and"}function E0(n){return LR(n)&&w0(n)}function LR(n){for(const e of n.filters)if(e instanceof Fn)return!1;return!0}function vf(n){if(n instanceof yt)return n.field.canonicalString()+n.op.toString()+Bo(n.value);if(E0(n))return n.filters.map((e=>vf(e))).join(",");{const e=n.filters.map((t=>vf(t))).join(",");return`${n.op}(${e})`}}function T0(n,e){return n instanceof yt?(function(s,o){return o instanceof yt&&s.op===o.op&&s.field.isEqual(o.field)&&mr(s.value,o.value)})(n,e):n instanceof Fn?(function(s,o){return o instanceof Fn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,c,f)=>l&&T0(c,o.filters[f])),!0):!1})(n,e):void we(19439)}function I0(n){return n instanceof yt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Bo(t.value)}`})(n):n instanceof Fn?(function(t){return t.op.toString()+" {"+t.getFilters().map(I0).join(" ,")+"}"})(n):"Filter"}class MR extends yt{constructor(e,t,s){super(e,t,s),this.key=ge.fromName(s.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class jR extends yt{constructor(e,t){super(e,"in",t),this.keys=x0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class FR extends yt{constructor(e,t){super(e,"not-in",t),this.keys=x0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function x0(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>ge.fromName(s.referenceValue)))}class UR extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return rp(t)&&wl(t.arrayValue,this.value)}}class zR extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&wl(this.value.arrayValue,t)}}class BR extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(wl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!wl(this.value.arrayValue,t)}}class $R extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!rp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>wl(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,t=null,s=[],o=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=c,this.endAt=f,this.Te=null}}function s_(n,e=null,t=[],s=[],o=null,l=null,c=null){return new qR(n,e,t,s,o,l,c)}function sp(n){const e=Ae(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>vf(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Gc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Bo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Bo(s))).join(",")),e.Te=t}return e.Te}function ip(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!OR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!T0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!r_(n.startAt,e.startAt)&&r_(n.endAt,e.endAt)}function wf(n){return ge.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t=null,s=[],o=[],l=null,c="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=g,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function WR(n,e,t,s,o,l,c,f){return new ta(n,e,t,s,o,l,c,f)}function op(n){return new ta(n)}function i_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function HR(n){return ge.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function S0(n){return n.collectionGroup!==null}function ul(n){const e=Ae(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new Tt(Dt.comparator);return c.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new El(l,s))})),t.has(Dt.keyField().canonicalString())||e.Ee.push(new El(Dt.keyField(),s))}return e.Ee}function cr(n){const e=Ae(n);return e.Ie||(e.Ie=KR(e,ul(n))),e.Ie}function KR(n,e){if(n.limitType==="F")return s_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new El(o.field,l)}));const t=n.endAt?new Cc(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Cc(n.startAt.position,n.startAt.inclusive):null;return s_(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Ef(n,e){const t=n.filters.concat([e]);return new ta(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function GR(n,e){const t=n.explicitOrderBy.concat([e]);return new ta(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Tf(n,e,t){return new ta(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Yc(n,e){return ip(cr(n),cr(e))&&n.limitType===e.limitType}function A0(n){return`${sp(cr(n))}|lt:${n.limitType}`}function Ro(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>I0(o))).join(", ")}]`),Gc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Bo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Bo(o))).join(",")),`Target(${s})`})(cr(n))}; limitType=${n.limitType})`}function Jc(n,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ge.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,o){for(const l of ul(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(s,o){return!(s.startAt&&!(function(c,f,g){const y=n_(c,f,g);return c.inclusive?y<=0:y<0})(s.startAt,ul(s),o)||s.endAt&&!(function(c,f,g){const y=n_(c,f,g);return c.inclusive?y>=0:y>0})(s.endAt,ul(s),o))})(n,e)}function QR(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function R0(n){return(e,t)=>{let s=!1;for(const o of ul(n)){const l=YR(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function YR(n,e,t){const s=n.field.isKeyField()?ge.comparator(e.key,t.key):(function(l,c,f){const g=c.data.field(l),y=f.data.field(l);return g!==null&&y!==null?zo(g,y):we(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return we(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ws(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return c0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=new rt(ge.comparator);function $r(){return JR}const C0=new rt(ge.comparator);function sl(...n){let e=C0;for(const t of n)e=e.insert(t.key,t);return e}function k0(n){let e=C0;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Ei(){return cl()}function P0(){return cl()}function cl(){return new bi((n=>n.toString()),((n,e)=>n.isEqual(e)))}const XR=new rt(ge.comparator),ZR=new Tt(ge.comparator);function Ve(...n){let e=ZR;for(const t of n)e=e.add(t);return e}const e1=new Tt(be);function t1(){return e1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sc(e)?"-0":e}}function N0(n){return{integerValue:""+n}}function n1(n,e){return AR(e)?N0(e):ap(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(){this._=void 0}}function r1(n,e,t){return n instanceof Tl?(function(o,l){const c={fields:{[f0]:{stringValue:d0},[m0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&np(l)&&(l=Qc(l)),l&&(c.fields[p0]=l),{mapValue:c}})(t,e):n instanceof Il?b0(n,e):n instanceof xl?V0(n,e):(function(o,l){const c=D0(o,l),f=o_(c)+o_(o.Ae);return _f(c)&&_f(o.Ae)?N0(f):ap(o.serializer,f)})(n,e)}function s1(n,e,t){return n instanceof Il?b0(n,e):n instanceof xl?V0(n,e):t}function D0(n,e){return n instanceof kc?(function(s){return _f(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Tl extends Xc{}class Il extends Xc{constructor(e){super(),this.elements=e}}function b0(n,e){const t=O0(e);for(const s of n.elements)t.some((o=>mr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class xl extends Xc{constructor(e){super(),this.elements=e}}function V0(n,e){let t=O0(e);for(const s of n.elements)t=t.filter((o=>!mr(o,s)));return{arrayValue:{values:t}}}class kc extends Xc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function o_(n){return ct(n.integerValue||n.doubleValue)}function O0(n){return rp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,t){this.field=e,this.transform=t}}function o1(n,e){return n.field.isEqual(e.field)&&(function(s,o){return s instanceof Il&&o instanceof Il||s instanceof xl&&o instanceof xl?Uo(s.elements,o.elements,mr):s instanceof kc&&o instanceof kc?mr(s.Ae,o.Ae):s instanceof Tl&&o instanceof Tl})(n.transform,e.transform)}class a1{constructor(e,t){this.version=e,this.transformResults=t}}class tn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Zc{}function L0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new eh(n.key,tn.none()):new Nl(n.key,n.data,tn.none());{const t=n.data,s=en.empty();let o=new Tt(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),o=o.add(l)}return new Hs(n.key,s,new dn(o.toArray()),tn.none())}}function l1(n,e,t){n instanceof Nl?(function(o,l,c){const f=o.value.clone(),g=l_(o.fieldTransforms,l,c.transformResults);f.setAll(g),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Hs?(function(o,l,c){if(!dc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const f=l_(o.fieldTransforms,l,c.transformResults),g=l.data;g.setAll(M0(o)),g.setAll(f),l.convertToFoundDocument(c.version,g).setHasCommittedMutations()})(n,e,t):(function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function hl(n,e,t,s){return n instanceof Nl?(function(l,c,f,g){if(!dc(l.precondition,c))return f;const y=l.value.clone(),E=u_(l.fieldTransforms,g,c);return y.setAll(E),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null})(n,e,t,s):n instanceof Hs?(function(l,c,f,g){if(!dc(l.precondition,c))return f;const y=u_(l.fieldTransforms,g,c),E=c.data;return E.setAll(M0(l)),E.setAll(y),c.convertToFoundDocument(c.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((I=>I.field)))})(n,e,t,s):(function(l,c,f){return dc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(n,e,t)}function u1(n,e){let t=null;for(const s of n.fieldTransforms){const o=e.data.field(s.field),l=D0(s.transform,o||null);l!=null&&(t===null&&(t=en.empty()),t.set(s.field,l))}return t||null}function a_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Uo(s,o,((l,c)=>o1(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Nl extends Zc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Hs extends Zc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function M0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function l_(n,e,t){const s=new Map;Be(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,f=e.data.field(l.field);s.set(l.field,s1(c,f,t[o]))}return s}function u_(n,e,t){const s=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);s.set(o.field,r1(l,c,e))}return s}class eh extends Zc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class c1 extends Zc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&l1(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=hl(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=hl(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=P0();return this.mutations.forEach((o=>{const l=e.get(o.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(o.key)?null:f;const g=L0(c,f);g!==null&&s.set(o.key,g),c.isValidDocument()||c.convertToNoDocument(Ie.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ve())}isEqual(e){return this.batchId===e.batchId&&Uo(this.mutations,e.mutations,((t,s)=>a_(t,s)))&&Uo(this.baseMutations,e.baseMutations,((t,s)=>a_(t,s)))}}class lp{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Be(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return XR})();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,s[c].version);return new lp(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt,Le;function p1(n){switch(n){case H.OK:return we(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return we(15467,{code:n})}}function j0(n){if(n===void 0)return Br("GRPC error has no .code"),H.UNKNOWN;switch(n){case gt.OK:return H.OK;case gt.CANCELLED:return H.CANCELLED;case gt.UNKNOWN:return H.UNKNOWN;case gt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case gt.INTERNAL:return H.INTERNAL;case gt.UNAVAILABLE:return H.UNAVAILABLE;case gt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case gt.NOT_FOUND:return H.NOT_FOUND;case gt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case gt.ABORTED:return H.ABORTED;case gt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case gt.DATA_LOSS:return H.DATA_LOSS;default:return we(39323,{code:n})}}(Le=gt||(gt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=new bs([4294967295,4294967295],0);function c_(n){const e=m1().encode(n),t=new Zv;return t.update(e),new Uint8Array(t.digest())}function h_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new bs([t,s],0),new bs([o,l],0)]}class up{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new il(`Invalid padding: ${t}`);if(s<0)throw new il(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new il(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new il(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=bs.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(bs.fromNumber(s)));return o.compare(g1)===1&&(o=new bs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=c_(e),[s,o]=h_(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,o,l);if(!this.we(c))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new up(l,o,t);return s.forEach((f=>c.insert(f))),c}insert(e){if(this.ge===0)return;const t=c_(e),[s,o]=h_(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,o,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class il extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Dl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new th(Ie.min(),o,new rt(be),$r(),Ve())}}class Dl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Dl(s,t,Ve(),Ve(),Ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class F0{constructor(e,t){this.targetId=e,this.Ce=t}}class U0{constructor(e,t,s=Vt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class d_{constructor(){this.ve=0,this.Fe=f_(),this.Me=Vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ve(),t=Ve(),s=Ve();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:we(38017,{changeType:l})}})),new Dl(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=f_()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Be(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class y1{constructor(e){this.Ge=e,this.ze=new Map,this.je=$r(),this.Je=nc(),this.He=nc(),this.Ze=new rt(be)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:we(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(wf(l))if(s===0){const c=new ge(l.path);this.et(t,c,Bt.newNoDocument(c,Ie.min()))}else Be(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const f=this.ut(e),g=f?this.ct(f,e,c):1;if(g!==0){this.it(t);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let c,f;try{c=Fs(s).toUint8Array()}catch(g){if(g instanceof h0)return Ri("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new up(c,o,l)}catch(g){return Ri(g instanceof il?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.ge===0?null:f}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const c=this.Ge.ht(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const f=this.ot(c);if(f){if(l.current&&wf(f.target)){const g=new ge(f.target.path);this.Et(g).has(c)||this.It(c,g)||this.et(c,g,Bt.newNoDocument(g,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let s=Ve();this.He.forEach(((l,c)=>{let f=!0;c.forEachWhile((g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(s=s.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const o=new th(e,t,this.Ze,this.je,s);return this.je=$r(),this.Je=nc(),this.He=nc(),this.Ze=new rt(be),o}Ye(e,t){if(!this.rt(e))return;const s=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.It(e,t)?o.Ke(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new d_,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new Tt(be),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Tt(be),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new d_),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function nc(){return new rt(ge.comparator)}function f_(){return new rt(ge.comparator)}const _1={asc:"ASCENDING",desc:"DESCENDING"},v1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},w1={and:"AND",or:"OR"};class E1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function If(n,e){return n.useProto3Json||Gc(e)?e:{value:e}}function Pc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function z0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function T1(n,e){return Pc(n,e.toTimestamp())}function hr(n){return Be(!!n,49232),Ie.fromTimestamp((function(t){const s=js(t);return new Ze(s.seconds,s.nanos)})(n))}function cp(n,e){return xf(n,e).canonicalString()}function xf(n,e){const t=(function(o){return new Qe(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function B0(n){const e=Qe.fromString(n);return Be(K0(e),10190,{key:e.toString()}),e}function Sf(n,e){return cp(n.databaseId,e.path)}function Jd(n,e){const t=B0(e);if(t.get(1)!==n.databaseId.projectId)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ge(q0(t))}function $0(n,e){return cp(n.databaseId,e)}function I1(n){const e=B0(n);return e.length===4?Qe.emptyPath():q0(e)}function Af(n){return new Qe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function q0(n){return Be(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function p_(n,e,t){return{name:Sf(n,e),fields:t.value.mapValue.fields}}function x1(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:we(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,E){return y.useProto3Json?(Be(E===void 0||typeof E=="string",58123),Vt.fromBase64String(E||"")):(Be(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Vt.fromUint8Array(E||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(y){const E=y.code===void 0?H.UNKNOWN:j0(y.code);return new ie(E,y.message||"")})(c);t=new U0(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Jd(n,s.document.name),l=hr(s.document.updateTime),c=s.document.createTime?hr(s.document.createTime):Ie.min(),f=new en({mapValue:{fields:s.document.fields}}),g=Bt.newFoundDocument(o,l,c,f),y=s.targetIds||[],E=s.removedTargetIds||[];t=new fc(y,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Jd(n,s.document),l=s.readTime?hr(s.readTime):Ie.min(),c=Bt.newNoDocument(o,l),f=s.removedTargetIds||[];t=new fc([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Jd(n,s.document),l=s.removedTargetIds||[];t=new fc([],l,o,null)}else{if(!("filter"in e))return we(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,c=new f1(o,l),f=s.targetId;t=new F0(f,c)}}return t}function S1(n,e){let t;if(e instanceof Nl)t={update:p_(n,e.key,e.value)};else if(e instanceof eh)t={delete:Sf(n,e.key)};else if(e instanceof Hs)t={update:p_(n,e.key,e.data),updateMask:V1(e.fieldMask)};else{if(!(e instanceof c1))return we(16599,{dt:e.type});t={verify:Sf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,c){const f=c.transform;if(f instanceof Tl)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Il)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof xl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof kc)return{fieldPath:c.field.canonicalString(),increment:f.Ae};throw we(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:T1(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:we(27497)})(n,e.precondition)),t}function A1(n,e){return n&&n.length>0?(Be(e!==void 0,14353),n.map((t=>(function(o,l){let c=o.updateTime?hr(o.updateTime):hr(l);return c.isEqual(Ie.min())&&(c=hr(l)),new a1(c,o.transformResults||[])})(t,e)))):[]}function R1(n,e){return{documents:[$0(n,e.path)]}}function C1(n,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=$0(n,o);const l=(function(y){if(y.length!==0)return H0(Fn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(y){if(y.length!==0)return y.map((E=>(function(C){return{field:Co(C.field),direction:N1(C.dir)}})(E)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=If(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function k1(n){let e=I1(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Be(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(I){const C=W0(I);return C instanceof Fn&&E0(C)?C.getFilters():[C]})(t.where));let c=[];t.orderBy&&(c=(function(I){return I.map((C=>(function(W){return new El(ko(W.field),(function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(C)))})(t.orderBy));let f=null;t.limit&&(f=(function(I){let C;return C=typeof I=="object"?I.value:I,Gc(C)?null:C})(t.limit));let g=null;t.startAt&&(g=(function(I){const C=!!I.before,V=I.values||[];return new Cc(V,C)})(t.startAt));let y=null;return t.endAt&&(y=(function(I){const C=!I.before,V=I.values||[];return new Cc(V,C)})(t.endAt)),WR(e,o,c,l,f,"F",g,y)}function P1(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function W0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ko(t.unaryFilter.field);return yt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ko(t.unaryFilter.field);return yt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=ko(t.unaryFilter.field);return yt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=ko(t.unaryFilter.field);return yt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}})(n):n.fieldFilter!==void 0?(function(t){return yt.create(ko(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Fn.create(t.compositeFilter.filters.map((s=>W0(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we(1026)}})(t.compositeFilter.op))})(n):we(30097,{filter:n})}function N1(n){return _1[n]}function D1(n){return v1[n]}function b1(n){return w1[n]}function Co(n){return{fieldPath:n.canonicalString()}}function ko(n){return Dt.fromServerFormat(n.fieldPath)}function H0(n){return n instanceof yt?(function(t){if(t.op==="=="){if(t_(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NAN"}};if(e_(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(t_(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NOT_NAN"}};if(e_(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Co(t.field),op:D1(t.op),value:t.value}}})(n):n instanceof Fn?(function(t){const s=t.getFilters().map((o=>H0(o)));return s.length===1?s[0]:{compositeFilter:{op:b1(t.op),filters:s}}})(n):we(54877,{filter:n})}function V1(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function K0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function G0(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t,s,o,l=Ie.min(),c=Ie.min(),f=Vt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new Cs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e){this.yt=e}}function L1(n){const e=k1({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Tf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(){this.bn=new j1}addToCollectionParentIndex(e,t){return this.bn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Ms.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Ms.min())}updateCollectionGroup(e,t,s){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class j1{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Tt(Qe.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Tt(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Q0=41943040;class Zt{static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(Q0,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new $o(0)}static ar(){return new $o(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="LruGarbageCollector",F1=1048576;function y_([n,e],[t,s]){const o=be(n,t);return o===0?be(e,s):o}class U1{constructor(e){this.Pr=e,this.buffer=new Tt(y_),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();y_(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class z1{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ue(g_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ea(t)?ue(g_,"Ignoring IndexedDB error during garbage collection: ",t):await Zo(t)}await this.Ar(3e5)}))}}class B1{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return K.resolve(Kc.ce);const s=new U1(t);return this.Vr.forEachTarget(e,(o=>s.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Ir(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(m_)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),m_):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,l,c,f,g,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,c=Date.now(),this.nthSequenceNumber(e,o)))).next((I=>(s=I,f=Date.now(),this.removeTargets(e,s,t)))).next((I=>(l=I,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((I=>(y=Date.now(),Ao()<=De.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-E}ms
	Determined least recently used ${o} in `+(f-c)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${I} documents in `+(y-g)+`ms
Total Duration: ${y-E}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:I}))))}}function $1(n,e){return new B1(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(){this.changes=new bi((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?K.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&hl(s.mutation,o,dn.empty(),Ze.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ve()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ve()){const o=Ei();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let c=sl();return l.forEach(((f,g)=>{c=c.insert(f,g.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=Ei();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ve())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,s,o){let l=$r();const c=cl(),f=(function(){return cl()})();return t.forEach(((g,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Hs)?l=l.insert(y.key,y):E!==void 0?(c.set(y.key,E.mutation.getFieldMask()),hl(E.mutation,y,E.mutation.getFieldMask(),Ze.now())):c.set(y.key,dn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((y,E)=>c.set(y,E))),t.forEach(((y,E)=>f.set(y,new W1(E,c.get(y)??null)))),f)))}recalculateAndSaveOverlays(e,t){const s=cl();let o=new rt(((c,f)=>c-f)),l=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((g=>{const y=t.get(g);if(y===null)return;let E=s.get(g)||dn.empty();E=f.applyToLocalView(y,E),s.set(g,E);const I=(o.get(f.batchId)||Ve()).add(g);o=o.insert(f.batchId,I)}))})).next((()=>{const c=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),y=g.key,E=g.value,I=P0();E.forEach((C=>{if(!l.has(C)){const V=L0(t.get(C),s.get(C));V!==null&&I.set(C,V),l=l.add(C)}})),c.push(this.documentOverlayCache.saveOverlays(e,y,I))}return K.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return HR(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):S0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):K.resolve(Ei());let f=yl,g=l;return c.next((y=>K.forEach(y,((E,I)=>(f<I.largestBatchId&&(f=I.largestBatchId),l.get(E)?K.resolve():this.remoteDocumentCache.getEntry(e,E).next((C=>{g=g.insert(E,C)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,g,y,Ve()))).next((E=>({batchId:f,changes:k0(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next((s=>{let o=sl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let c=sl();return this.indexManager.getCollectionParents(e,l).next((f=>K.forEach(f,(g=>{const y=(function(I,C){return new ta(C,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next((E=>{E.forEach(((I,C)=>{c=c.insert(I,C)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((c=>{l.forEach(((g,y)=>{const E=y.getKey();c.get(E)===null&&(c=c.insert(E,Bt.newInvalidDocument(E)))}));let f=sl();return c.forEach(((g,y)=>{const E=l.get(g);E!==void 0&&hl(E.mutation,y,dn.empty(),Ze.now()),Jc(t,y)&&(f=f.insert(g,y))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return K.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:hr(o.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:L1(o.bundledQuery),readTime:hr(o.readTime)}})(t)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(){this.overlays=new rt(ge.comparator),this.Lr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ei();return K.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.St(e,t,l)})),K.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(s)),K.resolve()}getOverlaysForCollection(e,t,s){const o=Ei(),l=t.length+1,c=new ge(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const g=f.getNext().value,y=g.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new rt(((y,E)=>y-E));const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>s){let E=l.get(y.largestBatchId);E===null&&(E=Ei(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const f=Ei(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,E)=>f.set(y,E))),!(f.size()>=o)););return K.resolve(f)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const c=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new d1(t,s));let l=this.Lr.get(t);l===void 0&&(l=Ve(),this.Lr.set(t,l)),this.Lr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(){this.kr=new Tt(At.qr),this.Kr=new Tt(At.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new At(e,t);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new At(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new ge(new Qe([])),s=new At(t,e),o=new At(t,e+1),l=[];return this.Kr.forEachInRange([s,o],(c=>{this.Wr(c),l.push(c.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new ge(new Qe([])),s=new At(t,e),o=new At(t,e+1);let l=Ve();return this.Kr.forEachInRange([s,o],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new At(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class At{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return ge.comparator(e.key,t.key)||be(e.Jr,t.Jr)}static Ur(e,t){return be(e.Jr,t.Jr)||ge.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new Tt(At.qr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new h1(l,t,s,o);this.mutationQueue.push(c);for(const f of o)this.Hr=this.Hr.add(new At(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return K.resolve(c)}lookupMutationBatch(e,t){return K.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?tp:this.Yn-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),l=[];return this.Hr.forEachInRange([s,o],(c=>{const f=this.Zr(c.Jr);l.push(f)})),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Tt(be);return t.forEach((o=>{const l=new At(o,0),c=new At(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([l,c],(f=>{s=s.add(f.Jr)}))})),K.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;ge.isDocumentKey(l)||(l=l.child(""));const c=new At(new ge(l),0);let f=new Tt(be);return this.Hr.forEachWhile((g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(f=f.add(g.Jr)),!0)}),c),K.resolve(this.Yr(f))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Be(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return K.forEach(t.mutations,(o=>{const l=new At(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new At(t,0),o=this.Hr.firstAfterOrEqual(s);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e){this.ti=e,this.docs=(function(){return new rt(ge.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,c=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return K.resolve(s?s.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let s=$r();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))})),K.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=$r();const c=t.path,f=new ge(c.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:y,value:{document:E}}=g.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||TR(ER(E),s)<=0||(o.has(E.key)||Jc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,s,o){we(9500)}ni(e,t){return K.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new X1(this)}getSize(e){return K.resolve(this.size)}}class X1 extends q1{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),K.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e){this.persistence=e,this.ri=new bi((t=>sp(t)),ip),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.ii=0,this.si=new hp,this.targetCount=0,this.oi=$o._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),K.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new $o(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.lr(t),K.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ri.forEach(((c,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.ri.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),K.waitFor(l).next((()=>o))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return K.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),K.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((c=>{l.push(o.markPotentiallyOrphaned(e,c))})),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return K.resolve(s)}containsKey(e,t){return K.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,t){this._i={},this.overlays={},this.ai=new Kc(0),this.ui=!1,this.ui=!0,this.ci=new Q1,this.referenceDelegate=e(this),this.li=new Z1(this),this.indexManager=new M1,this.remoteDocumentCache=(function(o){return new J1(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new O1(t),this.Pi=new K1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new G1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new Y1(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){ue("MemoryPersistence","Starting transaction:",e);const o=new eC(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((l=>this.referenceDelegate.Ei(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ii(e,t){return K.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class eC extends xR{constructor(e){super(),this.currentSequenceNumber=e}}class dp{constructor(e){this.persistence=e,this.Ri=new hp,this.Ai=null}static Vi(e){return new dp(e)}get di(){if(this.Ai)return this.Ai;throw we(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),K.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.di,(s=>{const o=ge.fromPath(s);return this.mi(e,o).next((l=>{l||t.removeEntry(o,Ie.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return K.or([()=>K.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Nc{constructor(e,t){this.persistence=e,this.fi=new bi((s=>RR(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=$1(this,t)}static Vi(e,t){return new Nc(e,t)}Ti(){}Ei(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return K.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((l=>l?K.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(c=>this.wr(e,c,t).next((f=>{f||(s++,l.removeEntry(c,Ie.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),K.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),K.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=cc(e.data.value)),t}wr(e,t,s){return K.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return K.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Es=o}static Is(e,t){let s=Ve(),o=Ve();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new fp(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return CI()?8:SR($t())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.gs(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ps(e,t,o,s).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new tC;return this.ys(e,t,c).next((f=>{if(l.result=f,this.As)return this.ws(e,t,c,f.size)}))})).next((()=>l.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(Ao()<=De.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Ro(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),K.resolve()):(Ao()<=De.DEBUG&&ue("QueryEngine","Query:",Ro(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(Ao()<=De.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Ro(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cr(t))):K.resolve())}gs(e,t){if(i_(t))return K.resolve(null);let s=cr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Tf(t,null,"F"),s=cr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const c=Ve(...l);return this.fs.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,s).next((g=>{const y=this.Ss(t,f);return this.bs(t,y,c,g.readTime)?this.gs(e,Tf(t,null,"F")):this.Ds(e,y,t,g)}))))})))))}ps(e,t,s,o){return i_(t)||o.isEqual(Ie.min())?K.resolve(null):this.fs.getDocuments(e,s).next((l=>{const c=this.Ss(t,l);return this.bs(t,c,s,o)?K.resolve(null):(Ao()<=De.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ro(t)),this.Ds(e,c,t,wR(o,yl)).next((f=>f)))}))}Ss(e,t){let s=new Tt(R0(e));return t.forEach(((o,l)=>{Jc(e,l)&&(s=s.add(l))})),s}bs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,s){return Ao()<=De.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Ro(t)),this.fs.getDocumentsMatchingQuery(e,t,Ms.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="LocalStore",rC=3e8;class sC{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new rt(be),this.Fs=new bi((l=>sp(l)),ip),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new H1(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function iC(n,e,t,s){return new sC(n,e,t,s)}async function J0(n,e){const t=Ae(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const c=[],f=[];let g=Ve();for(const y of o){c.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}for(const y of l){f.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next((y=>({Ns:y,removedBatchIds:c,addedBatchIds:f})))}))}))}function oC(n,e){const t=Ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(f,g,y,E){const I=y.batch,C=I.keys();let V=K.resolve();return C.forEach((W=>{V=V.next((()=>E.getEntry(g,W))).next((z=>{const M=y.docVersions.get(W);Be(M!==null,48541),z.version.compareTo(M)<0&&(I.applyToRemoteDocument(z,y),z.isValidDocument()&&(z.setReadTime(y.commitVersion),E.addEntry(z)))}))})),V.next((()=>f.mutationQueue.removeMutationBatch(g,I)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(f){let g=Ve();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(g=g.add(f.batch.mutations[y].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function X0(n){const e=Ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function aC(n,e){const t=Ae(n),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const f=[];e.targetChanges.forEach(((E,I)=>{const C=o.get(I);if(!C)return;f.push(t.li.removeMatchingKeys(l,E.removedDocuments,I).next((()=>t.li.addMatchingKeys(l,E.addedDocuments,I))));let V=C.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(I)!==null?V=V.withResumeToken(Vt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):E.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(E.resumeToken,s)),o=o.insert(I,V),(function(z,M,Z){return z.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=rC?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0})(C,V,E)&&f.push(t.li.updateTargetData(l,V))}));let g=$r(),y=Ve();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(lC(l,c,e.documentUpdates).next((E=>{g=E.Bs,y=E.Ls}))),!s.isEqual(Ie.min())){const E=t.li.getLastRemoteSnapshotVersion(l).next((I=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,s)));f.push(E)}return K.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,y))).next((()=>g))})).then((l=>(t.vs=o,l)))}function lC(n,e,t){let s=Ve(),o=Ve();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let c=$r();return t.forEach(((f,g)=>{const y=l.get(f);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Ie.min())?(e.removeEntry(f,g.readTime),c=c.insert(f,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),c=c.insert(f,g)):ue(pp,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",g.version)})),{Bs:c,Ls:o}}))}function uC(n,e){const t=Ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=tp),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function cC(n,e){const t=Ae(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((l=>l?(o=l,K.resolve(o)):t.li.allocateTargetId(s).next((c=>(o=new Cs(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function Rf(n,e,t){const s=Ae(n),o=s.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(c=>s.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!ea(c))throw c;ue(pp,`Failed to update sequence numbers for target ${e}: ${c}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function __(n,e,t){const s=Ae(n);let o=Ie.min(),l=Ve();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(g,y,E){const I=Ae(g),C=I.Fs.get(E);return C!==void 0?K.resolve(I.vs.get(C)):I.li.getTargetData(y,E)})(s,c,cr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(c,f.targetId).next((g=>{l=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(c,e,t?o:Ie.min(),t?l:Ve()))).next((f=>(hC(s,QR(e),f),{documents:f,ks:l})))))}function hC(n,e,t){let s=n.Ms.get(e)||Ie.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Ms.set(e,s)}class v_{constructor(){this.activeTargetIds=t1()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dC{constructor(){this.vo=new v_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new v_,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_="ConnectivityMonitor";class E_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ue(w_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ue(w_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc=null;function Cf(){return rc===null?rc=(function(){return 268435456+Math.round(2147483648*Math.random())})():rc++,"0x"+rc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="RestConnection",pC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class mC{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===Ac?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const c=Cf(),f=this.Qo(e,t.toUriEncodedString());ue(Xd,`Sending RPC '${e}' ${c}:`,f,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,l);const{host:y}=new URL(f),E=Qo(y);return this.zo(e,f,g,s,E).then((I=>(ue(Xd,`Received RPC '${e}' ${c}: `,I),I)),(I=>{throw Ri(Xd,`RPC '${e}' ${c} failed with error: `,I,"url: ",f,"request:",s),I}))}jo(e,t,s,o,l,c){return this.Wo(e,t,s,o,l)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Xo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const s=pC[e];let o=`${this.Ko}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="WebChannelConnection",Xa=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class Vo extends mC{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Vo.c_){const e=r0();Xa(e,n0.STAT_EVENT,(t=>{t.stat===mf.PROXY?ue(Ut,"STAT_EVENT: detected buffering proxy"):t.stat===mf.NOPROXY&&ue(Ut,"STAT_EVENT: detected no buffering proxy")})),Vo.c_=!0}}zo(e,t,s,o,l){const c=Cf();return new Promise(((f,g)=>{const y=new e0;y.setWithCredentials(!0),y.listenOnce(t0.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case uc.NO_ERROR:const I=y.getResponseJson();ue(Ut,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(I)),f(I);break;case uc.TIMEOUT:ue(Ut,`RPC '${e}' ${c} timed out`),g(new ie(H.DEADLINE_EXCEEDED,"Request time out"));break;case uc.HTTP_ERROR:const C=y.getStatus();if(ue(Ut,`RPC '${e}' ${c} failed with status:`,C,"response text:",y.getResponseText()),C>0){let V=y.getResponseJson();Array.isArray(V)&&(V=V[0]);const W=V==null?void 0:V.error;if(W&&W.status&&W.message){const z=(function(Z){const se=Z.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(se)>=0?se:H.UNKNOWN})(W.status);g(new ie(z,W.message))}else g(new ie(H.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new ie(H.UNAVAILABLE,"Connection failed."));break;default:we(9055,{l_:e,streamId:c,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{ue(Ut,`RPC '${e}' ${c} completed.`)}}));const E=JSON.stringify(o);ue(Ut,`RPC '${e}' ${c} sending request:`,o),y.send(t,"POST",E,s,15)}))}T_(e,t,s){const o=Cf(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,t,s),f.encodeInitMessageHeaders=!0;const y=l.join("");ue(Ut,`Creating RPC '${e}' stream ${o}: ${y}`,f);const E=c.createWebChannel(y,f);this.E_(E);let I=!1,C=!1;const V=new gC({Jo:W=>{C?ue(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(I||(ue(Ut,`Opening RPC '${e}' stream ${o} transport.`),E.open(),I=!0),ue(Ut,`RPC '${e}' stream ${o} sending:`,W),E.send(W))},Ho:()=>E.close()});return Xa(E,rl.EventType.OPEN,(()=>{C||(ue(Ut,`RPC '${e}' stream ${o} transport opened.`),V.i_())})),Xa(E,rl.EventType.CLOSE,(()=>{C||(C=!0,ue(Ut,`RPC '${e}' stream ${o} transport closed`),V.o_(),this.I_(E))})),Xa(E,rl.EventType.ERROR,(W=>{C||(C=!0,Ri(Ut,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),V.o_(new ie(H.UNAVAILABLE,"The operation could not be completed")))})),Xa(E,rl.EventType.MESSAGE,(W=>{var z;if(!C){const M=W.data[0];Be(!!M,16349);const Z=M,se=(Z==null?void 0:Z.error)||((z=Z[0])==null?void 0:z.error);if(se){ue(Ut,`RPC '${e}' stream ${o} received error:`,se);const ae=se.status;let he=(function(P){const x=gt[P];if(x!==void 0)return j0(x)})(ae),Te=se.message;ae==="NOT_FOUND"&&Te.includes("database")&&Te.includes("does not exist")&&Te.includes(this.databaseId.database)&&Ri(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),he===void 0&&(he=H.INTERNAL,Te="Unknown error status: "+ae+" with message "+se.message),C=!0,V.o_(new ie(he,Te)),E.close()}else ue(Ut,`RPC '${e}' stream ${o} received:`,M),V.__(M)}})),Vo.u_(),setTimeout((()=>{V.s_()}),0),V}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return s0()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(n){return new Vo(n)}function Zd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(n){return new E1(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vo.c_=!1;class Z0{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ue("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="PersistentStream";class ew{constructor(e,t,s,o,l,c,f,g){this.Ci=e,this.S_=s,this.b_=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Z0(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Br(t.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new ie(H.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ue(T_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(ue(T_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class _C extends ew{constructor(e,t,s,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=x1(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Ie.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?hr(c.readTime):Ie.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=Af(this.serializer),t.addTarget=(function(l,c){let f;const g=c.target;if(f=wf(g)?{documents:R1(l,g)}:{query:C1(l,g).ft},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=z0(l,c.resumeToken);const y=If(l,c.expectedCount);y!==null&&(f.expectedCount=y)}else if(c.snapshotVersion.compareTo(Ie.min())>0){f.readTime=Pc(l,c.snapshotVersion.toTimestamp());const y=If(l,c.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const s=P1(this.serializer,e);s&&(t.labels=s),this.q_(t)}X_(e){const t={};t.database=Af(this.serializer),t.removeTarget=e,this.q_(t)}}class vC extends ew{constructor(e,t,s,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,c),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=A1(e.writeResults,e.commitTime),s=hr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Af(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>S1(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{}class EC extends wC{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Wo(e,xf(t,s),o,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ie(H.UNKNOWN,l.toString())}))}jo(e,t,s,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.jo(e,xf(t,s),o,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ie(H.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function TC(n,e,t,s){return new EC(n,e,t,s)}class IC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Br(t),this.aa=!1):ue("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="RemoteStore";class xC{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((c=>{s.enqueueAndForget((async()=>{Vi(this)&&(ue(Ci,"Restarting streams for network reachability change."),await(async function(g){const y=Ae(g);y.Ia.add(4),await bl(y),y.Va.set("Unknown"),y.Ia.delete(4),await rh(y)})(this))}))})),this.Va=new IC(s,o)}}async function rh(n){if(Vi(n))for(const e of n.Ra)await e(!0)}async function bl(n){for(const e of n.Ra)await e(!1)}function tw(n,e){const t=Ae(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),_p(t)?yp(t):na(t).O_()&&gp(t,e))}function mp(n,e){const t=Ae(n),s=na(t);t.Ea.delete(e),s.O_()&&nw(t,e),t.Ea.size===0&&(s.O_()?s.L_():Vi(t)&&t.Va.set("Unknown"))}function gp(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}na(n).Z_(e)}function nw(n,e){n.da.$e(e),na(n).X_(e)}function yp(n){n.da=new y1({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),na(n).start(),n.Va.ua()}function _p(n){return Vi(n)&&!na(n).x_()&&n.Ea.size>0}function Vi(n){return Ae(n).Ia.size===0}function rw(n){n.da=void 0}async function SC(n){n.Va.set("Online")}async function AC(n){n.Ea.forEach(((e,t)=>{gp(n,e)}))}async function RC(n,e){rw(n),_p(n)?(n.Va.ha(e),yp(n)):n.Va.set("Unknown")}async function CC(n,e,t){if(n.Va.set("Online"),e instanceof U0&&e.state===2&&e.cause)try{await(async function(o,l){const c=l.cause;for(const f of l.targetIds)o.Ea.has(f)&&(await o.remoteSyncer.rejectListen(f,c),o.Ea.delete(f),o.da.removeTarget(f))})(n,e)}catch(s){ue(Ci,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Dc(n,s)}else if(e instanceof fc?n.da.Xe(e):e instanceof F0?n.da.st(e):n.da.tt(e),!t.isEqual(Ie.min()))try{const s=await X0(n.localStore);t.compareTo(s)>=0&&await(function(l,c){const f=l.da.Tt(c);return f.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.Ea.get(y);E&&l.Ea.set(y,E.withResumeToken(g.resumeToken,c))}})),f.targetMismatches.forEach(((g,y)=>{const E=l.Ea.get(g);if(!E)return;l.Ea.set(g,E.withResumeToken(Vt.EMPTY_BYTE_STRING,E.snapshotVersion)),nw(l,g);const I=new Cs(E.target,g,y,E.sequenceNumber);gp(l,I)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(s){ue(Ci,"Failed to raise snapshot:",s),await Dc(n,s)}}async function Dc(n,e,t){if(!ea(e))throw e;n.Ia.add(1),await bl(n),n.Va.set("Offline"),t||(t=()=>X0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ue(Ci,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await rh(n)}))}function sw(n,e){return e().catch((t=>Dc(n,t,e)))}async function sh(n){const e=Ae(n),t=zs(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:tp;for(;kC(e);)try{const o=await uC(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,PC(e,o)}catch(o){await Dc(e,o)}iw(e)&&ow(e)}function kC(n){return Vi(n)&&n.Ta.length<10}function PC(n,e){n.Ta.push(e);const t=zs(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function iw(n){return Vi(n)&&!zs(n).x_()&&n.Ta.length>0}function ow(n){zs(n).start()}async function NC(n){zs(n).ra()}async function DC(n){const e=zs(n);for(const t of n.Ta)e.ea(t.mutations)}async function bC(n,e,t){const s=n.Ta.shift(),o=lp.from(s,e,t);await sw(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await sh(n)}async function VC(n,e){e&&zs(n).Y_&&await(async function(s,o){if((function(c){return p1(c)&&c!==H.ABORTED})(o.code)){const l=s.Ta.shift();zs(s).B_(),await sw(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await sh(s)}})(n,e),iw(n)&&ow(n)}async function I_(n,e){const t=Ae(n);t.asyncQueue.verifyOperationInProgress(),ue(Ci,"RemoteStore received new credentials");const s=Vi(t);t.Ia.add(3),await bl(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await rh(t)}async function OC(n,e){const t=Ae(n);e?(t.Ia.delete(2),await rh(t)):e||(t.Ia.add(2),await bl(t),t.Va.set("Unknown"))}function na(n){return n.ma||(n.ma=(function(t,s,o){const l=Ae(t);return l.sa(),new _C(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:SC.bind(null,n),Yo:AC.bind(null,n),t_:RC.bind(null,n),H_:CC.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),_p(n)?yp(n):n.Va.set("Unknown")):(await n.ma.stop(),rw(n))}))),n.ma}function zs(n){return n.fa||(n.fa=(function(t,s,o){const l=Ae(t);return l.sa(),new vC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:NC.bind(null,n),t_:VC.bind(null,n),ta:DC.bind(null,n),na:bC.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await sh(n)):(await n.fa.stop(),n.Ta.length>0&&(ue(Ci,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const c=Date.now()+s,f=new vp(e,t,c,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wp(n,e){if(Br("AsyncQueue",`${e}: ${n}`),ea(n))return new ie(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{static emptySet(e){return new Oo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ge.comparator(t.key,s.key):(t,s)=>ge.comparator(t.key,s.key),this.keyedMap=sl(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Oo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Oo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(){this.ga=new rt(ge.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):we(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class qo{constructor(e,t,s,o,l,c,f,g,y){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,t,s,o,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new qo(e,t,Oo.emptySet(t),c,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class MC{constructor(){this.queries=S_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Ae(t),l=o.queries;o.queries=S_(),l.forEach(((c,f)=>{for(const g of f.Sa)g.onError(s)}))})(this,new ie(H.ABORTED,"Firestore shutting down"))}}function S_(){return new bi((n=>A0(n)),Yc)}async function aw(n,e){const t=Ae(n);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(s=2):(l=new LC,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const f=wp(c,`Initialization of query '${Ro(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Ep(t)}async function lw(n,e){const t=Ae(n),s=e.query;let o=3;const l=t.queries.get(s);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function jC(n,e){const t=Ae(n);let s=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const f of c.Sa)f.Fa(o)&&(s=!0);c.wa=o}}s&&Ep(t)}function FC(n,e,t){const s=Ae(n),o=s.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);s.queries.delete(e)}function Ep(n){n.Ca.forEach((e=>{e.next()}))}var kf,A_;(A_=kf||(kf={})).Ma="default",A_.Cache="cache";class uw{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new qo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=qo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==kf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.key=e}}class hw{constructor(e){this.key=e}}class UC{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Ve(),this.mutatedKeys=Ve(),this.eu=R0(e),this.tu=new Oo(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new x_,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,I)=>{const C=o.get(E),V=Jc(this.query,I)?I:null,W=!!C&&this.mutatedKeys.has(C.key),z=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let M=!1;C&&V?C.data.isEqual(V.data)?W!==z&&(s.track({type:3,doc:V}),M=!0):this.su(C,V)||(s.track({type:2,doc:V}),M=!0,(g&&this.eu(V,g)>0||y&&this.eu(V,y)<0)&&(f=!0)):!C&&V?(s.track({type:0,doc:V}),M=!0):C&&!V&&(s.track({type:1,doc:C}),M=!0,(g||y)&&(f=!0)),M&&(V?(c=c.add(V),l=z?l.add(E):l.delete(E)):(c=c.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const E=this.query.limitType==="F"?c.last():c.first();c=c.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{tu:c,iu:s,bs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((E,I)=>(function(V,W){const z=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{Vt:M})}};return z(V)-z(W)})(E.type,I.type)||this.eu(E.doc,I.doc))),this.ou(s),o=o??!1;const f=t&&!o?this._u():[],g=this.Ya.size===0&&this.current&&!o?1:0,y=g!==this.Xa;return this.Xa=g,c.length!==0||y?{snapshot:new qo(this.query,e.tu,l,c,e.mutatedKeys,g===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new x_,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Ve(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new hw(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new cw(s))})),t}cu(e){this.Za=e.ks,this.Ya=Ve();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return qo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Tp="SyncEngine";class zC{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class BC{constructor(e){this.key=e,this.hu=!1}}class $C{constructor(e,t,s,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new bi((f=>A0(f)),Yc),this.Eu=new Map,this.Iu=new Set,this.Ru=new rt(ge.comparator),this.Au=new Map,this.Vu=new hp,this.du={},this.mu=new Map,this.fu=$o.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function qC(n,e,t=!0){const s=yw(n);let o;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await dw(s,e,t,!0),o}async function WC(n,e){const t=yw(n);await dw(t,e,!0,!1)}async function dw(n,e,t,s){const o=await cC(n.localStore,cr(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await HC(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&tw(n.remoteStore,o),f}async function HC(n,e,t,s,o){n.pu=(I,C,V)=>(async function(z,M,Z,se){let ae=M.view.ru(Z);ae.bs&&(ae=await __(z.localStore,M.query,!1).then((({documents:P})=>M.view.ru(P,ae))));const he=se&&se.targetChanges.get(M.targetId),Te=se&&se.targetMismatches.get(M.targetId)!=null,Ce=M.view.applyChanges(ae,z.isPrimaryClient,he,Te);return C_(z,M.targetId,Ce.au),Ce.snapshot})(n,I,C,V);const l=await __(n.localStore,e,!0),c=new UC(e,l.ks),f=c.ru(l.documents),g=Dl.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",o),y=c.applyChanges(f,n.isPrimaryClient,g);C_(n,t,y.au);const E=new zC(e,t,c);return n.Tu.set(e,E),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),y.snapshot}async function KC(n,e,t){const s=Ae(n),o=s.Tu.get(e),l=s.Eu.get(o.targetId);if(l.length>1)return s.Eu.set(o.targetId,l.filter((c=>!Yc(c,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Rf(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&mp(s.remoteStore,o.targetId),Pf(s,o.targetId)})).catch(Zo)):(Pf(s,o.targetId),await Rf(s.localStore,o.targetId,!0))}async function GC(n,e){const t=Ae(n),s=t.Tu.get(e),o=t.Eu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),mp(t.remoteStore,s.targetId))}async function QC(n,e,t){const s=nk(n);try{const o=await(function(c,f){const g=Ae(c),y=Ze.now(),E=f.reduce(((V,W)=>V.add(W.key)),Ve());let I,C;return g.persistence.runTransaction("Locally write mutations","readwrite",(V=>{let W=$r(),z=Ve();return g.xs.getEntries(V,E).next((M=>{W=M,W.forEach(((Z,se)=>{se.isValidDocument()||(z=z.add(Z))}))})).next((()=>g.localDocuments.getOverlayedDocuments(V,W))).next((M=>{I=M;const Z=[];for(const se of f){const ae=u1(se,I.get(se.key).overlayedDocument);ae!=null&&Z.push(new Hs(se.key,ae,_0(ae.value.mapValue),tn.exists(!0)))}return g.mutationQueue.addMutationBatch(V,y,Z,f)})).next((M=>{C=M;const Z=M.applyToLocalDocumentSet(I,z);return g.documentOverlayCache.saveOverlays(V,M.batchId,Z)}))})).then((()=>({batchId:C.batchId,changes:k0(I)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(c,f,g){let y=c.du[c.currentUser.toKey()];y||(y=new rt(be)),y=y.insert(f,g),c.du[c.currentUser.toKey()]=y})(s,o.batchId,t),await Vl(s,o.changes),await sh(s.remoteStore)}catch(o){const l=wp(o,"Failed to persist write");t.reject(l)}}async function fw(n,e){const t=Ae(n);try{const s=await aC(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const c=t.Au.get(l);c&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?c.hu=!0:o.modifiedDocuments.size>0?Be(c.hu,14607):o.removedDocuments.size>0&&(Be(c.hu,42227),c.hu=!1))})),await Vl(t,s,e)}catch(s){await Zo(s)}}function R_(n,e,t){const s=Ae(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((l,c)=>{const f=c.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(c,f){const g=Ae(c);g.onlineState=f;let y=!1;g.queries.forEach(((E,I)=>{for(const C of I.Sa)C.va(f)&&(y=!0)})),y&&Ep(g)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function YC(n,e,t){const s=Ae(n);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),l=o&&o.key;if(l){let c=new rt(ge.comparator);c=c.insert(l,Bt.newNoDocument(l,Ie.min()));const f=Ve().add(l),g=new th(Ie.min(),new Map,new rt(be),c,f);await fw(s,g),s.Ru=s.Ru.remove(l),s.Au.delete(e),Ip(s)}else await Rf(s.localStore,e,!1).then((()=>Pf(s,e,t))).catch(Zo)}async function JC(n,e){const t=Ae(n),s=e.batch.batchId;try{const o=await oC(t.localStore,e);mw(t,s,null),pw(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Vl(t,o)}catch(o){await Zo(o)}}async function XC(n,e,t){const s=Ae(n);try{const o=await(function(c,f){const g=Ae(c);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let E;return g.mutationQueue.lookupMutationBatch(y,f).next((I=>(Be(I!==null,37113),E=I.keys(),g.mutationQueue.removeMutationBatch(y,I)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,E,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E))).next((()=>g.localDocuments.getDocuments(y,E)))}))})(s.localStore,e);mw(s,e,t),pw(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Vl(s,o)}catch(o){await Zo(o)}}function pw(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function mw(n,e,t){const s=Ae(n);let o=s.du[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function Pf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Eu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((s=>{n.Vu.containsKey(s)||gw(n,s)}))}function gw(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(mp(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Ip(n))}function C_(n,e,t){for(const s of t)s instanceof cw?(n.Vu.addReference(s.key,e),ZC(n,s)):s instanceof hw?(ue(Tp,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||gw(n,s.key)):we(19791,{wu:s})}function ZC(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(s)||(ue(Tp,"New document in limbo: "+t),n.Iu.add(s),Ip(n))}function Ip(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ge(Qe.fromString(e)),s=n.fu.next();n.Au.set(s,new BC(t)),n.Ru=n.Ru.insert(t,s),tw(n.remoteStore,new Cs(cr(op(t.path)),s,"TargetPurposeLimboResolution",Kc.ce))}}async function Vl(n,e,t){const s=Ae(n),o=[],l=[],c=[];s.Tu.isEmpty()||(s.Tu.forEach(((f,g)=>{c.push(s.pu(g,e,t).then((y=>{var E;if((y||t)&&s.isPrimaryClient){const I=y?!y.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,I?"current":"not-current")}if(y){o.push(y);const I=fp.Is(g.targetId,y);l.push(I)}})))})),await Promise.all(c),s.Pu.H_(o),await(async function(g,y){const E=Ae(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>K.forEach(y,(C=>K.forEach(C.Ts,(V=>E.persistence.referenceDelegate.addReference(I,C.targetId,V))).next((()=>K.forEach(C.Es,(V=>E.persistence.referenceDelegate.removeReference(I,C.targetId,V)))))))))}catch(I){if(!ea(I))throw I;ue(pp,"Failed to update sequence numbers: "+I)}for(const I of y){const C=I.targetId;if(!I.fromCache){const V=E.vs.get(C),W=V.snapshotVersion,z=V.withLastLimboFreeSnapshotVersion(W);E.vs=E.vs.insert(C,z)}}})(s.localStore,l))}async function ek(n,e){const t=Ae(n);if(!t.currentUser.isEqual(e)){ue(Tp,"User change. New user:",e.toKey());const s=await J0(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((f=>{f.forEach((g=>{g.reject(new ie(H.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Vl(t,s.Ns)}}function tk(n,e){const t=Ae(n),s=t.Au.get(e);if(s&&s.hu)return Ve().add(s.key);{let o=Ve();const l=t.Eu.get(e);if(!l)return o;for(const c of l){const f=t.Tu.get(c);o=o.unionWith(f.view.nu)}return o}}function yw(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=fw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YC.bind(null,e),e.Pu.H_=jC.bind(null,e.eventManager),e.Pu.yu=FC.bind(null,e.eventManager),e}function nk(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XC.bind(null,e),e}class bc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return iC(this.persistence,new nC,e.initialUser,this.serializer)}Cu(e){return new Y0(dp.Vi,this.serializer)}Du(e){return new dC}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bc.provider={build:()=>new bc};class rk extends bc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Be(this.persistence.referenceDelegate instanceof Nc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new z1(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new Y0((s=>Nc.Vi(s,t)),this.serializer)}}class Nf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>R_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ek.bind(null,this.syncEngine),await OC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new MC})()}createDatastore(e){const t=nh(e.databaseInfo.databaseId),s=yC(e.databaseInfo);return TC(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,c,f){return new xC(s,o,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>R_(this.syncEngine,t,0)),(function(){return E_.v()?new E_:new fC})())}createSyncEngine(e,t){return(function(o,l,c,f,g,y,E){const I=new $C(o,l,c,f,g,y);return E&&(I.gu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Ae(o);ue(Ci,"RemoteStore shutting down."),l.Ia.add(5),await bl(l),l.Aa.shutdown(),l.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Nf.provider={build:()=>new Nf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Br("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="FirestoreClient";class sk{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=ep.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async c=>{ue(Bs,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(ue(Bs,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=wp(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function ef(n,e){n.asyncQueue.verifyOperationInProgress(),ue(Bs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async o=>{s.isEqual(o)||(await J0(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function k_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ik(n);ue(Bs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>I_(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,o)=>I_(e.remoteStore,o))),n._onlineComponents=e}async function ik(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue(Bs,"Using user provided OfflineComponentProvider");try{await ef(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ri("Error using user provided cache. Falling back to memory cache: "+t),await ef(n,new bc)}}else ue(Bs,"Using default OfflineComponentProvider"),await ef(n,new rk(void 0));return n._offlineComponents}async function vw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue(Bs,"Using user provided OnlineComponentProvider"),await k_(n,n._uninitializedComponentsProvider._online)):(ue(Bs,"Using default OnlineComponentProvider"),await k_(n,new Nf))),n._onlineComponents}function ok(n){return vw(n).then((e=>e.syncEngine))}async function ww(n){const e=await vw(n),t=e.eventManager;return t.onListen=qC.bind(null,e.syncEngine),t.onUnlisten=KC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=WC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=GC.bind(null,e.syncEngine),t}function ak(n,e,t={}){const s=new Fr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,g,y){const E=new _w({next:C=>{E.Nu(),c.enqueueAndForget((()=>lw(l,I)));const V=C.docs.has(f);!V&&C.fromCache?y.reject(new ie(H.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&C.fromCache&&g&&g.source==="server"?y.reject(new ie(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(C)},error:C=>y.reject(C)}),I=new uw(op(f.path),E,{includeMetadataChanges:!0,qa:!0});return aw(l,I)})(await ww(n),n.asyncQueue,e,t,s))),s.promise}function lk(n,e,t={}){const s=new Fr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,g,y){const E=new _w({next:C=>{E.Nu(),c.enqueueAndForget((()=>lw(l,I))),C.fromCache&&g.source==="server"?y.reject(new ie(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(C)},error:C=>y.reject(C)}),I=new uw(f,E,{includeMetadataChanges:!0,qa:!0});return aw(l,I)})(await ww(n),n.asyncQueue,e,t,s))),s.promise}function uk(n,e){const t=new Fr;return n.asyncQueue.enqueueAndForget((async()=>QC(await ok(n),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck="ComponentProvider",P_=new Map;function hk(n,e,t,s,o){return new PR(n,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,Ew(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="firestore.googleapis.com",N_=!0;class D_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ie(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Tw,this.ssl=N_}else this.host=e.host,this.ssl=e.ssl??N_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Q0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<F1)throw new ie(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ew(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ih{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new D_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new D_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new uR;switch(s.type){case"firstParty":return new fR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=P_.get(t);s&&(ue(ck,"Removing Datastore"),P_.delete(t),s.terminate())})(this),Promise.resolve()}}function dk(n,e,t,s={}){var y;n=pr(n,ih);const o=Qo(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},f=`${e}:${t}`;o&&zf(`https://${f}`),l.host!==Tw&&l.host!==f&&Ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:f,ssl:o,emulatorOptions:s};if(!Ii(g,c)&&(n._setSettings(g),s.mockUserToken)){let E,I;if(typeof s.mockUserToken=="string")E=s.mockUserToken,I=zt.MOCK_USER;else{E=pv(s.mockUserToken,(y=n._app)==null?void 0:y.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new ie(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new zt(C)}n._authCredentials=new cR(new o0(E,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Oi(this.firestore,e,this._query)}}class vt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}toJSON(){return{type:vt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Pl(t,vt._jsonSchema))return new vt(e,s||null,new ge(Qe.fromString(t.referencePath)))}}vt._jsonSchemaVersion="firestore/documentReference/1.0",vt._jsonSchema={type:_t("string",vt._jsonSchemaVersion),referencePath:_t("string")};class Vs extends Oi{constructor(e,t,s){super(e,t,op(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new ge(e))}withConverter(e){return new Vs(this.firestore,e,this._path)}}function ki(n,e,...t){if(n=dt(n),a0("collection","path",e),n instanceof ih){const s=Qe.fromString(e,...t);return Wy(s),new Vs(n,null,s)}{if(!(n instanceof vt||n instanceof Vs))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Qe.fromString(e,...t));return Wy(s),new Vs(n.firestore,null,s)}}function dr(n,e,...t){if(n=dt(n),arguments.length===1&&(e=ep.newId()),a0("doc","path",e),n instanceof ih){const s=Qe.fromString(e,...t);return qy(s),new vt(n,null,new ge(s))}{if(!(n instanceof vt||n instanceof Vs))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Qe.fromString(e,...t));return qy(s),new vt(n.firestore,n instanceof Vs?n.converter:null,new ge(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="AsyncQueue";class V_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Z0(this,"async_queue_retry"),this._c=()=>{const s=Zd();s&&ue(b_,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Zd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Zd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Fr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ea(e))throw e;ue(b_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Br("INTERNAL UNHANDLED ERROR: ",O_(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=vp.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&we(47125,{Pc:O_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function O_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Li extends ih{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new V_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new V_(e),this._firestoreClient=void 0,await e}}}function fk(n,e){const t=typeof n=="object"?n:qf(),s=typeof n=="string"?n:Ac,o=zc(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=hv("firestore");l&&dk(o,...l)}return o}function oh(n){if(n._terminated)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||pk(n),n._firestoreClient}function pk(n){var s,o,l,c;const e=n._freezeSettings(),t=hk(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(o=n._app)==null?void 0:o.options.apiKey,e);n._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((c=e.localCache)!=null&&c._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new sk(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(g){const y=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(y),_online:y}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this._byteString=e}static fromBase64String(e){try{return new In(Vt.fromBase64String(e))}catch(t){throw new ie(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new In(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:In._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Pl(e,In._jsonSchema))return In.fromBase64String(e.bytes)}}In._jsonSchemaVersion="firestore/bytes/1.0",In._jsonSchema={type:_t("string",In._jsonSchemaVersion),bytes:_t("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:fr._jsonSchemaVersion}}static fromJSON(e){if(Pl(e,fr._jsonSchema))return new fr(e.latitude,e.longitude)}}fr._jsonSchemaVersion="firestore/geoPoint/1.0",fr._jsonSchema={type:_t("string",fr._jsonSchemaVersion),latitude:_t("number"),longitude:_t("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Mn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Pl(e,Mn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Mn(e.vectorValues);throw new ie(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Mn._jsonSchemaVersion="firestore/vectorValue/1.0",Mn._jsonSchema={type:_t("string",Mn._jsonSchemaVersion),vectorValues:_t("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=/^__.*__$/;class gk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Hs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Nl(e,this.data,t,this.fieldTransforms)}}class Iw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Hs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{dataSource:n})}}class xp{constructor(e,t,s,o,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new xp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.mc(e),s}fc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Vc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(xw(this.dataSource)&&mk.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class yk{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||nh(e)}A(e,t,s,o=!1){return new xp({dataSource:e,methodName:t,targetDoc:s,path:Dt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uh(n){const e=n._freezeSettings(),t=nh(n._databaseId);return new yk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Sw(n,e,t,s,o,l={}){const c=n.A(l.merge||l.mergeFields?2:0,e,t,o);Ap("Data must be an object, but it was:",c,s);const f=Cw(s,c);let g,y;if(l.merge)g=new dn(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const E=[];for(const I of l.mergeFields){const C=Pi(e,I,t);if(!c.contains(C))throw new ie(H.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);Nw(E,C)||E.push(C)}g=new dn(E),y=c.fieldTransforms.filter((I=>g.covers(I.field)))}else g=null,y=c.fieldTransforms;return new gk(new en(f),g,y)}class ch extends lh{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ch}}class Sp extends lh{_toFieldTransform(e){return new i1(e.path,new Tl)}isEqual(e){return e instanceof Sp}}function Aw(n,e,t,s){const o=n.A(1,e,t);Ap("Data must be an object, but it was:",o,s);const l=[],c=en.empty();Ws(s,((g,y)=>{const E=Pw(e,g,t);y=dt(y);const I=o.fc(E);if(y instanceof ch)l.push(E);else{const C=Ol(y,I);C!=null&&(l.push(E),c.set(E,C))}}));const f=new dn(l);return new Iw(c,f,o.fieldTransforms)}function Rw(n,e,t,s,o,l){const c=n.A(1,e,t),f=[Pi(e,s,t)],g=[o];if(l.length%2!=0)throw new ie(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<l.length;C+=2)f.push(Pi(e,l[C])),g.push(l[C+1]);const y=[],E=en.empty();for(let C=f.length-1;C>=0;--C)if(!Nw(y,f[C])){const V=f[C];let W=g[C];W=dt(W);const z=c.fc(V);if(W instanceof ch)y.push(V);else{const M=Ol(W,z);M!=null&&(y.push(V),E.set(V,M))}}const I=new dn(y);return new Iw(E,I,c.fieldTransforms)}function _k(n,e,t,s=!1){return Ol(t,n.A(s?4:3,e))}function Ol(n,e){if(kw(n=dt(n)))return Ap("Unsupported field value:",e,n),Cw(n,e);if(n instanceof lh)return(function(s,o){if(!xw(o.dataSource))throw o.yc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.yc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(s,o){const l=[];let c=0;for(const f of s){let g=Ol(f,o.gc(c));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),c++}return{arrayValue:{values:l}}})(n,e)}return(function(s,o){if((s=dt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return n1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Ze.fromDate(s);return{timestampValue:Pc(o.serializer,l)}}if(s instanceof Ze){const l=new Ze(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Pc(o.serializer,l)}}if(s instanceof fr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof In)return{bytesValue:z0(o.serializer,s._byteString)};if(s instanceof vt){const l=o.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw o.yc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:cp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Mn)return(function(c,f){const g=c instanceof Mn?c.toArray():c;return{mapValue:{fields:{[g0]:{stringValue:y0},[Rc]:{arrayValue:{values:g.map((E=>{if(typeof E!="number")throw f.yc("VectorValues must only contain numeric values.");return ap(f.serializer,E)}))}}}}}})(s,o);if(G0(s))return s._toProto(o.serializer);throw o.yc(`Unsupported field value: ${Hc(s)}`)})(n,e)}function Cw(n,e){const t={};return c0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ws(n,((s,o)=>{const l=Ol(o,e.dc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function kw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ze||n instanceof fr||n instanceof In||n instanceof vt||n instanceof lh||n instanceof Mn||G0(n))}function Ap(n,e,t){if(!kw(t)||!l0(t)){const s=Hc(t);throw s==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+s)}}function Pi(n,e,t){if((e=dt(e))instanceof ah)return e._internalPath;if(typeof e=="string")return Pw(n,e);throw Vc("Field path arguments must be of type string or ",n,!1,void 0,t)}const vk=new RegExp("[~\\*/\\[\\]]");function Pw(n,e,t){if(e.search(vk)>=0)throw Vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ah(...e.split("."))._internalPath}catch{throw Vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Vc(n,e,t,s,o){const l=s&&!s.isEmpty(),c=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||c)&&(g+=" (found",l&&(g+=` in field ${s}`),c&&(g+=` in document ${o}`),g+=")"),new ie(H.INVALID_ARGUMENT,f+n+g)}function Nw(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{convertValue(e,t="none"){switch(Us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ws(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var s,o,l;const t=(l=(o=(s=e.fields)==null?void 0:s[Rc].arrayValue)==null?void 0:o.values)==null?void 0:l.map((c=>ct(c.doubleValue)));return new Mn(t)}convertGeoPoint(e){return new fr(ct(e.latitude),ct(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Qc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(_l(e));default:return null}}convertTimestamp(e){const t=js(e);return new Ze(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Qe.fromString(e);Be(K0(s),9688,{name:e});const o=new vl(s.get(1),s.get(3)),l=new ge(s.popFirst(5));return o.isEqual(t)||Br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw extends wk{constructor(e){super(),this.firestore=e}convertBytes(e){return new In(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,t)}}function Lo(){return new Sp("serverTimestamp")}const L_="@firebase/firestore",M_="4.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ek(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Pi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ek extends bw{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ie(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rp{}class Vw extends Rp{}function Cp(n,e,...t){let s=[];e instanceof Rp&&s.push(e),s=s.concat(t),(function(l){const c=l.filter((g=>g instanceof kp)).length,f=l.filter((g=>g instanceof hh)).length;if(c>1||c>0&&f>0)throw new ie(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)n=o._apply(n);return n}class hh extends Vw{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new hh(e,t,s)}_apply(e){const t=this._parse(e);return Ow(e._query,t),new Oi(e.firestore,e.converter,Ef(e._query,t))}_parse(e){const t=uh(e.firestore);return(function(l,c,f,g,y,E,I){let C;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ie(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){F_(I,E);const W=[];for(const z of I)W.push(j_(g,l,z));C={arrayValue:{values:W}}}else C=j_(g,l,I)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||F_(I,E),C=_k(f,c,I,E==="in"||E==="not-in");return yt.create(y,E,C)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ik(n,e,t){const s=e,o=Pi("where",n);return hh._create(o,s,t)}class kp extends Rp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new kp(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Fn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let c=o;const f=l.getFlattenedFilters();for(const g of f)Ow(c,g),c=Ef(c,g)})(e._query,t),new Oi(e.firestore,e.converter,Ef(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Pp extends Vw{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Pp(e,t)}_apply(e){const t=(function(o,l,c){if(o.startAt!==null)throw new ie(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new El(l,c)})(e._query,this._field,this._direction);return new Oi(e.firestore,e.converter,GR(e._query,t))}}function Oc(n,e="asc"){const t=e,s=Pi("orderBy",n);return Pp._create(s,t)}function j_(n,e,t){if(typeof(t=dt(t))=="string"){if(t==="")throw new ie(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!S0(e)&&t.indexOf("/")!==-1)throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Qe.fromString(t));if(!ge.isDocumentKey(s))throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Zy(n,new ge(s))}if(t instanceof vt)return Zy(n,t._key);throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hc(t)}.`)}function F_(n,e){if(!Array.isArray(n)||n.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ow(n,e){const t=(function(o,l){for(const c of o)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Lw(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class ol{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ti extends bw{constructor(e,t,s,o,l,c){super(e,t,s,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new pc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Pi("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ti._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ti._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ti._jsonSchema={type:_t("string",Ti._jsonSchemaVersion),bundleSource:_t("string","DocumentSnapshot"),bundleName:_t("string"),bundle:_t("string")};class pc extends Ti{data(e={}){return super.data(e)}}class Mo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ol(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new pc(this._firestore,this._userDataWriter,s.key,s,new ol(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((f=>{const g=new pc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new ol(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new pc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new ol(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return f.type!==0&&(y=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),E=c.indexOf(f.doc.key)),{type:xk(f.type),doc:g,oldIndex:y,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Mo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ep.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function xk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mo._jsonSchemaVersion="firestore/querySnapshot/1.0",Mo._jsonSchema={type:_t("string",Mo._jsonSchemaVersion),bundleSource:_t("string","QuerySnapshot"),bundleName:_t("string"),bundle:_t("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=uh(e)}set(e,t,s){this._verifyNotCommitted();const o=tf(e,this._firestore),l=Lw(o.converter,t,s),c=Sw(this._dataReader,"WriteBatch.set",o._key,l,o.converter!==null,s);return this._mutations.push(c.toMutation(o._key,tn.none())),this}update(e,t,s,...o){this._verifyNotCommitted();const l=tf(e,this._firestore);let c;return c=typeof(t=dt(t))=="string"||t instanceof ah?Rw(this._dataReader,"WriteBatch.update",l._key,t,s,o):Aw(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,tn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=tf(e,this._firestore);return this._mutations=this._mutations.concat(new eh(t._key,tn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ie(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function tf(n,e){if((n=dt(n)).firestore!==e)throw new ie(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(n){n=pr(n,vt);const e=pr(n.firestore,Li),t=oh(e);return ak(t,n._key).then((s=>Rk(e,n,s)))}function Np(n){n=pr(n,Oi);const e=pr(n.firestore,Li),t=oh(e),s=new Dw(e);return Tk(n._query),lk(t,n._query).then((o=>new Mo(e,s,n,o)))}function Mw(n,e,t,...s){n=pr(n,vt);const o=pr(n.firestore,Li),l=uh(o);let c;return c=typeof(e=dt(e))=="string"||e instanceof ah?Rw(l,"updateDoc",n._key,e,t,s):Aw(l,"updateDoc",n._key,e),dh(o,[c.toMutation(n._key,tn.exists(!0))])}function jw(n){return dh(pr(n.firestore,Li),[new eh(n._key,tn.none())])}function Fw(n,e){const t=pr(n.firestore,Li),s=dr(n),o=Lw(n.converter,e),l=uh(n.firestore);return dh(t,[Sw(l,"addDoc",s._key,o,n.converter!==null,{}).toMutation(s._key,tn.exists(!1))]).then((()=>s))}function dh(n,e){const t=oh(n);return uk(t,e)}function Rk(n,e,t){const s=t.docs.get(e._key),o=new Dw(n);return new Ti(n,o,e._key,s,new ol(t.hasPendingWrites,t.fromCache),e.converter)}function Dp(n){return n=pr(n,Li),oh(n),new Sk(n,(e=>dh(n,e)))}(function(e,t=!0){lR(Ni),xi(new Ls("firestore",((s,{instanceIdentifier:o,options:l})=>{const c=s.getProvider("app").getImmediate(),f=new Li(new hR(s.getProvider("auth-internal")),new pR(c,s.getProvider("app-check-internal")),NR(c,o),c);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),ar(L_,M_,e),ar(L_,M_,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="firebasestorage.googleapis.com",Ck="storageBucket",kk=120*1e3,Pk=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends yr{constructor(e,t,s=0){super(nf(e),`Firebase Storage: ${t} (${nf(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_r.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return nf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var gr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(gr||(gr={}));function nf(n){return"storage/"+n}function Nk(){const n="An unknown error occurred, please check the error payload for server response.";return new _r(gr.UNKNOWN,n)}function Dk(){return new _r(gr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function bk(){return new _r(gr.CANCELED,"User canceled the upload/download.")}function Vk(n){return new _r(gr.INVALID_URL,"Invalid URL '"+n+"'.")}function Ok(n){return new _r(gr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function U_(n){return new _r(gr.INVALID_ARGUMENT,n)}function zw(){return new _r(gr.APP_DELETED,"The Firebase app was deleted.")}function Lk(n){return new _r(gr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Ln.makeFromUrl(e,t)}catch{return new Ln(e,"")}if(s.path==="")return s;throw Ok(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function l(he){he.path.charAt(he.path.length-1)==="/"&&(he.path_=he.path_.slice(0,-1))}const c="(/(.*))?$",f=new RegExp("^gs://"+o+c,"i"),g={bucket:1,path:3};function y(he){he.path_=decodeURIComponent(he.path)}const E="v[A-Za-z0-9_]+",I=t.replace(/[.]/g,"\\."),C="(/([^?#]*).*)?$",V=new RegExp(`^https?://${I}/${E}/b/${o}/o${C}`,"i"),W={bucket:1,path:3},z=t===Uw?"(?:storage.googleapis.com|storage.cloud.google.com)":t,M="([^?#]*)",Z=new RegExp(`^https?://${z}/${o}/${M}`,"i"),ae=[{regex:f,indices:g,postModify:l},{regex:V,indices:W,postModify:y},{regex:Z,indices:{bucket:1,path:2},postModify:y}];for(let he=0;he<ae.length;he++){const Te=ae[he],Ce=Te.regex.exec(e);if(Ce){const P=Ce[Te.indices.bucket];let x=Ce[Te.indices.path];x||(x=""),s=new Ln(P,x),Te.postModify(s);break}}if(s==null)throw Vk(e);return s}}class Mk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(n,e,t){let s=1,o=null,l=null,c=!1,f=0;function g(){return f===2}let y=!1;function E(...M){y||(y=!0,e.apply(null,M))}function I(M){o=setTimeout(()=>{o=null,n(V,g())},M)}function C(){l&&clearTimeout(l)}function V(M,...Z){if(y){C();return}if(M){C(),E.call(null,M,...Z);return}if(g()||c){C(),E.call(null,M,...Z);return}s<64&&(s*=2);let ae;f===1?(f=2,ae=0):ae=(s+Math.random())*1e3,I(ae)}let W=!1;function z(M){W||(W=!0,C(),!y&&(o!==null?(M||(f=2),clearTimeout(o),I(0)):M||(f=1)))}return I(0),l=setTimeout(()=>{c=!0,z(!0)},t),z}function Fk(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(n){return n!==void 0}function z_(n,e,t,s){if(s<e)throw U_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw U_(`Invalid value for '${n}'. Expected ${t} or less.`)}function zk(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const o=e(s)+"="+e(n[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var Lc;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Lc||(Lc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,t,s,o,l,c,f,g,y,E,I,C=!0,V=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=f,this.errorCallback_=g,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=I,this.retry=C,this.isUsingEmulator=V,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((W,z)=>{this.resolve_=W,this.reject_=z,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new sc(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=f=>{const g=f.loaded,y=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,y)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const f=l.getErrorCode()===Lc.NO_ERROR,g=l.getStatus();if(!f||Bk(g,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===Lc.ABORT;s(!1,new sc(!1,null,E));return}const y=this.successCodes_.indexOf(g)!==-1;s(!0,new sc(y,l))})},t=(s,o)=>{const l=this.resolve_,c=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(f,f.getResponse());Uk(g)?l(g):l()}catch(g){c(g)}else if(f!==null){const g=Nk();g.serverResponse=f.getErrorText(),this.errorCallback_?c(this.errorCallback_(f,g)):c(g)}else if(o.canceled){const g=this.appDelete_?zw():bk();c(g)}else{const g=Dk();c(g)}};this.canceled_?t(!1,new sc(!1,null,!0)):this.backoffId_=jk(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Fk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class sc{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function qk(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Wk(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Hk(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Kk(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Gk(n,e,t,s,o,l,c=!0,f=!1){const g=zk(n.urlParams),y=n.url+g,E=Object.assign({},n.headers);return Hk(E,e),qk(E,t),Wk(E,l),Kk(E,s),new $k(y,n.method,E,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Yk(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t){this._service=e,t instanceof Ln?this._location=t:this._location=Ln.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Mc(e,t)}get root(){const e=new Ln(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Yk(this._location.path)}get storage(){return this._service}get parent(){const e=Qk(this._location.path);if(e===null)return null;const t=new Ln(this._location.bucket,e);return new Mc(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Lk(e)}}function B_(n,e){const t=e==null?void 0:e[Ck];return t==null?null:Ln.makeFromBucketSpec(t,n)}function Jk(n,e,t,s={}){n.host=`${e}:${t}`;const o=Qo(e);o&&zf(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:l}=s;l&&(n._overrideAuthToken=typeof l=="string"?l:pv(l,n.app.options.projectId))}class Xk{constructor(e,t,s,o,l,c=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=c,this._bucket=null,this._host=Uw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=kk,this._maxUploadRetryTime=Pk,this._requests=new Set,o!=null?this._bucket=Ln.makeFromBucketSpec(o,this._host):this._bucket=B_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ln.makeFromBucketSpec(this._url,e):this._bucket=B_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){z_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){z_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Mc(this,e)}_makeRequest(e,t,s,o,l=!0){if(this._deleted)return new Mk(zw());{const c=Gk(e,this._appId,s,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const $_="@firebase/storage",q_="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="storage";function Zk(n=qf(),e){n=dt(n);const s=zc(n,Bw).getImmediate({identifier:e}),o=hv("storage");return o&&eP(s,...o),s}function eP(n,e,t,s={}){Jk(n,e,t,s)}function tP(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Xk(t,s,o,e,Ni)}function nP(){xi(new Ls(Bw,tP,"PUBLIC").setMultipleInstances(!0)),ar($_,q_,""),ar($_,q_,"esm2020")}nP();const rP={apiKey:"AIzaSyBwpwMShaLspeIrqU8TSd1wbhbHuiEtXC8",authDomain:"ai-studio-applet-webapp-95c32.firebaseapp.com",projectId:"ai-studio-applet-webapp-95c32",storageBucket:"ai-studio-applet-webapp-95c32.firebasestorage.app",messagingSenderId:"785873781679",appId:"1:785873781679:web:f6db99c84f7728c7d3a55a"},bp=yv(rP),fh=sR(bp),bt=fk(bp);Zk(bp);const sP=async(n,e)=>{try{return{data:(await $S(fh,n,e)).user,error:null}}catch(t){return{data:null,error:t}}},iP=async()=>{try{return await KS(fh),{error:null}}catch(n){return{error:n}}},oP=async()=>fh.currentUser,aP=n=>HS(fh,e=>{n("SIGNED_IN",e)}),$w=Q.createContext(null),lP=({children:n})=>{const[e,t]=Q.useState(null),[s,o]=Q.useState(!0);Q.useEffect(()=>{oP().then(f=>{t(f??null),o(!1)});const c=aP((f,g)=>{t(g??null)});return()=>c()},[]);const l=async()=>{const{error:c}=await iP();c&&console.error("Logout error:",c)};return v.jsx($w.Provider,{value:{user:e,loading:s,logout:l},children:n})},Vp=()=>{const n=Q.useContext($w);if(!n)throw new Error("useAuth must be used within AuthProvider");return n},Za=({children:n})=>{const{user:e,loading:t}=Vp();return t?v.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"}),v.jsx("p",{className:"mt-4 text-gray-600",children:"Carregando..."})]})}):e?n:v.jsx(gc,{to:"/admin/login",replace:!0})};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uP=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qw=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hP=Q.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:c,...f},g)=>Q.createElement("svg",{ref:g,...cP,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:qw("lucide",o),...f},[...c.map(([y,E])=>Q.createElement(y,E)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=(n,e)=>{const t=Q.forwardRef(({className:s,...o},l)=>Q.createElement(hP,{ref:l,iconNode:e,className:qw(`lucide-${uP(n)}`,s),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dP=ot("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fP=ot("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=ot("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pP=ot("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mP=ot("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=ot("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gP=ot("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yP=ot("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _P=ot("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=ot("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=ot("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wP=ot("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EP=ot("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=ot("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=ot("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=ot("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=ot("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=ot("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=ot("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=ot("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=ot("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=ot("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),el=({children:n})=>{const[e,t]=Q.useState(!1),[s,o]=Q.useState(!1),{user:l,logout:c}=Vp(),f=Ko(),g=Go(),y=[{name:"Dashboard",href:"/admin/dashboard",icon:vP},{name:"Orçamentos",href:"/admin/orcamentos",icon:jo},{name:"Clientes",href:"/admin/clientes",icon:bf}],E=W=>W==="/admin/dashboard"?f.pathname===W:f.pathname.startsWith(W),I=async()=>{await c(),g("/admin/login")},C=(l==null?void 0:l.email)||"usuário@email.com",V=C.split("@")[0];return v.jsxs("div",{className:"h-screen flex bg-gray-50",children:[e&&v.jsxs("div",{className:"fixed inset-0 z-40 lg:hidden",children:[v.jsx("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-75",onClick:()=>t(!1)}),v.jsxs("div",{className:"fixed inset-y-0 left-0 flex flex-col w-64 bg-white",children:[v.jsxs("div",{className:"flex items-center justify-between h-16 px-4 border-b border-gray-200",children:[v.jsx("span",{className:"text-xl font-bold text-primary-600",children:"Orçamentos"}),v.jsx("button",{onClick:()=>t(!1),className:"text-gray-500 hover:text-gray-700",children:v.jsx(RP,{size:24})})]}),v.jsx("nav",{className:"flex-1 px-4 py-4 space-y-1",children:y.map(W=>{const z=W.icon,M=E(W.href);return v.jsxs(or,{to:W.href,onClick:()=>t(!1),className:`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${M?"bg-primary-50 text-primary-700 border-r-2 border-primary-700":"text-gray-700 hover:bg-gray-100"}`,children:[v.jsx(z,{className:"mr-3 h-5 w-5"}),W.name]},W.name)})})]})]}),v.jsx("div",{className:"hidden lg:flex lg:flex-shrink-0",children:v.jsxs("div",{className:"flex flex-col w-64 bg-white border-r border-gray-200",children:[v.jsx("div",{className:"flex items-center h-16 px-4 border-b border-gray-200",children:v.jsx("span",{className:"text-xl font-bold text-primary-600",children:"Orçamentos"})}),v.jsx("nav",{className:"flex-1 px-4 py-4 space-y-1",children:y.map(W=>{const z=W.icon,M=E(W.href);return v.jsxs(or,{to:W.href,className:`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${M?"bg-primary-50 text-primary-700 border-r-2 border-primary-700":"text-gray-700 hover:bg-gray-100"}`,children:[v.jsx(z,{className:"mr-3 h-5 w-5"}),W.name]},W.name)})})]})}),v.jsxs("div",{className:"flex flex-col flex-1 overflow-hidden",children:[v.jsx("header",{className:"bg-white shadow-sm border-b border-gray-200",children:v.jsxs("div",{className:"flex items-center justify-between h-16 px-4",children:[v.jsx("div",{className:"flex items-center",children:v.jsx("button",{onClick:()=>t(!0),className:"lg:hidden text-gray-500 hover:text-gray-700",children:v.jsx(TP,{size:24})})}),v.jsxs("div",{className:"relative",children:[v.jsxs("button",{onClick:()=>o(!s),className:"flex items-center space-x-2 text-sm text-gray-700 hover:text-gray-900 focus:outline-none",children:[v.jsx("div",{className:"w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center",children:v.jsx("span",{className:"text-primary-700 font-medium text-sm",children:V.charAt(0).toUpperCase()})}),v.jsx("span",{className:"hidden md:block",children:V}),v.jsx(pP,{size:16})]}),s&&v.jsxs("div",{className:"absolute right-0 mt-2 w-48 py-1 bg-white rounded-md shadow-lg border border-gray-200 z-50",children:[v.jsxs("div",{className:"px-4 py-2 border-b border-gray-100",children:[v.jsx("p",{className:"text-sm font-medium text-gray-900",children:V}),v.jsx("p",{className:"text-xs text-gray-500 truncate",children:C})]}),v.jsxs("button",{onClick:I,className:"flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:[v.jsx(EP,{className:"mr-2 h-4 w-4"}),"Sair"]})]})]})]})}),v.jsx("main",{className:"flex-1 overflow-y-auto p-4 md:p-6",children:n})]})]})},Vn=({children:n,variant:e="primary",size:t="md",disabled:s=!1,loading:o=!1,onClick:l,type:c="button",className:f="",...g})=>{const y="inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",E={primary:"bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",secondary:"bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",danger:"bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",outline:"border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-primary-500",ghost:"text-gray-700 hover:bg-gray-100 focus:ring-gray-500"},I={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"};return v.jsxs("button",{type:c,onClick:l,disabled:s||o,className:`${y} ${E[e]} ${I[t]} ${f}`,...g,children:[o&&v.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4\\",fill:"none",viewBox:"0 0 24 24",children:[v.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),v.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),n]})},En=({label:n,error:e,helperText:t,className:s="",id:o,...l})=>{const c=o||(n==null?void 0:n.toLowerCase().replace(/\s/g,"-"));return v.jsxs("div",{className:s,children:[n&&v.jsx("label",{htmlFor:c,className:"block text-sm font-medium text-gray-700 mb-1",children:n}),v.jsx("input",{id:c,className:`block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${e?"border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500":""}`,...l}),e&&v.jsx("p",{className:"mt-1 text-sm text-red-600",children:e}),t&&!e&&v.jsx("p",{className:"mt-1 text-sm text-gray-500",children:t})]})},K_=({label:n,error:e,helperText:t,className:s="",id:o,...l})=>{const c=o||(n==null?void 0:n.toLowerCase().replace(/\s/g,"-"));return v.jsxs("div",{className:s,children:[n&&v.jsx("label",{htmlFor:c,className:"block text-sm font-medium text-gray-700 mb-1",children:n}),v.jsx("textarea",{id:c,className:`block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${e?"border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500":""}`,rows:3,...l}),e&&v.jsx("p",{className:"mt-1 text-sm text-red-600",children:e}),t&&!e&&v.jsx("p",{className:"mt-1 text-sm text-gray-500",children:t})]})},G_=({label:n,error:e,helperText:t,children:s,className:o="",id:l,...c})=>{const f=l||(n==null?void 0:n.toLowerCase().replace(/\s/g,"-"));return v.jsxs("div",{className:o,children:[n&&v.jsx("label",{htmlFor:f,className:"block text-sm font-medium text-gray-700 mb-1",children:n}),v.jsx("select",{id:f,className:`block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${e?"border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500":""}`,...c,children:s}),e&&v.jsx("p",{className:"mt-1 text-sm text-red-600",children:e}),t&&!e&&v.jsx("p",{className:"mt-1 text-sm text-gray-500",children:t})]})},CP=()=>{const[n,e]=Q.useState(""),[t,s]=Q.useState(""),[o,l]=Q.useState(null),[c,f]=Q.useState(!1),g=Go(),{user:y}=Vp();if(y)return v.jsx(gc,{to:"/admin/dashboard",replace:!0});const E=async I=>{I.preventDefault(),l(null),f(!0);try{const{error:C}=await sP(n,t);C?l(C.message):g("/admin/dashboard")}catch{l("Erro ao fazer login. Tente novamente.")}finally{f(!1)}};return v.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:v.jsxs("div",{className:"max-w-md w-full space-y-8",children:[v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"mx-auto h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center",children:v.jsx(wP,{className:"h-8 w-8 text-primary-600"})}),v.jsx("h2",{className:"mt-4 text-3xl font-bold text-gray-900",children:"Sistema de Orçamentos"}),v.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Faça login para acessar o painel admin"})]}),v.jsxs("form",{className:"mt-8 space-y-6",onSubmit:E,children:[o&&v.jsx("div",{className:"rounded-md bg-red-50 p-4",children:v.jsx("div",{className:"text-sm text-red-700",children:o})}),v.jsxs("div",{className:"space-y-4",children:[v.jsx(En,{label:"Email",type:"email",value:n,onChange:I=>e(I.target.value),required:!0,placeholder:"seu@email.com",autoComplete:"email"}),v.jsx(En,{label:"Senha",type:"password",value:t,onChange:I=>s(I.target.value),required:!0,placeholder:"••••••••",autoComplete:"current-password"})]}),v.jsx(Vn,{type:"submit",loading:c,disabled:c,className:"w-full",size:"lg",children:"Entrar"}),v.jsx("div",{className:"text-center",children:v.jsx("p",{className:"text-xs text-gray-500",children:"Use as credenciais do Firebase Auth para acessar o sistema."})})]})]})})},Op=n=>n.map(e=>({id:e.id,...e.data()})),Lp=async()=>{const n=Cp(ki(bt,"quote_clients"),Oc("name")),e=await Np(n);return Op(e)},Mp=async n=>{const e=Cp(ki(bt,"quotes",n,"items"),Oc("display_order"),Oc("createdAt")),t=await Np(e);return Op(t)},Q_=async(n,e)=>({id:(await Fw(ki(bt,"quotes",n,"items"),{...e,createdAt:Lo()})).id,...e}),kP=async(n,e,t)=>{const s=dr(bt,"quotes",n,"items",e);await Mw(s,t)},PP=async(n,e)=>{await jw(dr(bt,"quotes",n,"items",e))},NP=()=>{const n=new Date,e=n.getFullYear(),t=String(n.getMonth()+1).padStart(2,"0"),s=Date.now().toString().slice(-6);return`ORC-${e}-${t}-${s}`},Ww=async n=>{const e=[Oc("createdAt","desc")];n!=null&&n.status&&n.status.length>0&&e.push(Ik("status","in",n.status));const t=Cp(ki(bt,"quotes"),...e),s=await Np(t);let o=Op(s);if(n!=null&&n.search){const l=n.search.toLowerCase();o=o.filter(c=>{var f,g;return((f=c.description)==null?void 0:f.toLowerCase().includes(l))||((g=c.clientName)==null?void 0:g.toLowerCase().includes(l))})}return o},DP=async n=>{const e=dr(bt,"quotes",n),t=await Ak(e);if(!t.exists())return null;const s={id:e.id,...t.data()},o=await Mp(n);return s.items=o,s},Y_=async n=>{const e=NP(),t=await Fw(ki(bt,"quotes"),{...n,quote_number:e,createdAt:Lo(),updatedAt:Lo()});if(n.items&&n.items.length>0){const s=Dp(bt);n.items.forEach((o,l)=>{const c=dr(ki(bt,"quotes",t.id,"items"));s.set(c,{...o,display_order:l,createdAt:Lo()})}),await s.commit()}return{id:t.id,quote_number:e,...n}},bP=async(n,e)=>{const t=dr(bt,"quotes",n);if(await Mw(t,{...e,updatedAt:Lo()}),e.items&&e.items.length>0){const s=await Mp(n),o=Dp(bt);s.forEach(l=>{const c=dr(bt,"quotes",n,"items",l.id);o.delete(c)}),e.items.forEach((l,c)=>{const f=dr(ki(bt,"quotes",n,"items"));o.set(f,{...l,display_order:c,createdAt:Lo()})}),await o.commit()}return{id:n,...e}},VP=async n=>{const e=await Mp(n),t=Dp(bt);e.forEach(s=>{const o=dr(bt,"quotes",n,"items",s.id);t.delete(o)}),await t.commit(),await jw(dr(bt,"quotes",n))},Os=[{value:"negociação",label:"Negociação",color:"bg-yellow-100 text-yellow-800"},{value:"aprovado",label:"Aprovado",color:"bg-green-100 text-green-800"},{value:"execução",label:"Em Execução",color:"bg-blue-100 text-blue-800"},{value:"finalizado",label:"Finalizado",color:"bg-gray-100 text-gray-800"},{value:"perdido",label:"Perdido",color:"bg-red-100 text-red-800"}],OP=Os.map(n=>({value:n.value,label:n.label})),ir=n=>n==null?"R$ 0,00":new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2}).format(n),Vf=n=>{if(!n)return"-";const e=new Date(n);return new Intl.DateTimeFormat("pt-BR").format(e)},LP=(n,e,t=0)=>Number(n)+Number(e)-Number(t),MP=(n,e=50)=>n?n.length>e?n.substring(0,e)+"...":n:"",jp=({size:n="md",className:e=""})=>{const t={sm:"h-4 w-4",md:"h-8 w-8",lg:"h-12 w-12"};return v.jsxs("svg",{className:`animate-spin text-primary-600 ${t[n]} ${e}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[v.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),v.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})},jP=()=>{const[n,e]=Q.useState({totalQuotes:0,totalClients:0,quotesByStatus:{},recentQuotes:[],totalValue:0}),[t,s]=Q.useState(!0);Q.useEffect(()=>{o()},[]);const o=async()=>{try{const c=await Ww(),f=await Lp(),g=c.length,y=f.length,E={};Os.forEach(W=>{E[W.value]=0}),c.forEach(W=>{E[W.status]!==void 0&&E[W.status]++});const C=c.filter(W=>["aprovado","execução","finalizado"].includes(W.status)).reduce((W,z)=>W+Number(z.total),0),V=c.slice(0,5).map(W=>{const z=f.find(M=>M.id===W.client_id);return{...W,client:z?{name:z.name,company_name:z.company_name}:null}});e({totalQuotes:g,totalClients:y,quotesByStatus:E,recentQuotes:V,totalValue:C})}catch(c){console.error("Error fetching dashboard data:",c)}finally{s(!1)}},l=c=>{switch(c){case"negociação":return yP;case"aprovado":return H_;case"execução":return IP;case"finalizado":return H_;case"perdido":return gP;default:return jo}};return t?v.jsx("div",{className:"flex items-center justify-center h-64",children:v.jsx(jp,{size:"lg"})}):v.jsxs("div",{className:"space-y-6",children:[v.jsxs("div",{children:[v.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Dashboard"}),v.jsx("p",{className:"text-gray-600 mt-1",children:"Visão geral do seu negócio"})]}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[v.jsx("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:v.jsxs("div",{className:"flex items-center",children:[v.jsx("div",{className:"p-2 bg-primary-100 rounded-lg",children:v.jsx(jo,{className:"h-6 w-6 text-primary-600"})}),v.jsxs("div",{className:"ml-4",children:[v.jsx("p",{className:"text-sm font-medium text-gray-500",children:"Total de Orçamentos"}),v.jsx("p",{className:"text-2xl font-bold text-gray-900",children:n.totalQuotes})]})]})}),v.jsx("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:v.jsxs("div",{className:"flex items-center",children:[v.jsx("div",{className:"p-2 bg-green-100 rounded-lg",children:v.jsx(bf,{className:"h-6 w-6 text-green-600"})}),v.jsxs("div",{className:"ml-4",children:[v.jsx("p",{className:"text-sm font-medium text-gray-500",children:"Clientes Cadastrados"}),v.jsx("p",{className:"text-2xl font-bold text-gray-900",children:n.totalClients})]})]})}),v.jsx("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:v.jsxs("div",{className:"flex items-center",children:[v.jsx("div",{className:"p-2 bg-blue-100 rounded-lg",children:v.jsx(AP,{className:"h-6 w-6 text-blue-600"})}),v.jsxs("div",{className:"ml-4",children:[v.jsx("p",{className:"text-sm font-medium text-gray-500",children:"Valor Total Aprovado"}),v.jsx("p",{className:"text-2xl font-bold text-gray-900",children:ir(n.totalValue)})]})]})}),v.jsx("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:v.jsxs("div",{className:"flex items-center",children:[v.jsx("div",{className:"p-2 bg-purple-100 rounded-lg",children:v.jsx(mP,{className:"h-6 w-6 text-purple-600"})}),v.jsxs("div",{className:"ml-4",children:[v.jsx("p",{className:"text-sm font-medium text-gray-500",children:"Em Negociação"}),v.jsx("p",{className:"text-2xl font-bold text-gray-900",children:n.quotesByStatus.negociação||0})]})]})})]}),v.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[v.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:[v.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Status dos Orçamentos"}),v.jsx("div",{className:"space-y-3",children:Os.map(c=>{const f=l(c.value);return v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("div",{className:"flex items-center",children:[v.jsx(f,{className:"h-5 w-5 mr-3",style:{color:c.color.split(" ")[1].replace("bg-","").replace("-100","")}}),v.jsx("span",{className:"text-sm font-medium text-gray-700",children:c.label})]}),v.jsx("span",{className:"text-lg font-bold text-gray-900",children:n.quotesByStatus[c.value]||0})]},c.value)})})]}),v.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:[v.jsxs("div",{className:"flex items-center justify-between mb-4",children:[v.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"Últimos Orçamentos"}),v.jsx(or,{to:"/admin/orcamentos",className:"text-sm text-primary-600 hover:text-primary-700",children:"Ver todos"})]}),v.jsx("div",{className:"space-y-3",children:n.recentQuotes.length===0?v.jsx("p",{className:"text-sm text-gray-500",children:"Nenhum orçamento cadastrado"}):n.recentQuotes.map(c=>{var y,E;const f=Os.find(I=>I.value===c.status),g=((y=c.client)==null?void 0:y.company_name)||((E=c.client)==null?void 0:E.name)||"Cliente não informado";return v.jsxs(or,{to:`/admin/orcamentos/${c.id}`,className:"flex items-center justify-between p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors",children:[v.jsxs("div",{children:[v.jsx("p",{className:"text-sm font-medium text-gray-900",children:c.quote_number}),v.jsx("p",{className:"text-xs text-gray-500 truncate max-w-xs",children:g})]}),v.jsxs("div",{className:"text-right",children:[v.jsx("p",{className:"text-sm font-bold text-gray-900",children:ir(c.total)}),v.jsx("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${f.color}`,children:f.label})]})]},c.id)})})]})]}),v.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:[v.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Ações Rápidas"}),v.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[v.jsxs(or,{to:"/admin/orcamentos",className:"flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",children:[v.jsx(jo,{className:"h-8 w-8 text-primary-600 mb-2"}),v.jsx("span",{className:"text-sm font-medium text-gray-700",children:"Novo Orçamento"})]}),v.jsxs(or,{to:"/admin/clientes",className:"flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",children:[v.jsx(bf,{className:"h-8 w-8 text-green-600 mb-2"}),v.jsx("span",{className:"text-sm font-medium text-gray-700",children:"Cadastrar Cliente"})]})]})]})]})},FP=({search:n,onSearchChange:e,selectedStatuses:t,onStatusChange:s})=>{const o=f=>{t.includes(f)?s(t.filter(g=>g!==f)):s([...t,f])},l=()=>{e(""),s([])},c=n||t.length>0;return v.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6",children:[v.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[v.jsxs("div",{className:"flex-1 relative",children:[v.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:v.jsx(SP,{className:"h-5 w-5 text-gray-400"})}),v.jsx("input",{type:"text",placeholder:"Buscar por descrição ou cliente...",value:n,onChange:f=>e(f.target.value),className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"})]}),v.jsxs("div",{className:"flex flex-wrap gap-2",children:[Os.map(f=>{const g=t.includes(f.value);return v.jsx("button",{onClick:()=>o(f.value),className:`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${g?f.color:"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:f.label},f.value)}),c&&v.jsx("button",{onClick:l,className:"inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors",children:"Limpar filtros"})]})]}),c&&v.jsxs("div",{className:"mt-3 flex items-center gap-2 text-sm text-gray-600",children:[v.jsx("span",{children:"Filtros ativos:"}),n&&v.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 rounded bg-gray-100",children:['"',n,'"']}),t.map(f=>{const g=Os.find(y=>y.value===f);return v.jsx("span",{className:`inline-flex items-center px-2 py-0.5 rounded ${g.color}`,children:g.label},f)})]})]})},UP=()=>{const[n,e]=Q.useState([]),[t,s]=Q.useState(!0),[o,l]=Q.useState(""),[c,f]=Q.useState([]),[g,y]=Q.useState(null),[E,I]=Q.useState(!1);Go(),Q.useEffect(()=>{C()},[o,c]);const C=async()=>{s(!0);try{const[z,M]=await Promise.all([Ww({status:c.length>0?c:void 0}),Lp()]),Z={};M.forEach(he=>{Z[he.id]=he});const se=z.map(he=>({...he,client:Z[he.client_id]||null}));let ae=se;if(o){const he=o.toLowerCase();ae=se.filter(Te=>{var Ce,P,x;return(((Ce=Te.description)==null?void 0:Ce.toLowerCase())||"").includes(he)||(((P=Te.client)==null?void 0:P.name)||"").toLowerCase().includes(he)||(((x=Te.client)==null?void 0:x.company_name)||"").toLowerCase().includes(he)})}e(ae)}catch(z){console.error("Error fetching quotes:",z),e([])}finally{s(!1)}},V=async(z,M)=>{I(!0);try{await VP(z),e(n.filter(Z=>Z.id!==z)),alert(`Orçamento ${M} excluído com sucesso!`)}catch(Z){console.error("Delete error:",Z),alert("Erro ao excluir orçamento")}finally{I(!1),y(null)}},W=z=>Os.find(M=>M.value===z)||Os[0];return v.jsxs("div",{className:"space-y-6",children:[v.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[v.jsxs("div",{children:[v.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Orçamentos"}),v.jsx("p",{className:"text-gray-600 mt-1",children:"Gerencie todos os orçamentos da empresa"})]}),v.jsx(or,{to:"/admin/orcamentos/novo",children:v.jsxs(Vn,{size:"lg",children:[v.jsx(jc,{className:"mr-2 h-5 w-5"}),"Novo Orçamento"]})})]}),v.jsx(FP,{search:o,onSearchChange:l,selectedStatuses:c,onStatusChange:f}),v.jsx("div",{className:"bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden",children:t?v.jsx("div",{className:"flex items-center justify-center p-12",children:v.jsx(jp,{size:"lg"})}):n.length===0?v.jsxs("div",{className:"text-center py-12",children:[v.jsx(jo,{className:"mx-auto h-12 w-12 text-gray-400"}),v.jsx("h3",{className:"mt-4 text-lg font-medium text-gray-900",children:"Nenhum orçamento encontrado"}),v.jsx("p",{className:"mt-2 text-sm text-gray-500",children:o||c.length>0?"Tente ajustar os filtros de busca.":"Comece criando seu primeiro orçamento."}),!o&&c.length===0&&v.jsx("div",{className:"mt-6",children:v.jsx(or,{to:"/admin/orcamentos/novo",children:v.jsxs(Vn,{children:[v.jsx(jc,{className:"mr-2 h-5 w-5"}),"Criar Orçamento"]})})})]}):v.jsx("div",{className:"overflow-x-auto",children:v.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[v.jsx("thead",{className:"bg-gray-50",children:v.jsxs("tr",{children:[v.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Número"}),v.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Cliente"}),v.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Descrição"}),v.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Total"}),v.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),v.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Data"}),v.jsx("th",{className:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Ações"})]})}),v.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:n.map(z=>{var se,ae;const M=W(z.status),Z=((se=z.client)==null?void 0:se.company_name)||((ae=z.client)==null?void 0:ae.name)||"Cliente não informado";return v.jsxs("tr",{className:"hover:bg-gray-50",children:[v.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:v.jsx("div",{className:"text-sm font-medium text-gray-900",children:z.quote_number})}),v.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:v.jsx("div",{className:"text-sm text-gray-900",children:Z})}),v.jsx("td",{className:"px-6 py-4",children:v.jsx("div",{className:"text-sm text-gray-900 max-w-xs truncate",children:MP(z.description,60)})}),v.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:v.jsx("div",{className:"text-sm font-medium text-gray-900",children:ir(z.total)})}),v.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:v.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${M.color}`,children:M.label})}),v.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:Vf(z.issue_date)}),v.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:v.jsxs("div",{className:"flex items-center justify-end gap-2",children:[v.jsx(or,{to:`/admin/orcamentos/${z.id}`,className:"text-primary-600 hover:text-primary-900 p-1",title:"Ver detalhes",children:v.jsx(_P,{className:"h-4 w-4"})}),v.jsx("button",{onClick:()=>y(z),className:"text-red-600 hover:text-red-900 p-1",title:"Excluir",children:v.jsx(Df,{className:"h-4 w-4"})})]})})]},z.id)})})]})})}),g&&v.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:v.jsxs("div",{className:"flex min-h-screen items-center justify-center p-4",children:[v.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75",onClick:()=>y(null)}),v.jsxs("div",{className:"relative bg-white rounded-lg shadow-xl max-w-md w-full z-10 p-6",children:[v.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Confirmar Exclusão"}),v.jsxs("p",{className:"text-sm text-gray-600 mb-6",children:["Tem certeza que deseja excluir o orçamento ",v.jsx("strong",{children:g.quote_number}),"?",v.jsx("br",{}),"Esta ação não pode ser desfeita."]}),v.jsxs("div",{className:"flex justify-end gap-3",children:[v.jsx(Vn,{variant:"secondary",onClick:()=>y(null),disabled:E,children:"Cancelar"}),v.jsx(Vn,{variant:"danger",onClick:()=>V(g.id,g.quote_number),loading:E,disabled:E,children:"Excluir"})]})]})]})})]})},zP=()=>{const{id:n}=UT(),e=Go(),t=n==="novo",[s,o]=Q.useState(!t),[l,c]=Q.useState(!1),[f,g]=Q.useState(null),[y,E]=Q.useState([]),[I,C]=Q.useState(null),[V,W]=Q.useState({quote_number:"",client_id:"",description:"",status:"negociação",issue_date:new Date().toISOString().split("T")[0],valid_until:"",discount:0,notes:"",subtotal_services:0,subtotal_materials:0,total:0}),[z,M]=Q.useState([]),[Z,se]=Q.useState({type:"service",description:"",quantity:1,unit_price:0,unit:""}),[ae,he]=Q.useState(!1);Q.useEffect(()=>{t||Te(),Ce()},[n]);const Te=async()=>{try{const $=await DP(n);if(!$){alert("Orçamento não encontrado"),e("/admin/orcamentos");return}W({quote_number:$.quote_number,client_id:$.client_id||"",description:$.description||"",status:$.status,issue_date:$.issue_date||new Date().toISOString().split("T")[0],valid_until:$.valid_until||"",discount:Number($.discount)||0,notes:$.notes||"",subtotal_services:Number($.subtotal_services)||0,subtotal_materials:Number($.subtotal_materials)||0,total:Number($.total)||0}),M($.items||[])}catch($){console.error("Error:",$),alert("Erro ao carregar orçamento"),e("/admin/orcamentos")}finally{o(!1)}},Ce=async()=>{try{const $=await Lp();E($||[])}catch($){console.error("Error loading clients:",$)}},P=Q.useMemo(()=>z.filter($=>$.type==="service").reduce(($,re)=>$+Number(re.total),0),[z]),x=Q.useMemo(()=>z.filter($=>$.type==="material").reduce(($,re)=>$+Number(re.total),0),[z]),R=Q.useMemo(()=>LP(P,x,V.discount),[P,x,V.discount]),D=($,re)=>{W(te=>({...te,[$]:re}))},N=async()=>{if(!Z.description.trim()||Z.quantity<=0||Z.unit_price<=0){alert("Preencha descrição, quantidade e valor unitário");return}try{if(t){if(!V.id){const re=await Y_({client_id:V.client_id,description:V.description,status:V.status,issue_date:V.issue_date,valid_until:V.valid_until||null,discount:V.discount,notes:V.notes});W(te=>({...te,id:re.id,quote_number:re.quote_number}))}const{data:$}=await Q_(V.id,{...Z,total:Z.quantity*Z.unit_price});M(re=>[...re,$])}else{const{data:$}=await Q_(n,{...Z,total:Z.quantity*Z.unit_price});M(re=>[...re,$])}se({type:"service",description:"",quantity:1,unit_price:0,unit:""}),he(!1)}catch($){alert(`Erro ao adicionar item: ${$.message}`)}},O=async($,re,te)=>{M(pe=>pe.map(oe=>oe.id===$?{...oe,[re]:te}:oe));try{const pe={[re]:te};if(re==="quantity"||re==="unit_price"){const oe=z.find(xe=>xe.id===$),L=re==="quantity"?te:Number(oe.quantity),G=re==="unit_price"?te:Number(oe.unit_price);pe.total=L*G}await kP(t?V.id:n,$,pe)}catch(pe){alert(`Erro ao atualizar item: ${pe.message}`)}},A=async $=>{g($);try{await PP(t?V.id:n,$),M(re=>re.filter(te=>te.id!==$))}catch(re){alert(`Erro ao excluir item: ${re.message}`)}finally{g(null)}},qe=async()=>{if(!V.client_id){alert("Selecione um cliente");return}c(!0);try{if(t){if(!V.id){const $=await Y_({client_id:V.client_id,description:V.description,status:V.status,issue_date:V.issue_date,valid_until:V.valid_until||null,discount:V.discount,notes:V.notes});W(re=>({...re,id:$.id,quote_number:$.quote_number})),alert(`Orçamento ${$.quote_number} criado com sucesso!`)}}else await bP(n,{client_id:V.client_id,description:V.description,status:V.status,issue_date:V.issue_date,valid_until:V.valid_until||null,discount:V.discount,notes:V.notes}),alert("Orçamento salvo com sucesso!")}catch($){alert(`Erro ao salvar: ${$.message}`)}finally{c(!1)}};if(s)return v.jsx("div",{className:"flex items-center justify-center h-64",children:v.jsx(jp,{size:"lg"})});const Ke=y.find($=>$.id===V.client_id);return v.jsxs("div",{className:"space-y-6",children:[v.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[v.jsxs("div",{className:"flex items-center gap-4",children:[v.jsx(or,{to:"/admin/orcamentos",className:"text-gray-500 hover:text-gray-700",children:v.jsx(dP,{className:"h-6 w-6"})}),v.jsxs("div",{children:[v.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:t?"Novo Orçamento":`Orçamento ${V.quote_number}`}),v.jsx("p",{className:"text-gray-600 mt-1",children:t?"Preencha as informações abaixo":"Edite as informações do orçamento"})]})]}),v.jsxs("div",{className:"flex gap-3",children:[v.jsx(Vn,{variant:"secondary",onClick:()=>e("/admin/orcamentos"),children:"Cancelar"}),v.jsxs(Vn,{onClick:qe,loading:l,children:[v.jsx(xP,{className:"mr-2 h-4 w-4"}),"Salvar"]})]})]}),v.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[v.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[v.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:[v.jsxs("h2",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center",children:[v.jsx(jo,{className:"mr-2 h-5 w-5"}),"Dados do Orçamento"]}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[v.jsx("div",{className:"md:col-span-2",children:v.jsxs(G_,{label:"Cliente",value:V.client_id,onChange:$=>D("client_id",$.target.value),error:!V.client_id&&"Cliente é obrigatório",children:[v.jsx("option",{value:"",children:"Selecione um cliente"}),y.map($=>v.jsxs("option",{value:$.id,children:[$.company_name||$.name," ",$.email&&`(${$.email})`]},$.id))]})}),v.jsx(K_,{label:"Descrição",value:V.description,onChange:$=>D("description",$.target.value),placeholder:"Descreva o trabalho ou projeto...",rows:3}),v.jsx(G_,{label:"Status",value:V.status,onChange:$=>D("status",$.target.value),children:OP.map($=>v.jsx("option",{value:$.value,children:$.label},$.value))}),v.jsx(En,{label:"Data de Emissão",type:"date",value:V.issue_date,onChange:$=>D("issue_date",$.target.value)}),v.jsx(En,{label:"Validade (opcional)",type:"date",value:V.valid_until,onChange:$=>D("valid_until",$.target.value)}),v.jsx("div",{className:"md:col-span-2",children:v.jsx(K_,{label:"Observações",value:V.notes,onChange:$=>D("notes",$.target.value),placeholder:"Informações adicionais...",rows:2})})]})]}),v.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:[v.jsxs("div",{className:"flex items-center justify-between mb-4",children:[v.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"Serviços"}),v.jsxs(Vn,{size:"sm",onClick:()=>he(!ae),children:[v.jsx(jc,{className:"mr-1 h-4 w-4"}),"Adicionar"]})]}),ae&&v.jsxs("div",{className:"mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200",children:[v.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-3",children:"Novo Serviço"}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3",children:[v.jsx(En,{label:"Descrição",value:Z.description,onChange:$=>se(re=>({...re,description:$.target.value})),placeholder:"Ex: Consultoria"}),v.jsx(En,{label:"Qtd",type:"number",step:"0.01",min:"0",value:Z.quantity,onChange:$=>se(re=>({...re,quantity:parseFloat($.target.value)||0}))}),v.jsx(En,{label:"Valor Unit.",type:"number",step:"0.01",min:"0",value:Z.unit_price,onChange:$=>se(re=>({...re,unit_price:parseFloat($.target.value)||0})),prefix:"R$"}),v.jsx(En,{label:"Unidade",value:Z.unit,onChange:$=>se(re=>({...re,unit:$.target.value})),placeholder:"hora, un, m²..."}),v.jsx("div",{className:"flex items-end",children:v.jsx(Vn,{onClick:N,className:"w-full",children:"Adicionar"})})]})]}),z.filter($=>$.type==="service").length===0?v.jsx("p",{className:"text-sm text-gray-500 text-center py-8",children:"Nenhum serviço adicionado"}):v.jsx("div",{className:"overflow-x-auto",children:v.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[v.jsx("thead",{className:"bg-gray-50",children:v.jsxs("tr",{children:[v.jsx("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase",children:"Descrição"}),v.jsx("th",{className:"px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-16",children:"Qtd"}),v.jsx("th",{className:"px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-20",children:"Un"}),v.jsx("th",{className:"px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase w-28",children:"Vlr Unit."}),v.jsx("th",{className:"px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase w-24",children:"Total"}),v.jsx("th",{className:"px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase w-16",children:"Ações"})]})}),v.jsx("tbody",{className:"divide-y divide-gray-200",children:z.filter($=>$.type==="service").map($=>v.jsxs("tr",{className:"hover:bg-gray-50",children:[v.jsx("td",{className:"px-3 py-2",children:v.jsx("input",{type:"text",value:$.description,onChange:re=>O($.id,"description",re.target.value),className:"w-full text-sm border-0 focus:ring-0 p-0 bg-transparent"})}),v.jsx("td",{className:"px-3 py-2",children:v.jsx("input",{type:"number",step:"0.01",min:"0",value:$.quantity,onChange:re=>O($.id,"quantity",parseFloat(re.target.value)||0),className:"w-full text-center text-sm border-0 focus:ring-0 p-0 bg-transparent"})}),v.jsx("td",{className:"px-3 py-2",children:v.jsx("input",{type:"text",value:$.unit||"",onChange:re=>O($.id,"unit",re.target.value),className:"w-full text-center text-sm border-0 focus:ring-0 p-0 bg-transparent"})}),v.jsx("td",{className:"px-3 py-2",children:v.jsxs("div",{className:"flex items-center justify-end",children:[v.jsx("span",{className:"text-gray-500 mr-1",children:"R$"}),v.jsx("input",{type:"number",step:"0.01",min:"0",value:$.unit_price,onChange:re=>O($.id,"unit_price",parseFloat(re.target.value)||0),className:"w-full text-right text-sm border-0 focus:ring-0 p-0 bg-transparent"})]})}),v.jsx("td",{className:"px-3 py-2 text-right text-sm font-medium text-gray-900",children:ir($.total)}),v.jsx("td",{className:"px-3 py-2 text-right",children:v.jsx("button",{onClick:()=>A($.id),disabled:f===$.id,className:"text-red-600 hover:text-red-900 disabled:opacity-50",children:v.jsx(Df,{className:"h-4 w-4"})})})]},$.id))}),v.jsx("tfoot",{children:v.jsxs("tr",{className:"bg-gray-50 font-medium",children:[v.jsx("td",{colSpan:3,className:"px-3 py-2 text-right text-sm text-gray-700",children:"Subtotal Serviços:"}),v.jsx("td",{colSpan:3,className:"px-3 py-2 text-right text-sm font-bold text-gray-900",children:ir(P)})]})})]})})]}),v.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:[v.jsxs("div",{className:"flex items-center justify-between mb-4",children:[v.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"Materiais"}),v.jsxs(Vn,{size:"sm",onClick:()=>{se({...Z,type:"material"}),he(!0)},children:[v.jsx(jc,{className:"mr-1 h-4 w-4"}),"Adicionar"]})]}),ae&&v.jsxs("div",{className:"mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200",children:[v.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-3",children:"Novo Material"}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3",children:[v.jsx(En,{label:"Descrição",value:Z.description,onChange:$=>se(re=>({...re,description:$.target.value})),placeholder:"Ex: Tijolo"}),v.jsx(En,{label:"Qtd",type:"number",step:"0.01",min:"0",value:Z.quantity,onChange:$=>se(re=>({...re,quantity:parseFloat($.target.value)||0}))}),v.jsx(En,{label:"Valor Unit.",type:"number",step:"0.01",min:"0",value:Z.unit_price,onChange:$=>se(re=>({...re,unit_price:parseFloat($.target.value)||0})),prefix:"R$"}),v.jsx(En,{label:"Unidade",value:Z.unit,onChange:$=>se(re=>({...re,unit:$.target.value})),placeholder:"un, m², kg..."}),v.jsx("div",{className:"flex items-end",children:v.jsx(Vn,{onClick:N,className:"w-full",children:"Adicionar"})})]})]}),z.filter($=>$.type==="material").length===0?v.jsx("p",{className:"text-sm text-gray-500 text-center py-8",children:"Nenhum material adicionado"}):v.jsx("div",{className:"overflow-x-auto",children:v.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[v.jsx("thead",{className:"bg-gray-50",children:v.jsxs("tr",{children:[v.jsx("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase",children:"Descrição"}),v.jsx("th",{className:"px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-16",children:"Qtd"}),v.jsx("th",{className:"px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-20",children:"Un"}),v.jsx("th",{className:"px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase w-28",children:"Vlr Unit."}),v.jsx("th",{className:"px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase w-24",children:"Total"}),v.jsx("th",{className:"px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase w-16",children:"Ações"})]})}),v.jsx("tbody",{className:"divide-y divide-gray-200",children:z.filter($=>$.type==="material").map($=>v.jsxs("tr",{className:"hover:bg-gray-50",children:[v.jsx("td",{className:"px-3 py-2",children:v.jsx("input",{type:"text",value:$.description,onChange:re=>O($.id,"description",re.target.value),className:"w-full text-sm border-0 focus:ring-0 p-0 bg-transparent"})}),v.jsx("td",{className:"px-3 py-2",children:v.jsx("input",{type:"number",step:"0.01",min:"0",value:$.quantity,onChange:re=>O($.id,"quantity",parseFloat(re.target.value)||0),className:"w-full text-center text-sm border-0 focus:ring-0 p-0 bg-transparent"})}),v.jsx("td",{className:"px-3 py-2",children:v.jsx("input",{type:"text",value:$.unit||"",onChange:re=>O($.id,"unit",re.target.value),className:"w-full text-center text-sm border-0 focus:ring-0 p-0 bg-transparent"})}),v.jsx("td",{className:"px-3 py-2",children:v.jsxs("div",{className:"flex items-center justify-end",children:[v.jsx("span",{className:"text-gray-500 mr-1",children:"R$"}),v.jsx("input",{type:"number",step:"0.01",min:"0",value:$.unit_price,onChange:re=>O($.id,"unit_price",parseFloat(re.target.value)||0),className:"w-full text-right text-sm border-0 focus:ring-0 p-0 bg-transparent"})]})}),v.jsx("td",{className:"px-3 py-2 text-right text-sm font-medium text-gray-900",children:ir($.total)}),v.jsx("td",{className:"px-3 py-2 text-right",children:v.jsx("button",{onClick:()=>A($.id),disabled:f===$.id,className:"text-red-600 hover:text-red-900 disabled:opacity-50",children:v.jsx(Df,{className:"h-4 w-4"})})})]},$.id))}),v.jsx("tfoot",{children:v.jsxs("tr",{className:"bg-gray-50 font-medium",children:[v.jsx("td",{colSpan:3,className:"px-3 py-2 text-right text-sm text-gray-700",children:"Subtotal Materiais:"}),v.jsx("td",{colSpan:3,className:"px-3 py-2 text-right text-sm font-bold text-gray-900",children:ir(x)})]})})]})})]})]}),v.jsx("div",{className:"lg:col-span-1",children:v.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-6",children:[v.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Resumo"}),Ke&&v.jsxs("div",{className:"mb-6 p-4 bg-gray-50 rounded-lg",children:[v.jsxs("h3",{className:"text-sm font-medium text-gray-700 mb-2 flex items-center",children:[v.jsx(fP,{className:"mr-2 h-4 w-4"}),"Cliente"]}),v.jsx("p",{className:"text-sm font-medium text-gray-900",children:Ke.company_name||Ke.name}),Ke.email&&v.jsx("p",{className:"text-sm text-gray-600 mt-1",children:Ke.email}),Ke.phone&&v.jsx("p",{className:"text-sm text-gray-600",children:Ke.phone})]}),v.jsxs("div",{className:"space-y-3 mb-6",children:[v.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-gray-200",children:[v.jsx("span",{className:"text-sm text-gray-600",children:"Subtotal Serviços"}),v.jsx("span",{className:"text-sm font-medium text-gray-900",children:ir(P)})]}),v.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-gray-200",children:[v.jsx("span",{className:"text-sm text-gray-600",children:"Subtotal Materiais"}),v.jsx("span",{className:"text-sm font-medium text-gray-900",children:ir(x)})]}),v.jsxs("div",{className:"flex justify-between items-center py-2",children:[v.jsx("span",{className:"text-sm text-gray-600",children:"Desconto"}),v.jsx("input",{type:"number",step:"0.01",min:"0",value:V.discount,onChange:$=>D("discount",parseFloat($.target.value)||0),className:"w-32 text-right text-sm border border-gray-300 rounded-md px-2 py-1 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"})]}),v.jsxs("div",{className:"flex justify-between items-center py-3 border-t-2 border-gray-300",children:[v.jsx("span",{className:"text-base font-bold text-gray-900",children:"Total Final"}),v.jsx("span",{className:"text-xl font-bold text-primary-700",children:ir(R)})]})]}),v.jsxs("div",{className:"space-y-3 text-sm",children:[v.jsxs("div",{className:"flex items-start",children:[v.jsx(W_,{className:"mr-2 h-4 w-4 text-gray-400 mt-0.5"}),v.jsxs("div",{children:[v.jsx("p",{className:"text-gray-600",children:"Emissão"}),v.jsx("p",{className:"font-medium text-gray-900",children:Vf(V.issue_date)})]})]}),V.valid_until&&v.jsxs("div",{className:"flex items-start",children:[v.jsx(W_,{className:"mr-2 h-4 w-4 text-gray-400 mt-0.5"}),v.jsxs("div",{children:[v.jsx("p",{className:"text-gray-600",children:"Validade"}),v.jsx("p",{className:"font-medium text-gray-900",children:Vf(V.valid_until)})]})]})]})]})})]})]})};function BP(){return v.jsx(lP,{children:v.jsxs(nI,{children:[v.jsx(Ts,{path:"/admin/login",element:v.jsx(CP,{})}),v.jsx(Ts,{path:"/admin",element:v.jsx(Za,{children:v.jsx(el,{children:v.jsx(gc,{to:"/admin/dashboard",replace:!0})})})}),v.jsx(Ts,{path:"/admin/dashboard",element:v.jsx(Za,{children:v.jsx(el,{children:v.jsx(jP,{})})})}),v.jsx(Ts,{path:"/admin/orcamentos",element:v.jsx(Za,{children:v.jsx(el,{children:v.jsx(UP,{})})})}),v.jsx(Ts,{path:"/admin/orcamentos/:id",element:v.jsx(Za,{children:v.jsx(el,{children:v.jsx(zP,{})})})}),v.jsx(Ts,{path:"/admin/clientes",element:v.jsx(Za,{children:v.jsx(el,{children:v.jsxs("div",{className:"p-8",children:[v.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Clientes"}),v.jsx("p",{className:"text-gray-600 mt-2",children:"Página de clientes - em desenvolvimento"})]})})})}),v.jsx(Ts,{path:"*",element:v.jsx(gc,{to:"/admin/dashboard",replace:!0})})]})})}uT.createRoot(document.getElementById("root")).render(v.jsx(Q.StrictMode,{children:v.jsx(uI,{children:v.jsx(BP,{})})}));
