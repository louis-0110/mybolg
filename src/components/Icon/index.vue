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
@import url("//at.alicdn.com/t/font_2424703_my83o8qn6fi.css");
i{
  font-size: inherit;
}
</style>
