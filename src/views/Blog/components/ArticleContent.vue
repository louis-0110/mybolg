<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-20 15:01:11
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-27 08:58:26
 * @FilePath: /myblog/src/views/Blog/components/ArticleContent.vue
-->
<template>
  <div class="article-content-container">
    <h1>{{ blog.title }}</h1>
    <div>
      <span>{{ blog.name }}</span>
      <span>{{ blog.scanNumber }}</span>
      <a>{{ blog.commentNumber }}</a>
      <a>{{ blog.createDate }}</a>
    </div>
    <div>
      {{ blog.description }}
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import "github-markdown-css";
export default {
  props: {
    blog: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      name: "name",
    };
  },
  methods: {},
};
</script>

<style scoped lang="less">
.article-content-container {
  padding: 10px;
  box-sizing: border-box;
}

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 1180px;
  margin: 0 auto;
  padding: 15px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 10px;
  }
}
</style>
