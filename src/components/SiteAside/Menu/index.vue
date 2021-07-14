<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-03-18 03:02:55
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-12 00:05:54
 * @FilePath: /myblog/src/components/SiteAside/Menu/index.vue
-->
<template>
  <nav class="menu-container">
    <RouterLink
    :exact="item.exact"
      :to="{path:item.path}"
      v-for="item in items"
      :key="item.name"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon"></Icon>
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  // methods: {
  //   isSelected(item) {
  //     const path = location.pathname.toLowerCase();
  //     const currentItem = item.link.toLowerCase();
  //     if (item.startWith) {
  //       return path.startsWith(currentItem);
  //     } else {
  //       return currentItem === path;
  //     }
  //   },
  // },
  data() {
    return {
      items: [
        {
          path:'/',
          name: "Home",
          title: "首页",
          icon: "home",
          exact:true
        },
        {
          path:'/blog',
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact:true,
        },
        {
          path:'/about',
          name: "About",
          title: "关于我",
          icon: "about",
          exact:false
        },
        {
          path:'/project',
          name: "Project",
          title: "项目 & 效果",
          icon: "code",
          exact:false
        },
        {
          path:'/message',
          name: "Message",
          title: "留言板",
          icon: "message",
          exact:false
        },
      ],
    };
  },
};
</script>

<style scoped lang='less'>
@import url("~@/style/var.less");
.menu-container {
  width: 100%;
  margin: 24px 0;
  a {
    display: flex;
    align-content: center;
    font-size: 20px;
    padding: 0 50px;
    height: 45px;
    line-height: 45px;
    &:hover {
      color: #fff;
    }
    &.selected {
      background: darken(@words, 2%);
    }
    .icon {
      width: 24px;
      font-size: 16px;
    }
  }
}
</style>