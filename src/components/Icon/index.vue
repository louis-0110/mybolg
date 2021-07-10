<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-03-16 21:19:18
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-10 14:59:44
 * @FilePath: /myblog/src/components/Icon/index.vue
-->
<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
export default {
  data() {
    return {
      icontType: {
        arrowUp: "icon-arrow-up-bold",
        arrowDown: "icon-arrow-down-bold",
        dellete: "icon-delete-filling",
        success: "icon-success-filling",
        prompt: "icon-prompt-filling",
        blog: "icon-blog",
        qq: "icon-qq",
        wechat: "icon-wechat",
        github: "icon-github",
        email: "icon-email",
        home: "icon-zhuye",
        empty: "icon-empty",
        comment: "icon-pinglun",
        about: "icon-set_about_hov",
        code: "icon-code",
        close: "icon-guanbi1",
        message: "icon-xinxi",
        warn:'icon-warn'
      },
    };
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed:{
    fontClass(){
      return this.icontType[this.type]
    }
  }
};
</script>

<style lang="less" scoped>
@import url("//at.alicdn.com/t/font_2424703_y2n1mjb6i6l.css");
i{
  font-size: inherit;
}
</style>
