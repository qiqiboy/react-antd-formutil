var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Form, Switch, Checkbox, Radio, Mention, Transfer, Pagination } from 'antd';
import { EasyField } from 'react-formutil';

var errorLevel = 1;

/**
 * 0 dirty & invalid & touched
 * 1 dirty & invalid
 * 2 invalid
 */
export var setErrorLevel = function setErrorLevel(level) {
    errorLevel = level;
};

var isUglify = Switch.name !== 'Switch';

var _Switch = isUglify ? Switch : 'Switch';
var _Checkbox = isUglify ? Checkbox : 'Checkbox';
var _Radio = isUglify ? Radio : 'Radio';
var _Mention = isUglify ? Mention : 'Mention';
var _Transfer = isUglify ? Transfer : 'Transfer';
var _Pagination = isUglify ? Pagination : 'Pagination';

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

            var children = props.children,
                itemProps = props.itemProps,
                fieldProps = _objectWithoutProperties(props, ['children', 'itemProps']);

            var component = void 0;
            if (children && children.type && typeof children.type === 'function') {
                component = isUglify ? children.type : children.type.name;
            }

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

                default:
                    fieldProps.__TYPE__ = 'empty';
                    break;
            }

            return React.createElement(EasyField, Object.assign({}, fieldProps, {
                passUtil: '$fieldutil',
                render: function render(_ref) {
                    var _childProps, _Object$assign;

                    var $fieldutil = _ref.$fieldutil,
                        restProps = _objectWithoutProperties(_ref, ['$fieldutil']);

                    var $invalid = $fieldutil.$invalid,
                        $dirty = $fieldutil.$dirty,
                        $touched = $fieldutil.$touched,
                        $getFirstError = $fieldutil.$getFirstError;
                    var _props$valuePropName = props.valuePropName,
                        valuePropName = _props$valuePropName === undefined ? 'value' : _props$valuePropName,
                        _props$changePropName = props.changePropName,
                        changePropName = _props$changePropName === undefined ? 'onChange' : _props$changePropName,
                        _props$focusPropName = props.focusPropName,
                        focusPropName = _props$focusPropName === undefined ? 'onFocus' : _props$focusPropName,
                        _props$blurPropName = props.blurPropName,
                        blurPropName = _props$blurPropName === undefined ? 'onBlur' : _props$blurPropName;

                    var _onChange = restProps[changePropName];
                    var onFocus = restProps[focusPropName];
                    var onBlur = restProps[blurPropName];
                    var value = restProps[valuePropName];

                    var childProps = void 0;
                    switch (component) {
                        case _Switch:
                        case _Checkbox:
                        case _Radio:
                            var _props$checked = props.checked,
                                checked = _props$checked === undefined ? true : _props$checked,
                                _props$unchecked = props.unchecked,
                                unchecked = _props$unchecked === undefined ? false : _props$unchecked;

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
                            childProps = (_childProps = {}, _defineProperty(_childProps, changePropName, _onChange), _defineProperty(_childProps, valuePropName, value), _childProps);
                            break;
                    }

                    Object.assign(childProps, (_Object$assign = {}, _defineProperty(_Object$assign, focusPropName, onFocus), _defineProperty(_Object$assign, blurPropName, onBlur), _Object$assign));

                    var hasError = void 0;

                    switch (errorLevel) {
                        case 0:
                            hasError = $invalid && $dirty & $touched;
                            break;
                        case 1:
                            hasError = $invalid && $dirty;
                            break;
                        default:
                            hasError = $invalid;
                            break;
                    }

                    return React.createElement(
                        Form.Item,
                        Object.assign({
                            validateStatus: hasError ? 'error' : '',
                            help: hasError ? $getFirstError() : ''
                        }, itemProps),
                        cloneElement(children, childProps)
                    );
                }
            }));
        }
    }]);

    return FormItem;
}(Component), _class.propTypes = {
    children: PropTypes.element.isRequired,
    itemProps: PropTypes.object //传递给antd的Form.Item的属性
    //$parser $formatter checked unchecked $validators validMessage等传递给 EasyField 组件的额外参数
}, _temp);


export default FormItem;