import React from 'react';
import { Select } from 'antd';

export const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
    }
};

export const hobbiesOptions = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
];

export const selectOption = Array(36)
    .fill('')
    .map((n, i) => <Select.Option key={i.toString(36) + i}>{i.toString(36) + i}</Select.Option>)
    .slice(10);

export const sliderMarks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
        style: {
            color: '#f50'
        },
        label: <strong>100°C</strong>
    }
};

export const cascaderOptions = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake'
                    }
                ]
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men'
                    }
                ]
            }
        ]
    }
];

export const mentionOptions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];

export const uplodConfig = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
        authorization: 'authorization-text'
    }
};

export const transferData = [];

for (let i = 0; i < 20; i++) {
    transferData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`
    });
}
