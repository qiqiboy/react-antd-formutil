import { EasyField } from 'react-formutil';
export * from 'react-formutil';
import React, { Children, cloneElement, Component } from 'react';
import { isValidElementType } from 'react-is';
import PropTypes from 'prop-types';
import { Switch, Mention, Form, Checkbox, Radio, Transfer, Pagination } from 'antd';

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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");

  return typeof key === "symbol" ? key : String(key);
}

var errorLevelGlobal = 1;
/**
 * 0 dirty & invalid & touched
 * 1 dirty & invalid
 * 2 invalid
 */

var setErrorLevel = function setErrorLevel(level) {
  errorLevelGlobal = level;
};
var isUglify = Switch.name !== 'Switch';

var _Switch = isUglify ? Switch : 'Switch';

var _Checkbox = isUglify ? Checkbox : 'Checkbox';

var _Radio = isUglify ? Radio : 'Radio';

var _Mention = isUglify ? Mention : 'Mention';

var _Transfer = isUglify ? Transfer : 'Transfer';

var _Pagination = isUglify ? Pagination : 'Pagination';

function getChildComponent(children) {
  if (children) {
    var childrenType = children.type;

    if (typeof childrenType !== 'string' && isValidElementType(childrenType)) {
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

var FormItem =
/*#__PURE__*/
function (_Component) {
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

      var children = Children.only(childList);
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

      return React.createElement(EasyField, Object.assign({}, fieldProps, {
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

            case _Mention:
              childProps = {
                defaultValue: Mention.toContentState(value || ''),
                onChange: function onChange(contentState) {
                  var newValue = Mention.toString(contentState);

                  if (newValue !== value) {
                    _onChange(newValue);
                  }
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

          restProps.className = [restProps.className, hasError && 'has-error', $invalid && 'is-invalid', $dirty && 'is-dirty', $touched && 'is-touched', $focused && 'is-focused'].filter(Boolean).join(' ');
          var validateResult = hasError ? {
            validateStatus: 'error',
            help: $getFirstError()
          } : {};
          return React.createElement(Form.Item, Object.assign({}, restProps, itemProps, validateResult), cloneElement(children, childProps));
        }
      }));
    }
  }]);

  return FormItem;
}(Component);

FormItem.propTypes = {
  children: PropTypes.element.isRequired,
  itemProps: PropTypes.object,
  //传递给antd的Form.Item的属性
  errorLevel: PropTypes.oneOf([0, 1, 2, 'off']) //$parser $formatter checked unchecked $validators validMessage等传递给 EasyField 组件的额外参数

};

export { FormItem, setErrorLevel };
//# sourceMappingURL=react-antd-formutil.esm.development.js.map
