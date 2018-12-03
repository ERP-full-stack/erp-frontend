<template>
  <el-form-item :label="item.label">
    <!--input-->
    <el-input
      v-if="item.type === 'text'"
      v-model="model[item.columnName]"
      :disabled="isDisabled(item)"
      :placeholder="item.placeholder" clearable>
      <i v-if="!!item.icon" :slot="doIcon(item)" class="el-input__icon"
         :class="typeof item.icon === 'object' ? item.icon.class : item.icon"></i>
      <template v-if="!!item.complex" :slot="doComplex(item)">
        {{ typeof item.complex === 'object' ? item.complex.val : item.complex }}</template>
    </el-input>

    <!--select-->
    <el-select v-else-if="item.type === 'select'"
               :disabled="isDisabled(item)"
               :value="modelValue()"
               :multiple="item.multiple"
               :placeholder="item.placeholder" clearable
                @change="bindChange">
      <el-option
        v-for="(cell, index) in doSelectOptions()"
        :key="cell.value + index"
        :label="cell.label"
        :value="cell.value">
      </el-option>
    </el-select>
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
    doSelectOptions() {
      // if (item.lookup) {
      // }
      const data = [
        {
          label: '未开始',
          value: '1',
        },
        {
          label: '已开始',
          value: '2',
        },
        {
          label: '已结束',
          value: '3',
        },
      ];
      return data;
    },
    bindChange(value) {
      this.model[this.item.columnName] = value;
      this.modelValue(3);
    },
    modelValue() {
      return 2;
    },
  },
};
</script>

<style scoped>

</style>
