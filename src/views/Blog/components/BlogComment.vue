<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-26 19:12:51
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-08-05 20:35:09
 * @FilePath: /myblog/src/views/Blog/components/BlogComment.vue
-->
<template>
  <MessageArea
    :list="data.rows"
    title="评论列表"
    :subTitle="`(${data.total})`"
    :isListLoading="isLoading"
    :more="haveMore"
  />
</template>

<script>
import MessageArea from "@/components/MessageArea";
import { getComments } from "@/api/test.js";
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "blogComment",
  mixins: [fetchData({})],
  components: {
    MessageArea,
  },
  data() {
    return {
      limit: 10,
      page: 1,
      haveMore: true,
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    scrollDown() {
      const rang = 100;
      let lastScrollTop = 0;
      return (dom) => {
        console.log("this.scrolldowm");
        if (dom.scrollTop > lastScrollTop) {
          lastScrollTop = dom.scrollTop;
          const dec = Math.abs(
            dom.scrollHeight - dom.scrollTop - dom.clientHeight
          );
          if (dec < rang && !this.isLoading) {
            this.moreComment();
          }
        } else {
          lastScrollTop = dom.scrollTop;
        }
      };
    },
  },
  created() {
    this.$bus.$on("mainScroll", this.scrollDown);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.scrollDown);
  },
  updated() {
    this.haveMore = this.data.total > this.data.rows.length;
  },
  methods: {
    async fetchData() {
      console.log(this.$route.params);
      return await getComments({
        limit: this.limit,
        page: this.page,
        id: this.id,
      });
    },
    async moreComment() {
      if (!this.haveMore) {
        return;
      }
      this.page++;
      this.isLoading = true;
      const res = await getComments({
        limit: this.limit,
        page: this.page,
        id: this.id,
      });
      this.data.rows = [...this.data.rows, ...res.rows];
      this.isLoading = false;
    },
    /**
     * 滚动到底部事件
     *
     */
  },
};
</script>

<style></style>
