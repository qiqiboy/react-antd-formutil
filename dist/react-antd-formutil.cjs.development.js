'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var reactFormutil = require('react-formutil');
var _defineProperty = _interopDefault(require('@babel/runtime/helpers/esm/defineProperty'));
var _toPropertyKey = _interopDefault(require('@babel/runtime/helpers/esm/toPropertyKey'));
var _objectWithoutProperties = _interopDefault(require('@babel/runtime/helpers/esm/objectWithoutProperties'));
var _classCallCheck = _interopDefault(require('@babel/runtime/helpers/esm/classCallCheck'));
var _createClass = _interopDefault(require('@babel/runtime/helpers/esm/createClass'));
var _possibleConstructorReturn = _interopDefault(require('@babel/runtime/helpers/esm/possibleConstructorReturn'));
var _getPrototypeOf = _interopDefault(require('@babel/runtime/helpers/esm/getPrototypeOf'));
var _inherits = _interopDefault(require('@babel/runtime/helpers/esm/inherits'));
var React = require('react');
var React__default = _interopDefault(React);
var reactIs = require('react-is');
var PropTypes = _interopDefault(require('prop-types'));
var antd = require('antd');

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

    if (typeof childrenType !== 'string' && reactIs.isValidElementType(childrenType)) {
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
          }, itemProps, validateResult), React.cloneElement(children, childProps));
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
