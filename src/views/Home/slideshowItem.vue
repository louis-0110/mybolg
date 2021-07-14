<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-13 15:12:25
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-14 12:00:59
 * @FilePath: /myblog/src/views/Home/slideshowItem.vue
-->
<template>
  <div class="sideshowItem-container">
    <ImageLoader
      :src="item.imgUrl"
      :placeholder="item.miniImgUrl"
      @load="showTitle"
      :duration="1000"
    />
    <div class="alt">
      <span class="title" ref="title">{{ item.title }}</span>
      <p class="description" ref="description">{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  components: {
    ImageLoader,
  },
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      titleWidth: 0,
      descriptionWidth: 0,
    };
  },
  mounted() {
    //因为span的computed上的width的值为auto，取到的是值为0，所以用getClientRects Api获取widht
    this.titleWidth = this.$refs.title.getBoundingClientRect().width;
    this.descriptionWidth = this.$refs.description.clientWidth;
  },
  methods: {
    showTitle() {
      console.log("图片➕载完成✅！");
      this.$refs.title.style.width = "0px";
      this.$refs.title.style.opacity = 1;
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = '2s';
      this.$refs.title.style.width = this.titleWidth +'px';

      this.$refs.description.style.width = "0px";
      this.$refs.description.style.opacity = 1;
      this.$refs.description.clientWidth;
      this.$refs.description.style.transition = '2s 2s';
      this.$refs.description.style.width = this.descriptionWidth +'px';

    },
  },
};
</script>

<style scoped lang="less">
@import url("~@/style/mixin.less");
.sideshowItem-container {
  position: relative;
  width: 100%;
  height: 100%;
  .alt {
    .self-center();
    transform: translate(0, -50%);
    left: 20px;
    color: #fff;
    overflow: hidden;
    text-shadow: 1px 1px 1px #000, -1px -1px 1px #000, -1px 1px 1px #000,
      1px -1px 1px #000;
    .title,
    .description {
      opacity: 0;
      white-space: nowrap;
      transition: 1s;
      overflow: hidden;
    }
    .title {
      display: inline-block;
      font-size: 36px;
      font-weight: bold;
    }
    .description {
      font-size: 28px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}</style
>>
