# react-antd-formutil

[![npm](https://img.shields.io/npm/v/react-antd-formutil.svg?style=flat)](https://npm.im/react-antd-formutil)

Happy to use react-formutil in the project based on ant-design ^\_^

在 [ant-design](https://github.com/ant-design/ant-design) 项目，结合 [react-formutil](https://github.com/qiqiboy/react-formutil) 来快速构建表单。**支持所有的`ant-design`输入型（`data-entry`）组件。**

<!-- vim-markdown-toc GFM -->

- [安装 Installation](#安装-installation)
- [使用 Usage](#使用-usage)
    + [`<FormItem />`](#formitem-)
        * [`name`](#name)
        * [`$defaultValue`](#defaultvalue)
        * [`$validators`](#validators)
        * [`itemProps`](#itemprops)
        * [`$parser`](#parser)
        * [`$formatter`](#formatter)
        * [`checked` `unchecked`](#checked-unchecked)
        * [`validMessage`](#validmessage)
        * [`valuePropName` `changePropName` `focusPropName` `blurPropName`](#valuepropname-changepropname-focuspropname-blurpropname)
    + [`支持的组件`](#支持的组件)
        * [`AutoComplete`](#autocomplete)
        * [`Checkbox`](#checkbox)
        * [`Cascader`](#cascader)
        * [`DatePicker`](#datepicker)
        * [`InputNumber`](#inputnumber)
        * [`Input`](#input)
        * [`Mention`](#mention)
        * [`Pagination`](#pagination)
        * [`Rate`](#rate)
        * [`Radio`](#radio)
        * [`Switch`](#switch)
        * [`Slider`](#slider)
        * [`Select`](#select)
        * [`TreeSelect`](#treeselect)
        * [`Transfer`](#transfer)
        * [`TimePicker`](#timepicker)
        * [`Upload`](#upload)
- [FAQ](#faq)
    + [`给组件设置的onChange、onFocus等方法无效、不执行`](#给组件设置的onchangeonfocus等方法无效不执行)
    + [`RangePicker 在safari下假死？`](#rangepicker-在safari下假死)
    + [`Mention 为未非受控组件？`](#mention-为未非受控组件)

<!-- vim-markdown-toc -->

### 安装 Installation

```bash
# npm
npm install react-antd-formutil --save

# yarn
yarn install react-antd-formutil
```

### 使用 Usage

> `react-antd-formutil` 整合了 `react-formutil` 的组件，所以可以直接从`react-antd-formutil`中导出所需要的 `react-formutil` 组件。不用单独从 react-formutil 中导出。

先看一个使用示例（点击查看在线完整示例: [react-antd-formutil on codesandbox.io](https://codesandbox.io/s/84y6w5oox2)）：

```javascript
import React, { Component } from 'react';
import { withForm, FormItem } from 'react-antd-formutil';
import { Input, Form } from 'antd'; // 导入antd的Input组件

@withForm
class MyForm extends Component {
    submit = () => {
        const { $invalid, $getFirstError, $params } = this.props.$formutil;

        if ($invalid) {
            alert($getFistError());
        } else {
            // submit your data
        }
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <FormItem
                    name="username"
                    itemProps={{
                        label: 'Username'
                    }}>
                    <Input />
                </FormItem>
            </Form>
        );
    }
}
```

`FormItem`是 `react-antd-formuitl` 新增加的组件，`withForm`是`react-formutil`的组件（没错，你可以直接从`react-antd-formutil`中导出`react-formutil`的组件啦）。

只需要将`ant-design`的交互组件，嵌套在`FormItem`下，即可实现自动的表单状态同步。

#### `<FormItem />`

要实现将`ant-design`的交互组件的值能同步到 react-formutil 的状态中，需要通过 FormItem 这个组件来实现中间态绑定。

它的作用有些类似 antd 中的`getFieldDecorator`方法，但是用法比`getFieldDecorator`更优雅，更 JSX 语法。`FormItem`完全是标签声明式用法，它是对 antd 的`Form.Item`组件的再次封装。

所以`FormItem`会完整实现`Form.Item`所可以显示的校验状态、错误暂时等 UI 变化。

> 同 antd 的`Form.Item`一样，`FormItem`也只允许嵌套一个 child 组件，不允许多个。放置多个 child，会自动停止状态追踪。

##### `name`

设置输入项的 name 值，表单项将会以 name 作为 key 收集到 formutil 的状态中。支持嵌套语法 _（同`react-formutil`的`Field`同名参数，可以参考 [name](https://github.com/qiqiboy/react-formutil#name)）_

##### `$defaultValue`

设置该表单项的默认值 _（同`react-formutil`的`Field`同名参数，可以参考[$defaultvalue](https://github.com/qiqiboy/react-formutil#defaultvalue)）_

##### `$validators`

设置校验方法 _（同`react-formutil`的`Field`同名参数, 可以参考 [$validators](https://github.com/qiqiboy/react-formutil#validators)）_

> 同 react-formutil 的 EasyField，FormItem 也内置了同样的校验规则：

> -   `required` 必填 `required`
> -   `maxLength` 。最大输入长度，有效输入时才会校验 `maxLength="100"`
> -   `minLength` 最小输入长度，有效输入时才会校验 `minLength="10"`
> -   `max` 最大输入数值，仅支持 Number 比较。有效输入时才会校验 `max="100"`
> -   `min` 最小输入数值，仅支持 Number 比较。有效输入时才会校验 `min="10"`
> -   `pattern` 正则匹配。有效输入时才会校验 `pattern={/^\d+$/}`
> -   `enum` 枚举值检测。有效输入时才会校验 `enum={[1,2,3]}`
> -   `checker` 自定义校验函数。`checker={value => value > 10 && value < 100 || '输入比如大于10小与100'}`

注：校验属性的值为 `null` 时表示不进行该校验

内置的校验规则无需再次声明，除非规则不符合预期，需要替换，则可以通过`$validators` 传递同名校验方法即可替换默认的。另外，内置的校验规则，如果校验不通过，会尝试去 `validMessage` 匹配错误信息。

##### `itemProps`

该属性为要传递给`Form.Item`组件的配置项：

```javascript
<FormItem
    itemProps={{
        label: 'Username',
        colon: false
    }}>
    <Input />
</FormItem>
```

##### `$parser`

设置输入的值收集到 formutil 状态中时的过滤处理。默认为`value => value`

```javascript
<FormItem $parser={value => parseInt(value)}>
    <Input />
</FormItem>
```

##### `$formatter`

设置 formutil 中的值渲染到输入组件上时的过滤处理。默认为`value => value`

```javascript
<FormItem $formatter={value => '$' + value}>
    <Input />
</FormItem>
```

##### `checked` `unchecked`

对于 `<Switch />` `<Checkbox />` `<Radio />` 这三种组件，其值默认是 checked 属性，为布尔值。可以通过`checked` `unchecked`来设置 checked 状态时所要映射的值：

```javascript
<FormItem checked="yes" unchecked="no">
    <Switch />
</FormItem>
```

该示例中， 当 Switch 为开时，获取的值将为 yes。

##### `validMessage`

设置校验结果的错误信息。

```javascript
<FormItem
    name="username"
    required
    validMessage={{
        required: '请输入用户名'
    }}>
    <Input />
</FormItem>
```

##### `valuePropName` `changePropName` `focusPropName` `blurPropName`

该四个参数可以用来设置绑定到组件上的值或者值变动、是否聚焦等事件回调。该项一般不需要设置，`FormItem` 已经针对 `antd` 中的所有 `data-entry` 型组件做了兼容处理。

对于一些特殊场景，例如不需要同步 `focus`、`blur`，则可以通过将该值设为`{null}`来禁用：

```javascript
//禁用focus、blur状态同步
<FormItem focusPropName={null} blurPropName={null} name="username">
    <Input />
</FormItem>
```

#### `支持的组件`

##### [`AutoComplete`](https://ant.design/components/auto-complete-cn/)

##### [`Checkbox`](https://ant.design/components/checkbox-cn/)

支持`Checkbox.Group`。

##### [`Cascader`](https://ant.design/components/cascader-cn/)

##### [`DatePicker`](https://ant.design/components/date-picker-cn/)

`DatePicker` `TimePicker` `DatePicker.WeekPicker` `DatePicker.MonthPicker` `DatePicker.RangePicker` 等几个日期类组件，都是深度结合了`moment`使用的。如果希望收集到表单中的值是格式化好的时间字符串，可以通过`$parser` `$formatter`实现：

```javascript
<FormItem name="datepicker" $parser={moment => moment.format('YYYY-MM-DD')} $formatter={date => moment(date)}>
    <DatePicker />
</FormItem>
```

对于`DatePicker.RangePicker`，由于其值是一个数组，所以需要这样处理：

```javascript
<FormItem
    name="datepicker"
    $parser={moments => moments.map(moment => moment.format('YYYY-MM-DD'))}
    $formatter={dates => dates.map(date => moment(date))}>
    <DatePicker.RangePicker />
</FormItem>
```

##### [`InputNumber`](https://ant.design/components/input-number-cn/)

##### [`Input`](https://ant.design/components/input-cn/)

##### [`Mention`](https://ant.design/components/mention-cn/)

参考 [`Mention 为未非受控组件？`](#mention-为未非受控组件)

##### [`Pagination`](https://ant.design/components/pagination-cn/)

`Pagination` 并非`antd`所归纳的`data entry`组件，但是其接口设计也可以支持`FormItem`：

```javascript
<FormItem name="page" $defaultValue={2}>
    <Pagination pageSize={10} total={100} />
</FormItem>
```

##### [`Rate`](https://ant.design/components/rate-cn/)

##### [`Radio`](https://ant.design/components/radio-cn/)

支持`Radio.Group`。

##### [`Switch`](https://ant.design/components/switch-cn/)

`Switch` `Checkbox`(不包括`Checkbox.Group`) `Radio`(不包括`Radio.Group`)三个组件，可以通过给`FormItem`传递`checked` `unchecked`属性来改变被勾选时所映射到表单状态中的值：

```javascript
<FormItem checked="yes" unchecked="no">
    <Switch />
</FormItem>
```

##### [`Slider`](https://ant.design/components/slider-cn/)

##### [`Select`](https://ant.design/components/select-cn/)

##### [`TreeSelect`](https://ant.design/components/tree-select-cn/)

##### [`Transfer`](https://ant.design/components/transfer-cn/)

`Transfer`收集到表单状态中的是`targetKeys`。

##### [`TimePicker`](https://ant.design/components/time-picker-cn/)

参考 [`DatePicker`](#datepicker)

##### [`Upload`](https://ant.design/components/upload-cn/)

`Upload` 组件会将 onChange 回调的对象同步到表单状态中，所以如果仅仅需要拿到上传成功后的服务端返回信息（比如上传后保存在服务器的 url），可以通过$parser 进行过滤：

```javascript
<FormItem
    name="upload"
    $parser={({ file, fileList, event }) => {
        if (file.status == 'done') {
            //render url form server
            return JSON.parse(file.response).data.url;
        }
    }}>
    <Upload {...uplodConfig}>
        <Button>
            <Icon type="upload" /> Click to Upload
        </Button>
    </Upload>
</FormItem>
```

### FAQ

#### `给组件设置的onChange、onFocus等方法无效、不执行`

`FormItem`会覆盖掉直接添加到 antd 组件上的`onFocus` `onBlur` `onChange`方法，所以如果需要这三个事件方法，需要添加到 `FormItem`上：

```javascript
<FormItem name="test" onChange={ev => console.log('change', ev)} onFocus={ev => console.log('focus', ev)}>
    <Input />
</FormItem>
```

#### `RangePicker 在safari下假死？`

经过 debug，在`3.8.x`版本上，依然存在对`RangePicker`设置`onFocus` `onBlur`会异常频繁触发（比如在光标经过日期选择面板中每个数字时）的问题。可以禁用`onFocus` `onBlur`状态同步：

```javascript
<FormItem name="datepicker" focusPropName={null} blurPropName={null}>
    <DatePicker.RangePicker />
</FormItem>
```

#### `Mention 为未非受控组件？`

由于`Mention`的 `onChange` 会异常触发（[issues 11619](https://github.com/ant-design/ant-design/issues/11619)、失去焦点也会触发等），所以为了性能考虑，针对该组件使用了非受控组件。即，只能在初次调用时传入 value，后期不可通过`react-formutil`提供的`$setValues`等方法去动态的设置该项的值。
