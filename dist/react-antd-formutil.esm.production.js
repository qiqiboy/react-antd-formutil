import{EasyField as e}from"react-formutil";export*from"react-formutil";import t,{createContext as r,Children as n,cloneElement as o,Component as i}from"react";import{isValidElementType as a}from"react-is";import{Switch as u,Form as c,Checkbox as l,Radio as s,Transfer as f,Pagination as p,Upload as d,Select as v}from"antd";import m from"react-fast-compare";function y(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function h(e){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){h=function e(t){return typeof t}}else{h=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return h(e)}function b(e,t){if(h(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==undefined){var n=r.call(e,t||"default");if(h(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function g(e){var t=b(e,"string");return h(t)==="symbol"?t:String(t)}function P(e,t){if(e==null)return{};var r={};var n=Object.keys(e);var o,i;for(i=0;i<n.length;i++){o=n[i];if(t.indexOf(o)>=0)continue;r[o]=e[o]}return r}function k(e,t){if(e==null)return{};var r=P(e,t);var n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++){n=i[o];if(t.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;r[n]=e[n]}}return r}function O(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function j(e,t,r){if(t)_(e.prototype,t);if(r)_(e,r);return e}function w(e){w=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return w(e)}function C(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function S(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function E(e,t){if(t&&(h(t)==="object"||typeof t==="function")){return t}return S(e)}function $(e){return function(){var t=w(e),r;if(C()){var n=w(this).constructor;r=Reflect.construct(t,arguments,n)}else{r=t.apply(this,arguments)}return E(this,r)}}function V(e,t){V=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return V(e,t)}function F(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)V(e,t)}var T=r(),N=T.Consumer,x=T.Provider;var R=1;var A=function e(t){R=t};var U=u.name!=="Switch";var q=U?u:"Switch";var D=U?l:"Checkbox";var I=U?s:"Radio";var L=U?f:"Transfer";var Y=U?p:"Pagination";var B=U?d:"Upload";var H=U?v:"Select";function K(e){if(e){var t=e.type;if(a(t)){if(t.formutilType){return t.formutilType}if(typeof t==="string"&&e.props.type){return e.props.type}if(!U){return t.displayName||t.name||t}}return t||e}}var M=function(r){F(a,r);var i=$(a);function a(){var e;O(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++){r[n]=arguments[n]}e=i.call.apply(i,[this].concat(r));e.fields={};e.registerField=function(t,r){return r?e.fields[t]=r:delete e.fields[t]};e.latestValidationProps=null;e.checkHasError=function(e,t,r,n,o){switch(e){case 0:return t&&r&&n;case 1:return t&&r;case 2:return t;default:return false}};e.fetchCurrentValidationProps=function(t){var r=Object.keys(e.fields).map((function(t){return e.fields[t].$new()}));var n=r.filter((function(e){return e.$invalid}));var o=n.length>0;var i=r.some((function(e){return e.$dirty}));var a=r.some((function(e){return e.$touched}));var u=r.some((function(e){return e.$focused}));var c=n.map((function(e){return e.$getFirstError()}));return e.getValidationProps(t,o,i,a,u,c)};e.getValidationProps=function(t,r,n,o,i,a){var u=e.checkHasError(t,r,n,o,i);var c={className:[e.props.className,u&&"has-error",r?"is-invalid":"is-valid",n?"is-dirty":"is-pristine",o?"is-touched":"is-untouched",i?"is-focused":"is-unfocused"].filter(Boolean).join(" ")};if(u){Object.assign(c,{validateStatus:"error",help:a})}return c};return e}j(a,[{key:"componentDidMount",value:function e(){var t;(t=this.registerAncestorField)===null||t===void 0?void 0:t.call(this,this.props.name,this.$fieldutil)}},{key:"componentWillUnmount",value:function e(){var t;(t=this.registerAncestorField)===null||t===void 0?void 0:t.call(this,this.props.name,null)}},{key:"render",value:function r(){var i=this;var a=this.props;var u=a.children,l=a.itemProps,s=a.errorLevel,f=s===void 0?R:s,p=a.noStyle,d=k(a,["children","itemProps","errorLevel","noStyle"]);if(!a.name){var v=this.latestValidationProps=this.fetchCurrentValidationProps(f);Promise.resolve().then((function(){if(!m(i.latestValidationProps,i.fetchCurrentValidationProps(f))){i.forceUpdate()}}));return t.createElement(x,{value:this.registerField},t.createElement(c.Item,Object.assign({},d,v),typeof u==="function"?u():u))}if(a.$memo===true){d.__DIFF__=u}var h=typeof u==="function"?u:n.only(u);var b=K(h);switch(b){case q:case D:case I:d.__TYPE__="checked";break;case Y:if(!("$defaultValue"in d)){d.$defaultValue=1}break;case"checked":case"array":case"object":case"number":case"empty":d.__TYPE__=b;break;default:d.__TYPE__="empty";break}return t.createElement(e,Object.assign({},d,{passUtil:"$fieldutil",render:function e(r){var n,u,s;var v=a.valuePropName,m=v===void 0?"value":v,P=a.changePropName,O=P===void 0?"onChange":P,_=a.focusPropName,j=_===void 0?"onFocus":_,w=a.blurPropName,C=w===void 0?"onBlur":w;var S=r.$fieldutil,E=r[O],$=r[j],V=r[C],F=r[m],T=k(r,["$fieldutil",O,j,C,m].map(g));var x=S.$invalid,R=S.$dirty,A=S.$touched,U=S.$focused,K=S.$getFirstError;var M;switch(b){case q:case D:case I:case"checked":var W=a.checked,z=W===void 0?true:W,G=a.unchecked,J=G===void 0?false:G;M={checked:F===z,onChange:function e(t){var r=t&&t.target?t.target.checked:t;E(r?z:J,t)}};break;case L:M={targetKeys:F,onChange:E};break;case Y:M={current:F,onChange:E};break;case B:M={fileList:(n=F===null||F===void 0?void 0:F.fileList)!==null&&n!==void 0?n:F,onChange:E};break;default:M=(u={onCompositionEnd:function e(t){i.isComposition=false;delete i.compositionValue;E(t)},onCompositionStart:function e(){return i.isComposition=true}},y(u,O,(function(e){if(i.isComposition){var t,r;i.compositionValue=(t=(r=e.target)===null||r===void 0?void 0:r[m])!==null&&t!==void 0?t:e;i.forceUpdate()}else{for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++){o[a-1]=arguments[a]}E.apply(void 0,[e].concat(o))}})),y(u,m,"compositionValue"in i?i.compositionValue:F),y(u,C,(function(){if(i.isComposition){i.isComposition=false;delete i.compositionValue;E.apply(void 0,arguments)}return V.apply(void 0,arguments)})),u);break}if(b===H){delete M.onCompositionStart;delete M.onCompositionEnd}M=Object.assign((s={},y(s,j,$),y(s,C,V),s),M);if(!T.required&&d.required&&(!l||!("required"in l))){T.required=true}var Q=typeof h==="function"?h(M):o(h,M);return t.createElement(N,null,(function(e){if(p){i.$fieldutil=S;i.registerAncestorField=e;return Q}var r=i.getValidationProps(f,x,R,A,U,K());return t.createElement(c.Item,Object.assign({},T,l,r),Q)}))}}))}}]);return a}(i);export{M as FormItem,A as setErrorLevel};
