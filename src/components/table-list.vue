<template>
  <div class="table-list" style="width: 100%">
    <el-table
      v-loading="loading"
      v-bind="tables.attr"
      class="default-table"
      :height="tableHeight"
      :data="data"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        prop="number"
        fixed="left"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        type="selection"
        fixed="left"
        width="50">
      </el-table-column>
      <template v-for="(col, i) in tables.columns">
        <el-table-column
          :prop="col.key"
          :key="col.key + i"
          :label="col.label"
          :width="col.width">
        </el-table-column>
      </template>
      <el-table-column
        v-if="tables.operation && tables.operation.options.length > 0"
        :fixed="tables.operation.fixed"
        :label="tables.operation.label"
        :width="tables.operation.width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            v-if="operationShow(btn, scope.row)"
            v-for="(btn, i) in tables.operation.options"
            :key="btn.label+i"
            type="text"
            :disabled="operationDisabled(btn, scope.row)"
            @click.stop="handleCommand(btn, scope.row)">
            {{btn.label}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="lqy-pagination"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="10"
      layout="sizes, prev, pager, next"
      :total="100">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'table-list',
  props: {
    tables: {
      type: Object,
    },
  },
  created() {
    this.initTables();
  },
  data() {
    return {
      multipleSelection: [],
      data: [],
      loading: false,
      currentPage2: 1,
      tableHeight: null,
    };
  },
  mounted() {
    this.handleResize();
    this.$bus.$on('GLOBAL_RESIZE', this.handleResize);
  },
  beforeDestroy() {
    this.$bus.$off('GLOBAL_RESIZE', this.handleResize);
  },
  methods: {
    initTables() {
      this.loading = true;
      setTimeout(() => {
        this.data = [{
          name: '刘岂宇',
          age: '18',
          gender: '1',
        },
        {
          name: '周杰伦',
          age: '18',
          gender: '1',
        },
        {
          name: '张学友',
          age: '18',
          gender: '2',
        },
        {
          name: '刘岂宇',
          age: '18',
          gender: '1',
        },
        {
          name: '周杰伦',
          age: '18',
          gender: '1',
        },
        {
          name: '张学友',
          age: '18',
          gender: '2',
        },
        {
          name: '刘岂宇',
          age: '18',
          gender: '1',
        },
        {
          name: '刘岂宇',
          age: '18',
          gender: '1',
        },
        {
          name: '周杰伦',
          age: '18',
          gender: '1',
        },
        {
          name: '张学友',
          age: '18',
          gender: '2',
        },
        {
          name: '刘岂宇',
          age: '18',
          gender: '1',
        },
        {
          name: '刘岂宇',
          age: '18',
          gender: '1',
        },
        {
          name: '周杰伦',
          age: '18',
          gender: '1',
        },
        {
          name: '张学友',
          age: '18',
          gender: '2',
        },
        {
          name: '刘岂宇',
          age: '18',
          gender: '1',
        },
        {
          name: '刘岂宇',
          age: '18',
          gender: '1',
        },
        {
          name: '周杰伦',
          age: '18',
          gender: '1',
        },
        {
          name: '张学友',
          age: '18',
          gender: '2',
        },
        {
          name: '刘岂宇',
          age: '18',
          gender: '1',
        },
        {
          name: '周杰伦',
          age: '18',
          gender: '1',
        },
        {
          name: '张学友',
          age: '18',
          gender: '2',
        }];
        this.loading = false;
      }, 500);
    },
    handleCommand(btn, row) {
      if (!btn.func) {
        return;
      }
      btn.func(row);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    operationDisabled(btn, row) {
      if (typeof btn.disabled === 'function') {
        return btn.disabled(row);
      }
      return !!btn.disabled;
    },
    operationShow(btn, row) {
      if (typeof btn.show === 'function') {
        return btn.show(row);
      }
      return btn.show;
    },
    handleSizeChange() {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange() {
      // console.log(`当前页: ${val}`);
    },
    handleResize() {
      const bodyHeight = window.innerHeight || document.documentElement.clientHeight;
      const topbarHeight = document.querySelector('.topbar').clientHeight;
      const lqySearchPagerHeight = document.querySelector('.lqy-search-pager').clientHeight;
      const lqyPaginationHeight = document.querySelector('.lqy-pagination').clientHeight;
      this.tableHeight = `${bodyHeight - topbarHeight - lqySearchPagerHeight - lqyPaginationHeight - 40}px`;
    },
  },
};
</script>

<style scoped>

</style>
