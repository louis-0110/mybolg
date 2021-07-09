<template>
  <div class="test-container">
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import '@/style/global.less'
export default {
  components: {
    Menu,
  },
};
</script>

<style>
  .test-container{
    width:240px;
    height: 500px;
    background-color: #000;
    padding-top:90px;
    margin:0 auto
  }
</style>