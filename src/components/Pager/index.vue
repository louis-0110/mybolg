<template>
  <div class="pager-container">
    <div v-if="pageNumber > 1">
      <a :class="{ disabled: current === 1 }" @click="pageChange(1)"
        >|&lt;&lt;
      </a>
      <a :class="{ disabled: current === 1 }" @click="pageChange(current - 1)"
        >&lt;&lt;</a
      >
      <a
        :class="{ active: current === item }"
        v-for="item in numbers"
        :key="item"
        @click="pageChange(item)"
        >{{ item }}</a
      >
      <a
        :class="{ disabled: current === pageNumber }"
        @click="pageChange(current + 1)"
        >&gt;&gt;</a
      >
      <a
        :class="{ disabled: current === pageNumber }"
        @click="pageChange(pageNumber)"
        >&gt;&gt;|</a
      >
    </div>
    <div v-else>
      <a class="active">1</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 9,
    },
  },
  methods: {
    pageChange(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }

      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }

      if (newPage === this.current) return;
      this.$emit("pageChangeHandle", newPage);
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    visibileMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibileMax() {
      let max = this.visibileMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers() {
      let nums = [];
      for (let i = this.visibileMin; i <= this.visibileMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  a {
    user-select: none;
    margin: 0 6px;
    color: @primary;
    font-weight: bolder;
    border:2px solid;
    display: inline-block;
    min-width: 30px;
    height: 20px;
    text-align: center;
    // line-height: 30px;
    border-radius: 4px;
    // box-sizing: border-box;
    padding: 8px 5px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @dark;
      cursor: text;
    }
  }
}
</style>