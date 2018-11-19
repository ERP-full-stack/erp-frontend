<template>
  <el-form-item :label="item.label">
    <el-input
      v-model="model[item.columnName]"
      :disabled="isDisabled(item)"
      :placeholder="item.placeholder" clearable>
      <i v-if="!!item.icon" :slot="doIcon(item)" class="el-input__icon"
         :class="typeof item.icon === 'object' ? item.icon.class : item.icon"></i>
      <template v-if="!!item.complex" slot="append">
        {{ typeof item.complex === 'object' ? item.complex.val : item.complex }}</template>
    </el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'form-item',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    model: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    isDisabled(item) {
      if (typeof item.disabled === 'function') {
        const obj = { key: item.columnName, model: this.model };
        console.log(obj)
        return item.disabled(obj);
      }
      return !!item.disabled;
    },
    doIcon(item) {
      if (typeof item.icon === 'object') {
        return item.icon.slot;
      }
      return 'suffix';
    },
    doComplex(item) {
      if (typeof item.complex === 'object') {
        return item.complex.slot;
      }
      return 'append';
    },
  },
};
</script>

<style scoped>

</style>
