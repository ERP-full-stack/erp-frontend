<template>
  <div class="lqy-query-form">
    <el-form :model="model"
             class="demo-form-inline"
             size="mini"
             label-position="top">
      <el-row :gutter="20">
        <template v-for="(item, index) in formFields">
          <el-col :span="3" :key="index">
            <form-item :item="item" :model="model"></form-item>
          </el-col>
        </template>
        <el-col :span="4">
          <el-form-item class="query-form-btns">
            <el-button type="primary" icon="iconfont icon-search" @click="onSubmit">
              查询</el-button>
            <el-button type="text" icon="iconfont icon-reset" @click="onSubmit">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import formItem from './form-item';

export default {
  name: 'query-form',
  props: {
    formFields: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      model: {},
    };
  },
  watch: {
    model(val, oVal) {
      console.log(val);
      console.log(oVal);
    },
  },
  mounted() {
    this.createModel();
  },
  components: {
    formItem,
  },
  methods: {
    onSubmit() {
      // console.log('submit!');
      console.log(this.model);
    },
    createModel() {
      // console.log(this.formFields);
      this.formFields.forEach((item) => {
        this.model[item.columnName] = '';
      });
    },
  },
};
</script>

<style scoped>

</style>
