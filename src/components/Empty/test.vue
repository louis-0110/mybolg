<template>
  <div class="text-container">
    <Empty></Empty>
  </div>
</template>

<script>
import Empty from '@/components/Empty';

export default {
  components:{
    Empty
  }
}
</script>

<style scoped lang='less'>
  .text-container{
    font-size: 20px;
    width: 500px;
    height: 400px;
    border:1px solid;
    position:relative;
    margin:0 auto;
  }
</style>