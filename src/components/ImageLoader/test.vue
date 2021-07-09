<template>
  <div class="test-container">
    <ImageLoader
      src="https://img.zcool.cn/community/01cbc259f94576a801202b0ce7653b.jpg@1280w_1l_2o_100sh.jpg"
      placeholder="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=497863066,3695772874&fm=26&gp=0.jpg"
      :duration="200"
      @load="handleLoad"
    ></ImageLoader>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";

export default {
  methods: {
    handleLoad(){
      console.log('图片组件加载完成')
    }
  },
  components: {
    ImageLoader,
  },
};
</script>

<style scoped>
.test-container {
  width: 500px;
  height: 400px;
  border: 2px solid;
  margin: 0 auto;
  overflow: hidden;
}
</style>