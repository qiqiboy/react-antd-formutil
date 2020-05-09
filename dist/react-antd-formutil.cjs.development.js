'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var reactFormutil = require('react-formutil');
var React = require('react');
var React__default = _interopDefault(React);
var reactIs = require('react-is');
var PropTypes = _interopDefault(require('prop-types'));
var antd = require('antd');
var isEqual = _interopDefault(require('react-fast-compare'));

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

var defineProperty = _defineProperty;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _toPrimitive(input, hint) {
  if (_typeof_1(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof_1(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

var toPrimitive = _toPrimitive;

function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof_1(key) === "symbol" ? key : String(key);
}

var toPropertyKey = _toPropertyKey;

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

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
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

var objectWithoutProperties = _objectWithoutProperties;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

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

var createClass = _createClass;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var isNativeReflectConstruct = _isNativeReflectConstruct;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

function _createSuper(Derived) {
  return function () {
    var Super = getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

var createSuper = _createSuper;

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

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
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

var _createContext = React.createContext(),
    Consumer = _createContext.Consumer,
    Provider = _createContext.Provider;

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

    if (reactIs.isValidElementType(childrenType)) {
      // SomeComponent.formutiType = xx
      if (childrenType.formutilType) {
        return childrenType.formutilType;
      } // <input type="checkbox" />


      if (typeof childrenType === 'string' && children.props.type) {
        return children.props.type;
      }

      if (!isUglify) {
        return childrenType.displayName || childrenType.name || childrenType;
      }
    }

    return childrenType || children;
  }
}

var FormItem = /*#__PURE__*/function (_Component) {
  inherits(FormItem, _Component);

  var _super = createSuper(FormItem);

  function FormItem() {
    var _this;

    classCallCheck(this, FormItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.fields = {};

    _this.registerField = function (name, $fieldutil) {
      return $fieldutil ? _this.fields[name] = $fieldutil : delete _this.fields[name];
    };

    _this.latestValidationProps = null;

    _this.checkHasError = function (errorLevel, $invalid, $dirty, $touched, $focused) {
      switch (errorLevel) {
        case 0:
          return $invalid && $dirty && $touched;

        case 1:
          return $invalid && $dirty;

        case 2:
          return $invalid;

        default:
          return false;
      }
    };

    _this.fetchCurrentValidationProps = function (errorLevel) {
      var allFieldutils = Object.keys(_this.fields).map(function (name) {
        return _this.fields[name].$new();
      });
      var errFieldutils = allFieldutils.filter(function ($fieldutil) {
        return $fieldutil.$invalid;
      });
      var $invalid = errFieldutils.length > 0;
      var $dirty = allFieldutils.some(function ($fieldutil) {
        return $fieldutil.$dirty;
      });
      var $touched = allFieldutils.some(function ($fieldutil) {
        return $fieldutil.$touched;
      });
      var $focused = allFieldutils.some(function ($fieldutil) {
        return $fieldutil.$focused;
      });
      var $errors = errFieldutils.map(function ($fieldutil) {
        return $fieldutil.$getFirstError();
      });
      return _this.getValidationProps(errorLevel, $invalid, $dirty, $touched, $focused, $errors);
    };

    _this.getValidationProps = function (errorLevel, $invalid, $dirty, $touched, $focused, $errors) {
      var hasError = _this.checkHasError(errorLevel, $invalid, $dirty, $touched, $focused);

      var validationProps = {
        className: [_this.props.className, hasError && 'has-error', $invalid ? 'is-invalid' : 'is-valid', $dirty ? 'is-dirty' : 'is-pristine', $touched ? 'is-touched' : 'is-untouched', $focused ? 'is-focused' : 'is-unfocused'].filter(Boolean).join(' ')
      };

      if (hasError) {
        Object.assign(validationProps, {
          validateStatus: 'error',
          help: $errors
        });
      }

      return validationProps;
    };

    return _this;
  }

  createClass(FormItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$registerAncesto;

      // eslint-disable-next-line
      (_this$registerAncesto = this.registerAncestorField) === null || _this$registerAncesto === void 0 ? void 0 : _this$registerAncesto.call(this, this.props.name, this.$fieldutil);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$registerAncesto2;

      // eslint-disable-next-line
      (_this$registerAncesto2 = this.registerAncestorField) === null || _this$registerAncesto2 === void 0 ? void 0 : _this$registerAncesto2.call(this, this.props.name, null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;

      var childList = props.children,
          itemProps = props.itemProps,
          _props$errorLevel = props.errorLevel,
          errorLevel = _props$errorLevel === void 0 ? errorLevelGlobal : _props$errorLevel,
          noStyle = props.noStyle,
          fieldProps = objectWithoutProperties(props, ["children", "itemProps", "errorLevel", "noStyle"]);

      if (!props.name) {
        var validationProps = this.latestValidationProps = this.fetchCurrentValidationProps(errorLevel);
        /**
         * 检查下最新的校验状态和当前是否一致，不一致的话需要强制刷新下
         */

        Promise.resolve().then(function () {
          if (!isEqual(_this2.latestValidationProps, _this2.fetchCurrentValidationProps(errorLevel))) {
            _this2.forceUpdate();
          }
        });
        return /*#__PURE__*/React__default.createElement(Provider, {
          value: this.registerField
        }, /*#__PURE__*/React__default.createElement(antd.Form.Item, Object.assign({}, fieldProps, validationProps), typeof childList === 'function' ? childList() : childList));
      } // If $memo is true, pass the children to Field for SCU diffing.


      if (props.$memo === true) {
        fieldProps.__DIFF__ = childList;
      }

      var children = typeof childList === 'function' ? childList : React.Children.only(childList);
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

      return /*#__PURE__*/React__default.createElement(reactFormutil.EasyField, Object.assign({}, fieldProps, {
        passUtil: "$fieldutil",
        render: function render($handleProps) {
          var _value$fileList, _childProps, _Object$assign;

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
              restProps = objectWithoutProperties($handleProps, ["$fieldutil", changePropName, focusPropName, blurPropName, valuePropName].map(toPropertyKey));

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
                fileList: (_value$fileList = value === null || value === void 0 ? void 0 : value.fileList) !== null && _value$fileList !== void 0 ? _value$fileList : value,
                onChange: _onChange
              };
              break;

            default:
              childProps = (_childProps = {
                onCompositionEnd: function onCompositionEnd(ev) {
                  _this2.isComposition = false;
                  delete _this2.compositionValue;

                  _onChange(ev);
                },
                onCompositionStart: function onCompositionStart() {
                  return _this2.isComposition = true;
                }
              }, defineProperty(_childProps, changePropName, function (ev) {
                if (_this2.isComposition) {
                  _this2.compositionValue = ev.target[valuePropName];

                  _this2.forceUpdate();
                } else {
                  for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    rest[_key2 - 1] = arguments[_key2];
                  }

                  _onChange.apply(void 0, [ev].concat(rest));
                }
              }), defineProperty(_childProps, valuePropName, 'compositionValue' in _this2 ? _this2.compositionValue : value), defineProperty(_childProps, blurPropName, function () {
                if (_this2.isComposition) {
                  _this2.isComposition = false;
                  delete _this2.compositionValue;

                  _onChange.apply(void 0, arguments);
                }

                return onBlur.apply(void 0, arguments);
              }), _childProps);
              break;
          }

          Object.assign((_Object$assign = {}, defineProperty(_Object$assign, focusPropName, onFocus), defineProperty(_Object$assign, blurPropName, onBlur), _Object$assign), childProps); // ansure 'required' could pass to Form.Item

          if (!restProps.required && fieldProps.required && (!itemProps || !('required' in itemProps))) {
            restProps.required = true;
          }

          var fieldInstance = typeof children === 'function' ? children(childProps) : React.cloneElement(children, childProps);
          return /*#__PURE__*/React__default.createElement(Consumer, null, function (registerField) {
            if (noStyle) {
              _this2.$fieldutil = $fieldutil;
              _this2.registerAncestorField = registerField;
              return fieldInstance;
            }

            var validationProps = _this2.getValidationProps(errorLevel, $invalid, $dirty, $touched, $focused, $getFirstError());

            return /*#__PURE__*/React__default.createElement(antd.Form.Item, Object.assign({}, restProps, itemProps, validationProps), fieldInstance);
          });
        }
      }));
    }
  }]);

  return FormItem;
}(React.Component);

FormItem.propTypes = {
  children: function children(props) {
    var _PropTypes$node;

    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    if ('name' in props) {
      var _PropTypes$oneOfType;

      return (_PropTypes$oneOfType = PropTypes.oneOfType([PropTypes.element, PropTypes.func])).isRequired.apply(_PropTypes$oneOfType, [props].concat(args));
    }

    return (_PropTypes$node = PropTypes.node).isRequired.apply(_PropTypes$node, [props].concat(args));
  },
  itemProps: PropTypes.object,
  //传递给antd的Form.Item的属性
  errorLevel: PropTypes.oneOf([0, 1, 2, 'off']),
  noStyle: PropTypes.bool //$parser $formatter checked unchecked $validators validMessage等传递给 EasyField 组件的额外参数

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
