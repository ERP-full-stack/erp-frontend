<template>
  <div class="query-table">
    <search-pager :option="option" :tools="tools"></search-pager>
    <query-form :form-fields="formFields"></query-form>
    <slot name="middle-tools"></slot>
    <table-list :tables="tables[0]"></table-list>
    <slot name="bottom-tools"></slot>
  </div>
</template>

<script>
export default {
  name: 'query-table',
  props: {
    option: {
      type: Object,
      default: () => {},
    },
    tools: {
      type: Array,
      default: () => [],
    },
    formFields: {
      type: Array,
      default: () => [],
    },
    tables: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    this.initTables();
  },
  methods: {
    initTables() {
      console.log(this.tables);
      this.fetchTable();
    },
    async fetchTable() {
      this.tableData = await this.$http.get(this.tables[0].url.method);
    },
  },
};
</script>

<style scoped>

</style>
