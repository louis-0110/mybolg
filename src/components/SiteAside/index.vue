<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-03-18 17:32:21
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-13 19:06:54
 * @FilePath: /myblog/src/components/SiteAside/index.vue
-->
<template>
  <div class="site-aside-container">
    <div class="avatar">
      <Avatar
        size="100"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_360_360%2F69%2F60%2F02%2F696002a16999b0729ffaf6ea4e730f99.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618653042&t=5d236d199749ca50f26a87aeb3b6851b"
      ></Avatar>
    </div>
    <h1>MGRookie的小窝</h1>
    <Menu></Menu>
    <Contact></Contact>
    <footer>京公网安备11000002000001号</footer>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/SiteAside/Menu";
import Contact from "@/components/SiteAside/Contact";

export default {
  components: {
    Menu,
    Contact,
    Avatar,
  },
};
</script>

<style scoped lang='less'>
.site-aside-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 20px;
  position: relative;
  h1,
  footer {
    text-align: center;
  }
  h1 {
    font-size: 1.2em;
  }
  footer{
    width: 100%;
    margin-top:100px;
    font-size: 14px;
  }
}

.avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
}
</style>