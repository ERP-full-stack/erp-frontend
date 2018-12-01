<template>
  <div class="a-menu">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <!--<el-menu-item :index="item.path"-->
                    <!--v-for="(item, index) in-->
                    <!--this.$store.state.login.newRouter[0].children"-->
                    <!--:key="index" @click="routerLink(item)">-->
        <!--<i :class="item.icon"></i>-->
        <!--<span slot="title">{{ item.label }}</span>-->
      <!--</el-menu-item>-->
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">概览</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title">流量</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">销售</span>
      </el-menu-item>
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

<style scoped lang="scss">
  .a-menu {
    flex: none;
    width: 160px;
    height: 100%;
    background: #f1f1f5;
    border-right: 1px solid #dbd9e1;
  }
  .el-menu {
    border-right: none
  }
</style>
