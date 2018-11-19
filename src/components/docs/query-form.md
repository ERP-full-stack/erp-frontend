# query-form 配置说明

为了便利的使用各种搜索条件，我封装了`query-form`。

### 如何使用

```vue
      <query-form :form-fields="formFields"></query-form>
```

### 如何配置

```
// query-form配置(array)

formFields: [
  {
     {
        label: '姓名',
        type: 'text',
        placeholder: '请输入姓名',
        columnName: 'name',
        icon: {
          slot: 'suffix',
          class: 'el-icon-search',
        },
        complex: '.123',
     }
  }
]
```

#### 1、Attributes

<table>
    <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选</th>
        <th>默认</th>
        <th>例子</th>
    </tr>
    <tr>
        <th>type</th>
        <th>表单类型</th>
        <th>string</th>
        <th>text、select等表单类型</th>
        <th>-</th>
        <th>text</th>
    </tr>
    <tr>
        <th>columnName</th>
        <th>该表单字段名（键）</th>
        <th>string</th>
        <th>-</th>
        <th>-</th>
        <th>name</th>
    </tr>
    <tr>
        <th>icon</th>
        <th>带icon的输入框</th>
        <th>string/object</th>
        <th>1、若`string`，则直接输出该值，默认类型是`suffix`。2、若`object`,则判断输出。</th>
        <th>suffix</th>
        <th>`icon: {slot: 'prefix', class: 'el-icon-search',}`</th>
    </tr>
    <tr>
        <th>complex</th>
        <th>带复合框的输入框</th>
        <th>string/object</th>
        <th>1、若`string`，则直接输出该值，默认类型是`append`。2、若`object`,则判断输出。</th>
        <th>append</th>
    </tr>
</table>



