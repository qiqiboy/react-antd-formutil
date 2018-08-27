import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Form, Switch, Checkbox, Radio } from 'antd';
import { EasyField } from 'react-formutil';

class FormItem extends Component {
    static propTypes = {
        itemProps: PropTypes.object //传递给antd的Form.Item的属性
        //$parser $formatter checked unchecked $validators validMessage等传递给 EasyField 组件的额外参数
    };

    static defaultProps = {
        checked: true,
        unchecked: false
    };

    render() {
        const props = this.props;
        const { children, itemProps, ...fieldProps } = props;

        let component;
        if (children && children.type && typeof children.type === 'function') {
            component = children.type;
        }

        switch (component) {
            case Switch:
            case Checkbox:
            case Radio:
                fieldProps.__TYPE__ = 'checked';
                break;

            default:
                fieldProps.__TYPE__ = 'empty';
                break;
        }

        return (
            <EasyField
                {...fieldProps}
                render={({ $fieldutil, onChange, value }) => {
                    const { $invalid, $dirty, $error } = $fieldutil;

                    let childProps;
                    switch (component) {
                        case Switch:
                        case Checkbox:
                        case Radio:
                            childProps = {
                                checked: value === props.checked,
                                onChange: ev => {
                                    const newValue = ev && ev.target ? ev.target.checked : ev;
                                    onChange(newValue ? props.checked : props.unchecked, ev);
                                }
                            };
                            break;

                        default:
                            childProps = {
                                onChange,
                                value
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
            />
        );
    }
}

export default FormItem;
