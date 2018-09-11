<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html, body{
  overflow: hidden;
}
html,body,#app {
  width: 100%;
  height: 100%;
  background: #f1f1f1;
}
</style>
