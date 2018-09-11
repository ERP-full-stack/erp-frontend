<template>
  <div class="topbar">
    <div class="info">
      <span class="username">{{this.$store.state.login.username}}</span>
      <span class="logout" @click="logout">注销</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push({
          path: '/logout',
        });
      });
    },
  },
};
</script>

<style scoped>
  .topbar {
    flex: none;
    width: 100%;
    height: 68px;
    background: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .info {
    margin-right: 20px;
  }
  span {
    margin-left: 10px;
  }
  .logout {
    cursor: pointer;
    color: #409EFF;
  }
</style>
