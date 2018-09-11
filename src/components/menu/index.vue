<template>
  <div class="a-menu">
    <div class="logo">权限管理系统</div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item :index="item.path"
                    v-for="(item, index) in
                    this.$store.state.login.newRouter[0].children"
                    :key="index" @click="routerLink(item)">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <!--<el-menu-item index="1">-->
        <!--<i class="el-icon-menu"></i>-->
        <!--<span slot="title">概览</span>-->
      <!--</el-menu-item>-->
      <!--<el-menu-item index="2">-->
        <!--<i class="el-icon-document"></i>-->
        <!--<span slot="title">流量</span>-->
      <!--</el-menu-item>-->
      <!--<el-menu-item index="3">-->
        <!--<i class="el-icon-setting"></i>-->
        <!--<span slot="title">销售</span>-->
      <!--</el-menu-item>-->
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    routerLink(item) {
      this.$router.push({
        path: item.path,
      });
    },
  },
};
</script>

<style scoped>
  .a-menu {
    flex: none;
    width: 200px;
    height: 100%;
    background: rgb(84, 92, 100);
  }
  .logo {
    color: #f1f1f1;
    width: 100%;
    text-align: center;
    font-size: 24px;
    padding: 20px 0;
    border-bottom: 1px solid #999;
  }
  .el-menu {
    border-right: none
  }
</style>
