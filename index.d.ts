// Type definitions for react-antd-formutil@>=1.0.0
// Project: react-antd-formutil
// Definitions by: qiqiboy <https://github.com/qiqiboy>

import { FormItemProps } from 'antd/es/form/FormItem';
// If the next line occur error, please install rc-field-form or add 'skipLibCheck' to tsconfig.json for disable t.ds check.
import { FieldProps } from 'rc-field-form/es/Field';
import React from 'react';
import { BaseEasyFieldComponentProps, $FieldHandler, Omit, OtherKeys } from 'react-formutil';

export * from 'react-formutil';

export type ErrorLevel = 0 | 1 | 2 | 'off';

// Compatible with antd@3 & antd@4
type FilterPropNames = any extends FieldProps ? 'required' : keyof FieldProps | 'required';

export interface FormItemComponentProps<T = any, P = {}, Fields = {}, WeakFields = Fields>
    extends BaseEasyFieldComponentProps<T, P, Fields, WeakFields>,
        Omit<FormItemProps, FilterPropNames> {
    itemProps?: Omit<FormItemProps, FilterPropNames>;
    errorLevel?: ErrorLevel;
    children: React.ReactElement<any> | (($fieldHandler: Partial<$FieldHandler<T>> & OtherKeys) => React.ReactNode);
}

export class FormItem<T = any, P = {}, Fields = {}, WeakFields = Fields> extends React.Component<
    FormItemComponentProps<T, P, Fields, WeakFields> & OtherKeys
> {}

export function setErrorLevel(errorLevel: ErrorLevel): void;
