# react-antd-formutil

[![npm](https://img.shields.io/npm/v/react-antd-formutil.svg?style=flat)](https://npm.im/react-antd-formutil)
[![peerDependencies](https://img.shields.io/npm/dependency-version/react-antd-formutil/peer/react.svg?color=yellowgreen)](https://reactjs.org)
[![definitionTypes](https://img.shields.io/npm/types/react-antd-formutil.svg)](https://github.com/qiqiboy/react-antd-formutil/blob/master/index.d.ts)
[![gzip](https://img.shields.io/bundlephobia/minzip/react-antd-formutil.svg)](https://npm.im/react-antd-formutil)
[![download](https://img.shields.io/npm/dm/react-antd-formutil.svg)](https://npm.im/react-antd-formutil)
[![issues](https://img.shields.io/github/issues/qiqiboy/react-antd-formutil.svg)](https://github.com/qiqiboy/react-antd-formutil/issues)
[![license](https://img.shields.io/github/license/qiqiboy/react-antd-formutil.svg)](https://github.com/qiqiboy/react-antd-formutil/blob/master/LICENSE)
[![github](https://img.shields.io/github/last-commit/qiqiboy/react-antd-formutil.svg)](https://github.com/qiqiboy/react-antd-formutil)
[![github](https://img.shields.io/github/release-date/qiqiboy/react-antd-formutil.svg)](https://github.com/qiqiboy/react-antd-formutil/releases)
[![github](https://img.shields.io/github/commit-activity/m/qiqiboy/react-antd-formutil.svg)](https://github.com/qiqiboy/react-antd-formutil/commits/master)
[![github](https://img.shields.io/github/stars/qiqiboy/react-antd-formutil.svg?style=social)](https://github.com/qiqiboy/react-antd-formutil)

[![react-antd-formutil](https://nodei.co/npm/react-antd-formutil.png?compact=true)](https://npm.im/react-antd-formutil)

Happy to use react-formutil in the project based on ant-design@`3`&`4` ^\_^

在 [ant-design](https://github.com/ant-design/ant-design) 项目，结合 [react-formutil](https://github.com/qiqiboy/react-formutil) 来快速构建表单。**支持所有的`ant-design`输入型（`data-entry`）组件。**

> **如果你在使用其他 react 组件库，可以查阅：**
>
> 1.  react-bootstrap [`react-bootstrap-formutil`](https://github.com/qiqiboy/react-bootstrap-formutil) [![npm](https://img.shields.io/npm/v/react-bootstrap-formutil.svg?style=flat)](https://npm.im/react-bootstrap-formutil)
> 1.  react-md [`react-md-formutil`](https://github.com/qiqiboy/react-md-formutil) [![npm](https://img.shields.io/npm/v/react-md-formutil.svg?style=flat)](https://npm.im/react-md-formutil)
> 1.  Material-UI [`react-material-formutil`](https://github.com/qiqiboy/react-material-formutil) [![npm](https://img.shields.io/npm/v/react-material-formutil.svg?style=flat)](https://npm.im/react-material-formutil)

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
        * [`getValueFromEvent`](#getvaluefromevent)
        * [`errorLevel`](#errorlevel)
    + [`setErrorLevel(level)`](#seterrorlevellevel)
    + [`支持的组件`](#支持的组件)
        * [`AutoComplete`](#autocomplete)
        * [`Checkbox`](#checkbox)
        * [`Cascader`](#cascader)
        * [`DatePicker`](#datepicker)
        * [`InputNumber`](#inputnumber)
        * [`Input`](#input)
        * [`Mentions`](#mentions)
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
    + [`动态className`](#动态classname)
- [FAQ](#faq)
    + [`给组件设置的onChange、onFocus等方法无效、不执行`](#给组件设置的onchangeonfocus等方法无效不执行)
    + [`RangePicker 在safari下假死？`](#rangepicker-在safari下假死)
    + [`在生产环境(NODE_ENV==='production')部分组件调用有异常？`](#在生产环境node_envproduction部分组件调用有异常)
    + [`如何正确的使用FormItem嵌套渲染多个节点元素？`](#如何正确的使用formitem嵌套渲染多个节点元素)

<!-- vim-markdown-toc -->

### 安装 Installation

[![react-antd-formutil](https://nodei.co/npm/react-antd-formutil.png?compact=true)](https://npm.im/react-antd-formutil)

**`react-antd-formutil`从`1.0.0`版本开始，同时支持 Ant Design `3.x`和`4.x`版本**

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

> 如果给 `FormItem` 传递了多个子节点，可能会出现无法非预期的异常情况。你可以了解[`如何正确的使用FormItem嵌套渲染多个节点元素？`](#如何正确的使用formitem嵌套渲染多个节点元素)

**支持传递的属性**

`FormItem`可以接收所有`antd`中的`Form.Item`组件所接收的所有属性，另外还新增以下属性支持：

##### `name`

设置输入项的 name 值，表单项将会以 name 作为 key 收集到 formutil 的状态中。支持嵌套语法 _（同`react-formutil`的`Field`同名参数，可以参考 [name](https://github.com/qiqiboy/react-formutil#name)）_

##### `$defaultValue`

设置该表单项的默认值 _（同`react-formutil`的`Field`同名参数，可以参考[\$defaultvalue](https://github.com/qiqiboy/react-formutil#defaultvalue)）_

##### `$validators`

设置校验方法 _（同`react-formutil`的`Field`同名参数, 可以参考 [\$validators](https://github.com/qiqiboy/react-formutil#validators)）_

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

请参考`react-formutil`中[`$parser`](https://github.com/qiqiboy/react-formutil#parser)介绍。

##### `$formatter`

请参考`react-formutil`中[`$formatter`](https://github.com/qiqiboy/react-formutil#formatter)介绍。

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

##### `getValueFromEvent`

请参考 [`getValueFromEvent()`](https://github.com/qiqiboy/react-formutil/blob/master/README.md#getvaluefromevent)

##### `errorLevel`

用来覆盖全局的 errorLevel 设置。参考[`setErrorLevel(level)`](#seterrorlevellevel)

#### `setErrorLevel(level)`

`setErrorLevel` 该方法可以用来全局设置错误信息何时出现，有三个级别可以设置：

-   `0` 当`$dirty` `$touched` `$invalid` 都为 true 时
-   `1` 当`$dirty` `$invalid` 都为 true 时
-   `2` 当`$invalid` 为 true 时
-   `off` 关闭错误显示

默认值为 `1`

> 注意，该方法影响全局，如果只是希望单独对某个表单项进行设置，可以通过`errorLevel`属性进行设置：参考[`errorLevel`](#errorlevel)

```javascript
import { setErrorLevel } from 'react-antd-formutil';

setErrorLevel(0);

// 当关闭错误显示时，errorLevel='off'，你可以手动自行设置错误展示方式：
<FormGroup
    name="errorOff"
    errorLevel="off"
    itemProps={{
        validateStatus: $formutil.$errors.errorOff ? 'error' : undefined,
        help: $formutil.$errors.errorOff ? <div>出错啦</div> : null
    }}>
    <Input />
</FormGroup>;
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

##### [`Mentions`](https://ant.design/components/mentions-cn/)

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

`Upload`组件非常特殊，其接受`fileList`对象作为整个组件的状态。而实际业务中，往往只需要获取上传文件的返回的地址，或者一组文件的地址。可以通过`$parser`控制如何获取上传结果的值，并且可以通过`$parser`的第二个回调方法`$setViewValue`来控制`fileList`对象，实现对文件上传数量的控制。

**单个文件上传，获取单个文件上传地址**

```javascript
<FormItem
    name="upload"
    $formatter={url =>
        url && [
            {
                url,
                uid: url,
                status: 'done',
                name: url.split('/').slice(-1)[0]
            }
        ]
    }
    $parser={(info, $setViewValue) => {
        // 必不可少，限制只能上传一个文件
        $setViewValue(info.fileList.slice(-1));

        if (info.file.status === 'done') {
            return info.file.response.url;
        }
    }}
    itemProps={{ ...formItemLayout, label: 'Upload' }}
    required>
    <Upload {...uplodConfig}>
        <Button>
            <UploadOutlined /> Click to Upload
        </Button>
    </Upload>
</FormItem>
```

**多文件列表上传，获取多个文件上传地址数组**

```javascript
<FormItem
    name="upload"
    $formatter={urls =>
        urls &&
        urls.map(url => ({
            url,
            uid: url,
            status: 'done',
            name: url.split('/').slice(-1)[0]
        }))
    }
    $parser={(info, $setViewValue) => {
        // 限制最大上传文件数量为3，如果不需要限制，可以移除该行，或者修改该值
        $setViewValue(info.fileList.slice(-3));

        return info.fileList.filter(file => file.status === 'done').map(file => file.url || file.response.url);
    }}
    itemProps={{ ...formItemLayout, label: 'Upload' }}
    required>
    <Upload {...uplodConfig}>
        <Button>
            <UploadOutlined /> Click to Upload
        </Button>
    </Upload>
</FormItem>
```

#### `动态className`

`FormGroup`会自动给表单节点增加与该表单项校验状态相关的 className：

-   `has-error`
-   `is-invalid`
-   `is-valid`
-   `is-touched`
-   `is-untouched`
-   `is-focused`
-   `is-unfocused`
-   `is-dirty`
-   `is-pristine`

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

#### `在生产环境(NODE_ENV==='production')部分组件调用有异常？`

如果在生产环境，发现例如`Checkbox` `Radio` `Switch`等组件无法正确捕获用户输入的值，这种情况一般是由于项目中使用了`babel-plugin-import`插件。

`react-antd-formutil`中是使用 `import { Switch } from 'antd'` 这种写法来调用 `Switch` 组件的，而`babel-plugin-import`插件会将项目源代码中的类似语句，替换成`import Switch from 'antd/lib/switch'`。这两种写法获取到的`Switch`其实并不是严格意义上的相等，前者是对后者的又一层导出封装。

而由于`babel-plugin-import`一般仅仅会配置成仅仅对项目代码进行处理，所以处于项目`node_modules`目录中的`react-antd-formutil`中的语句不会被处理。我们需要通过修改项目 webpack 配置的方式，来使`babel-plugin-import`插件能处理`react-antd-formutil`的代码。

可以编辑项目的 webpack 配置（只需要配置生产环境的构建配置即可），在`rules`模块下添加以下的代码：

```javascript
{
    test: /\.(js|mjs)$/,
    include: /react-antd-formutil/, // 仅仅处理react-antd-formutil即可
    loader: require.resolve('babel-loader'),
    options: {
        babelrc: false,
        plugins: [[
            "import",
            {
                "libraryName": "antd"
            },
            "antd"
        ]]
    }
}
```

#### `如何正确的使用FormItem嵌套渲染多个节点元素？`

你可以通过给给`children`属性传递`render props`函数，来自由定义要渲染出的节点。但是请注意，当传递一个`render props`函数时，需要手动绑定相关绑定事件和 value 属性！

该`children`函数接受一个`$fieldHandler`的对象，默认情况下其包含`value` `onChange` `onFocus` `onBlur`四个属性，但是如果你给`FormItem`传递了`valuePropName`等属性的话，这个值将会变为你通过`valuePropName`所定义的名字。

更具体解释可以参考 [**react-formutil.\$fieldHandler**](https://github.com/qiqiboy/react-formutil#fieldhandler)

```typescript
<FormItem name="username">
    {$fieldHandler => (
        <>
            <Input {...$fieldHandler} />
            <div>其它节点内容</div>
        </>
    )}
</FormItem>
```
