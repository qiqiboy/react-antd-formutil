"use strict";Object.defineProperty(exports,"__esModule",{value:true});function e(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var r=require("react-formutil");var t=require("react");var n=e(t);var o=require("react-is");var i=require("antd");var a=e(require("react-fast-compare"));function u(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}var c=u;function s(e,r){return r={exports:{}},e(r,r.exports),r.exports}var l=s((function(e){function r(t){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){e.exports=r=function e(r){return typeof r}}else{e.exports=r=function e(r){return r&&typeof Symbol==="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r}}return r(t)}e.exports=r}));function f(e,r){if(l(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==undefined){var n=t.call(e,r||"default");if(l(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var p=f;function v(e){var r=p(e,"string");return l(r)==="symbol"?r:String(r)}var d=v;function m(e,r){if(e==null)return{};var t={};var n=Object.keys(e);var o,i;for(i=0;i<n.length;i++){o=n[i];if(r.indexOf(o)>=0)continue;t[o]=e[o]}return t}var y=m;function h(e,r){if(e==null)return{};var t=y(e,r);var n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++){n=i[o];if(r.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;t[n]=e[n]}}return t}var b=h;function g(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}}var P=g;function O(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function k(e,r,t){if(r)O(e.prototype,r);if(t)O(e,t);return e}var j=k;var _=s((function(e){function r(t){e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function e(r){return r.__proto__||Object.getPrototypeOf(r)};return r(t)}e.exports=r}));function w(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}var E=w;function x(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}var C=x;function S(e,r){if(r&&(l(r)==="object"||typeof r==="function")){return r}return C(e)}var $=S;function V(e){return function(){var r=_(e),t;if(E()){var n=_(this).constructor;t=Reflect.construct(r,arguments,n)}else{t=r.apply(this,arguments)}return $(this,t)}}var F=V;var T=s((function(e){function r(t,n){e.exports=r=Object.setPrototypeOf||function e(r,t){r.__proto__=t;return r};return r(t,n)}e.exports=r}));function q(e,r){if(typeof r!=="function"&&r!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:true,configurable:true}});if(r)T(e,r)}var N=q;var R=t.createContext(),U=R.Consumer,A=R.Provider;var I=1;var L=function e(r){I=r};var D=i.Switch.name!=="Switch";var Y=D?i.Switch:"Switch";var B=D?i.Checkbox:"Checkbox";var H=D?i.Radio:"Radio";var M=D?i.Transfer:"Transfer";var K=D?i.Pagination:"Pagination";var W=D?i.Upload:"Upload";function z(e){if(e){var r=e.type;if(o.isValidElementType(r)){if(r.formutilType){return r.formutilType}if(typeof r==="string"&&e.props.type){return e.props.type}if(!D){return r.displayName||r.name||r}}return r||e}}var G=function(e){N(u,e);var o=F(u);function u(){var e;P(this,u);for(var r=arguments.length,t=new Array(r),n=0;n<r;n++){t[n]=arguments[n]}e=o.call.apply(o,[this].concat(t));e.fields={};e.registerField=function(r,t){return t?e.fields[r]=t:delete e.fields[r]};e.latestValidationProps=null;e.checkHasError=function(e,r,t,n,o){switch(e){case 0:return r&&t&&n;case 1:return r&&t;case 2:return r;default:return false}};e.fetchCurrentValidationProps=function(r){var t=Object.keys(e.fields).map((function(r){return e.fields[r].$new()}));var n=t.filter((function(e){return e.$invalid}));var o=n.length>0;var i=t.some((function(e){return e.$dirty}));var a=t.some((function(e){return e.$touched}));var u=t.some((function(e){return e.$focused}));var c=n.map((function(e){return e.$getFirstError()}));return e.getValidationProps(r,o,i,a,u,c)};e.getValidationProps=function(r,t,n,o,i,a){var u=e.checkHasError(r,t,n,o,i);var c={className:[e.props.className,u&&"has-error",t?"is-invalid":"is-valid",n?"is-dirty":"is-pristine",o?"is-touched":"is-untouched",i?"is-focused":"is-unfocused"].filter(Boolean).join(" ")};if(u){Object.assign(c,{validateStatus:"error",help:a})}return c};return e}j(u,[{key:"componentDidMount",value:function e(){var r;(r=this.registerAncestorField)===null||r===void 0?void 0:r.call(this,this.props.name,this.$fieldutil)}},{key:"componentWillUnmount",value:function e(){var r;(r=this.registerAncestorField)===null||r===void 0?void 0:r.call(this,this.props.name,null)}},{key:"render",value:function e(){var o=this;var u=this.props;var s=u.children,l=u.itemProps,f=u.errorLevel,p=f===void 0?I:f,v=u.noStyle,m=b(u,["children","itemProps","errorLevel","noStyle"]);if(!u.name){var y=this.latestValidationProps=this.fetchCurrentValidationProps(p);Promise.resolve().then((function(){if(!a(o.latestValidationProps,o.fetchCurrentValidationProps(p))){o.forceUpdate()}}));return n.createElement(A,{value:this.registerField},n.createElement(i.Form.Item,Object.assign({},m,y),s))}if(u.$memo===true){m.__DIFF__=s}var h=typeof s==="function"?s:t.Children.only(s);var g=z(h);switch(g){case Y:case B:case H:m.__TYPE__="checked";break;case K:if(!("$defaultValue"in m)){m.$defaultValue=1}break;case"checked":case"array":case"object":case"number":case"empty":m.__TYPE__=g;break;default:m.__TYPE__="empty";break}return n.createElement(r.EasyField,Object.assign({},m,{passUtil:"$fieldutil",render:function e(r){var a,s,f;var y=u.valuePropName,P=y===void 0?"value":y,O=u.changePropName,k=O===void 0?"onChange":O,j=u.focusPropName,_=j===void 0?"onFocus":j,w=u.blurPropName,E=w===void 0?"onBlur":w;var x=r.$fieldutil,C=r[k],S=r[_],$=r[E],V=r[P],F=b(r,["$fieldutil",k,_,E,P].map(d));var T=x.$invalid,q=x.$dirty,N=x.$touched,R=x.$focused,A=x.$getFirstError;var I;switch(g){case Y:case B:case H:case"checked":var L=u.checked,D=L===void 0?true:L,z=u.unchecked,G=z===void 0?false:z;I={checked:V===D,onChange:function e(r){var t=r&&r.target?r.target.checked:r;C(t?D:G,r)}};break;case M:I={targetKeys:V,onChange:C};break;case K:I={current:V,onChange:C};break;case W:I={fileList:(a=V===null||V===void 0?void 0:V.fileList)!==null&&a!==void 0?a:V,onChange:C};break;default:I=(s={onCompositionEnd:function e(r){o.isComposition=false;delete o.compositionValue;C(r)},onCompositionStart:function e(){return o.isComposition=true}},c(s,k,(function(e){if(o.isComposition){o.compositionValue=e.target[P];o.forceUpdate()}else{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++){t[n-1]=arguments[n]}C.apply(void 0,[e].concat(t))}})),c(s,P,"compositionValue"in o?o.compositionValue:V),s);break}Object.assign(I,(f={},c(f,_,S),c(f,E,$),f));if(!F.required&&m.required&&(!l||!("required"in l))){F.required=true}var J=typeof h==="function"?h(I):t.cloneElement(h,I);return n.createElement(U,null,(function(e){if(v){o.$fieldutil=x;o.registerAncestorField=e;return J}var r=o.getValidationProps(p,T,q,N,R,A());return n.createElement(i.Form.Item,Object.assign({},F,l,r),J)}))}}))}}]);return u}(t.Component);Object.keys(r).forEach((function(e){if(e!=="default")Object.defineProperty(exports,e,{enumerable:true,get:function(){return r[e]}})}));exports.FormItem=G;exports.setErrorLevel=L;
