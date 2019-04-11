import{EasyField as e}from"react-formutil";export*from"react-formutil";import t,{cloneElement as r,Children as n,Component as o}from"react";import{Switch,Mention,Form,Checkbox,Radio,Transfer,Pagination}from"antd";function a(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function i(e,t){if(e==null)return{};var r={};var n=Object.keys(e);var o,a;for(a=0;a<n.length;a++){o=n[a];if(t.indexOf(o)>=0)continue;r[o]=e[o]}return r}function u(e,t){if(e==null)return{};var r=i(e,t);var n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++){n=a[o];if(t.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;r[n]=e[n]}}return r}function c(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function l(e,t,r){if(t)f(e.prototype,t);if(r)f(e,r);return e}function s(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){s=function e(t){return typeof t}}else{s=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return s(e)}function p(e){if(typeof Symbol==="function"&&s(Symbol.iterator)==="symbol"){p=function e(t){return s(t)}}else{p=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":s(t)}}return p(e)}function y(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function b(e,t){if(t&&(p(t)==="object"||typeof t==="function")){return t}return y(e)}function v(e){v=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return v(e)}function m(e,t){m=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return m(e,t)}function d(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)m(e,t)}function h(e){var t=g(e,"string");return typeof t==="symbol"?t:String(t)}function g(e,t){if(typeof e!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==undefined){var n=r.call(e,t||"default");if(typeof n!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var k=1;var O=function e(t){k=t};var S=Switch.name!=="Switch";var P=S?Switch:"Switch";var _=S?Checkbox:"Checkbox";var j=S?Radio:"Radio";var w=S?Mention:"Mention";var E=S?Transfer:"Transfer";var T=S?Pagination:"Pagination";var $=function(o){d(i,o);function i(){c(this,i);return b(this,v(i).apply(this,arguments))}l(i,[{key:"render",value:function o(){var i=this.props;var c=i.children,f=i.itemProps,l=i.errorLevel,s=l===void 0?k:l,p=u(i,["children","itemProps","errorLevel"]);var y;if(c&&c.type&&typeof c.type==="function"){y="formutilType"in c.type?c.type.formutilType:S?c.type:c.type.name}switch(y){case P:case _:case j:p.__TYPE__="checked";break;case T:if(!("$defaultValue"in p)){p.$defaultValue=1}break;case"checked":case"array":case"object":case"number":case"empty":p.__TYPE__=y;break;default:p.__TYPE__="empty";break}return t.createElement(e,Object.assign({},p,{passUtil:"$fieldutil",render:function e(o){var l,p;var b=o.$fieldutil,v=u(o,["$fieldutil"]);var m=b.$invalid,d=b.$dirty,g=b.$touched,k=b.$getFirstError;var O=i.valuePropName,S=O===void 0?"value":O,$=i.changePropName,C=$===void 0?"onChange":$,x=i.focusPropName,N=x===void 0?"onFocus":x,V=i.blurPropName,Y=V===void 0?"onBlur":V;var F=v[S],I=v[N],L=v[Y],R=v[S],B=u(v,[S,N,Y,S].map(h));var K;switch(y){case P:case _:case j:case"checked":var M=i.checked,U=M===void 0?true:M,q=i.unchecked,z=q===void 0?false:q;K={checked:R===U,onChange:function e(t){var r=t&&t.target?t.target.checked:t;F(r?U:z,t)}};break;case w:K={defaultValue:Mention.toContentState(R||""),onChange:function e(t){var r=Mention.toString(t);if(r!==R){F(r)}}};break;case E:K={targetKeys:R,onChange:F};break;case T:K={current:R,onChange:F};break;default:K=(l={},a(l,C,F),a(l,S,R),l);break}Object.assign(K,(p={},a(p,N,I),a(p,Y,L),p));var A;switch(s){case 0:A=m&&d&g;break;case 1:A=m&&d;break;case 2:A=m;break;default:A=false;break}var D=A?{validateStatus:"error",help:k()}:{};return t.createElement(Form.Item,Object.assign({},B,f,D),r(n.only(c),K))}}))}}]);return i}(o);export{$ as FormItem,O as setErrorLevel};
