<template>
<div class="test-container">
<Layout>
    <template #left>
      <div class="left">
        wo shi  left
      </div>
    </template>
    <template #default>
       <div class="main">
        wo shi  main
      </div>
    </template>
    <!-- <template #right>
       <div class="right">
        wo shi  right
      </div>
    </template> -->
  </Layout>
</div>
  
</template>

<script>
import Layout from '@/components/Layout';
export default {
  components:{
    Layout
  }
}
</script>

<style scoped>
  .test-container{
    width: 100%;
    height: 600px;
  }
  .left{
    width: 200px;
    height: 100%;
    background-color: salmon;
  }
  .main{
    background-color: lightskyblue;
    height: 100%;
  }
  .right{
    width: 200px;
    height: 100%;
    background-color: lightseagreen;
  }
</style>