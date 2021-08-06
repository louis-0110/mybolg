<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-26 15:00:30
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-08-05 00:42:09
 * @FilePath: /myblog/src/components/MessageArea/index.vue
-->
<template>
  <div class="message-area-container">
    <DataForm />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :data="list" />
    <div>
      <p class="info" v-loading="isListLoading" v-show="isListLoading && more">
        加载中...
      </p>
      <p class="info" v-show="!isListLoading && !more">没有更多了...</p>
    </div>
  </div>
</template>

<script>
import DataForm from "./DataForm.vue";
import DataList from "./DataList.vue";
export default {
  components: {
    DataForm,
    DataList,
  },
  props: {
    title: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    isListLoading: {
      type: Boolean,
    },
    list: {
      type: Array,
    },
    more: {
      type: Boolean,
    },
  },
};
</script>

<style lang="less" scoped>
.message-area-container {
  padding: 15px;
  box-sizing: border-box;
  .info {
    text-align: center;
    line-height: 4em;
  }
}
</style>
