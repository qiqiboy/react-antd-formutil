(function(e,r){typeof exports==="object"&&typeof module!=="undefined"?r(exports,require("react-formutil"),require("react"),require("antd")):typeof define==="function"&&define.amd?define(["exports","react-formutil","react","antd"],r):(e=e||self,r(e["react-antd-formutil"]={},e.ReactFormutil,e.React,e.AntDesign))})(this,function(e,r,t,o){"use strict";var n="default"in t?t["default"]:t;function a(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}function i(e){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){i=function e(r){return typeof r}}else{i=function e(r){return r&&typeof Symbol==="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r}}return i(e)}function c(e,r){if(i(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==undefined){var o=t.call(e,r||"default");if(i(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function u(e){var r=c(e,"string");return i(r)==="symbol"?r:String(r)}function f(e,r){if(e==null)return{};var t={};var o=Object.keys(e);var n,a;for(a=0;a<o.length;a++){n=o[a];if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}function s(e,r){if(e==null)return{};var t=f(e,r);var o,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++){o=a[n];if(r.indexOf(o)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,o))continue;t[o]=e[o]}}return t}function l(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}}function p(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||false;o.configurable=true;if("value"in o)o.writable=true;Object.defineProperty(e,o.key,o)}}function y(e,r,t){if(r)p(e.prototype,r);if(t)p(e,t);return e}function v(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function m(e,r){if(r&&(i(r)==="object"||typeof r==="function")){return r}return v(e)}function d(e){d=Object.setPrototypeOf?Object.getPrototypeOf:function e(r){return r.__proto__||Object.getPrototypeOf(r)};return d(e)}function b(e,r){b=Object.setPrototypeOf||function e(r,t){r.__proto__=t;return r};return b(e,r)}function h(e,r){if(typeof r!=="function"&&r!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:true,configurable:true}});if(r)b(e,r)}function S(e,r){return r={exports:{}},e(r,r.exports),r.exports}var g="function"===typeof Symbol&&Symbol.for,$=g?Symbol.for("react.element"):60103,P=g?Symbol.for("react.portal"):60106,k=g?Symbol.for("react.fragment"):60107,w=g?Symbol.for("react.strict_mode"):60108,_=g?Symbol.for("react.profiler"):60114,j=g?Symbol.for("react.provider"):60109,O=g?Symbol.for("react.context"):60110,C=g?Symbol.for("react.async_mode"):60111,E=g?Symbol.for("react.concurrent_mode"):60111,x=g?Symbol.for("react.forward_ref"):60112,T=g?Symbol.for("react.suspense"):60113,F=g?Symbol.for("react.suspense_list"):60120,M=g?Symbol.for("react.memo"):60115,L=g?Symbol.for("react.lazy"):60116,N=g?Symbol.for("react.block"):60121,V=g?Symbol.for("react.fundamental"):60117,R=g?Symbol.for("react.responder"):60118,q=g?Symbol.for("react.scope"):60119;function A(e){if("object"===typeof e&&null!==e){var r=e.$$typeof;switch(r){case $:switch(e=e.type,e){case C:case E:case k:case _:case w:case T:return e;default:switch(e=e&&e.$$typeof,e){case O:case x:case L:case M:case j:return e;default:return r}}case P:return r}}}function U(e){return A(e)===E}var z=C;var I=E;var Y=O;var B=j;var D=$;var K=x;var G=k;var H=L;var J=M;var Q=P;var W=_;var X=w;var Z=T;var ee=function(e){return U(e)||A(e)===C};var re=U;var te=function(e){return A(e)===O};var oe=function(e){return A(e)===j};var ne=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===$};var ae=function(e){return A(e)===x};var ie=function(e){return A(e)===k};var ce=function(e){return A(e)===L};var ue=function(e){return A(e)===M};var fe=function(e){return A(e)===P};var se=function(e){return A(e)===_};var le=function(e){return A(e)===w};var pe=function(e){return A(e)===T};var ye=function(e){return"string"===typeof e||"function"===typeof e||e===k||e===E||e===_||e===w||e===T||e===F||"object"===typeof e&&null!==e&&(e.$$typeof===L||e.$$typeof===M||e.$$typeof===j||e.$$typeof===O||e.$$typeof===x||e.$$typeof===V||e.$$typeof===R||e.$$typeof===q||e.$$typeof===N)};var ve=A;var me={AsyncMode:z,ConcurrentMode:I,ContextConsumer:Y,ContextProvider:B,Element:D,ForwardRef:K,Fragment:G,Lazy:H,Memo:J,Portal:Q,Profiler:W,StrictMode:X,Suspense:Z,isAsyncMode:ee,isConcurrentMode:re,isContextConsumer:te,isContextProvider:oe,isElement:ne,isForwardRef:ae,isFragment:ie,isLazy:ce,isMemo:ue,isPortal:fe,isProfiler:se,isStrictMode:le,isSuspense:pe,isValidElementType:ye,typeOf:ve};var de=S(function(e){{e.exports=me}});var be=de.isValidElementType;var he=1;var Se=function e(r){he=r};var ge=o.Switch.name!=="Switch";var $e=ge?o.Switch:"Switch";var Pe=ge?o.Checkbox:"Checkbox";var ke=ge?o.Radio:"Radio";var we=ge?o.Transfer:"Transfer";var _e=ge?o.Pagination:"Pagination";var je=ge?o.Upload:"Upload";function Oe(e){if(e){var r=e.type;if(typeof r!=="string"&&be(r)){if(r.formutilType){return r.formutilType}if(ge){return r}return r.displayName||r.name}return e.props.type||e.type}}var Ce=function(e){h(i,e);function i(){l(this,i);return m(this,d(i).apply(this,arguments))}y(i,[{key:"render",value:function e(){var i=this;var c=this.props;var f=c.children,l=c.itemProps,p=c.errorLevel,y=p===void 0?he:p,v=s(c,["children","itemProps","errorLevel"]);var m=t.Children.only(f);var d=Oe(m);switch(d){case $e:case Pe:case ke:v.__TYPE__="checked";break;case _e:if(!("$defaultValue"in v)){v.$defaultValue=1}break;case"checked":case"array":case"object":case"number":case"empty":v.__TYPE__=d;break;default:v.__TYPE__="empty";break}return n.createElement(r.EasyField,Object.assign({},v,{passUtil:"$fieldutil",render:function e(r){var f,p;var v=c.valuePropName,b=v===void 0?"value":v,h=c.changePropName,S=h===void 0?"onChange":h,g=c.focusPropName,$=g===void 0?"onFocus":g,P=c.blurPropName,k=P===void 0?"onBlur":P;var w=r.$fieldutil,_=r[S],j=r[$],O=r[k],C=r[b],E=s(r,["$fieldutil",S,$,k,b].map(u));var x=w.$invalid,T=w.$dirty,F=w.$touched,M=w.$focused,L=w.$getFirstError;var N;switch(d){case $e:case Pe:case ke:case"checked":var V=c.checked,R=V===void 0?true:V,q=c.unchecked,A=q===void 0?false:q;N={checked:C===R,onChange:function e(r){var t=r&&r.target?r.target.checked:r;_(t?R:A,r)}};break;case we:N={targetKeys:C,onChange:_};break;case _e:N={current:C,onChange:_};break;case je:N={fileList:C&&"fileList"in C?C.fileList:undefined,onChange:_};break;default:N=(f={onCompositionEnd:function e(r){i.isComposition=false;delete i.compositionValue;_(r)},onCompositionStart:function e(){return i.isComposition=true}},a(f,S,function(e){if(i.isComposition){i.compositionValue=e.target[b];i.forceUpdate()}else{for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++){t[o-1]=arguments[o]}_.apply(void 0,[e].concat(t))}}),a(f,b,"compositionValue"in i?i.compositionValue:C),f);break}Object.assign(N,(p={},a(p,$,j),a(p,k,O),p));var U;switch(y){case 0:U=x&&T&&F;break;case 1:U=x&&T;break;case 2:U=x;break;default:U=false;break}E.className=[E.className,U&&"has-error",x?"is-invalid":"is-valid",T?"is-dirty":"is-pristine",F?"is-touched":"is-untouched",M?"is-focused":"is-unfocused"].filter(Boolean).join(" ");var z=U?{validateStatus:"error",help:L()}:{};return n.createElement(o.Form.Item,Object.assign({required:false},E,l,z),t.cloneElement(m,N))}}))}}]);return i}(t.Component);Object.keys(r).forEach(function(t){if(t!=="default")Object.defineProperty(e,t,{enumerable:true,get:function(){return r[t]}})});e.FormItem=Ce;e.setErrorLevel=Se;Object.defineProperty(e,"__esModule",{value:true})});
