<template>
  <div class="empty-container">
    <Icon type="empty"></Icon>
    <p>{{text}}</p>
  </div>
</template>

<script>
import Icon from '@/components/Icon';
export default {
  components:{
    Icon
  },
  props:{
    text:{
      type:String,
      default:'无数据'
    }
  }
}
</script>

<style scoped lang='less'>
@import url('~@/style/mixin.less');
@import '~@/style/var.less';

  .empty-container{
    .self-center();
    text-align: center;
    color:@gray;
  }
  
  .icon-container{
    font-size: 72px;
  }

</style>