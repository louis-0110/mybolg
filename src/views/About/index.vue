<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-03-18 20:16:56
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-13 15:56:10
 * @FilePath: /myblog/src/views/About/index.vue
-->
<template>
  <div>
    {{ name }}
    <button @click="getName">about</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "xiaoming!",
    };
  },
  methods: {
  getName() {
    
    console.log(data);
      this.$message({
        content: "恭喜你，这是一条成功消息!",
        duration: 2000,
      });
    },
  },
};
</script>

<style></style>
