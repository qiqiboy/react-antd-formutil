import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormItem from './FormItem';
import { Form, $Formutil } from '..';
import { Input, Checkbox, Switch, Radio } from 'antd';

if (!window.matchMedia) {
    Object.defineProperty(window, 'matchMedia', {
        value: jest.fn((query) => ({
            matches: query.includes('max-width'),
            addListener: () => {},
            removeListener: () => {}
        }))
    });
}

function renderForm(content: React.ReactNode) {
    let $formutil: $Formutil;

    const wrapper = render(
        <Form
            render={(props) => {
                $formutil = props;

                return content;
            }}
        />
    );

    return {
        ...wrapper,
        getFormutil: () => $formutil
    };
}

describe('Form.Item props', () => {
    test('should pass [label] to Form.Item', () => {
        const { getByText } = renderForm(
            <FormItem name="input" label="Input">
                <Input placeholder="input" />
            </FormItem>
        );

        expect(getByText('Input')).toBeInTheDocument();
    });

    test('should pass [colon] to Form.Item', () => {
        const { getByText } = renderForm(
            <FormItem name="input" label="Input" colon={false}>
                <Input placeholder="input" />
            </FormItem>
        );

        expect(getByText('Input').className).toContain('ant-form-item-no-colon');
    });

    test('should pass [help] to Form.Item', () => {
        const { getByText } = renderForm(
            <FormItem name="input" help="help here">
                <Input placeholder="input" />
            </FormItem>
        );

        expect(getByText('help here')).toBeInTheDocument();
    });

    test('should pass [required] to Form.Item', () => {
        renderForm(
            <FormItem name="input" label="Input" required>
                <Input placeholder="input" />
            </FormItem>
        );

        expect(document.querySelector('.ant-form-item-required')).toBeInTheDocument();
    });

    test('should pass [itemProps] to Form.Item', () => {
        const { getByText } = renderForm(
            <FormItem
                name="input"
                itemProps={{
                    label: 'Input',
                    colon: false,
                    required: true
                }}>
                <Input placeholder="input" />
            </FormItem>
        );

        expect(document.querySelector('.ant-form-item-required')).toBeInTheDocument();
        expect(getByText('Input').className).toContain('ant-form-item-no-colon');
    });

    test('[itemProps] should have high priority', () => {
        const { queryByText } = renderForm(
            <FormItem
                name="input"
                label="Input 1"
                itemProps={{
                    label: 'Input 2'
                }}>
                <Input placeholder="input" />
            </FormItem>
        );

        expect(queryByText('Input 1')).toBe(null);
        expect(queryByText('Input 2')).toBeInTheDocument();
    });
});

test('should handle value from Input', () => {
    const { getByPlaceholderText, getFormutil } = renderForm(
        <FormItem name="input">
            <Input placeholder="input" />
        </FormItem>
    );

    userEvent.type(getByPlaceholderText('input'), 'yes');

    expect(getFormutil().$params.input).toBe('yes');
});

test('should handle value from Checkbox/Switch/Radio', () => {
    const { getFormutil } = renderForm(
        <>
            <FormItem name="checkbox" checked="yes">
                <Checkbox />
            </FormItem>
            <FormItem name="radio">
                <Radio />
            </FormItem>
            <FormItem name="switch" unchecked="no">
                <Switch />
            </FormItem>
        </>
    );

    expect(getFormutil().$params).toEqual({
        radio: false,
        checkbox: false,
        switch: 'no'
    });

    userEvent.click(document.querySelector('.ant-radio-wrapper')!);
    userEvent.click(document.querySelector('.ant-checkbox-wrapper')!);
    userEvent.click(document.querySelector('.ant-switch')!);

    expect(getFormutil().$params).toEqual({
        radio: true,
        checkbox: 'yes',
        switch: true
    });
});

test('[noStyle] should runing', () => {
    const { getFormutil } = renderForm(
        <FormItem>
            <FormItem name="a" noStyle required $defaultValue="">
                <Input placeholder="input a" />
            </FormItem>
            <FormItem name="b" noStyle required $defaultValue="">
                <Input placeholder="input b" />
            </FormItem>
        </FormItem>
    );


    expect(getFormutil().$params).toEqual({
        a: '',
        b: ''
    });

    expect(getFormutil().$errors).toEqual({
        a: {
            required: 'Error input: required'
        },
        b: {
            required: 'Error input: required'
        }
    });
});
