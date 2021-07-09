<template>
  <div class="image-loader-container">
    <img class="placeholder" :src="placeholder" v-if="!everyEnd" />
    <img
      :src="src"
      @load="load"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      everyEnd: false,
      originLoaded: false,
    };
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    load() {
      this.originLoaded = true;
      setTimeout(() => {
        this.everyEnd = true;
        this.$emit("load");
      }, this.duration);
    },
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 30000,
    },
  },
};
</script>

<style scoped lang='less'>
@import url("~@/style/mixin.less");
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
}
img {
  object-fit: cover;
  .self-fill();
}
.placeholder {
  filter: blur(2vw);
}
</style>