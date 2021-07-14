<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-03-18 20:16:37
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-13 19:08:20
 * @FilePath: /myblog/src/views/Home/index.vue
-->
<template>
  <div class="home-container" ref="container" @wheel="handleWheel">
    <section
      class="slideshow-wrap"
      :style="{ 'margin-top': marginTop }"
      @transitionend="transitionEnd = true"
    >
      <slideshowItem
        :item="banner"
        v-for="banner in banners"
        :key="banner.id"
      />
    </section>
    <div class="indicator">
      <ul>
        <li
          :class="{
            active:i == index
            }"
          @click="switchTo(i)"
          v-for="(banner, i) in banners"
          :key="i"
        ></li>
      </ul>
    </div>
    <div class="arrow-up arrow" @click="switchTo(index-1)" v-show="index > 0">
      <icon type="arrowUp" />
    </div>
    <div
      class="arrow-down arrow"
      @click="switchTo(index+1)"
      v-show="index < banners.length - 1"
    >
      <icon type="arrowDown" />
    </div>
  </div>
</template>

<script>
import icon from "@/components/Icon";
import { getBanners } from "@/api/test.js";
import slideshowItem from "@/views/Home/slideshowItem";
export default {
  name: "Home",
  components: {
    icon,
    slideshowItem,
  },
  data() {
    return {
      banners: [],
      index: 0,
      clientHeight: 0,
      transitionEnd: true,
    };
  },
  computed: {
    marginTop() {
      console.log("margintop");
      return -this.index * this.clientHeight + "px";
    },
  },
  activated() {
    window.document.addEventListener("wheel", this.handleWheel);
  },
  deactivated() {
    console.log("deactivated");
    window.removeEventListener('resize',this.handleResize)
  },
  async created() {
    this.banners = await getBanners();
  },
  mounted() {
    console.log();
    const container = this.$refs.container;
    this.clientHeight = container.clientHeight;
    window.addEventListener('resize',this.handleResize)
  },
  methods: {
    switchTo(i) {
      console.log(i);
      this.transitionEnd = false;
      this.index = i;
    },
    handleWheel(e) {
      if (!this.transitionEnd) return;
      if (e.deltaY < -10 && this.index > 0) {
        console.log("向上翻页");
        this.switchTo(this.index - 1);
      } else if (e.deltaY > 10 && this.index < this.banners.length - 1) {
        console.log("向下翻页");
        this.switchTo(this.index + 1);
      }
    },
    handleResize(){
      this.clientHeight = this.$refs.container.clientHeight;
    }
  },
};
</script>

<style scoped lang="less">
@import "~@/style/mixin.less";
@import "~@/style/var.less";
.home-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .slideshow-wrap {
    width: 100%;
    height: 100%;
    transition: all ease-out 1s;
  }
  .arrow {
    .self-center();
    font-size: 36px;
    cursor: pointer;
    transform: translateY(0);
    color: @gray;
    &.arrow-up {
      top: 30px;
      animation: identifier 0.5s linear infinite alternate-reverse;
    }
    &.arrow-down {
      top: auto;
      bottom: 30px;
      animation: identifier1 0.5s linear infinite alternate-reverse;
    }
  }
  .indicator {
    .self-center();
    left: auto;
    right: 0;
    padding: 10px 2px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.4);
    li {
      width: 7px;
      height: 7px;
      cursor: pointer;
      border-radius: 50%;
      background: #000;
      border: 1px solid #000;
      & + li {
        margin-top: 5px;
      }
      &.active {
        background: #fff;
      }
    }
  }
}

@keyframes identifier {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}
@keyframes identifier1 {
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(10px);
  }
}
</style>
