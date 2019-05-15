// Type definitions for react-antd-formutil@>0.1.0
// Project: react-antd-formutil
// Definitions by: qiqiboy <https://github.com/qiqiboy>

import { FormItemProps } from 'antd/lib/form/FormItem';
import React from 'react';
import { BaseEasyFieldComponentProps, Omit, OtherKeys } from 'react-formutil';

export * from 'react-formutil';

export type ErrorLevel = 0 | 1 | 2 | 'off';

export interface FormItemComponentProps<T = any, P = {}, Fields = {}, WeakFields = Fields>
    extends BaseEasyFieldComponentProps<T, P, Fields, WeakFields>, Omit<FormItemProps, 'required'> {
    itemProps?: FormItemProps;
    errorLevel?: ErrorLevel;
    children: React.ReactElement<any>;
}

export class FormItem<T = any, P = {}, Fields = {}, WeakFields = Fields> extends React.Component<
    FormItemComponentProps<T, P, Fields, WeakFields> & OtherKeys
> {}

export function setErrorLevel(errorLevel: ErrorLevel): void;
