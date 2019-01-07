<template>
  <div>
    <query-table
      ref="queryTable"
      :option="option"
      :tools="tools"
      :formFields="formFields"
      :tables="tables">
    </query-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        // back: '123',
      },
      tools: [
        {
          label: '刷新',
          icon: 'iconfont icon-refresh',
          show: true,
          func: () => {
            this.$refs.queryTable.loadTable();
          },
        },
      ],
      formFields: [
        {
          label: '姓名',
          type: 'text',
          placeholder: '请输入姓名',
          columnName: 'name',
        },
        {
          label: '状态',
          type: 'select',
          placeholder: '请选中状态',
          columnName: 'status',
          lookup: '', // 接口
        },
        {
          label: '日期范围',
          type: 'daterange',
          placeholder: '请选择时间',
          columnName: 'daterange',
        },
      ],
      tables: [{
        url: {
          method: '/reportForm/list',
          uniqueKey: 'reportForm.list',
          data: {},
        },
        attr: {
          stripe: true,
          border: true,
          size: 'small',
          fit: true,
          highlightCurrentRow: true,
        },
        columns: [
          {
            label: '姓名',
            key: 'name',
            width: '80px',
          },
          {
            label: '年龄',
            key: 'age',
            width: '80px',
          },
          {
            label: '性别',
            key: 'gender',
            width: '',
            filter: {
              type: 'lookup',
              api: 'www.baidu.com',
            },
          },
        ],
        operation: {
          label: '操作',
          fixed: 'right',
          width: '100px',
          options: [
            {
              label: '详情',
              show: true,
              disabled: false,
              func: () => {
                // console.log(row);
              },
            },
            {
              label: '详情',
              show: true,
              disabled: false,
              func: () => {
                // console.log(row);
              },
            },
          ],
        },
      }],
    };
  },
};
</script>

<style scoped></style>
