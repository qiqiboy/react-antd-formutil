(function(e,r){typeof exports==="object"&&typeof module!=="undefined"?r(exports,require("react-formutil"),require("react"),require("antd")):typeof define==="function"&&define.amd?define(["exports","react-formutil","react","antd"],r):(e=e||self,r(e.ReactAntdFormutil={},e.ReactFormutil,e.React,e.antd))})(this,function(e,r,t,n){"use strict";var o="default"in t?t["default"]:t;function i(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}var a=i;function u(e,r){return r={exports:{}},e(r,r.exports),r.exports}var f=u(function(e){function r(t){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){e.exports=r=function e(r){return typeof r}}else{e.exports=r=function e(r){return r&&typeof Symbol==="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r}}return r(t)}e.exports=r});function c(e,r){if(f(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==undefined){var n=t.call(e,r||"default");if(f(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var s=c;function l(e){var r=s(e,"string");return f(r)==="symbol"?r:String(r)}var p=l;function v(e,r){if(e==null)return{};var t={};var n=Object.keys(e);var o,i;for(i=0;i<n.length;i++){o=n[i];if(r.indexOf(o)>=0)continue;t[o]=e[o]}return t}var d=v;function y(e,r){if(e==null)return{};var t=d(e,r);var n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++){n=i[o];if(r.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;t[n]=e[n]}}return t}var m=y;function b(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}}var h=b;function g(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function S(e,r,t){if(r)g(e.prototype,r);if(t)g(e,t);return e}var $=S;var P=u(function(e){function r(t){e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function e(r){return r.__proto__||Object.getPrototypeOf(r)};return r(t)}e.exports=r});function O(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true}catch(e){return false}}var w=O;function j(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}var _=j;function k(e,r){if(r&&(f(r)==="object"||typeof r==="function")){return r}return _(e)}var x=k;function E(e){return function(){var r=P(e),t;if(w()){var n=P(this).constructor;t=Reflect.construct(r,arguments,n)}else{t=r.apply(this,arguments)}return x(this,t)}}var C=E;var F=u(function(e){function r(t,n){e.exports=r=Object.setPrototypeOf||function e(r,t){r.__proto__=t;return r};return r(t,n)}e.exports=r});function V(e,r){if(typeof r!=="function"&&r!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:true,configurable:true}});if(r)F(e,r)}var R=V;var A="function"===typeof Symbol&&Symbol.for,M=A?Symbol.for("react.element"):60103,T=A?Symbol.for("react.portal"):60106,N=A?Symbol.for("react.fragment"):60107,q=A?Symbol.for("react.strict_mode"):60108,z=A?Symbol.for("react.profiler"):60114,L=A?Symbol.for("react.provider"):60109,U=A?Symbol.for("react.context"):60110,B=A?Symbol.for("react.async_mode"):60111,I=A?Symbol.for("react.concurrent_mode"):60111,D=A?Symbol.for("react.forward_ref"):60112,Y=A?Symbol.for("react.suspense"):60113,H=A?Symbol.for("react.suspense_list"):60120,K=A?Symbol.for("react.memo"):60115,W=A?Symbol.for("react.lazy"):60116,G=A?Symbol.for("react.block"):60121,J=A?Symbol.for("react.fundamental"):60117,Q=A?Symbol.for("react.responder"):60118,X=A?Symbol.for("react.scope"):60119;function Z(e){if("object"===typeof e&&null!==e){var r=e.$$typeof;switch(r){case M:switch(e=e.type,e){case B:case I:case N:case z:case q:case Y:return e;default:switch(e=e&&e.$$typeof,e){case U:case D:case W:case K:case L:return e;default:return r}}case T:return r}}}function ee(e){return Z(e)===I}var re=B;var te=I;var ne=U;var oe=L;var ie=M;var ae=D;var ue=N;var fe=W;var ce=K;var se=T;var le=z;var pe=q;var ve=Y;var de=function(e){return ee(e)||Z(e)===B};var ye=ee;var me=function(e){return Z(e)===U};var be=function(e){return Z(e)===L};var he=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===M};var ge=function(e){return Z(e)===D};var Se=function(e){return Z(e)===N};var $e=function(e){return Z(e)===W};var Pe=function(e){return Z(e)===K};var Oe=function(e){return Z(e)===T};var we=function(e){return Z(e)===z};var je=function(e){return Z(e)===q};var _e=function(e){return Z(e)===Y};var ke=function(e){return"string"===typeof e||"function"===typeof e||e===N||e===I||e===z||e===q||e===Y||e===H||"object"===typeof e&&null!==e&&(e.$$typeof===W||e.$$typeof===K||e.$$typeof===L||e.$$typeof===U||e.$$typeof===D||e.$$typeof===J||e.$$typeof===Q||e.$$typeof===X||e.$$typeof===G)};var xe=Z;var Ee={AsyncMode:re,ConcurrentMode:te,ContextConsumer:ne,ContextProvider:oe,Element:ie,ForwardRef:ae,Fragment:ue,Lazy:fe,Memo:ce,Portal:se,Profiler:le,StrictMode:pe,Suspense:ve,isAsyncMode:de,isConcurrentMode:ye,isContextConsumer:me,isContextProvider:be,isElement:he,isForwardRef:ge,isFragment:Se,isLazy:$e,isMemo:Pe,isPortal:Oe,isProfiler:we,isStrictMode:je,isSuspense:_e,isValidElementType:ke,typeOf:xe};var Ce=u(function(e){{e.exports=Ee}});var Fe=Ce.isValidElementType;var Ve=typeof Element!=="undefined";var Re=typeof Map==="function";var Ae=typeof Set==="function";var Me=typeof ArrayBuffer==="function";function Te(e,r){if(e===r)return true;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return false;var t,n,o;if(Array.isArray(e)){t=e.length;if(t!=r.length)return false;for(n=t;n--!==0;)if(!Te(e[n],r[n]))return false;return true}var i;if(Re&&e instanceof Map&&r instanceof Map){if(e.size!==r.size)return false;i=e.entries();while(!(n=i.next()).done)if(!r.has(n.value[0]))return false;i=e.entries();while(!(n=i.next()).done)if(!Te(n.value[1],r.get(n.value[0])))return false;return true}if(Ae&&e instanceof Set&&r instanceof Set){if(e.size!==r.size)return false;i=e.entries();while(!(n=i.next()).done)if(!r.has(n.value[0]))return false;return true}if(Me&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){t=e.length;if(t!=r.length)return false;for(n=t;n--!==0;)if(e[n]!==r[n])return false;return true}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();o=Object.keys(e);t=o.length;if(t!==Object.keys(r).length)return false;for(n=t;n--!==0;)if(!Object.prototype.hasOwnProperty.call(r,o[n]))return false;if(Ve&&e instanceof Element)return false;for(n=t;n--!==0;){if(o[n]==="_owner"&&e.$$typeof){continue}if(!Te(e[o[n]],r[o[n]]))return false}return true}return e!==e&&r!==r}var Ne=function e(r,t){try{return Te(r,t)}catch(e){if((e.message||"").match(/stack|recursion/i)){console.warn("react-fast-compare cannot handle circular refs");return false}throw e}};var qe=t.createContext(),ze=qe.Consumer,Le=qe.Provider;var Ue=1;var Be=function e(r){Ue=r};var Ie=n.Switch.name!=="Switch";var De=Ie?n.Switch:"Switch";var Ye=Ie?n.Checkbox:"Checkbox";var He=Ie?n.Radio:"Radio";var Ke=Ie?n.Transfer:"Transfer";var We=Ie?n.Pagination:"Pagination";var Ge=Ie?n.Upload:"Upload";function Je(e){if(e){var r=e.type;if(Fe(r)){if(r.formutilType){return r.formutilType}if(typeof r==="string"&&e.props.type){return e.props.type}if(!Ie){return r.displayName||r.name||r}}return r||e}}var Qe=function(e){R(u,e);var i=C(u);function u(){var e;h(this,u);for(var r=arguments.length,t=new Array(r),n=0;n<r;n++){t[n]=arguments[n]}e=i.call.apply(i,[this].concat(t));e.fields={};e.registerField=function(r,t){return t?e.fields[r]=t:delete e.fields[r]};e.latestValidationProps=null;e.checkHasError=function(e,r,t,n,o){switch(e){case 0:return r&&t&&n;case 1:return r&&t;case 2:return r;default:return false}};e.fetchCurrentValidationProps=function(r){var t=Object.keys(e.fields).map(function(r){return e.fields[r].$new()});var n=t.filter(function(e){return e.$invalid});var o=n.length>0;var i=t.some(function(e){return e.$dirty});var a=t.some(function(e){return e.$touched});var u=t.some(function(e){return e.$focused});var f=n.map(function(e){return e.$getFirstError()});return e.getValidationProps(r,o,i,a,u,f)};e.getValidationProps=function(r,t,n,o,i,a){var u=e.checkHasError(r,t,n,o,i);var f={className:[e.props.className,u&&"has-error",t?"is-invalid":"is-valid",n?"is-dirty":"is-pristine",o?"is-touched":"is-untouched",i?"is-focused":"is-unfocused"].filter(Boolean).join(" ")};if(u){Object.assign(f,{validateStatus:"error",help:a})}return f};return e}$(u,[{key:"componentDidMount",value:function e(){var r;(r=this.registerAncestorField)===null||r===void 0?void 0:r.call(this,this.props.name,this.$fieldutil)}},{key:"componentWillUnmount",value:function e(){var r;(r=this.registerAncestorField)===null||r===void 0?void 0:r.call(this,this.props.name,null)}},{key:"render",value:function e(){var i=this;var u=this.props;var f=u.children,c=u.itemProps,s=u.errorLevel,l=s===void 0?Ue:s,v=u.noStyle,d=m(u,["children","itemProps","errorLevel","noStyle"]);if(!u.name){var y=this.latestValidationProps=this.fetchCurrentValidationProps(l);Promise.resolve().then(function(){if(!Ne(i.latestValidationProps,i.fetchCurrentValidationProps(l))){i.forceUpdate()}});return o.createElement(Le,{value:this.registerField},o.createElement(n.Form.Item,Object.assign({},d,y),f))}if(u.$memo===true){d.__DIFF__=f}var b=typeof f==="function"?f:t.Children.only(f);var h=Je(b);switch(h){case De:case Ye:case He:d.__TYPE__="checked";break;case We:if(!("$defaultValue"in d)){d.$defaultValue=1}break;case"checked":case"array":case"object":case"number":case"empty":d.__TYPE__=h;break;default:d.__TYPE__="empty";break}return o.createElement(r.EasyField,Object.assign({},d,{passUtil:"$fieldutil",render:function e(r){var f,s,y;var g=u.valuePropName,S=g===void 0?"value":g,$=u.changePropName,P=$===void 0?"onChange":$,O=u.focusPropName,w=O===void 0?"onFocus":O,j=u.blurPropName,_=j===void 0?"onBlur":j;var k=r.$fieldutil,x=r[P],E=r[w],C=r[_],F=r[S],V=m(r,["$fieldutil",P,w,_,S].map(p));var R=k.$invalid,A=k.$dirty,M=k.$touched,T=k.$focused,N=k.$getFirstError;var q;switch(h){case De:case Ye:case He:case"checked":var z=u.checked,L=z===void 0?true:z,U=u.unchecked,B=U===void 0?false:U;q={checked:F===L,onChange:function e(r){var t=r&&r.target?r.target.checked:r;x(t?L:B,r)}};break;case Ke:q={targetKeys:F,onChange:x};break;case We:q={current:F,onChange:x};break;case Ge:q={fileList:(f=F===null||F===void 0?void 0:F.fileList)!==null&&f!==void 0?f:F,onChange:x};break;default:q=(s={onCompositionEnd:function e(r){i.isComposition=false;delete i.compositionValue;x(r)},onCompositionStart:function e(){return i.isComposition=true}},a(s,P,function(e){if(i.isComposition){i.compositionValue=e.target[S];i.forceUpdate()}else{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++){t[n-1]=arguments[n]}x.apply(void 0,[e].concat(t))}}),a(s,S,"compositionValue"in i?i.compositionValue:F),s);break}Object.assign(q,(y={},a(y,w,E),a(y,_,C),y));if(!V.required&&d.required&&(!c||!("required"in c))){V.required=true}var I=typeof b==="function"?b(q):t.cloneElement(b,q);return o.createElement(ze,null,function(e){if(v){i.$fieldutil=k;i.registerAncestorField=e;return I}var r=i.getValidationProps(l,R,A,M,T,N());return o.createElement(n.Form.Item,Object.assign({},V,c,r),I)})}}))}}]);return u}(t.Component);Object.keys(r).forEach(function(t){if(t!=="default")Object.defineProperty(e,t,{enumerable:true,get:function(){return r[t]}})});e.FormItem=Qe;e.setErrorLevel=Be;Object.defineProperty(e,"__esModule",{value:true})});
