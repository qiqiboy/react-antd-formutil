import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Form, Switch, Checkbox, Radio } from 'antd';
import { Field } from 'react-formutil';

const defaultValidators = [
    [
        'required',
        ($value, isCheck, { component, checked }) =>
            component === Checkbox || component === Radio || component === Switch
                ? $value === checked
                : !isEmpty($value)
    ],
    ['maxLength', ($value, len) => isEmpty($value) || $value.length <= len],
    ['minLength', ($value, len) => isEmpty($value) || $value.length >= len],
    ['max', ($value, limit) => isEmpty($value) || $value * 1 <= limit],
    ['min', ($value, limit) => isEmpty($value) || $value * 1 >= limit],
    ['pattern', ($value, regexp) => isEmpty($value) || regexp.test($value)],
    ['enum', ($value, enumeration) => isEmpty($value) || enumeration.indexOf($value) > -1],
    ['checker', ($value, checker) => checker($value)]
].reduce(($validators, item) => {
    const [validKey, validate] = item;

    $validators[validKey] = function validator($value, propValue, { validMessage = {} }) {
        return validate(...arguments) || validMessage[validKey] || `Error input: ${validKey}`;
    };
    return $validators;
}, {});

class FormItem extends Component {
    static propTypes = {
        itemProps: PropTypes.object, //传递给antd的Form.Item的属性
        valuePropName: PropTypes.string, //要包装的交互组件的取值属性
        onChangePropName: PropTypes.string, //要包装的交互组件的绑定数据变动的方法名
        parser: PropTypes.func, //解析过滤输入的值到状态中
        formatter: PropTypes.func, //格式化状态中的值到view组件中
        checked: PropTypes.any,
        unchecked: PropTypes.any,

        validMessage: PropTypes.object //校验错误信息配置
    };

    static defaultProps = {
        valuePropName: 'value',
        onChangePropName: 'onChange',
        parser: value => value,
        formatter: value => value,
        checked: true,
        unchecked: false,
        validMessage: {}
    };

    render() {
        const props = this.props;
        const {
            $validators,
            $defaultValue,
            children,
            parser,
            valuePropName,
            onChangePropName,
            formatter,
            checked,
            unchecked,
            itemProps,
            ...fieldProps
        } = props;

        let component, _defaultValue, childProps;
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

        return (
            <Field
                {...fieldProps}
                checked={checked}
                component={component}
                $validators={{
                    ...defaultValidators,
                    ...$validators
                }}>
                {$util => {
                    const { $invalid, $dirty, $error } = $util;

                    switch (component) {
                        case Switch:
                        case Checkbox:
                        case Radio:
                            childProps = {
                                checked: formatter($util.$value) === checked,
                                onChange: ev => {
                                    const newValue = ev && ev.target ? ev.target.checked : ev;
                                    $util.$render(parser(newValue ? checked : unchecked));
                                }
                            };
                            break;

                        default:
                            childProps = {
                                [valuePropName]: formatter($util.$value),
                                [onChangePropName]: ev => {
                                    const newValue = ev && ev.target ? ev.target[valuePropName] : ev;

                                    $util.$render(parser(newValue));
                                }
                            };
                            break;
                    }

                    return (
                        <Form.Item
                            validateStatus={$invalid && $dirty ? 'error' : ''}
                            help={$invalid && $dirty ? Object.values($error)[0] : ''}
                            {...itemProps}>
                            {cloneElement(children, childProps)}
                        </Form.Item>
                    );
                }}
            </Field>
        );
    }
}

function isEmpty(arg) {
    return typeof arg === 'undefined' || arg === null || arg + '' === '';
}

export default FormItem;
