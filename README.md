# react-antd-formutil

[![npm](https://img.shields.io/npm/v/react-antd-formutil.svg?style=flat)](https://npm.im/react-antd-formutil)

Happy to use react-formutil in the project based on ant-design ^\_^

在 [ant-design](https://github.com/ant-design/ant-design) 项目，结合 [react-formutil](https://github.com/qiqiboy/react-formutil) 来快速构建表单。**支持所有的`antd-design`输入组件。**

<!-- vim-markdown-toc GFM -->

- [安装 Installation](#安装-installation)
- [使用 Usage](#使用-usage)
    + [`<FormItem />`](#formitem-)
        * [`name`](#name)
        * [`$defaultValue`](#defaultvalue)
        * [`$validators`](#validators)
        * [`itemProps`](#itemprops)
        * [`valuePropName`](#valuepropname)
        * [`changePropName`](#changepropname)
        * [`$parser`](#parser)
        * [`$formatter`](#formatter)
        * [`checked` `unchecked`](#checked-unchecked)
        * [`validMessage`](#validmessage)
    + [`支持的组件`](#支持的组件)
        * [`AutoComplete`](#autocomplete)
        * [`Checkbox`](#checkbox)
        * [`Cascader`](#cascader)
        * [`DatePicker`](#datepicker)
        * [`InputNumber`](#inputnumber)
        * [`Input`](#input)
        * [`Mention`](#mention)
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
    + [`一些交互组件调用时的注意事项`](#一些交互组件调用时的注意事项)
        * [`Mention 为未非受控组件`](#mention-为未非受控组件)

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

##### `valuePropName`

设置子节点的值的属性，例如 `<Switch />` `<Checkbox />` `<Radio />`的属性是 `checked`。

> v0.0.3 起，对于这三个组件，可以省略指定 `valuePropName`。

默认为`value`

```javascript
<FormItem valuePropName="checked">
    <Switch />
</FormItem>
```

##### `changePropName`

设置子节点的值更新的回调触发属性。默认为`onChange`

```javascript
<FormItem changePropName="onSelect">
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

对于 `<Switch />` `<Checkbox />` `<Radio />` 这三种组件，其值默认是 checked 属性，为布尔值。可以通过`checked` `unchecked`来设置 checked 状态时说要映射的值：

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

#### `支持的组件`

##### `AutoComplete`

##### `Checkbox`

支持`Checkbox.Group`。

##### `Cascader`

##### `DatePicker`

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

##### `InputNumber`

##### `Input`

##### `Mention`

##### `Rate`

##### `Radio`

支持`Radio.Group`。

##### `Switch`

`Switch` `Checkbox`(不包括`Checkbox.Group`) `Radio`(不包括`Radio.Group`)三个组件，可以通过给`FormItem`传递`checked` `unchecked`属性来改变被勾选时所映射到表单状态中的值：

```javascript
<FormItem checked="yes" unchecked="no">
    <Switch />
</FormItem>
```

##### `Slider`

##### `Select`

##### `TreeSelect`

##### `Transfer`

`Transfer`收集到表单状态中的是`targetKeys`。

##### `TimePicker`

参考 [`DatePicker`](#datepicker)

##### `Upload`

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

#### `一些交互组件调用时的注意事项`

##### `Mention 为未非受控组件`

由于`Mention`的 `onChange` 会频繁触发，所以为了性能考虑，针对该组件使用了非受控组件。即，只能在初次调用时传入 value，后期不可通过`react-formutil`提供的`$setValues`等方法去动态的设置该项的值。
