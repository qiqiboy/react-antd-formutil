import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { withField } from 'react-formutil';

class FormItem extends Component {
    static propTypes = {
        itemProps: PropTypes.object, //传递给antd的Form.Item的属性
        valuePropName: PropTypes.string, //要包装的交互组件的取值属性
        onChangePropName: PropTypes.string, //要包装的交互组件的绑定数据变动的方法名
        parser: PropTypes.func, //解析过滤输入的值到状态中
        formatter: PropTypes.func, //格式化状态中的值到view组件中

        validMessage: PropTypes.object //校验错误信息配置
    };

    static defaultProps = {
        valuePropName: 'value',
        onChangePropName: 'onChange',
        parser: value => value,
        formatter: value => value,
        validMessage: {}
    };

    render() {
        const props = this.props;
        const {
            $invalid,
            $dirty,
            $error,
            children,
            parser,
            valuePropName,
            onChangePropName,
            formatter,
            itemProps
        } = props;

        return (
            <Form.Item
                validateStatus={$invalid && $dirty ? 'error' : ''}
                help={$invalid && $dirty ? Object.values($error)[0] : ''}
                {...itemProps}>
                {cloneElement(children, {
                    [onChangePropName]: ev => {
                        if (ev && ev.target) {
                            props.$render(parser(ev.target[valuePropName]));
                        } else {
                            props.$render(parser(ev));
                        }
                    },
                    [valuePropName]: formatter(props.$value)
                })}
            </Form.Item>
        );
    }
}

function isEmpty(arg) {
    return typeof arg === 'undefined' || arg === null || arg + '' === '';
}

export default withField(FormItem, {
    $validators: [
        [
            'required',
            ($value, check, { type, checked }) =>
                type === 'checkbox' || type === 'radio' ? $value === checked : !!($value + '')
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
    }, {})
});
