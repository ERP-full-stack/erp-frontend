<template>
   <div class="layout">
     <Menu></Menu>
     <div class="content">
       <Topbar></Topbar>
       <div class="main">
         <h2>{{this.$store.state.login.describe}}</h2>
         <router-view></router-view>
       </div>
     </div>
   </div>
</template>

<script>
import Menu from './../../components/menu/';
import Topbar from './../../components/topbar/';

export default {
  components: {
    Menu,
    Topbar,
  },
};
</script>

<style scoped lang="scss">
  .layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    .main {
      width: 100%;
      height: 100%;
      padding: 20px;
    }
  }
</style>
