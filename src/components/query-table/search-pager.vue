<template>
  <div class="lqy-search-pager">
    <div class="search-pager-wrap">
      <router-link v-if="option.back"
                   :to="option.back"
                   replace>
        <i class="iconfont icon-back back"></i>
        <span class="title">{{this.option.title}}</span>
      </router-link>
      <span class="title"
            v-else>{{this.option.title}}</span>
      <!--右侧工具栏-->
      <div class="tools-wrap">
        <template v-for="(btn, index) in tools">
          <el-button type="text"
                     v-if="btnShow(btn)"
                     :disabled="btnDisabled(btn)"
                     :key="index"
                     :size="btn.size ? btn.size : 'mini'"
                     :icon="btn.icon"
                      @click="btnClick(btn)">{{btn.label}}</el-button>
        </template>
      </div>
    </div>
    <p class="line"></p>
  </div>
</template>

<script>
export default {
  name: 'search-pager',
  props: {
    option: {
      type: Object,
    },
    tools: {
      type: Array,
    },
  },
  created() {
    this.initProps();
  },
  methods: {
    initProps() {
      this.option.title = this.$route.meta.title;
    },
    btnShow(btn) {
      if (btn.show) {
        return typeof btn.show === 'function' ? btn.show(btn) : btn.show;
      }
      return true;
    },
    btnDisabled(btn) {
      if (btn.disabled) {
        return typeof btn.disabled === 'function' ? btn.disabled(btn) : btn.disabled;
      }
      return false;
    },
    btnClick(btn) {
      return typeof btn.func === 'function' ? btn.func(btn) : btn.func;
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/variable';

  .lqy-search-pager {
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    padding: 6px 0;
    background: #fff;
    margin-bottom: 5px;
    .search-pager-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 4px 0;
      .back {
        font-size: 15px;
        color: $primary-hover;
      }
      .title {
        color: #333333;
        font-size: 16px;
        font-weight: bold;
        padding-left: 6px;
      }
    }
    .line {
      height: 2px;
      background: #dcdae2;
      margin: 0 -16px;
    }
  }
</style>
