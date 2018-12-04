<template>
  <div class="query-table" v-loading="loading">
    <search-pager :option="option" :tools="tools"></search-pager>
    <query-form :form-fields="formFields"></query-form>
    <slot name="middle-tools"></slot>
    <table-list
      :attr="tables[0].attr"
      :columns="tables[0].columns"
      :operation="tables[0].operation"
      :tableData="tableData"></table-list>
    <el-pagination
      class="lqy-pagination"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="sizes, prev, pager, next"
      :total="total">
    </el-pagination>
    <slot name="bottom-tools"></slot>
  </div>
</template>

<script>
import createStoreMoudle from './../../store/module/queryTable/factory';

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
      loading: false,
      tableData: [],
      currentPage: 1,
      pageSize: 10,
    };
  },
  computed: {
    total() {
      const obj = this.$store.state.queryTable[this.tables[0].url.uniqueKey];
      return obj.res.rowTotal;
    },
  },
  created() {
    this.initTables();
    this.registerStoreModule();
  },
  methods: {
    initTables() {
      this.fetchTable();
    },
    loadTable() {
      this.fetchTable();
    },
    async fetchTable() {
      this.loading = true;
      const data = await this.$http.get(this.tables[0].url.method);
      this.tableData = data.data.rows;
      this.$store.commit(`queryTable/${this.tables[0].url.uniqueKey}/SET_QUERY_TABLE`, data);
      this.loading = false;
    },
    registerStoreModule() {
      this.$store.registerModule(['queryTable', this.tables[0].url.uniqueKey], createStoreMoudle());
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
};
</script>

<style scoped></style>
