<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-18 22:10:17
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-20 14:33:25
 * @FilePath: /myblog/src/views/Blog/components/BlogCategory.vue
-->
<template>
  <div class="bolg-category-container" v-loading="isLoading">
    <h2>文章目录</h2>
    <RightList @clickSelect="select" :list="list" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import fetchData from "@/mixins/fetchData.js";
import { getCategory } from "@/api/test.js";

export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  data() {
    return {
      //data
    };
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    list() {
      const articleTotalCount = this.data.reduce((pre, cur) => {
        return pre + cur.totalNum;
      }, 0);
      const result = [
        { name: "全部", id: -1, totalNum: articleTotalCount },
        ...this.data,
      ];

      return result.map((item) => {
        return {
          ...item,
          isSelect: item.id === this.categoryId,
        };
      });
    },
  },

  methods: {
    select(newV) {
      const id = newV.item.id;
      const query = {
        limit: 10,
        page: 1,
      };
      if (id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "BlogCategory",
          query,
          params: {
            categoryId: id,
          },
        });
      }
    },
    async fetchData() {
      return await getCategory();
    },
  },
};
</script>

<style lang="less" scoped>
.bolg-category-container {
  // background: coral;
  width: 230px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
  h2 {
    padding-bottom: 20px;
  }
}
</style>
