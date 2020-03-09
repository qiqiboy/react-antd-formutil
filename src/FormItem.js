import React, { Component, cloneElement, Children, createContext } from 'react';
import { isValidElementType } from 'react-is';
import PropTypes from 'prop-types';
import { Form, Switch, Checkbox, Radio, Transfer, Pagination, Upload } from 'antd';
import { EasyField } from 'react-formutil';
import isEqual from 'react-fast-compare';

const { Consumer, Provider } = createContext();

let errorLevelGlobal = 1;

/**
 * 0 dirty & invalid & touched
 * 1 dirty & invalid
 * 2 invalid
 */
export const setErrorLevel = function(level) {
    errorLevelGlobal = level;
};

function getChildComponent(children) {
    if (children) {
        const childrenType = children.type;

        if (isValidElementType(childrenType)) {
            // SomeComponent.formutiType = xx
            if (childrenType.formutilType) {
                return childrenType.formutilType;
            }

            // <input type="checkbox" />
            if (typeof childrenType === 'string' && children.props.type) {
                return children.props.type;
            }
        }

        return childrenType || children;
    }
}

class FormItem extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
        itemProps: PropTypes.object, //传递给antd的Form.Item的属性
        errorLevel: PropTypes.oneOf([0, 1, 2, 'off']),
        noStyle: PropTypes.bool
        //$parser $formatter checked unchecked $validators validMessage等传递给 EasyField 组件的额外参数
    };

    fields = {};
    registerField = (name, $fieldutil) => ($fieldutil ? (this.fields[name] = $fieldutil) : delete this.fields[name]);
    latestValidationProps = null;
    checkHasError = (errorLevel, $invalid, $dirty, $touched, $focused) => {
        switch (errorLevel) {
            case 0:
                return $invalid && $dirty && $touched;
            case 1:
                return $invalid && $dirty;
            case 2:
                return $invalid;
            default:
                return false;
        }
    };
    fetchCurrentValidationProps = errorLevel => {
        const allFieldutils = Object.keys(this.fields).map(name => this.fields[name].$new());
        const errFieldutils = allFieldutils.filter($fieldutil => $fieldutil.$invalid);

        const $invalid = errFieldutils.length > 0;
        const $dirty = allFieldutils.some($fieldutil => $fieldutil.$dirty);
        const $touched = allFieldutils.some($fieldutil => $fieldutil.$touched);
        const $focused = allFieldutils.some($fieldutil => $fieldutil.$focused);
        const $errors = errFieldutils.map($fieldutil => $fieldutil.$getFirstError());

        return this.getValidationProps(errorLevel, $invalid, $dirty, $touched, $focused, $errors);
    };

    getValidationProps = (errorLevel, $invalid, $dirty, $touched, $focused, $errors) => {
        const hasError = this.checkHasError(errorLevel, $invalid, $dirty, $touched, $focused);

        const validationProps = {
            className: [
                this.props.className,
                hasError && 'has-error',
                $invalid ? 'is-invalid' : 'is-valid',
                $dirty ? 'is-dirty' : 'is-pristine',
                $touched ? 'is-touched' : 'is-untouched',
                $focused ? 'is-focused' : 'is-unfocused'
            ]
                .filter(Boolean)
                .join(' ')
        };

        if (hasError) {
            Object.assign(validationProps, {
                validateStatus: 'error',
                help: $errors
            });
        }

        return validationProps;
    };

    componentDidMount() {
        // eslint-disable-next-line
        this.registerAncestorField?.(this.props.name, this.$fieldutil);
    }

    componentWillUnmount() {
        // eslint-disable-next-line
        this.registerAncestorField?.(this.props.name, null);
    }

    render() {
        const props = this.props;
        const { children: childList, itemProps, errorLevel = errorLevelGlobal, noStyle, ...fieldProps } = props;

        if (!props.name) {
            const validationProps = (this.latestValidationProps = this.fetchCurrentValidationProps(errorLevel));

            /**
             * 检查下最新的校验状态和当前是否一致，不一致的话需要强制刷新下
             */
            Promise.resolve().then(() => {
                if (!isEqual(this.latestValidationProps, this.fetchCurrentValidationProps(errorLevel))) {
                    this.forceUpdate();
                }
            });

            return (
                <Provider value={this.registerField}>
                    <Form.Item {...fieldProps} {...validationProps}>
                        {childList}
                    </Form.Item>
                </Provider>
            );
        }

        const children = typeof childList === 'function' ? childList : Children.only(childList);
        let component = getChildComponent(children);

        switch (component) {
            case Switch:
            case Checkbox:
            case Radio:
                fieldProps.__TYPE__ = 'checked';
                break;

            case Pagination:
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
                        case Switch:
                        case Checkbox:
                        case Radio:
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

                        case Transfer:
                            childProps = {
                                targetKeys: value,
                                onChange
                            };
                            break;

                        case Pagination:
                            childProps = {
                                current: value,
                                onChange
                            };
                            break;

                        case Upload:
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

                    // ansure 'required' could pass to Form.Item
                    if (!restProps.required && fieldProps.required && (!itemProps || !('required' in itemProps))) {
                        restProps.required = true;
                    }

                    const fieldInstance =
                        typeof children === 'function' ? children(childProps) : cloneElement(children, childProps);

                    return (
                        <Consumer>
                            {registerField => {
                                if (noStyle) {
                                    this.$fieldutil = $fieldutil;
                                    this.registerAncestorField = registerField;

                                    return fieldInstance;
                                }

                                const validationProps = this.getValidationProps(
                                    errorLevel,
                                    $invalid,
                                    $dirty,
                                    $touched,
                                    $focused,
                                    $getFirstError()
                                );

                                return (
                                    <Form.Item {...restProps} {...itemProps} {...validationProps}>
                                        {fieldInstance}
                                    </Form.Item>
                                );
                            }}
                        </Consumer>
                    );
                }}
            />
        );
    }
}

export default FormItem;
