<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-18 22:10:45
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-19 17:50:33
 * @FilePath: /myblog/src/views/Blog/components/BlogList.vue
-->
<template>
  <div class="blog-list-container" v-loading="isLoading" ref="container">
    <ul id="article-wrap" >
      <li class="article" v-for="item in list" :key="item.id">
        <div class="article-img" v-if="item.thumb">
          <a href="">
            <img :src="item.thumb" :alt="item.title" class="article-img" />
          </a>
        </div>
        <div class="content">
          <h2 class="article-title">{{ item.title }}</h2>
          <div class="aside">
            <span class="article-date">日期：{{ item.createDate }}</span>
            <span class="scanNumber">浏览量：{{ item.scanNumber }}</span>
            <span class="commentNumber">评论：{{ item.commentNumber }}</span>
            <span class="" :data-id="item.category.id">{{
              item.category.name
            }}</span>
          </div>
          <p class="article-description">{{ item.description }}</p>
        </div>
      </li>
    </ul>
    <div class="pager-wrap" v-if="data.total > 0">
      <Pager
        :current="page"
        :total="data.total"
        :limit="limit"
        :visibleNumber="9"
        @pageChangeHandle="handleChangePage"
      />
    </div>
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import { getBlog } from "@/api/test.js";
import fetchData from "@/mixins/fetchData.js";
export default {
  mixins: [fetchData({})],
  components: { Pager },
  data() {
    return {
      //data: fetchData()
    };
  },
  computed: {
    list() {
      return this.data.rows;
    },
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    page() {
      return +this.$route.query.page || 1;
    },
  },
  mounted() {
    
  },
  watch: {
    async $route() {
      this.isLoading = true;
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
  methods: {
    async fetchData() {
      return await getBlog({
        limit: this.limit,
        page: this.page,
      });
    },
    handleChangePage(newV) {
      const query = {
        limit: this.limit,
        page: newV,
      };
      if (this.categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "BlogCategory",
          query,
          params: {
            categoryId: this.categoryId,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/style/var.less");
.blog-list-container {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  padding-top: 0px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  #article-wrap {
    .article {
      border-bottom: 1px solid;
      display: flex;
      padding: 10px 0;
      .article-img {
        font-size: 0;
        img {
          width: 200px;
          height: 130px;
          border-radius: 10px;
        }
      }
      .content {
        padding: 10px;
        .article-title {
          line-height: 2em;
        }
        .aside {
          color: @gray;
          font-size: 14px;
          span {
            margin: 0 20px 0 0;
          }
        }
        .article-description {
          margin-top: 10px;
        }
      }
    }
  }
  .pager-wrap {
    margin: 10px 0;
  }
}
</style>
