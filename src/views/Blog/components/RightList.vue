<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-16 15:59:51
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-20 14:31:18
 * @FilePath: /myblog/src/views/Blog/components/RightList.vue
-->
<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <div
        :class="{ isSelect: item.isSelect }"
        @click="handleClick({ item, $event })"
      >
        <span class="category">{{ item.name }}</span>
        <span class="totalNum">{{ item.totalNum }}篇</span>
      </div>

      <MyblogRightlist :list="item.children" @clickSelect="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "MyblogRightlist",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      this.$emit("clickSelect", item);
    },
  },
};
</script>

<style lang="less" scoped>
.right-list-container {
  margin: 0;
  padding: 0;
  margin-left: 1em;
  list-style-type: none;
  li {
    cursor: pointer;
    line-height: 2;
    div {
      display: inline-block;
      padding: 0 10px;
      &.isSelect {
        color: #ff7f50;
        font-weight: bolder;
        background-color: rgba(245, 180, 156, 0.1);
        border-radius: 20px;
      }
      .totalNum {
        margin-left: 10px;
      }
    }
  }
}
</style>
