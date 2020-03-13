import React, { Component } from 'react';
import moment from 'moment';
import {
    Row,
    Col,
    Form,
    AutoComplete,
    Input,
    InputNumber,
    Checkbox,
    Radio,
    Rate,
    Select,
    Slider,
    Switch,
    DatePicker,
    TimePicker,
    Cascader,
    Mentions,
    TreeSelect,
    Upload,
    Transfer,
    Pagination,
    Button,
    Affix
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { FormItem, withForm } from 'app/../../src';
import {
    formItemLayout,
    hobbiesOptions,
    selectOption,
    sliderMarks,
    cascaderOptions,
    uplodConfig,
    transferData
} from './config';
import MemoRender from 'memo-render';

@withForm
class AntdFormutilDemo extends Component {
    state = { acDataSource: [], $memo: false };

    submit = ev => {
        ev.preventDefault();

        const { $invalid, $batchDirty } = this.props.$formutil;

        if ($invalid) {
            $batchDirty(true);
        } else {
            // submit data
        }
    };

    emailValidators = {
        isEmail: value => {
            return !value || value.indexOf('@') > 1 || 'incorrect email!';
        }
    };

    timeParser = moment => moment.format('HH:mm:ss');
    timeFormatter = time => time && moment(time, 'HH:mm:ss');

    uploadSingleFormatter = url =>
        url && [
            {
                url,
                uid: url,
                status: 'done',
                name: url.split('/').slice(-1)[0]
            }
        ];

    uploadSingleParser = (info, $setViewValue) => {
        // 限制只能上传一个文件
        $setViewValue(info.fileList.slice(-1));

        if (info.file.status === 'done') {
            return info.file.response.url;
        }
    };

    uploadMultipleFormatter = urls =>
        urls &&
        urls.map(url => ({
            url,
            uid: url,
            status: 'done',
            name: url.split('/').slice(-1)[0]
        }));

    uploadMultipleParser = (info, $setViewValue) => {
        // 限制最大上传文件数量为3，如果不需要限制，可以移除该行，或者修改该值
        $setViewValue(info.fileList.slice(-3));

        return info.fileList.filter(file => file.status === 'done').map(file => file.url || file.response.url);
    };

    inputNumFormatter = value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    inputNumParser = value => value.replace(/\$\s?|(,*)/g, '');

    autoCptSearch = value =>
        this.setState({
            acDataSource: !value
                ? []
                : [
                      {
                          value
                      },
                      { value: value + value },
                      { value: value + value + value }
                  ]
        });

    selectFilterOptions = (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;

    transferRender = item => item.title || null;

    memoEmpty = [];

    render() {
        const { $memo } = this.state;

        return (
            <Row>
                <Col lg={12} md={24}>
                    <form onSubmit={this.submit} style={{ padding: 20 }}>
                        <MemoRender deps={[this.state.$memo]}>
                            <Affix>
                                <Form.Item label="Enable $memo" {...formItemLayout} style={{ background: 'white' }}>
                                    <Radio.Group
                                        size="small"
                                        value={$memo}
                                        onChange={ev =>
                                            this.setState({
                                                $memo: ev.target.value
                                            })
                                        }>
                                        <Radio.Button value={false}>false</Radio.Button>
                                        <Radio.Button value={true}>true</Radio.Button>
                                        <Radio.Button value={this.memoEmpty}>空数组</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                            </Affix>
                        </MemoRender>

                        <FormItem label="FormItem Group" {...formItemLayout}>
                            <>
                                <Input.Group compact>
                                    <FormItem
                                        name="address.province"
                                        $memo={$memo}
                                        noStyle
                                        required
                                        validMessage={{ required: 'Province requird!' }}>
                                        <Select placeholder="Select province">
                                            <Select.Option value="Zhejiang">Zhejiang</Select.Option>
                                            <Select.Option value="Jiangsu">Jiangsu</Select.Option>
                                        </Select>
                                    </FormItem>

                                    {this.props.$formutil.$params.address?.hasStreet && (
                                        <FormItem
                                            name="address.street"
                                            $memo={$memo}
                                            noStyle
                                            required
                                            validMessage={{ required: 'Street requird!' }}>
                                            <Input style={{ width: '50%' }} placeholder="Input street" />
                                        </FormItem>
                                    )}
                                </Input.Group>

                                <FormItem name="address.hasStreet" noStyle $defaultValue $memo={$memo}>
                                    <Checkbox>Show Street</Checkbox>
                                </FormItem>
                            </>
                        </FormItem>
                        <FormItem
                            name="autocomplete"
                            itemProps={{ ...formItemLayout, label: 'AutoComplete' }}
                            $memo={$memo}
                            className="abc"
                            required>
                            <AutoComplete
                                options={this.state.acDataSource}
                                onSearch={this.autoCptSearch}
                                placeholder="input here"
                            />
                        </FormItem>
                        <FormItem
                            name="email"
                            itemProps={{ ...formItemLayout, label: 'Input' }}
                            $memo={$memo}
                            isEmail
                            required
                            $validators={this.emailValidators}>
                            <Input placeholder={'The currency: ' + (this.props.$formutil.$params.currency ?? '')} />
                        </FormItem>

                        <FormItem
                            name="currency"
                            itemProps={{ ...formItemLayout, label: 'InputNumber' }}
                            $memo={$memo}
                            required>
                            <InputNumber
                                style={{ width: 200 }}
                                formatter={this.inputNumFormatter}
                                parser={this.inputNumParser}
                            />
                        </FormItem>

                        <FormItem
                            name="checkbox.single"
                            itemProps={{ ...formItemLayout, label: 'Checkbox' }}
                            $memo={$memo}
                            required>
                            <Checkbox>I agree</Checkbox>
                        </FormItem>

                        <FormItem
                            name="checkbox.multiple"
                            itemProps={{ ...formItemLayout, label: 'Checkbox.Group' }}
                            $memo={$memo}
                            required>
                            <Checkbox.Group options={hobbiesOptions} />
                        </FormItem>

                        <FormItem name="rate" itemProps={{ ...formItemLayout, label: 'Rate' }} required $memo={$memo}>
                            <Rate allowHalf />
                        </FormItem>

                        <FormItem
                            name="radio.single"
                            itemProps={{ ...formItemLayout, label: 'Radio' }}
                            required
                            $memo={$memo}>
                            <Radio.Group options={hobbiesOptions} />
                        </FormItem>

                        <FormItem
                            name="radio.button"
                            itemProps={{ ...formItemLayout, label: 'Radio.Button' }}
                            required
                            $memo={$memo}>
                            <Radio.Group>
                                {hobbiesOptions.map(item => (
                                    <Radio.Button value={item.value} key={item.value}>
                                        {item.label}
                                    </Radio.Button>
                                ))}
                            </Radio.Group>
                        </FormItem>

                        <FormItem
                            name="select.single"
                            $defaultValue="c12"
                            itemProps={{ ...formItemLayout, label: 'Select.single' }}
                            $memo={$memo}
                            required>
                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                optionFilterProp="children"
                                filterOption={this.selectFilterOptions}
                                placeholder="Please select">
                                {selectOption}
                            </Select>
                        </FormItem>

                        <FormItem
                            name="select.multiple"
                            $defaultValue={['c12', 'a10', 's28']}
                            $memo={$memo}
                            itemProps={{ ...formItemLayout, label: 'Select.multiple' }}
                            required>
                            <Select mode="multiple" style={{ width: '100%' }} placeholder="Please select">
                                {selectOption}
                            </Select>
                        </FormItem>

                        <FormItem
                            name="Slider.single"
                            $memo={$memo}
                            $defaultValue={30}
                            itemProps={{ ...formItemLayout, label: 'Slider.single' }}>
                            <Slider marks={sliderMarks} />
                        </FormItem>
                        <FormItem
                            $defaultValue={[20, 50]}
                            $memo={$memo}
                            name="Slider.range"
                            itemProps={{ ...formItemLayout, label: 'Slider.range' }}>
                            <Slider range marks={sliderMarks} />
                        </FormItem>

                        <FormItem
                            name="switch"
                            $defaultValue="yes"
                            $memo={$memo}
                            checked="yes"
                            unchecked="no"
                            required
                            itemProps={{ ...formItemLayout, label: 'Switch' }}>
                            <Switch checkedChildren="yes" unCheckedChildren="no" />
                        </FormItem>

                        <FormItem
                            name="datepicker.single"
                            required
                            $memo={$memo}
                            itemProps={{ ...formItemLayout, label: 'DatePicker' }}>
                            <DatePicker />
                        </FormItem>
                        <FormItem
                            name="datepicker.month"
                            required
                            $memo={$memo}
                            itemProps={{ ...formItemLayout, label: 'MonthPicker' }}>
                            <DatePicker.MonthPicker />
                        </FormItem>
                        <FormItem
                            name="datepicker.range"
                            required
                            $memo={$memo}
                            focusPropName={null}
                            blurPropName={null}
                            itemProps={{ ...formItemLayout, label: 'RangePicker' }}>
                            <DatePicker.RangePicker />
                        </FormItem>
                        <FormItem
                            name="timepicker"
                            required
                            $memo={$memo}
                            $parser={this.timeParser}
                            $formatter={this.timeFormatter}
                            itemProps={{ ...formItemLayout, label: 'TimePicker' }}>
                            <TimePicker />
                        </FormItem>

                        <FormItem
                            name="cascader"
                            itemProps={{ ...formItemLayout, label: 'Cascader' }}
                            required
                            $memo={$memo}>
                            <Cascader options={cascaderOptions} placeholder="Please select" />
                        </FormItem>

                        <FormItem
                            name="mention"
                            $memo={$memo}
                            $defaultValue="@afc163"
                            itemProps={{ ...formItemLayout, label: 'Mentions' }}
                            required>
                            <Mentions style={{ width: '100%' }} placement="top">
                                <Mentions.Option value="afc163">afc163</Mentions.Option>
                                <Mentions.Option value="zombieJ">zombieJ</Mentions.Option>
                                <Mentions.Option value="yesmeck">yesmeck</Mentions.Option>
                            </Mentions>
                        </FormItem>

                        <FormItem
                            name="treeselect"
                            itemProps={{ ...formItemLayout, label: 'TreeSelect' }}
                            required
                            $memo={$memo}>
                            <TreeSelect
                                showSearch
                                style={{ width: '100%' }}
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                placeholder="Please select"
                                allowClear
                                treeDefaultExpandAll>
                                <TreeSelect.TreeNode value="parent 1" title="parent 1">
                                    <TreeSelect.TreeNode value="parent 1-0" title="parent 1-0">
                                        <TreeSelect.TreeNode value="leaf1" title="my leaf" />
                                        <TreeSelect.TreeNode value="leaf2" title="your leaf" />
                                    </TreeSelect.TreeNode>
                                    <TreeSelect.TreeNode value="parent 1-1" title="parent 1-1">
                                        <TreeSelect.TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} />
                                    </TreeSelect.TreeNode>
                                </TreeSelect.TreeNode>
                            </TreeSelect>
                        </FormItem>

                        <FormItem
                            name="upload.single"
                            $memo={$memo}
                            $defaultValue={
                                'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                            }
                            $formatter={this.uploadSingleFormatter}
                            $parser={this.uploadSingleParser}
                            itemProps={{ ...formItemLayout, label: 'Upload.single' }}
                            required>
                            <Upload {...uplodConfig}>
                                <Button>
                                    <UploadOutlined /> Click to Upload
                                </Button>
                            </Upload>
                        </FormItem>

                        <FormItem
                            $defaultValue={[
                                'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                            ]}
                            $memo={$memo}
                            name="upload.multiple"
                            $formatter={this.uploadMultipleFormatter}
                            $parser={this.uploadMultipleParser}
                            itemProps={{ ...formItemLayout, label: 'Upload.multiple' }}
                            required>
                            <Upload {...uplodConfig}>
                                <Button>
                                    <UploadOutlined /> Click to Upload
                                </Button>
                            </Upload>
                        </FormItem>

                        <FormItem
                            name="transfer"
                            itemProps={{ ...formItemLayout, label: 'Transfer' }}
                            required
                            $memo={$memo}>
                            <Transfer
                                dataSource={transferData}
                                titles={['Source', 'Target']}
                                render={this.transferRender}
                            />
                        </FormItem>

                        <FormItem
                            name="page"
                            itemProps={{ ...formItemLayout, label: 'Pagination' }}
                            $memo={$memo}
                            $defaultValue={1}
                            valuePropName="current">
                            <Pagination pageSize={10} total={100} />
                        </FormItem>

                        <MemoRender disabled={!$memo}>
                            <Row>
                                <Col sm={{ offset: 8 }}>
                                    <Button type="primary" block htmlType="submit">
                                        Submit {this.props.$formutil.$params.page}
                                    </Button>
                                </Col>
                            </Row>
                        </MemoRender>
                    </form>
                </Col>
                <Col lg={6} md={12}>
                    <pre style={{ padding: 20 }}>{JSON.stringify(this.props.$formutil.$params, null, 2)}</pre>
                </Col>
                <Col lg={6} md={12}>
                    <pre style={{ padding: 20 }}>{JSON.stringify(this.props.$formutil.$errors, null, 2)}</pre>
                </Col>
            </Row>
        );
    }
}

export default AntdFormutilDemo;
