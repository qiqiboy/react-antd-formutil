import{EasyField as e}from"react-formutil";export*from"react-formutil";import r,{cloneElement as t,Children as n,Component as a}from"react";import{Switch,Mention,Form,Checkbox,Radio,Transfer,Pagination}from"antd";function o(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}}function i(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function c(e,r,t){if(r)i(e.prototype,r);if(t)i(e,t);return e}function u(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}function f(e,r){if(typeof r!=="function"&&r!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:true,configurable:true}});if(r)s(e,r)}function l(e){l=Object.setPrototypeOf?Object.getPrototypeOf:function e(r){return r.__proto__||Object.getPrototypeOf(r)};return l(e)}function s(e,r){s=Object.setPrototypeOf||function e(r,t){r.__proto__=t;return r};return s(e,r)}function p(e,r){if(e==null)return{};var t={};var n=Object.keys(e);var a,o;for(o=0;o<n.length;o++){a=n[o];if(r.indexOf(a)>=0)continue;t[a]=e[a]}return t}function v(e,r){if(e==null)return{};var t=p(e,r);var n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++){n=o[a];if(r.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;t[n]=e[n]}}return t}function b(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function y(e,r){if(r&&(typeof r==="object"||typeof r==="function")){return r}return b(e)}function d(e,r){if(typeof e!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==undefined){var n=t.call(e,r||"default");if(typeof n!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function m(e){var r=d(e,"string");return typeof r==="symbol"?r:String(r)}var h=1;var g=function e(r){h=r};var k=Switch.name!=="Switch";var O=k?Switch:"Switch";var P=k?Checkbox:"Checkbox";var _=k?Radio:"Radio";var j=k?Mention:"Mention";var w=k?Transfer:"Transfer";var E=k?Pagination:"Pagination";var S=function(a){f(i,a);function i(){o(this,i);return y(this,l(i).apply(this,arguments))}c(i,[{key:"render",value:function a(){var o=this.props;var i=o.children,c=o.itemProps,f=o.errorLevel,l=f===void 0?h:f,s=v(o,["children","itemProps","errorLevel"]);var p;if(i&&i.type&&typeof i.type==="function"){p="formutilType"in i.type?i.type.formutilType:k?i.type:i.type.name}switch(p){case O:case P:case _:s.__TYPE__="checked";break;case E:if(!("$defaultValue"in s)){s.$defaultValue=1}break;case"checked":case"array":case"object":case"number":case"empty":s.__TYPE__=p;break;default:s.__TYPE__="empty";break}return r.createElement(e,Object.assign({},s,{passUtil:"$fieldutil",render:function e(a){var f,s;var b=o.valuePropName,y=b===void 0?"value":b,d=o.changePropName,h=d===void 0?"onChange":d,g=o.focusPropName,k=g===void 0?"onFocus":g,S=o.blurPropName,T=S===void 0?"onBlur":S;var $=a.$fieldutil,C=a[h],x=a[k],N=a[T],V=a[y],Y=v(a,["$fieldutil",h,k,T,y].map(m));var F=$.$invalid,I=$.$dirty,L=$.$touched,R=$.$getFirstError;var B;switch(p){case O:case P:case _:case"checked":var K=o.checked,M=K===void 0?true:K,U=o.unchecked,q=U===void 0?false:U;B={checked:V===M,onChange:function e(r){var t=r&&r.target?r.target.checked:r;C(t?M:q,r)}};break;case j:B={defaultValue:Mention.toContentState(V||""),onChange:function e(r){var t=Mention.toString(r);if(t!==V){C(t)}}};break;case w:B={targetKeys:V,onChange:C};break;case E:B={current:V,onChange:C};break;default:B=(f={},u(f,h,C),u(f,y,V),f);break}Object.assign(B,(s={},u(s,k,x),u(s,T,N),s));var z;switch(l){case 0:z=F&&I&L;break;case 1:z=F&&I;break;case 2:z=F;break;default:z=false;break}var A=z?{validateStatus:"error",help:R()}:{};return r.createElement(Form.Item,Object.assign({},Y,c,A),t(n.only(i),B))}}))}}]);return i}(a);export{S as FormItem,g as setErrorLevel};
