<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-20 14:44:44
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-08-05 23:50:55
 * @FilePath: /myblog/src/views/Blog/ArticleDetail.vue
-->
<template>
  <div class="blog-detail-container" v-loading="isLoading">
    <Layout>
      <div class="content-wrap" ref="container">
        <ArticleContent :blog="data" v-if="data" />
        <BlogComment v-if="!isLoading" />
      </div>
      <template #right v-if="data" v-loading="isLoading">
        <BlogTOC :list="data.toc" />
      </template>
    </Layout>
  </div>
</template>

<script>
import { getArticle } from "@/api/test.js";
import fetchData from "@/mixins/fetchData.js";
import ArticleContent from "./components/ArticleContent.vue";
import BlogTOC from "./components/BlogTOC.vue";
import BlogComment from "./components/BlogComment.vue";
import Layout from "@/components/Layout";
import mainScroll from "@/mixins/mainScroll.js";
export default {
  mixins: [fetchData(null), mainScroll("container")],
  components: {
    ArticleContent,
    BlogTOC,
    BlogComment,
    Layout,
  },
  data() {
    return {};
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  created() {
    // this.$bus.$on("setScroll", this.goToTop);
  },
  destroyed() {
    // this.$bus.$off("setScroll", this.goToTop);
  },
  mounted() {
    // console.log("mounted");
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
  methods: {
    async fetchData() {
      return await getArticle({ id: this.id });
    },
  },
};
</script>

<style lang="less" scoped>
.blog-detail-container {
  width: 100%;
  height: 100%;
  .content-wrap {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
}
</style>
