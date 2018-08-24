var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { withField } from 'react-formutil';

var FormItem = (_temp = _class = function (_Component) {
    _inherits(FormItem, _Component);

    function FormItem() {
        _classCallCheck(this, FormItem);

        return _possibleConstructorReturn(this, (FormItem.__proto__ || Object.getPrototypeOf(FormItem)).apply(this, arguments));
    }

    _createClass(FormItem, [{
        key: 'render',
        value: function render() {
            var _cloneElement;

            var props = this.props;
            var $invalid = props.$invalid,
                $dirty = props.$dirty,
                $error = props.$error,
                children = props.children,
                parser = props.parser,
                valuePropName = props.valuePropName,
                onChangePropName = props.onChangePropName,
                formatter = props.formatter,
                itemProps = props.itemProps;


            return React.createElement(
                Form.Item,
                Object.assign({
                    validateStatus: $invalid && $dirty ? 'error' : '',
                    help: $invalid && $dirty ? Object.values($error)[0] : ''
                }, itemProps),
                cloneElement(children, (_cloneElement = {}, _defineProperty(_cloneElement, onChangePropName, function (ev) {
                    if (ev && ev.target) {
                        props.$render(parser(ev.target[valuePropName]));
                    } else {
                        props.$render(parser(ev));
                    }
                }), _defineProperty(_cloneElement, valuePropName, formatter(props.$value)), _cloneElement))
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
    validMessage: {}
}, _temp);


function isEmpty(arg) {
    return typeof arg === 'undefined' || arg === null || arg + '' === '';
}

export default withField(FormItem, {
    $validators: [['required', function ($value) {
        return !!($value + '');
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

        $validators[validKey] = function validator($value, propValue, _ref) {
            var _ref$validMessage = _ref.validMessage,
                validMessage = _ref$validMessage === undefined ? {} : _ref$validMessage;

            return propValue === null || validate.apply(undefined, arguments) || validMessage[validKey] || 'Error input: ' + validKey;
        };
        return $validators;
    }, {})
});