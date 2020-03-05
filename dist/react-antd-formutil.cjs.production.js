"use strict";Object.defineProperty(exports,"__esModule",{value:true});function e(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var r=require("react-formutil");var t=e(require("@babel/runtime/helpers/esm/defineProperty"));var i=e(require("@babel/runtime/helpers/esm/toPropertyKey"));var a=e(require("@babel/runtime/helpers/esm/objectWithoutProperties"));var n=e(require("@babel/runtime/helpers/esm/classCallCheck"));var o=e(require("@babel/runtime/helpers/esm/createClass"));var s=e(require("@babel/runtime/helpers/esm/possibleConstructorReturn"));var l=e(require("@babel/runtime/helpers/esm/getPrototypeOf"));var u=e(require("@babel/runtime/helpers/esm/inherits"));var c=require("react");var d=e(c);var f=require("react-is");var v=require("antd");var p=e(require("react-fast-compare"));var m=c.createContext({}),h=m.Consumer,b=m.Provider;var y=1;var g=function e(r){y=r};var P=v.Switch.name!=="Switch";var k=P?v.Switch:"Switch";var C=P?v.Checkbox:"Checkbox";var E=P?v.Radio:"Radio";var $=P?v.Transfer:"Transfer";var V=P?v.Pagination:"Pagination";var q=P?v.Upload:"Upload";function F(e){if(e){var r;var t=e.type;if(typeof t!=="string"&&f.isValidElementType(t)){if(t.formutilType){return t.formutilType}if(P){return t}return t.displayName||t.name}return((r=e.props)===null||r===void 0?void 0:r.type)||t}}var _=function(e){u(f,e);function f(){var e;var r;n(this,f);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++){i[a]=arguments[a]}r=s(this,(e=l(f)).call.apply(e,[this].concat(i)));r.fields={};r.registerField=function(e,t){return t?r.fields[e]=t:delete r.fields[e]};r.latestValidationProps=null;r.checkHasError=function(e,r,t,i,a){switch(e){case 0:return r&&t&&i;case 1:return r&&t;case 2:return r;default:return false}};r.fetchCurrentValidationProps=function(e){var t=Object.keys(r.fields).map(function(e){return r.fields[e].$new()});var i=t.filter(function(e){return e.$invalid});var a=i.length>0;var n=t.some(function(e){return e.$dirty});var o=t.some(function(e){return e.$touched});var s=t.some(function(e){return e.$focused});var l=i.map(function(e){return e.$getFirstError()});return r.getValidationProps(e,a,n,o,s,l)};r.getValidationProps=function(e,t,i,a,n,o){var s=r.checkHasError(e,t,i,a,n);var l={className:[r.props.className,s&&"has-error",t?"is-invalid":"is-valid",i?"is-dirty":"is-pristine",a?"is-touched":"is-untouched",n?"is-focused":"is-unfocused"].filter(Boolean).join(" ")};if(s){Object.assign(l,{validateStatus:"error",help:o})}return l};return r}o(f,[{key:"componentDidMount",value:function e(){var r;(r=this.registerAncestorField)===null||r===void 0?void 0:r.call(this,this.props.name,this.$fieldutil)}},{key:"componentWillUnmount",value:function e(){var r;(r=this.registerAncestorField)===null||r===void 0?void 0:r.call(this,this.props.name,null)}},{key:"render",value:function e(){var n=this;var o=this.props;var s=o.children,l=o.itemProps,u=o.errorLevel,f=u===void 0?y:u,m=o.noStyle,g=a(o,["children","itemProps","errorLevel","noStyle"]);if(!o.name){var P=this.latestValidationProps=this.fetchCurrentValidationProps(f);Promise.resolve().then(function(){if(!p(n.latestValidationProps,n.fetchCurrentValidationProps(f))){n.forceUpdate()}});return d.createElement(b,{value:{registerField:this.registerField}},d.createElement(v.Form.Item,Object.assign({},g,P),s))}var _=typeof s==="function"?s:c.Children.only(s);var j=F(_);switch(j){case k:case C:case E:g.__TYPE__="checked";break;case V:if(!("$defaultValue"in g)){g.$defaultValue=1}break;case"checked":case"array":case"object":case"number":case"empty":g.__TYPE__=j;break;default:g.__TYPE__="empty";break}return d.createElement(r.EasyField,Object.assign({},g,{passUtil:"$fieldutil",render:function e(r){var s,u,p;var b=o.valuePropName,y=b===void 0?"value":b,g=o.changePropName,P=g===void 0?"onChange":g,F=o.focusPropName,w=F===void 0?"onFocus":F,O=o.blurPropName,S=O===void 0?"onBlur":O;var T=r.$fieldutil,x=r[P],N=r[w],U=r[S],A=r[y],L=a(r,["$fieldutil",P,w,S,y].map(i));var I=T.$invalid,R=T.$dirty,Y=T.$touched,B=T.$focused,H=T.$getFirstError;var K;switch(j){case k:case C:case E:case"checked":var M=o.checked,W=M===void 0?true:M,D=o.unchecked,z=D===void 0?false:D;K={checked:A===W,onChange:function e(r){var t=r&&r.target?r.target.checked:r;x(t?W:z,r)}};break;case $:K={targetKeys:A,onChange:x};break;case V:K={current:A,onChange:x};break;case q:K={fileList:(s=A===null||A===void 0?void 0:A.fileList)!==null&&s!==void 0?s:A,onChange:x};break;default:K=(u={onCompositionEnd:function e(r){n.isComposition=false;delete n.compositionValue;x(r)},onCompositionStart:function e(){return n.isComposition=true}},t(u,P,function(e){if(n.isComposition){n.compositionValue=e.target[y];n.forceUpdate()}else{for(var r=arguments.length,t=new Array(r>1?r-1:0),i=1;i<r;i++){t[i-1]=arguments[i]}x.apply(void 0,[e].concat(t))}}),t(u,y,"compositionValue"in n?n.compositionValue:A),u);break}Object.assign(K,(p={},t(p,w,N),t(p,S,U),p));var G=typeof _==="function"?_(K):c.cloneElement(_,K);return d.createElement(h,null,function(e){var r=e.registerField;if(m){n.$fieldutil=T;n.registerAncestorField=r;return G}var t=n.getValidationProps(f,I,R,Y,B,H());return d.createElement(v.Form.Item,Object.assign({required:false},L,l,t),G)})}}))}}]);return f}(c.Component);Object.keys(r).forEach(function(e){if(e!=="default")Object.defineProperty(exports,e,{enumerable:true,get:function(){return r[e]}})});exports.FormItem=_;exports.setErrorLevel=g;
