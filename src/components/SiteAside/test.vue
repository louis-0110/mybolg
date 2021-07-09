<template>
  <div class="test-container">
    <SiteAside></SiteAside>
  </div>
</template>

<script>
import SiteAside from '@/components/SiteAside';

import '@/style/global.less';

export default {
  components:{
    SiteAside
  }
}
</script>

<style scoped lang="less">
@import '~@/style/var.less';
  .test-container{
    width: 240px;
    height: 100%;
    background-color: #000;
    color:@gray;
  }

</style>