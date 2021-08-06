/*
 * @Description:
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-08-05 23:31:42
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-08-05 23:55:22
 * @FilePath: /myblog/src/mixins/mainScroll.js
 */

export default function (resName) {
  return {
    created() {
      this.$bus.$on("setScroll", this.goToTop);
    },
    mounted() {
      this.$refs[resName].addEventListener("scroll", this.onScroll)
    },
    beforeDestroy() {
      this.$bus.$off("setScroll", this.goToTop);
      this.$refs[resName].removeEventListener("scroll", this.onScroll)
    },
    methods: {
      goToTop(scrollTop) {
        this.$refs[resName].scrollTop = scrollTop
      },
      /**
    * @description: 滚动事件toc
    * @author: gaoluo
    * @param {*}
    * @return {*}
    */
      onScroll() {
        this.$bus.$emit("mainScroll", this.$refs[resName]);
      },
    },

  }
}