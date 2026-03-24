const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-Bc6bdEIu.js","assets/Button-DxXvUmS_.js","assets/Input-DTvTvzAZ.js","assets/Dashboard-Dy7sP81e.js","assets/queries-BdJn7cQD.js","assets/formatters-B1dLDHUs.js","assets/Clients-9tZZTODH.js","assets/Modal-D2FjrnpN.js","assets/trash-2-Bfrtr7op.js","assets/pen-Cq9zNxm5.js","assets/ClientForm-CzmlU5d_.js","assets/save-_5l5pZLX.js","assets/Services-WpPLSBsi.js","assets/ServiceForm-LDWFbN91.js","assets/Materials-Cx5lxFmi.js","assets/MaterialForm-C1Rv-ggS.js","assets/Quotes-DkZsS07l.js","assets/index-DFB5i4qm.js"])))=>i.map(i=>d[i]);
function M0(r,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function F0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Rd={exports:{}},Wa={},Cd={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function U0(){if(xg)return Re;xg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.iterator;function R(V){return V===null||typeof V!="object"?null:(V=w&&V[w]||V["@@iterator"],typeof V=="function"?V:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,H={};function U(V,G,Ie){this.props=V,this.context=G,this.refs=H,this.updater=Ie||z}U.prototype.isReactComponent={},U.prototype.setState=function(V,G){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,G,"setState")},U.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function re(){}re.prototype=U.prototype;function he(V,G,Ie){this.props=V,this.context=G,this.refs=H,this.updater=Ie||z}var ue=he.prototype=new re;ue.constructor=he,W(ue,U.prototype),ue.isPureReactComponent=!0;var ge=Array.isArray,Ae=Object.prototype.hasOwnProperty,Ce={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(V,G,Ie){var Se,Pe={},ke=null,Ue=null;if(G!=null)for(Se in G.ref!==void 0&&(Ue=G.ref),G.key!==void 0&&(ke=""+G.key),G)Ae.call(G,Se)&&!k.hasOwnProperty(Se)&&(Pe[Se]=G[Se]);var Le=arguments.length-2;if(Le===1)Pe.children=Ie;else if(1<Le){for(var Be=Array(Le),$t=0;$t<Le;$t++)Be[$t]=arguments[$t+2];Pe.children=Be}if(V&&V.defaultProps)for(Se in Le=V.defaultProps,Le)Pe[Se]===void 0&&(Pe[Se]=Le[Se]);return{$$typeof:r,type:V,key:ke,ref:Ue,props:Pe,_owner:Ce.current}}function C(V,G){return{$$typeof:r,type:V.type,key:G,ref:V.ref,props:V.props,_owner:V._owner}}function D(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function N(V){var G={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Ie){return G[Ie]})}var O=/\/+/g;function A(V,G){return typeof V=="object"&&V!==null&&V.key!=null?N(""+V.key):G.toString(36)}function We(V,G,Ie,Se,Pe){var ke=typeof V;(ke==="undefined"||ke==="boolean")&&(V=null);var Ue=!1;if(V===null)Ue=!0;else switch(ke){case"string":case"number":Ue=!0;break;case"object":switch(V.$$typeof){case r:case e:Ue=!0}}if(Ue)return Ue=V,Pe=Pe(Ue),V=Se===""?"."+A(Ue,0):Se,ge(Pe)?(Ie="",V!=null&&(Ie=V.replace(O,"$&/")+"/"),We(Pe,G,Ie,"",function($t){return $t})):Pe!=null&&(D(Pe)&&(Pe=C(Pe,Ie+(!Pe.key||Ue&&Ue.key===Pe.key?"":(""+Pe.key).replace(O,"$&/")+"/")+V)),G.push(Pe)),1;if(Ue=0,Se=Se===""?".":Se+":",ge(V))for(var Le=0;Le<V.length;Le++){ke=V[Le];var Be=Se+A(ke,Le);Ue+=We(ke,G,Ie,Be,Pe)}else if(Be=R(V),typeof Be=="function")for(V=Be.call(V),Le=0;!(ke=V.next()).done;)ke=ke.value,Be=Se+A(ke,Le++),Ue+=We(ke,G,Ie,Be,Pe);else if(ke==="object")throw G=String(V),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Ue}function Et(V,G,Ie){if(V==null)return V;var Se=[],Pe=0;return We(V,Se,"","",function(ke){return G.call(Ie,ke,Pe++)}),Se}function Vt(V){if(V._status===-1){var G=V._result;G=G(),G.then(function(Ie){(V._status===0||V._status===-1)&&(V._status=1,V._result=Ie)},function(Ie){(V._status===0||V._status===-1)&&(V._status=2,V._result=Ie)}),V._status===-1&&(V._status=0,V._result=G)}if(V._status===1)return V._result.default;throw V._result}var Je={current:null},ee={transition:null},fe={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Ce};function se(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:Et,forEach:function(V,G,Ie){Et(V,function(){G.apply(this,arguments)},Ie)},count:function(V){var G=0;return Et(V,function(){G++}),G},toArray:function(V){return Et(V,function(G){return G})||[]},only:function(V){if(!D(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Re.Component=U,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=he,Re.StrictMode=i,Re.Suspense=g,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Re.act=se,Re.cloneElement=function(V,G,Ie){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Se=W({},V.props),Pe=V.key,ke=V.ref,Ue=V._owner;if(G!=null){if(G.ref!==void 0&&(ke=G.ref,Ue=Ce.current),G.key!==void 0&&(Pe=""+G.key),V.type&&V.type.defaultProps)var Le=V.type.defaultProps;for(Be in G)Ae.call(G,Be)&&!k.hasOwnProperty(Be)&&(Se[Be]=G[Be]===void 0&&Le!==void 0?Le[Be]:G[Be])}var Be=arguments.length-2;if(Be===1)Se.children=Ie;else if(1<Be){Le=Array(Be);for(var $t=0;$t<Be;$t++)Le[$t]=arguments[$t+2];Se.children=Le}return{$$typeof:r,type:V.type,key:Pe,ref:ke,props:Se,_owner:Ue}},Re.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Re.createElement=S,Re.createFactory=function(V){var G=S.bind(null,V);return G.type=V,G},Re.createRef=function(){return{current:null}},Re.forwardRef=function(V){return{$$typeof:f,render:V}},Re.isValidElement=D,Re.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:Vt}},Re.memo=function(V,G){return{$$typeof:y,type:V,compare:G===void 0?null:G}},Re.startTransition=function(V){var G=ee.transition;ee.transition={};try{V()}finally{ee.transition=G}},Re.unstable_act=se,Re.useCallback=function(V,G){return Je.current.useCallback(V,G)},Re.useContext=function(V){return Je.current.useContext(V)},Re.useDebugValue=function(){},Re.useDeferredValue=function(V){return Je.current.useDeferredValue(V)},Re.useEffect=function(V,G){return Je.current.useEffect(V,G)},Re.useId=function(){return Je.current.useId()},Re.useImperativeHandle=function(V,G,Ie){return Je.current.useImperativeHandle(V,G,Ie)},Re.useInsertionEffect=function(V,G){return Je.current.useInsertionEffect(V,G)},Re.useLayoutEffect=function(V,G){return Je.current.useLayoutEffect(V,G)},Re.useMemo=function(V,G){return Je.current.useMemo(V,G)},Re.useReducer=function(V,G,Ie){return Je.current.useReducer(V,G,Ie)},Re.useRef=function(V){return Je.current.useRef(V)},Re.useState=function(V){return Je.current.useState(V)},Re.useSyncExternalStore=function(V,G,Ie){return Je.current.useSyncExternalStore(V,G,Ie)},Re.useTransition=function(){return Je.current.useTransition()},Re.version="18.3.1",Re}var Dg;function Af(){return Dg||(Dg=1,Cd.exports=U0()),Cd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function j0(){if(Vg)return Wa;Vg=1;var r=Af(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,y){var E,w={},R=null,z=null;y!==void 0&&(R=""+y),g.key!==void 0&&(R=""+g.key),g.ref!==void 0&&(z=g.ref);for(E in g)i.call(g,E)&&!l.hasOwnProperty(E)&&(w[E]=g[E]);if(f&&f.defaultProps)for(E in g=f.defaultProps,g)w[E]===void 0&&(w[E]=g[E]);return{$$typeof:e,type:f,key:R,ref:z,props:w,_owner:o.current}}return Wa.Fragment=t,Wa.jsx=h,Wa.jsxs=h,Wa}var Og;function z0(){return Og||(Og=1,Rd.exports=j0()),Rd.exports}var L=z0(),K=Af();const B0=F0(K),$0=M0({__proto__:null,default:B0},[K]);var $u={},Pd={exports:{}},Jt={},kd={exports:{}},Nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function W0(){return Lg||(Lg=1,(function(r){function e(ee,fe){var se=ee.length;ee.push(fe);e:for(;0<se;){var V=se-1>>>1,G=ee[V];if(0<o(G,fe))ee[V]=fe,ee[se]=G,se=V;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var fe=ee[0],se=ee.pop();if(se!==fe){ee[0]=se;e:for(var V=0,G=ee.length,Ie=G>>>1;V<Ie;){var Se=2*(V+1)-1,Pe=ee[Se],ke=Se+1,Ue=ee[ke];if(0>o(Pe,se))ke<G&&0>o(Ue,Pe)?(ee[V]=Ue,ee[ke]=se,V=ke):(ee[V]=Pe,ee[Se]=se,V=Se);else if(ke<G&&0>o(Ue,se))ee[V]=Ue,ee[ke]=se,V=ke;else break e}}return fe}function o(ee,fe){var se=ee.sortIndex-fe.sortIndex;return se!==0?se:ee.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],y=[],E=1,w=null,R=3,z=!1,W=!1,H=!1,U=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,he=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ue(ee){for(var fe=t(y);fe!==null;){if(fe.callback===null)i(y);else if(fe.startTime<=ee)i(y),fe.sortIndex=fe.expirationTime,e(g,fe);else break;fe=t(y)}}function ge(ee){if(H=!1,ue(ee),!W)if(t(g)!==null)W=!0,Vt(Ae);else{var fe=t(y);fe!==null&&Je(ge,fe.startTime-ee)}}function Ae(ee,fe){W=!1,H&&(H=!1,re(S),S=-1),z=!0;var se=R;try{for(ue(fe),w=t(g);w!==null&&(!(w.expirationTime>fe)||ee&&!N());){var V=w.callback;if(typeof V=="function"){w.callback=null,R=w.priorityLevel;var G=V(w.expirationTime<=fe);fe=r.unstable_now(),typeof G=="function"?w.callback=G:w===t(g)&&i(g),ue(fe)}else i(g);w=t(g)}if(w!==null)var Ie=!0;else{var Se=t(y);Se!==null&&Je(ge,Se.startTime-fe),Ie=!1}return Ie}finally{w=null,R=se,z=!1}}var Ce=!1,k=null,S=-1,C=5,D=-1;function N(){return!(r.unstable_now()-D<C)}function O(){if(k!==null){var ee=r.unstable_now();D=ee;var fe=!0;try{fe=k(!0,ee)}finally{fe?A():(Ce=!1,k=null)}}else Ce=!1}var A;if(typeof he=="function")A=function(){he(O)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,Et=We.port2;We.port1.onmessage=O,A=function(){Et.postMessage(null)}}else A=function(){U(O,0)};function Vt(ee){k=ee,Ce||(Ce=!0,A())}function Je(ee,fe){S=U(function(){ee(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){W||z||(W=!0,Vt(Ae))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(R){case 1:case 2:case 3:var fe=3;break;default:fe=R}var se=R;R=fe;try{return ee()}finally{R=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,fe){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var se=R;R=ee;try{return fe()}finally{R=se}},r.unstable_scheduleCallback=function(ee,fe,se){var V=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?V+se:V):se=V,ee){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=se+G,ee={id:E++,callback:fe,priorityLevel:ee,startTime:se,expirationTime:G,sortIndex:-1},se>V?(ee.sortIndex=se,e(y,ee),t(g)===null&&ee===t(y)&&(H?(re(S),S=-1):H=!0,Je(ge,se-V))):(ee.sortIndex=G,e(g,ee),W||z||(W=!0,Vt(Ae))),ee},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(ee){var fe=R;return function(){var se=R;R=fe;try{return ee.apply(this,arguments)}finally{R=se}}}})(Nd)),Nd}var bg;function H0(){return bg||(bg=1,kd.exports=W0()),kd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function q0(){if(Mg)return Jt;Mg=1;var r=Af(),e=H0();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},w={};function R(n){return g.call(w,n)?!0:g.call(E,n)?!1:y.test(n)?w[n]=!0:(E[n]=!0,!1)}function z(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function W(n,s,a,c){if(s===null||typeof s>"u"||z(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function H(n,s,a,c,d,p,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=p,this.removeEmptyString=v}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){U[n]=new H(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];U[s]=new H(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){U[n]=new H(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){U[n]=new H(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){U[n]=new H(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){U[n]=new H(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){U[n]=new H(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){U[n]=new H(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){U[n]=new H(n,5,!1,n.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function he(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(re,he);U[s]=new H(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(re,he);U[s]=new H(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(re,he);U[s]=new H(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){U[n]=new H(n,1,!1,n.toLowerCase(),null,!1,!1)}),U.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){U[n]=new H(n,1,!1,n.toLowerCase(),null,!0,!0)});function ue(n,s,a,c){var d=U.hasOwnProperty(s)?U[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(W(s,a,d,c)&&(a=null),c||d===null?R(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var ge=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ae=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),We=Symbol.for("react.suspense_list"),Et=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Je=Symbol.for("react.offscreen"),ee=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,V;function G(n){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+n}var Ie=!1;function Se(n,s){if(!n||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(j){var c=j}Reflect.construct(n,[],s)}else{try{s.call()}catch(j){c=j}n.call(s.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,I=p.length-1;1<=v&&0<=I&&d[v]!==p[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==p[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==p[I]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=I);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?G(n):""}function Pe(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function ke(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Ce:return"Portal";case C:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case We:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case O:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Et:return s=n.displayName||null,s!==null?s:ke(n.type)||"Memo";case Vt:s=n._payload,n=n._init;try{return ke(n(s))}catch{}}return null}function Ue(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function $t(n){var s=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Os(n){n._valueTracker||(n._valueTracker=$t(n))}function Yo(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function Wr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ls(n,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Pl(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Le(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function bs(n,s){s=s.checked,s!=null&&ue(n,"checked",s,!1)}function Wi(n,s){bs(n,s);var a=Le(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?ct(n,s.type,a):s.hasOwnProperty("defaultValue")&&ct(n,s.type,Le(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Jo(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ct(n,s,a){(s!=="number"||Wr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var it=Array.isArray;function Rn(n,s,a,c){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Le(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function Xo(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Zo(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(it(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:Le(a)}}function kl(n,s){var a=Le(s.value),c=Le(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Hr(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function ea(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ms(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?ea(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var qr,Nl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,d)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=qr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function Hi(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xl=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(n){xl.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Kr[s]=Kr[n]})});function Gr(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Kr.hasOwnProperty(n)&&Kr[n]?(""+s).trim():s+"px"}function Fs(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Gr(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var ta=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cn(n,s){if(s){if(ta[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Us(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qr=null;function js(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var _r=null,vr=null,nt=null;function na(n){if(n=ka(n)){if(typeof _r!="function")throw Error(t(280));var s=n.stateNode;s&&(s=iu(s),_r(n.stateNode,n.type,s))}}function Yr(n){vr?nt?nt.push(n):nt=[n]:vr=n}function Jr(){if(vr){var n=vr,s=nt;if(nt=vr=null,na(n),s)for(n=0;n<s.length;n++)na(s[n])}}function Dl(n,s){return n(s)}function Vl(){}var zn=!1;function Ol(n,s,a){if(zn)return n(s,a);zn=!0;try{return Dl(n,s,a)}finally{zn=!1,(vr!==null||nt!==null)&&(Vl(),Jr())}}function qi(n,s){var a=n.stateNode;if(a===null)return null;var c=iu(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Xr=!1;if(f)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){Xr=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Xr=!1}function Ll(n,s,a,c,d,p,v,I,P){var j=Array.prototype.slice.call(arguments,3);try{s.apply(a,j)}catch(Y){this.onError(Y)}}var Er=!1,Bn=null,zs=!1,mn=null,bl={onError:function(n){Er=!0,Bn=n}};function Ml(n,s,a,c,d,p,v,I,P){Er=!1,Bn=null,Ll.apply(bl,arguments)}function ra(n,s,a,c,d,p,v,I,P){if(Ml.apply(this,arguments),Er){if(Er){var j=Bn;Er=!1,Bn=null}else throw Error(t(198));zs||(zs=!0,mn=j)}}function Pn(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function ia(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Fl(n){if(Pn(n)!==n)throw Error(t(188))}function Ul(n){var s=n.alternate;if(!s){if(s=Pn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Fl(d),n;if(p===c)return Fl(d),s;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=p;break}if(I===c){v=!0,c=d,a=p;break}I=I.sibling}if(!v){for(I=p.child;I;){if(I===a){v=!0,a=p,c=d;break}if(I===c){v=!0,c=p,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function jl(n){return n=Ul(n),n!==null?Ki(n):null}function Ki(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Ki(n);if(s!==null)return s;n=n.sibling}return null}var sa=e.unstable_scheduleCallback,Bs=e.unstable_cancelCallback,Gi=e.unstable_shouldYield,wr=e.unstable_requestPaint,Ke=e.unstable_now,rh=e.unstable_getCurrentPriorityLevel,$s=e.unstable_ImmediatePriority,oa=e.unstable_UserBlockingPriority,Qi=e.unstable_NormalPriority,aa=e.unstable_LowPriority,Ws=e.unstable_IdlePriority,Yi=null,sn=null;function zl(n){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Yi,n,void 0,(n.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:Ji,$n=Math.log,gn=Math.LN2;function Ji(n){return n>>>=0,n===0?32:31-($n(n)/gn|0)|0}var Wn=64,ei=4194304;function Fe(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Tr(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=Fe(I):(p&=v,p!==0&&(c=Fe(p)))}else v=a&~d,v!==0?c=Fe(v):p!==0&&(c=Fe(p));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,p=s&-s,d>=p||d===16&&(p&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-on(s),d=1<<a,c|=n[a],s&=~d;return c}function Xi(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zi(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-on(p),I=1<<v,P=d[v];P===-1?((I&a)===0||(I&c)!==0)&&(d[v]=Xi(I,s)):P<=s&&(n.expiredLanes|=I),p&=~I}}function la(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ua(){var n=Wn;return Wn<<=1,(Wn&4194240)===0&&(Wn=64),n}function ca(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function es(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-on(s),n[s]=a}function ih(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-on(a),p=1<<d;s[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function ha(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-on(a),d=1<<c;d&s|n[c]&s&&(n[c]|=s),a&=~d}}var Ve=0;function Hn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var da,Hs,fa,pa,ma,qn=!1,qs=[],Kn=null,Gn=null,At=null,ts=new Map,Ir=new Map,an=[],Bl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ti(n,s){switch(n){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":ts.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(s.pointerId)}}function kn(n,s,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},s!==null&&(s=ka(s),s!==null&&Hs(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function $l(n,s,a,c,d){switch(s){case"focusin":return Kn=kn(Kn,n,s,a,c,d),!0;case"dragenter":return Gn=kn(Gn,n,s,a,c,d),!0;case"mouseover":return At=kn(At,n,s,a,c,d),!0;case"pointerover":var p=d.pointerId;return ts.set(p,kn(ts.get(p)||null,n,s,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,Ir.set(p,kn(Ir.get(p)||null,n,s,a,c,d)),!0}return!1}function Ks(n){var s=ss(n.target);if(s!==null){var a=Pn(s);if(a!==null){if(s=a.tag,s===13){if(s=ia(a),s!==null){n.blockedOn=s,ma(n.priority,function(){fa(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $e(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=Gs(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Qr=c,a.target.dispatchEvent(c),Qr=null}else return s=ka(a),s!==null&&Hs(s),n.blockedOn=a,!1;s.shift()}return!0}function Wl(n,s,a){$e(n)&&a.delete(s)}function sh(){qn=!1,Kn!==null&&$e(Kn)&&(Kn=null),Gn!==null&&$e(Gn)&&(Gn=null),At!==null&&$e(At)&&(At=null),ts.forEach(Wl),Ir.forEach(Wl)}function ni(n,s){n.blockedOn===s&&(n.blockedOn=null,qn||(qn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,sh)))}function ri(n){function s(d){return ni(d,n)}if(0<qs.length){ni(qs[0],n);for(var a=1;a<qs.length;a++){var c=qs[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Kn!==null&&ni(Kn,n),Gn!==null&&ni(Gn,n),At!==null&&ni(At,n),ts.forEach(s),Ir.forEach(s),a=0;a<an.length;a++)c=an[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<an.length&&(a=an[0],a.blockedOn===null);)Ks(a),a.blockedOn===null&&an.shift()}var Sr=ge.ReactCurrentBatchConfig,Ar=!0;function Qn(n,s,a,c){var d=Ve,p=Sr.transition;Sr.transition=null;try{Ve=1,ga(n,s,a,c)}finally{Ve=d,Sr.transition=p}}function Hl(n,s,a,c){var d=Ve,p=Sr.transition;Sr.transition=null;try{Ve=4,ga(n,s,a,c)}finally{Ve=d,Sr.transition=p}}function ga(n,s,a,c){if(Ar){var d=Gs(n,s,a,c);if(d===null)gh(n,s,c,Yn,a),ti(n,c);else if($l(d,n,s,a,c))c.stopPropagation();else if(ti(n,c),s&4&&-1<Bl.indexOf(n)){for(;d!==null;){var p=ka(d);if(p!==null&&da(p),p=Gs(n,s,a,c),p===null&&gh(n,s,c,Yn,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else gh(n,s,c,null,a)}}var Yn=null;function Gs(n,s,a,c){if(Yn=null,n=js(c),n=ss(n),n!==null)if(s=Pn(n),s===null)n=null;else if(a=s.tag,a===13){if(n=ia(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Yn=n,null}function Qs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rh()){case $s:return 1;case oa:return 4;case Qi:case aa:return 16;case Ws:return 536870912;default:return 16}default:return 16}}var ln=null,Ys=null,Rr=null;function ql(){if(Rr)return Rr;var n,s=Ys,a=s.length,c,d="value"in ln?ln.value:ln.textContent,p=d.length;for(n=0;n<a&&s[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&s[a-c]===d[p-c];c++);return Rr=d.slice(n,1<c?1-c:void 0)}function ns(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Jn(){return!0}function ya(){return!1}function Ot(n){function s(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Jn:ya,this.isPropagationStopped=ya,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),s}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rs=Ot(Xn),ii=se({},Xn,{view:0,detail:0}),Js=Ot(ii),Xs,Zs,un,is=se({},ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:we,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==un&&(un&&n.type==="mousemove"?(Xs=n.screenX-un.screenX,Zs=n.screenY-un.screenY):Zs=Xs=0,un=n),Xs)},movementY:function(n){return"movementY"in n?n.movementY:Zs}}),_a=Ot(is),Kl=se({},is,{dataTransfer:0}),Gl=Ot(Kl),eo=se({},ii,{relatedTarget:0}),Rt=Ot(eo),Ql=se({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Yl=Ot(Ql),si=se({},Xn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u=Ot(si),m=se({},Xn,{data:0}),_=Ot(m),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=B[n])?!!s[n]:!1}function we(){return Z}var st=se({},ii,{key:function(n){if(n.key){var s=T[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=ns(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:we,charCode:function(n){return n.type==="keypress"?ns(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ns(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ze=Ot(st),ht=se({},is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cn=Ot(ht),Cr=se({},ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:we}),Zn=Ot(Cr),er=se({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),to=Ot(er),va=se({},is,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xw=Ot(va),Dw=[9,13,27,32],oh=f&&"CompositionEvent"in window,Ea=null;f&&"documentMode"in document&&(Ea=document.documentMode);var Vw=f&&"TextEvent"in window&&!Ea,Ip=f&&(!oh||Ea&&8<Ea&&11>=Ea),Sp=" ",Ap=!1;function Rp(n,s){switch(n){case"keyup":return Dw.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var no=!1;function Ow(n,s){switch(n){case"compositionend":return Cp(s);case"keypress":return s.which!==32?null:(Ap=!0,Sp);case"textInput":return n=s.data,n===Sp&&Ap?null:n;default:return null}}function Lw(n,s){if(no)return n==="compositionend"||!oh&&Rp(n,s)?(n=ql(),Rr=Ys=ln=null,no=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Ip&&s.locale!=="ko"?null:s.data;default:return null}}var bw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!bw[n.type]:s==="textarea"}function kp(n,s,a,c){Yr(c),s=tu(s,"onChange"),0<s.length&&(a=new rs("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var wa=null,Ta=null;function Mw(n){Kp(n,0)}function Jl(n){var s=ao(n);if(Yo(s))return n}function Fw(n,s){if(n==="change")return s}var Np=!1;if(f){var ah;if(f){var lh="oninput"in document;if(!lh){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),lh=typeof xp.oninput=="function"}ah=lh}else ah=!1;Np=ah&&(!document.documentMode||9<document.documentMode)}function Dp(){wa&&(wa.detachEvent("onpropertychange",Vp),Ta=wa=null)}function Vp(n){if(n.propertyName==="value"&&Jl(Ta)){var s=[];kp(s,Ta,n,js(n)),Ol(Mw,s)}}function Uw(n,s,a){n==="focusin"?(Dp(),wa=s,Ta=a,wa.attachEvent("onpropertychange",Vp)):n==="focusout"&&Dp()}function jw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Jl(Ta)}function zw(n,s){if(n==="click")return Jl(s)}function Bw(n,s){if(n==="input"||n==="change")return Jl(s)}function $w(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Nn=typeof Object.is=="function"?Object.is:$w;function Ia(n,s){if(Nn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!Nn(n[d],s[d]))return!1}return!0}function Op(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Lp(n,s){var a=Op(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Op(a)}}function bp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?bp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Mp(){for(var n=window,s=Wr();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=Wr(n.document)}return s}function uh(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function Ww(n){var s=Mp(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&bp(a.ownerDocument.documentElement,a)){if(c!==null&&uh(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Lp(a,p);var v=Lp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(s),n.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Hw=f&&"documentMode"in document&&11>=document.documentMode,ro=null,ch=null,Sa=null,hh=!1;function Fp(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hh||ro==null||ro!==Wr(c)||(c=ro,"selectionStart"in c&&uh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Sa&&Ia(Sa,c)||(Sa=c,c=tu(ch,"onSelect"),0<c.length&&(s=new rs("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=ro)))}function Xl(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var io={animationend:Xl("Animation","AnimationEnd"),animationiteration:Xl("Animation","AnimationIteration"),animationstart:Xl("Animation","AnimationStart"),transitionend:Xl("Transition","TransitionEnd")},dh={},Up={};f&&(Up=document.createElement("div").style,"AnimationEvent"in window||(delete io.animationend.animation,delete io.animationiteration.animation,delete io.animationstart.animation),"TransitionEvent"in window||delete io.transitionend.transition);function Zl(n){if(dh[n])return dh[n];if(!io[n])return n;var s=io[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in Up)return dh[n]=s[a];return n}var jp=Zl("animationend"),zp=Zl("animationiteration"),Bp=Zl("animationstart"),$p=Zl("transitionend"),Wp=new Map,Hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oi(n,s){Wp.set(n,s),l(s,[n])}for(var fh=0;fh<Hp.length;fh++){var ph=Hp[fh],qw=ph.toLowerCase(),Kw=ph[0].toUpperCase()+ph.slice(1);oi(qw,"on"+Kw)}oi(jp,"onAnimationEnd"),oi(zp,"onAnimationIteration"),oi(Bp,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi($p,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function qp(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,ra(c,s,void 0,n),n.currentTarget=null}function Kp(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(s)for(var v=c.length-1;0<=v;v--){var I=c[v],P=I.instance,j=I.currentTarget;if(I=I.listener,P!==p&&d.isPropagationStopped())break e;qp(d,I,j),p=P}else for(v=0;v<c.length;v++){if(I=c[v],P=I.instance,j=I.currentTarget,I=I.listener,P!==p&&d.isPropagationStopped())break e;qp(d,I,j),p=P}}}if(zs)throw n=mn,zs=!1,mn=null,n}function Ge(n,s){var a=s[Th];a===void 0&&(a=s[Th]=new Set);var c=n+"__bubble";a.has(c)||(Gp(s,n,2,!1),a.add(c))}function mh(n,s,a){var c=0;s&&(c|=4),Gp(a,n,c,s)}var eu="_reactListening"+Math.random().toString(36).slice(2);function Ra(n){if(!n[eu]){n[eu]=!0,i.forEach(function(a){a!=="selectionchange"&&(Gw.has(a)||mh(a,!1,n),mh(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[eu]||(s[eu]=!0,mh("selectionchange",!1,s))}}function Gp(n,s,a,c){switch(Qs(s)){case 1:var d=Qn;break;case 4:d=Hl;break;default:d=ga}a=d.bind(null,s,a,n),d=void 0,!Xr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function gh(n,s,a,c,d){var p=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;I!==null;){if(v=ss(I),v===null)return;if(P=v.tag,P===5||P===6){c=p=v;continue e}I=I.parentNode}}c=c.return}Ol(function(){var j=p,Y=js(a),J=[];e:{var Q=Wp.get(n);if(Q!==void 0){var ne=rs,ae=n;switch(n){case"keypress":if(ns(a)===0)break e;case"keydown":case"keyup":ne=ze;break;case"focusin":ae="focus",ne=Rt;break;case"focusout":ae="blur",ne=Rt;break;case"beforeblur":case"afterblur":ne=Rt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=_a;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Gl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=Zn;break;case jp:case zp:case Bp:ne=Yl;break;case $p:ne=to;break;case"scroll":ne=Js;break;case"wheel":ne=xw;break;case"copy":case"cut":case"paste":ne=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=cn}var le=(s&4)!==0,ot=!le&&n==="scroll",b=le?Q!==null?Q+"Capture":null:Q;le=[];for(var x=j,F;x!==null;){F=x;var X=F.stateNode;if(F.tag===5&&X!==null&&(F=X,b!==null&&(X=qi(x,b),X!=null&&le.push(Ca(x,X,F)))),ot)break;x=x.return}0<le.length&&(Q=new ne(Q,ae,null,a,Y),J.push({event:Q,listeners:le}))}}if((s&7)===0){e:{if(Q=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",Q&&a!==Qr&&(ae=a.relatedTarget||a.fromElement)&&(ss(ae)||ae[Pr]))break e;if((ne||Q)&&(Q=Y.window===Y?Y:(Q=Y.ownerDocument)?Q.defaultView||Q.parentWindow:window,ne?(ae=a.relatedTarget||a.toElement,ne=j,ae=ae?ss(ae):null,ae!==null&&(ot=Pn(ae),ae!==ot||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(ne=null,ae=j),ne!==ae)){if(le=_a,X="onMouseLeave",b="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(le=cn,X="onPointerLeave",b="onPointerEnter",x="pointer"),ot=ne==null?Q:ao(ne),F=ae==null?Q:ao(ae),Q=new le(X,x+"leave",ne,a,Y),Q.target=ot,Q.relatedTarget=F,X=null,ss(Y)===j&&(le=new le(b,x+"enter",ae,a,Y),le.target=F,le.relatedTarget=ot,X=le),ot=X,ne&&ae)t:{for(le=ne,b=ae,x=0,F=le;F;F=so(F))x++;for(F=0,X=b;X;X=so(X))F++;for(;0<x-F;)le=so(le),x--;for(;0<F-x;)b=so(b),F--;for(;x--;){if(le===b||b!==null&&le===b.alternate)break t;le=so(le),b=so(b)}le=null}else le=null;ne!==null&&Qp(J,Q,ne,le,!1),ae!==null&&ot!==null&&Qp(J,ot,ae,le,!0)}}e:{if(Q=j?ao(j):window,ne=Q.nodeName&&Q.nodeName.toLowerCase(),ne==="select"||ne==="input"&&Q.type==="file")var ce=Fw;else if(Pp(Q))if(Np)ce=Bw;else{ce=jw;var pe=Uw}else(ne=Q.nodeName)&&ne.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(ce=zw);if(ce&&(ce=ce(n,j))){kp(J,ce,a,Y);break e}pe&&pe(n,Q,j),n==="focusout"&&(pe=Q._wrapperState)&&pe.controlled&&Q.type==="number"&&ct(Q,"number",Q.value)}switch(pe=j?ao(j):window,n){case"focusin":(Pp(pe)||pe.contentEditable==="true")&&(ro=pe,ch=j,Sa=null);break;case"focusout":Sa=ch=ro=null;break;case"mousedown":hh=!0;break;case"contextmenu":case"mouseup":case"dragend":hh=!1,Fp(J,a,Y);break;case"selectionchange":if(Hw)break;case"keydown":case"keyup":Fp(J,a,Y)}var me;if(oh)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else no?Rp(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Ip&&a.locale!=="ko"&&(no||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&no&&(me=ql()):(ln=Y,Ys="value"in ln?ln.value:ln.textContent,no=!0)),pe=tu(j,ve),0<pe.length&&(ve=new _(ve,n,null,a,Y),J.push({event:ve,listeners:pe}),me?ve.data=me:(me=Cp(a),me!==null&&(ve.data=me)))),(me=Vw?Ow(n,a):Lw(n,a))&&(j=tu(j,"onBeforeInput"),0<j.length&&(Y=new _("onBeforeInput","beforeinput",null,a,Y),J.push({event:Y,listeners:j}),Y.data=me))}Kp(J,s)})}function Ca(n,s,a){return{instance:n,listener:s,currentTarget:a}}function tu(n,s){for(var a=s+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=qi(n,a),p!=null&&c.unshift(Ca(n,p,d)),p=qi(n,s),p!=null&&c.push(Ca(n,p,d))),n=n.return}return c}function so(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Qp(n,s,a,c,d){for(var p=s._reactName,v=[];a!==null&&a!==c;){var I=a,P=I.alternate,j=I.stateNode;if(P!==null&&P===c)break;I.tag===5&&j!==null&&(I=j,d?(P=qi(a,p),P!=null&&v.unshift(Ca(a,P,I))):d||(P=qi(a,p),P!=null&&v.push(Ca(a,P,I)))),a=a.return}v.length!==0&&n.push({event:s,listeners:v})}var Qw=/\r\n?/g,Yw=/\u0000|\uFFFD/g;function Yp(n){return(typeof n=="string"?n:""+n).replace(Qw,`
`).replace(Yw,"")}function nu(n,s,a){if(s=Yp(s),Yp(n)!==s&&a)throw Error(t(425))}function ru(){}var yh=null,_h=null;function vh(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Eh=typeof setTimeout=="function"?setTimeout:void 0,Jw=typeof clearTimeout=="function"?clearTimeout:void 0,Jp=typeof Promise=="function"?Promise:void 0,Xw=typeof queueMicrotask=="function"?queueMicrotask:typeof Jp<"u"?function(n){return Jp.resolve(null).then(n).catch(Zw)}:Eh;function Zw(n){setTimeout(function(){throw n})}function wh(n,s){var a=s,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ri(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ri(s)}function ai(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Xp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var oo=Math.random().toString(36).slice(2),tr="__reactFiber$"+oo,Pa="__reactProps$"+oo,Pr="__reactContainer$"+oo,Th="__reactEvents$"+oo,e0="__reactListeners$"+oo,t0="__reactHandles$"+oo;function ss(n){var s=n[tr];if(s)return s;for(var a=n.parentNode;a;){if(s=a[Pr]||a[tr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Xp(n);n!==null;){if(a=n[tr])return a;n=Xp(n)}return s}n=a,a=n.parentNode}return null}function ka(n){return n=n[tr]||n[Pr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ao(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function iu(n){return n[Pa]||null}var Ih=[],lo=-1;function li(n){return{current:n}}function Qe(n){0>lo||(n.current=Ih[lo],Ih[lo]=null,lo--)}function He(n,s){lo++,Ih[lo]=n.current,n.current=s}var ui={},Lt=li(ui),qt=li(!1),os=ui;function uo(n,s){var a=n.type.contextTypes;if(!a)return ui;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=s[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function Kt(n){return n=n.childContextTypes,n!=null}function su(){Qe(qt),Qe(Lt)}function Zp(n,s,a){if(Lt.current!==ui)throw Error(t(168));He(Lt,s),He(qt,a)}function em(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Ue(n)||"Unknown",d));return se({},a,c)}function ou(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ui,os=Lt.current,He(Lt,n),He(qt,qt.current),!0}function tm(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=em(n,s,os),c.__reactInternalMemoizedMergedChildContext=n,Qe(qt),Qe(Lt),He(Lt,n)):Qe(qt),He(qt,a)}var kr=null,au=!1,Sh=!1;function nm(n){kr===null?kr=[n]:kr.push(n)}function n0(n){au=!0,nm(n)}function ci(){if(!Sh&&kr!==null){Sh=!0;var n=0,s=Ve;try{var a=kr;for(Ve=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}kr=null,au=!1}catch(d){throw kr!==null&&(kr=kr.slice(n+1)),sa($s,ci),d}finally{Ve=s,Sh=!1}}return null}var co=[],ho=0,lu=null,uu=0,yn=[],_n=0,as=null,Nr=1,xr="";function ls(n,s){co[ho++]=uu,co[ho++]=lu,lu=n,uu=s}function rm(n,s,a){yn[_n++]=Nr,yn[_n++]=xr,yn[_n++]=as,as=n;var c=Nr;n=xr;var d=32-on(c)-1;c&=~(1<<d),a+=1;var p=32-on(s)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Nr=1<<32-on(s)+d|a<<d|c,xr=p+n}else Nr=1<<p|a<<d|c,xr=n}function Ah(n){n.return!==null&&(ls(n,1),rm(n,1,0))}function Rh(n){for(;n===lu;)lu=co[--ho],co[ho]=null,uu=co[--ho],co[ho]=null;for(;n===as;)as=yn[--_n],yn[_n]=null,xr=yn[--_n],yn[_n]=null,Nr=yn[--_n],yn[_n]=null}var hn=null,dn=null,Xe=!1,xn=null;function im(n,s){var a=Tn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function sm(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,hn=n,dn=ai(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,hn=n,dn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=as!==null?{id:Nr,overflow:xr}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Tn(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,hn=n,dn=null,!0):!1;default:return!1}}function Ch(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ph(n){if(Xe){var s=dn;if(s){var a=s;if(!sm(n,s)){if(Ch(n))throw Error(t(418));s=ai(a.nextSibling);var c=hn;s&&sm(n,s)?im(c,a):(n.flags=n.flags&-4097|2,Xe=!1,hn=n)}}else{if(Ch(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,hn=n}}}function om(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;hn=n}function cu(n){if(n!==hn)return!1;if(!Xe)return om(n),Xe=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!vh(n.type,n.memoizedProps)),s&&(s=dn)){if(Ch(n))throw am(),Error(t(418));for(;s;)im(n,s),s=ai(s.nextSibling)}if(om(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){dn=ai(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}dn=null}}else dn=hn?ai(n.stateNode.nextSibling):null;return!0}function am(){for(var n=dn;n;)n=ai(n.nextSibling)}function fo(){dn=hn=null,Xe=!1}function kh(n){xn===null?xn=[n]:xn.push(n)}var r0=ge.ReactCurrentBatchConfig;function Na(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===p?s.ref:(s=function(v){var I=d.refs;v===null?delete I[p]:I[p]=v},s._stringRef=p,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function hu(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function lm(n){var s=n._init;return s(n._payload)}function um(n){function s(b,x){if(n){var F=b.deletions;F===null?(b.deletions=[x],b.flags|=16):F.push(x)}}function a(b,x){if(!n)return null;for(;x!==null;)s(b,x),x=x.sibling;return null}function c(b,x){for(b=new Map;x!==null;)x.key!==null?b.set(x.key,x):b.set(x.index,x),x=x.sibling;return b}function d(b,x){return b=_i(b,x),b.index=0,b.sibling=null,b}function p(b,x,F){return b.index=F,n?(F=b.alternate,F!==null?(F=F.index,F<x?(b.flags|=2,x):F):(b.flags|=2,x)):(b.flags|=1048576,x)}function v(b){return n&&b.alternate===null&&(b.flags|=2),b}function I(b,x,F,X){return x===null||x.tag!==6?(x=Ed(F,b.mode,X),x.return=b,x):(x=d(x,F),x.return=b,x)}function P(b,x,F,X){var ce=F.type;return ce===k?Y(b,x,F.props.children,X,F.key):x!==null&&(x.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Vt&&lm(ce)===x.type)?(X=d(x,F.props),X.ref=Na(b,x,F),X.return=b,X):(X=Lu(F.type,F.key,F.props,null,b.mode,X),X.ref=Na(b,x,F),X.return=b,X)}function j(b,x,F,X){return x===null||x.tag!==4||x.stateNode.containerInfo!==F.containerInfo||x.stateNode.implementation!==F.implementation?(x=wd(F,b.mode,X),x.return=b,x):(x=d(x,F.children||[]),x.return=b,x)}function Y(b,x,F,X,ce){return x===null||x.tag!==7?(x=gs(F,b.mode,X,ce),x.return=b,x):(x=d(x,F),x.return=b,x)}function J(b,x,F){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Ed(""+x,b.mode,F),x.return=b,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ae:return F=Lu(x.type,x.key,x.props,null,b.mode,F),F.ref=Na(b,null,x),F.return=b,F;case Ce:return x=wd(x,b.mode,F),x.return=b,x;case Vt:var X=x._init;return J(b,X(x._payload),F)}if(it(x)||fe(x))return x=gs(x,b.mode,F,null),x.return=b,x;hu(b,x)}return null}function Q(b,x,F,X){var ce=x!==null?x.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ce!==null?null:I(b,x,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Ae:return F.key===ce?P(b,x,F,X):null;case Ce:return F.key===ce?j(b,x,F,X):null;case Vt:return ce=F._init,Q(b,x,ce(F._payload),X)}if(it(F)||fe(F))return ce!==null?null:Y(b,x,F,X,null);hu(b,F)}return null}function ne(b,x,F,X,ce){if(typeof X=="string"&&X!==""||typeof X=="number")return b=b.get(F)||null,I(x,b,""+X,ce);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Ae:return b=b.get(X.key===null?F:X.key)||null,P(x,b,X,ce);case Ce:return b=b.get(X.key===null?F:X.key)||null,j(x,b,X,ce);case Vt:var pe=X._init;return ne(b,x,F,pe(X._payload),ce)}if(it(X)||fe(X))return b=b.get(F)||null,Y(x,b,X,ce,null);hu(x,X)}return null}function ae(b,x,F,X){for(var ce=null,pe=null,me=x,ve=x=0,It=null;me!==null&&ve<F.length;ve++){me.index>ve?(It=me,me=null):It=me.sibling;var Me=Q(b,me,F[ve],X);if(Me===null){me===null&&(me=It);break}n&&me&&Me.alternate===null&&s(b,me),x=p(Me,x,ve),pe===null?ce=Me:pe.sibling=Me,pe=Me,me=It}if(ve===F.length)return a(b,me),Xe&&ls(b,ve),ce;if(me===null){for(;ve<F.length;ve++)me=J(b,F[ve],X),me!==null&&(x=p(me,x,ve),pe===null?ce=me:pe.sibling=me,pe=me);return Xe&&ls(b,ve),ce}for(me=c(b,me);ve<F.length;ve++)It=ne(me,b,ve,F[ve],X),It!==null&&(n&&It.alternate!==null&&me.delete(It.key===null?ve:It.key),x=p(It,x,ve),pe===null?ce=It:pe.sibling=It,pe=It);return n&&me.forEach(function(vi){return s(b,vi)}),Xe&&ls(b,ve),ce}function le(b,x,F,X){var ce=fe(F);if(typeof ce!="function")throw Error(t(150));if(F=ce.call(F),F==null)throw Error(t(151));for(var pe=ce=null,me=x,ve=x=0,It=null,Me=F.next();me!==null&&!Me.done;ve++,Me=F.next()){me.index>ve?(It=me,me=null):It=me.sibling;var vi=Q(b,me,Me.value,X);if(vi===null){me===null&&(me=It);break}n&&me&&vi.alternate===null&&s(b,me),x=p(vi,x,ve),pe===null?ce=vi:pe.sibling=vi,pe=vi,me=It}if(Me.done)return a(b,me),Xe&&ls(b,ve),ce;if(me===null){for(;!Me.done;ve++,Me=F.next())Me=J(b,Me.value,X),Me!==null&&(x=p(Me,x,ve),pe===null?ce=Me:pe.sibling=Me,pe=Me);return Xe&&ls(b,ve),ce}for(me=c(b,me);!Me.done;ve++,Me=F.next())Me=ne(me,b,ve,Me.value,X),Me!==null&&(n&&Me.alternate!==null&&me.delete(Me.key===null?ve:Me.key),x=p(Me,x,ve),pe===null?ce=Me:pe.sibling=Me,pe=Me);return n&&me.forEach(function(b0){return s(b,b0)}),Xe&&ls(b,ve),ce}function ot(b,x,F,X){if(typeof F=="object"&&F!==null&&F.type===k&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Ae:e:{for(var ce=F.key,pe=x;pe!==null;){if(pe.key===ce){if(ce=F.type,ce===k){if(pe.tag===7){a(b,pe.sibling),x=d(pe,F.props.children),x.return=b,b=x;break e}}else if(pe.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Vt&&lm(ce)===pe.type){a(b,pe.sibling),x=d(pe,F.props),x.ref=Na(b,pe,F),x.return=b,b=x;break e}a(b,pe);break}else s(b,pe);pe=pe.sibling}F.type===k?(x=gs(F.props.children,b.mode,X,F.key),x.return=b,b=x):(X=Lu(F.type,F.key,F.props,null,b.mode,X),X.ref=Na(b,x,F),X.return=b,b=X)}return v(b);case Ce:e:{for(pe=F.key;x!==null;){if(x.key===pe)if(x.tag===4&&x.stateNode.containerInfo===F.containerInfo&&x.stateNode.implementation===F.implementation){a(b,x.sibling),x=d(x,F.children||[]),x.return=b,b=x;break e}else{a(b,x);break}else s(b,x);x=x.sibling}x=wd(F,b.mode,X),x.return=b,b=x}return v(b);case Vt:return pe=F._init,ot(b,x,pe(F._payload),X)}if(it(F))return ae(b,x,F,X);if(fe(F))return le(b,x,F,X);hu(b,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,x!==null&&x.tag===6?(a(b,x.sibling),x=d(x,F),x.return=b,b=x):(a(b,x),x=Ed(F,b.mode,X),x.return=b,b=x),v(b)):a(b,x)}return ot}var po=um(!0),cm=um(!1),du=li(null),fu=null,mo=null,Nh=null;function xh(){Nh=mo=fu=null}function Dh(n){var s=du.current;Qe(du),n._currentValue=s}function Vh(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function go(n,s){fu=n,Nh=mo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(Gt=!0),n.firstContext=null)}function vn(n){var s=n._currentValue;if(Nh!==n)if(n={context:n,memoizedValue:s,next:null},mo===null){if(fu===null)throw Error(t(308));mo=n,fu.dependencies={lanes:0,firstContext:n}}else mo=mo.next=n;return s}var us=null;function Oh(n){us===null?us=[n]:us.push(n)}function hm(n,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Oh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Dr(n,c)}function Dr(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var hi=!1;function Lh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dm(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vr(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function di(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(be&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Dr(n,a)}return d=c.interleaved,d===null?(s.next=s,Oh(c)):(s.next=d.next,d.next=s),c.interleaved=s,Dr(n,a)}function pu(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,ha(n,a)}}function fm(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=s:p=p.next=s}else d=p=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function mu(n,s,a,c){var d=n.updateQueue;hi=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var P=I,j=P.next;P.next=null,v===null?p=j:v.next=j,v=P;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,I=Y.lastBaseUpdate,I!==v&&(I===null?Y.firstBaseUpdate=j:I.next=j,Y.lastBaseUpdate=P))}if(p!==null){var J=d.baseState;v=0,Y=j=P=null,I=p;do{var Q=I.lane,ne=I.eventTime;if((c&Q)===Q){Y!==null&&(Y=Y.next={eventTime:ne,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ae=n,le=I;switch(Q=s,ne=a,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){J=ae.call(ne,J,Q);break e}J=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,Q=typeof ae=="function"?ae.call(ne,J,Q):ae,Q==null)break e;J=se({},J,Q);break e;case 2:hi=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,Q=d.effects,Q===null?d.effects=[I]:Q.push(I))}else ne={eventTime:ne,lane:Q,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Y===null?(j=Y=ne,P=J):Y=Y.next=ne,v|=Q;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;Q=I,I=Q.next,Q.next=null,d.lastBaseUpdate=Q,d.shared.pending=null}}while(!0);if(Y===null&&(P=J),d.baseState=P,d.firstBaseUpdate=j,d.lastBaseUpdate=Y,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else p===null&&(d.shared.lanes=0);ds|=v,n.lanes=v,n.memoizedState=J}}function pm(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var xa={},nr=li(xa),Da=li(xa),Va=li(xa);function cs(n){if(n===xa)throw Error(t(174));return n}function bh(n,s){switch(He(Va,s),He(Da,n),He(nr,xa),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ms(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=Ms(s,n)}Qe(nr),He(nr,s)}function yo(){Qe(nr),Qe(Da),Qe(Va)}function mm(n){cs(Va.current);var s=cs(nr.current),a=Ms(s,n.type);s!==a&&(He(Da,n),He(nr,a))}function Mh(n){Da.current===n&&(Qe(nr),Qe(Da))}var Ze=li(0);function gu(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Fh=[];function Uh(){for(var n=0;n<Fh.length;n++)Fh[n]._workInProgressVersionPrimary=null;Fh.length=0}var yu=ge.ReactCurrentDispatcher,jh=ge.ReactCurrentBatchConfig,hs=0,et=null,yt=null,wt=null,_u=!1,Oa=!1,La=0,i0=0;function bt(){throw Error(t(321))}function zh(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!Nn(n[a],s[a]))return!1;return!0}function Bh(n,s,a,c,d,p){if(hs=p,et=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,yu.current=n===null||n.memoizedState===null?l0:u0,n=a(c,d),Oa){p=0;do{if(Oa=!1,La=0,25<=p)throw Error(t(301));p+=1,wt=yt=null,s.updateQueue=null,yu.current=c0,n=a(c,d)}while(Oa)}if(yu.current=wu,s=yt!==null&&yt.next!==null,hs=0,wt=yt=et=null,_u=!1,s)throw Error(t(300));return n}function $h(){var n=La!==0;return La=0,n}function rr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?et.memoizedState=wt=n:wt=wt.next=n,wt}function En(){if(yt===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=yt.next;var s=wt===null?et.memoizedState:wt.next;if(s!==null)wt=s,yt=n;else{if(n===null)throw Error(t(310));yt=n,n={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},wt===null?et.memoizedState=wt=n:wt=wt.next=n}return wt}function ba(n,s){return typeof s=="function"?s(n):s}function Wh(n){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=yt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=v=null,P=null,j=p;do{var Y=j.lane;if((hs&Y)===Y)P!==null&&(P=P.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var J={lane:Y,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};P===null?(I=P=J,v=c):P=P.next=J,et.lanes|=Y,ds|=Y}j=j.next}while(j!==null&&j!==p);P===null?v=c:P.next=I,Nn(c,s.memoizedState)||(Gt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,et.lanes|=p,ds|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Hh(n){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);Nn(p,s.memoizedState)||(Gt=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),a.lastRenderedState=p}return[p,c]}function gm(){}function ym(n,s){var a=et,c=En(),d=s(),p=!Nn(c.memoizedState,d);if(p&&(c.memoizedState=d,Gt=!0),c=c.queue,qh(Em.bind(null,a,c,n),[n]),c.getSnapshot!==s||p||wt!==null&&wt.memoizedState.tag&1){if(a.flags|=2048,Ma(9,vm.bind(null,a,c,d,s),void 0,null),Tt===null)throw Error(t(349));(hs&30)!==0||_m(a,s,d)}return d}function _m(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function vm(n,s,a,c){s.value=a,s.getSnapshot=c,wm(s)&&Tm(n)}function Em(n,s,a){return a(function(){wm(s)&&Tm(n)})}function wm(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!Nn(n,a)}catch{return!0}}function Tm(n){var s=Dr(n,1);s!==null&&Ln(s,n,1,-1)}function Im(n){var s=rr();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:n},s.queue=n,n=n.dispatch=a0.bind(null,et,n),[s.memoizedState,n]}function Ma(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function Sm(){return En().memoizedState}function vu(n,s,a,c){var d=rr();et.flags|=n,d.memoizedState=Ma(1|s,a,void 0,c===void 0?null:c)}function Eu(n,s,a,c){var d=En();c=c===void 0?null:c;var p=void 0;if(yt!==null){var v=yt.memoizedState;if(p=v.destroy,c!==null&&zh(c,v.deps)){d.memoizedState=Ma(s,a,p,c);return}}et.flags|=n,d.memoizedState=Ma(1|s,a,p,c)}function Am(n,s){return vu(8390656,8,n,s)}function qh(n,s){return Eu(2048,8,n,s)}function Rm(n,s){return Eu(4,2,n,s)}function Cm(n,s){return Eu(4,4,n,s)}function Pm(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function km(n,s,a){return a=a!=null?a.concat([n]):null,Eu(4,4,Pm.bind(null,s,n),a)}function Kh(){}function Nm(n,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&zh(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function xm(n,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&zh(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function Dm(n,s,a){return(hs&21)===0?(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a):(Nn(a,s)||(a=ua(),et.lanes|=a,ds|=a,n.baseState=!0),s)}function s0(n,s){var a=Ve;Ve=a!==0&&4>a?a:4,n(!0);var c=jh.transition;jh.transition={};try{n(!1),s()}finally{Ve=a,jh.transition=c}}function Vm(){return En().memoizedState}function o0(n,s,a){var c=gi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Om(n))Lm(s,a);else if(a=hm(n,s,a,c),a!==null){var d=Ht();Ln(a,n,c,d),bm(a,s,c)}}function a0(n,s,a){var c=gi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Om(n))Lm(s,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var v=s.lastRenderedState,I=p(v,a);if(d.hasEagerState=!0,d.eagerState=I,Nn(I,v)){var P=s.interleaved;P===null?(d.next=d,Oh(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=hm(n,s,d,c),a!==null&&(d=Ht(),Ln(a,n,c,d),bm(a,s,c))}}function Om(n){var s=n.alternate;return n===et||s!==null&&s===et}function Lm(n,s){Oa=_u=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function bm(n,s,a){if((a&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,ha(n,a)}}var wu={readContext:vn,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},l0={readContext:vn,useCallback:function(n,s){return rr().memoizedState=[n,s===void 0?null:s],n},useContext:vn,useEffect:Am,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,vu(4194308,4,Pm.bind(null,s,n),a)},useLayoutEffect:function(n,s){return vu(4194308,4,n,s)},useInsertionEffect:function(n,s){return vu(4,2,n,s)},useMemo:function(n,s){var a=rr();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=rr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=o0.bind(null,et,n),[c.memoizedState,n]},useRef:function(n){var s=rr();return n={current:n},s.memoizedState=n},useState:Im,useDebugValue:Kh,useDeferredValue:function(n){return rr().memoizedState=n},useTransition:function(){var n=Im(!1),s=n[0];return n=s0.bind(null,n[1]),rr().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=et,d=rr();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));(hs&30)!==0||_m(c,s,a)}d.memoizedState=a;var p={value:a,getSnapshot:s};return d.queue=p,Am(Em.bind(null,c,p,n),[n]),c.flags|=2048,Ma(9,vm.bind(null,c,p,a,s),void 0,null),a},useId:function(){var n=rr(),s=Tt.identifierPrefix;if(Xe){var a=xr,c=Nr;a=(c&~(1<<32-on(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=La++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=i0++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},u0={readContext:vn,useCallback:Nm,useContext:vn,useEffect:qh,useImperativeHandle:km,useInsertionEffect:Rm,useLayoutEffect:Cm,useMemo:xm,useReducer:Wh,useRef:Sm,useState:function(){return Wh(ba)},useDebugValue:Kh,useDeferredValue:function(n){var s=En();return Dm(s,yt.memoizedState,n)},useTransition:function(){var n=Wh(ba)[0],s=En().memoizedState;return[n,s]},useMutableSource:gm,useSyncExternalStore:ym,useId:Vm,unstable_isNewReconciler:!1},c0={readContext:vn,useCallback:Nm,useContext:vn,useEffect:qh,useImperativeHandle:km,useInsertionEffect:Rm,useLayoutEffect:Cm,useMemo:xm,useReducer:Hh,useRef:Sm,useState:function(){return Hh(ba)},useDebugValue:Kh,useDeferredValue:function(n){var s=En();return yt===null?s.memoizedState=n:Dm(s,yt.memoizedState,n)},useTransition:function(){var n=Hh(ba)[0],s=En().memoizedState;return[n,s]},useMutableSource:gm,useSyncExternalStore:ym,useId:Vm,unstable_isNewReconciler:!1};function Dn(n,s){if(n&&n.defaultProps){s=se({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function Gh(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:se({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Tu={isMounted:function(n){return(n=n._reactInternals)?Pn(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=Ht(),d=gi(n),p=Vr(c,d);p.payload=s,a!=null&&(p.callback=a),s=di(n,p,d),s!==null&&(Ln(s,n,d,c),pu(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=Ht(),d=gi(n),p=Vr(c,d);p.tag=1,p.payload=s,a!=null&&(p.callback=a),s=di(n,p,d),s!==null&&(Ln(s,n,d,c),pu(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=Ht(),c=gi(n),d=Vr(a,c);d.tag=2,s!=null&&(d.callback=s),s=di(n,d,c),s!==null&&(Ln(s,n,c,a),pu(s,n,c))}};function Mm(n,s,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):s.prototype&&s.prototype.isPureReactComponent?!Ia(a,c)||!Ia(d,p):!0}function Fm(n,s,a){var c=!1,d=ui,p=s.contextType;return typeof p=="object"&&p!==null?p=vn(p):(d=Kt(s)?os:Lt.current,c=s.contextTypes,p=(c=c!=null)?uo(n,d):ui),s=new s(a,p),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Tu,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),s}function Um(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&Tu.enqueueReplaceState(s,s.state,null)}function Qh(n,s,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Lh(n);var p=s.contextType;typeof p=="object"&&p!==null?d.context=vn(p):(p=Kt(s)?os:Lt.current,d.context=uo(n,p)),d.state=n.memoizedState,p=s.getDerivedStateFromProps,typeof p=="function"&&(Gh(n,s,p,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&Tu.enqueueReplaceState(d,d.state,null),mu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function _o(n,s){try{var a="",c=s;do a+=Pe(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:s,stack:d,digest:null}}function Yh(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function Jh(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var h0=typeof WeakMap=="function"?WeakMap:Map;function jm(n,s,a){a=Vr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){ku||(ku=!0,dd=c),Jh(n,s)},a}function zm(n,s,a){a=Vr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){Jh(n,s)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Jh(n,s),typeof c!="function"&&(pi===null?pi=new Set([this]):pi.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Bm(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new h0;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),n=A0.bind(null,n,s,a),s.then(n,n))}function $m(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Wm(n,s,a,c,d){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Vr(-1,1),s.tag=2,di(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var d0=ge.ReactCurrentOwner,Gt=!1;function Wt(n,s,a,c){s.child=n===null?cm(s,null,a,c):po(s,n.child,a,c)}function Hm(n,s,a,c,d){a=a.render;var p=s.ref;return go(s,d),c=Bh(n,s,a,c,p,d),a=$h(),n!==null&&!Gt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Or(n,s,d)):(Xe&&a&&Ah(s),s.flags|=1,Wt(n,s,c,d),s.child)}function qm(n,s,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!vd(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=p,Km(n,s,p,c,d)):(n=Lu(a.type,null,c,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:Ia,a(v,c)&&n.ref===s.ref)return Or(n,s,d)}return s.flags|=1,n=_i(p,c),n.ref=s.ref,n.return=s,s.child=n}function Km(n,s,a,c,d){if(n!==null){var p=n.memoizedProps;if(Ia(p,c)&&n.ref===s.ref)if(Gt=!1,s.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gt=!0);else return s.lanes=n.lanes,Or(n,s,d)}return Xh(n,s,a,c,d)}function Gm(n,s,a){var c=s.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Eo,fn),fn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,He(Eo,fn),fn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,He(Eo,fn),fn|=c}else p!==null?(c=p.baseLanes|a,s.memoizedState=null):c=a,He(Eo,fn),fn|=c;return Wt(n,s,d,a),s.child}function Qm(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Xh(n,s,a,c,d){var p=Kt(a)?os:Lt.current;return p=uo(s,p),go(s,d),a=Bh(n,s,a,c,p,d),c=$h(),n!==null&&!Gt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Or(n,s,d)):(Xe&&c&&Ah(s),s.flags|=1,Wt(n,s,a,d),s.child)}function Ym(n,s,a,c,d){if(Kt(a)){var p=!0;ou(s)}else p=!1;if(go(s,d),s.stateNode===null)Su(n,s),Fm(s,a,c),Qh(s,a,c,d),c=!0;else if(n===null){var v=s.stateNode,I=s.memoizedProps;v.props=I;var P=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=vn(j):(j=Kt(a)?os:Lt.current,j=uo(s,j));var Y=a.getDerivedStateFromProps,J=typeof Y=="function"||typeof v.getSnapshotBeforeUpdate=="function";J||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||P!==j)&&Um(s,v,c,j),hi=!1;var Q=s.memoizedState;v.state=Q,mu(s,c,v,d),P=s.memoizedState,I!==c||Q!==P||qt.current||hi?(typeof Y=="function"&&(Gh(s,a,Y,c),P=s.memoizedState),(I=hi||Mm(s,a,I,c,Q,P,j))?(J||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),v.props=c,v.state=P,v.context=j,c=I):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,dm(n,s),I=s.memoizedProps,j=s.type===s.elementType?I:Dn(s.type,I),v.props=j,J=s.pendingProps,Q=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=vn(P):(P=Kt(a)?os:Lt.current,P=uo(s,P));var ne=a.getDerivedStateFromProps;(Y=typeof ne=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==J||Q!==P)&&Um(s,v,c,P),hi=!1,Q=s.memoizedState,v.state=Q,mu(s,c,v,d);var ae=s.memoizedState;I!==J||Q!==ae||qt.current||hi?(typeof ne=="function"&&(Gh(s,a,ne,c),ae=s.memoizedState),(j=hi||Mm(s,a,j,c,Q,ae,P)||!1)?(Y||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&Q===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&Q===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ae),v.props=c,v.state=ae,v.context=P,c=j):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&Q===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&Q===n.memoizedState||(s.flags|=1024),c=!1)}return Zh(n,s,a,c,p,d)}function Zh(n,s,a,c,d,p){Qm(n,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&tm(s,a,!1),Or(n,s,p);c=s.stateNode,d0.current=s;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&v?(s.child=po(s,n.child,null,p),s.child=po(s,null,I,p)):Wt(n,s,I,p),s.memoizedState=c.state,d&&tm(s,a,!0),s.child}function Jm(n){var s=n.stateNode;s.pendingContext?Zp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Zp(n,s.context,!1),bh(n,s.containerInfo)}function Xm(n,s,a,c,d){return fo(),kh(d),s.flags|=256,Wt(n,s,a,c),s.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(n){return{baseLanes:n,cachePool:null,transitions:null}}function Zm(n,s,a){var c=s.pendingProps,d=Ze.current,p=!1,v=(s.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Ze,d&1),n===null)return Ph(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=s.mode,p=s.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=bu(v,c,0,null),n=gs(n,c,a,null),p.return=s,n.return=s,p.sibling=n,s.child=p,s.child.memoizedState=td(a),s.memoizedState=ed,n):nd(s,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return f0(n,s,v,c,I,d,a);if(p){p=c.fallback,v=s.mode,d=n.child,I=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=_i(d,P),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=_i(I,p):(p=gs(p,v,a,null),p.flags|=2),p.return=s,c.return=s,c.sibling=p,s.child=c,c=p,p=s.child,v=n.child.memoizedState,v=v===null?td(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,s.memoizedState=ed,c}return p=n.child,n=p.sibling,c=_i(p,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function nd(n,s){return s=bu({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function Iu(n,s,a,c){return c!==null&&kh(c),po(s,n.child,null,a),n=nd(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function f0(n,s,a,c,d,p,v){if(a)return s.flags&256?(s.flags&=-257,c=Yh(Error(t(422))),Iu(n,s,v,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(p=c.fallback,d=s.mode,c=bu({mode:"visible",children:c.children},d,0,null),p=gs(p,d,v,null),p.flags|=2,c.return=s,p.return=s,c.sibling=p,s.child=c,(s.mode&1)!==0&&po(s,n.child,null,v),s.child.memoizedState=td(v),s.memoizedState=ed,p);if((s.mode&1)===0)return Iu(n,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=Yh(p,c,void 0),Iu(n,s,v,c)}if(I=(v&n.childLanes)!==0,Gt||I){if(c=Tt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Dr(n,d),Ln(c,n,d,-1))}return _d(),c=Yh(Error(t(421))),Iu(n,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=R0.bind(null,n),d._reactRetry=s,null):(n=p.treeContext,dn=ai(d.nextSibling),hn=s,Xe=!0,xn=null,n!==null&&(yn[_n++]=Nr,yn[_n++]=xr,yn[_n++]=as,Nr=n.id,xr=n.overflow,as=s),s=nd(s,c.children),s.flags|=4096,s)}function eg(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),Vh(n.return,s,a)}function rd(n,s,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function tg(n,s,a){var c=s.pendingProps,d=c.revealOrder,p=c.tail;if(Wt(n,s,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&eg(n,a,s);else if(n.tag===19)eg(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Ze,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&gu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),rd(s,!1,d,a,p);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&gu(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}rd(s,!0,a,null,p);break;case"together":rd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Su(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Or(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),ds|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=_i(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=_i(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function p0(n,s,a){switch(s.tag){case 3:Jm(s),fo();break;case 5:mm(s);break;case 1:Kt(s.type)&&ou(s);break;case 4:bh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;He(du,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(He(Ze,Ze.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Zm(n,s,a):(He(Ze,Ze.current&1),n=Or(n,s,a),n!==null?n.sibling:null);He(Ze,Ze.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(n.flags&128)!==0){if(c)return tg(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Ze,Ze.current),c)break;return null;case 22:case 23:return s.lanes=0,Gm(n,s,a)}return Or(n,s,a)}var ng,id,rg,ig;ng=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},id=function(){},rg=function(n,s,a,c){var d=n.memoizedProps;if(d!==c){n=s.stateNode,cs(nr.current);var p=null;switch(a){case"input":d=Ls(n,d),c=Ls(n,c),p=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),p=[];break;case"textarea":d=Xo(n,d),c=Xo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=ru)}Cn(a,c);var v;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var I=d[j];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?p||(p=[]):(p=p||[]).push(j,null));for(j in c){var P=c[j];if(I=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&P!==I&&(P!=null||I!=null))if(j==="style")if(I){for(v in I)!I.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&I[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(p||(p=[]),p.push(j,a)),a=P;else j==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,I=I?I.__html:void 0,P!=null&&I!==P&&(p=p||[]).push(j,P)):j==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(j,""+P):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(P!=null&&j==="onScroll"&&Ge("scroll",n),p||I===P||(p=[])):(p=p||[]).push(j,P))}a&&(p=p||[]).push("style",a);var j=p;(s.updateQueue=j)&&(s.flags|=4)}},ig=function(n,s,a,c){a!==c&&(s.flags|=4)};function Fa(n,s){if(!Xe)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Mt(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function m0(n,s,a){var c=s.pendingProps;switch(Rh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(s),null;case 1:return Kt(s.type)&&su(),Mt(s),null;case 3:return c=s.stateNode,yo(),Qe(qt),Qe(Lt),Uh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(cu(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,xn!==null&&(md(xn),xn=null))),id(n,s),Mt(s),null;case 5:Mh(s);var d=cs(Va.current);if(a=s.type,n!==null&&s.stateNode!=null)rg(n,s,a,c,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Mt(s),null}if(n=cs(nr.current),cu(s)){c=s.stateNode,a=s.type;var p=s.memoizedProps;switch(c[tr]=s,c[Pa]=p,n=(s.mode&1)!==0,a){case"dialog":Ge("cancel",c),Ge("close",c);break;case"iframe":case"object":case"embed":Ge("load",c);break;case"video":case"audio":for(d=0;d<Aa.length;d++)Ge(Aa[d],c);break;case"source":Ge("error",c);break;case"img":case"image":case"link":Ge("error",c),Ge("load",c);break;case"details":Ge("toggle",c);break;case"input":Pl(c,p),Ge("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ge("invalid",c);break;case"textarea":Zo(c,p),Ge("invalid",c)}Cn(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var I=p[v];v==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&nu(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&nu(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&Ge("scroll",c)}switch(a){case"input":Os(c),Jo(c,p,!0);break;case"textarea":Os(c),Hr(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=ru)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ea(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[tr]=s,n[Pa]=c,ng(n,s,!1,!1),s.stateNode=n;e:{switch(v=Us(a,c),a){case"dialog":Ge("cancel",n),Ge("close",n),d=c;break;case"iframe":case"object":case"embed":Ge("load",n),d=c;break;case"video":case"audio":for(d=0;d<Aa.length;d++)Ge(Aa[d],n);d=c;break;case"source":Ge("error",n),d=c;break;case"img":case"image":case"link":Ge("error",n),Ge("load",n),d=c;break;case"details":Ge("toggle",n),d=c;break;case"input":Pl(n,c),d=Ls(n,c),Ge("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),Ge("invalid",n);break;case"textarea":Zo(n,c),d=Xo(n,c),Ge("invalid",n);break;default:d=c}Cn(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var P=I[p];p==="style"?Fs(n,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Nl(n,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Hi(n,P):typeof P=="number"&&Hi(n,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&Ge("scroll",n):P!=null&&ue(n,p,P,v))}switch(a){case"input":Os(n),Jo(n,c,!1);break;case"textarea":Os(n),Hr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Le(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?Rn(n,!!c.multiple,p,!1):c.defaultValue!=null&&Rn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=ru)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Mt(s),null;case 6:if(n&&s.stateNode!=null)ig(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=cs(Va.current),cs(nr.current),cu(s)){if(c=s.stateNode,a=s.memoizedProps,c[tr]=s,(p=c.nodeValue!==a)&&(n=hn,n!==null))switch(n.tag){case 3:nu(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&nu(c.nodeValue,a,(n.mode&1)!==0)}p&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[tr]=s,s.stateNode=c}return Mt(s),null;case 13:if(Qe(Ze),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&dn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)am(),fo(),s.flags|=98560,p=!1;else if(p=cu(s),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=s.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[tr]=s}else fo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Mt(s),p=!1}else xn!==null&&(md(xn),xn=null),p=!0;if(!p)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(Ze.current&1)!==0?_t===0&&(_t=3):_d())),s.updateQueue!==null&&(s.flags|=4),Mt(s),null);case 4:return yo(),id(n,s),n===null&&Ra(s.stateNode.containerInfo),Mt(s),null;case 10:return Dh(s.type._context),Mt(s),null;case 17:return Kt(s.type)&&su(),Mt(s),null;case 19:if(Qe(Ze),p=s.memoizedState,p===null)return Mt(s),null;if(c=(s.flags&128)!==0,v=p.rendering,v===null)if(c)Fa(p,!1);else{if(_t!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(v=gu(n),v!==null){for(s.flags|=128,Fa(p,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Ze,Ze.current&1|2),s.child}n=n.sibling}p.tail!==null&&Ke()>wo&&(s.flags|=128,c=!0,Fa(p,!1),s.lanes=4194304)}else{if(!c)if(n=gu(v),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Fa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Xe)return Mt(s),null}else 2*Ke()-p.renderingStartTime>wo&&a!==1073741824&&(s.flags|=128,c=!0,Fa(p,!1),s.lanes=4194304);p.isBackwards?(v.sibling=s.child,s.child=v):(a=p.last,a!==null?a.sibling=v:s.child=v,p.last=v)}return p.tail!==null?(s=p.tail,p.rendering=s,p.tail=s.sibling,p.renderingStartTime=Ke(),s.sibling=null,a=Ze.current,He(Ze,c?a&1|2:a&1),s):(Mt(s),null);case 22:case 23:return yd(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(fn&1073741824)!==0&&(Mt(s),s.subtreeFlags&6&&(s.flags|=8192)):Mt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function g0(n,s){switch(Rh(s),s.tag){case 1:return Kt(s.type)&&su(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return yo(),Qe(qt),Qe(Lt),Uh(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Mh(s),null;case 13:if(Qe(Ze),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));fo()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Qe(Ze),null;case 4:return yo(),null;case 10:return Dh(s.type._context),null;case 22:case 23:return yd(),null;case 24:return null;default:return null}}var Au=!1,Ft=!1,y0=typeof WeakSet=="function"?WeakSet:Set,oe=null;function vo(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(n,s,c)}else a.current=null}function sd(n,s,a){try{a()}catch(c){rt(n,s,c)}}var sg=!1;function _0(n,s){if(yh=Ar,n=Mp(),uh(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,I=-1,P=-1,j=0,Y=0,J=n,Q=null;t:for(;;){for(var ne;J!==a||d!==0&&J.nodeType!==3||(I=v+d),J!==p||c!==0&&J.nodeType!==3||(P=v+c),J.nodeType===3&&(v+=J.nodeValue.length),(ne=J.firstChild)!==null;)Q=J,J=ne;for(;;){if(J===n)break t;if(Q===a&&++j===d&&(I=v),Q===p&&++Y===c&&(P=v),(ne=J.nextSibling)!==null)break;J=Q,Q=J.parentNode}J=ne}a=I===-1||P===-1?null:{start:I,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(_h={focusedElem:n,selectionRange:a},Ar=!1,oe=s;oe!==null;)if(s=oe,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,oe=n;else for(;oe!==null;){s=oe;try{var ae=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,ot=ae.memoizedState,b=s.stateNode,x=b.getSnapshotBeforeUpdate(s.elementType===s.type?le:Dn(s.type,le),ot);b.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){rt(s,s.return,X)}if(n=s.sibling,n!==null){n.return=s.return,oe=n;break}oe=s.return}return ae=sg,sg=!1,ae}function Ua(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&sd(s,a,p)}d=d.next}while(d!==c)}}function Ru(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function od(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function og(n){var s=n.alternate;s!==null&&(n.alternate=null,og(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[tr],delete s[Pa],delete s[Th],delete s[e0],delete s[t0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ag(n){return n.tag===5||n.tag===3||n.tag===4}function lg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ag(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ad(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=ru));else if(c!==4&&(n=n.child,n!==null))for(ad(n,s,a),n=n.sibling;n!==null;)ad(n,s,a),n=n.sibling}function ld(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(ld(n,s,a),n=n.sibling;n!==null;)ld(n,s,a),n=n.sibling}var Ct=null,Vn=!1;function fi(n,s,a){for(a=a.child;a!==null;)ug(n,s,a),a=a.sibling}function ug(n,s,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Yi,a)}catch{}switch(a.tag){case 5:Ft||vo(a,s);case 6:var c=Ct,d=Vn;Ct=null,fi(n,s,a),Ct=c,Vn=d,Ct!==null&&(Vn?(n=Ct,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(Vn?(n=Ct,a=a.stateNode,n.nodeType===8?wh(n.parentNode,a):n.nodeType===1&&wh(n,a),ri(n)):wh(Ct,a.stateNode));break;case 4:c=Ct,d=Vn,Ct=a.stateNode.containerInfo,Vn=!0,fi(n,s,a),Ct=c,Vn=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&sd(a,s,v),d=d.next}while(d!==c)}fi(n,s,a);break;case 1:if(!Ft&&(vo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){rt(a,s,I)}fi(n,s,a);break;case 21:fi(n,s,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,fi(n,s,a),Ft=c):fi(n,s,a);break;default:fi(n,s,a)}}function cg(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new y0),s.forEach(function(c){var d=C0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function On(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=s,I=v;e:for(;I!==null;){switch(I.tag){case 5:Ct=I.stateNode,Vn=!1;break e;case 3:Ct=I.stateNode.containerInfo,Vn=!0;break e;case 4:Ct=I.stateNode.containerInfo,Vn=!0;break e}I=I.return}if(Ct===null)throw Error(t(160));ug(p,v,d),Ct=null,Vn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(j){rt(d,s,j)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)hg(s,n),s=s.sibling}function hg(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(On(s,n),ir(n),c&4){try{Ua(3,n,n.return),Ru(3,n)}catch(le){rt(n,n.return,le)}try{Ua(5,n,n.return)}catch(le){rt(n,n.return,le)}}break;case 1:On(s,n),ir(n),c&512&&a!==null&&vo(a,a.return);break;case 5:if(On(s,n),ir(n),c&512&&a!==null&&vo(a,a.return),n.flags&32){var d=n.stateNode;try{Hi(d,"")}catch(le){rt(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,I=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&bs(d,p),Us(I,v);var j=Us(I,p);for(v=0;v<P.length;v+=2){var Y=P[v],J=P[v+1];Y==="style"?Fs(d,J):Y==="dangerouslySetInnerHTML"?Nl(d,J):Y==="children"?Hi(d,J):ue(d,Y,J,j)}switch(I){case"input":Wi(d,p);break;case"textarea":kl(d,p);break;case"select":var Q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ne=p.value;ne!=null?Rn(d,!!p.multiple,ne,!1):Q!==!!p.multiple&&(p.defaultValue!=null?Rn(d,!!p.multiple,p.defaultValue,!0):Rn(d,!!p.multiple,p.multiple?[]:"",!1))}d[Pa]=p}catch(le){rt(n,n.return,le)}}break;case 6:if(On(s,n),ir(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(le){rt(n,n.return,le)}}break;case 3:if(On(s,n),ir(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ri(s.containerInfo)}catch(le){rt(n,n.return,le)}break;case 4:On(s,n),ir(n);break;case 13:On(s,n),ir(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(hd=Ke())),c&4&&cg(n);break;case 22:if(Y=a!==null&&a.memoizedState!==null,n.mode&1?(Ft=(j=Ft)||Y,On(s,n),Ft=j):On(s,n),ir(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!Y&&(n.mode&1)!==0)for(oe=n,Y=n.child;Y!==null;){for(J=oe=Y;oe!==null;){switch(Q=oe,ne=Q.child,Q.tag){case 0:case 11:case 14:case 15:Ua(4,Q,Q.return);break;case 1:vo(Q,Q.return);var ae=Q.stateNode;if(typeof ae.componentWillUnmount=="function"){c=Q,a=Q.return;try{s=c,ae.props=s.memoizedProps,ae.state=s.memoizedState,ae.componentWillUnmount()}catch(le){rt(c,a,le)}}break;case 5:vo(Q,Q.return);break;case 22:if(Q.memoizedState!==null){pg(J);continue}}ne!==null?(ne.return=Q,oe=ne):pg(J)}Y=Y.sibling}e:for(Y=null,J=n;;){if(J.tag===5){if(Y===null){Y=J;try{d=J.stateNode,j?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=J.stateNode,P=J.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,I.style.display=Gr("display",v))}catch(le){rt(n,n.return,le)}}}else if(J.tag===6){if(Y===null)try{J.stateNode.nodeValue=j?"":J.memoizedProps}catch(le){rt(n,n.return,le)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===n)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===n)break e;for(;J.sibling===null;){if(J.return===null||J.return===n)break e;Y===J&&(Y=null),J=J.return}Y===J&&(Y=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:On(s,n),ir(n),c&4&&cg(n);break;case 21:break;default:On(s,n),ir(n)}}function ir(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(ag(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Hi(d,""),c.flags&=-33);var p=lg(n);ld(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=lg(n);ad(n,I,v);break;default:throw Error(t(161))}}catch(P){rt(n,n.return,P)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function v0(n,s,a){oe=n,dg(n)}function dg(n,s,a){for(var c=(n.mode&1)!==0;oe!==null;){var d=oe,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Au;if(!v){var I=d.alternate,P=I!==null&&I.memoizedState!==null||Ft;I=Au;var j=Ft;if(Au=v,(Ft=P)&&!j)for(oe=d;oe!==null;)v=oe,P=v.child,v.tag===22&&v.memoizedState!==null?mg(d):P!==null?(P.return=v,oe=P):mg(d);for(;p!==null;)oe=p,dg(p),p=p.sibling;oe=d,Au=I,Ft=j}fg(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,oe=p):fg(n)}}function fg(n){for(;oe!==null;){var s=oe;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ft||Ru(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Dn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=s.updateQueue;p!==null&&pm(s,p,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}pm(s,v,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var j=s.alternate;if(j!==null){var Y=j.memoizedState;if(Y!==null){var J=Y.dehydrated;J!==null&&ri(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||s.flags&512&&od(s)}catch(Q){rt(s,s.return,Q)}}if(s===n){oe=null;break}if(a=s.sibling,a!==null){a.return=s.return,oe=a;break}oe=s.return}}function pg(n){for(;oe!==null;){var s=oe;if(s===n){oe=null;break}var a=s.sibling;if(a!==null){a.return=s.return,oe=a;break}oe=s.return}}function mg(n){for(;oe!==null;){var s=oe;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Ru(4,s)}catch(P){rt(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(P){rt(s,d,P)}}var p=s.return;try{od(s)}catch(P){rt(s,p,P)}break;case 5:var v=s.return;try{od(s)}catch(P){rt(s,v,P)}}}catch(P){rt(s,s.return,P)}if(s===n){oe=null;break}var I=s.sibling;if(I!==null){I.return=s.return,oe=I;break}oe=s.return}}var E0=Math.ceil,Cu=ge.ReactCurrentDispatcher,ud=ge.ReactCurrentOwner,wn=ge.ReactCurrentBatchConfig,be=0,Tt=null,dt=null,Pt=0,fn=0,Eo=li(0),_t=0,ja=null,ds=0,Pu=0,cd=0,za=null,Qt=null,hd=0,wo=1/0,Lr=null,ku=!1,dd=null,pi=null,Nu=!1,mi=null,xu=0,Ba=0,fd=null,Du=-1,Vu=0;function Ht(){return(be&6)!==0?Ke():Du!==-1?Du:Du=Ke()}function gi(n){return(n.mode&1)===0?1:(be&2)!==0&&Pt!==0?Pt&-Pt:r0.transition!==null?(Vu===0&&(Vu=ua()),Vu):(n=Ve,n!==0||(n=window.event,n=n===void 0?16:Qs(n.type)),n)}function Ln(n,s,a,c){if(50<Ba)throw Ba=0,fd=null,Error(t(185));es(n,a,c),((be&2)===0||n!==Tt)&&(n===Tt&&((be&2)===0&&(Pu|=a),_t===4&&yi(n,Pt)),Yt(n,c),a===1&&be===0&&(s.mode&1)===0&&(wo=Ke()+500,au&&ci()))}function Yt(n,s){var a=n.callbackNode;Zi(n,s);var c=Tr(n,n===Tt?Pt:0);if(c===0)a!==null&&Bs(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&Bs(a),s===1)n.tag===0?n0(yg.bind(null,n)):nm(yg.bind(null,n)),Xw(function(){(be&6)===0&&ci()}),a=null;else{switch(Hn(c)){case 1:a=$s;break;case 4:a=oa;break;case 16:a=Qi;break;case 536870912:a=Ws;break;default:a=Qi}a=Ag(a,gg.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function gg(n,s){if(Du=-1,Vu=0,(be&6)!==0)throw Error(t(327));var a=n.callbackNode;if(To()&&n.callbackNode!==a)return null;var c=Tr(n,n===Tt?Pt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=Ou(n,c);else{s=c;var d=be;be|=2;var p=vg();(Tt!==n||Pt!==s)&&(Lr=null,wo=Ke()+500,ps(n,s));do try{I0();break}catch(I){_g(n,I)}while(!0);xh(),Cu.current=p,be=d,dt!==null?s=0:(Tt=null,Pt=0,s=_t)}if(s!==0){if(s===2&&(d=la(n),d!==0&&(c=d,s=pd(n,d))),s===1)throw a=ja,ps(n,0),yi(n,c),Yt(n,Ke()),a;if(s===6)yi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!w0(d)&&(s=Ou(n,c),s===2&&(p=la(n),p!==0&&(c=p,s=pd(n,p))),s===1))throw a=ja,ps(n,0),yi(n,c),Yt(n,Ke()),a;switch(n.finishedWork=d,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ms(n,Qt,Lr);break;case 3:if(yi(n,c),(c&130023424)===c&&(s=hd+500-Ke(),10<s)){if(Tr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Eh(ms.bind(null,n,Qt,Lr),s);break}ms(n,Qt,Lr);break;case 4:if(yi(n,c),(c&4194240)===c)break;for(s=n.eventTimes,d=-1;0<c;){var v=31-on(c);p=1<<v,v=s[v],v>d&&(d=v),c&=~p}if(c=d,c=Ke()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*E0(c/1960))-c,10<c){n.timeoutHandle=Eh(ms.bind(null,n,Qt,Lr),c);break}ms(n,Qt,Lr);break;case 5:ms(n,Qt,Lr);break;default:throw Error(t(329))}}}return Yt(n,Ke()),n.callbackNode===a?gg.bind(null,n):null}function pd(n,s){var a=za;return n.current.memoizedState.isDehydrated&&(ps(n,s).flags|=256),n=Ou(n,s),n!==2&&(s=Qt,Qt=a,s!==null&&md(s)),n}function md(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function w0(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Nn(p(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function yi(n,s){for(s&=~cd,s&=~Pu,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-on(s),c=1<<a;n[a]=-1,s&=~c}}function yg(n){if((be&6)!==0)throw Error(t(327));To();var s=Tr(n,0);if((s&1)===0)return Yt(n,Ke()),null;var a=Ou(n,s);if(n.tag!==0&&a===2){var c=la(n);c!==0&&(s=c,a=pd(n,c))}if(a===1)throw a=ja,ps(n,0),yi(n,s),Yt(n,Ke()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,ms(n,Qt,Lr),Yt(n,Ke()),null}function gd(n,s){var a=be;be|=1;try{return n(s)}finally{be=a,be===0&&(wo=Ke()+500,au&&ci())}}function fs(n){mi!==null&&mi.tag===0&&(be&6)===0&&To();var s=be;be|=1;var a=wn.transition,c=Ve;try{if(wn.transition=null,Ve=1,n)return n()}finally{Ve=c,wn.transition=a,be=s,(be&6)===0&&ci()}}function yd(){fn=Eo.current,Qe(Eo)}function ps(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Jw(a)),dt!==null)for(a=dt.return;a!==null;){var c=a;switch(Rh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&su();break;case 3:yo(),Qe(qt),Qe(Lt),Uh();break;case 5:Mh(c);break;case 4:yo();break;case 13:Qe(Ze);break;case 19:Qe(Ze);break;case 10:Dh(c.type._context);break;case 22:case 23:yd()}a=a.return}if(Tt=n,dt=n=_i(n.current,null),Pt=fn=s,_t=0,ja=null,cd=Pu=ds=0,Qt=za=null,us!==null){for(s=0;s<us.length;s++)if(a=us[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}us=null}return n}function _g(n,s){do{var a=dt;try{if(xh(),yu.current=wu,_u){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}_u=!1}if(hs=0,wt=yt=et=null,Oa=!1,La=0,ud.current=null,a===null||a.return===null){_t=1,ja=s,dt=null;break}e:{var p=n,v=a.return,I=a,P=s;if(s=Pt,I.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var j=P,Y=I,J=Y.tag;if((Y.mode&1)===0&&(J===0||J===11||J===15)){var Q=Y.alternate;Q?(Y.updateQueue=Q.updateQueue,Y.memoizedState=Q.memoizedState,Y.lanes=Q.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var ne=$m(v);if(ne!==null){ne.flags&=-257,Wm(ne,v,I,p,s),ne.mode&1&&Bm(p,j,s),s=ne,P=j;var ae=s.updateQueue;if(ae===null){var le=new Set;le.add(P),s.updateQueue=le}else ae.add(P);break e}else{if((s&1)===0){Bm(p,j,s),_d();break e}P=Error(t(426))}}else if(Xe&&I.mode&1){var ot=$m(v);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),Wm(ot,v,I,p,s),kh(_o(P,I));break e}}p=P=_o(P,I),_t!==4&&(_t=2),za===null?za=[p]:za.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,s&=-s,p.lanes|=s;var b=jm(p,P,s);fm(p,b);break e;case 1:I=P;var x=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(pi===null||!pi.has(F)))){p.flags|=65536,s&=-s,p.lanes|=s;var X=zm(p,I,s);fm(p,X);break e}}p=p.return}while(p!==null)}wg(a)}catch(ce){s=ce,dt===a&&a!==null&&(dt=a=a.return);continue}break}while(!0)}function vg(){var n=Cu.current;return Cu.current=wu,n===null?wu:n}function _d(){(_t===0||_t===3||_t===2)&&(_t=4),Tt===null||(ds&268435455)===0&&(Pu&268435455)===0||yi(Tt,Pt)}function Ou(n,s){var a=be;be|=2;var c=vg();(Tt!==n||Pt!==s)&&(Lr=null,ps(n,s));do try{T0();break}catch(d){_g(n,d)}while(!0);if(xh(),be=a,Cu.current=c,dt!==null)throw Error(t(261));return Tt=null,Pt=0,_t}function T0(){for(;dt!==null;)Eg(dt)}function I0(){for(;dt!==null&&!Gi();)Eg(dt)}function Eg(n){var s=Sg(n.alternate,n,fn);n.memoizedProps=n.pendingProps,s===null?wg(n):dt=s,ud.current=null}function wg(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=m0(a,s,fn),a!==null){dt=a;return}}else{if(a=g0(a,s),a!==null){a.flags&=32767,dt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,dt=null;return}}if(s=s.sibling,s!==null){dt=s;return}dt=s=n}while(s!==null);_t===0&&(_t=5)}function ms(n,s,a){var c=Ve,d=wn.transition;try{wn.transition=null,Ve=1,S0(n,s,a,c)}finally{wn.transition=d,Ve=c}return null}function S0(n,s,a,c){do To();while(mi!==null);if((be&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(ih(n,p),n===Tt&&(dt=Tt=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Nu||(Nu=!0,Ag(Qi,function(){return To(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=wn.transition,wn.transition=null;var v=Ve;Ve=1;var I=be;be|=4,ud.current=null,_0(n,a),hg(a,n),Ww(_h),Ar=!!yh,_h=yh=null,n.current=a,v0(a),wr(),be=I,Ve=v,wn.transition=p}else n.current=a;if(Nu&&(Nu=!1,mi=n,xu=d),p=n.pendingLanes,p===0&&(pi=null),zl(a.stateNode),Yt(n,Ke()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(ku)throw ku=!1,n=dd,dd=null,n;return(xu&1)!==0&&n.tag!==0&&To(),p=n.pendingLanes,(p&1)!==0?n===fd?Ba++:(Ba=0,fd=n):Ba=0,ci(),null}function To(){if(mi!==null){var n=Hn(xu),s=wn.transition,a=Ve;try{if(wn.transition=null,Ve=16>n?16:n,mi===null)var c=!1;else{if(n=mi,mi=null,xu=0,(be&6)!==0)throw Error(t(331));var d=be;for(be|=4,oe=n.current;oe!==null;){var p=oe,v=p.child;if((oe.flags&16)!==0){var I=p.deletions;if(I!==null){for(var P=0;P<I.length;P++){var j=I[P];for(oe=j;oe!==null;){var Y=oe;switch(Y.tag){case 0:case 11:case 15:Ua(8,Y,p)}var J=Y.child;if(J!==null)J.return=Y,oe=J;else for(;oe!==null;){Y=oe;var Q=Y.sibling,ne=Y.return;if(og(Y),Y===j){oe=null;break}if(Q!==null){Q.return=ne,oe=Q;break}oe=ne}}}var ae=p.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var ot=le.sibling;le.sibling=null,le=ot}while(le!==null)}}oe=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,oe=v;else e:for(;oe!==null;){if(p=oe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ua(9,p,p.return)}var b=p.sibling;if(b!==null){b.return=p.return,oe=b;break e}oe=p.return}}var x=n.current;for(oe=x;oe!==null;){v=oe;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,oe=F;else e:for(v=x;oe!==null;){if(I=oe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ru(9,I)}}catch(ce){rt(I,I.return,ce)}if(I===v){oe=null;break e}var X=I.sibling;if(X!==null){X.return=I.return,oe=X;break e}oe=I.return}}if(be=d,ci(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Yi,n)}catch{}c=!0}return c}finally{Ve=a,wn.transition=s}}return!1}function Tg(n,s,a){s=_o(a,s),s=jm(n,s,1),n=di(n,s,1),s=Ht(),n!==null&&(es(n,1,s),Yt(n,s))}function rt(n,s,a){if(n.tag===3)Tg(n,n,a);else for(;s!==null;){if(s.tag===3){Tg(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(pi===null||!pi.has(c))){n=_o(a,n),n=zm(s,n,1),s=di(s,n,1),n=Ht(),s!==null&&(es(s,1,n),Yt(s,n));break}}s=s.return}}function A0(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=Ht(),n.pingedLanes|=n.suspendedLanes&a,Tt===n&&(Pt&a)===a&&(_t===4||_t===3&&(Pt&130023424)===Pt&&500>Ke()-hd?ps(n,0):cd|=a),Yt(n,s)}function Ig(n,s){s===0&&((n.mode&1)===0?s=1:(s=ei,ei<<=1,(ei&130023424)===0&&(ei=4194304)));var a=Ht();n=Dr(n,s),n!==null&&(es(n,s,a),Yt(n,a))}function R0(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),Ig(n,a)}function C0(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Ig(n,a)}var Sg;Sg=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||qt.current)Gt=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return Gt=!1,p0(n,s,a);Gt=(n.flags&131072)!==0}else Gt=!1,Xe&&(s.flags&1048576)!==0&&rm(s,uu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Su(n,s),n=s.pendingProps;var d=uo(s,Lt.current);go(s,a),d=Bh(null,s,c,n,d,a);var p=$h();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Kt(c)?(p=!0,ou(s)):p=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Lh(s),d.updater=Tu,s.stateNode=d,d._reactInternals=s,Qh(s,c,n,a),s=Zh(null,s,c,!0,p,a)):(s.tag=0,Xe&&p&&Ah(s),Wt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Su(n,s),n=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=k0(c),n=Dn(c,n),d){case 0:s=Xh(null,s,c,n,a);break e;case 1:s=Ym(null,s,c,n,a);break e;case 11:s=Hm(null,s,c,n,a);break e;case 14:s=qm(null,s,c,Dn(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Dn(c,d),Xh(n,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Dn(c,d),Ym(n,s,c,d,a);case 3:e:{if(Jm(s),n===null)throw Error(t(387));c=s.pendingProps,p=s.memoizedState,d=p.element,dm(n,s),mu(s,c,null,a);var v=s.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=p,s.memoizedState=p,s.flags&256){d=_o(Error(t(423)),s),s=Xm(n,s,c,a,d);break e}else if(c!==d){d=_o(Error(t(424)),s),s=Xm(n,s,c,a,d);break e}else for(dn=ai(s.stateNode.containerInfo.firstChild),hn=s,Xe=!0,xn=null,a=cm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fo(),c===d){s=Or(n,s,a);break e}Wt(n,s,c,a)}s=s.child}return s;case 5:return mm(s),n===null&&Ph(s),c=s.type,d=s.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,vh(c,d)?v=null:p!==null&&vh(c,p)&&(s.flags|=32),Qm(n,s),Wt(n,s,v,a),s.child;case 6:return n===null&&Ph(s),null;case 13:return Zm(n,s,a);case 4:return bh(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=po(s,null,c,a):Wt(n,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Dn(c,d),Hm(n,s,c,d,a);case 7:return Wt(n,s,s.pendingProps,a),s.child;case 8:return Wt(n,s,s.pendingProps.children,a),s.child;case 12:return Wt(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,p=s.memoizedProps,v=d.value,He(du,c._currentValue),c._currentValue=v,p!==null)if(Nn(p.value,v)){if(p.children===d.children&&!qt.current){s=Or(n,s,a);break e}}else for(p=s.child,p!==null&&(p.return=s);p!==null;){var I=p.dependencies;if(I!==null){v=p.child;for(var P=I.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=Vr(-1,a&-a),P.tag=2;var j=p.updateQueue;if(j!==null){j=j.shared;var Y=j.pending;Y===null?P.next=P:(P.next=Y.next,Y.next=P),j.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),Vh(p.return,a,s),I.lanes|=a;break}P=P.next}}else if(p.tag===10)v=p.type===s.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),Vh(v,a,s),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===s){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}Wt(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,go(s,a),d=vn(d),c=c(d),s.flags|=1,Wt(n,s,c,a),s.child;case 14:return c=s.type,d=Dn(c,s.pendingProps),d=Dn(c.type,d),qm(n,s,c,d,a);case 15:return Km(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Dn(c,d),Su(n,s),s.tag=1,Kt(c)?(n=!0,ou(s)):n=!1,go(s,a),Fm(s,c,d),Qh(s,c,d,a),Zh(null,s,c,!0,n,a);case 19:return tg(n,s,a);case 22:return Gm(n,s,a)}throw Error(t(156,s.tag))};function Ag(n,s){return sa(n,s)}function P0(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(n,s,a,c){return new P0(n,s,a,c)}function vd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function k0(n){if(typeof n=="function")return vd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Et)return 14}return 2}function _i(n,s){var a=n.alternate;return a===null?(a=Tn(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Lu(n,s,a,c,d,p){var v=2;if(c=n,typeof n=="function")vd(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case k:return gs(a.children,d,p,s);case S:v=8,d|=8;break;case C:return n=Tn(12,a,s,d|2),n.elementType=C,n.lanes=p,n;case A:return n=Tn(13,a,s,d),n.elementType=A,n.lanes=p,n;case We:return n=Tn(19,a,s,d),n.elementType=We,n.lanes=p,n;case Je:return bu(a,d,p,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:v=10;break e;case N:v=9;break e;case O:v=11;break e;case Et:v=14;break e;case Vt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=Tn(v,a,s,d),s.elementType=n,s.type=c,s.lanes=p,s}function gs(n,s,a,c){return n=Tn(7,n,c,s),n.lanes=a,n}function bu(n,s,a,c){return n=Tn(22,n,c,s),n.elementType=Je,n.lanes=a,n.stateNode={isHidden:!1},n}function Ed(n,s,a){return n=Tn(6,n,null,s),n.lanes=a,n}function wd(n,s,a){return s=Tn(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function N0(n,s,a,c,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ca(0),this.expirationTimes=ca(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ca(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Td(n,s,a,c,d,p,v,I,P){return n=new N0(n,s,a,I,P),s===1?(s=1,p===!0&&(s|=8)):s=0,p=Tn(3,null,null,s),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lh(p),n}function x0(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function Rg(n){if(!n)return ui;n=n._reactInternals;e:{if(Pn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Kt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kt(a))return em(n,a,s)}return s}function Cg(n,s,a,c,d,p,v,I,P){return n=Td(a,c,!0,n,d,p,v,I,P),n.context=Rg(null),a=n.current,c=Ht(),d=gi(a),p=Vr(c,d),p.callback=s??null,di(a,p,d),n.current.lanes=d,es(n,d,c),Yt(n,c),n}function Mu(n,s,a,c){var d=s.current,p=Ht(),v=gi(d);return a=Rg(a),s.context===null?s.context=a:s.pendingContext=a,s=Vr(p,v),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=di(d,s,v),n!==null&&(Ln(n,d,v,p),pu(n,d,v)),v}function Fu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Pg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function Id(n,s){Pg(n,s),(n=n.alternate)&&Pg(n,s)}function D0(){return null}var kg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Sd(n){this._internalRoot=n}Uu.prototype.render=Sd.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Mu(n,s,null,null)},Uu.prototype.unmount=Sd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;fs(function(){Mu(null,n,null,null)}),s[Pr]=null}};function Uu(n){this._internalRoot=n}Uu.prototype.unstable_scheduleHydration=function(n){if(n){var s=pa();n={blockedOn:null,target:n,priority:s};for(var a=0;a<an.length&&s!==0&&s<an[a].priority;a++);an.splice(a,0,n),a===0&&Ks(n)}};function Ad(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ju(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ng(){}function V0(n,s,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var j=Fu(v);p.call(j)}}var v=Cg(s,c,n,0,null,!1,!1,"",Ng);return n._reactRootContainer=v,n[Pr]=v.current,Ra(n.nodeType===8?n.parentNode:n),fs(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var j=Fu(P);I.call(j)}}var P=Td(n,0,!1,null,null,!1,!1,"",Ng);return n._reactRootContainer=P,n[Pr]=P.current,Ra(n.nodeType===8?n.parentNode:n),fs(function(){Mu(s,P,a,c)}),P}function zu(n,s,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var I=d;d=function(){var P=Fu(v);I.call(P)}}Mu(s,v,n,d)}else v=V0(a,s,n,d,c);return Fu(v)}da=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=Fe(s.pendingLanes);a!==0&&(ha(s,a|1),Yt(s,Ke()),(be&6)===0&&(wo=Ke()+500,ci()))}break;case 13:fs(function(){var c=Dr(n,1);if(c!==null){var d=Ht();Ln(c,n,1,d)}}),Id(n,1)}},Hs=function(n){if(n.tag===13){var s=Dr(n,134217728);if(s!==null){var a=Ht();Ln(s,n,134217728,a)}Id(n,134217728)}},fa=function(n){if(n.tag===13){var s=gi(n),a=Dr(n,s);if(a!==null){var c=Ht();Ln(a,n,s,c)}Id(n,s)}},pa=function(){return Ve},ma=function(n,s){var a=Ve;try{return Ve=n,s()}finally{Ve=a}},_r=function(n,s,a){switch(s){case"input":if(Wi(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var d=iu(c);if(!d)throw Error(t(90));Yo(c),Wi(c,d)}}}break;case"textarea":kl(n,a);break;case"select":s=a.value,s!=null&&Rn(n,!!a.multiple,s,!1)}},Dl=gd,Vl=fs;var O0={usingClientEntryPoint:!1,Events:[ka,ao,iu,Yr,Jr,gd]},$a={findFiberByHostInstance:ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L0={bundleType:$a.bundleType,version:$a.version,rendererPackageName:$a.rendererPackageName,rendererConfig:$a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=jl(n),n===null?null:n.stateNode},findFiberByHostInstance:$a.findFiberByHostInstance||D0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bu.isDisabled&&Bu.supportsFiber)try{Yi=Bu.inject(L0),sn=Bu}catch{}}return Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0,Jt.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ad(s))throw Error(t(200));return x0(n,s,null,a)},Jt.createRoot=function(n,s){if(!Ad(n))throw Error(t(299));var a=!1,c="",d=kg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Td(n,1,!1,null,null,a,!1,c,d),n[Pr]=s.current,Ra(n.nodeType===8?n.parentNode:n),new Sd(s)},Jt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=jl(s),n=n===null?null:n.stateNode,n},Jt.flushSync=function(n){return fs(n)},Jt.hydrate=function(n,s,a){if(!ju(s))throw Error(t(200));return zu(null,n,s,!0,a)},Jt.hydrateRoot=function(n,s,a){if(!Ad(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=kg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Cg(s,null,n,1,a??null,d,!1,p,v),n[Pr]=s.current,Ra(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Uu(s)},Jt.render=function(n,s,a){if(!ju(s))throw Error(t(200));return zu(null,n,s,!1,a)},Jt.unmountComponentAtNode=function(n){if(!ju(n))throw Error(t(40));return n._reactRootContainer?(fs(function(){zu(null,null,n,!1,function(){n._reactRootContainer=null,n[Pr]=null})}),!0):!1},Jt.unstable_batchedUpdates=gd,Jt.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!ju(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return zu(n,s,a,!1,c)},Jt.version="18.3.1-next-f1338f8080-20240426",Jt}var Fg;function U_(){if(Fg)return Pd.exports;Fg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Pd.exports=q0(),Pd.exports}var Ug;function K0(){if(Ug)return $u;Ug=1;var r=U_();return $u.createRoot=r.createRoot,$u.hydrateRoot=r.hydrateRoot,$u}var G0=K0();U_();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function il(){return il=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},il.apply(this,arguments)}var Ai;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Ai||(Ai={}));const jg="popstate";function Q0(r){r===void 0&&(r={});function e(i,o){let{pathname:l,search:h,hash:f}=i.location;return qd("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:ac(o)}return J0(e,t,null,r)}function lt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Rf(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Y0(){return Math.random().toString(36).substr(2,8)}function zg(r,e){return{usr:r.state,key:r.key,idx:e}}function qd(r,e,t,i){return t===void 0&&(t=null),il({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?jo(e):e,{state:t,key:e&&e.key||i||Y0()})}function ac(r){let{pathname:e="/",search:t="",hash:i=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function jo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let i=r.indexOf("?");i>=0&&(e.search=r.substr(i),r=r.substr(0,i)),r&&(e.pathname=r)}return e}function J0(r,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,f=Ai.Pop,g=null,y=E();y==null&&(y=0,h.replaceState(il({},h.state,{idx:y}),""));function E(){return(h.state||{idx:null}).idx}function w(){f=Ai.Pop;let U=E(),re=U==null?null:U-y;y=U,g&&g({action:f,location:H.location,delta:re})}function R(U,re){f=Ai.Push;let he=qd(H.location,U,re);y=E()+1;let ue=zg(he,y),ge=H.createHref(he);try{h.pushState(ue,"",ge)}catch(Ae){if(Ae instanceof DOMException&&Ae.name==="DataCloneError")throw Ae;o.location.assign(ge)}l&&g&&g({action:f,location:H.location,delta:1})}function z(U,re){f=Ai.Replace;let he=qd(H.location,U,re);y=E();let ue=zg(he,y),ge=H.createHref(he);h.replaceState(ue,"",ge),l&&g&&g({action:f,location:H.location,delta:0})}function W(U){let re=o.location.origin!=="null"?o.location.origin:o.location.href,he=typeof U=="string"?U:ac(U);return he=he.replace(/ $/,"%20"),lt(re,"No window.location.(origin|href) available to create URL for href: "+he),new URL(he,re)}let H={get action(){return f},get location(){return r(o,h)},listen(U){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(jg,w),g=U,()=>{o.removeEventListener(jg,w),g=null}},createHref(U){return e(o,U)},createURL:W,encodeLocation(U){let re=W(U);return{pathname:re.pathname,search:re.search,hash:re.hash}},push:R,replace:z,go(U){return h.go(U)}};return H}var Bg;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Bg||(Bg={}));function X0(r,e,t){return t===void 0&&(t="/"),Z0(r,e,t)}function Z0(r,e,t,i){let o=typeof e=="string"?jo(e):e,l=Cf(o.pathname||"/",t);if(l==null)return null;let h=j_(r);eT(h);let f=null;for(let g=0;f==null&&g<h.length;++g){let y=dT(l);f=uT(h[g],y)}return f}function j_(r,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,h,f)=>{let g={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};g.relativePath.startsWith("/")&&(lt(g.relativePath.startsWith(i),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(i.length));let y=Ci([i,g.relativePath]),E=t.concat(g);l.children&&l.children.length>0&&(lt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),j_(l.children,e,E,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:aT(y,l.index),routesMeta:E})};return r.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let g of z_(l.path))o(l,h,g)}),e}function z_(r){let e=r.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=z_(i.join("/")),f=[];return f.push(...h.map(g=>g===""?l:[l,g].join("/"))),o&&f.push(...h),f.map(g=>r.startsWith("/")&&g===""?"/":g)}function eT(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:lT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const tT=/^:[\w-]+$/,nT=3,rT=2,iT=1,sT=10,oT=-2,$g=r=>r==="*";function aT(r,e){let t=r.split("/"),i=t.length;return t.some($g)&&(i+=oT),e&&(i+=rT),t.filter(o=>!$g(o)).reduce((o,l)=>o+(tT.test(l)?nT:l===""?iT:sT),i)}function lT(r,e){return r.length===e.length&&r.slice(0,-1).every((i,o)=>i===e[o])?r[r.length-1]-e[e.length-1]:0}function uT(r,e,t){let{routesMeta:i}=r,o={},l="/",h=[];for(let f=0;f<i.length;++f){let g=i[f],y=f===i.length-1,E=l==="/"?e:e.slice(l.length)||"/",w=cT({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},E),R=g.route;if(!w)return null;Object.assign(o,w.params),h.push({params:o,pathname:Ci([l,w.pathname]),pathnameBase:yT(Ci([l,w.pathnameBase])),route:R}),w.pathnameBase!=="/"&&(l=Ci([l,w.pathnameBase]))}return h}function cT(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,i]=hT(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,E,w)=>{let{paramName:R,isOptional:z}=E;if(R==="*"){let H=f[w]||"";h=l.slice(0,l.length-H.length).replace(/(.)\/+$/,"$1")}const W=f[w];return z&&!W?y[R]=void 0:y[R]=(W||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:r}}function hT(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Rf(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let i=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,g)=>(i.push({paramName:f,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(i.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function dT(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Rf(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function Cf(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=r.charAt(t);return i&&i!=="/"?null:r.slice(t)||"/"}const fT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pT=r=>fT.test(r);function mT(r,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof r=="string"?jo(r):r,l;if(t)if(pT(t))l=t;else{if(t.includes("//")){let h=t;t=t.replace(/\/\/+/g,"/"),Rf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(h+" -> "+t))}t.startsWith("/")?l=Wg(t.substring(1),"/"):l=Wg(t,e)}else l=e;return{pathname:l,search:_T(i),hash:vT(o)}}function Wg(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function xd(r,e,t,i){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gT(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Pf(r,e){let t=gT(r);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function kf(r,e,t,i){i===void 0&&(i=!1);let o;typeof r=="string"?o=jo(r):(o=il({},r),lt(!o.pathname||!o.pathname.includes("?"),xd("?","pathname","search",o)),lt(!o.pathname||!o.pathname.includes("#"),xd("#","pathname","hash",o)),lt(!o.search||!o.search.includes("#"),xd("#","search","hash",o)));let l=r===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let w=e.length-1;if(!i&&h.startsWith("..")){let R=h.split("/");for(;R[0]==="..";)R.shift(),w-=1;o.pathname=R.join("/")}f=w>=0?e[w]:"/"}let g=mT(o,f),y=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(y||E)&&(g.pathname+="/"),g}const Ci=r=>r.join("/").replace(/\/\/+/g,"/"),yT=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),_T=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,vT=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function ET(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const B_=["post","put","patch","delete"];new Set(B_);const wT=["get",...B_];new Set(wT);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sl(){return sl=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},sl.apply(this,arguments)}const Nf=K.createContext(null),TT=K.createContext(null),ji=K.createContext(null),Pc=K.createContext(null),$r=K.createContext({outlet:null,matches:[],isDataRoute:!1}),$_=K.createContext(null);function IT(r,e){let{relative:t}=e===void 0?{}:e;zo()||lt(!1);let{basename:i,navigator:o}=K.useContext(ji),{hash:l,pathname:h,search:f}=H_(r,{relative:t}),g=h;return i!=="/"&&(g=h==="/"?i:Ci([i,h])),o.createHref({pathname:g,search:f,hash:l})}function zo(){return K.useContext(Pc)!=null}function Cs(){return zo()||lt(!1),K.useContext(Pc).location}function W_(r){K.useContext(ji).static||K.useLayoutEffect(r)}function xf(){let{isDataRoute:r}=K.useContext($r);return r?bT():ST()}function ST(){zo()||lt(!1);let r=K.useContext(Nf),{basename:e,future:t,navigator:i}=K.useContext(ji),{matches:o}=K.useContext($r),{pathname:l}=Cs(),h=JSON.stringify(Pf(o,t.v7_relativeSplatPath)),f=K.useRef(!1);return W_(()=>{f.current=!0}),K.useCallback(function(y,E){if(E===void 0&&(E={}),!f.current)return;if(typeof y=="number"){i.go(y);return}let w=kf(y,JSON.parse(h),l,E.relative==="path");r==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:Ci([e,w.pathname])),(E.replace?i.replace:i.push)(w,E.state,E)},[e,i,h,l,r])}function lN(){let{matches:r}=K.useContext($r),e=r[r.length-1];return e?e.params:{}}function H_(r,e){let{relative:t}=e===void 0?{}:e,{future:i}=K.useContext(ji),{matches:o}=K.useContext($r),{pathname:l}=Cs(),h=JSON.stringify(Pf(o,i.v7_relativeSplatPath));return K.useMemo(()=>kf(r,JSON.parse(h),l,t==="path"),[r,h,l,t])}function AT(r,e){return RT(r,e)}function RT(r,e,t,i){zo()||lt(!1);let{navigator:o}=K.useContext(ji),{matches:l}=K.useContext($r),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let g=h?h.pathnameBase:"/";h&&h.route;let y=Cs(),E;if(e){var w;let U=typeof e=="string"?jo(e):e;g==="/"||(w=U.pathname)!=null&&w.startsWith(g)||lt(!1),E=U}else E=y;let R=E.pathname||"/",z=R;if(g!=="/"){let U=g.replace(/^\//,"").split("/");z="/"+R.replace(/^\//,"").split("/").slice(U.length).join("/")}let W=X0(r,{pathname:z}),H=xT(W&&W.map(U=>Object.assign({},U,{params:Object.assign({},f,U.params),pathname:Ci([g,o.encodeLocation?o.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:Ci([g,o.encodeLocation?o.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),l,t,i);return e&&H?K.createElement(Pc.Provider,{value:{location:sl({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:Ai.Pop}},H):H}function CT(){let r=LT(),e=ET(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},e),t?K.createElement("pre",{style:o},t):null,null)}const PT=K.createElement(CT,null);class kT extends K.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?K.createElement($r.Provider,{value:this.props.routeContext},K.createElement($_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function NT(r){let{routeContext:e,match:t,children:i}=r,o=K.useContext(Nf);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),K.createElement($r.Provider,{value:e},i)}function xT(r,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let h=r,f=(o=t)==null?void 0:o.errors;if(f!=null){let E=h.findIndex(w=>w.route.id&&(f==null?void 0:f[w.route.id])!==void 0);E>=0||lt(!1),h=h.slice(0,Math.min(h.length,E+1))}let g=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let E=0;E<h.length;E++){let w=h[E];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(y=E),w.route.id){let{loaderData:R,errors:z}=t,W=w.route.loader&&R[w.route.id]===void 0&&(!z||z[w.route.id]===void 0);if(w.route.lazy||W){g=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}return h.reduceRight((E,w,R)=>{let z,W=!1,H=null,U=null;t&&(z=f&&w.route.id?f[w.route.id]:void 0,H=w.route.errorElement||PT,g&&(y<0&&R===0?(MT("route-fallback"),W=!0,U=null):y===R&&(W=!0,U=w.route.hydrateFallbackElement||null)));let re=e.concat(h.slice(0,R+1)),he=()=>{let ue;return z?ue=H:W?ue=U:w.route.Component?ue=K.createElement(w.route.Component,null):w.route.element?ue=w.route.element:ue=E,K.createElement(NT,{match:w,routeContext:{outlet:E,matches:re,isDataRoute:t!=null},children:ue})};return t&&(w.route.ErrorBoundary||w.route.errorElement||R===0)?K.createElement(kT,{location:t.location,revalidation:t.revalidation,component:H,error:z,children:he(),routeContext:{outlet:null,matches:re,isDataRoute:!0}}):he()},null)}var q_=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(q_||{}),K_=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(K_||{});function DT(r){let e=K.useContext(Nf);return e||lt(!1),e}function VT(r){let e=K.useContext(TT);return e||lt(!1),e}function OT(r){let e=K.useContext($r);return e||lt(!1),e}function G_(r){let e=OT(),t=e.matches[e.matches.length-1];return t.route.id||lt(!1),t.route.id}function LT(){var r;let e=K.useContext($_),t=VT(),i=G_();return e!==void 0?e:(r=t.errors)==null?void 0:r[i]}function bT(){let{router:r}=DT(q_.UseNavigateStable),e=G_(K_.UseNavigateStable),t=K.useRef(!1);return W_(()=>{t.current=!0}),K.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,sl({fromRouteId:e},l)))},[r,e])}const Hg={};function MT(r,e,t){Hg[r]||(Hg[r]=!0)}function FT(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function Kd(r){let{to:e,replace:t,state:i,relative:o}=r;zo()||lt(!1);let{future:l,static:h}=K.useContext(ji),{matches:f}=K.useContext($r),{pathname:g}=Cs(),y=xf(),E=kf(e,Pf(f,l.v7_relativeSplatPath),g,o==="path"),w=JSON.stringify(E);return K.useEffect(()=>y(JSON.parse(w),{replace:t,state:i,relative:o}),[y,w,o,t,i]),null}function kt(r){lt(!1)}function UT(r){let{basename:e="/",children:t=null,location:i,navigationType:o=Ai.Pop,navigator:l,static:h=!1,future:f}=r;zo()&&lt(!1);let g=e.replace(/^\/*/,"/"),y=K.useMemo(()=>({basename:g,navigator:l,static:h,future:sl({v7_relativeSplatPath:!1},f)}),[g,f,l,h]);typeof i=="string"&&(i=jo(i));let{pathname:E="/",search:w="",hash:R="",state:z=null,key:W="default"}=i,H=K.useMemo(()=>{let U=Cf(E,g);return U==null?null:{location:{pathname:U,search:w,hash:R,state:z,key:W},navigationType:o}},[g,E,w,R,z,W,o]);return H==null?null:K.createElement(ji.Provider,{value:y},K.createElement(Pc.Provider,{children:t,value:H}))}function jT(r){let{children:e,location:t}=r;return AT(Gd(e),t)}new Promise(()=>{});function Gd(r,e){e===void 0&&(e=[]);let t=[];return K.Children.forEach(r,(i,o)=>{if(!K.isValidElement(i))return;let l=[...e,o];if(i.type===K.Fragment){t.push.apply(t,Gd(i.props.children,l));return}i.type!==kt&&lt(!1),!i.props.index||!i.props.children||lt(!1);let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=Gd(i.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qd(){return Qd=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},Qd.apply(this,arguments)}function zT(r,e){if(r==null)return{};var t={},i=Object.keys(r),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=r[o]);return t}function BT(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function $T(r,e){return r.button===0&&(!e||e==="_self")&&!BT(r)}const WT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],HT="6";try{window.__reactRouterVersion=HT}catch{}const qT="startTransition",qg=$0[qT];function KT(r){let{basename:e,children:t,future:i,window:o}=r,l=K.useRef();l.current==null&&(l.current=Q0({window:o,v5Compat:!0}));let h=l.current,[f,g]=K.useState({action:h.action,location:h.location}),{v7_startTransition:y}=i||{},E=K.useCallback(w=>{y&&qg?qg(()=>g(w)):g(w)},[g,y]);return K.useLayoutEffect(()=>h.listen(E),[h,E]),K.useEffect(()=>FT(i),[i]),K.createElement(UT,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:h,future:i})}const GT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yd=K.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:h,state:f,target:g,to:y,preventScrollReset:E,viewTransition:w}=e,R=zT(e,WT),{basename:z}=K.useContext(ji),W,H=!1;if(typeof y=="string"&&QT.test(y)&&(W=y,GT))try{let ue=new URL(window.location.href),ge=y.startsWith("//")?new URL(ue.protocol+y):new URL(y),Ae=Cf(ge.pathname,z);ge.origin===ue.origin&&Ae!=null?y=Ae+ge.search+ge.hash:H=!0}catch{}let U=IT(y,{relative:o}),re=YT(y,{replace:h,state:f,target:g,preventScrollReset:E,relative:o,viewTransition:w});function he(ue){i&&i(ue),ue.defaultPrevented||re(ue)}return K.createElement("a",Qd({},R,{href:W||U,onClick:H||l?i:he,ref:t,target:g}))});var Kg;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Kg||(Kg={}));var Gg;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Gg||(Gg={}));function YT(r,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:h,viewTransition:f}=e===void 0?{}:e,g=xf(),y=Cs(),E=H_(r,{relative:h});return K.useCallback(w=>{if($T(w,t)){w.preventDefault();let R=i!==void 0?i:ac(y)===ac(E);g(r,{replace:R,state:o,preventScrollReset:l,relative:h,viewTransition:f})}},[y,g,E,i,o,t,r,l,h,f])}const JT="modulepreload",XT=function(r){return"/"+r},Qg={},mr=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let h=function(y){return Promise.all(y.map(E=>Promise.resolve(E).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),g=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));o=h(t.map(y=>{if(y=XT(y),y in Qg)return;Qg[y]=!0;const E=y.endsWith(".css"),w=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${w}`))return;const R=document.createElement("link");if(R.rel=E?"stylesheet":JT,E||(R.as="script"),R.crossOrigin="",R.href=y,g&&R.setAttribute("nonce",g),document.head.appendChild(R),E)return new Promise((z,W)=>{R.addEventListener("load",z),R.addEventListener("error",()=>W(new Error(`Unable to preload CSS for ${y}`)))})}))}function l(h){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=h,window.dispatchEvent(f),!f.defaultPrevented)throw h}return o.then(h=>{for(const f of h||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})},ZT=()=>{};var Yg={};/**
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
 */const Q_=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},eI=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},Y_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,y=g?r[o+2]:0,E=l>>2,w=(l&3)<<4|f>>4;let R=(f&15)<<2|y>>6,z=y&63;g||(z=64,h||(R=64)),i.push(t[E],t[w],t[R],t[z])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Q_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):eI(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const y=o<r.length?t[r.charAt(o)]:64;++o;const w=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||y==null||w==null)throw new tI;const R=l<<2|f>>4;if(i.push(R),y!==64){const z=f<<4&240|y>>2;if(i.push(z),w!==64){const W=y<<6&192|w;i.push(W)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class tI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nI=function(r){const e=Q_(r);return Y_.encodeByteArray(e,!0)},lc=function(r){return nI(r).replace(/\./g,"")},J_=function(r){try{return Y_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iI=()=>rI().__FIREBASE_DEFAULTS__,sI=()=>{if(typeof process>"u"||typeof Yg>"u")return;const r=Yg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},oI=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&J_(r[1]);return e&&JSON.parse(e)},kc=()=>{try{return ZT()||iI()||sI()||oI()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},X_=r=>{var e,t;return(t=(e=kc())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},Z_=r=>{const e=X_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},ev=()=>{var r;return(r=kc())==null?void 0:r.config},tv=r=>{var e;return(e=kc())==null?void 0:e[`_${r}`]};/**
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
 */class aI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function nv(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...r};return[lc(JSON.stringify(t)),lc(JSON.stringify(h)),""].join(".")}/**
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
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function uI(){var e;const r=(e=kc())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hI(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function dI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fI(){const r=Bt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function pI(){return!uI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mI(){try{return typeof indexedDB=="object"}catch{return!1}}function gI(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const yI="FirebaseError";class gr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=yI,Object.setPrototypeOf(this,gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yl.prototype.create)}}class yl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?_I(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new gr(o,f,i)}}function _I(r,e){return r.replace(vI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const vI=/\{\$([^}]+)}/g;function EI(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Es(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=r[o],h=e[o];if(Jg(l)&&Jg(h)){if(!Es(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Jg(r){return r!==null&&typeof r=="object"}/**
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
 */function _l(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ka(r){const e={};return r.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ga(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function wI(r,e){const t=new TI(r,e);return t.subscribe.bind(t)}class TI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");II(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Dd),o.error===void 0&&(o.error=Dd),o.complete===void 0&&(o.complete=Dd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function II(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Dd(){}/**
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
 */function ut(r){return r&&r._delegate?r._delegate:r}/**
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
 */function Bo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Df(r){return(await fetch(r,{credentials:"include"})).ok}class Vi{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ys="[DEFAULT]";/**
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
 */class SI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new aI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RI(e))try{this.getOrInitializeService({instanceIdentifier:ys})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ys){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ys){return this.instances.has(e)}getOptions(e=ys){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:AI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ys){return this.component?this.component.multipleInstances?e:ys:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AI(r){return r===ys?void 0:r}function RI(r){return r.instantiationMode==="EAGER"}/**
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
 */class CI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new SI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ne||(Ne={}));const PI={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},kI=Ne.INFO,NI={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},xI=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=NI[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vf{constructor(e){this.name=e,this._logLevel=kI,this._logHandler=xI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const DI=(r,e)=>e.some(t=>r instanceof t);let Xg,Zg;function VI(){return Xg||(Xg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OI(){return Zg||(Zg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rv=new WeakMap,Jd=new WeakMap,iv=new WeakMap,Vd=new WeakMap,Of=new WeakMap;function LI(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(Pi(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&rv.set(t,r)}).catch(()=>{}),Of.set(e,r),e}function bI(r){if(Jd.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Jd.set(r,e)}let Xd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Jd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||iv.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function MI(r){Xd=r(Xd)}function FI(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(Od(this),e,...t);return iv.set(i,e.sort?e.sort():[e]),Pi(i)}:OI().includes(r)?function(...e){return r.apply(Od(this),e),Pi(rv.get(this))}:function(...e){return Pi(r.apply(Od(this),e))}}function UI(r){return typeof r=="function"?FI(r):(r instanceof IDBTransaction&&bI(r),DI(r,VI())?new Proxy(r,Xd):r)}function Pi(r){if(r instanceof IDBRequest)return LI(r);if(Vd.has(r))return Vd.get(r);const e=UI(r);return e!==r&&(Vd.set(r,e),Of.set(e,r)),e}const Od=r=>Of.get(r);function jI(r,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=Pi(h);return i&&h.addEventListener("upgradeneeded",g=>{i(Pi(h.result),g.oldVersion,g.newVersion,Pi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const zI=["get","getKey","getAll","getAllKeys","count"],BI=["put","add","delete","clear"],Ld=new Map;function ey(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ld.get(e))return Ld.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=BI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||zI.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let y=g.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&g.done]))[0]};return Ld.set(e,l),l}MI(r=>({...r,get:(e,t,i)=>ey(e,t)||r.get(e,t,i),has:(e,t)=>!!ey(e,t)||r.has(e,t)}));/**
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
 */class $I{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(WI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function WI(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zd="@firebase/app",ty="0.14.10";/**
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
 */const Ur=new Vf("@firebase/app"),HI="@firebase/app-compat",qI="@firebase/analytics-compat",KI="@firebase/analytics",GI="@firebase/app-check-compat",QI="@firebase/app-check",YI="@firebase/auth",JI="@firebase/auth-compat",XI="@firebase/database",ZI="@firebase/data-connect",eS="@firebase/database-compat",tS="@firebase/functions",nS="@firebase/functions-compat",rS="@firebase/installations",iS="@firebase/installations-compat",sS="@firebase/messaging",oS="@firebase/messaging-compat",aS="@firebase/performance",lS="@firebase/performance-compat",uS="@firebase/remote-config",cS="@firebase/remote-config-compat",hS="@firebase/storage",dS="@firebase/storage-compat",fS="@firebase/firestore",pS="@firebase/ai",mS="@firebase/firestore-compat",gS="firebase",yS="12.11.0";/**
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
 */const ef="[DEFAULT]",_S={[Zd]:"fire-core",[HI]:"fire-core-compat",[KI]:"fire-analytics",[qI]:"fire-analytics-compat",[QI]:"fire-app-check",[GI]:"fire-app-check-compat",[YI]:"fire-auth",[JI]:"fire-auth-compat",[XI]:"fire-rtdb",[ZI]:"fire-data-connect",[eS]:"fire-rtdb-compat",[tS]:"fire-fn",[nS]:"fire-fn-compat",[rS]:"fire-iid",[iS]:"fire-iid-compat",[sS]:"fire-fcm",[oS]:"fire-fcm-compat",[aS]:"fire-perf",[lS]:"fire-perf-compat",[uS]:"fire-rc",[cS]:"fire-rc-compat",[hS]:"fire-gcs",[dS]:"fire-gcs-compat",[fS]:"fire-fst",[mS]:"fire-fst-compat",[pS]:"fire-vertex","fire-js":"fire-js",[gS]:"fire-js-all"};/**
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
 */const uc=new Map,vS=new Map,tf=new Map;function ny(r,e){try{r.container.addComponent(e)}catch(t){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function ws(r){const e=r.name;if(tf.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;tf.set(e,r);for(const t of uc.values())ny(t,r);for(const t of vS.values())ny(t,r);return!0}function Nc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function In(r){return r==null?!1:r.settings!==void 0}/**
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
 */const ES={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ki=new yl("app","Firebase",ES);/**
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
 */class wS{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ki.create("app-deleted",{appName:this._name})}}/**
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
 */const Ps=yS;function sv(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i={name:ef,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw ki.create("bad-app-name",{appName:String(o)});if(t||(t=ev()),!t)throw ki.create("no-options");const l=uc.get(o);if(l){if(Es(t,l.options)&&Es(i,l.config))return l;throw ki.create("duplicate-app",{appName:o})}const h=new CI(o);for(const g of tf.values())h.addComponent(g);const f=new wS(t,i,h);return uc.set(o,f),f}function Lf(r=ef){const e=uc.get(r);if(!e&&r===ef&&ev())return sv();if(!e)throw ki.create("no-app",{appName:r});return e}function or(r,e,t){let i=_S[r]??r;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(h.join(" "));return}ws(new Vi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const TS="firebase-heartbeat-database",IS=1,ol="firebase-heartbeat-store";let bd=null;function ov(){return bd||(bd=jI(TS,IS,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ol)}catch(t){console.warn(t)}}}}).catch(r=>{throw ki.create("idb-open",{originalErrorMessage:r.message})})),bd}async function SS(r){try{const t=(await ov()).transaction(ol),i=await t.objectStore(ol).get(av(r));return await t.done,i}catch(e){if(e instanceof gr)Ur.warn(e.message);else{const t=ki.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ur.warn(t.message)}}}async function ry(r,e){try{const i=(await ov()).transaction(ol,"readwrite");await i.objectStore(ol).put(e,av(r)),await i.done}catch(t){if(t instanceof gr)Ur.warn(t.message);else{const i=ki.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ur.warn(i.message)}}}function av(r){return`${r.name}!${r.options.appId}`}/**
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
 */const AS=1024,RS=30;class CS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new kS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=iy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>RS){const h=NS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Ur.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=iy(),{heartbeatsToSend:i,unsentEntries:o}=PS(this._heartbeatsCache.heartbeats),l=lc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ur.warn(t),""}}}function iy(){return new Date().toISOString().substring(0,10)}function PS(r,e=AS){const t=[];let i=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),sy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),sy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class kS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mI()?gI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await SS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return ry(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return ry(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sy(r){return lc(JSON.stringify({version:2,heartbeats:r})).length}function NS(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
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
 */function xS(r){ws(new Vi("platform-logger",e=>new $I(e),"PRIVATE")),ws(new Vi("heartbeat",e=>new CS(e),"PRIVATE")),or(Zd,ty,r),or(Zd,ty,"esm2020"),or("fire-js","")}xS("");function lv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DS=lv,uv=new yl("auth","Firebase",lv());/**
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
 */const cc=new Vf("@firebase/auth");function VS(r,...e){cc.logLevel<=Ne.WARN&&cc.warn(`Auth (${Ps}): ${r}`,...e)}function Ju(r,...e){cc.logLevel<=Ne.ERROR&&cc.error(`Auth (${Ps}): ${r}`,...e)}/**
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
 */function Un(r,...e){throw bf(r,...e)}function ar(r,...e){return bf(r,...e)}function cv(r,e,t){const i={...DS(),[e]:t};return new yl("auth","Firebase",i).create(e,{appName:r.name})}function Ni(r){return cv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bf(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return uv.create(r,...e)}function ye(r,e,...t){if(!r)throw bf(e,...t)}function br(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ju(e),new Error(e)}function jr(r,e){r||br(e)}/**
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
 */function nf(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function OS(){return oy()==="http:"||oy()==="https:"}function oy(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function LS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OS()||hI()||"connection"in navigator)?navigator.onLine:!0}function bS(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class vl{constructor(e,t){this.shortDelay=e,this.longDelay=t,jr(t>e,"Short delay should be less than long delay!"),this.isMobile=lI()||dI()}get(){return LS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mf(r,e){jr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class hv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const MS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const FS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],US=new vl(3e4,6e4);function ks(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function zi(r,e,t,i,o={}){return dv(r,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=_l({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:g,...l};return cI()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&Bo(r.emulatorConfig.host)&&(y.credentials="include"),hv.fetch()(await fv(r,r.config.apiHost,t,f),y)})}async function dv(r,e,t){r._canInitEmulator=!1;const i={...MS,...e};try{const o=new zS(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Wu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,y]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Wu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Wu(r,"user-disabled",h);const E=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw cv(r,E,y);Un(r,E)}}catch(o){if(o instanceof gr)throw o;Un(r,"network-request-failed",{message:String(o)})}}async function xc(r,e,t,i,o={}){const l=await zi(r,e,t,i,o);return"mfaPendingCredential"in l&&Un(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function fv(r,e,t,i){const o=`${e}${t}?${i}`,l=r,h=l.config.emulator?Mf(r.config,o):`${r.config.apiScheme}://${o}`;return FS.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function jS(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ar(this.auth,"network-request-failed")),US.get())})}}function Wu(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=ar(r,e,i);return o.customData._tokenResponse=t,o}function ay(r){return r!==void 0&&r.enterprise!==void 0}class BS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return jS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function $S(r,e){return zi(r,"GET","/v2/recaptchaConfig",ks(r,e))}/**
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
 */async function WS(r,e){return zi(r,"POST","/v1/accounts:delete",e)}async function hc(r,e){return zi(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Za(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HS(r,e=!1){const t=ut(r),i=await t.getIdToken(e),o=Ff(i);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Za(Md(o.auth_time)),issuedAtTime:Za(Md(o.iat)),expirationTime:Za(Md(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Md(r){return Number(r)*1e3}function Ff(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return Ju("JWT malformed, contained fewer than 3 sections"),null;try{const o=J_(t);return o?JSON.parse(o):(Ju("Failed to decode base64 JWT payload"),null)}catch(o){return Ju("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ly(r){const e=Ff(r);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function al(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof gr&&qS(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function qS({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class KS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Za(this.lastLoginAt),this.creationTime=Za(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function dc(r){var w;const e=r.auth,t=await r.getIdToken(),i=await al(r,hc(e,{idToken:t}));ye(i==null?void 0:i.users.length,e,"internal-error");const o=i.users[0];r._notifyReloadListener(o);const l=(w=o.providerUserInfo)!=null&&w.length?pv(o.providerUserInfo):[],h=QS(r.providerData,l),f=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),y=f?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new rf(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(r,E)}async function GS(r){const e=ut(r);await dc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QS(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function pv(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function YS(r,e){const t=await dv(r,{},async()=>{const i=_l({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await fv(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return r.emulatorConfig&&Bo(r.emulatorConfig.host)&&(g.credentials="include"),hv.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function JS(r,e){return zi(r,"POST","/v2/accounts:revokeToken",ks(r,e))}/**
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
 */class Po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ly(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=ly(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await YS(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Po;return i&&(ye(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ye(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Po,this.toJSON())}_performRefresh(){return br("not implemented")}}/**
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
 */function Ei(r,e){ye(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class bn{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new KS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new rf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await al(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return HS(this,e)}reload(){return GS(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await dc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(In(this.auth.app))return Promise.reject(Ni(this.auth));const e=await this.getIdToken();return await al(this,WS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,f=t.tenantId??void 0,g=t._redirectEventId??void 0,y=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:w,emailVerified:R,isAnonymous:z,providerData:W,stsTokenManager:H}=t;ye(w&&H,e,"internal-error");const U=Po.fromJSON(this.name,H);ye(typeof w=="string",e,"internal-error"),Ei(i,e.name),Ei(o,e.name),ye(typeof R=="boolean",e,"internal-error"),ye(typeof z=="boolean",e,"internal-error"),Ei(l,e.name),Ei(h,e.name),Ei(f,e.name),Ei(g,e.name),Ei(y,e.name),Ei(E,e.name);const re=new bn({uid:w,auth:e,email:o,emailVerified:R,displayName:i,isAnonymous:z,photoURL:h,phoneNumber:l,tenantId:f,stsTokenManager:U,createdAt:y,lastLoginAt:E});return W&&Array.isArray(W)&&(re.providerData=W.map(he=>({...he}))),g&&(re._redirectEventId=g),re}static async _fromIdTokenResponse(e,t,i=!1){const o=new Po;o.updateFromServerResponse(t);const l=new bn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await dc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?pv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Po;f.updateFromIdToken(i);const g=new bn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new rf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,y),g}}/**
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
 */const uy=new Map;function Mr(r){jr(r instanceof Function,"Expected a class definition");let e=uy.get(r);return e?(jr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,uy.set(r,e),e)}/**
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
 */class mv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}mv.type="NONE";const cy=mv;/**
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
 */function Xu(r,e,t){return`firebase:${r}:${e}:${t}`}class ko{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Xu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Xu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await hc(this.auth,{idToken:e}).catch(()=>{});return t?bn._fromGetAccountInfoResponse(this.auth,t,e):null}return bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ko(Mr(cy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Mr(cy);const h=Xu(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const E=await y._get(h);if(E){let w;if(typeof E=="string"){const R=await hc(e,{idToken:E}).catch(()=>{});if(!R)break;w=await bn._fromGetAccountInfoResponse(e,R,E)}else w=bn._fromJSON(e,E);y!==l&&(f=w),l=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new ko(l,e,i):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new ko(l,e,i))}}/**
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
 */function hy(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wv(e))return"Blackberry";if(Tv(e))return"Webos";if(yv(e))return"Safari";if((e.includes("chrome/")||_v(e))&&!e.includes("edge/"))return"Chrome";if(Ev(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function gv(r=Bt()){return/firefox\//i.test(r)}function yv(r=Bt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _v(r=Bt()){return/crios\//i.test(r)}function vv(r=Bt()){return/iemobile/i.test(r)}function Ev(r=Bt()){return/android/i.test(r)}function wv(r=Bt()){return/blackberry/i.test(r)}function Tv(r=Bt()){return/webos/i.test(r)}function Uf(r=Bt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function XS(r=Bt()){var e;return Uf(r)&&!!((e=window.navigator)!=null&&e.standalone)}function ZS(){return fI()&&document.documentMode===10}function Iv(r=Bt()){return Uf(r)||Ev(r)||Tv(r)||wv(r)||/windows phone/i.test(r)||vv(r)}/**
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
 */function Sv(r,e=[]){let t;switch(r){case"Browser":t=hy(Bt());break;case"Worker":t=`${hy(Bt())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ps}/${i}`}/**
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
 */class eA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function tA(r,e={}){return zi(r,"GET","/v2/passwordPolicy",ks(r,e))}/**
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
 */const nA=6;class rA{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??nA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class iA{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dy(this),this.idTokenSubscription=new dy(this),this.beforeStateQueue=new eA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await ko.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await hc(this,{idToken:e}),i=await bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(In(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=i==null?void 0:i._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(i=g.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(h){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await dc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(In(this.app))return Promise.reject(Ni(this));const t=e?ut(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return In(this.app)?Promise.reject(Ni(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return In(this.app)?Promise.reject(Ni(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tA(this),t=new rA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await JS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await ko.create(this,[Mr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(In(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&VS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function $o(r){return ut(r)}class dy{constructor(e){this.auth=e,this.observer=null,this.addObserver=wI(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sA(r){Dc=r}function Av(r){return Dc.loadJS(r)}function oA(){return Dc.recaptchaEnterpriseScript}function aA(){return Dc.gapiScript}function lA(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class uA{constructor(){this.enterprise=new cA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class cA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const hA="recaptcha-enterprise",Rv="NO_RECAPTCHA";class dA{constructor(e){this.type=hA,this.auth=$o(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{$S(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new BS(g);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;ay(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(Rv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new uA().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&ay(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=oA();g.length!==0&&(g+=f),Av(g).then(()=>{o(f,l,h)}).catch(y=>{h(y)})}}).catch(f=>{h(f)})})}}async function fy(r,e,t,i=!1,o=!1){const l=new dA(r);let h;if(o)h=Rv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function py(r,e,t,i,o){var l;if((l=r._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await fy(r,e,t,t==="getOobCode");return i(r,h)}else return i(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await fy(r,e,t,t==="getOobCode");return i(r,f)}else return Promise.reject(h)})}/**
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
 */function fA(r,e){const t=Nc(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Es(l,e??{}))return o;Un(o,"already-initialized")}return t.initialize({options:e})}function pA(r,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Mr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function mA(r,e,t){const i=$o(r);ye(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Cv(e),{host:h,port:f}=gA(e),g=f===null?"":`:${f}`,y={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ye(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ye(Es(y,i.config.emulator)&&Es(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,Bo(h)?Df(`${l}//${h}${g}`):yA()}function Cv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function gA(r){const e=Cv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:my(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:my(h)}}}function my(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function yA(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class jf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return br("not implemented")}_getIdTokenResponse(e){return br("not implemented")}_linkToIdToken(e,t){return br("not implemented")}_getReauthenticationResolver(e){return br("not implemented")}}async function _A(r,e){return zi(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function vA(r,e){return xc(r,"POST","/v1/accounts:signInWithPassword",ks(r,e))}/**
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
 */async function EA(r,e){return xc(r,"POST","/v1/accounts:signInWithEmailLink",ks(r,e))}async function wA(r,e){return xc(r,"POST","/v1/accounts:signInWithEmailLink",ks(r,e))}/**
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
 */class ll extends jf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ll(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new ll(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return py(e,t,"signInWithPassword",vA);case"emailLink":return EA(e,{email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return py(e,i,"signUpPassword",_A);case"emailLink":return wA(e,{idToken:t,email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function No(r,e){return xc(r,"POST","/v1/accounts:signInWithIdp",ks(r,e))}/**
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
 */const TA="http://localhost";class Ts extends jf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Un("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const h=new Ts(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return No(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,No(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,No(e,t)}buildRequest(){const e={requestUri:TA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_l(t)}return e}}/**
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
 */function IA(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SA(r){const e=Ka(Ga(r)).link,t=e?Ka(Ga(e)).deep_link_id:null,i=Ka(Ga(r)).deep_link_id;return(i?Ka(Ga(i)).link:null)||i||t||e||r}class zf{constructor(e){const t=Ka(Ga(e)),i=t.apiKey??null,o=t.oobCode??null,l=IA(t.mode??null);ye(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=SA(e);try{return new zf(t)}catch{return null}}}/**
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
 */class Wo{constructor(){this.providerId=Wo.PROVIDER_ID}static credential(e,t){return ll._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=zf.parseLink(t);return ye(i,"argument-error"),ll._fromEmailAndCode(e,i.code,i.tenantId)}}Wo.PROVIDER_ID="password";Wo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Pv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class El extends Pv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wi extends El{constructor(){super("facebook.com")}static credential(e){return Ts._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wi.credential(e.oauthAccessToken)}catch{return null}}}wi.FACEBOOK_SIGN_IN_METHOD="facebook.com";wi.PROVIDER_ID="facebook.com";/**
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
 */class Ti extends El{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ts._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ti.credential(t,i)}catch{return null}}}Ti.GOOGLE_SIGN_IN_METHOD="google.com";Ti.PROVIDER_ID="google.com";/**
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
 */class Ii extends El{constructor(){super("github.com")}static credential(e){return Ts._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.GITHUB_SIGN_IN_METHOD="github.com";Ii.PROVIDER_ID="github.com";/**
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
 */class Si extends El{constructor(){super("twitter.com")}static credential(e,t){return Ts._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Si.credential(t,i)}catch{return null}}}Si.TWITTER_SIGN_IN_METHOD="twitter.com";Si.PROVIDER_ID="twitter.com";/**
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
 */class Oo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await bn._fromIdTokenResponse(e,i,o),h=gy(i);return new Oo({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=gy(i);return new Oo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function gy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class fc extends gr{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,fc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new fc(e,t,i,o)}}function kv(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?fc._fromErrorAndOperation(r,l,e,i):l})}async function AA(r,e,t=!1){const i=await al(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Oo._forOperation(r,"link",i)}/**
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
 */async function RA(r,e,t=!1){const{auth:i}=r;if(In(i.app))return Promise.reject(Ni(i));const o="reauthenticate";try{const l=await al(r,kv(i,o,e,r),t);ye(l.idToken,i,"internal-error");const h=Ff(l.idToken);ye(h,i,"internal-error");const{sub:f}=h;return ye(r.uid===f,i,"user-mismatch"),Oo._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Un(i,"user-mismatch"),l}}/**
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
 */async function Nv(r,e,t=!1){if(In(r.app))return Promise.reject(Ni(r));const i="signIn",o=await kv(r,i,e),l=await Oo._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(l.user),l}async function CA(r,e){return Nv($o(r),e)}/**
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
 */async function PA(r){const e=$o(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function kA(r,e,t){return In(r.app)?Promise.reject(Ni(r)):CA(ut(r),Wo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&PA(r),i})}function NA(r,e,t,i){return ut(r).onIdTokenChanged(e,t,i)}function xA(r,e,t){return ut(r).beforeAuthStateChanged(e,t)}function DA(r,e,t,i){return ut(r).onAuthStateChanged(e,t,i)}function VA(r){return ut(r).signOut()}const pc="__sak";/**
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
 */class xv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pc,"1"),this.storage.removeItem(pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const OA=1e3,LA=10;class Dv extends xv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Iv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);ZS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,LA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},OA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dv.type="LOCAL";const bA=Dv;/**
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
 */class Vv extends xv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Vv.type="SESSION";const Ov=Vv;/**
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
 */function MA(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Vc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),g=await MA(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vc.receivers=[];/**
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
 */function Bf(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class FA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const y=Bf("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(w){const R=w;if(R.data.eventId===y)switch(R.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(R.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function lr(){return window}function UA(r){lr().location.href=r}/**
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
 */function Lv(){return typeof lr().WorkerGlobalScope<"u"&&typeof lr().importScripts=="function"}async function jA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zA(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function BA(){return Lv()?self:null}/**
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
 */const bv="firebaseLocalStorageDb",$A=1,mc="firebaseLocalStorage",Mv="fbase_key";class wl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Oc(r,e){return r.transaction([mc],e?"readwrite":"readonly").objectStore(mc)}function WA(){const r=indexedDB.deleteDatabase(bv);return new wl(r).toPromise()}function sf(){const r=indexedDB.open(bv,$A);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(mc,{keyPath:Mv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(mc)?e(i):(i.close(),await WA(),e(await sf()))})})}async function yy(r,e,t){const i=Oc(r,!0).put({[Mv]:e,value:t});return new wl(i).toPromise()}async function HA(r,e){const t=Oc(r,!1).get(e),i=await new wl(t).toPromise();return i===void 0?null:i.value}function _y(r,e){const t=Oc(r,!0).delete(e);return new wl(t).toPromise()}const qA=800,KA=3;class Fv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>KA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vc._getInstance(BA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await jA(),!this.activeServiceWorker)return;this.sender=new FA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sf();return await yy(e,pc,"1"),await _y(e,pc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>yy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>HA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_y(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Oc(o,!1).getAll();return new wl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fv.type="LOCAL";const GA=Fv;new vl(3e4,6e4);/**
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
 */function QA(r,e){return e?Mr(e):(ye(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class $f extends jf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return No(e,this._buildIdpRequest())}_linkToIdToken(e,t){return No(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return No(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function YA(r){return Nv(r.auth,new $f(r),r.bypassAuthState)}function JA(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),RA(t,new $f(r),r.bypassAuthState)}async function XA(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),AA(t,new $f(r),r.bypassAuthState)}/**
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
 */class Uv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YA;case"linkViaPopup":case"linkViaRedirect":return XA;case"reauthViaPopup":case"reauthViaRedirect":return JA;default:Un(this.auth,"internal-error")}}resolve(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ZA=new vl(2e3,1e4);class Co extends Uv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Co.currentPopupAction&&Co.currentPopupAction.cancel(),Co.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){jr(this.filter.length===1,"Popup operations only handle one event");const e=Bf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ar(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ar(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Co.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ar(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZA.get())};e()}}Co.currentPopupAction=null;/**
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
 */const eR="pendingRedirect",Zu=new Map;class tR extends Uv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Zu.get(this.auth._key());if(!e){try{const i=await nR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Zu.set(this.auth._key(),e)}return this.bypassAuthState||Zu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nR(r,e){const t=sR(e),i=iR(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function rR(r,e){Zu.set(r._key(),e)}function iR(r){return Mr(r._redirectPersistence)}function sR(r){return Xu(eR,r.config.apiKey,r.name)}async function oR(r,e,t=!1){if(In(r.app))return Promise.reject(Ni(r));const i=$o(r),o=QA(i,e),h=await new tR(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const aR=600*1e3;class lR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!jv(e)){const o=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(ar(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aR&&this.cachedEventUids.clear(),this.cachedEventUids.has(vy(e))}saveEventToCache(e){this.cachedEventUids.add(vy(e)),this.lastProcessedEventTime=Date.now()}}function vy(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function jv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jv(r);default:return!1}}/**
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
 */async function cR(r,e={}){return zi(r,"GET","/v1/projects",e)}/**
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
 */const hR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dR=/^https?/;async function fR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await cR(r);for(const t of e)try{if(pR(t))return}catch{}Un(r,"unauthorized-domain")}function pR(r){const e=nf(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!dR.test(t))return!1;if(hR.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const mR=new vl(3e4,6e4);function Ey(){const r=lr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function gR(r){return new Promise((e,t)=>{var o,l,h;function i(){Ey(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ey(),t(ar(r,"network-request-failed"))},timeout:mR.get()})}if((l=(o=lr().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((h=lr().gapi)!=null&&h.load)i();else{const f=lA("iframefcb");return lr()[f]=()=>{gapi.load?i():t(ar(r,"network-request-failed"))},Av(`${aA()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw ec=null,e})}let ec=null;function yR(r){return ec=ec||gR(r),ec}/**
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
 */const _R=new vl(5e3,15e3),vR="__/auth/iframe",ER="emulator/auth/iframe",wR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IR(r){const e=r.config;ye(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Mf(e,ER):`https://${r.config.authDomain}/${vR}`,i={apiKey:e.apiKey,appName:r.name,v:Ps},o=TR.get(r.config.apiHost);o&&(i.eid=o);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${_l(i).slice(1)}`}async function SR(r){const e=await yR(r),t=lr().gapi;return ye(t,r,"internal-error"),e.open({where:document.body,url:IR(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wR,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=ar(r,"network-request-failed"),f=lr().setTimeout(()=>{l(h)},_R.get());function g(){lr().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const AR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RR=500,CR=600,PR="_blank",kR="http://localhost";class wy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NR(r,e,t,i=RR,o=CR){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g={...AR,width:i.toString(),height:o.toString(),top:l,left:h},y=Bt().toLowerCase();t&&(f=_v(y)?PR:t),gv(y)&&(e=e||kR,g.scrollbars="yes");const E=Object.entries(g).reduce((R,[z,W])=>`${R}${z}=${W},`,"");if(XS(y)&&f!=="_self")return xR(e||"",f),new wy(null);const w=window.open(e||"",f,E);ye(w,r,"popup-blocked");try{w.focus()}catch{}return new wy(w)}function xR(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const DR="__/auth/handler",VR="emulator/auth/handler",OR=encodeURIComponent("fac");async function Ty(r,e,t,i,o,l){ye(r.config.authDomain,r,"auth-domain-config-required"),ye(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:Ps,eventId:o};if(e instanceof Pv){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",EI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,w]of Object.entries({}))h[E]=w}if(e instanceof El){const E=e.getScopes().filter(w=>w!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const g=await r._getAppCheckToken(),y=g?`#${OR}=${encodeURIComponent(g)}`:"";return`${LR(r)}?${_l(f).slice(1)}${y}`}function LR({config:r}){return r.emulator?Mf(r,VR):`https://${r.authDomain}/${DR}`}/**
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
 */const Fd="webStorageSupport";class bR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ov,this._completeRedirectFn=oR,this._overrideRedirectResult=rR}async _openPopup(e,t,i,o){var h;jr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const l=await Ty(e,t,i,nf(),o);return NR(e,l,Bf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Ty(e,t,i,nf(),o);return UA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(jr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await SR(e),i=new lR(e);return t.register("authEvent",o=>(ye(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fd,{type:Fd},o=>{var h;const l=(h=o==null?void 0:o[0])==null?void 0:h[Fd];l!==void 0&&t(!!l),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Iv()||yv()||Uf()}}const MR=bR;var Iy="@firebase/auth",Sy="1.12.2";/**
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
 */class FR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function UR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jR(r){ws(new Vi("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sv(r)},y=new iA(i,o,l,g);return pA(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ws(new Vi("auth-internal",e=>{const t=$o(e.getProvider("auth").getImmediate());return(i=>new FR(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(Iy,Sy,UR(r)),or(Iy,Sy,"esm2020")}/**
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
 */const zR=300,BR=tv("authIdTokenMaxAge")||zR;let Ay=null;const $R=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>BR)return;const o=t==null?void 0:t.token;Ay!==o&&(Ay=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function WR(r=Lf()){const e=Nc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=fA(r,{popupRedirectResolver:MR,persistence:[GA,bA,Ov]}),i=tv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=$R(l.toString());xA(t,h,()=>h(t.currentUser)),NA(t,f=>h(f))}}const o=X_("auth");return o&&mA(t,`http://${o}`),t}function HR(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}sA({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const l=ar("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",HR().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jR("Browser");var qR="firebase",KR="12.11.0";/**
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
 */or(qR,KR,"app");var Ry=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xi,zv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,S){function C(){}C.prototype=S.prototype,k.F=S.prototype,k.prototype=new C,k.prototype.constructor=k,k.D=function(D,N,O){for(var A=Array(arguments.length-2),We=2;We<arguments.length;We++)A[We-2]=arguments[We];return S.prototype[N].apply(D,A)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,S,C){C||(C=0);const D=Array(16);if(typeof S=="string")for(var N=0;N<16;++N)D[N]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(N=0;N<16;++N)D[N]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=k.g[0],C=k.g[1],N=k.g[2];let O=k.g[3],A;A=S+(O^C&(N^O))+D[0]+3614090360&4294967295,S=C+(A<<7&4294967295|A>>>25),A=O+(N^S&(C^N))+D[1]+3905402710&4294967295,O=S+(A<<12&4294967295|A>>>20),A=N+(C^O&(S^C))+D[2]+606105819&4294967295,N=O+(A<<17&4294967295|A>>>15),A=C+(S^N&(O^S))+D[3]+3250441966&4294967295,C=N+(A<<22&4294967295|A>>>10),A=S+(O^C&(N^O))+D[4]+4118548399&4294967295,S=C+(A<<7&4294967295|A>>>25),A=O+(N^S&(C^N))+D[5]+1200080426&4294967295,O=S+(A<<12&4294967295|A>>>20),A=N+(C^O&(S^C))+D[6]+2821735955&4294967295,N=O+(A<<17&4294967295|A>>>15),A=C+(S^N&(O^S))+D[7]+4249261313&4294967295,C=N+(A<<22&4294967295|A>>>10),A=S+(O^C&(N^O))+D[8]+1770035416&4294967295,S=C+(A<<7&4294967295|A>>>25),A=O+(N^S&(C^N))+D[9]+2336552879&4294967295,O=S+(A<<12&4294967295|A>>>20),A=N+(C^O&(S^C))+D[10]+4294925233&4294967295,N=O+(A<<17&4294967295|A>>>15),A=C+(S^N&(O^S))+D[11]+2304563134&4294967295,C=N+(A<<22&4294967295|A>>>10),A=S+(O^C&(N^O))+D[12]+1804603682&4294967295,S=C+(A<<7&4294967295|A>>>25),A=O+(N^S&(C^N))+D[13]+4254626195&4294967295,O=S+(A<<12&4294967295|A>>>20),A=N+(C^O&(S^C))+D[14]+2792965006&4294967295,N=O+(A<<17&4294967295|A>>>15),A=C+(S^N&(O^S))+D[15]+1236535329&4294967295,C=N+(A<<22&4294967295|A>>>10),A=S+(N^O&(C^N))+D[1]+4129170786&4294967295,S=C+(A<<5&4294967295|A>>>27),A=O+(C^N&(S^C))+D[6]+3225465664&4294967295,O=S+(A<<9&4294967295|A>>>23),A=N+(S^C&(O^S))+D[11]+643717713&4294967295,N=O+(A<<14&4294967295|A>>>18),A=C+(O^S&(N^O))+D[0]+3921069994&4294967295,C=N+(A<<20&4294967295|A>>>12),A=S+(N^O&(C^N))+D[5]+3593408605&4294967295,S=C+(A<<5&4294967295|A>>>27),A=O+(C^N&(S^C))+D[10]+38016083&4294967295,O=S+(A<<9&4294967295|A>>>23),A=N+(S^C&(O^S))+D[15]+3634488961&4294967295,N=O+(A<<14&4294967295|A>>>18),A=C+(O^S&(N^O))+D[4]+3889429448&4294967295,C=N+(A<<20&4294967295|A>>>12),A=S+(N^O&(C^N))+D[9]+568446438&4294967295,S=C+(A<<5&4294967295|A>>>27),A=O+(C^N&(S^C))+D[14]+3275163606&4294967295,O=S+(A<<9&4294967295|A>>>23),A=N+(S^C&(O^S))+D[3]+4107603335&4294967295,N=O+(A<<14&4294967295|A>>>18),A=C+(O^S&(N^O))+D[8]+1163531501&4294967295,C=N+(A<<20&4294967295|A>>>12),A=S+(N^O&(C^N))+D[13]+2850285829&4294967295,S=C+(A<<5&4294967295|A>>>27),A=O+(C^N&(S^C))+D[2]+4243563512&4294967295,O=S+(A<<9&4294967295|A>>>23),A=N+(S^C&(O^S))+D[7]+1735328473&4294967295,N=O+(A<<14&4294967295|A>>>18),A=C+(O^S&(N^O))+D[12]+2368359562&4294967295,C=N+(A<<20&4294967295|A>>>12),A=S+(C^N^O)+D[5]+4294588738&4294967295,S=C+(A<<4&4294967295|A>>>28),A=O+(S^C^N)+D[8]+2272392833&4294967295,O=S+(A<<11&4294967295|A>>>21),A=N+(O^S^C)+D[11]+1839030562&4294967295,N=O+(A<<16&4294967295|A>>>16),A=C+(N^O^S)+D[14]+4259657740&4294967295,C=N+(A<<23&4294967295|A>>>9),A=S+(C^N^O)+D[1]+2763975236&4294967295,S=C+(A<<4&4294967295|A>>>28),A=O+(S^C^N)+D[4]+1272893353&4294967295,O=S+(A<<11&4294967295|A>>>21),A=N+(O^S^C)+D[7]+4139469664&4294967295,N=O+(A<<16&4294967295|A>>>16),A=C+(N^O^S)+D[10]+3200236656&4294967295,C=N+(A<<23&4294967295|A>>>9),A=S+(C^N^O)+D[13]+681279174&4294967295,S=C+(A<<4&4294967295|A>>>28),A=O+(S^C^N)+D[0]+3936430074&4294967295,O=S+(A<<11&4294967295|A>>>21),A=N+(O^S^C)+D[3]+3572445317&4294967295,N=O+(A<<16&4294967295|A>>>16),A=C+(N^O^S)+D[6]+76029189&4294967295,C=N+(A<<23&4294967295|A>>>9),A=S+(C^N^O)+D[9]+3654602809&4294967295,S=C+(A<<4&4294967295|A>>>28),A=O+(S^C^N)+D[12]+3873151461&4294967295,O=S+(A<<11&4294967295|A>>>21),A=N+(O^S^C)+D[15]+530742520&4294967295,N=O+(A<<16&4294967295|A>>>16),A=C+(N^O^S)+D[2]+3299628645&4294967295,C=N+(A<<23&4294967295|A>>>9),A=S+(N^(C|~O))+D[0]+4096336452&4294967295,S=C+(A<<6&4294967295|A>>>26),A=O+(C^(S|~N))+D[7]+1126891415&4294967295,O=S+(A<<10&4294967295|A>>>22),A=N+(S^(O|~C))+D[14]+2878612391&4294967295,N=O+(A<<15&4294967295|A>>>17),A=C+(O^(N|~S))+D[5]+4237533241&4294967295,C=N+(A<<21&4294967295|A>>>11),A=S+(N^(C|~O))+D[12]+1700485571&4294967295,S=C+(A<<6&4294967295|A>>>26),A=O+(C^(S|~N))+D[3]+2399980690&4294967295,O=S+(A<<10&4294967295|A>>>22),A=N+(S^(O|~C))+D[10]+4293915773&4294967295,N=O+(A<<15&4294967295|A>>>17),A=C+(O^(N|~S))+D[1]+2240044497&4294967295,C=N+(A<<21&4294967295|A>>>11),A=S+(N^(C|~O))+D[8]+1873313359&4294967295,S=C+(A<<6&4294967295|A>>>26),A=O+(C^(S|~N))+D[15]+4264355552&4294967295,O=S+(A<<10&4294967295|A>>>22),A=N+(S^(O|~C))+D[6]+2734768916&4294967295,N=O+(A<<15&4294967295|A>>>17),A=C+(O^(N|~S))+D[13]+1309151649&4294967295,C=N+(A<<21&4294967295|A>>>11),A=S+(N^(C|~O))+D[4]+4149444226&4294967295,S=C+(A<<6&4294967295|A>>>26),A=O+(C^(S|~N))+D[11]+3174756917&4294967295,O=S+(A<<10&4294967295|A>>>22),A=N+(S^(O|~C))+D[2]+718787259&4294967295,N=O+(A<<15&4294967295|A>>>17),A=C+(O^(N|~S))+D[9]+3951481745&4294967295,k.g[0]=k.g[0]+S&4294967295,k.g[1]=k.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,k.g[2]=k.g[2]+N&4294967295,k.g[3]=k.g[3]+O&4294967295}i.prototype.v=function(k,S){S===void 0&&(S=k.length);const C=S-this.blockSize,D=this.C;let N=this.h,O=0;for(;O<S;){if(N==0)for(;O<=C;)o(this,k,O),O+=this.blockSize;if(typeof k=="string"){for(;O<S;)if(D[N++]=k.charCodeAt(O++),N==this.blockSize){o(this,D),N=0;break}}else for(;O<S;)if(D[N++]=k[O++],N==this.blockSize){o(this,D),N=0;break}}this.h=N,this.o+=S},i.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var S=1;S<k.length-8;++S)k[S]=0;S=this.o*8;for(var C=k.length-8;C<k.length;++C)k[C]=S&255,S/=256;for(this.v(k),k=Array(16),S=0,C=0;C<4;++C)for(let D=0;D<32;D+=8)k[S++]=this.g[C]>>>D&255;return k};function l(k,S){var C=f;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=S(k)}function h(k,S){this.h=S;const C=[];let D=!0;for(let N=k.length-1;N>=0;N--){const O=k[N]|0;D&&O==S||(C[N]=O,D=!1)}this.g=C}var f={};function g(k){return-128<=k&&k<128?l(k,function(S){return new h([S|0],S<0?-1:0)}):new h([k|0],k<0?-1:0)}function y(k){if(isNaN(k)||!isFinite(k))return w;if(k<0)return U(y(-k));const S=[];let C=1;for(let D=0;k>=C;D++)S[D]=k/C|0,C*=4294967296;return new h(S,0)}function E(k,S){if(k.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(k.charAt(0)=="-")return U(E(k.substring(1),S));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=y(Math.pow(S,8));let D=w;for(let O=0;O<k.length;O+=8){var N=Math.min(8,k.length-O);const A=parseInt(k.substring(O,O+N),S);N<8?(N=y(Math.pow(S,N)),D=D.j(N).add(y(A))):(D=D.j(C),D=D.add(y(A)))}return D}var w=g(0),R=g(1),z=g(16777216);r=h.prototype,r.m=function(){if(H(this))return-U(this).m();let k=0,S=1;for(let C=0;C<this.g.length;C++){const D=this.i(C);k+=(D>=0?D:4294967296+D)*S,S*=4294967296}return k},r.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(W(this))return"0";if(H(this))return"-"+U(this).toString(k);const S=y(Math.pow(k,6));var C=this;let D="";for(;;){const N=ge(C,S).g;C=re(C,N.j(S));let O=((C.g.length>0?C.g[0]:C.h)>>>0).toString(k);if(C=N,W(C))return O+D;for(;O.length<6;)O="0"+O;D=O+D}},r.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function W(k){if(k.h!=0)return!1;for(let S=0;S<k.g.length;S++)if(k.g[S]!=0)return!1;return!0}function H(k){return k.h==-1}r.l=function(k){return k=re(this,k),H(k)?-1:W(k)?0:1};function U(k){const S=k.g.length,C=[];for(let D=0;D<S;D++)C[D]=~k.g[D];return new h(C,~k.h).add(R)}r.abs=function(){return H(this)?U(this):this},r.add=function(k){const S=Math.max(this.g.length,k.g.length),C=[];let D=0;for(let N=0;N<=S;N++){let O=D+(this.i(N)&65535)+(k.i(N)&65535),A=(O>>>16)+(this.i(N)>>>16)+(k.i(N)>>>16);D=A>>>16,O&=65535,A&=65535,C[N]=A<<16|O}return new h(C,C[C.length-1]&-2147483648?-1:0)};function re(k,S){return k.add(U(S))}r.j=function(k){if(W(this)||W(k))return w;if(H(this))return H(k)?U(this).j(U(k)):U(U(this).j(k));if(H(k))return U(this.j(U(k)));if(this.l(z)<0&&k.l(z)<0)return y(this.m()*k.m());const S=this.g.length+k.g.length,C=[];for(var D=0;D<2*S;D++)C[D]=0;for(D=0;D<this.g.length;D++)for(let N=0;N<k.g.length;N++){const O=this.i(D)>>>16,A=this.i(D)&65535,We=k.i(N)>>>16,Et=k.i(N)&65535;C[2*D+2*N]+=A*Et,he(C,2*D+2*N),C[2*D+2*N+1]+=O*Et,he(C,2*D+2*N+1),C[2*D+2*N+1]+=A*We,he(C,2*D+2*N+1),C[2*D+2*N+2]+=O*We,he(C,2*D+2*N+2)}for(k=0;k<S;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=S;k<2*S;k++)C[k]=0;return new h(C,0)};function he(k,S){for(;(k[S]&65535)!=k[S];)k[S+1]+=k[S]>>>16,k[S]&=65535,S++}function ue(k,S){this.g=k,this.h=S}function ge(k,S){if(W(S))throw Error("division by zero");if(W(k))return new ue(w,w);if(H(k))return S=ge(U(k),S),new ue(U(S.g),U(S.h));if(H(S))return S=ge(k,U(S)),new ue(U(S.g),S.h);if(k.g.length>30){if(H(k)||H(S))throw Error("slowDivide_ only works with positive integers.");for(var C=R,D=S;D.l(k)<=0;)C=Ae(C),D=Ae(D);var N=Ce(C,1),O=Ce(D,1);for(D=Ce(D,2),C=Ce(C,2);!W(D);){var A=O.add(D);A.l(k)<=0&&(N=N.add(C),O=A),D=Ce(D,1),C=Ce(C,1)}return S=re(k,N.j(S)),new ue(N,S)}for(N=w;k.l(S)>=0;){for(C=Math.max(1,Math.floor(k.m()/S.m())),D=Math.ceil(Math.log(C)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),O=y(C),A=O.j(S);H(A)||A.l(k)>0;)C-=D,O=y(C),A=O.j(S);W(O)&&(O=R),N=N.add(O),k=re(k,A)}return new ue(N,k)}r.B=function(k){return ge(this,k).h},r.and=function(k){const S=Math.max(this.g.length,k.g.length),C=[];for(let D=0;D<S;D++)C[D]=this.i(D)&k.i(D);return new h(C,this.h&k.h)},r.or=function(k){const S=Math.max(this.g.length,k.g.length),C=[];for(let D=0;D<S;D++)C[D]=this.i(D)|k.i(D);return new h(C,this.h|k.h)},r.xor=function(k){const S=Math.max(this.g.length,k.g.length),C=[];for(let D=0;D<S;D++)C[D]=this.i(D)^k.i(D);return new h(C,this.h^k.h)};function Ae(k){const S=k.g.length+1,C=[];for(let D=0;D<S;D++)C[D]=k.i(D)<<1|k.i(D-1)>>>31;return new h(C,k.h)}function Ce(k,S){const C=S>>5;S%=32;const D=k.g.length-C,N=[];for(let O=0;O<D;O++)N[O]=S>0?k.i(O+C)>>>S|k.i(O+C+1)<<32-S:k.i(O+C);return new h(N,k.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,zv=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,xi=h}).apply(typeof Ry<"u"?Ry:typeof self<"u"?self:typeof window<"u"?window:{});var Hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bv,Qa,$v,tc,of,Wv,Hv,qv;(function(){var r,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hu=="object"&&Hu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var M=u[T];if(!(M in _))break e;_=_[M]}u=u[u.length-1],T=_[u],m=m(T),m!=T&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(m){var _=[],T;for(T in m)Object.prototype.hasOwnProperty.call(m,T)&&_.push([T,m[T]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function f(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function g(u,m,_){return u.call.apply(u.bind,arguments)}function y(u,m,_){return y=g,y.apply(null,arguments)}function E(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function w(u,m){function _(){}_.prototype=m.prototype,u.Z=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Ob=function(T,M,B){for(var Z=Array(arguments.length-2),we=2;we<arguments.length;we++)Z[we-2]=arguments[we];return m.prototype[M].apply(T,Z)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function z(u){const m=u.length;if(m>0){const _=Array(m);for(let T=0;T<m;T++)_[T]=u[T];return _}return[]}function W(u,m){for(let T=1;T<arguments.length;T++){const M=arguments[T];var _=typeof M;if(_=_!="object"?_:M?Array.isArray(M)?"array":_:"null",_=="array"||_=="object"&&typeof M.length=="number"){_=u.length||0;const B=M.length||0;u.length=_+B;for(let Z=0;Z<B;Z++)u[_+Z]=M[Z]}else u.push(M)}}class H{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function U(u){h.setTimeout(()=>{throw u},0)}function re(){var u=k;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class he{constructor(){this.h=this.g=null}add(m,_){const T=ue.get();T.set(m,_),this.h?this.h.next=T:this.g=T,this.h=T}}var ue=new H(()=>new ge,u=>u.reset());class ge{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,Ce=!1,k=new he,S=()=>{const u=Promise.resolve(void 0);Ae=()=>{u.then(C)}};function C(){for(var u;u=re();){try{u.h.call(u.g)}catch(_){U(_)}var m=ue;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}Ce=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};h.addEventListener("test",_,m),h.removeEventListener("test",_,m)}catch{}return u})();function A(u){return/^[\s\xa0]*$/.test(u)}function We(u,m){N.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}w(We,N),We.prototype.init=function(u,m){const _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(_=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&We.Z.h.call(this)},We.prototype.h=function(){We.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Et="closure_listenable_"+(Math.random()*1e6|0),Vt=0;function Je(u,m,_,T,M){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!T,this.ha=M,this.key=++Vt,this.da=this.fa=!1}function ee(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function fe(u,m,_){for(const T in u)m.call(_,u[T],T,u)}function se(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function V(u){const m={};for(const _ in u)m[_]=u[_];return m}const G="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ie(u,m){let _,T;for(let M=1;M<arguments.length;M++){T=arguments[M];for(_ in T)u[_]=T[_];for(let B=0;B<G.length;B++)_=G[B],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function Se(u){this.src=u,this.g={},this.h=0}Se.prototype.add=function(u,m,_,T,M){const B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);const Z=ke(u,m,T,M);return Z>-1?(m=u[Z],_||(m.fa=!1)):(m=new Je(m,this.src,B,!!T,M),m.fa=_,u.push(m)),m};function Pe(u,m){const _=m.type;if(_ in u.g){var T=u.g[_],M=Array.prototype.indexOf.call(T,m,void 0),B;(B=M>=0)&&Array.prototype.splice.call(T,M,1),B&&(ee(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function ke(u,m,_,T){for(let M=0;M<u.length;++M){const B=u[M];if(!B.da&&B.listener==m&&B.capture==!!_&&B.ha==T)return M}return-1}var Ue="closure_lm_"+(Math.random()*1e6|0),Le={};function Be(u,m,_,T,M){if(Array.isArray(m)){for(let B=0;B<m.length;B++)Be(u,m[B],_,T,M);return null}return _=Jo(_),u&&u[Et]?u.J(m,_,f(T)?!!T.capture:!1,M):$t(u,m,_,!1,T,M)}function $t(u,m,_,T,M,B){if(!m)throw Error("Invalid event type");const Z=f(M)?!!M.capture:!!M;let we=bs(u);if(we||(u[Ue]=we=new Se(u)),_=we.add(m,_,T,Z,B),_.proxy)return _;if(T=Os(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)O||(M=Z),M===void 0&&(M=!1),u.addEventListener(m.toString(),T,M);else if(u.attachEvent)u.attachEvent(Ls(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Os(){function u(_){return m.call(u.src,u.listener,_)}const m=Pl;return u}function Yo(u,m,_,T,M){if(Array.isArray(m))for(var B=0;B<m.length;B++)Yo(u,m[B],_,T,M);else T=f(T)?!!T.capture:!!T,_=Jo(_),u&&u[Et]?(u=u.i,B=String(m).toString(),B in u.g&&(m=u.g[B],_=ke(m,_,T,M),_>-1&&(ee(m[_]),Array.prototype.splice.call(m,_,1),m.length==0&&(delete u.g[B],u.h--)))):u&&(u=bs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=ke(m,_,T,M)),(_=u>-1?m[u]:null)&&Wr(_))}function Wr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Et])Pe(m.i,u);else{var _=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(_,T,u.capture):m.detachEvent?m.detachEvent(Ls(_),T):m.addListener&&m.removeListener&&m.removeListener(T),(_=bs(m))?(Pe(_,u),_.h==0&&(_.src=null,m[Ue]=null)):ee(u)}}}function Ls(u){return u in Le?Le[u]:Le[u]="on"+u}function Pl(u,m){if(u.da)u=!0;else{m=new We(m,this);const _=u.listener,T=u.ha||u.src;u.fa&&Wr(u),u=_.call(T,m)}return u}function bs(u){return u=u[Ue],u instanceof Se?u:null}var Wi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Jo(u){return typeof u=="function"?u:(u[Wi]||(u[Wi]=function(m){return u.handleEvent(m)}),u[Wi])}function ct(){D.call(this),this.i=new Se(this),this.M=this,this.G=null}w(ct,D),ct.prototype[Et]=!0,ct.prototype.removeEventListener=function(u,m,_,T){Yo(this,u,m,_,T)};function it(u,m){var _,T=u.G;if(T)for(_=[];T;T=T.G)_.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new N(m,u);else if(m instanceof N)m.target=m.target||u;else{var M=m;m=new N(T,u),Ie(m,M)}M=!0;let B,Z;if(_)for(Z=_.length-1;Z>=0;Z--)B=m.g=_[Z],M=Rn(B,T,!0,m)&&M;if(B=m.g=u,M=Rn(B,T,!0,m)&&M,M=Rn(B,T,!1,m)&&M,_)for(Z=0;Z<_.length;Z++)B=m.g=_[Z],M=Rn(B,T,!1,m)&&M}ct.prototype.N=function(){if(ct.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const _=u.g[m];for(let T=0;T<_.length;T++)ee(_[T]);delete u.g[m],u.h--}}this.G=null},ct.prototype.J=function(u,m,_,T){return this.i.add(String(u),m,!1,_,T)},ct.prototype.K=function(u,m,_,T){return this.i.add(String(u),m,!0,_,T)};function Rn(u,m,_,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let M=!0;for(let B=0;B<m.length;++B){const Z=m[B];if(Z&&!Z.da&&Z.capture==_){const we=Z.listener,st=Z.ha||Z.src;Z.fa&&Pe(u.i,Z),M=we.call(st,T)!==!1&&M}}return M&&!T.defaultPrevented}function Xo(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=y(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:h.setTimeout(u,m||0)}function Zo(u){u.g=Xo(()=>{u.g=null,u.i&&(u.i=!1,Zo(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class kl extends D{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Zo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hr(u){D.call(this),this.h=u,this.g={}}w(Hr,D);var ea=[];function Ms(u){fe(u.g,function(m,_){this.g.hasOwnProperty(_)&&Wr(m)},u),u.g={}}Hr.prototype.N=function(){Hr.Z.N.call(this),Ms(this)},Hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qr=h.JSON.stringify,Nl=h.JSON.parse,Hi=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Kr(){}function xl(){}var Gr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Fs(){N.call(this,"d")}w(Fs,N);function ta(){N.call(this,"c")}w(ta,N);var Cn={},Us=null;function Qr(){return Us=Us||new ct}Cn.Ia="serverreachability";function js(u){N.call(this,Cn.Ia,u)}w(js,N);function _r(u){const m=Qr();it(m,new js(m))}Cn.STAT_EVENT="statevent";function vr(u,m){N.call(this,Cn.STAT_EVENT,u),this.stat=m}w(vr,N);function nt(u){const m=Qr();it(m,new vr(m,u))}Cn.Ja="timingevent";function na(u,m){N.call(this,Cn.Ja,u),this.size=m}w(na,N);function Yr(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function Jr(){this.g=!0}Jr.prototype.ua=function(){this.g=!1};function Dl(u,m,_,T,M,B){u.info(function(){if(u.g)if(B){var Z="",we=B.split("&");for(let ze=0;ze<we.length;ze++){var st=we[ze].split("=");if(st.length>1){const ht=st[0];st=st[1];const cn=ht.split("_");Z=cn.length>=2&&cn[1]=="type"?Z+(ht+"="+st+"&"):Z+(ht+"=redacted&")}}}else Z=null;else Z=B;return"XMLHTTP REQ ("+T+") [attempt "+M+"]: "+m+`
`+_+`
`+Z})}function Vl(u,m,_,T,M,B,Z){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+M+"]: "+m+`
`+_+`
`+B+" "+Z})}function zn(u,m,_,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+qi(u,_)+(T?" "+T:"")})}function Ol(u,m){u.info(function(){return"TIMEOUT: "+m})}Jr.prototype.info=function(){};function qi(u,m){if(!u.g)return m;if(!m)return null;try{const B=JSON.parse(m);if(B){for(u=0;u<B.length;u++)if(Array.isArray(B[u])){var _=B[u];if(!(_.length<2)){var T=_[1];if(Array.isArray(T)&&!(T.length<1)){var M=T[0];if(M!="noop"&&M!="stop"&&M!="close")for(let Z=1;Z<T.length;Z++)T[Z]=""}}}}return qr(B)}catch{return m}}var Xr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Zr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ll;function Er(){}w(Er,Kr),Er.prototype.g=function(){return new XMLHttpRequest},Ll=new Er;function Bn(u){return encodeURIComponent(String(u))}function zs(u){var m=1;u=u.split(":");const _=[];for(;m>0&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function mn(u,m,_,T){this.j=u,this.i=m,this.l=_,this.S=T||1,this.V=new Hr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new bl}function bl(){this.i=null,this.g="",this.h=!1}var Ml={},ra={};function Pn(u,m,_){u.M=1,u.A=Tr(gn(m)),u.u=_,u.R=!0,ia(u,null)}function ia(u,m){u.F=Date.now(),Ki(u),u.B=gn(u.A);var _=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),pa(_.i,"t",T),u.C=0,_=u.j.L,u.h=new bl,u.g=Kl(u.j,_?m:null,!u.u),u.P>0&&(u.O=new kl(y(u.Y,u,u.g),u.P)),m=u.V,_=u.g,T=u.ba;var M="readystatechange";Array.isArray(M)||(M&&(ea[0]=M.toString()),M=ea);for(let B=0;B<M.length;B++){const Z=Be(_,M[B],T||m.handleEvent,!1,m.h||m);if(!Z)break;m.g[Z.key]=Z}m=u.J?V(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),_r(),Dl(u.i,u.v,u.B,u.l,u.S,u.u)}mn.prototype.ba=function(u){u=u.target;const m=this.O;m&&Qn(u)==3?m.j():this.Y(u)},mn.prototype.Y=function(u){try{if(u==this.g)e:{const we=Qn(this.g),st=this.g.ya(),ze=this.g.ca();if(!(we<3)&&(we!=3||this.g&&(this.h.h||this.g.la()||Hl(this.g)))){this.K||we!=4||st==7||(st==8||ze<=0?_r(3):_r(2)),Bs(this);var m=this.g.ca();this.X=m;var _=Fl(this);if(this.o=m==200,Vl(this.i,this.v,this.B,this.l,this.S,we,m),this.o){if(this.U&&!this.L){t:{if(this.g){var T,M=this.g;if((T=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(T)){var B=T;break t}}B=null}if(u=B)zn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ke(this,u);else{this.o=!1,this.m=3,nt(12),wr(this),Gi(this);break e}}if(this.R){u=!0;let ht;for(;!this.K&&this.C<_.length;)if(ht=jl(this,_),ht==ra){we==4&&(this.m=4,nt(14),u=!1),zn(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==Ml){this.m=4,nt(15),zn(this.i,this.l,_,"[Invalid Chunk]"),u=!1;break}else zn(this.i,this.l,ht,null),Ke(this,ht);if(Ul(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||_.length!=0||this.h.h||(this.m=1,nt(16),u=!1),this.o=this.o&&u,!u)zn(this.i,this.l,_,"[Invalid Chunked Response]"),wr(this),Gi(this);else if(_.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),rs(Z),Z.P=!0,nt(11))}}else zn(this.i,this.l,_,null),Ke(this,_);we==4&&wr(this),this.o&&!this.K&&(we==4?Xs(this.j,this):(this.o=!1,Ki(this)))}else ga(this.g),m==400&&_.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),wr(this),Gi(this)}}}catch{}finally{}};function Fl(u){if(!Ul(u))return u.g.la();const m=Hl(u.g);if(m==="")return"";let _="";const T=m.length,M=Qn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return wr(u),Gi(u),"";u.h.i=new h.TextDecoder}for(let B=0;B<T;B++)u.h.h=!0,_+=u.h.i.decode(m[B],{stream:!(M&&B==T-1)});return m.length=0,u.h.g+=_,u.C=0,u.h.g}function Ul(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function jl(u,m){var _=u.C,T=m.indexOf(`
`,_);return T==-1?ra:(_=Number(m.substring(_,T)),isNaN(_)?Ml:(T+=1,T+_>m.length?ra:(m=m.slice(T,T+_),u.C=T+_,m)))}mn.prototype.cancel=function(){this.K=!0,wr(this)};function Ki(u){u.T=Date.now()+u.H,sa(u,u.H)}function sa(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=Yr(y(u.aa,u),m)}function Bs(u){u.D&&(h.clearTimeout(u.D),u.D=null)}mn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Ol(this.i,this.B),this.M!=2&&(_r(),nt(17)),wr(this),this.m=2,Gi(this)):sa(this,this.T-u)};function Gi(u){u.j.I==0||u.K||Xs(u.j,u)}function wr(u){Bs(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,Ms(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function Ke(u,m){try{var _=u.j;if(_.I!=0&&(_.g==u||aa(_.h,u))){if(!u.L&&aa(_.h,u)&&_.I==3){try{var T=_.Ba.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var M=T;if(M[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<u.F)Js(_),ln(_);else break e;Xn(_),nt(18)}}else _.xa=M[1],0<_.xa-_.K&&M[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=Yr(y(_.Va,_),6e3));Qi(_.h)<=1&&_.ta&&(_.ta=void 0)}else un(_,11)}else if((u.L||_.g==u)&&Js(_),!A(m))for(M=_.Ba.g.parse(m),m=0;m<M.length;m++){let ze=M[m];const ht=ze[0];if(!(ht<=_.K))if(_.K=ht,ze=ze[1],_.I==2)if(ze[0]=="c"){_.M=ze[1],_.ba=ze[2];const cn=ze[3];cn!=null&&(_.ka=cn,_.j.info("VER="+_.ka));const Cr=ze[4];Cr!=null&&(_.za=Cr,_.j.info("SVER="+_.za));const Zn=ze[5];Zn!=null&&typeof Zn=="number"&&Zn>0&&(T=1.5*Zn,_.O=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const er=u.g;if(er){const to=er.g?er.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(to){var B=T.h;B.g||to.indexOf("spdy")==-1&&to.indexOf("quic")==-1&&to.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Ws(B,B.h),B.h=null))}if(T.G){const va=er.g?er.g.getResponseHeader("X-HTTP-Session-Id"):null;va&&(T.wa=va,Fe(T.J,T.G,va))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-u.F,_.j.info("Handshake RTT: "+_.T+"ms")),T=_;var Z=u;if(T.na=_a(T,T.L?T.ba:null,T.W),Z.L){Yi(T.h,Z);var we=Z,st=T.O;st&&(we.H=st),we.D&&(Bs(we),Ki(we)),T.g=Z}else Ot(T);_.i.length>0&&Rr(_)}else ze[0]!="stop"&&ze[0]!="close"||un(_,7);else _.I==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?un(_,7):Qs(_):ze[0]!="noop"&&_.l&&_.l.qa(ze),_.A=0)}}_r(4)}catch{}}var rh=class{constructor(u,m){this.g=u,this.map=m}};function $s(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function oa(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Qi(u){return u.h?1:u.g?u.g.size:0}function aa(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Ws(u,m){u.g?u.g.add(m):u.h=m}function Yi(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}$s.prototype.cancel=function(){if(this.i=sn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function sn(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.G);return m}return z(u.i)}var zl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function on(u,m){if(u){u=u.split("&");for(let _=0;_<u.length;_++){const T=u[_].indexOf("=");let M,B=null;T>=0?(M=u[_].substring(0,T),B=u[_].substring(T+1)):M=u[_],m(M,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function $n(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof $n?(this.l=u.l,Ji(this,u.j),this.o=u.o,this.g=u.g,Wn(this,u.u),this.h=u.h,ei(this,ma(u.i)),this.m=u.m):u&&(m=String(u).match(zl))?(this.l=!1,Ji(this,m[1]||"",!0),this.o=Xi(m[2]||""),this.g=Xi(m[3]||"",!0),Wn(this,m[4]),this.h=Xi(m[5]||"",!0),ei(this,m[6]||"",!0),this.m=Xi(m[7]||"")):(this.l=!1,this.i=new Ve(null,this.l))}$n.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(Zi(m,ua,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Zi(m,ua,!0),"@"),u.push(Bn(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&u.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Zi(_,_.charAt(0)=="/"?es:ca,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Zi(_,ha)),u.join("")},$n.prototype.resolve=function(u){const m=gn(this);let _=!!u.j;_?Ji(m,u.j):_=!!u.o,_?m.o=u.o:_=!!u.g,_?m.g=u.g:_=u.u!=null;var T=u.h;if(_)Wn(m,u.u);else if(_=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var M=m.h.lastIndexOf("/");M!=-1&&(T=m.h.slice(0,M+1)+T)}if(M=T,M==".."||M==".")T="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){T=M.lastIndexOf("/",0)==0,M=M.split("/");const B=[];for(let Z=0;Z<M.length;){const we=M[Z++];we=="."?T&&Z==M.length&&B.push(""):we==".."?((B.length>1||B.length==1&&B[0]!="")&&B.pop(),T&&Z==M.length&&B.push("")):(B.push(we),T=!0)}T=B.join("/")}else T=M}return _?m.h=T:_=u.i.toString()!=="",_?ei(m,ma(u.i)):_=!!u.m,_&&(m.m=u.m),m};function gn(u){return new $n(u)}function Ji(u,m,_){u.j=_?Xi(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Wn(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function ei(u,m,_){m instanceof Ve?(u.i=m,qs(u.i,u.l)):(_||(m=Zi(m,ih)),u.i=new Ve(m,u.l))}function Fe(u,m,_){u.i.set(m,_)}function Tr(u){return Fe(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Xi(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Zi(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,la),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function la(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var ua=/[#\/\?@]/g,ca=/[#\?:]/g,es=/[#\?]/g,ih=/[#\?@]/g,ha=/#/g;function Ve(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Hn(u){u.g||(u.g=new Map,u.h=0,u.i&&on(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=Ve.prototype,r.add=function(u,m){Hn(this),this.i=null,u=qn(this,u);let _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function da(u,m){Hn(u),m=qn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Hs(u,m){return Hn(u),m=qn(u,m),u.g.has(m)}r.forEach=function(u,m){Hn(this),this.g.forEach(function(_,T){_.forEach(function(M){u.call(m,M,T,this)},this)},this)};function fa(u,m){Hn(u);let _=[];if(typeof m=="string")Hs(u,m)&&(_=_.concat(u.g.get(qn(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)_=_.concat(u[m]);return _}r.set=function(u,m){return Hn(this),this.i=null,u=qn(this,u),Hs(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=fa(this,u),u.length>0?String(u[0]):m):m};function pa(u,m,_){da(u,m),_.length>0&&(u.i=null,u.g.set(qn(u,m),z(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let T=0;T<m.length;T++){var _=m[T];const M=Bn(_);_=fa(this,_);for(let B=0;B<_.length;B++){let Z=M;_[B]!==""&&(Z+="="+Bn(_[B])),u.push(Z)}}return this.i=u.join("&")};function ma(u){const m=new Ve;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function qn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function qs(u,m){m&&!u.j&&(Hn(u),u.i=null,u.g.forEach(function(_,T){const M=T.toLowerCase();T!=M&&(da(this,T),pa(this,M,_))},u)),u.j=m}function Kn(u,m){const _=new Jr;if(h.Image){const T=new Image;T.onload=E(At,_,"TestLoadImage: loaded",!0,m,T),T.onerror=E(At,_,"TestLoadImage: error",!1,m,T),T.onabort=E(At,_,"TestLoadImage: abort",!1,m,T),T.ontimeout=E(At,_,"TestLoadImage: timeout",!1,m,T),h.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Gn(u,m){const _=new Jr,T=new AbortController,M=setTimeout(()=>{T.abort(),At(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(B=>{clearTimeout(M),B.ok?At(_,"TestPingServer: ok",!0,m):At(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),At(_,"TestPingServer: error",!1,m)})}function At(u,m,_,T,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),T(_)}catch{}}function ts(){this.g=new Hi}function Ir(u){this.i=u.Sb||null,this.h=u.ab||!1}w(Ir,Kr),Ir.prototype.g=function(){return new an(this.i,this.h)};function an(u,m){ct.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(an,ct),r=an.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,kn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||h).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Bl(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Bl(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?ti(this):kn(this),this.readyState==3&&Bl(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,ti(this))},r.Na=function(u){this.g&&(this.response=u,ti(this))},r.ga=function(){this.g&&ti(this)};function ti(u){u.readyState=4,u.l=null,u.j=null,u.B=null,kn(u)}r.setRequestHeader=function(u,m){this.A.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function kn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(an.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function $l(u){let m="";return fe(u,function(_,T){m+=T,m+=":",m+=_,m+=`\r
`}),m}function Ks(u,m,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=$l(_),typeof u=="string"?_!=null&&Bn(_):Fe(u,m,_))}function $e(u){ct.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w($e,ct);var Wl=/^https?$/i,sh=["POST","PUT"];r=$e.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,m,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ll.g(),this.g.onreadystatechange=R(y(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(B){ni(this,B);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var M in T)_.set(M,T[M]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const B of T.keys())_.set(B,T.get(B));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(B=>B.toLowerCase()=="content-type"),M=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(sh,m,void 0)>=0)||T||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,Z]of _)this.g.setRequestHeader(B,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(B){ni(this,B)}};function ni(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,ri(u),Ar(u)}function ri(u){u.A||(u.A=!0,it(u,"complete"),it(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,it(this,"complete"),it(this,"abort"),Ar(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ar(this,!0)),$e.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Sr(this):this.Xa())},r.Xa=function(){Sr(this)};function Sr(u){if(u.h&&typeof l<"u"){if(u.v&&Qn(u)==4)setTimeout(u.Ca.bind(u),0);else if(it(u,"readystatechange"),Qn(u)==4){u.h=!1;try{const B=u.ca();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var T;if(T=B===0){let Z=String(u.D).match(zl)[1]||null;!Z&&h.self&&h.self.location&&(Z=h.self.location.protocol.slice(0,-1)),T=!Wl.test(Z?Z.toLowerCase():"")}_=T}if(_)it(u,"complete"),it(u,"success");else{u.o=6;try{var M=Qn(u)>2?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.ca()+"]",ri(u)}}finally{Ar(u)}}}}function Ar(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const _=u.g;u.g=null,m||it(u,"ready");try{_.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Qn(u){return u.g?u.g.readyState:0}r.ca=function(){try{return Qn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Nl(m)}};function Hl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ga(u){const m={};u=(u.g&&Qn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(A(u[T]))continue;var _=zs(u[T]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const B=m[M]||[];m[M]=B,B.push(_)}se(m,function(T){return T.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Gs(u){this.za=0,this.i=[],this.j=new Jr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Yn("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Yn("baseRetryDelayMs",5e3,u),this.Za=Yn("retryDelaySeedMs",1e4,u),this.Ta=Yn("forwardChannelMaxRetries",2,u),this.va=Yn("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new $s(u&&u.concurrentRequestLimit),this.Ba=new ts,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Gs.prototype,r.ka=8,r.I=1,r.connect=function(u,m,_,T){nt(0),this.W=u,this.H=m||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.J=_a(this,null,this.W),Rr(this)};function Qs(u){if(Ys(u),u.I==3){var m=u.V++,_=gn(u.J);if(Fe(_,"SID",u.M),Fe(_,"RID",m),Fe(_,"TYPE","terminate"),Jn(u,_),m=new mn(u,u.j,m),m.M=2,m.A=Tr(gn(_)),_=!1,h.navigator&&h.navigator.sendBeacon)try{_=h.navigator.sendBeacon(m.A.toString(),"")}catch{}!_&&h.Image&&(new Image().src=m.A,_=!0),_||(m.g=Kl(m.j,null),m.g.ea(m.A)),m.F=Date.now(),Ki(m)}is(u)}function ln(u){u.g&&(rs(u),u.g.cancel(),u.g=null)}function Ys(u){ln(u),u.v&&(h.clearTimeout(u.v),u.v=null),Js(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function Rr(u){if(!oa(u.h)&&!u.m){u.m=!0;var m=u.Ea;Ae||S(),Ce||(Ae(),Ce=!0),k.add(m,u),u.D=0}}function ql(u,m){return Qi(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=Yr(y(u.Ea,u,m),Zs(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const M=new mn(this,this.j,u);let B=this.o;if(this.U&&(B?(B=V(B),Ie(B,this.U)):B=this.U),this.u!==null||this.R||(M.J=B,B=null),this.S)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,m>4096){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ya(this,M,m),_=gn(this.J),Fe(_,"RID",u),Fe(_,"CVER",22),this.G&&Fe(_,"X-HTTP-Session-Id",this.G),Jn(this,_),B&&(this.R?m="headers="+Bn($l(B))+"&"+m:this.u&&Ks(_,this.u,B)),Ws(this.h,M),this.Ra&&Fe(_,"TYPE","init"),this.S?(Fe(_,"$req",m),Fe(_,"SID","null"),M.U=!0,Pn(M,_,null)):Pn(M,_,m),this.I=2}}else this.I==3&&(u?ns(this,u):this.i.length==0||oa(this.h)||ns(this))};function ns(u,m){var _;m?_=m.l:_=u.V++;const T=gn(u.J);Fe(T,"SID",u.M),Fe(T,"RID",_),Fe(T,"AID",u.K),Jn(u,T),u.u&&u.o&&Ks(T,u.u,u.o),_=new mn(u,u.j,_,u.D+1),u.u===null&&(_.J=u.o),m&&(u.i=m.G.concat(u.i)),m=ya(u,_,1e3),_.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Ws(u.h,_),Pn(_,T,m)}function Jn(u,m){u.H&&fe(u.H,function(_,T){Fe(m,T,_)}),u.l&&fe({},function(_,T){Fe(m,T,_)})}function ya(u,m,_){_=Math.min(u.i.length,_);const T=u.l?y(u.l.Ka,u.l,u):null;e:{var M=u.i;let we=-1;for(;;){const st=["count="+_];we==-1?_>0?(we=M[0].g,st.push("ofs="+we)):we=0:st.push("ofs="+we);let ze=!0;for(let ht=0;ht<_;ht++){var B=M[ht].g;const cn=M[ht].map;if(B-=we,B<0)we=Math.max(0,M[ht].g-100),ze=!1;else try{B="req"+B+"_"||"";try{var Z=cn instanceof Map?cn:Object.entries(cn);for(const[Cr,Zn]of Z){let er=Zn;f(Zn)&&(er=qr(Zn)),st.push(B+Cr+"="+encodeURIComponent(er))}}catch(Cr){throw st.push(B+"type="+encodeURIComponent("_badmap")),Cr}}catch{T&&T(cn)}}if(ze){Z=st.join("&");break e}}Z=void 0}return u=u.i.splice(0,_),m.G=u,Z}function Ot(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;Ae||S(),Ce||(Ae(),Ce=!0),k.add(m,u),u.A=0}}function Xn(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=Yr(y(u.Da,u),Zs(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,ii(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=Yr(y(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),ln(this),ii(this))};function rs(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function ii(u){u.g=new mn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=gn(u.na);Fe(m,"RID","rpc"),Fe(m,"SID",u.M),Fe(m,"AID",u.K),Fe(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&Fe(m,"TO",u.ia),Fe(m,"TYPE","xmlhttp"),Jn(u,m),u.u&&u.o&&Ks(m,u.u,u.o),u.O&&(u.g.H=u.O);var _=u.g;u=u.ba,_.M=1,_.A=Tr(gn(m)),_.u=null,_.R=!0,ia(_,u)}r.Va=function(){this.C!=null&&(this.C=null,ln(this),Xn(this),nt(19))};function Js(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Xs(u,m){var _=null;if(u.g==m){Js(u),rs(u),u.g=null;var T=2}else if(aa(u.h,m))_=m.G,Yi(u.h,m),T=1;else return;if(u.I!=0){if(m.o)if(T==1){_=m.u?m.u.length:0,m=Date.now()-m.F;var M=u.D;T=Qr(),it(T,new na(T,_)),Rr(u)}else Ot(u);else if(M=m.m,M==3||M==0&&m.X>0||!(T==1&&ql(u,m)||T==2&&Xn(u)))switch(_&&_.length>0&&(m=u.h,m.i=m.i.concat(_)),M){case 1:un(u,5);break;case 4:un(u,10);break;case 3:un(u,6);break;default:un(u,2)}}}function Zs(u,m){let _=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(_*=2),_*m}function un(u,m){if(u.j.info("Error code "+m),m==2){var _=y(u.bb,u),T=u.Ua;const M=!T;T=new $n(T||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Ji(T,"https"),Tr(T),M?Kn(T.toString(),_):Gn(T.toString(),_)}else nt(2);u.I=0,u.l&&u.l.pa(m),is(u),Ys(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function is(u){if(u.I=0,u.ja=[],u.l){const m=sn(u.h);(m.length!=0||u.i.length!=0)&&(W(u.ja,m),W(u.ja,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.oa()}}function _a(u,m,_){var T=_ instanceof $n?gn(_):new $n(_);if(T.g!="")m&&(T.g=m+"."+T.g),Wn(T,T.u);else{var M=h.location;T=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;const B=new $n(null);T&&Ji(B,T),m&&(B.g=m),M&&Wn(B,M),_&&(B.h=_),T=B}return _=u.G,m=u.wa,_&&m&&Fe(T,_,m),Fe(T,"VER",u.ka),Jn(u,T),T}function Kl(u,m,_){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new $e(new Ir({ab:_})):new $e(u.ma),m.Fa(u.L),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gl(){}r=Gl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function eo(){}eo.prototype.g=function(u,m){return new Rt(u,m)};function Rt(u,m){ct.call(this),this.g=new Gs(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!A(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!A(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new si(this)}w(Rt,ct),Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Qs(this.g)},Rt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.v&&(_={},_.__data__=qr(u),u=_);m.i.push(new rh(m.Ya++,u)),m.I==3&&Rr(m)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Qs(this.g),delete this.g,Rt.Z.N.call(this)};function Ql(u){Fs.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}w(Ql,Fs);function Yl(){ta.call(this),this.status=1}w(Yl,ta);function si(u){this.g=u}w(si,Gl),si.prototype.ra=function(){it(this.g,"a")},si.prototype.qa=function(u){it(this.g,new Ql(u))},si.prototype.pa=function(u){it(this.g,new Yl)},si.prototype.oa=function(){it(this.g,"b")},eo.prototype.createWebChannel=eo.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,qv=function(){return new eo},Hv=function(){return Qr()},Wv=Cn,of={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Xr.NO_ERROR=0,Xr.TIMEOUT=8,Xr.HTTP_ERROR=6,tc=Xr,Zr.COMPLETE="complete",$v=Zr,xl.EventType=Gr,Gr.OPEN="a",Gr.CLOSE="b",Gr.ERROR="c",Gr.MESSAGE="d",ct.prototype.listen=ct.prototype.J,Qa=xl,$e.prototype.listenOnce=$e.prototype.K,$e.prototype.getLastError=$e.prototype.Ha,$e.prototype.getLastErrorCode=$e.prototype.ya,$e.prototype.getStatus=$e.prototype.ca,$e.prototype.getResponseJson=$e.prototype.La,$e.prototype.getResponseText=$e.prototype.la,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Fa,Bv=$e}).apply(typeof Hu<"u"?Hu:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
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
 */let Ho="12.11.0";function GR(r){Ho=r}/**
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
 */const Is=new Vf("@firebase/firestore");function Io(){return Is.logLevel}function ie(r,...e){if(Is.logLevel<=Ne.DEBUG){const t=e.map(Wf);Is.debug(`Firestore (${Ho}): ${r}`,...t)}}function zr(r,...e){if(Is.logLevel<=Ne.ERROR){const t=e.map(Wf);Is.error(`Firestore (${Ho}): ${r}`,...t)}}function Ss(r,...e){if(Is.logLevel<=Ne.WARN){const t=e.map(Wf);Is.warn(`Firestore (${Ho}): ${r}`,...t)}}function Wf(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function _e(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Kv(r,i,t)}function Kv(r,e,t){let i=`FIRESTORE (${Ho}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw zr(i),new Error(i)}function je(r,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,r||Kv(e,o,i)}function Te(r,e){return r}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends gr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jt.UNAUTHENTICATED)))}shutdown(){}}class YR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class JR{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Fr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Fr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(je(typeof i.accessToken=="string",31837,{l:i}),new Gv(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new jt(e)}}class XR{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ZR{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new XR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Cy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eC{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,In(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){je(this.o===void 0,3512);const i=l=>{l.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Cy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Cy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function tC(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Hf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=tC(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function xe(r,e){return r<e?-1:r>e?1:0}function af(r,e){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++){const o=r.charAt(i),l=e.charAt(i);if(o!==l)return Ud(o)===Ud(l)?xe(o,l):Ud(o)?1:-1}return xe(r.length,e.length)}const nC=55296,rC=57343;function Ud(r){const e=r.charCodeAt(0);return e>=nC&&e<=rC}function Lo(r,e,t){return r.length===e.length&&r.every(((i,o)=>t(i,e[o])))}/**
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
 */const Py="__name__";class sr{constructor(e,t,i){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&_e(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return sr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof sr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=sr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return xe(e.length,t.length)}static compareSegments(e,t){const i=sr.isNumericId(e),o=sr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?sr.extractNumericId(e).compare(sr.extractNumericId(t)):af(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xi.fromString(e.substring(4,e.length-2))}}class qe extends sr{construct(e,t,i){return new qe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new te($.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new qe(t)}static emptyPath(){return new qe([])}}const iC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends sr{construct(e,t,i){return new xt(e,t,i)}static isValidIdentifier(e){return iC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Py}static keyField(){return new xt([Py])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new te($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new te($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new te($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new te($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(t)}static emptyPath(){return new xt([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(qe.fromString(e))}static fromName(e){return new de(qe.fromString(e).popFirst(5))}static empty(){return new de(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new qe(e.slice()))}}/**
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
 */function Qv(r,e,t){if(!t)throw new te($.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function sC(r,e,t,i){if(e===!0&&i===!0)throw new te($.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function ky(r){if(!de.isDocumentKey(r))throw new te($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ny(r){if(de.isDocumentKey(r))throw new te($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Yv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Lc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e(12329,{type:typeof r})}function dr(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new te($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Lc(r);throw new te($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function mt(r,e){const t={typeString:r};return e&&(t.value=e),t}function Tl(r,e){if(!Yv(r))throw new te($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const h=r[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new te($.INVALID_ARGUMENT,t);return!0}/**
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
 */const xy=-62135596800,Dy=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Dy);return new Ye(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<xy)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Dy}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Tl(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-xy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:mt("string",Ye._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Ye(0,0))}static max(){return new Ee(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ul=-1;function oC(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(i===1e9?new Ye(t+1,0):new Ye(t,i));return new Oi(o,de.empty(),e)}function aC(r){return new Oi(r.readTime,r.key,ul)}class Oi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Oi(Ee.min(),de.empty(),ul)}static max(){return new Oi(Ee.max(),de.empty(),ul)}}function lC(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(r.documentKey,e.documentKey),t!==0?t:xe(r.largestBatchId,e.largestBatchId))}/**
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
 */const uC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function qo(r){if(r.code!==$.FAILED_PRECONDITION||r.message!==uC)throw r;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,i)=>{t(e)}))}static reject(e){return new q(((t,i)=>{i(e)}))}static waitFor(e){return new q(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>i(g)))})),h=!0,l===o&&t()}))}static or(e){let t=q.resolve(!1);for(const i of e)t=t.next((o=>o?q.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new q(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const y=g;t(e[y]).next((E=>{h[y]=E,++f,f===l&&i(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new q(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function hC(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ko(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class bc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}bc.ce=-1;/**
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
 */const qf=-1;function Mc(r){return r==null}function gc(r){return r===0&&1/r==-1/0}function dC(r){return typeof r=="number"&&Number.isInteger(r)&&!gc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Jv="";function fC(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Vy(e)),e=pC(r.get(t),e);return Vy(e)}function pC(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case Jv:t+="";break;default:t+=l}}return t}function Vy(r){return r+Jv+""}/**
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
 */function Oy(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Bi(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Xv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class tt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qu(this.root,e,this.comparator,!1)}getReverseIterator(){return new qu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qu(this.root,e,this.comparator,!0)}}class qu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Nt.RED,this.left=o??Nt.EMPTY,this.right=l??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Nt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ly(this.data.getIterator())}getIteratorFrom(e){return new Ly(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class Ly{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class pn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new pn([])}unionWith(e){let t=new vt(xt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new pn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Lo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class Zv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Zv("Invalid base64 string: "+l):l}})(e);return new Dt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const mC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Li(r){if(je(!!r,39018),typeof r=="string"){let e=0;const t=mC.exec(r);if(je(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:at(r.seconds),nanos:at(r.nanos)}}function at(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function bi(r){return typeof r=="string"?Dt.fromBase64String(r):Dt.fromUint8Array(r)}/**
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
 */const eE="server_timestamp",tE="__type__",nE="__previous_value__",rE="__local_write_time__";function Kf(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[tE])==null?void 0:i.stringValue)===eE}function Fc(r){const e=r.mapValue.fields[nE];return Kf(e)?Fc(e):e}function cl(r){const e=Li(r.mapValue.fields[rE].timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class gC{constructor(e,t,i,o,l,h,f,g,y,E,w){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=E,this.apiKey=w}}const yc="(default)";class hl{constructor(e,t){this.projectId=e,this.database=t||yc}static empty(){return new hl("","")}get isDefaultDatabase(){return this.database===yc}isEqual(e){return e instanceof hl&&e.projectId===this.projectId&&e.database===this.database}}function yC(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new te($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hl(r.options.projectId,e)}/**
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
 */const iE="__type__",_C="__max__",Ku={mapValue:{}},sE="__vector__",_c="value";function Mi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Kf(r)?4:EC(r)?9007199254740991:vC(r)?10:11:_e(28295,{value:r})}function fr(r,e){if(r===e)return!0;const t=Mi(r);if(t!==Mi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return cl(r).isEqual(cl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Li(o.timestampValue),f=Li(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return bi(o.bytesValue).isEqual(bi(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return at(o.geoPointValue.latitude)===at(l.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return at(o.integerValue)===at(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=at(o.doubleValue),f=at(l.doubleValue);return h===f?gc(h)===gc(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return Lo(r.arrayValue.values||[],e.arrayValue.values||[],fr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Oy(h)!==Oy(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!fr(h[g],f[g])))return!1;return!0})(r,e);default:return _e(52216,{left:r})}}function dl(r,e){return(r.values||[]).find((t=>fr(t,e)))!==void 0}function bo(r,e){if(r===e)return 0;const t=Mi(r),i=Mi(e);if(t!==i)return xe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=at(l.integerValue||l.doubleValue),g=at(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(r,e);case 3:return by(r.timestampValue,e.timestampValue);case 4:return by(cl(r),cl(e));case 5:return af(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=bi(l),g=bi(h);return f.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let y=0;y<f.length&&y<g.length;y++){const E=xe(f[y],g[y]);if(E!==0)return E}return xe(f.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=xe(at(l.latitude),at(h.latitude));return f!==0?f:xe(at(l.longitude),at(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return My(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var R,z,W,H;const f=l.fields||{},g=h.fields||{},y=(R=f[_c])==null?void 0:R.arrayValue,E=(z=g[_c])==null?void 0:z.arrayValue,w=xe(((W=y==null?void 0:y.values)==null?void 0:W.length)||0,((H=E==null?void 0:E.values)==null?void 0:H.length)||0);return w!==0?w:My(y,E)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Ku.mapValue&&h===Ku.mapValue)return 0;if(l===Ku.mapValue)return 1;if(h===Ku.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),y=h.fields||{},E=Object.keys(y);g.sort(),E.sort();for(let w=0;w<g.length&&w<E.length;++w){const R=af(g[w],E[w]);if(R!==0)return R;const z=bo(f[g[w]],y[E[w]]);if(z!==0)return z}return xe(g.length,E.length)})(r.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function by(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return xe(r,e);const t=Li(r),i=Li(e),o=xe(t.seconds,i.seconds);return o!==0?o:xe(t.nanos,i.nanos)}function My(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=bo(t[o],i[o]);if(l)return l}return xe(t.length,i.length)}function Mo(r){return lf(r)}function lf(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=Li(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return bi(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return de.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=lf(l);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${lf(t.fields[h])}`;return o+"}"})(r.mapValue):_e(61005,{value:r})}function nc(r){switch(Mi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fc(r);return e?16+nc(e):16;case 5:return 2*r.stringValue.length;case 6:return bi(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+nc(l)),0)})(r.arrayValue);case 10:case 11:return(function(i){let o=0;return Bi(i.fields,((l,h)=>{o+=l.length+nc(h)})),o})(r.mapValue);default:throw _e(13486,{value:r})}}function Fy(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function uf(r){return!!r&&"integerValue"in r}function Gf(r){return!!r&&"arrayValue"in r}function Uy(r){return!!r&&"nullValue"in r}function jy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function rc(r){return!!r&&"mapValue"in r}function vC(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[iE])==null?void 0:i.stringValue)===sE}function el(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Bi(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=el(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=el(r.arrayValue.values[t]);return e}return{...r}}function EC(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===_C}/**
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
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!rc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=el(t)}setAll(e){let t=xt.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=el(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());rc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];rc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Bi(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new nn(el(this.value))}}function oE(r){const e=[];return Bi(r.fields,((t,i)=>{const o=new xt([t]);if(rc(i)){const l=oE(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new pn(e)}/**
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
 */class zt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new zt(e,0,Ee.min(),Ee.min(),Ee.min(),nn.empty(),0)}static newFoundDocument(e,t,i,o){return new zt(e,1,t,Ee.min(),i,o,0)}static newNoDocument(e,t){return new zt(e,2,t,Ee.min(),Ee.min(),nn.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,Ee.min(),Ee.min(),nn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vc{constructor(e,t){this.position=e,this.inclusive=t}}function zy(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?i=de.comparator(de.fromName(h.referenceValue),t.key):i=bo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function By(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!fr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class fl{constructor(e,t="asc"){this.field=e,this.dir=t}}function wC(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class aE{}class pt extends aE{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new IC(e,t,i):t==="array-contains"?new RC(e,i):t==="in"?new CC(e,i):t==="not-in"?new PC(e,i):t==="array-contains-any"?new kC(e,i):new pt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new SC(e,i):new AC(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(bo(t,this.value)):t!==null&&Mi(this.value)===Mi(t)&&this.matchesComparison(bo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends aE{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new jn(e,t)}matches(e){return lE(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function lE(r){return r.op==="and"}function uE(r){return TC(r)&&lE(r)}function TC(r){for(const e of r.filters)if(e instanceof jn)return!1;return!0}function cf(r){if(r instanceof pt)return r.field.canonicalString()+r.op.toString()+Mo(r.value);if(uE(r))return r.filters.map((e=>cf(e))).join(",");{const e=r.filters.map((t=>cf(t))).join(",");return`${r.op}(${e})`}}function cE(r,e){return r instanceof pt?(function(i,o){return o instanceof pt&&i.op===o.op&&i.field.isEqual(o.field)&&fr(i.value,o.value)})(r,e):r instanceof jn?(function(i,o){return o instanceof jn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&cE(h,o.filters[f])),!0):!1})(r,e):void _e(19439)}function hE(r){return r instanceof pt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Mo(t.value)}`})(r):r instanceof jn?(function(t){return t.op.toString()+" {"+t.getFilters().map(hE).join(" ,")+"}"})(r):"Filter"}class IC extends pt{constructor(e,t,i){super(e,t,i),this.key=de.fromName(i.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class SC extends pt{constructor(e,t){super(e,"in",t),this.keys=dE("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class AC extends pt{constructor(e,t){super(e,"not-in",t),this.keys=dE("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function dE(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>de.fromName(i.referenceValue)))}class RC extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gf(t)&&dl(t.arrayValue,this.value)}}class CC extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&dl(this.value.arrayValue,t)}}class PC extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(dl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!dl(this.value.arrayValue,t)}}class kC extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>dl(this.value.arrayValue,i)))}}/**
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
 */class NC{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Te=null}}function $y(r,e=null,t=[],i=[],o=null,l=null,h=null){return new NC(r,e,t,i,o,l,h)}function Qf(r){const e=Te(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>cf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Mc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Mo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Mo(i))).join(",")),e.Te=t}return e.Te}function Yf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!wC(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!cE(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!By(r.startAt,e.startAt)&&By(r.endAt,e.endAt)}function hf(r){return de.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Go{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function xC(r,e,t,i,o,l,h,f){return new Go(r,e,t,i,o,l,h,f)}function Jf(r){return new Go(r)}function Wy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function DC(r){return de.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function fE(r){return r.collectionGroup!==null}function tl(r){const e=Te(r);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new vt(xt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new fl(l,i))})),t.has(xt.keyField().canonicalString())||e.Ee.push(new fl(xt.keyField(),i))}return e.Ee}function ur(r){const e=Te(r);return e.Ie||(e.Ie=VC(e,tl(r))),e.Ie}function VC(r,e){if(r.limitType==="F")return $y(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new fl(o.field,l)}));const t=r.endAt?new vc(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new vc(r.startAt.position,r.startAt.inclusive):null;return $y(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function df(r,e){const t=r.filters.concat([e]);return new Go(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function OC(r,e){const t=r.explicitOrderBy.concat([e]);return new Go(r.path,r.collectionGroup,t,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function ff(r,e,t){return new Go(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Uc(r,e){return Yf(ur(r),ur(e))&&r.limitType===e.limitType}function pE(r){return`${Qf(ur(r))}|lt:${r.limitType}`}function So(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>hE(o))).join(", ")}]`),Mc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Mo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Mo(o))).join(",")),`Target(${i})`})(ur(r))}; limitType=${r.limitType})`}function jc(r,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):de.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(r,e)&&(function(i,o){for(const l of tl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,g){const y=zy(h,f,g);return h.inclusive?y<=0:y<0})(i.startAt,tl(i),o)||i.endAt&&!(function(h,f,g){const y=zy(h,f,g);return h.inclusive?y>=0:y>0})(i.endAt,tl(i),o))})(r,e)}function LC(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function mE(r){return(e,t)=>{let i=!1;for(const o of tl(r)){const l=bC(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function bC(r,e,t){const i=r.field.isKeyField()?de.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),y=f.data.field(l);return g!==null&&y!==null?bo(g,y):_e(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return _e(19790,{direction:r.dir})}}/**
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
 */class Ns{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Bi(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return Xv(this.inner)}size(){return this.innerSize}}/**
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
 */const MC=new tt(de.comparator);function Br(){return MC}const gE=new tt(de.comparator);function Ya(...r){let e=gE;for(const t of r)e=e.insert(t.key,t);return e}function yE(r){let e=gE;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function _s(){return nl()}function _E(){return nl()}function nl(){return new Ns((r=>r.toString()),((r,e)=>r.isEqual(e)))}const FC=new tt(de.comparator),UC=new vt(de.comparator);function De(...r){let e=UC;for(const t of r)e=e.add(t);return e}const jC=new vt(xe);function zC(){return jC}/**
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
 */function Xf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gc(e)?"-0":e}}function vE(r){return{integerValue:""+r}}function BC(r,e){return dC(e)?vE(e):Xf(r,e)}/**
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
 */class zc{constructor(){this._=void 0}}function $C(r,e,t){return r instanceof pl?(function(o,l){const h={fields:{[tE]:{stringValue:eE},[rE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Kf(l)&&(l=Fc(l)),l&&(h.fields[nE]=l),{mapValue:h}})(t,e):r instanceof ml?wE(r,e):r instanceof gl?TE(r,e):(function(o,l){const h=EE(o,l),f=Hy(h)+Hy(o.Ae);return uf(h)&&uf(o.Ae)?vE(f):Xf(o.serializer,f)})(r,e)}function WC(r,e,t){return r instanceof ml?wE(r,e):r instanceof gl?TE(r,e):t}function EE(r,e){return r instanceof Ec?(function(i){return uf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class pl extends zc{}class ml extends zc{constructor(e){super(),this.elements=e}}function wE(r,e){const t=IE(e);for(const i of r.elements)t.some((o=>fr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class gl extends zc{constructor(e){super(),this.elements=e}}function TE(r,e){let t=IE(e);for(const i of r.elements)t=t.filter((o=>!fr(o,i)));return{arrayValue:{values:t}}}class Ec extends zc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Hy(r){return at(r.integerValue||r.doubleValue)}function IE(r){return Gf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class HC{constructor(e,t){this.field=e,this.transform=t}}function qC(r,e){return r.field.isEqual(e.field)&&(function(i,o){return i instanceof ml&&o instanceof ml||i instanceof gl&&o instanceof gl?Lo(i.elements,o.elements,fr):i instanceof Ec&&o instanceof Ec?fr(i.Ae,o.Ae):i instanceof pl&&o instanceof pl})(r.transform,e.transform)}class KC{constructor(e,t){this.version=e,this.transformResults=t}}class rn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new rn}static exists(e){return new rn(void 0,e)}static updateTime(e){return new rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ic(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Bc{}function SE(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new $c(r.key,rn.none()):new Il(r.key,r.data,rn.none());{const t=r.data,i=nn.empty();let o=new vt(xt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new $i(r.key,i,new pn(o.toArray()),rn.none())}}function GC(r,e,t){r instanceof Il?(function(o,l,h){const f=o.value.clone(),g=Ky(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof $i?(function(o,l,h){if(!ic(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=Ky(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(AE(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function rl(r,e,t,i){return r instanceof Il?(function(l,h,f,g){if(!ic(l.precondition,h))return f;const y=l.value.clone(),E=Gy(l.fieldTransforms,g,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null})(r,e,t,i):r instanceof $i?(function(l,h,f,g){if(!ic(l.precondition,h))return f;const y=Gy(l.fieldTransforms,g,h),E=h.data;return E.setAll(AE(l)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((w=>w.field)))})(r,e,t,i):(function(l,h,f){return ic(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function QC(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),l=EE(i.transform,o||null);l!=null&&(t===null&&(t=nn.empty()),t.set(i.field,l))}return t||null}function qy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Lo(i,o,((l,h)=>qC(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Il extends Bc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class $i extends Bc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function AE(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function Ky(r,e,t){const i=new Map;je(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,WC(h,f,t[o]))}return i}function Gy(r,e,t){const i=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);i.set(o.field,$C(l,h,e))}return i}class $c extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YC extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class JC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&GC(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=rl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=rl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=_E();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=SE(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ee.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),De())}isEqual(e){return this.batchId===e.batchId&&Lo(this.mutations,e.mutations,((t,i)=>qy(t,i)))&&Lo(this.baseMutations,e.baseMutations,((t,i)=>qy(t,i)))}}class Zf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){je(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return FC})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Zf(e,t,i,o)}}/**
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
 */class XC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ZC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ft,Oe;function eP(r){switch(r){case $.OK:return _e(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return _e(15467,{code:r})}}function RE(r){if(r===void 0)return zr("GRPC error has no .code"),$.UNKNOWN;switch(r){case ft.OK:return $.OK;case ft.CANCELLED:return $.CANCELLED;case ft.UNKNOWN:return $.UNKNOWN;case ft.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ft.INTERNAL:return $.INTERNAL;case ft.UNAVAILABLE:return $.UNAVAILABLE;case ft.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ft.NOT_FOUND:return $.NOT_FOUND;case ft.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ft.ABORTED:return $.ABORTED;case ft.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ft.DATA_LOSS:return $.DATA_LOSS;default:return _e(39323,{code:r})}}(Oe=ft||(ft={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function tP(){return new TextEncoder}/**
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
 */const nP=new xi([4294967295,4294967295],0);function Qy(r){const e=tP().encode(r),t=new zv;return t.update(e),new Uint8Array(t.digest())}function Yy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new xi([t,i],0),new xi([o,l],0)]}class ep{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ja(`Invalid padding: ${t}`);if(i<0)throw new Ja(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ja(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ja(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=xi.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(xi.fromNumber(i)));return o.compare(nP)===1&&(o=new xi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Qy(e),[i,o]=Yy(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);if(!this.we(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new ep(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.ge===0)return;const t=Qy(e),[i,o]=Yy(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Wc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Sl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Wc(Ee.min(),o,new tt(xe),Br(),De())}}class Sl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Sl(i,t,De(),De(),De())}}/**
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
 */class sc{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class CE{constructor(e,t){this.targetId=e,this.Ce=t}}class PE{constructor(e,t,i=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Jy{constructor(){this.ve=0,this.Fe=Xy(),this.Me=Dt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=De(),t=De(),i=De();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:_e(38017,{changeType:l})}})),new Sl(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=Xy()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class rP{constructor(e){this.Ge=e,this.ze=new Map,this.je=Br(),this.Je=Gu(),this.He=Gu(),this.Ze=new tt(xe)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(hf(l))if(i===0){const h=new de(l.path);this.et(t,h,zt.newNoDocument(h,Ee.min()))}else je(i===1,20013,{expectedCount:i});else{const h=this._t(t);if(h!==i){const f=this.ut(e),g=f?this.ct(f,e,h):1;if(g!==0){this.it(t);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=bi(i).toUint8Array()}catch(g){if(g instanceof Zv)return Ss("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new ep(h,o,l)}catch(g){return Ss(g instanceof Ja?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.Ge.ht(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const f=this.ot(h);if(f){if(l.current&&hf(f.target)){const g=new de(f.target.path);this.Et(g).has(h)||this.It(h,g)||this.et(h,g,zt.newNoDocument(g,e))}l.Be&&(t.set(h,l.ke()),l.qe())}}));let i=De();this.He.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new Wc(e,t,this.Ze,this.je,i);return this.je=Br(),this.Je=Gu(),this.He=Gu(),this.Ze=new tt(xe),o}Ye(e,t){if(!this.rt(e))return;const i=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.It(e,t)?o.Ke(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Jy,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new vt(xe),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new vt(xe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Jy),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Gu(){return new tt(de.comparator)}function Xy(){return new tt(de.comparator)}const iP={asc:"ASCENDING",desc:"DESCENDING"},sP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oP={and:"AND",or:"OR"};class aP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function pf(r,e){return r.useProto3Json||Mc(e)?e:{value:e}}function wc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kE(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function lP(r,e){return wc(r,e.toTimestamp())}function cr(r){return je(!!r,49232),Ee.fromTimestamp((function(t){const i=Li(t);return new Ye(i.seconds,i.nanos)})(r))}function tp(r,e){return mf(r,e).canonicalString()}function mf(r,e){const t=(function(o){return new qe(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function NE(r){const e=qe.fromString(r);return je(LE(e),10190,{key:e.toString()}),e}function gf(r,e){return tp(r.databaseId,e.path)}function jd(r,e){const t=NE(e);if(t.get(1)!==r.databaseId.projectId)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new de(DE(t))}function xE(r,e){return tp(r.databaseId,e)}function uP(r){const e=NE(r);return e.length===4?qe.emptyPath():DE(e)}function yf(r){return new qe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function DE(r){return je(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Zy(r,e,t){return{name:gf(r,e),fields:t.value.mapValue.fields}}function cP(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:_e(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,E){return y.useProto3Json?(je(E===void 0||typeof E=="string",58123),Dt.fromBase64String(E||"")):(je(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Dt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(y){const E=y.code===void 0?$.UNKNOWN:RE(y.code);return new te(E,y.message||"")})(h);t=new PE(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=jd(r,i.document.name),l=cr(i.document.updateTime),h=i.document.createTime?cr(i.document.createTime):Ee.min(),f=new nn({mapValue:{fields:i.document.fields}}),g=zt.newFoundDocument(o,l,h,f),y=i.targetIds||[],E=i.removedTargetIds||[];t=new sc(y,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=jd(r,i.document),l=i.readTime?cr(i.readTime):Ee.min(),h=zt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new sc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=jd(r,i.document),l=i.removedTargetIds||[];t=new sc([],l,o,null)}else{if(!("filter"in e))return _e(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new ZC(o,l),f=i.targetId;t=new CE(f,h)}}return t}function hP(r,e){let t;if(e instanceof Il)t={update:Zy(r,e.key,e.value)};else if(e instanceof $c)t={delete:gf(r,e.key)};else if(e instanceof $i)t={update:Zy(r,e.key,e.data),updateMask:EP(e.fieldMask)};else{if(!(e instanceof YC))return _e(16599,{dt:e.type});t={verify:gf(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof pl)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof ml)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof gl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Ec)return{fieldPath:h.field.canonicalString(),increment:f.Ae};throw _e(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:lP(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e(27497)})(r,e.precondition)),t}function dP(r,e){return r&&r.length>0?(je(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?cr(o.updateTime):cr(l);return h.isEqual(Ee.min())&&(h=cr(l)),new KC(h,o.transformResults||[])})(t,e)))):[]}function fP(r,e){return{documents:[xE(r,e.path)]}}function pP(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=xE(r,o);const l=(function(y){if(y.length!==0)return OE(jn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(y){if(y.length!==0)return y.map((E=>(function(R){return{field:Ao(R.field),direction:yP(R.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=pf(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function mP(r){let e=uP(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){je(i===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(w){const R=VE(w);return R instanceof jn&&uE(R)?R.getFilters():[R]})(t.where));let h=[];t.orderBy&&(h=(function(w){return w.map((R=>(function(W){return new fl(Ro(W.field),(function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(R)))})(t.orderBy));let f=null;t.limit&&(f=(function(w){let R;return R=typeof w=="object"?w.value:w,Mc(R)?null:R})(t.limit));let g=null;t.startAt&&(g=(function(w){const R=!!w.before,z=w.values||[];return new vc(z,R)})(t.startAt));let y=null;return t.endAt&&(y=(function(w){const R=!w.before,z=w.values||[];return new vc(z,R)})(t.endAt)),xC(e,o,h,l,f,"F",g,y)}function gP(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function VE(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Ro(t.unaryFilter.field);return pt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Ro(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Ro(t.unaryFilter.field);return pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ro(t.unaryFilter.field);return pt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(r):r.fieldFilter!==void 0?(function(t){return pt.create(Ro(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return jn.create(t.compositeFilter.filters.map((i=>VE(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(r):_e(30097,{filter:r})}function yP(r){return iP[r]}function _P(r){return sP[r]}function vP(r){return oP[r]}function Ao(r){return{fieldPath:r.canonicalString()}}function Ro(r){return xt.fromServerFormat(r.fieldPath)}function OE(r){return r instanceof pt?(function(t){if(t.op==="=="){if(jy(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NAN"}};if(Uy(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(jy(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NOT_NAN"}};if(Uy(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ao(t.field),op:_P(t.op),value:t.value}}})(r):r instanceof jn?(function(t){const i=t.getFilters().map((o=>OE(o)));return i.length===1?i[0]:{compositeFilter:{op:vP(t.op),filters:i}}})(r):_e(54877,{filter:r})}function EP(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function LE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function bE(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
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
 */class Ri{constructor(e,t,i,o,l=Ee.min(),h=Ee.min(),f=Dt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new Ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class wP{constructor(e){this.yt=e}}function TP(r){const e=mP({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ff(e,e.limit,"L"):e}/**
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
 */class IP{constructor(){this.bn=new SP}addToCollectionParentIndex(e,t){return this.bn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(Oi.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(Oi.min())}updateCollectionGroup(e,t,i){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class SP{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new vt(qe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new vt(qe.comparator)).toArray()}}/**
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
 */const e_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ME=41943040;class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(ME,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
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
 */class Fo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Fo(0)}static ar(){return new Fo(-1)}}/**
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
 */const t_="LruGarbageCollector",AP=1048576;function n_([r,e],[t,i]){const o=xe(r,t);return o===0?xe(e,i):o}class RP{constructor(e){this.Pr=e,this.buffer=new vt(n_),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();n_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class CP{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ie(t_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ko(t)?ie(t_,"Ignoring IndexedDB error during garbage collection: ",t):await qo(t)}await this.Ar(3e5)}))}}class PP{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return q.resolve(bc.ce);const i=new RP(t);return this.Vr.forEachTarget(e,(o=>i.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>i.Ir(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(e_)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),e_):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,o,l,h,f,g,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,h=Date.now(),this.nthSequenceNumber(e,o)))).next((w=>(i=w,f=Date.now(),this.removeTargets(e,i,t)))).next((w=>(l=w,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((w=>(y=Date.now(),Io()<=Ne.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${w} documents in `+(y-g)+`ms
Total Duration: ${y-E}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:w}))))}}function kP(r,e){return new PP(r,e)}/**
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
 */class NP{constructor(){this.changes=new Ns((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?q.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class xP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class DP{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&rl(i.mutation,o,pn.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,De()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=De()){const o=_s();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=Ya();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=_s();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,De())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=Br();const h=nl(),f=(function(){return nl()})();return t.forEach(((g,y)=>{const E=i.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof $i)?l=l.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),rl(E.mutation,y,E.mutation.getFieldMask(),Ye.now())):h.set(y.key,pn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((y,E)=>h.set(y,E))),t.forEach(((y,E)=>f.set(y,new xP(E,h.get(y)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=nl();let o=new tt(((h,f)=>h-f)),l=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const y=t.get(g);if(y===null)return;let E=i.get(g)||pn.empty();E=f.applyToLocalView(y,E),i.set(g,E);const w=(o.get(f.batchId)||De()).add(g);o=o.insert(f.batchId,w)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),y=g.key,E=g.value,w=_E();E.forEach((R=>{if(!l.has(R)){const z=SE(t.get(R),i.get(R));z!==null&&w.set(R,z),l=l.add(R)}})),h.push(this.documentOverlayCache.saveOverlays(e,y,w))}return q.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return DC(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):fE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):q.resolve(_s());let f=ul,g=l;return h.next((y=>q.forEach(y,((E,w)=>(f<w.largestBatchId&&(f=w.largestBatchId),l.get(E)?q.resolve():this.remoteDocumentCache.getEntry(e,E).next((R=>{g=g.insert(E,R)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,g,y,De()))).next((E=>({batchId:f,changes:yE(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((i=>{let o=Ya();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Ya();return this.indexManager.getCollectionParents(e,l).next((f=>q.forEach(f,(g=>{const y=(function(w,R){return new Go(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((E=>{E.forEach(((w,R)=>{h=h.insert(w,R)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((g,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,zt.newInvalidDocument(E)))}));let f=Ya();return h.forEach(((g,y)=>{const E=l.get(g);E!==void 0&&rl(E.mutation,y,pn.empty(),Ye.now()),jc(t,y)&&(f=f.insert(g,y))})),f}))}}/**
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
 */class VP{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return q.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:cr(o.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:TP(o.bundledQuery),readTime:cr(o.readTime)}})(t)),q.resolve()}}/**
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
 */class OP{constructor(){this.overlays=new tt(de.comparator),this.Lr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const i=_s();return q.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.St(e,t,l)})),q.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Lr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(i)),q.resolve()}getOverlaysForCollection(e,t,i){const o=_s(),l=t.length+1,h=new de(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,y=g.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new tt(((y,E)=>y-E));const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let E=l.get(y.largestBatchId);E===null&&(E=_s(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const f=_s(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,E)=>f.set(y,E))),!(f.size()>=o)););return q.resolve(f)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(i.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new XC(t,i));let l=this.Lr.get(t);l===void 0&&(l=De(),this.Lr.set(t,l)),this.Lr.set(t,l.add(i.key))}}/**
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
 */class LP{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
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
 */class np{constructor(){this.kr=new vt(St.qr),this.Kr=new vt(St.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new St(e,t);this.kr=this.kr.add(i),this.Kr=this.Kr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new St(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new de(new qe([])),i=new St(t,e),o=new St(t,e+1),l=[];return this.Kr.forEachInRange([i,o],(h=>{this.Wr(h),l.push(h.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new de(new qe([])),i=new St(t,e),o=new St(t,e+1);let l=De();return this.Kr.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new St(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return de.comparator(e.key,t.key)||xe(e.Jr,t.Jr)}static Ur(e,t){return xe(e.Jr,t.Jr)||de.comparator(e.key,t.key)}}/**
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
 */class bP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new vt(St.qr)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new JC(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Hr=this.Hr.add(new St(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?qf:this.Yn-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.Hr.forEachInRange([i,o],(h=>{const f=this.Zr(h.Jr);l.push(f)})),q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new vt(xe);return t.forEach((o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([l,h],(f=>{i=i.add(f.Jr)}))})),q.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;de.isDocumentKey(l)||(l=l.child(""));const h=new St(new de(l),0);let f=new vt(xe);return this.Hr.forEachWhile((g=>{const y=g.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(g.Jr)),!0)}),h),q.resolve(this.Yr(f))}Yr(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){je(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Hr;return q.forEach(t.mutations,(o=>{const l=new St(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=i}))}nr(e){}containsKey(e,t){const i=new St(t,0),o=this.Hr.firstAfterOrEqual(i);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class MP{constructor(e){this.ti=e,this.docs=(function(){return new tt(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return q.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=Br();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))})),q.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Br();const h=t.path,f=new de(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:y,value:{document:E}}=g.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||lC(aC(E),i)<=0||(o.has(E.key)||jc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return q.resolve(l)}getAllFromCollectionGroup(e,t,i,o){_e(9500)}ni(e,t){return q.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new FP(this)}getSize(e){return q.resolve(this.size)}}class FP extends NP{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(i)})),q.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class UP{constructor(e){this.persistence=e,this.ri=new Ns((t=>Qf(t)),Yf),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.ii=0,this.si=new np,this.targetCount=0,this.oi=Fo._r()}forEachTarget(e,t){return this.ri.forEach(((i,o)=>t(o))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),q.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Fo(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.lr(t),q.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ri.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ri.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),q.waitFor(l).next((()=>o))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return q.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),q.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return q.resolve(i)}containsKey(e,t){return q.resolve(this.si.containsKey(t))}}/**
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
 */class FE{constructor(e,t){this._i={},this.overlays={},this.ai=new bc(0),this.ui=!1,this.ui=!0,this.ci=new LP,this.referenceDelegate=e(this),this.li=new UP(this),this.indexManager=new IP,this.remoteDocumentCache=(function(o){return new MP(o)})((i=>this.referenceDelegate.hi(i))),this.serializer=new wP(t),this.Pi=new VP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new OP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new bP(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){ie("MemoryPersistence","Starting transaction:",e);const o=new jP(this.ai.next());return this.referenceDelegate.Ti(),i(o).next((l=>this.referenceDelegate.Ei(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ii(e,t){return q.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class jP extends cC{constructor(e){super(),this.currentSequenceNumber=e}}class rp{constructor(e){this.persistence=e,this.Ri=new np,this.Ai=null}static Vi(e){return new rp(e)}get di(){if(this.Ai)return this.Ai;throw _e(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),q.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.di,(i=>{const o=de.fromPath(i);return this.mi(e,o).next((l=>{l||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return q.or([()=>q.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Tc{constructor(e,t){this.persistence=e,this.fi=new Ns((i=>fC(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=kP(this,t)}static Vi(e,t){return new Tc(e,t)}Ti(){}Ei(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return q.forEach(this.fi,((i,o)=>this.wr(e,i,o).next((l=>l?q.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((f=>{f||(i++,l.removeEntry(h,Ee.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),q.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),q.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=nc(e.data.value)),t}wr(e,t,i){return q.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return q.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ip{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Ts=i,this.Es=o}static Is(e,t){let i=De(),o=De();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new ip(e,t.fromCache,i,o)}}/**
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
 */class zP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class BP{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return pI()?8:hC(Bt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.gs(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ps(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new zP;return this.ys(e,t,h).next((f=>{if(l.result=f,this.As)return this.ws(e,t,h,f.size)}))})).next((()=>l.result))}ws(e,t,i,o){return i.documentReadCount<this.Vs?(Io()<=Ne.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",So(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),q.resolve()):(Io()<=Ne.DEBUG&&ie("QueryEngine","Query:",So(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ds*o?(Io()<=Ne.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",So(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ur(t))):q.resolve())}gs(e,t){if(Wy(t))return q.resolve(null);let i=ur(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=ff(t,null,"F"),i=ur(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=De(...l);return this.fs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const y=this.Ss(t,f);return this.bs(t,y,h,g.readTime)?this.gs(e,ff(t,null,"F")):this.Ds(e,y,t,g)}))))})))))}ps(e,t,i,o){return Wy(t)||o.isEqual(Ee.min())?q.resolve(null):this.fs.getDocuments(e,i).next((l=>{const h=this.Ss(t,l);return this.bs(t,h,i,o)?q.resolve(null):(Io()<=Ne.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),So(t)),this.Ds(e,h,t,oC(o,ul)).next((f=>f)))}))}Ss(e,t){let i=new vt(mE(e));return t.forEach(((o,l)=>{jc(e,l)&&(i=i.add(l))})),i}bs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,i){return Io()<=Ne.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",So(t)),this.fs.getDocumentsMatchingQuery(e,t,Oi.min(),i)}Ds(e,t,i,o){return this.fs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const sp="LocalStore",$P=3e8;class WP{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new tt(xe),this.Fs=new Ns((l=>Qf(l)),Yf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DP(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function HP(r,e,t,i){return new WP(r,e,t,i)}async function UE(r,e){const t=Te(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let g=De();for(const y of o){h.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}for(const y of l){f.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(i,g).next((y=>({Ns:y,removedBatchIds:h,addedBatchIds:f})))}))}))}function qP(r,e){const t=Te(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(f,g,y,E){const w=y.batch,R=w.keys();let z=q.resolve();return R.forEach((W=>{z=z.next((()=>E.getEntry(g,W))).next((H=>{const U=y.docVersions.get(W);je(U!==null,48541),H.version.compareTo(U)<0&&(w.applyToRemoteDocument(H,y),H.isValidDocument()&&(H.setReadTime(y.commitVersion),E.addEntry(H)))}))})),z.next((()=>f.mutationQueue.removeMutationBatch(g,w)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=De();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(g=g.add(f.batch.mutations[y].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function jE(r){const e=Te(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function KP(r,e){const t=Te(r),i=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const f=[];e.targetChanges.forEach(((E,w)=>{const R=o.get(w);if(!R)return;f.push(t.li.removeMatchingKeys(l,E.removedDocuments,w).next((()=>t.li.addMatchingKeys(l,E.addedDocuments,w))));let z=R.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(w)!==null?z=z.withResumeToken(Dt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):E.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(E.resumeToken,i)),o=o.insert(w,z),(function(H,U,re){return H.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=$P?!0:re.addedDocuments.size+re.modifiedDocuments.size+re.removedDocuments.size>0})(R,z,E)&&f.push(t.li.updateTargetData(l,z))}));let g=Br(),y=De();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(GP(l,h,e.documentUpdates).next((E=>{g=E.Bs,y=E.Ls}))),!i.isEqual(Ee.min())){const E=t.li.getLastRemoteSnapshotVersion(l).next((w=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(E)}return q.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,y))).next((()=>g))})).then((l=>(t.vs=o,l)))}function GP(r,e,t){let i=De(),o=De();return t.forEach((l=>i=i.add(l))),e.getEntries(r,i).next((l=>{let h=Br();return t.forEach(((f,g)=>{const y=l.get(f);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Ee.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):ie(sp,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",g.version)})),{Bs:h,Ls:o}}))}function QP(r,e){const t=Te(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=qf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function YP(r,e){const t=Te(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.li.getTargetData(i,e).next((l=>l?(o=l,q.resolve(o)):t.li.allocateTargetId(i).next((h=>(o=new Ri(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.vs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function _f(r,e,t){const i=Te(r),o=i.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Ko(h))throw h;ie(sp,`Failed to update sequence numbers for target ${e}: ${h}`)}i.vs=i.vs.remove(e),i.Fs.delete(o.target)}function r_(r,e,t){const i=Te(r);let o=Ee.min(),l=De();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,y,E){const w=Te(g),R=w.Fs.get(E);return R!==void 0?q.resolve(w.vs.get(R)):w.li.getTargetData(y,E)})(i,h,ur(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?l:De()))).next((f=>(JP(i,LC(e),f),{documents:f,ks:l})))))}function JP(r,e,t){let i=r.Ms.get(e)||Ee.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),r.Ms.set(e,i)}class i_{constructor(){this.activeTargetIds=zC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XP{constructor(){this.vo=new i_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new i_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ZP{Mo(e){}shutdown(){}}/**
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
 */const s_="ConnectivityMonitor";class o_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ie(s_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ie(s_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qu=null;function vf(){return Qu===null?Qu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Qu++,"0x"+Qu.toString(16)}/**
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
 */const zd="RestConnection",ek={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class tk{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.$o=this.databaseId.database===yc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const h=vf(),f=this.Qo(e,t.toUriEncodedString());ie(zd,`Sending RPC '${e}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,l);const{host:y}=new URL(f),E=Bo(y);return this.zo(e,f,g,i,E).then((w=>(ie(zd,`Received RPC '${e}' ${h}: `,w),w)),(w=>{throw Ss(zd,`RPC '${e}' ${h} failed with error: `,w,"url: ",f,"request:",i),w}))}jo(e,t,i,o,l,h){return this.Wo(e,t,i,o,l)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ho})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const i=ek[e];let o=`${this.Ko}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class nk{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ut="WebChannelConnection",Ha=(r,e,t)=>{r.listen(e,(i=>{try{t(i)}catch(o){setTimeout((()=>{throw o}),0)}}))};class xo extends tk{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!xo.c_){const e=Hv();Ha(e,Wv.STAT_EVENT,(t=>{t.stat===of.PROXY?ie(Ut,"STAT_EVENT: detected buffering proxy"):t.stat===of.NOPROXY&&ie(Ut,"STAT_EVENT: detected no buffering proxy")})),xo.c_=!0}}zo(e,t,i,o,l){const h=vf();return new Promise(((f,g)=>{const y=new Bv;y.setWithCredentials(!0),y.listenOnce($v.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case tc.NO_ERROR:const w=y.getResponseJson();ie(Ut,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(w)),f(w);break;case tc.TIMEOUT:ie(Ut,`RPC '${e}' ${h} timed out`),g(new te($.DEADLINE_EXCEEDED,"Request time out"));break;case tc.HTTP_ERROR:const R=y.getStatus();if(ie(Ut,`RPC '${e}' ${h} failed with status:`,R,"response text:",y.getResponseText()),R>0){let z=y.getResponseJson();Array.isArray(z)&&(z=z[0]);const W=z==null?void 0:z.error;if(W&&W.status&&W.message){const H=(function(re){const he=re.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(he)>=0?he:$.UNKNOWN})(W.status);g(new te(H,W.message))}else g(new te($.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new te($.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:h,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{ie(Ut,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);ie(Ut,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",E,i,15)}))}T_(e,t,i){const o=vf(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,t,i),f.encodeInitMessageHeaders=!0;const y=l.join("");ie(Ut,`Creating RPC '${e}' stream ${o}: ${y}`,f);const E=h.createWebChannel(y,f);this.E_(E);let w=!1,R=!1;const z=new nk({Jo:W=>{R?ie(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(w||(ie(Ut,`Opening RPC '${e}' stream ${o} transport.`),E.open(),w=!0),ie(Ut,`RPC '${e}' stream ${o} sending:`,W),E.send(W))},Ho:()=>E.close()});return Ha(E,Qa.EventType.OPEN,(()=>{R||(ie(Ut,`RPC '${e}' stream ${o} transport opened.`),z.i_())})),Ha(E,Qa.EventType.CLOSE,(()=>{R||(R=!0,ie(Ut,`RPC '${e}' stream ${o} transport closed`),z.o_(),this.I_(E))})),Ha(E,Qa.EventType.ERROR,(W=>{R||(R=!0,Ss(Ut,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),z.o_(new te($.UNAVAILABLE,"The operation could not be completed")))})),Ha(E,Qa.EventType.MESSAGE,(W=>{var H;if(!R){const U=W.data[0];je(!!U,16349);const re=U,he=(re==null?void 0:re.error)||((H=re[0])==null?void 0:H.error);if(he){ie(Ut,`RPC '${e}' stream ${o} received error:`,he);const ue=he.status;let ge=(function(k){const S=ft[k];if(S!==void 0)return RE(S)})(ue),Ae=he.message;ue==="NOT_FOUND"&&Ae.includes("database")&&Ae.includes("does not exist")&&Ae.includes(this.databaseId.database)&&Ss(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ge===void 0&&(ge=$.INTERNAL,Ae="Unknown error status: "+ue+" with message "+he.message),R=!0,z.o_(new te(ge,Ae)),E.close()}else ie(Ut,`RPC '${e}' stream ${o} received:`,U),z.__(U)}})),xo.u_(),setTimeout((()=>{z.s_()}),0),z}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return qv()}}/**
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
 */function rk(r){return new xo(r)}function Bd(){return typeof document<"u"?document:null}/**
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
 */function Hc(r){return new aP(r,!0)}/**
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
 */xo.c_=!1;class zE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const a_="PersistentStream";class BE{constructor(e,t,i,o,l,h,f,g){this.Ci=e,this.S_=i,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new zE(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(zr(t.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new te($.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ie(a_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(ie(a_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ik extends BE{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=cP(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ee.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?cr(h.readTime):Ee.min()})(e);return this.listener.H_(t,i)}Z_(e){const t={};t.database=yf(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=hf(g)?{documents:fP(l,g)}:{query:pP(l,g).ft},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=kE(l,h.resumeToken);const y=pf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(Ee.min())>0){f.readTime=wc(l,h.snapshotVersion.toTimestamp());const y=pf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=gP(this.serializer,e);i&&(t.labels=i),this.q_(t)}X_(e){const t={};t.database=yf(this.serializer),t.removeTarget=e,this.q_(t)}}class sk extends BE{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=dP(e.writeResults,e.commitTime),i=cr(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=yf(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>hP(this.serializer,i)))};this.q_(t)}}/**
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
 */class ok{}class ak extends ok{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,mf(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new te($.UNKNOWN,l.toString())}))}jo(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.jo(e,mf(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new te($.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function lk(r,e,t,i){return new ak(r,e,t,i)}class uk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(zr(t),this.aa=!1):ie("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const As="RemoteStore";class ck{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((h=>{i.enqueueAndForget((async()=>{xs(this)&&(ie(As,"Restarting streams for network reachability change."),await(async function(g){const y=Te(g);y.Ia.add(4),await Al(y),y.Va.set("Unknown"),y.Ia.delete(4),await qc(y)})(this))}))})),this.Va=new uk(i,o)}}async function qc(r){if(xs(r))for(const e of r.Ra)await e(!0)}async function Al(r){for(const e of r.Ra)await e(!1)}function $E(r,e){const t=Te(r);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),up(t)?lp(t):Qo(t).O_()&&ap(t,e))}function op(r,e){const t=Te(r),i=Qo(t);t.Ea.delete(e),i.O_()&&WE(t,e),t.Ea.size===0&&(i.O_()?i.L_():xs(t)&&t.Va.set("Unknown"))}function ap(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Qo(r).Z_(e)}function WE(r,e){r.da.$e(e),Qo(r).X_(e)}function lp(r){r.da=new rP({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ea.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Qo(r).start(),r.Va.ua()}function up(r){return xs(r)&&!Qo(r).x_()&&r.Ea.size>0}function xs(r){return Te(r).Ia.size===0}function HE(r){r.da=void 0}async function hk(r){r.Va.set("Online")}async function dk(r){r.Ea.forEach(((e,t)=>{ap(r,e)}))}async function fk(r,e){HE(r),up(r)?(r.Va.ha(e),lp(r)):r.Va.set("Unknown")}async function pk(r,e,t){if(r.Va.set("Online"),e instanceof PE&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ea.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ea.delete(f),o.da.removeTarget(f))})(r,e)}catch(i){ie(As,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ic(r,i)}else if(e instanceof sc?r.da.Xe(e):e instanceof CE?r.da.st(e):r.da.tt(e),!t.isEqual(Ee.min()))try{const i=await jE(r.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.da.Tt(h);return f.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.Ea.get(y);E&&l.Ea.set(y,E.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,y)=>{const E=l.Ea.get(g);if(!E)return;l.Ea.set(g,E.withResumeToken(Dt.EMPTY_BYTE_STRING,E.snapshotVersion)),WE(l,g);const w=new Ri(E.target,g,y,E.sequenceNumber);ap(l,w)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(i){ie(As,"Failed to raise snapshot:",i),await Ic(r,i)}}async function Ic(r,e,t){if(!Ko(e))throw e;r.Ia.add(1),await Al(r),r.Va.set("Offline"),t||(t=()=>jE(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ie(As,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await qc(r)}))}function qE(r,e){return e().catch((t=>Ic(r,t,e)))}async function Kc(r){const e=Te(r),t=Fi(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:qf;for(;mk(e);)try{const o=await QP(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,gk(e,o)}catch(o){await Ic(e,o)}KE(e)&&GE(e)}function mk(r){return xs(r)&&r.Ta.length<10}function gk(r,e){r.Ta.push(e);const t=Fi(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function KE(r){return xs(r)&&!Fi(r).x_()&&r.Ta.length>0}function GE(r){Fi(r).start()}async function yk(r){Fi(r).ra()}async function _k(r){const e=Fi(r);for(const t of r.Ta)e.ea(t.mutations)}async function vk(r,e,t){const i=r.Ta.shift(),o=Zf.from(i,e,t);await qE(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Kc(r)}async function Ek(r,e){e&&Fi(r).Y_&&await(async function(i,o){if((function(h){return eP(h)&&h!==$.ABORTED})(o.code)){const l=i.Ta.shift();Fi(i).B_(),await qE(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Kc(i)}})(r,e),KE(r)&&GE(r)}async function l_(r,e){const t=Te(r);t.asyncQueue.verifyOperationInProgress(),ie(As,"RemoteStore received new credentials");const i=xs(t);t.Ia.add(3),await Al(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await qc(t)}async function wk(r,e){const t=Te(r);e?(t.Ia.delete(2),await qc(t)):e||(t.Ia.add(2),await Al(t),t.Va.set("Unknown"))}function Qo(r){return r.ma||(r.ma=(function(t,i,o){const l=Te(t);return l.sa(),new ik(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:hk.bind(null,r),Yo:dk.bind(null,r),t_:fk.bind(null,r),H_:pk.bind(null,r)}),r.Ra.push((async e=>{e?(r.ma.B_(),up(r)?lp(r):r.Va.set("Unknown")):(await r.ma.stop(),HE(r))}))),r.ma}function Fi(r){return r.fa||(r.fa=(function(t,i,o){const l=Te(t);return l.sa(),new sk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:yk.bind(null,r),t_:Ek.bind(null,r),ta:_k.bind(null,r),na:vk.bind(null,r)}),r.Ra.push((async e=>{e?(r.fa.B_(),await Kc(r)):(await r.fa.stop(),r.Ta.length>0&&(ie(As,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class cp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new cp(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hp(r,e){if(zr("AsyncQueue",`${e}: ${r}`),Ko(r))return new te($.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Do{static emptySet(e){return new Do(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||de.comparator(t.key,i.key):(t,i)=>de.comparator(t.key,i.key),this.keyedMap=Ya(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Do)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Do;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class u_{constructor(){this.ga=new tt(de.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Uo{constructor(e,t,i,o,l,h,f,g,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Uo(e,t,Do.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class Tk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Ik{constructor(){this.queries=c_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Te(t),l=o.queries;o.queries=c_(),l.forEach(((h,f)=>{for(const g of f.Sa)g.onError(i)}))})(this,new te($.ABORTED,"Firestore shutting down"))}}function c_(){return new Ns((r=>pE(r)),Uc)}async function QE(r,e){const t=Te(r);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(i=2):(l=new Tk,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=hp(h,`Initialization of query '${So(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&dp(t)}async function YE(r,e){const t=Te(r),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.Sa.indexOf(e);h>=0&&(l.Sa.splice(h,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Sk(r,e){const t=Te(r);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.Sa)f.Fa(o)&&(i=!0);h.wa=o}}i&&dp(t)}function Ak(r,e,t){const i=Te(r),o=i.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);i.queries.delete(e)}function dp(r){r.Ca.forEach((e=>{e.next()}))}var Ef,h_;(h_=Ef||(Ef={})).Ma="default",h_.Cache="cache";class JE{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Uo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ef.Cache}}/**
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
 */class XE{constructor(e){this.key=e}}class ZE{constructor(e){this.key=e}}class Rk{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=De(),this.mutatedKeys=De(),this.eu=mE(e),this.tu=new Do(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new u_,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,w)=>{const R=o.get(E),z=jc(this.query,w)?w:null,W=!!R&&this.mutatedKeys.has(R.key),H=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let U=!1;R&&z?R.data.isEqual(z.data)?W!==H&&(i.track({type:3,doc:z}),U=!0):this.su(R,z)||(i.track({type:2,doc:z}),U=!0,(g&&this.eu(z,g)>0||y&&this.eu(z,y)<0)&&(f=!0)):!R&&z?(i.track({type:0,doc:z}),U=!0):R&&!z&&(i.track({type:1,doc:R}),U=!0,(g||y)&&(f=!0)),U&&(z?(h=h.add(z),l=H?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{tu:h,iu:i,bs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,w)=>(function(z,W){const H=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Vt:U})}};return H(z)-H(W)})(E.type,w.type)||this.eu(E.doc,w.doc))),this.ou(i),o=o??!1;const f=t&&!o?this._u():[],g=this.Ya.size===0&&this.current&&!o?1:0,y=g!==this.Xa;return this.Xa=g,h.length!==0||y?{snapshot:new Uo(this.query,e.tu,l,h,e.mutatedKeys,g===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new u_,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=De(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new ZE(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new XE(i))})),t}cu(e){this.Za=e.ks,this.Ya=De();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Uo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const fp="SyncEngine";class Ck{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Pk{constructor(e){this.key=e,this.hu=!1}}class kk{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Ns((f=>pE(f)),Uc),this.Eu=new Map,this.Iu=new Set,this.Ru=new tt(de.comparator),this.Au=new Map,this.Vu=new np,this.du={},this.mu=new Map,this.fu=Fo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Nk(r,e,t=!0){const i=sw(r);let o;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await ew(i,e,t,!0),o}async function xk(r,e){const t=sw(r);await ew(t,e,!0,!1)}async function ew(r,e,t,i){const o=await YP(r.localStore,ur(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await Dk(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&$E(r.remoteStore,o),f}async function Dk(r,e,t,i,o){r.pu=(w,R,z)=>(async function(H,U,re,he){let ue=U.view.ru(re);ue.bs&&(ue=await r_(H.localStore,U.query,!1).then((({documents:k})=>U.view.ru(k,ue))));const ge=he&&he.targetChanges.get(U.targetId),Ae=he&&he.targetMismatches.get(U.targetId)!=null,Ce=U.view.applyChanges(ue,H.isPrimaryClient,ge,Ae);return f_(H,U.targetId,Ce.au),Ce.snapshot})(r,w,R,z);const l=await r_(r.localStore,e,!0),h=new Rk(e,l.ks),f=h.ru(l.documents),g=Sl.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),y=h.applyChanges(f,r.isPrimaryClient,g);f_(r,t,y.au);const E=new Ck(e,t,h);return r.Tu.set(e,E),r.Eu.has(t)?r.Eu.get(t).push(e):r.Eu.set(t,[e]),y.snapshot}async function Vk(r,e,t){const i=Te(r),o=i.Tu.get(e),l=i.Eu.get(o.targetId);if(l.length>1)return i.Eu.set(o.targetId,l.filter((h=>!Uc(h,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await _f(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&op(i.remoteStore,o.targetId),wf(i,o.targetId)})).catch(qo)):(wf(i,o.targetId),await _f(i.localStore,o.targetId,!0))}async function Ok(r,e){const t=Te(r),i=t.Tu.get(e),o=t.Eu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),op(t.remoteStore,i.targetId))}async function Lk(r,e,t){const i=Bk(r);try{const o=await(function(h,f){const g=Te(h),y=Ye.now(),E=f.reduce(((z,W)=>z.add(W.key)),De());let w,R;return g.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let W=Br(),H=De();return g.xs.getEntries(z,E).next((U=>{W=U,W.forEach(((re,he)=>{he.isValidDocument()||(H=H.add(re))}))})).next((()=>g.localDocuments.getOverlayedDocuments(z,W))).next((U=>{w=U;const re=[];for(const he of f){const ue=QC(he,w.get(he.key).overlayedDocument);ue!=null&&re.push(new $i(he.key,ue,oE(ue.value.mapValue),rn.exists(!0)))}return g.mutationQueue.addMutationBatch(z,y,re,f)})).next((U=>{R=U;const re=U.applyToLocalDocumentSet(w,H);return g.documentOverlayCache.saveOverlays(z,U.batchId,re)}))})).then((()=>({batchId:R.batchId,changes:yE(w)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let y=h.du[h.currentUser.toKey()];y||(y=new tt(xe)),y=y.insert(f,g),h.du[h.currentUser.toKey()]=y})(i,o.batchId,t),await Rl(i,o.changes),await Kc(i.remoteStore)}catch(o){const l=hp(o,"Failed to persist write");t.reject(l)}}async function tw(r,e){const t=Te(r);try{const i=await KP(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?je(h.hu,14607):o.removedDocuments.size>0&&(je(h.hu,42227),h.hu=!1))})),await Rl(t,i,e)}catch(i){await qo(i)}}function d_(r,e,t){const i=Te(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Te(h);g.onlineState=f;let y=!1;g.queries.forEach(((E,w)=>{for(const R of w.Sa)R.va(f)&&(y=!0)})),y&&dp(g)})(i.eventManager,e),o.length&&i.Pu.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function bk(r,e,t){const i=Te(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),l=o&&o.key;if(l){let h=new tt(de.comparator);h=h.insert(l,zt.newNoDocument(l,Ee.min()));const f=De().add(l),g=new Wc(Ee.min(),new Map,new tt(xe),h,f);await tw(i,g),i.Ru=i.Ru.remove(l),i.Au.delete(e),pp(i)}else await _f(i.localStore,e,!1).then((()=>wf(i,e,t))).catch(qo)}async function Mk(r,e){const t=Te(r),i=e.batch.batchId;try{const o=await qP(t.localStore,e);rw(t,i,null),nw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Rl(t,o)}catch(o){await qo(o)}}async function Fk(r,e,t){const i=Te(r);try{const o=await(function(h,f){const g=Te(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let E;return g.mutationQueue.lookupMutationBatch(y,f).next((w=>(je(w!==null,37113),E=w.keys(),g.mutationQueue.removeMutationBatch(y,w)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,E,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E))).next((()=>g.localDocuments.getDocuments(y,E)))}))})(i.localStore,e);rw(i,e,t),nw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Rl(i,o)}catch(o){await qo(o)}}function nw(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function rw(r,e,t){const i=Te(r);let o=i.du[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.du[i.currentUser.toKey()]=o}}function wf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Eu.get(e))r.Tu.delete(i),t&&r.Pu.yu(i,t);r.Eu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach((i=>{r.Vu.containsKey(i)||iw(r,i)}))}function iw(r,e){r.Iu.delete(e.path.canonicalString());const t=r.Ru.get(e);t!==null&&(op(r.remoteStore,t),r.Ru=r.Ru.remove(e),r.Au.delete(t),pp(r))}function f_(r,e,t){for(const i of t)i instanceof XE?(r.Vu.addReference(i.key,e),Uk(r,i)):i instanceof ZE?(ie(fp,"Document no longer in limbo: "+i.key),r.Vu.removeReference(i.key,e),r.Vu.containsKey(i.key)||iw(r,i.key)):_e(19791,{wu:i})}function Uk(r,e){const t=e.key,i=t.path.canonicalString();r.Ru.get(t)||r.Iu.has(i)||(ie(fp,"New document in limbo: "+t),r.Iu.add(i),pp(r))}function pp(r){for(;r.Iu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new de(qe.fromString(e)),i=r.fu.next();r.Au.set(i,new Pk(t)),r.Ru=r.Ru.insert(t,i),$E(r.remoteStore,new Ri(ur(Jf(t.path)),i,"TargetPurposeLimboResolution",bc.ce))}}async function Rl(r,e,t){const i=Te(r),o=[],l=[],h=[];i.Tu.isEmpty()||(i.Tu.forEach(((f,g)=>{h.push(i.pu(g,e,t).then((y=>{var E;if((y||t)&&i.isPrimaryClient){const w=y?!y.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:E.current;i.sharedClientState.updateQueryState(g.targetId,w?"current":"not-current")}if(y){o.push(y);const w=ip.Is(g.targetId,y);l.push(w)}})))})),await Promise.all(h),i.Pu.H_(o),await(async function(g,y){const E=Te(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>q.forEach(y,(R=>q.forEach(R.Ts,(z=>E.persistence.referenceDelegate.addReference(w,R.targetId,z))).next((()=>q.forEach(R.Es,(z=>E.persistence.referenceDelegate.removeReference(w,R.targetId,z)))))))))}catch(w){if(!Ko(w))throw w;ie(sp,"Failed to update sequence numbers: "+w)}for(const w of y){const R=w.targetId;if(!w.fromCache){const z=E.vs.get(R),W=z.snapshotVersion,H=z.withLastLimboFreeSnapshotVersion(W);E.vs=E.vs.insert(R,H)}}})(i.localStore,l))}async function jk(r,e){const t=Te(r);if(!t.currentUser.isEqual(e)){ie(fp,"User change. New user:",e.toKey());const i=await UE(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((f=>{f.forEach((g=>{g.reject(new te($.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Rl(t,i.Ns)}}function zk(r,e){const t=Te(r),i=t.Au.get(e);if(i&&i.hu)return De().add(i.key);{let o=De();const l=t.Eu.get(e);if(!l)return o;for(const h of l){const f=t.Tu.get(h);o=o.unionWith(f.view.nu)}return o}}function sw(r){const e=Te(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=tw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bk.bind(null,e),e.Pu.H_=Sk.bind(null,e.eventManager),e.Pu.yu=Ak.bind(null,e.eventManager),e}function Bk(r){const e=Te(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Fk.bind(null,e),e}class Sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return HP(this.persistence,new BP,e.initialUser,this.serializer)}Cu(e){return new FE(rp.Vi,this.serializer)}Du(e){return new XP}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sc.provider={build:()=>new Sc};class $k extends Sc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){je(this.persistence.referenceDelegate instanceof Tc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new CP(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new FE((i=>Tc.Vi(i,t)),this.serializer)}}class Tf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>d_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=jk.bind(null,this.syncEngine),await wk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Ik})()}createDatastore(e){const t=Hc(e.databaseInfo.databaseId),i=rk(e.databaseInfo);return lk(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new ck(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>d_(this.syncEngine,t,0)),(function(){return o_.v()?new o_:new ZP})())}createSyncEngine(e,t){return(function(o,l,h,f,g,y,E){const w=new kk(o,l,h,f,g,y);return E&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Te(o);ie(As,"RemoteStore shutting down."),l.Ia.add(5),await Al(l),l.Aa.shutdown(),l.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Tf.provider={build:()=>new Tf};/**
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
 */class ow{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):zr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ui="FirestoreClient";class Wk{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=Hf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{ie(Ui,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(ie(Ui,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=hp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function $d(r,e){r.asyncQueue.verifyOperationInProgress(),ie(Ui,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async o=>{i.isEqual(o)||(await UE(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function p_(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Hk(r);ie(Ui,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>l_(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,o)=>l_(e.remoteStore,o))),r._onlineComponents=e}async function Hk(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ie(Ui,"Using user provided OfflineComponentProvider");try{await $d(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ss("Error using user provided cache. Falling back to memory cache: "+t),await $d(r,new Sc)}}else ie(Ui,"Using default OfflineComponentProvider"),await $d(r,new $k(void 0));return r._offlineComponents}async function aw(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ie(Ui,"Using user provided OnlineComponentProvider"),await p_(r,r._uninitializedComponentsProvider._online)):(ie(Ui,"Using default OnlineComponentProvider"),await p_(r,new Tf))),r._onlineComponents}function qk(r){return aw(r).then((e=>e.syncEngine))}async function lw(r){const e=await aw(r),t=e.eventManager;return t.onListen=Nk.bind(null,e.syncEngine),t.onUnlisten=Vk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=xk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ok.bind(null,e.syncEngine),t}function Kk(r,e,t={}){const i=new Fr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,y){const E=new ow({next:R=>{E.Nu(),h.enqueueAndForget((()=>YE(l,w)));const z=R.docs.has(f);!z&&R.fromCache?y.reject(new te($.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&R.fromCache&&g&&g.source==="server"?y.reject(new te($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(R)},error:R=>y.reject(R)}),w=new JE(Jf(f.path),E,{includeMetadataChanges:!0,qa:!0});return QE(l,w)})(await lw(r),r.asyncQueue,e,t,i))),i.promise}function Gk(r,e,t={}){const i=new Fr;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,y){const E=new ow({next:R=>{E.Nu(),h.enqueueAndForget((()=>YE(l,w))),R.fromCache&&g.source==="server"?y.reject(new te($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(R)},error:R=>y.reject(R)}),w=new JE(f,E,{includeMetadataChanges:!0,qa:!0});return QE(l,w)})(await lw(r),r.asyncQueue,e,t,i))),i.promise}function Qk(r,e){const t=new Fr;return r.asyncQueue.enqueueAndForget((async()=>Lk(await qk(r),e,t))),t.promise}/**
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
 */function uw(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Yk="ComponentProvider",m_=new Map;function Jk(r,e,t,i,o){return new gC(r,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,uw(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,i)}/**
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
 */const cw="firestore.googleapis.com",g_=!0;class y_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new te($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cw,this.ssl=g_}else this.host=e.host,this.ssl=e.ssl??g_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ME;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<AP)throw new te($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uw(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new y_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new y_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new QR;switch(i.type){case"firstParty":return new ZR(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new te($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=m_.get(t);i&&(ie(Yk,"Removing Datastore"),m_.delete(t),i.terminate())})(this),Promise.resolve()}}function Xk(r,e,t,i={}){var y;r=dr(r,Gc);const o=Bo(e),l=r._getSettings(),h={...l,emulatorOptions:r._getEmulatorOptions()},f=`${e}:${t}`;o&&Df(`https://${f}`),l.host!==cw&&l.host!==f&&Ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:f,ssl:o,emulatorOptions:i};if(!Es(g,h)&&(r._setSettings(g),i.mockUserToken)){let E,w;if(typeof i.mockUserToken=="string")E=i.mockUserToken,w=jt.MOCK_USER;else{E=nv(i.mockUserToken,(y=r._app)==null?void 0:y.options.projectId);const R=i.mockUserToken.sub||i.mockUserToken.user_id;if(!R)throw new te($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new jt(R)}r._authCredentials=new YR(new Gv(E,w))}}/**
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
 */class Ds{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ds(this.firestore,e,this._query)}}class gt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Di(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Tl(t,gt._jsonSchema))return new gt(e,i||null,new de(qe.fromString(t.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:mt("string",gt._jsonSchemaVersion),referencePath:mt("string")};class Di extends Ds{constructor(e,t,i){super(e,t,Jf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new de(e))}withConverter(e){return new Di(this.firestore,e,this._path)}}function cN(r,e,...t){if(r=ut(r),Qv("collection","path",e),r instanceof Gc){const i=qe.fromString(e,...t);return Ny(i),new Di(r,null,i)}{if(!(r instanceof gt||r instanceof Di))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(qe.fromString(e,...t));return Ny(i),new Di(r.firestore,null,i)}}function Zk(r,e,...t){if(r=ut(r),arguments.length===1&&(e=Hf.newId()),Qv("doc","path",e),r instanceof Gc){const i=qe.fromString(e,...t);return ky(i),new gt(r,null,new de(i))}{if(!(r instanceof gt||r instanceof Di))throw new te($.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(qe.fromString(e,...t));return ky(i),new gt(r.firestore,r instanceof Di?r.converter:null,new de(i))}}/**
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
 */const __="AsyncQueue";class v_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new zE(this,"async_queue_retry"),this._c=()=>{const i=Bd();i&&ie(__,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Bd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Bd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Fr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ko(e))throw e;ie(__,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,zr("INTERNAL UNHANDLED ERROR: ",E_(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=cp.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:E_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function E_(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Vs extends Gc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new v_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new v_(e),this._firestoreClient=void 0,await e}}}function e1(r,e){const t=typeof r=="object"?r:Lf(),i=typeof r=="string"?r:yc,o=Nc(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=Z_("firestore");l&&Xk(o,...l)}return o}function Qc(r){if(r._terminated)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||t1(r),r._firestoreClient}function t1(r){var i,o,l,h;const e=r._freezeSettings(),t=Jk(r._databaseId,((i=r._app)==null?void 0:i.options.appId)||"",r._persistenceKey,(o=r._app)==null?void 0:o.options.apiKey,e);r._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new Wk(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(g){const y=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(y),_online:y}})(r._componentsProvider))}/**
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
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(Dt.fromBase64String(e))}catch(t){throw new te($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Sn(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Tl(e,Sn._jsonSchema))return Sn.fromBase64String(e.bytes)}}Sn._jsonSchemaVersion="firestore/bytes/1.0",Sn._jsonSchema={type:mt("string",Sn._jsonSchemaVersion),bytes:mt("string")};/**
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
 */class Yc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Jc{constructor(e){this._methodName=e}}/**
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
 */class hr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hr._jsonSchemaVersion}}static fromJSON(e){if(Tl(e,hr._jsonSchema))return new hr(e.latitude,e.longitude)}}hr._jsonSchemaVersion="firestore/geoPoint/1.0",hr._jsonSchema={type:mt("string",hr._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
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
 */class Fn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Fn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Tl(e,Fn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Fn(e.vectorValues);throw new te($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Fn._jsonSchemaVersion="firestore/vectorValue/1.0",Fn._jsonSchema={type:mt("string",Fn._jsonSchemaVersion),vectorValues:mt("object")};/**
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
 */const n1=/^__.*__$/;class r1{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new $i(e,this.data,this.fieldMask,t,this.fieldTransforms):new Il(e,this.data,t,this.fieldTransforms)}}class hw{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new $i(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function dw(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{dataSource:r})}}class mp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new mp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.i({path:t,arrayElement:!1});return i.mc(e),i}fc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.i({path:t,arrayElement:!1});return i.Ac(),i}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Ac(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(dw(this.dataSource)&&n1.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class i1{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Hc(e)}A(e,t,i,o=!1){return new mp({dataSource:e,methodName:t,targetDoc:i,path:xt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xc(r){const e=r._freezeSettings(),t=Hc(r._databaseId);return new i1(r._databaseId,!!e.ignoreUndefinedProperties,t)}function fw(r,e,t,i,o,l={}){const h=r.A(l.merge||l.mergeFields?2:0,e,t,o);yp("Data must be an object, but it was:",h,i);const f=gw(i,h);let g,y;if(l.merge)g=new pn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const w of l.mergeFields){const R=Rs(e,w,t);if(!h.contains(R))throw new te($.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);vw(E,R)||E.push(R)}g=new pn(E),y=h.fieldTransforms.filter((w=>g.covers(w.field)))}else g=null,y=h.fieldTransforms;return new r1(new nn(f),g,y)}class Zc extends Jc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zc}}class gp extends Jc{_toFieldTransform(e){return new HC(e.path,new pl)}isEqual(e){return e instanceof gp}}function pw(r,e,t,i){const o=r.A(1,e,t);yp("Data must be an object, but it was:",o,i);const l=[],h=nn.empty();Bi(i,((g,y)=>{const E=_w(e,g,t);y=ut(y);const w=o.fc(E);if(y instanceof Zc)l.push(E);else{const R=Cl(y,w);R!=null&&(l.push(E),h.set(E,R))}}));const f=new pn(l);return new hw(h,f,o.fieldTransforms)}function mw(r,e,t,i,o,l){const h=r.A(1,e,t),f=[Rs(e,i,t)],g=[o];if(l.length%2!=0)throw new te($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<l.length;R+=2)f.push(Rs(e,l[R])),g.push(l[R+1]);const y=[],E=nn.empty();for(let R=f.length-1;R>=0;--R)if(!vw(y,f[R])){const z=f[R];let W=g[R];W=ut(W);const H=h.fc(z);if(W instanceof Zc)y.push(z);else{const U=Cl(W,H);U!=null&&(y.push(z),E.set(z,U))}}const w=new pn(y);return new hw(E,w,h.fieldTransforms)}function s1(r,e,t,i=!1){return Cl(t,r.A(i?4:3,e))}function Cl(r,e){if(yw(r=ut(r)))return yp("Unsupported field value:",e,r),gw(r,e);if(r instanceof Jc)return(function(i,o){if(!dw(o.dataSource))throw o.yc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.yc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let g=Cl(f,o.gc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(i,o){if((i=ut(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return BC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Ye.fromDate(i);return{timestampValue:wc(o.serializer,l)}}if(i instanceof Ye){const l=new Ye(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:wc(o.serializer,l)}}if(i instanceof hr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Sn)return{bytesValue:kE(o.serializer,i._byteString)};if(i instanceof gt){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.yc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:tp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Fn)return(function(h,f){const g=h instanceof Fn?h.toArray():h;return{mapValue:{fields:{[iE]:{stringValue:sE},[_c]:{arrayValue:{values:g.map((E=>{if(typeof E!="number")throw f.yc("VectorValues must only contain numeric values.");return Xf(f.serializer,E)}))}}}}}})(i,o);if(bE(i))return i._toProto(o.serializer);throw o.yc(`Unsupported field value: ${Lc(i)}`)})(r,e)}function gw(r,e){const t={};return Xv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bi(r,((i,o)=>{const l=Cl(o,e.dc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function yw(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ye||r instanceof hr||r instanceof Sn||r instanceof gt||r instanceof Jc||r instanceof Fn||bE(r))}function yp(r,e,t){if(!yw(t)||!Yv(t)){const i=Lc(t);throw i==="an object"?e.yc(r+" a custom object"):e.yc(r+" "+i)}}function Rs(r,e,t){if((e=ut(e))instanceof Yc)return e._internalPath;if(typeof e=="string")return _w(r,e);throw Ac("Field path arguments must be of type string or ",r,!1,void 0,t)}const o1=new RegExp("[~\\*/\\[\\]]");function _w(r,e,t){if(e.search(o1)>=0)throw Ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Yc(...e.split("."))._internalPath}catch{throw Ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ac(r,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new te($.INVALID_ARGUMENT,f+r+g)}function vw(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class a1{convertValue(e,t="none"){switch(Mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Bi(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var i,o,l;const t=(l=(o=(i=e.fields)==null?void 0:i[_c].arrayValue)==null?void 0:o.values)==null?void 0:l.map((h=>at(h.doubleValue)));return new Fn(t)}convertGeoPoint(e){return new hr(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Fc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(cl(e));default:return null}}convertTimestamp(e){const t=Li(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=qe.fromString(e);je(LE(i),9688,{name:e});const o=new hl(i.get(1),i.get(3)),l=new de(i.popFirst(5));return o.isEqual(t)||zr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class Ew extends a1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,t)}}function hN(){return new gp("serverTimestamp")}const w_="@firebase/firestore",T_="4.13.0";/**
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
 */class ww{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new l1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Rs("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class l1 extends ww{data(){return super.data()}}/**
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
 */function u1(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new te($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _p{}class Tw extends _p{}function dN(r,e,...t){let i=[];e instanceof _p&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((g=>g instanceof vp)).length,f=l.filter((g=>g instanceof eh)).length;if(h>1||h>0&&f>0)throw new te($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)r=o._apply(r);return r}class eh extends Tw{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new eh(e,t,i)}_apply(e){const t=this._parse(e);return Iw(e._query,t),new Ds(e.firestore,e.converter,df(e._query,t))}_parse(e){const t=Xc(e.firestore);return(function(l,h,f,g,y,E,w){let R;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new te($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){S_(w,E);const W=[];for(const H of w)W.push(I_(g,l,H));R={arrayValue:{values:W}}}else R=I_(g,l,w)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||S_(w,E),R=s1(f,h,w,E==="in"||E==="not-in");return pt.create(y,E,R)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function fN(r,e,t){const i=e,o=Rs("where",r);return eh._create(o,i,t)}class vp extends _p{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new vp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:jn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)Iw(h,g),h=df(h,g)})(e._query,t),new Ds(e.firestore,e.converter,df(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ep extends Tw{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ep(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new te($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new te($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fl(l,h)})(e._query,this._field,this._direction);return new Ds(e.firestore,e.converter,OC(e._query,t))}}function pN(r,e="asc"){const t=e,i=Rs("orderBy",r);return Ep._create(i,t)}function I_(r,e,t){if(typeof(t=ut(t))=="string"){if(t==="")throw new te($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fE(e)&&t.indexOf("/")!==-1)throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(qe.fromString(t));if(!de.isDocumentKey(i))throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Fy(r,new de(i))}if(t instanceof gt)return Fy(r,t._key);throw new te($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lc(t)}.`)}function S_(r,e){if(!Array.isArray(r)||r.length===0)throw new te($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Iw(r,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new te($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Sw(r,e,t){let i;return i=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,i}class Xa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vs extends ww{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new oc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Rs("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=vs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}vs._jsonSchemaVersion="firestore/documentSnapshot/1.0",vs._jsonSchema={type:mt("string",vs._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class oc extends vs{data(e={}){return super.data(e)}}class Vo{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Xa(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new oc(this._firestore,this._userDataWriter,i.key,i,new Xa(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new oc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Xa(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new oc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Xa(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:c1(f.type),doc:g,oldIndex:y,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Vo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Hf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function c1(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:r})}}/**
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
 */Vo._jsonSchemaVersion="firestore/querySnapshot/1.0",Vo._jsonSchema={type:mt("string",Vo._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};/**
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
 */class h1{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Xc(e)}set(e,t,i){this._verifyNotCommitted();const o=Wd(e,this._firestore),l=Sw(o.converter,t,i),h=fw(this._dataReader,"WriteBatch.set",o._key,l,o.converter!==null,i);return this._mutations.push(h.toMutation(o._key,rn.none())),this}update(e,t,i,...o){this._verifyNotCommitted();const l=Wd(e,this._firestore);let h;return h=typeof(t=ut(t))=="string"||t instanceof Yc?mw(this._dataReader,"WriteBatch.update",l._key,t,i,o):pw(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(h.toMutation(l._key,rn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Wd(e,this._firestore);return this._mutations=this._mutations.concat(new $c(t._key,rn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new te($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Wd(r,e){if((r=ut(r)).firestore!==e)throw new te($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */function mN(r){r=dr(r,gt);const e=dr(r.firestore,Vs),t=Qc(e);return Kk(t,r._key).then((i=>d1(e,r,i)))}function gN(r){r=dr(r,Ds);const e=dr(r.firestore,Vs),t=Qc(e),i=new Ew(e);return u1(r._query),Gk(t,r._query).then((o=>new Vo(e,i,r,o)))}function yN(r,e,t,...i){r=dr(r,gt);const o=dr(r.firestore,Vs),l=Xc(o);let h;return h=typeof(e=ut(e))=="string"||e instanceof Yc?mw(l,"updateDoc",r._key,e,t,i):pw(l,"updateDoc",r._key,e),th(o,[h.toMutation(r._key,rn.exists(!0))])}function _N(r){return th(dr(r.firestore,Vs),[new $c(r._key,rn.none())])}function vN(r,e){const t=dr(r.firestore,Vs),i=Zk(r),o=Sw(r.converter,e),l=Xc(r.firestore);return th(t,[fw(l,"addDoc",i._key,o,r.converter!==null,{}).toMutation(i._key,rn.exists(!1))]).then((()=>i))}function th(r,e){const t=Qc(r);return Qk(t,e)}function d1(r,e,t){const i=t.docs.get(e._key),o=new Ew(r);return new vs(r,o,e._key,i,new Xa(t.hasPendingWrites,t.fromCache),e.converter)}function EN(r){return r=dr(r,Vs),Qc(r),new h1(r,(e=>th(r,e)))}(function(e,t=!0){GR(Ps),ws(new Vi("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Vs(new JR(i.getProvider("auth-internal")),new eC(h,i.getProvider("app-check-internal")),yC(h,o),h);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),or(w_,T_,e),or(w_,T_,"esm2020")})();/**
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
 */const Aw="firebasestorage.googleapis.com",f1="storageBucket",p1=120*1e3,m1=600*1e3;/**
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
 */class yr extends gr{constructor(e,t,i=0){super(Hd(e),`Firebase Storage: ${t} (${Hd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,yr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pr;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pr||(pr={}));function Hd(r){return"storage/"+r}function g1(){const r="An unknown error occurred, please check the error payload for server response.";return new yr(pr.UNKNOWN,r)}function y1(){return new yr(pr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _1(){return new yr(pr.CANCELED,"User canceled the upload/download.")}function v1(r){return new yr(pr.INVALID_URL,"Invalid URL '"+r+"'.")}function E1(r){return new yr(pr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function A_(r){return new yr(pr.INVALID_ARGUMENT,r)}function Rw(){return new yr(pr.APP_DELETED,"The Firebase app was deleted.")}function w1(r){return new yr(pr.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Mn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Mn.makeFromUrl(e,t)}catch{return new Mn(e,"")}if(i.path==="")return i;throw E1(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(ge){ge.path.charAt(ge.path.length-1)==="/"&&(ge.path_=ge.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),g={bucket:1,path:3};function y(ge){ge.path_=decodeURIComponent(ge.path)}const E="v[A-Za-z0-9_]+",w=t.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",z=new RegExp(`^https?://${w}/${E}/b/${o}/o${R}`,"i"),W={bucket:1,path:3},H=t===Aw?"(?:storage.googleapis.com|storage.cloud.google.com)":t,U="([^?#]*)",re=new RegExp(`^https?://${H}/${o}/${U}`,"i"),ue=[{regex:f,indices:g,postModify:l},{regex:z,indices:W,postModify:y},{regex:re,indices:{bucket:1,path:2},postModify:y}];for(let ge=0;ge<ue.length;ge++){const Ae=ue[ge],Ce=Ae.regex.exec(e);if(Ce){const k=Ce[Ae.indices.bucket];let S=Ce[Ae.indices.path];S||(S=""),i=new Mn(k,S),Ae.postModify(i);break}}if(i==null)throw v1(e);return i}}class T1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function I1(r,e,t){let i=1,o=null,l=null,h=!1,f=0;function g(){return f===2}let y=!1;function E(...U){y||(y=!0,e.apply(null,U))}function w(U){o=setTimeout(()=>{o=null,r(z,g())},U)}function R(){l&&clearTimeout(l)}function z(U,...re){if(y){R();return}if(U){R(),E.call(null,U,...re);return}if(g()||h){R(),E.call(null,U,...re);return}i<64&&(i*=2);let ue;f===1?(f=2,ue=0):ue=(i+Math.random())*1e3,w(ue)}let W=!1;function H(U){W||(W=!0,R(),!y&&(o!==null?(U||(f=2),clearTimeout(o),w(0)):U||(f=1)))}return w(0),l=setTimeout(()=>{h=!0,H(!0)},t),H}function S1(r){r(!1)}/**
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
 */function A1(r){return r!==void 0}function R_(r,e,t,i){if(i<e)throw A_(`Invalid value for '${r}'. Expected ${e} or greater.`);if(i>t)throw A_(`Invalid value for '${r}'. Expected ${t} or less.`)}function R1(r){const e=encodeURIComponent;let t="?";for(const i in r)if(r.hasOwnProperty(i)){const o=e(i)+"="+e(r[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Rc;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Rc||(Rc={}));/**
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
 */function C1(r,e){const t=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,l=e.indexOf(r)!==-1;return t||o||l}/**
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
 */class P1{constructor(e,t,i,o,l,h,f,g,y,E,w,R=!0,z=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=g,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=w,this.retry=R,this.isUsingEmulator=z,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((W,H)=>{this.resolve_=W,this.reject_=H,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new Yu(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const g=f.loaded,y=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,y)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===Rc.NO_ERROR,g=l.getStatus();if(!f||C1(g,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===Rc.ABORT;i(!1,new Yu(!1,null,E));return}const y=this.successCodes_.indexOf(g)!==-1;i(!0,new Yu(y,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(f,f.getResponse());A1(g)?l(g):l()}catch(g){h(g)}else if(f!==null){const g=g1();g.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,g)):h(g)}else if(o.canceled){const g=this.appDelete_?Rw():_1();h(g)}else{const g=y1();h(g)}};this.canceled_?t(!1,new Yu(!1,null,!0)):this.backoffId_=I1(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&S1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Yu{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function k1(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function N1(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function x1(r,e){e&&(r["X-Firebase-GMPID"]=e)}function D1(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function V1(r,e,t,i,o,l,h=!0,f=!1){const g=R1(r.urlParams),y=r.url+g,E=Object.assign({},r.headers);return x1(E,e),k1(E,t),N1(E,l),D1(E,i),new P1(y,r.method,E,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,h,f)}/**
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
 */function O1(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function L1(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */class Cc{constructor(e,t){this._service=e,t instanceof Mn?this._location=t:this._location=Mn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Cc(e,t)}get root(){const e=new Mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return L1(this._location.path)}get storage(){return this._service}get parent(){const e=O1(this._location.path);if(e===null)return null;const t=new Mn(this._location.bucket,e);return new Cc(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw w1(e)}}function C_(r,e){const t=e==null?void 0:e[f1];return t==null?null:Mn.makeFromBucketSpec(t,r)}function b1(r,e,t,i={}){r.host=`${e}:${t}`;const o=Bo(e);o&&Df(`https://${r.host}/b`),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(r._overrideAuthToken=typeof l=="string"?l:nv(l,r.app.options.projectId))}class M1{constructor(e,t,i,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=Aw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=p1,this._maxUploadRetryTime=m1,this._requests=new Set,o!=null?this._bucket=Mn.makeFromBucketSpec(o,this._host):this._bucket=C_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Mn.makeFromBucketSpec(this._url,e):this._bucket=C_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){R_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){R_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(In(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Cc(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new T1(Rw());{const h=V1(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const P_="@firebase/storage",k_="0.14.2";/**
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
 */const Cw="storage";function F1(r=Lf(),e){r=ut(r);const i=Nc(r,Cw).getImmediate({identifier:e}),o=Z_("storage");return o&&U1(i,...o),i}function U1(r,e,t,i={}){b1(r,e,t,i)}function j1(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),i=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new M1(t,i,o,e,Ps)}function z1(){ws(new Vi(Cw,j1,"PUBLIC").setMultipleInstances(!0)),or(P_,k_,""),or(P_,k_,"esm2020")}z1();const B1={apiKey:"AIzaSyBwpwMShaLspeIrqU8TSd1wbhbHuiEtXC8",authDomain:"ai-studio-applet-webapp-95c32.firebaseapp.com",projectId:"ai-studio-applet-webapp-95c32",storageBucket:"ai-studio-applet-webapp-95c32.firebasestorage.app",messagingSenderId:"785873781679",appId:"1:785873781679:web:f6db99c84f7728c7d3a55a"},wp=sv(B1),nh=WR(wp),wN=e1(wp);F1(wp);const TN=async(r,e)=>{try{return{data:(await kA(nh,r,e)).user,error:null}}catch(t){return{data:null,error:t}}},$1=async()=>{try{return await VA(nh),{error:null}}catch(r){return{error:r}}},W1=async()=>nh.currentUser,H1=r=>DA(nh,e=>{r("SIGNED_IN",e)}),Pw=K.createContext(null),q1=({children:r})=>{const[e,t]=K.useState(null),[i,o]=K.useState(!0);K.useEffect(()=>{W1().then(f=>{t(f??null),o(!1)});const h=H1((f,g)=>{t(g??null)});return()=>h()},[]);const l=async()=>{const{error:h}=await $1();h&&console.error("Logout error:",h)};return L.jsx(Pw.Provider,{value:{user:e,loading:i,logout:l},children:r})},Tp=()=>{const r=K.useContext(Pw);if(!r)throw new Error("useAuth must be used within AuthProvider");return r},Xt=({children:r})=>{const{user:e,loading:t}=Tp();return t?L.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:L.jsxs("div",{className:"text-center",children:[L.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"}),L.jsx("p",{className:"mt-4 text-gray-600",children:"Carregando..."})]})}):e?r:L.jsx(Kd,{to:"/admin/login",replace:!0})};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),kw=(...r)=>r.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var G1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=K.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:h,...f},g)=>K.createElement("svg",{ref:g,...G1,width:e,height:e,stroke:r,strokeWidth:i?Number(t)*24/Number(e):t,className:kw("lucide",o),...f},[...h.map(([y,E])=>K.createElement(y,E)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=(r,e)=>{const t=K.forwardRef(({className:i,...o},l)=>K.createElement(Q1,{ref:l,iconNode:e,className:kw(`lucide-${K1(r)}`,i),...o}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=An("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=An("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=An("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=An("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=An("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=An("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=An("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=An("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=An("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=An("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=An("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=An("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Z1=({isOpen:r,onClose:e})=>{const{user:t,logout:i}=Tp(),o=Cs(),l=(t==null?void 0:t.email)||"usuário@email.com",h=l.split("@")[0];K.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[r]),K.useEffect(()=>{const w=R=>{R.key==="Escape"&&e()};return r&&document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[r,e]);const f=[{title:"Orçamentos",icon:If,items:[{name:"Novo orçamento",href:"/admin/orcamentos/novo",icon:qa},{name:"Lista de orçamentos",href:"/admin/orcamentos",icon:If}]},{title:"Agenda",icon:N_,items:[{name:"Novo compromisso",href:"#",icon:qa},{name:"Compromissos",href:"#",icon:N_}]},{title:"Clientes",icon:Sf,items:[{name:"Novo cliente",href:"/admin/clientes/novo",icon:qa},{name:"Lista de clientes",href:"/admin/clientes",icon:Sf}]},{title:"Serviços",icon:O_,items:[{name:"Novo serviço",href:"/admin/servicos/novo",icon:qa},{name:"Lista de serviços",href:"/admin/servicos",icon:O_}]},{title:"Materiais",icon:V_,items:[{name:"Novo material",href:"/admin/materiais/novo",icon:qa},{name:"Lista de materiais",href:"/admin/materiais",icon:V_}]},{title:"Minha conta",icon:x_,items:[{name:"Meu perfil",href:"#",icon:x_}]},{title:"Planos",icon:D_,items:[{name:"Ver planos",href:"#",icon:D_}]}],g=w=>w.startsWith("#")||w==="#"?!1:w==="/admin/dashboard"?o.pathname===w:o.pathname.startsWith(w),y=async()=>{await i(),e()},E=w=>{e(),w==="#"&&alert("Página em desenvolvimento")};return r?L.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[L.jsx("div",{className:"absolute inset-0 bg-slate-900/95 backdrop-blur-sm transition-opacity",onClick:e}),L.jsxs("div",{className:"absolute inset-0 flex flex-col overflow-y-auto",children:[L.jsxs("div",{className:"flex items-center justify-between p-4 sm:p-6 border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm sticky top-0 z-10",children:[L.jsxs("div",{className:"flex items-center gap-3",children:[L.jsx("div",{className:"w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30",children:L.jsx("span",{className:"text-white font-bold text-lg",children:h.charAt(0).toUpperCase()})}),L.jsxs("div",{children:[L.jsx("p",{className:"text-sm font-semibold text-white",children:h}),L.jsx("p",{className:"text-xs text-slate-400 truncate max-w-[200px]",children:l})]})]}),L.jsx("button",{onClick:e,className:"p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-full transition-all","aria-label":"Fechar menu",children:L.jsx(Nw,{size:24})})]}),L.jsx("div",{className:"flex-1 p-4 sm:p-6",children:L.jsx("div",{className:"max-w-4xl mx-auto space-y-6",children:f.map((w,R)=>{const z=w.icon;return L.jsxs("div",{className:"bg-slate-800/50 rounded-2xl p-4 sm:p-6 border border-slate-700/50 shadow-xl",children:[L.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[L.jsx("div",{className:"p-2 bg-teal-500/20 rounded-lg border border-teal-500/30",children:L.jsx(z,{className:"h-5 w-5 text-teal-400"})}),L.jsx("h3",{className:"text-lg font-bold text-white",children:w.title})]}),L.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:w.items.map((W,H)=>{const U=W.icon,re=g(W.href);return L.jsxs(Yd,{to:W.href,onClick:()=>E(W.href),className:`group flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 ${re?"bg-teal-500/20 border-teal-500/50 shadow-lg shadow-teal-500/20":"bg-slate-700/30 border-slate-600/50 hover:border-teal-500/50 hover:bg-slate-700/60"}`,children:[L.jsx("div",{className:`p-2 rounded-lg transition-all ${re?"bg-teal-500/30 text-teal-300":"bg-slate-600/50 text-slate-300 group-hover:text-teal-300 group-hover:bg-teal-500/20"}`,children:L.jsx(U,{className:"h-5 w-5"})}),L.jsx("span",{className:`font-medium ${re?"text-white":"text-slate-200"}`,children:W.name}),re&&L.jsx("div",{className:"ml-auto w-2 h-2 rounded-full bg-teal-400 animate-pulse"})]},H)})})]},R)})})}),L.jsx("div",{className:"p-4 sm:p-6 border-t border-slate-700 bg-slate-800/50 backdrop-blur-sm",children:L.jsx("div",{className:"max-w-4xl mx-auto",children:L.jsxs("button",{onClick:y,className:"w-full flex items-center gap-3 p-4 rounded-xl bg-slate-700/30 border border-slate-600/50 hover:bg-red-500/20 hover:border-red-500/50 transition-all group",children:[L.jsx("div",{className:"p-2 rounded-lg bg-slate-600/50 group-hover:bg-red-500/30 transition-all",children:L.jsx(J1,{className:"h-5 w-5 text-slate-300 group-hover:text-red-400"})}),L.jsx("span",{className:"font-medium text-slate-200 group-hover:text-red-400",children:"Sair"})]})})})]})]}):null},Zt=({children:r})=>{const[e,t]=K.useState(!1),[i,o]=K.useState(!1),{user:l}=Tp(),h=Cs();xf();const f=[{name:"Dashboard",href:"/admin/dashboard",icon:Y1},{name:"Orçamentos",href:"/admin/orcamentos",icon:If},{name:"Clientes",href:"/admin/clientes",icon:Sf}],y=((l==null?void 0:l.email)||"usuário@email.com").split("@")[0];return L.jsxs("div",{className:"h-screen flex bg-slate-900 min-h-screen",children:[e&&L.jsxs("div",{className:"fixed inset-0 z-40 lg:hidden",children:[L.jsx("div",{className:"fixed inset-0 bg-slate-800 bg-opacity-75",onClick:()=>t(!1)}),L.jsxs("div",{className:"fixed inset-y-0 left-0 flex flex-col w-64 bg-slate-800",children:[L.jsxs("div",{className:"flex items-center justify-between h-16 px-4 border-b border-slate-700",children:[L.jsx("span",{className:"text-xl font-bold text-teal-400",children:"LP Tecnologia"}),L.jsx("button",{onClick:()=>t(!1),className:"text-slate-300 hover:text-white",children:L.jsx(Nw,{size:24})})]}),L.jsx("nav",{className:"flex-1 px-4 py-4 space-y-1",children:f.map(E=>{const w=E.icon,R=h.pathname===E.href||h.pathname.startsWith(E.href);return L.jsxs(Yd,{to:E.href,onClick:()=>t(!1),className:`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${R?"bg-teal-600/20 text-teal-400 border-r-2 border-teal-400":"text-slate-300 hover:bg-slate-700"}`,children:[L.jsx(w,{className:"mr-3 h-5 w-5"}),E.name]},E.name)})})]})]}),L.jsx("div",{className:"hidden lg:flex lg:flex-shrink-0",children:L.jsxs("div",{className:"flex flex-col w-64 bg-slate-800 border-r border-slate-700",children:[L.jsx("div",{className:"flex items-center h-16 px-4 border-b border-slate-700",children:L.jsx("span",{className:"text-xl font-bold text-teal-400",children:"LP Tecnologia"})}),L.jsx("nav",{className:"flex-1 px-4 py-4 space-y-1",children:f.map(E=>{const w=E.icon,R=h.pathname===E.href||h.pathname.startsWith(E.href);return L.jsxs(Yd,{to:E.href,className:`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${R?"bg-teal-600/20 text-teal-400 border-r-2 border-teal-400":"text-slate-300 hover:bg-slate-700"}`,children:[L.jsx(w,{className:"mr-3 h-5 w-5"}),E.name]},E.name)})})]})}),L.jsxs("div",{className:"flex flex-col flex-1 overflow-hidden",children:[L.jsx("header",{className:"bg-slate-800 shadow-sm border-b border-slate-700",children:L.jsxs("div",{className:"flex items-center justify-between h-16 px-4",children:[L.jsx("div",{className:"flex items-center",children:L.jsx("button",{onClick:()=>t(!0),className:"lg:hidden text-slate-300 hover:text-white",children:L.jsx(X1,{size:24})})}),L.jsx("div",{className:"relative",children:L.jsxs("button",{onClick:()=>o(!i),className:"flex items-center space-x-2 text-sm text-slate-300 hover:text-white focus:outline-none","aria-label":"Menu do usuário",children:[L.jsx("div",{className:"w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30",children:L.jsx("span",{className:"text-white font-medium text-sm",children:y.charAt(0).toUpperCase()})}),L.jsx("span",{className:"hidden md:block",children:y})]})})]})}),L.jsx("main",{className:"flex-1 overflow-y-auto p-4 md:p-6 bg-slate-900",children:r})]}),L.jsx(Z1,{isOpen:i,onClose:()=>o(!1)})]})},eN=({size:r="md",className:e=""})=>{const t={sm:"h-4 w-4",md:"h-8 w-8",lg:"h-12 w-12"};return L.jsxs("svg",{className:`animate-spin text-primary-600 ${t[r]} ${e}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[L.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),L.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})},en=()=>L.jsx("div",{className:"flex items-center justify-center h-64",children:L.jsx(eN,{size:"lg"})}),tN=K.lazy(()=>mr(()=>import("./Login-Bc6bdEIu.js"),__vite__mapDeps([0,1,2])).then(r=>({default:r.Login}))),nN=K.lazy(()=>mr(()=>import("./Dashboard-Dy7sP81e.js"),__vite__mapDeps([3,4,5])).then(r=>({default:r.Dashboard}))),rN=K.lazy(()=>mr(()=>import("./Clients-9tZZTODH.js"),__vite__mapDeps([6,4,1,7,8,9])).then(r=>({default:r.Clients}))),L_=K.lazy(()=>mr(()=>import("./ClientForm-CzmlU5d_.js"),__vite__mapDeps([10,4,1,2,11])).then(r=>({default:r.ClientForm}))),iN=K.lazy(()=>mr(()=>import("./Services-WpPLSBsi.js"),__vite__mapDeps([12,4,1,7,8,9])).then(r=>({default:r.Services}))),b_=K.lazy(()=>mr(()=>import("./ServiceForm-LDWFbN91.js"),__vite__mapDeps([13,4,1,2,11])).then(r=>({default:r.ServiceForm}))),sN=K.lazy(()=>mr(()=>import("./Materials-Cx5lxFmi.js"),__vite__mapDeps([14,4,1,7,8,9])).then(r=>({default:r.Materials}))),M_=K.lazy(()=>mr(()=>import("./MaterialForm-C1Rv-ggS.js"),__vite__mapDeps([15,4,1,2,11])).then(r=>({default:r.MaterialForm}))),oN=K.lazy(()=>mr(()=>import("./Quotes-DkZsS07l.js"),__vite__mapDeps([16,4,5,1,8])).then(r=>({default:r.Quotes}))),F_=K.lazy(()=>mr(()=>import("./index-DFB5i4qm.js"),__vite__mapDeps([17,4,5,1,11,2,8,7])).then(r=>({default:r.QuoteDetail})));function aN(){return L.jsx(q1,{children:L.jsxs(jT,{children:[L.jsx(kt,{path:"/admin/login",element:L.jsx(K.Suspense,{fallback:L.jsx(en,{}),children:L.jsx(tN,{})})}),L.jsx(kt,{path:"/admin",element:L.jsx(Xt,{children:L.jsx(Zt,{children:L.jsx(Kd,{to:"/admin/dashboard",replace:!0})})})}),L.jsx(kt,{path:"/admin/dashboard",element:L.jsx(Xt,{children:L.jsx(Zt,{children:L.jsx(K.Suspense,{fallback:L.jsx(en,{}),children:L.jsx(nN,{})})})})}),L.jsx(kt,{path:"/admin/orcamentos",element:L.jsx(Xt,{children:L.jsx(Zt,{children:L.jsx(K.Suspense,{fallback:L.jsx(en,{}),children:L.jsx(oN,{})})})})}),L.jsx(kt,{path:"/admin/orcamentos/novo",element:L.jsx(Xt,{children:L.jsx(Zt,{children:L.jsx(K.Suspense,{fallback:L.jsx(en,{}),children:L.jsx(F_,{})})})})}),L.jsx(kt,{path:"/admin/orcamentos/:id",element:L.jsx(Xt,{children:L.jsx(Zt,{children:L.jsx(K.Suspense,{fallback:L.jsx(en,{}),children:L.jsx(F_,{})})})})}),L.jsx(kt,{path:"/admin/clientes",element:L.jsx(Xt,{children:L.jsx(Zt,{children:L.jsx(K.Suspense,{fallback:L.jsx(en,{}),children:L.jsx(rN,{})})})})}),L.jsx(kt,{path:"/admin/clientes/novo",element:L.jsx(Xt,{children:L.jsx(Zt,{children:L.jsx(K.Suspense,{fallback:L.jsx(en,{}),children:L.jsx(L_,{})})})})}),L.jsx(kt,{path:"/admin/clientes/:id",element:L.jsx(Xt,{children:L.jsx(Zt,{children:L.jsx(K.Suspense,{fallback:L.jsx(en,{}),children:L.jsx(L_,{})})})})}),L.jsx(kt,{path:"/admin/servicos",element:L.jsx(Xt,{children:L.jsx(Zt,{children:L.jsx(K.Suspense,{fallback:L.jsx(en,{}),children:L.jsx(iN,{})})})})}),L.jsx(kt,{path:"/admin/servicos/novo",element:L.jsx(Xt,{children:L.jsx(Zt,{children:L.jsx(K.Suspense,{fallback:L.jsx(en,{}),children:L.jsx(b_,{})})})})}),L.jsx(kt,{path:"/admin/servicos/:id",element:L.jsx(Xt,{children:L.jsx(Zt,{children:L.jsx(K.Suspense,{fallback:L.jsx(en,{}),children:L.jsx(b_,{})})})})}),L.jsx(kt,{path:"/admin/materiais",element:L.jsx(Xt,{children:L.jsx(Zt,{children:L.jsx(K.Suspense,{fallback:L.jsx(en,{}),children:L.jsx(sN,{})})})})}),L.jsx(kt,{path:"/admin/materiais/novo",element:L.jsx(Xt,{children:L.jsx(Zt,{children:L.jsx(K.Suspense,{fallback:L.jsx(en,{}),children:L.jsx(M_,{})})})})}),L.jsx(kt,{path:"/admin/materiais/:id",element:L.jsx(Xt,{children:L.jsx(Zt,{children:L.jsx(K.Suspense,{fallback:L.jsx(en,{}),children:L.jsx(M_,{})})})})}),L.jsx(kt,{path:"*",element:L.jsx(Kd,{to:"/admin/dashboard",replace:!0})})]})})}G0.createRoot(document.getElementById("root")).render(L.jsx(K.StrictMode,{children:L.jsx(KT,{children:L.jsx(aN,{})})}));export{N_ as C,If as F,Yd as L,Kd as N,qa as P,eN as S,Sf as U,O_ as W,Nw as X,Tp as a,lN as b,An as c,V_ as d,cN as e,Zk as f,gN as g,mN as h,_N as i,L as j,wN as k,TN as l,yN as m,vN as n,pN as o,EN as p,dN as q,K as r,hN as s,xf as u,fN as w};
