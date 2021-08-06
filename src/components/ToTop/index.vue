<!--
 * @Description: 回到顶部
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-08-05 00:45:35
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-08-05 20:23:51
 * @FilePath: /myblog/src/components/ToTop/index.vue
-->
<template>
  <div class="to-top-container" v-show="isShow" @click="onClickToTop">
    Top
  </div>
</template>

<script>
export default {
  name: "gotToTop",
  data() {
    return {
      isShow: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      console.log("handleScroll");
      if (!dom) {
        this.isShow = false;
        return;
      }
      this.isShow = dom.scrollTop > 500;
    },
    onClickToTop() {
      this.$bus.$emit("setScroll", 0);
    },
  },
};
</script>

<style lang="less" scoped>
.to-top-container {
  width: 50px;
  height: 50px;
  background: #333;
  line-height: 50px;
  text-align: center;
  font-weight: bolder;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid;
  color: #fee;
  position: fixed;
  right: 70px;
  bottom: 90px;
  box-shadow: 0 0 4px 2px #ccc;
}
</style>
