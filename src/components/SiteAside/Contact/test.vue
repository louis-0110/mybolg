<template>
  <div class="test-container">
    <Contact></Contact>
  </div>
</template>

<script>
import '../../style/global.less';
import Contact from './';

export default {
  components:{
    Contact
  }
}
</script>

<style scoped lang='less'>

@import url('~@/style/var.less');


  .test-container{
    width: 200px;
    height:600px;
    border:2px solid #f40;
    background-color: #000;
    margin:0 auto;
    padding-top: 200px;
    color:@gray;
  }
</style>