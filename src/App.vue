<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-03-16 19:21:34
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-08-05 00:49:19
 * @FilePath: /myblog/src/App.vue
-->
<template>
  <div id="app">
    <Layout>
      <template #left>
        <aside>
          <SiteAside />
        </aside>
      </template>
      <template #default>
        <div class="main">
          <keep-alive include="Home" exclude="slideshowItem">
            <router-view></router-view>
          </keep-alive>
        </div>
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import ToTop from "@/components/ToTop";
export default {
  name: "App",
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
@import "~@/style/var.less";
#app {
  .self-fill(fixed);
  min-width: 960px;
  aside {
    height: 100%;
    background: @dark;
    color: @lightWords;
  }
  .main {
    width: 100%;
    height: 100%;
    // background-color: lightskyblue;
  }
}
</style>
