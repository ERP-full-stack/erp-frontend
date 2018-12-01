<template>
    <div>
      <search-pager :option="option" :tools="tools"></search-pager>
      <query-form :form-fields="formFields"></query-form>
      <table-list :tables="tables"></table-list>
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
            // alert(123);
          },
        },
        {
          label: '新增123',
          icon: 'iconfont icon-plus',
          show: true,
          // disabled: () => 1 < 2,
          func: () => this.$router.push('/overview/add'),
        },
        {
          label: '删除',
          icon: 'iconfont icon-delete',
          disabled: true,
          func: () => {
            // alert(123);
          },
        },
      ],
      formFields: [
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
        },
        {
          label: '状态',
          type: 'select',
          placeholder: '请选中状态',
          columnName: 'status',
          lookup: '', // 接口
        },
        {
          label: '状态1',
          type: 'select',
          placeholder: '请选中状态',
          columnName: 'status1',
          lookup: '', // 接口
          multiple: false,
        },
      ],
      tables: {
        url: {
          method: '',
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
          ],
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
</style>
