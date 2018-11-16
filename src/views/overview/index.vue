<template>
    <div>
      <search-pager :option="option" :tools="tools"></search-pager>
      <div class="lqy-query-form">
        <el-form :model="formInline"
                 class="demo-form-inline"
                 size="mini"
                 label-position="top">
          <el-row :gutter="20">
            <el-col :span="4">
              <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
              </el-form-item>
            </el-col>
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
    </div>
</template>

<script>
import searchPager from './../../components/search-pager';

export default {
  components: {
    searchPager,
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
            alert(123);
          },
        },
        {
          label: '新增',
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
            alert(123);
          },
        },
      ],
      formInline: {
        user: '',
        region: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
  },
};
</script>

<style scoped lang="scss">
</style>
