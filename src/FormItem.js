import React, { Component, cloneElement, Children } from 'react';
import { isValidElementType } from 'react-is';
import PropTypes from 'prop-types';
// remember to add reserve array words in roollup.config.js
import { Form, Switch, Checkbox, Radio, Transfer, Pagination, Upload } from 'antd';
import { EasyField } from 'react-formutil';

let errorLevelGlobal = 1;

/**
 * 0 dirty & invalid & touched
 * 1 dirty & invalid
 * 2 invalid
 */
export const setErrorLevel = function(level) {
    errorLevelGlobal = level;
};

const isUglify = Switch.name !== 'Switch';

const _Switch = isUglify ? Switch : 'Switch';
const _Checkbox = isUglify ? Checkbox : 'Checkbox';
const _Radio = isUglify ? Radio : 'Radio';
const _Transfer = isUglify ? Transfer : 'Transfer';
const _Pagination = isUglify ? Pagination : 'Pagination';
const _Upload = isUglify ? Upload : 'Upload';

function getChildComponent(children) {
    if (children) {
        const childrenType = children.type;

        if (typeof childrenType !== 'string' && isValidElementType(childrenType)) {
            if (childrenType.formutilType) {
                return childrenType.formutilType;
            }

            if (isUglify) {
                return childrenType;
            }

            return childrenType.displayName || childrenType.name;
        }

        return children.props?.type || childrenType;
    }
}

class FormItem extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
        itemProps: PropTypes.object, //传递给antd的Form.Item的属性
        errorLevel: PropTypes.oneOf([0, 1, 2, 'off'])
        //$parser $formatter checked unchecked $validators validMessage等传递给 EasyField 组件的额外参数
    };

    render() {
        const props = this.props;
        const { children: childList, itemProps, errorLevel = errorLevelGlobal, ...fieldProps } = props;
        const children = typeof childList === 'function' ? childList : Children.only(childList);

        let component = getChildComponent(children);

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

        return (
            <EasyField
                {...fieldProps}
                passUtil="$fieldutil"
                render={$handleProps => {
                    const {
                        valuePropName = 'value',
                        changePropName = 'onChange',
                        focusPropName = 'onFocus',
                        blurPropName = 'onBlur'
                    } = props;
                    const {
                        $fieldutil,

                        [changePropName]: onChange,
                        [focusPropName]: onFocus,
                        [blurPropName]: onBlur,
                        [valuePropName]: value,

                        ...restProps
                    } = $handleProps;
                    const { $invalid, $dirty, $touched, $focused, $getFirstError } = $fieldutil;

                    let childProps;
                    switch (component) {
                        case _Switch:
                        case _Checkbox:
                        case _Radio:
                        case 'checked':
                            const { checked = true, unchecked = false } = props;
                            childProps = {
                                checked: value === checked,
                                onChange: ev => {
                                    const newValue = ev && ev.target ? ev.target.checked : ev;
                                    onChange(newValue ? checked : unchecked, ev);
                                }
                            };
                            break;

                        case _Transfer:
                            childProps = {
                                targetKeys: value,
                                onChange
                            };
                            break;

                        case _Pagination:
                            childProps = {
                                current: value,
                                onChange
                            };
                            break;

                        case _Upload:
                            childProps = {
                                fileList: value?.fileList ?? value,
                                onChange
                            };
                            break;

                        default:
                            childProps = {
                                onCompositionEnd: ev => {
                                    this.isComposition = false;
                                    delete this.compositionValue;
                                    onChange(ev);
                                },
                                onCompositionStart: () => (this.isComposition = true),
                                [changePropName]: (ev, ...rest) => {
                                    if (this.isComposition) {
                                        this.compositionValue = ev.target[valuePropName];
                                        this.forceUpdate();
                                    } else {
                                        onChange(ev, ...rest);
                                    }
                                },
                                [valuePropName]: 'compositionValue' in this ? this.compositionValue : value
                            };
                            break;
                    }

                    Object.assign(childProps, {
                        [focusPropName]: onFocus,
                        [blurPropName]: onBlur
                    });

                    let hasError;

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

                    restProps.className = [
                        restProps.className,
                        hasError && 'has-error',
                        $invalid ? 'is-invalid' : 'is-valid',
                        $dirty ? 'is-dirty' : 'is-pristine',
                        $touched ? 'is-touched' : 'is-untouched',
                        $focused ? 'is-focused' : 'is-unfocused'
                    ]
                        .filter(Boolean)
                        .join(' ');

                    const validateResult = hasError
                        ? {
                              validateStatus: 'error',
                              help: $getFirstError()
                          }
                        : {};

                    return (
                        <Form.Item required={false} {...restProps} {...itemProps} {...validateResult}>
                            {typeof children === 'function' ? children(childProps) : cloneElement(children, childProps)}
                        </Form.Item>
                    );
                }}
            />
        );
    }
}

export default FormItem;
