<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-16 15:59:51
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-16 17:01:21
 * @FilePath: /myblog/src/views/Blog/components/RightList.vue
-->
<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ isSelect: item.isSelect }" @click="handleClick({item,$event})">{{ item.title }}</span>
      <MyblogRightlist :list="item.children" @clickSelect="handleClick"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MyblogRightlist",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods:{
    handleClick(item){
      this.$emit('clickSelect', item);
    }
  }
};
</script>

<style lang="less" scoped>
.right-list-container {
  margin: 0;
  padding: 0;
  margin-left: 1em;
  list-style-type: none;
  li{
    cursor:pointer;
    span{
      &.isSelect{
        color: #FF7F50;
        font-weight: bolder;
      }  
    }
  }
}
</style>
