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
         <router-view></router-view>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside"
export default {
  name: "App",
  components:{
    Layout,
    SiteAside
  }
};
</script>

<style lang="less" scoped>
@import '~@/style/mixin.less';
@import '~@/style/var.less';
  #app{
    .self-fill(fixed);
    aside{
      height: 100%;
      background:@dark;
      color:@lightWords;
    }
    .main{
      background-color: lightskyblue;
    }
  }
</style>
