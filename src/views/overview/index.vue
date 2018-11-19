<template>
    <div>
      <search-pager :option="option" :tools="tools"></search-pager>
      <query-form :form-fields="formFields"></query-form>
    </div>
</template>

<script>
import searchPager from './../../components/search-pager';
import queryForm from './../../components/query-form';

export default {
  components: {
    searchPager,
    queryForm,
  },
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
          label: '年龄',
          type: 'text',
          placeholder: '请输入年龄',
          columnName: 'age',
          complex: {
            slot: 'prepend',
            val: '.com',
          },
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
</style>
