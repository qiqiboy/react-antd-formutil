!function(e,t){"object"===typeof exports&&"undefined"!==typeof module?t(exports,require("react-formutil"),require("react"),require("antd")):"function"===typeof define&&define.amd?define(["exports","react-formutil","react","antd"],t):t((e=e||self).ReactAntdFormutil={},e.ReactFormutil,e.React,e.antd)}(this,function(e,t,r,o){"use strict";var n="default"in r?r.default:r;function i(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function f(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function p(e,t){return e(t={exports:{}},t.exports),t.exports}var d,y=p(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.fundamental"):60117,h=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case l:case i:case c:case a:case d:return e;default:switch(e=e&&e.$$typeof){case s:case p:case u:return e;default:return t}}case b:case m:case n:return t}}}function P(e){return g(e)===l}t.typeOf=g,t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=s,t.ContextProvider=u,t.Element=o,t.ForwardRef=p,t.Fragment=i,t.Lazy=b,t.Memo=m,t.Portal=n,t.Profiler=c,t.StrictMode=a,t.Suspense=d,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===l||e===c||e===a||e===d||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===u||e.$$typeof===s||e.$$typeof===p||e.$$typeof===v||e.$$typeof===h||e.$$typeof===S)},t.isAsyncMode=function(e){return P(e)||g(e)===f},t.isConcurrentMode=P,t.isContextConsumer=function(e){return g(e)===s},t.isContextProvider=function(e){return g(e)===u},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return g(e)===p},t.isFragment=function(e){return g(e)===i},t.isLazy=function(e){return g(e)===b},t.isMemo=function(e){return g(e)===m},t.isPortal=function(e){return g(e)===n},t.isProfiler=function(e){return g(e)===c},t.isStrictMode=function(e){return g(e)===a},t.isSuspense=function(e){return g(e)===d}});(d=y)&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")&&d.default;y.typeOf,y.AsyncMode,y.ConcurrentMode,y.ContextConsumer,y.ContextProvider,y.Element,y.ForwardRef,y.Fragment,y.Lazy,y.Memo,y.Portal,y.Profiler,y.StrictMode,y.Suspense,y.isValidElementType,y.isAsyncMode,y.isConcurrentMode,y.isContextConsumer,y.isContextProvider,y.isElement,y.isForwardRef,y.isFragment,y.isLazy,y.isMemo,y.isPortal,y.isProfiler,y.isStrictMode,y.isSuspense;var m=p(function(e){e.exports=y}).isValidElementType,b=1,v="Switch"!==o.Switch.name,h=v?o.Switch:"Switch",S=v?o.Checkbox:"Checkbox",g=v?o.Radio:"Radio",P=v?o.Mention:"Mention",C=v?o.Transfer:"Transfer",$=v?o.Pagination:"Pagination";var _=function(e){function p(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),f(this,c(p).apply(this,arguments))}var d,y,_;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(p,r.Component),d=p,(y=[{key:"render",value:function(){var e=this,i=this.props,c=i.children,u=i.itemProps,f=i.errorLevel,p=void 0===f?b:f,d=s(i,["children","itemProps","errorLevel"]),y=r.Children.only(c),_=function(e){if(e){var t=e.type;return"string"!==typeof t&&m(t)?t.formutilType?t.formutilType:v?t:t.displayName||t.name:e.props.type||e.type}}(y);switch(_){case h:case S:case g:d.__TYPE__="checked";break;case $:"$defaultValue"in d||(d.$defaultValue=1);break;case"checked":case"array":case"object":case"number":case"empty":d.__TYPE__=_;break;default:d.__TYPE__="empty"}return n.createElement(t.EasyField,Object.assign({},d,{passUtil:"$fieldutil",render:function(t){var c,f,d,m,b=i.valuePropName,v=void 0===b?"value":b,w=i.changePropName,O=void 0===w?"onChange":w,j=i.focusPropName,k=void 0===j?"onFocus":j,E=i.blurPropName,M=void 0===E?"onBlur":E,x=t.$fieldutil,F=t[O],T=t[k],R=t[M],V=t[v],N=s(t,["$fieldutil",O,k,M,v].map(l)),L=x.$invalid,A=x.$dirty,z=x.$touched,q=x.$focused,I=x.$getFirstError;switch(_){case h:case S:case g:case"checked":var Y=i.checked,B=void 0===Y||Y,U=i.unchecked,K=void 0!==U&&U;d={checked:V===B,onChange:function(e){var t=e&&e.target?e.target.checked:e;F(t?B:K,e)}};break;case P:d={defaultValue:o.Mention.toContentState(V||""),onChange:function(e){var t=o.Mention.toString(e);t!==V&&F(t)}};break;case C:d={targetKeys:V,onChange:F};break;case $:d={current:V,onChange:F};break;default:a(c={onCompositionEnd:function(t){e.isComposition=!1,delete e.compositionValue,F(t)},onCompositionStart:function(){return e.isComposition=!0}},O,function(t){if(e.isComposition)e.compositionValue=t.target[v],e.forceUpdate();else{for(var r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];F.apply(void 0,[t].concat(o))}}),a(c,v,"compositionValue"in e?e.compositionValue:V),d=c}switch(Object.assign(d,(a(f={},k,T),a(f,M,R),f)),p){case 0:m=L&&A&&z;break;case 1:m=L&&A;break;case 2:m=L;break;default:m=!1}N.className=[N.className,m&&"has-error",L&&"is-invalid",A&&"is-dirty",z&&"is-touched",q&&"is-focused"].filter(Boolean).join(" ");var D=m?{validateStatus:"error",help:I()}:{};return n.createElement(o.Form.Item,Object.assign({},N,u,D),r.cloneElement(y,d))}}))}}])&&i(d.prototype,y),_&&i(d,_),p}();Object.keys(t).forEach(function(r){"default"!==r&&Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[r]}})}),e.FormItem=_,e.setErrorLevel=function(e){b=e},Object.defineProperty(e,"__esModule",{value:!0})});
