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
        complex: '.com',
     }
  }
]
```

#### Input 配置文档

##### Attributes

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
        <th>键</th>
        <th>string</th>
        <th>-</th>
        <th>-</th>
        <th>name</th>
    </tr>
    <tr>
        <th>icon</th>
        <th>icon</th>
        <th>string/object</th>
        <th>1、若string，则直接输出该值，默认类型是suffix。2、若object,则判断输出。</th>
        <th>suffix</th>
        <th>icon: {slot: 'prefix', class: 'el-icon-search',} / icon: ''</th>
    </tr>
    <tr>
        <th>complex</th>
        <th>带复合框</th>
        <th>string/object</th>
        <th>1、若string，则直接输出该值，默认类型是append。2、若object,则判断输出。</th>
        <th>append</th>
        <th>complex: {slot: 'prepend',val: '.com',} / complex: ''</th>
    </tr>
</table>

##### Slots

<table>
    <tr>
        <th>name</th>
        <th>说明</th>
    </tr>
    <tr>
        <th>prefix</th>
        <th>输入框头部内容</th>
    </tr>
    <tr>
        <th>suffix</th>
        <th>输入框尾部内容</th>
    </tr>
    <tr>
        <th>prepend</th>
        <th>输入框前置内容</th>
    </tr>
    <tr>
        <th>append</th>
        <th>输入框后置内容</th>
    </tr>
</table>


