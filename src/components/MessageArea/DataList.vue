<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-26 16:17:01
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-08-05 00:20:33
 * @FilePath: /myblog/src/components/MessageArea/DataList.vue
-->
<template>
  <ul class="data-list-container">
    <li v-for="item in data" :key="item.id" class="list-item">
      <Avatar size="64" :src="item.avatar" />
      <div class="title-wrap">
        <div class="title">
          <span
            >昵称：<i class="nickname">{{ item.nickname }}</i></span
          >
          <span class="createDate">日期：{{ item.createDate }}</span>
        </div>
        <p class="content">
          {{ item.content }}
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar";
export default {
  components: {
    Avatar,
  },
  props: {
    data: {
      type: Array,
    },
  },
};
</script>

<style scoped lang="less">
@import url("~@/style/var.less");
.data-list-container {
  .list-item {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    margin: 10px auto;
    padding: 10px 0;
    border-bottom: 1px solid @gray;
    .title-wrap {
      width: 100%;
      .title {
        display: flex;
        justify-content: space-between;
        span {
          margin-right: 20px;
          .nickname {
            font-weight: bold;
            color: @success;
          }
          &.createDate {
            color: @gray;
            margin-left: auto;
          }
        }
        .content {
          text-indent: 2em;
        }
      }
    }
  }
}
.avatar-container {
  border: 1px solid #000;
  margin-right: 20px;
}
</style>
