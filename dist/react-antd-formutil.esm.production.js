import{EasyField as e}from"react-formutil";export*from"react-formutil";import t,{Children as r,cloneElement as n,Component as o}from"react";import{Switch,Mention,Form,Checkbox,Radio,Transfer,Pagination}from"antd";function a(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function c(e,t,r){if(t)i(e.prototype,t);if(r)i(e,r);return e}function u(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function f(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)s(e,t)}function l(e){l=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return l(e)}function s(e,t){s=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return s(e,t)}function p(e,t){if(e==null)return{};var r={};var n=Object.keys(e);var o,a;for(a=0;a<n.length;a++){o=n[a];if(t.indexOf(o)>=0)continue;r[o]=e[o]}return r}function v(e,t){if(e==null)return{};var r=p(e,t);var n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++){n=a[o];if(t.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;r[n]=e[n]}}return r}function b(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function m(e,t){if(t&&(typeof t==="object"||typeof t==="function")){return t}return b(e)}function d(e,t){if(typeof e!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==undefined){var n=r.call(e,t||"default");if(typeof n!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function y(e){var t=d(e,"string");return typeof t==="symbol"?t:String(t)}var h=1;var g=function e(t){h=t};var k=Switch.name!=="Switch";var O=k?Switch:"Switch";var P=k?Checkbox:"Checkbox";var _=k?Radio:"Radio";var w=k?Mention:"Mention";var j=k?Transfer:"Transfer";var C=k?Pagination:"Pagination";var E=function(o){f(i,o);function i(){a(this,i);return m(this,l(i).apply(this,arguments))}c(i,[{key:"render",value:function o(){var a=this;var i=this.props;var c=i.children,f=i.itemProps,l=i.errorLevel,s=l===void 0?h:l,p=v(i,["children","itemProps","errorLevel"]);var b=r.only(c);var m;if(b&&b.type&&typeof b.type==="function"){m="formutilType"in b.type?b.type.formutilType:k?b.type:b.type.name}switch(m){case O:case P:case _:p.__TYPE__="checked";break;case C:if(!("$defaultValue"in p)){p.$defaultValue=1}break;case"checked":case"array":case"object":case"number":case"empty":p.__TYPE__=m;break;default:p.__TYPE__="empty";break}return t.createElement(e,Object.assign({},p,{passUtil:"$fieldutil",render:function e(r){var o,c;var l=i.valuePropName,p=l===void 0?"value":l,d=i.changePropName,h=d===void 0?"onChange":d,g=i.focusPropName,k=g===void 0?"onFocus":g,E=i.blurPropName,S=E===void 0?"onBlur":E;var T=r.$fieldutil,$=r[h],V=r[k],x=r[S],N=r[p],Y=v(r,["$fieldutil",h,k,S,p].map(y));var F=T.$invalid,I=T.$dirty,L=T.$touched,R=T.$getFirstError;var U;switch(m){case O:case P:case _:case"checked":var A=i.checked,B=A===void 0?true:A,K=i.unchecked,M=K===void 0?false:K;U={checked:N===B,onChange:function e(t){var r=t&&t.target?t.target.checked:t;$(r?B:M,t)}};break;case w:U={defaultValue:Mention.toContentState(N||""),onChange:function e(t){var r=Mention.toString(t);if(r!==N){$(r)}}};break;case j:U={targetKeys:N,onChange:$};break;case C:U={current:N,onChange:$};break;default:U=(o={onCompositionEnd:function e(t){a.isComposition=false;delete a.compositionValue;$(t)},onCompositionStart:function e(){return a.isComposition=true}},u(o,h,function(e){if(a.isComposition){a.compositionValue=e.target[p];a.forceUpdate()}else{for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++){r[n-1]=arguments[n]}$.apply(void 0,[e].concat(r))}}),u(o,p,"compositionValue"in a?a.compositionValue:N),o);break}Object.assign(U,(c={},u(c,k,V),u(c,S,x),c));var q;switch(s){case 0:q=F&&I&&L;break;case 1:q=F&&I;break;case 2:q=F;break;default:q=false;break}var z=q?{validateStatus:"error",help:R()}:{};return t.createElement(Form.Item,Object.assign({},Y,f,z),n(b,U))}}))}}]);return i}(o);export{E as FormItem,g as setErrorLevel};
