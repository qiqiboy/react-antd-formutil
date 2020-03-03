(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react-formutil'), require('react'), require('prop-types'), require('antd')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react-formutil', 'react', 'prop-types', 'antd'], factory) :
  (global = global || self, factory(global['react-antd-formutil'] = {}, global.ReactFormutil, global.React, global.PropTypes, global.AntDesign));
}(this, (function (exports, reactFormutil, React, PropTypes, antd) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var reactIs_development = createCommonjsModule(function (module, exports) {



  {
    (function() {

  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
  // (unstable) APIs that have been removed. Can we remove the symbols?

  var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
  var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
  var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
  var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
  var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
  var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

  function isValidElementType(type) {
    return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
    type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
  }

  function typeOf(object) {
    if (typeof object === 'object' && object !== null) {
      var $$typeof = object.$$typeof;

      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          var type = object.type;

          switch (type) {
            case REACT_ASYNC_MODE_TYPE:
            case REACT_CONCURRENT_MODE_TYPE:
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
              return type;

            default:
              var $$typeofType = type && type.$$typeof;

              switch ($$typeofType) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_LAZY_TYPE:
                case REACT_MEMO_TYPE:
                case REACT_PROVIDER_TYPE:
                  return $$typeofType;

                default:
                  return $$typeof;
              }

          }

        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }

    return undefined;
  } // AsyncMode is deprecated along with isAsyncMode

  var AsyncMode = REACT_ASYNC_MODE_TYPE;
  var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  var ContextConsumer = REACT_CONTEXT_TYPE;
  var ContextProvider = REACT_PROVIDER_TYPE;
  var Element = REACT_ELEMENT_TYPE;
  var ForwardRef = REACT_FORWARD_REF_TYPE;
  var Fragment = REACT_FRAGMENT_TYPE;
  var Lazy = REACT_LAZY_TYPE;
  var Memo = REACT_MEMO_TYPE;
  var Portal = REACT_PORTAL_TYPE;
  var Profiler = REACT_PROFILER_TYPE;
  var StrictMode = REACT_STRICT_MODE_TYPE;
  var Suspense = REACT_SUSPENSE_TYPE;
  var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

  function isAsyncMode(object) {
    {
      if (!hasWarnedAboutDeprecatedIsAsyncMode) {
        hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

        console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
      }
    }

    return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
  }
  function isConcurrentMode(object) {
    return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
  }
  function isContextConsumer(object) {
    return typeOf(object) === REACT_CONTEXT_TYPE;
  }
  function isContextProvider(object) {
    return typeOf(object) === REACT_PROVIDER_TYPE;
  }
  function isElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
  function isForwardRef(object) {
    return typeOf(object) === REACT_FORWARD_REF_TYPE;
  }
  function isFragment(object) {
    return typeOf(object) === REACT_FRAGMENT_TYPE;
  }
  function isLazy(object) {
    return typeOf(object) === REACT_LAZY_TYPE;
  }
  function isMemo(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
  }
  function isPortal(object) {
    return typeOf(object) === REACT_PORTAL_TYPE;
  }
  function isProfiler(object) {
    return typeOf(object) === REACT_PROFILER_TYPE;
  }
  function isStrictMode(object) {
    return typeOf(object) === REACT_STRICT_MODE_TYPE;
  }
  function isSuspense(object) {
    return typeOf(object) === REACT_SUSPENSE_TYPE;
  }

  exports.AsyncMode = AsyncMode;
  exports.ConcurrentMode = ConcurrentMode;
  exports.ContextConsumer = ContextConsumer;
  exports.ContextProvider = ContextProvider;
  exports.Element = Element;
  exports.ForwardRef = ForwardRef;
  exports.Fragment = Fragment;
  exports.Lazy = Lazy;
  exports.Memo = Memo;
  exports.Portal = Portal;
  exports.Profiler = Profiler;
  exports.StrictMode = StrictMode;
  exports.Suspense = Suspense;
  exports.isAsyncMode = isAsyncMode;
  exports.isConcurrentMode = isConcurrentMode;
  exports.isContextConsumer = isContextConsumer;
  exports.isContextProvider = isContextProvider;
  exports.isElement = isElement;
  exports.isForwardRef = isForwardRef;
  exports.isFragment = isFragment;
  exports.isLazy = isLazy;
  exports.isMemo = isMemo;
  exports.isPortal = isPortal;
  exports.isProfiler = isProfiler;
  exports.isStrictMode = isStrictMode;
  exports.isSuspense = isSuspense;
  exports.isValidElementType = isValidElementType;
  exports.typeOf = typeOf;
    })();
  }
  });
  var reactIs_development_1 = reactIs_development.AsyncMode;
  var reactIs_development_2 = reactIs_development.ConcurrentMode;
  var reactIs_development_3 = reactIs_development.ContextConsumer;
  var reactIs_development_4 = reactIs_development.ContextProvider;
  var reactIs_development_5 = reactIs_development.Element;
  var reactIs_development_6 = reactIs_development.ForwardRef;
  var reactIs_development_7 = reactIs_development.Fragment;
  var reactIs_development_8 = reactIs_development.Lazy;
  var reactIs_development_9 = reactIs_development.Memo;
  var reactIs_development_10 = reactIs_development.Portal;
  var reactIs_development_11 = reactIs_development.Profiler;
  var reactIs_development_12 = reactIs_development.StrictMode;
  var reactIs_development_13 = reactIs_development.Suspense;
  var reactIs_development_14 = reactIs_development.isAsyncMode;
  var reactIs_development_15 = reactIs_development.isConcurrentMode;
  var reactIs_development_16 = reactIs_development.isContextConsumer;
  var reactIs_development_17 = reactIs_development.isContextProvider;
  var reactIs_development_18 = reactIs_development.isElement;
  var reactIs_development_19 = reactIs_development.isForwardRef;
  var reactIs_development_20 = reactIs_development.isFragment;
  var reactIs_development_21 = reactIs_development.isLazy;
  var reactIs_development_22 = reactIs_development.isMemo;
  var reactIs_development_23 = reactIs_development.isPortal;
  var reactIs_development_24 = reactIs_development.isProfiler;
  var reactIs_development_25 = reactIs_development.isStrictMode;
  var reactIs_development_26 = reactIs_development.isSuspense;
  var reactIs_development_27 = reactIs_development.isValidElementType;
  var reactIs_development_28 = reactIs_development.typeOf;

  var _reactIs_16_13_0_reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_development;
  }
  });
  var _reactIs_16_13_0_reactIs_1 = _reactIs_16_13_0_reactIs.isValidElementType;

  var errorLevelGlobal = 1;
  /**
   * 0 dirty & invalid & touched
   * 1 dirty & invalid
   * 2 invalid
   */

  var setErrorLevel = function setErrorLevel(level) {
    errorLevelGlobal = level;
  };
  var isUglify = antd.Switch.name !== 'Switch';

  var _Switch = isUglify ? antd.Switch : 'Switch';

  var _Checkbox = isUglify ? antd.Checkbox : 'Checkbox';

  var _Radio = isUglify ? antd.Radio : 'Radio';

  var _Transfer = isUglify ? antd.Transfer : 'Transfer';

  var _Pagination = isUglify ? antd.Pagination : 'Pagination';

  var _Upload = isUglify ? antd.Upload : 'Upload';

  function getChildComponent(children) {
    if (children) {
      var childrenType = children.type;

      if (typeof childrenType !== 'string' && _reactIs_16_13_0_reactIs_1(childrenType)) {
        if (childrenType.formutilType) {
          return childrenType.formutilType;
        }

        if (isUglify) {
          return childrenType;
        }

        return childrenType.displayName || childrenType.name;
      }

      return children.props.type || children.type;
    }
  }

  var FormItem = /*#__PURE__*/function (_Component) {
    _inherits(FormItem, _Component);

    function FormItem() {
      _classCallCheck(this, FormItem);

      return _possibleConstructorReturn(this, _getPrototypeOf(FormItem).apply(this, arguments));
    }

    _createClass(FormItem, [{
      key: "render",
      value: function render() {
        var _this = this;

        var props = this.props;

        var childList = props.children,
            itemProps = props.itemProps,
            _props$errorLevel = props.errorLevel,
            errorLevel = _props$errorLevel === void 0 ? errorLevelGlobal : _props$errorLevel,
            fieldProps = _objectWithoutProperties(props, ["children", "itemProps", "errorLevel"]);

        var children = React.Children.only(childList);
        var component = getChildComponent(children);

        switch (component) {
          case _Switch:
          case _Checkbox:
          case _Radio:
            fieldProps.__TYPE__ = 'checked';
            break;

          case _Pagination:
            if (!('$defaultValue' in fieldProps)) {
              fieldProps.$defaultValue = 1;
            }

            break;

          case 'checked':
          case 'array':
          case 'object':
          case 'number':
          case 'empty':
            fieldProps.__TYPE__ = component;
            break;

          default:
            fieldProps.__TYPE__ = 'empty';
            break;
        }

        return React__default.createElement(reactFormutil.EasyField, Object.assign({}, fieldProps, {
          passUtil: "$fieldutil",
          render: function render($handleProps) {
            var _childProps, _Object$assign;

            var _props$valuePropName = props.valuePropName,
                valuePropName = _props$valuePropName === void 0 ? 'value' : _props$valuePropName,
                _props$changePropName = props.changePropName,
                changePropName = _props$changePropName === void 0 ? 'onChange' : _props$changePropName,
                _props$focusPropName = props.focusPropName,
                focusPropName = _props$focusPropName === void 0 ? 'onFocus' : _props$focusPropName,
                _props$blurPropName = props.blurPropName,
                blurPropName = _props$blurPropName === void 0 ? 'onBlur' : _props$blurPropName;

            var $fieldutil = $handleProps.$fieldutil,
                _onChange = $handleProps[changePropName],
                onFocus = $handleProps[focusPropName],
                onBlur = $handleProps[blurPropName],
                value = $handleProps[valuePropName],
                restProps = _objectWithoutProperties($handleProps, ["$fieldutil", changePropName, focusPropName, blurPropName, valuePropName].map(_toPropertyKey));

            var $invalid = $fieldutil.$invalid,
                $dirty = $fieldutil.$dirty,
                $touched = $fieldutil.$touched,
                $focused = $fieldutil.$focused,
                $getFirstError = $fieldutil.$getFirstError;
            var childProps;

            switch (component) {
              case _Switch:
              case _Checkbox:
              case _Radio:
              case 'checked':
                var _props$checked = props.checked,
                    checked = _props$checked === void 0 ? true : _props$checked,
                    _props$unchecked = props.unchecked,
                    unchecked = _props$unchecked === void 0 ? false : _props$unchecked;
                childProps = {
                  checked: value === checked,
                  onChange: function onChange(ev) {
                    var newValue = ev && ev.target ? ev.target.checked : ev;

                    _onChange(newValue ? checked : unchecked, ev);
                  }
                };
                break;

              case _Transfer:
                childProps = {
                  targetKeys: value,
                  onChange: _onChange
                };
                break;

              case _Pagination:
                childProps = {
                  current: value,
                  onChange: _onChange
                };
                break;

              case _Upload:
                childProps = {
                  fileList: value && 'fileList' in value ? value.fileList : undefined,
                  onChange: _onChange
                };
                break;

              default:
                childProps = (_childProps = {
                  onCompositionEnd: function onCompositionEnd(ev) {
                    _this.isComposition = false;
                    delete _this.compositionValue;

                    _onChange(ev);
                  },
                  onCompositionStart: function onCompositionStart() {
                    return _this.isComposition = true;
                  }
                }, _defineProperty(_childProps, changePropName, function (ev) {
                  if (_this.isComposition) {
                    _this.compositionValue = ev.target[valuePropName];

                    _this.forceUpdate();
                  } else {
                    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                      rest[_key - 1] = arguments[_key];
                    }

                    _onChange.apply(void 0, [ev].concat(rest));
                  }
                }), _defineProperty(_childProps, valuePropName, 'compositionValue' in _this ? _this.compositionValue : value), _childProps);
                break;
            }

            Object.assign(childProps, (_Object$assign = {}, _defineProperty(_Object$assign, focusPropName, onFocus), _defineProperty(_Object$assign, blurPropName, onBlur), _Object$assign));
            var hasError;

            switch (errorLevel) {
              case 0:
                hasError = $invalid && $dirty && $touched;
                break;

              case 1:
                hasError = $invalid && $dirty;
                break;

              case 2:
                hasError = $invalid;
                break;

              default:
                hasError = false;
                break;
            }

            restProps.className = [restProps.className, hasError && 'has-error', $invalid ? 'is-invalid' : 'is-valid', $dirty ? 'is-dirty' : 'is-pristine', $touched ? 'is-touched' : 'is-untouched', $focused ? 'is-focused' : 'is-unfocused'].filter(Boolean).join(' ');
            var validateResult = hasError ? {
              validateStatus: 'error',
              help: $getFirstError()
            } : {};
            return React__default.createElement(antd.Form.Item, Object.assign({
              required: false
            }, restProps, itemProps, validateResult), React.cloneElement(children, childProps));
          }
        }));
      }
    }]);

    return FormItem;
  }(React.Component);

  FormItem.propTypes = {
    children: PropTypes.element.isRequired,
    itemProps: PropTypes.object,
    //传递给antd的Form.Item的属性
    errorLevel: PropTypes.oneOf([0, 1, 2, 'off']) //$parser $formatter checked unchecked $validators validMessage等传递给 EasyField 组件的额外参数

  };

  Object.keys(reactFormutil).forEach(function (k) {
    if (k !== 'default') Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return reactFormutil[k];
      }
    });
  });
  exports.FormItem = FormItem;
  exports.setErrorLevel = setErrorLevel;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
