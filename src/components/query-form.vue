<template>
  <div class="lqy-query-form">
    <el-form :model="formInline"
             class="demo-form-inline"
             size="mini"
             label-position="top">
      <el-row :gutter="20">
        <template v-for="(item, index) in formFields">
          <el-col :span="3" :key="index">
            <form-item :item="item"></form-item>
          </el-col>
        </template>
        <el-col :span="3">
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
  components: {
    formItem,
  },
};
</script>

<style scoped>

</style>
