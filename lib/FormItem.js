var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Form, Switch, Checkbox, Radio } from 'antd';
import { Field } from 'react-formutil';

var defaultValidators = [['required', function ($value, isCheck, _ref) {
    var component = _ref.component,
        checked = _ref.checked;
    return component === Checkbox || component === Radio || component === Switch ? $value === checked : !isEmpty($value);
}], ['maxLength', function ($value, len) {
    return isEmpty($value) || $value.length <= len;
}], ['minLength', function ($value, len) {
    return isEmpty($value) || $value.length >= len;
}], ['max', function ($value, limit) {
    return isEmpty($value) || $value * 1 <= limit;
}], ['min', function ($value, limit) {
    return isEmpty($value) || $value * 1 >= limit;
}], ['pattern', function ($value, regexp) {
    return isEmpty($value) || regexp.test($value);
}], ['enum', function ($value, enumeration) {
    return isEmpty($value) || enumeration.indexOf($value) > -1;
}], ['checker', function ($value, checker) {
    return checker($value);
}]].reduce(function ($validators, item) {
    var _item = _slicedToArray(item, 2),
        validKey = _item[0],
        validate = _item[1];

    $validators[validKey] = function validator($value, propValue, _ref2) {
        var _ref2$validMessage = _ref2.validMessage,
            validMessage = _ref2$validMessage === undefined ? {} : _ref2$validMessage;

        return validate.apply(undefined, arguments) || validMessage[validKey] || 'Error input: ' + validKey;
    };
    return $validators;
}, {});

var FormItem = (_temp = _class = function (_Component) {
    _inherits(FormItem, _Component);

    function FormItem() {
        _classCallCheck(this, FormItem);

        return _possibleConstructorReturn(this, (FormItem.__proto__ || Object.getPrototypeOf(FormItem)).apply(this, arguments));
    }

    _createClass(FormItem, [{
        key: 'render',
        value: function render() {
            var props = this.props;

            var $validators = props.$validators,
                $defaultValue = props.$defaultValue,
                children = props.children,
                parser = props.parser,
                valuePropName = props.valuePropName,
                onChangePropName = props.onChangePropName,
                formatter = props.formatter,
                checked = props.checked,
                unchecked = props.unchecked,
                itemProps = props.itemProps,
                fieldProps = _objectWithoutProperties(props, ['$validators', '$defaultValue', 'children', 'parser', 'valuePropName', 'onChangePropName', 'formatter', 'checked', 'unchecked', 'itemProps']);

            var component = void 0,
                _defaultValue = void 0,
                childProps = void 0;
            if (children && children.type && typeof children.type === 'function') {
                component = children.type;
            }

            switch (component) {
                case Switch:
                case Checkbox:
                case Radio:
                    _defaultValue = unchecked;
                    break;

                default:
                    break;
            }

            if ('$defaultValue' in props) {
                fieldProps.$defaultValue = $defaultValue;
            } else {
                fieldProps.$defaultValue = _defaultValue;
            }

            return React.createElement(
                Field,
                Object.assign({}, fieldProps, {
                    checked: checked,
                    component: component,
                    $validators: Object.assign({}, defaultValidators, $validators) }),
                function ($util) {
                    var _childProps;

                    var $invalid = $util.$invalid,
                        $dirty = $util.$dirty,
                        $error = $util.$error;


                    switch (component) {
                        case Switch:
                        case Checkbox:
                        case Radio:
                            childProps = {
                                checked: formatter($util.$value) === checked,
                                onChange: function onChange(ev) {
                                    var newValue = ev && ev.target ? ev.target.checked : ev;
                                    $util.$render(parser(newValue ? checked : unchecked));
                                }
                            };
                            break;

                        default:
                            childProps = (_childProps = {}, _defineProperty(_childProps, valuePropName, formatter($util.$value)), _defineProperty(_childProps, onChangePropName, function (ev) {
                                var newValue = ev && ev.target ? ev.target[valuePropName] : ev;

                                $util.$render(parser(newValue));
                            }), _childProps);
                            break;
                    }

                    return React.createElement(
                        Form.Item,
                        Object.assign({
                            validateStatus: $invalid && $dirty ? 'error' : '',
                            help: $invalid && $dirty ? Object.values($error)[0] : ''
                        }, itemProps),
                        cloneElement(children, childProps)
                    );
                }
            );
        }
    }]);

    return FormItem;
}(Component), _class.propTypes = {
    itemProps: PropTypes.object, //传递给antd的Form.Item的属性
    valuePropName: PropTypes.string, //要包装的交互组件的取值属性
    onChangePropName: PropTypes.string, //要包装的交互组件的绑定数据变动的方法名
    parser: PropTypes.func, //解析过滤输入的值到状态中
    formatter: PropTypes.func, //格式化状态中的值到view组件中
    checked: PropTypes.any,
    unchecked: PropTypes.any,

    validMessage: PropTypes.object //校验错误信息配置
}, _class.defaultProps = {
    valuePropName: 'value',
    onChangePropName: 'onChange',
    parser: function parser(value) {
        return value;
    },
    formatter: function formatter(value) {
        return value;
    },
    checked: true,
    unchecked: false,
    validMessage: {}
}, _temp);


function isEmpty(arg) {
    return typeof arg === 'undefined' || arg === null || arg + '' === '';
}

export default FormItem;