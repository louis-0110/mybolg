<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-03-18 20:16:56
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-10 15:31:11
 * @FilePath: /myblog/src/views/About/index.vue
-->
<template>
  <div>
    {{ name }}
    <button @click="getName">about</button>
  </div>
</template>

<script>
import getApi from "@/api/test.js";
export default {
  data() {
    return {
      name: "xiaoming!",
    };
  },
  methods: {
   async getName() {
    const data = await getApi()
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
