<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-13 15:12:25
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-16 17:51:13
 * @FilePath: /myblog/src/views/Home/slideshowItem.vue
-->
<template>
  <div
    class="sideshowItem-container"
    ref="container"
    @mousemove="getMousePosition"
  >
    <ImageLoader
      ref="image"
      :src="item.imgUrl"
      :placeholder="item.miniImgUrl"
      @load="showTitle"
      :duration="1000"
      :style="offsetPosition"
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
  name: "slideshowItem",
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
      imageSize: null,
      containerSize: null,
      mouseX: 0,
      mouseY: 0,
    };
  },
  computed: {
    offsetPosition() {
      if (!this.imageSize || !this.containerSize) return {};
      const offsetWidth = this.imageSize.width - this.containerSize.width;
      const offsetHeight = this.imageSize.height - this.containerSize.height;
      const offsetLeft =
        (-offsetWidth * this.mouseX) / this.containerSize.width;
      const offsetTop =
        (-offsetHeight * this.mouseY) / this.containerSize.height;

      return {
        transform:`translate(${offsetLeft}px,${offsetTop}px)`
      };
    },
    center(){
      return{
        x: this.containerSize.width/2,
        y: this.containerSize.height/2
      }
    }
  },
  //生命周期函数
  mounted() {
    //因为span的computed上的width的值为auto，取到的是值为0，所以用getClientRects Api获取widht
    this.titleWidth = this.$refs.title.getBoundingClientRect().width;
    this.descriptionWidth = this.$refs.description.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  activated() {
    window.addEventListener("resize", this.setSize);
  },
  deactivated() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    showTitle() {
      this.$refs.title.style.width = "0px";
      this.$refs.title.style.opacity = 1;
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "2s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.description.style.width = "0px";
      this.$refs.description.style.opacity = 1;
      this.$refs.description.clientWidth;
      this.$refs.description.style.transition = "2s 2s";
      this.$refs.description.style.width = this.descriptionWidth + "px";
    },
    /**
     * @description: 获取image 和 容器 宽高
     * @author: gaoluo
     * @param {*}
     * @return {*}
     */
    setSize() {
      this.imageSize = {
        width: this.$refs.image.$el.clientWidth,
        height: this.$refs.image.$el.clientHeight,
      };
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
    },
    /**
     * @description: 获取鼠标位置
     * @author: gaoluo
     * @param {*} e
     * @return {*}
     */

    getMousePosition(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX =  e.clientX - rect.left;
      this.mouseY =  e.clientY - rect.top;
    },
  },
};
</script>

<style scoped lang="less">
@import url("~@/style/mixin.less");
.sideshowItem-container {
  position: relative;
  user-select: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
      font-size: 2em;
      font-weight: bold;
    }
    .description {
      font-size: 1.8em;
    }
  }
}

.image-loader-container {
  width: 110%;
  height: 110%;
  transition:transform 300ms linear;
}
</style>
