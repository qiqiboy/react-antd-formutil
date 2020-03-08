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
class NormalRenderForm extends Component {
    state = { acDataSource: [], $renderLazy: false };

    submit = ev => {
        const { $invalid, $batchDirty } = this.props.$formutil;

        console.log('submit');

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

    render() {
        const { $renderLazy } = this.state;

        return (
            <Row>
                <Col lg={12}>
                    <Form onFinish={this.submit} style={{ padding: 20 }}>
                        <Affix>
                            <Form.Item label="Enable $renderLazy" {...formItemLayout} style={{ background: 'white' }}>
                                <Checkbox
                                    checked={this.state.$renderLazy}
                                    onChange={ev =>
                                        this.setState({
                                            $renderLazy: ev.target.checked
                                        })
                                    }
                                />
                            </Form.Item>
                        </Affix>

                        <FormItem label="FormItem Group" {...formItemLayout}>
                            <>
                                <Input.Group compact>
                                    <FormItem
                                        name="address.province"
                                        $renderLazy={$renderLazy}
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
                                            $renderLazy={$renderLazy}
                                            noStyle
                                            required
                                            validMessage={{ required: 'Street requird!' }}>
                                            <Input style={{ width: '50%' }} placeholder="Input street" />
                                        </FormItem>
                                    )}
                                </Input.Group>

                                <FormItem name="address.hasStreet" noStyle $defaultValue $renderLazy={$renderLazy}>
                                    <Checkbox>Show Street</Checkbox>
                                </FormItem>
                            </>
                        </FormItem>
                        <FormItem
                            name="autocomplete"
                            itemProps={{ ...formItemLayout, label: 'AutoComplete' }}
                            $renderLazy={$renderLazy}
                            className="abc"
                            required>
                            <AutoComplete
                                options={this.state.acDataSource}
                                onSearch={value =>
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
                                    })
                                }
                                placeholder="input here"
                            />
                        </FormItem>
                        <FormItem
                            name="email"
                            itemProps={{ ...formItemLayout, label: 'Input' }}
                            $renderLazy={$renderLazy}
                            isEmail
                            required
                            $validators={this.emailValidators}>
                            <Input placeholder={'The currency: ' + (this.props.$formutil.$params.currency ?? '')} />
                        </FormItem>

                        <FormItem
                            name="currency"
                            itemProps={{ ...formItemLayout, label: 'InputNumber' }}
                            $renderLazy={$renderLazy}
                            required>
                            <InputNumber
                                style={{ width: 200 }}
                                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            />
                        </FormItem>

                        <FormItem
                            name="checkbox.single"
                            itemProps={{ ...formItemLayout, label: 'Checkbox' }}
                            $renderLazy={$renderLazy}
                            required>
                            <Checkbox>I agree</Checkbox>
                        </FormItem>

                        <FormItem
                            name="checkbox.multiple"
                            itemProps={{ ...formItemLayout, label: 'Checkbox.Group' }}
                            $renderLazy={$renderLazy}
                            required>
                            <Checkbox.Group options={hobbiesOptions} />
                        </FormItem>

                        <FormItem
                            name="rate"
                            itemProps={{ ...formItemLayout, label: 'Rate' }}
                            required
                            $renderLazy={$renderLazy}>
                            <Rate allowHalf />
                        </FormItem>

                        <FormItem
                            name="radio.single"
                            itemProps={{ ...formItemLayout, label: 'Radio' }}
                            required
                            $renderLazy={$renderLazy}>
                            <Radio.Group options={hobbiesOptions} />
                        </FormItem>

                        <FormItem
                            name="radio.button"
                            itemProps={{ ...formItemLayout, label: 'Radio.Button' }}
                            required
                            $renderLazy={$renderLazy}>
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
                            $renderLazy={$renderLazy}
                            required>
                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                placeholder="Please select">
                                {selectOption}
                            </Select>
                        </FormItem>

                        <FormItem
                            name="select.multiple"
                            $defaultValue={['c12', 'a10', 's28']}
                            $renderLazy={$renderLazy}
                            itemProps={{ ...formItemLayout, label: 'Select.multiple' }}
                            required>
                            <Select mode="multiple" style={{ width: '100%' }} placeholder="Please select">
                                {selectOption}
                            </Select>
                        </FormItem>

                        <FormItem
                            name="Slider.single"
                            $renderLazy={$renderLazy}
                            $defaultValue={30}
                            itemProps={{ ...formItemLayout, label: 'Slider.single' }}>
                            <Slider marks={sliderMarks} />
                        </FormItem>
                        <FormItem
                            $defaultValue={[20, 50]}
                            $renderLazy={$renderLazy}
                            name="Slider.range"
                            itemProps={{ ...formItemLayout, label: 'Slider.range' }}>
                            <Slider range marks={sliderMarks} />
                        </FormItem>

                        <FormItem
                            name="switch"
                            $defaultValue="yes"
                            $renderLazy={$renderLazy}
                            checked="yes"
                            unchecked="no"
                            required
                            itemProps={{ ...formItemLayout, label: 'Switch' }}>
                            <Switch checkedChildren="yes" unCheckedChildren="no" />
                        </FormItem>

                        <FormItem
                            name="datepicker.single"
                            required
                            $renderLazy={$renderLazy}
                            itemProps={{ ...formItemLayout, label: 'DatePicker' }}>
                            <DatePicker />
                        </FormItem>
                        <FormItem
                            name="datepicker.month"
                            required
                            $renderLazy={$renderLazy}
                            itemProps={{ ...formItemLayout, label: 'MonthPicker' }}>
                            <DatePicker.MonthPicker />
                        </FormItem>
                        <FormItem
                            name="datepicker.range"
                            required
                            $renderLazy={$renderLazy}
                            focusPropName={null}
                            blurPropName={null}
                            itemProps={{ ...formItemLayout, label: 'RangePicker' }}>
                            <DatePicker.RangePicker />
                        </FormItem>
                        <FormItem
                            name="timepicker"
                            required
                            $renderLazy={$renderLazy}
                            $parser={this.timeParser}
                            $formatter={this.timeFormatter}
                            itemProps={{ ...formItemLayout, label: 'TimePicker' }}>
                            <TimePicker />
                        </FormItem>

                        <FormItem
                            name="cascader"
                            itemProps={{ ...formItemLayout, label: 'Cascader' }}
                            required
                            $renderLazy={$renderLazy}>
                            <Cascader options={cascaderOptions} placeholder="Please select" />
                        </FormItem>

                        <FormItem
                            name="mention"
                            $renderLazy={$renderLazy}
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
                            $renderLazy={$renderLazy}>
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
                            $renderLazy={$renderLazy}
                            $defaultValue={
                                'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                            }
                            $formatter={this.uploadSingleFormatter}
                            $parser={this.uploadMultipleParser}
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
                            $renderLazy={$renderLazy}
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
                            $renderLazy={$renderLazy}>
                            <Transfer
                                dataSource={transferData}
                                titles={['Source', 'Target']}
                                render={item => item.title || null}
                            />
                        </FormItem>

                        <FormItem
                            name="page"
                            itemProps={{ ...formItemLayout, label: 'Pagination' }}
                            $renderLazy={$renderLazy}
                            $defaultValue={1}
                            valuePropName="current">
                            <Pagination pageSize={10} total={100} />
                        </FormItem>

                        <MemoRender disabled={!$renderLazy}>
                            <Row>
                                <Col sm={{ offset: 8 }}>
                                    <Button type="primary" block htmlType="submit">
                                        Submit {this.props.$formutil.$params.page}
                                    </Button>
                                </Col>
                            </Row>
                        </MemoRender>
                    </Form>
                </Col>
                <Col lg={6} style={{ padding: 20 }}>
                    <pre>{JSON.stringify(this.props.$formutil.$params, null, 2)}</pre>
                </Col>
                <Col lg={6} style={{ padding: 20 }}>
                    <pre>{JSON.stringify(this.props.$formutil.$errors, null, 2)}</pre>
                </Col>
            </Row>
        );
    }
}

export default NormalRenderForm;
