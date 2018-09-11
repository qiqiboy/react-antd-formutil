// Type definitions for react-antd-formutil@>0.1.0
// Project: react-antd-formutil
// Definitions by: qiqiboy <https://github.com/qiqiboy>

import { FormItemProps } from 'antd/lib/form/FormItem';
import React from 'react';
import ReactFormutil from 'react-formutil';

export { Field, withField, Form, withForm, EasyField, connect } from 'react-formutil';

interface FormItemComponentProps extends ReactFormutil.EasyFieldComponentProps {
    itemProps?: FormItemProps;
    children: React.ReactElement<any>;

    [otherName: string]: any;
}

export class FormItem extends React.Component<FormItemComponentProps, any> {}
