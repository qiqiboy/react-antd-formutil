(function(e,r){typeof exports==="object"&&typeof module!=="undefined"?r(exports,require("react-formutil"),require("react"),require("antd")):typeof define==="function"&&define.amd?define(["exports","react-formutil","react","antd"],r):(e=e||self,r(e["react-antd-formutil"]={},e.ReactFormutil,e.React,e.antd))})(this,function(e,r,t,n){"use strict";var o="default"in t?t["default"]:t;function i(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}function a(e){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){a=function e(r){return typeof r}}else{a=function e(r){return r&&typeof Symbol==="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r}}return a(e)}function u(e,r){if(a(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==undefined){var n=t.call(e,r||"default");if(a(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function c(e){var r=u(e,"string");return a(r)==="symbol"?r:String(r)}function f(e,r){if(e==null)return{};var t={};var n=Object.keys(e);var o,i;for(i=0;i<n.length;i++){o=n[i];if(r.indexOf(o)>=0)continue;t[o]=e[o]}return t}function s(e,r){if(e==null)return{};var t=f(e,r);var n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++){n=i[o];if(r.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;t[n]=e[n]}}return t}function l(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}}function p(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function d(e,r,t){if(r)p(e.prototype,r);if(t)p(e,t);return e}function v(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function y(e,r){if(r&&(a(r)==="object"||typeof r==="function")){return r}return v(e)}function m(e){m=Object.setPrototypeOf?Object.getPrototypeOf:function e(r){return r.__proto__||Object.getPrototypeOf(r)};return m(e)}function b(e,r){b=Object.setPrototypeOf||function e(r,t){r.__proto__=t;return r};return b(e,r)}function h(e,r){if(typeof r!=="function"&&r!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:true,configurable:true}});if(r)b(e,r)}function g(e,r){return r={exports:{}},e(r,r.exports),r.exports}var $="function"===typeof Symbol&&Symbol.for,S=$?Symbol.for("react.element"):60103,P=$?Symbol.for("react.portal"):60106,j=$?Symbol.for("react.fragment"):60107,O=$?Symbol.for("react.strict_mode"):60108,w=$?Symbol.for("react.profiler"):60114,E=$?Symbol.for("react.provider"):60109,k=$?Symbol.for("react.context"):60110,C=$?Symbol.for("react.async_mode"):60111,_=$?Symbol.for("react.concurrent_mode"):60111,x=$?Symbol.for("react.forward_ref"):60112,F=$?Symbol.for("react.suspense"):60113,V=$?Symbol.for("react.suspense_list"):60120,T=$?Symbol.for("react.memo"):60115,M=$?Symbol.for("react.lazy"):60116,A=$?Symbol.for("react.block"):60121,R=$?Symbol.for("react.fundamental"):60117,q=$?Symbol.for("react.responder"):60118,L=$?Symbol.for("react.scope"):60119;function N(e){if("object"===typeof e&&null!==e){var r=e.$$typeof;switch(r){case S:switch(e=e.type,e){case C:case _:case j:case w:case O:case F:return e;default:switch(e=e&&e.$$typeof,e){case k:case x:case M:case T:case E:return e;default:return r}}case P:return r}}}function U(e){return N(e)===_}var I=C;var z=_;var D=k;var Y=E;var B=S;var H=x;var W=j;var K=M;var G=T;var J=P;var Q=w;var X=O;var Z=F;var ee=function(e){return U(e)||N(e)===C};var re=U;var te=function(e){return N(e)===k};var ne=function(e){return N(e)===E};var oe=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===S};var ie=function(e){return N(e)===x};var ae=function(e){return N(e)===j};var ue=function(e){return N(e)===M};var ce=function(e){return N(e)===T};var fe=function(e){return N(e)===P};var se=function(e){return N(e)===w};var le=function(e){return N(e)===O};var pe=function(e){return N(e)===F};var de=function(e){return"string"===typeof e||"function"===typeof e||e===j||e===_||e===w||e===O||e===F||e===V||"object"===typeof e&&null!==e&&(e.$$typeof===M||e.$$typeof===T||e.$$typeof===E||e.$$typeof===k||e.$$typeof===x||e.$$typeof===R||e.$$typeof===q||e.$$typeof===L||e.$$typeof===A)};var ve=N;var ye={AsyncMode:I,ConcurrentMode:z,ContextConsumer:D,ContextProvider:Y,Element:B,ForwardRef:H,Fragment:W,Lazy:K,Memo:G,Portal:J,Profiler:Q,StrictMode:X,Suspense:Z,isAsyncMode:ee,isConcurrentMode:re,isContextConsumer:te,isContextProvider:ne,isElement:oe,isForwardRef:ie,isFragment:ae,isLazy:ue,isMemo:ce,isPortal:fe,isProfiler:se,isStrictMode:le,isSuspense:pe,isValidElementType:de,typeOf:ve};var me=g(function(e){{e.exports=ye}});var be=me.isValidElementType;var he=Array.isArray;var ge=Object.keys;var $e=Object.prototype.hasOwnProperty;var Se=typeof Element!=="undefined";function Pe(e,r){if(e===r)return true;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=he(e),n=he(r),o,i,a;if(t&&n){i=e.length;if(i!=r.length)return false;for(o=i;o--!==0;)if(!Pe(e[o],r[o]))return false;return true}if(t!=n)return false;var u=e instanceof Date,c=r instanceof Date;if(u!=c)return false;if(u&&c)return e.getTime()==r.getTime();var f=e instanceof RegExp,s=r instanceof RegExp;if(f!=s)return false;if(f&&s)return e.toString()==r.toString();var l=ge(e);i=l.length;if(i!==ge(r).length)return false;for(o=i;o--!==0;)if(!$e.call(r,l[o]))return false;if(Se&&e instanceof Element&&r instanceof Element)return e===r;for(o=i;o--!==0;){a=l[o];if(a==="_owner"&&e.$$typeof){continue}else{if(!Pe(e[a],r[a]))return false}}return true}return e!==e&&r!==r}var je=function e(r,t){try{return Pe(r,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||e.number===-2146828260){console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message);return false}throw e}};var Oe=t.createContext(),we=Oe.Consumer,Ee=Oe.Provider;var ke=1;var Ce=function e(r){ke=r};function _e(e){if(e){var r=e.type;if(be(r)){if(r.formutilType){return r.formutilType}if(typeof r==="string"&&e.props.type){return e.props.type}}return r||e}}var xe=function(e){h(a,e);function a(){var e;var r;l(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++){n[o]=arguments[o]}r=y(this,(e=m(a)).call.apply(e,[this].concat(n)));r.fields={};r.registerField=function(e,t){return t?r.fields[e]=t:delete r.fields[e]};r.latestValidationProps=null;r.checkHasError=function(e,r,t,n,o){switch(e){case 0:return r&&t&&n;case 1:return r&&t;case 2:return r;default:return false}};r.fetchCurrentValidationProps=function(e){var t=Object.keys(r.fields).map(function(e){return r.fields[e].$new()});var n=t.filter(function(e){return e.$invalid});var o=n.length>0;var i=t.some(function(e){return e.$dirty});var a=t.some(function(e){return e.$touched});var u=t.some(function(e){return e.$focused});var c=n.map(function(e){return e.$getFirstError()});return r.getValidationProps(e,o,i,a,u,c)};r.getValidationProps=function(e,t,n,o,i,a){var u=r.checkHasError(e,t,n,o,i);var c={className:[r.props.className,u&&"has-error",t?"is-invalid":"is-valid",n?"is-dirty":"is-pristine",o?"is-touched":"is-untouched",i?"is-focused":"is-unfocused"].filter(Boolean).join(" ")};if(u){Object.assign(c,{validateStatus:"error",help:a})}return c};return r}d(a,[{key:"componentDidMount",value:function e(){var r;(r=this.registerAncestorField)===null||r===void 0?void 0:r.call(this,this.props.name,this.$fieldutil)}},{key:"componentWillUnmount",value:function e(){var r;(r=this.registerAncestorField)===null||r===void 0?void 0:r.call(this,this.props.name,null)}},{key:"render",value:function e(){var a=this;var u=this.props;var f=u.children,l=u.itemProps,p=u.errorLevel,d=p===void 0?ke:p,v=u.noStyle,y=s(u,["children","itemProps","errorLevel","noStyle"]);if(!u.name){var m=this.latestValidationProps=this.fetchCurrentValidationProps(d);Promise.resolve().then(function(){if(!je(a.latestValidationProps,a.fetchCurrentValidationProps(d))){a.forceUpdate()}});return o.createElement(Ee,{value:this.registerField},o.createElement(n.Form.Item,Object.assign({},y,m),f))}var b=typeof f==="function"?f:t.Children.only(f);var h=_e(b);switch(h){case n.Switch:case n.Checkbox:case n.Radio:y.__TYPE__="checked";break;case n.Pagination:if(!("$defaultValue"in y)){y.$defaultValue=1}break;case"checked":case"array":case"object":case"number":case"empty":y.__TYPE__=h;break;default:y.__TYPE__="empty";break}return o.createElement(r.EasyField,Object.assign({},y,{passUtil:"$fieldutil",render:function e(r){var f,p,m;var g=u.valuePropName,$=g===void 0?"value":g,S=u.changePropName,P=S===void 0?"onChange":S,j=u.focusPropName,O=j===void 0?"onFocus":j,w=u.blurPropName,E=w===void 0?"onBlur":w;var k=r.$fieldutil,C=r[P],_=r[O],x=r[E],F=r[$],V=s(r,["$fieldutil",P,O,E,$].map(c));var T=k.$invalid,M=k.$dirty,A=k.$touched,R=k.$focused,q=k.$getFirstError;var L;switch(h){case n.Switch:case n.Checkbox:case n.Radio:case"checked":var N=u.checked,U=N===void 0?true:N,I=u.unchecked,z=I===void 0?false:I;L={checked:F===U,onChange:function e(r){var t=r&&r.target?r.target.checked:r;C(t?U:z,r)}};break;case n.Transfer:L={targetKeys:F,onChange:C};break;case n.Pagination:L={current:F,onChange:C};break;case n.Upload:L={fileList:(f=F===null||F===void 0?void 0:F.fileList)!==null&&f!==void 0?f:F,onChange:C};break;default:L=(p={onCompositionEnd:function e(r){a.isComposition=false;delete a.compositionValue;C(r)},onCompositionStart:function e(){return a.isComposition=true}},i(p,P,function(e){if(a.isComposition){a.compositionValue=e.target[$];a.forceUpdate()}else{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++){t[n-1]=arguments[n]}C.apply(void 0,[e].concat(t))}}),i(p,$,"compositionValue"in a?a.compositionValue:F),p);break}Object.assign(L,(m={},i(m,O,_),i(m,E,x),m));if(!V.required&&y.required&&!(l===null||l===void 0?void 0:l.required)){V.required=true}var D=typeof b==="function"?b(L):t.cloneElement(b,L);return o.createElement(we,null,function(e){if(v){a.$fieldutil=k;a.registerAncestorField=e;return D}var r=a.getValidationProps(d,T,M,A,R,q());return o.createElement(n.Form.Item,Object.assign({},V,l,r),D)})}}))}}]);return a}(t.Component);Object.keys(r).forEach(function(t){if(t!=="default")Object.defineProperty(e,t,{enumerable:true,get:function(){return r[t]}})});e.FormItem=xe;e.setErrorLevel=Ce;Object.defineProperty(e,"__esModule",{value:true})});
