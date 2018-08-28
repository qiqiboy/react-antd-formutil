# react-antd-formutil

[![npm](https://img.shields.io/npm/v/react-antd-formutil.svg?style=flat)](https://npm.im/react-antd-formutil)

Happy to use react-formutil in the project based on ant-design ^\_^

在 [ant-design](https://github.com/ant-design/ant-design) 项目，结合 [react-formutil](https://github.com/qiqiboy/react-formutil) 来快速构建表单

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
- [FAQ](#faq)
    + [`一些交互组件调用时的注意事项`](#一些交互组件调用时的注意事项)
        * [`Mention` 组件暂时不可以用于和 FormItem 交互](#mention-组件暂时不可以用于和-formitem-交互)

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

先看一个使用示例：

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

> *   `required` 必填 `required`
> *   `maxLength` 。最大输入长度，有效输入时才会校验 `maxLength="100"`
> *   `minLength` 最小输入长度，有效输入时才会校验 `minLength="10"`
> *   `max` 最大输入数值，仅支持 Number 比较。有效输入时才会校验 `max="100"`
> *   `min` 最小输入数值，仅支持 Number 比较。有效输入时才会校验 `min="10"`
> *   `pattern` 正则匹配。有效输入时才会校验 `pattern={/^\d+$/}`
> *   `enum` 枚举值检测。有效输入时才会校验 `enum={[1,2,3]}`
> *   `checker` 自定义校验函数。`checker={value => value > 10 && value < 100 || '输入比如大于10小与100'}`

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

### FAQ

#### `一些交互组件调用时的注意事项`

##### `Mention` 组件暂时不可以用于和 FormItem 交互

由于`Mention`初始化会触发 onChange，所以一起使用时会导致一些内存泄漏问题。请单独使用 Mention 组件
