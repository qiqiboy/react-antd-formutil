"use strict";Object.defineProperty(exports,"__esModule",{value:true});function e(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var r=require("react-formutil");var t=require("react");var n=e(t);var a=require("antd");function o(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}}function i(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function u(e,r,t){if(r)i(e.prototype,r);if(t)i(e,t);return e}function c(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}function f(e,r){if(typeof r!=="function"&&r!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:true,configurable:true}});if(r)s(e,r)}function l(e){l=Object.setPrototypeOf?Object.getPrototypeOf:function e(r){return r.__proto__||Object.getPrototypeOf(r)};return l(e)}function s(e,r){s=Object.setPrototypeOf||function e(r,t){r.__proto__=t;return r};return s(e,r)}function p(e,r){if(e==null)return{};var t={};var n=Object.keys(e);var a,o;for(o=0;o<n.length;o++){a=n[o];if(r.indexOf(a)>=0)continue;t[a]=e[a]}return t}function v(e,r){if(e==null)return{};var t=p(e,r);var n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++){n=o[a];if(r.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;t[n]=e[n]}}return t}function b(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function d(e,r){if(r&&(typeof r==="object"||typeof r==="function")){return r}return b(e)}function y(e,r){if(typeof e!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==undefined){var n=t.call(e,r||"default");if(typeof n!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function h(e){var r=y(e,"string");return typeof r==="symbol"?r:String(r)}var m=1;var g=function e(r){m=r};var k=a.Switch.name!=="Switch";var O=k?a.Switch:"Switch";var P=k?a.Checkbox:"Checkbox";var j=k?a.Radio:"Radio";var _=k?a.Mention:"Mention";var w=k?a.Transfer:"Transfer";var E=k?a.Pagination:"Pagination";var S=function(e){f(i,e);function i(){o(this,i);return d(this,l(i).apply(this,arguments))}u(i,[{key:"render",value:function e(){var o=this.props;var i=o.children,u=o.itemProps,f=o.errorLevel,l=f===void 0?m:f,s=v(o,["children","itemProps","errorLevel"]);var p=t.Children.only(i);var b;if(p&&p.type&&typeof p.type==="function"){b="formutilType"in p.type?p.type.formutilType:k?p.type:p.type.name}switch(b){case O:case P:case j:s.__TYPE__="checked";break;case E:if(!("$defaultValue"in s)){s.$defaultValue=1}break;case"checked":case"array":case"object":case"number":case"empty":s.__TYPE__=b;break;default:s.__TYPE__="empty";break}return n.createElement(r.EasyField,Object.assign({},s,{passUtil:"$fieldutil",render:function e(r){var i,f;var s=o.valuePropName,d=s===void 0?"value":s,y=o.changePropName,m=y===void 0?"onChange":y,g=o.focusPropName,k=g===void 0?"onFocus":g,S=o.blurPropName,C=S===void 0?"onBlur":S;var T=r.$fieldutil,x=r[m],$=r[k],F=r[C],M=r[d],N=v(r,["$fieldutil",m,k,C,d].map(h));var q=T.$invalid,I=T.$dirty,L=T.$touched,R=T.$getFirstError;var V;switch(b){case O:case P:case j:case"checked":var Y=o.checked,B=Y===void 0?true:Y,K=o.unchecked,U=K===void 0?false:K;V={checked:M===B,onChange:function e(r){var t=r&&r.target?r.target.checked:r;x(t?B:U,r)}};break;case _:V={defaultValue:a.Mention.toContentState(M||""),onChange:function e(r){var t=a.Mention.toString(r);if(t!==M){x(t)}}};break;case w:V={targetKeys:M,onChange:x};break;case E:V={current:M,onChange:x};break;default:V=(i={},c(i,m,x),c(i,d,M),i);break}Object.assign(V,(f={},c(f,k,$),c(f,C,F),f));var z;switch(l){case 0:z=q&&I&&L;break;case 1:z=q&&I;break;case 2:z=q;break;default:z=false;break}var A=z?{validateStatus:"error",help:R()}:{};return n.createElement(a.Form.Item,Object.assign({},N,u,A),t.cloneElement(p,V))}}))}}]);return i}(t.Component);Object.keys(r).forEach(function(e){Object.defineProperty(exports,e,{enumerable:true,get:function(){return r[e]}})});exports.FormItem=S;exports.setErrorLevel=g;
