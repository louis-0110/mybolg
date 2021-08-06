<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-03-18 20:42:14
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-08-04 11:06:56
 * @FilePath: /myblog/src/views/Blog/index.vue
-->
<template>
  <div class="blog-cantainer">
    <Layout>
      <BlogList />
      <template #right>
        <BlogCategory></BlogCategory>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "@/views/Blog/components/BlogList.vue";
import BlogCategory from "@/views/Blog/components/BlogCategory.vue";
const data = "nnnn";
console.log(data);
export default {
  components: {
    Layout,
    BlogCategory,
    BlogList,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.blog-cantainer {
  width: 100%;
  height: 100%;
}
</style>
