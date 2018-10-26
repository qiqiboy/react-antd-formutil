// Type definitions for react-antd-formutil@>0.1.0
// Project: react-antd-formutil
// Definitions by: qiqiboy <https://github.com/qiqiboy>

import { FormItemProps } from 'antd/lib/form/FormItem';
import React from 'react';
import { EasyFieldComponentProps, FormFields } from 'react-formutil';

export * from 'react-formutil';

export interface FormItemComponentProps<T = any, P = {}, Fields = {}, WeakFields = Fields>
    extends EasyFieldComponentProps<T, P, Fields, WeakFields> {
    itemProps: FormItemProps;
    children: React.ReactElement<{}>;
}

export class FormItem<T = any, P = {}, Fields = {}, WeakFields = Fields> extends React.Component<
    Partial<FormItemComponentProps<T, P, Fields, WeakFields>> & FormFields
> {}
