"use strict";Object.defineProperty(exports,"__esModule",{value:true});function e(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var r=require("react-formutil");var t=e(require("@babel/runtime/helpers/esm/defineProperty"));var i=e(require("@babel/runtime/helpers/esm/toPropertyKey"));var a=e(require("@babel/runtime/helpers/esm/objectWithoutProperties"));var n=e(require("@babel/runtime/helpers/esm/classCallCheck"));var o=e(require("@babel/runtime/helpers/esm/createClass"));var s=e(require("@babel/runtime/helpers/esm/possibleConstructorReturn"));var u=e(require("@babel/runtime/helpers/esm/getPrototypeOf"));var l=e(require("@babel/runtime/helpers/esm/inherits"));var c=require("react");var d=e(c);var f=require("react-is");var p=require("antd");var v=e(require("react-fast-compare"));var m=c.createContext(),h=m.Consumer,b=m.Provider;var y=1;var g=function e(r){y=r};function P(e){if(e){var r=e.type;if(f.isValidElementType(r)){if(r.formutilType){return r.formutilType}if(typeof r==="string"&&e.props.type){return e.props.type}}return r||e}}var k=function(e){l(f,e);function f(){var e;var r;n(this,f);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++){i[a]=arguments[a]}r=s(this,(e=u(f)).call.apply(e,[this].concat(i)));r.fields={};r.registerField=function(e,t){return t?r.fields[e]=t:delete r.fields[e]};r.latestValidationProps=null;r.checkHasError=function(e,r,t,i,a){switch(e){case 0:return r&&t&&i;case 1:return r&&t;case 2:return r;default:return false}};r.fetchCurrentValidationProps=function(e){var t=Object.keys(r.fields).map(function(e){return r.fields[e].$new()});var i=t.filter(function(e){return e.$invalid});var a=i.length>0;var n=t.some(function(e){return e.$dirty});var o=t.some(function(e){return e.$touched});var s=t.some(function(e){return e.$focused});var u=i.map(function(e){return e.$getFirstError()});return r.getValidationProps(e,a,n,o,s,u)};r.getValidationProps=function(e,t,i,a,n,o){var s=r.checkHasError(e,t,i,a,n);var u={className:[r.props.className,s&&"has-error",t?"is-invalid":"is-valid",i?"is-dirty":"is-pristine",a?"is-touched":"is-untouched",n?"is-focused":"is-unfocused"].filter(Boolean).join(" ")};if(s){Object.assign(u,{validateStatus:"error",help:o})}return u};return r}o(f,[{key:"componentDidMount",value:function e(){var r;(r=this.registerAncestorField)===null||r===void 0?void 0:r.call(this,this.props.name,this.$fieldutil)}},{key:"componentWillUnmount",value:function e(){var r;(r=this.registerAncestorField)===null||r===void 0?void 0:r.call(this,this.props.name,null)}},{key:"render",value:function e(){var n=this;var o=this.props;var s=o.children,u=o.itemProps,l=o.errorLevel,f=l===void 0?y:l,m=o.noStyle,g=a(o,["children","itemProps","errorLevel","noStyle"]);if(!o.name){var k=this.latestValidationProps=this.fetchCurrentValidationProps(f);Promise.resolve().then(function(){if(!v(n.latestValidationProps,n.fetchCurrentValidationProps(f))){n.forceUpdate()}});return d.createElement(b,{value:this.registerField},d.createElement(p.Form.Item,Object.assign({},g,k),s))}var C=typeof s==="function"?s:c.Children.only(s);var E=P(C);switch(E){case p.Switch:case p.Checkbox:case p.Radio:g.__TYPE__="checked";break;case p.Pagination:if(!("$defaultValue"in g)){g.$defaultValue=1}break;case"checked":case"array":case"object":case"number":case"empty":g.__TYPE__=E;break;default:g.__TYPE__="empty";break}return d.createElement(r.EasyField,Object.assign({},g,{passUtil:"$fieldutil",render:function e(r){var s,l,v;var b=o.valuePropName,y=b===void 0?"value":b,P=o.changePropName,k=P===void 0?"onChange":P,$=o.focusPropName,q=$===void 0?"onFocus":$,V=o.blurPropName,_=V===void 0?"onBlur":V;var j=r.$fieldutil,F=r[k],O=r[q],w=r[_],x=r[y],T=a(r,["$fieldutil",k,q,_,y].map(i));var N=j.$invalid,S=j.$dirty,A=j.$touched,L=j.$focused,U=j.$getFirstError;var I;switch(E){case p.Switch:case p.Checkbox:case p.Radio:case"checked":var R=o.checked,Y=R===void 0?true:R,B=o.unchecked,H=B===void 0?false:B;I={checked:x===Y,onChange:function e(r){var t=r&&r.target?r.target.checked:r;F(t?Y:H,r)}};break;case p.Transfer:I={targetKeys:x,onChange:F};break;case p.Pagination:I={current:x,onChange:F};break;case p.Upload:I={fileList:(s=x===null||x===void 0?void 0:x.fileList)!==null&&s!==void 0?s:x,onChange:F};break;default:I=(l={onCompositionEnd:function e(r){n.isComposition=false;delete n.compositionValue;F(r)},onCompositionStart:function e(){return n.isComposition=true}},t(l,k,function(e){if(n.isComposition){n.compositionValue=e.target[y];n.forceUpdate()}else{for(var r=arguments.length,t=new Array(r>1?r-1:0),i=1;i<r;i++){t[i-1]=arguments[i]}F.apply(void 0,[e].concat(t))}}),t(l,y,"compositionValue"in n?n.compositionValue:x),l);break}Object.assign(I,(v={},t(v,q,O),t(v,_,w),v));if(!T.required&&g.required&&(!u||!("required"in u))){T.required=true}var K=typeof C==="function"?C(I):c.cloneElement(C,I);return d.createElement(h,null,function(e){if(m){n.$fieldutil=j;n.registerAncestorField=e;return K}var r=n.getValidationProps(f,N,S,A,L,U());return d.createElement(p.Form.Item,Object.assign({},T,u,r),K)})}}))}}]);return f}(c.Component);Object.keys(r).forEach(function(e){if(e!=="default")Object.defineProperty(exports,e,{enumerable:true,get:function(){return r[e]}})});exports.FormItem=k;exports.setErrorLevel=g;
