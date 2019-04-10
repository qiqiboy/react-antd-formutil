import React, { Component } from 'react';
import moment from 'moment';
import {
    Icon,
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
    Mention,
    TreeSelect,
    Upload,
    Transfer,
    Pagination,
    Button
} from 'antd';
import { FormItem, withForm } from 'app/../../src';
import {
    formItemLayout,
    hobbiesOptions,
    selectOption,
    sliderMarks,
    cascaderOptions,
    mentionOptions,
    uplodConfig,
    transferData
} from './config';

@withForm
class App extends Component {
    state = { acDataSource: [] };

    submit = ev => {
        ev.preventDefault();

        const { $invalid, $batchDirty } = this.props.$formutil;

        console.log('submit');

        if ($invalid) {
            $batchDirty(true);
        } else {
            // submit data
        }
    };

    render() {
        return (
            <Row>
                <Col lg={12}>
                    <Form onSubmit={this.submit} style={{ padding: 20 }}>
                        <FormItem name="autocomplete" itemProps={{ ...formItemLayout, label: 'AutoComplete' }} required>
                            <AutoComplete
                                dataSource={this.state.acDataSource}
                                onSearch={value =>
                                    this.setState({
                                        acDataSource: !value ? [] : [value, value + value, value + value + value]
                                    })
                                }
                                placeholder="input here"
                            />
                        </FormItem>
                        <FormItem
                            name="email"
                            itemProps={{ ...formItemLayout, label: 'Input' }}
                            isEmail
                            required
                            $validators={{
                                isEmail: value => {
                                    return !value || value.indexOf('@') > 1 || 'incorrect email!';
                                }
                            }}>
                            <Input placeholder="Your email" />
                        </FormItem>

                        <FormItem name="currency" itemProps={{ ...formItemLayout, label: 'InputNumber' }} required>
                            <InputNumber
                                style={{ width: 200 }}
                                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            />
                        </FormItem>

                        <FormItem name="checkbox.single" itemProps={{ ...formItemLayout, label: 'Checkbox' }} required>
                            <Checkbox>I agree</Checkbox>
                        </FormItem>

                        <FormItem
                            name="checkbox.multiple"
                            itemProps={{ ...formItemLayout, label: 'Checkbox.Group' }}
                            required>
                            <Checkbox.Group options={hobbiesOptions} />
                        </FormItem>

                        <FormItem name="rate" itemProps={{ ...formItemLayout, label: 'Rate' }} required>
                            <Rate allowHalf />
                        </FormItem>

                        <FormItem name="radio.single" itemProps={{ ...formItemLayout, label: 'Radio' }} required>
                            <Radio.Group options={hobbiesOptions} />
                        </FormItem>

                        <FormItem name="radio.button" itemProps={{ ...formItemLayout, label: 'Radio.Button' }} required>
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
                            itemProps={{ ...formItemLayout, label: 'Select.multiple' }}
                            required>
                            <Select mode="multiple" style={{ width: '100%' }} placeholder="Please select">
                                {selectOption}
                            </Select>
                        </FormItem>

                        <FormItem
                            name="Slider.single"
                            $defaultValue={30}
                            itemProps={{ ...formItemLayout, label: 'Slider.single' }}>
                            <Slider marks={sliderMarks} />
                        </FormItem>
                        <FormItem
                            $defaultValue={[20, 50]}
                            name="Slider.range"
                            itemProps={{ ...formItemLayout, label: 'Slider.range' }}>
                            <Slider range marks={sliderMarks} />
                        </FormItem>

                        <FormItem
                            name="switch"
                            $defaultValue="yes"
                            checked="yes"
                            unchecked="no"
                            required
                            itemProps={{ ...formItemLayout, label: 'Switch' }}>
                            <Switch checkedChildren="yes" unCheckedChildren="no" />
                        </FormItem>

                        <FormItem
                            name="datepicker.single"
                            required
                            itemProps={{ ...formItemLayout, label: 'DatePicker' }}>
                            <DatePicker />
                        </FormItem>
                        <FormItem
                            name="datepicker.month"
                            required
                            itemProps={{ ...formItemLayout, label: 'MonthPicker' }}>
                            <DatePicker.MonthPicker />
                        </FormItem>
                        <FormItem
                            name="datepicker.range"
                            required
                            focusPropName={null}
                            blurPropName={null}
                            itemProps={{ ...formItemLayout, label: 'RangePicker' }}>
                            <DatePicker.RangePicker />
                        </FormItem>
                        <FormItem
                            name="timepicker"
                            required
                            $parser={moment => moment.format('HH:mm:ss')}
                            $formatter={time => time && moment(time, 'HH:mm:ss')}
                            itemProps={{ ...formItemLayout, label: 'TimePicker' }}>
                            <TimePicker />
                        </FormItem>

                        <FormItem name="cascader" itemProps={{ ...formItemLayout, label: 'Cascader' }} required>
                            <Cascader options={cascaderOptions} placeholder="Please select" />
                        </FormItem>

                        <FormItem
                            name="mention"
                            $defaultValue="@afc163"
                            itemProps={{ ...formItemLayout, label: 'Mention' }}
                            required>
                            <Mention style={{ width: '100%' }} suggestions={mentionOptions} placement="top" />
                        </FormItem>

                        <FormItem name="treeselect" itemProps={{ ...formItemLayout, label: 'TreeSelect' }} required>
                            <TreeSelect
                                showSearch
                                style={{ width: '100%' }}
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                placeholder="Please select"
                                allowClear
                                treeDefaultExpandAll>
                                <TreeSelect.TreeNode value="parent 1" title="parent 1" key="0-1">
                                    <TreeSelect.TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                                        <TreeSelect.TreeNode value="leaf1" title="my leaf" key="random" />
                                        <TreeSelect.TreeNode value="leaf2" title="your leaf" key="random1" />
                                    </TreeSelect.TreeNode>
                                    <TreeSelect.TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                                        <TreeSelect.TreeNode
                                            value="sss"
                                            title={<b style={{ color: '#08c' }}>sss</b>}
                                            key="random3"
                                        />
                                    </TreeSelect.TreeNode>
                                </TreeSelect.TreeNode>
                            </TreeSelect>
                        </FormItem>

                        <FormItem
                            name="upload"
                            itemProps={{ ...formItemLayout, label: 'Upload' }}
                            required
                            $parser={({ file, fileList, event }) => {
                                if (file.status === 'done') {
                                    // render url form server
                                    return JSON.parse(file.response).data.url;
                                }
                            }}>
                            <Upload {...uplodConfig}>
                                <Button>
                                    <Icon type="upload" /> Click to Upload
                                </Button>
                            </Upload>
                        </FormItem>

                        <FormItem name="transfer" itemProps={{ ...formItemLayout, label: 'Transfer' }} required>
                            <Transfer
                                dataSource={transferData}
                                titles={['Source', 'Target']}
                                render={item => item.title}
                            />
                        </FormItem>

                        <FormItem
                            name="page"
                            itemProps={{ ...formItemLayout, label: 'Pagination' }}
                            $defaultValue={5}
                            valuePropName="current">
                            <Pagination pageSize={10} total={100} />
                        </FormItem>

                        <Row>
                            <Col sm={{ offset: 8 }}>
                                <Button type="primary" block htmlType="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
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

export default App;
