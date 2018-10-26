// Type definitions for react-antd-formutil@>0.1.0
// Project: react-antd-formutil
// Definitions by: qiqiboy <https://github.com/qiqiboy>

import { FormItemProps } from 'antd/lib/form/FormItem';
import React from 'react';
import { EasyFieldComponentProps, FormFields } from 'react-formutil';

export * from 'react-formutil';

export interface FormItemComponentProps<T = any, Validators = {}> extends EasyFieldComponentProps<T, Validators> {
    itemProps: FormItemProps;
    children: React.ReactElement;
}

export class FormItem extends React.Component<Partial<FormItemComponentProps> & FormFields> {}
