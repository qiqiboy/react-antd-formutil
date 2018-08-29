import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Form, Switch, Checkbox, Radio, Mention, Transfer } from 'antd';
import { EasyField } from 'react-formutil';

const isUglify = Switch.name !== 'Switch';

const _Switch = isUglify ? Switch : 'Switch';
const _Checkbox = isUglify ? Checkbox : 'Checkbox';
const _Radio = isUglify ? Radio : 'Radio';
const _Mention = isUglify ? Mention : 'Mention';
const _Transfer = isUglify ? Transfer : 'Transfer';

class FormItem extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
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

        return (
            <EasyField
                {...fieldProps}
                passUtil="$fieldutil"
                render={({ $fieldutil, onChange, onFocus, onBlur, value }) => {
                    const { $invalid, $dirty, $error } = $fieldutil;

                    let childProps;
                    switch (component) {
                        case _Switch:
                        case _Checkbox:
                        case _Radio:
                            childProps = {
                                checked: value === props.checked,
                                onChange: ev => {
                                    const newValue = ev && ev.target ? ev.target.checked : ev;
                                    onChange(newValue ? props.checked : props.unchecked, ev);
                                }
                            };
                            break;

                        case _Mention:
                            childProps = {
                                defaultValue: Mention.toContentState(value || ''),
                                onChange: contentState => {
                                    const newValue = Mention.toString(contentState);

                                    if (newValue !== value) {
                                        onChange(newValue);
                                    }
                                }
                            };
                            break;

                        case _Transfer:
                            childProps = {
                                targetKeys: value,
                                onChange
                            };
                            break;

                        default:
                            childProps = {
                                onChange,
                                value
                            };
                            break;
                    }

                    Object.assign(childProps, { onFocus, onBlur });

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
