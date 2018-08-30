var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Form, Switch, Checkbox, Radio, Mention, Transfer } from 'antd';
import { EasyField } from 'react-formutil';

var isUglify = Switch.name !== 'Switch';

var _Switch = isUglify ? Switch : 'Switch';
var _Checkbox = isUglify ? Checkbox : 'Checkbox';
var _Radio = isUglify ? Radio : 'Radio';
var _Mention = isUglify ? Mention : 'Mention';
var _Transfer = isUglify ? Transfer : 'Transfer';

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

                default:
                    fieldProps.__TYPE__ = 'empty';
                    break;
            }

            return React.createElement(EasyField, Object.assign({}, fieldProps, {
                passUtil: '$fieldutil',
                render: function render(_ref) {
                    var $fieldutil = _ref.$fieldutil,
                        _onChange = _ref.onChange,
                        onFocus = _ref.onFocus,
                        onBlur = _ref.onBlur,
                        value = _ref.value;
                    var $invalid = $fieldutil.$invalid,
                        $dirty = $fieldutil.$dirty,
                        $error = $fieldutil.$error;


                    var childProps = void 0;
                    switch (component) {
                        case _Switch:
                        case _Checkbox:
                        case _Radio:
                            childProps = {
                                checked: value === props.checked,
                                onChange: function onChange(ev) {
                                    var newValue = ev && ev.target ? ev.target.checked : ev;
                                    _onChange(newValue ? props.checked : props.unchecked, ev);
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

                        default:
                            childProps = {
                                onChange: _onChange,
                                value: value
                            };
                            break;
                    }

                    Object.assign(childProps, { onFocus: onFocus, onBlur: onBlur });

                    return React.createElement(
                        Form.Item,
                        Object.assign({
                            validateStatus: $invalid && $dirty ? 'error' : '',
                            help: $invalid && $dirty ? Object.values($error)[0] : ''
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
}, _class.defaultProps = {
    checked: true,
    unchecked: false
}, _temp);


export default FormItem;