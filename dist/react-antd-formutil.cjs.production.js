"use strict";Object.defineProperty(exports,"__esModule",{value:true});function e(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var r=require("react-formutil");var a=e(require("@babel/runtime/helpers/esm/defineProperty"));var t=e(require("@babel/runtime/helpers/esm/toPropertyKey"));var i=e(require("@babel/runtime/helpers/esm/objectWithoutProperties"));var o=e(require("@babel/runtime/helpers/esm/classCallCheck"));var n=e(require("@babel/runtime/helpers/esm/createClass"));var s=e(require("@babel/runtime/helpers/esm/possibleConstructorReturn"));var c=e(require("@babel/runtime/helpers/esm/getPrototypeOf"));var u=e(require("@babel/runtime/helpers/esm/inherits"));var l=require("react");var d=e(l);var p=require("react-is");var f=require("antd");var v=1;var m=function e(r){v=r};var h=f.Switch.name!=="Switch";var b=h?f.Switch:"Switch";var y=h?f.Checkbox:"Checkbox";var k=h?f.Radio:"Radio";var g=h?f.Transfer:"Transfer";var C=h?f.Pagination:"Pagination";var P=h?f.Upload:"Upload";function _(e){if(e){var r=e.type;if(typeof r!=="string"&&p.isValidElementType(r)){if(r.formutilType){return r.formutilType}if(h){return r}return r.displayName||r.name}return e.props.type||e.type}}var q=function(e){u(p,e);function p(){o(this,p);return s(this,c(p).apply(this,arguments))}n(p,[{key:"render",value:function e(){var o=this;var n=this.props;var s=n.children,c=n.itemProps,u=n.errorLevel,p=u===void 0?v:u,m=i(n,["children","itemProps","errorLevel"]);var h=l.Children.only(s);var q=_(h);switch(q){case b:case y:case k:m.__TYPE__="checked";break;case C:if(!("$defaultValue"in m)){m.$defaultValue=1}break;case"checked":case"array":case"object":case"number":case"empty":m.__TYPE__=q;break;default:m.__TYPE__="empty";break}return d.createElement(r.EasyField,Object.assign({},m,{passUtil:"$fieldutil",render:function e(r){var s,u;var v=n.valuePropName,m=v===void 0?"value":v,_=n.changePropName,E=_===void 0?"onChange":_,j=n.focusPropName,$=j===void 0?"onFocus":j,w=n.blurPropName,T=w===void 0?"onBlur":w;var N=r.$fieldutil,O=r[E],V=r[$],x=r[T],L=r[m],S=i(r,["$fieldutil",E,$,T,m].map(t));var F=N.$invalid,U=N.$dirty,R=N.$touched,Y=N.$focused,B=N.$getFirstError;var I;switch(q){case b:case y:case k:case"checked":var K=n.checked,A=K===void 0?true:K,M=n.unchecked,W=M===void 0?false:M;I={checked:L===A,onChange:function e(r){var a=r&&r.target?r.target.checked:r;O(a?A:W,r)}};break;case g:I={targetKeys:L,onChange:O};break;case C:I={current:L,onChange:O};break;case P:I={fileList:L&&"fileList"in L?L.fileList:undefined,onChange:O};break;default:I=(s={onCompositionEnd:function e(r){o.isComposition=false;delete o.compositionValue;O(r)},onCompositionStart:function e(){return o.isComposition=true}},a(s,E,function(e){if(o.isComposition){o.compositionValue=e.target[m];o.forceUpdate()}else{for(var r=arguments.length,a=new Array(r>1?r-1:0),t=1;t<r;t++){a[t-1]=arguments[t]}O.apply(void 0,[e].concat(a))}}),a(s,m,"compositionValue"in o?o.compositionValue:L),s);break}Object.assign(I,(u={},a(u,$,V),a(u,T,x),u));var z;switch(p){case 0:z=F&&U&&R;break;case 1:z=F&&U;break;case 2:z=F;break;default:z=false;break}S.className=[S.className,z&&"has-error",F?"is-invalid":"is-valid",U?"is-dirty":"is-pristine",R?"is-touched":"is-untouched",Y?"is-focused":"is-unfocused"].filter(Boolean).join(" ");var D=z?{validateStatus:"error",help:B()}:{};return d.createElement(f.Form.Item,Object.assign({required:false},S,c,D),l.cloneElement(h,I))}}))}}]);return p}(l.Component);Object.keys(r).forEach(function(e){if(e!=="default")Object.defineProperty(exports,e,{enumerable:true,get:function(){return r[e]}})});exports.FormItem=q;exports.setErrorLevel=m;
