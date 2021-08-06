<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-20 15:02:09
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-08-05 23:43:13
 * @FilePath: /myblog/src/views/Blog/components/BlogTOC.vue
-->
<template>
  <div class="bolg-toc-contarner">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @clickSelect="hashChange" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import debounce from "@/utils/debounce.js";
export default {
  components: {
    RightList,
  },
  props: {
    list: {
      type: Array,
      require: true,
    },
  },
  computed: {
    tocWithSelect() {
      const getToc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anthor === this.activeAnthor,
          children: getToc(t.children),
        }));
      };
      return getToc(this.list);
    },
    doms() {
      let domArr = [];
      const addDom = (toc) => {
        for (const item of toc) {
          console.log(item.anthor);
          domArr.push(document.getElementById(item.anthor));
          if (item.children && item.children.length > 0) {
            addDom(item.children);
          }
        }
      };
      addDom(this.list);
      return domArr;
    },
    select() {
      return debounce(this.setSelect, 16);
    },
  },
  data() {
    return {
      activeAnthor: "",
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.select);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.select);
  },

  methods: {
    /**
     * @description: 改变hash
     * @author: gaoluo
     * @param {*} data
     * @return {null}
     */

    hashChange(data) {
      location.hash = data.item.anthor;
    },
    /**
     * @description:
     * @author: gaoluo
     * @param {*}
     * @return {*}
     */

    setSelect() {
      for (const dom of this.doms) {
        if (!dom || this.activeAnthor === dom.id) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top.top >= 0 && top.top <= 100) {
          this.activeAnthor = dom.id;
          return;
        } else if (top > 100) {
          return;
        } else {
          this.activeAnthor = dom.id;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.bolg-toc-contarner {
  width: 220px;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}
</style>
