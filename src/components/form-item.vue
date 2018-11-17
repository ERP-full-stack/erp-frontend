<template>
  <el-form-item :label="item.label">
    <el-input v-model="formInline.user" :placeholder="item.placeholder"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'form-item',
};
</script>

<style scoped>

</style>
