<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-03-18 20:16:56
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-06-04 11:34:58
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
    getName() {
      this.$message( "恭喜你，这是一条成功消息","message",2000);
      // getApi({
      //   access_token: "smMo1kdJ3v7-qlfs1FJEhUpDp9lMjIzR",
      //   phone: 16655021802,
      // }).then((res) => {
      //   console.log("++++", res);
      // });
    },
  },
};
</script>

<style></style>
