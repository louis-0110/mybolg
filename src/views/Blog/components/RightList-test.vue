<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-16 16:10:17
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-16 17:01:06
 * @FilePath: /myblog/src/views/Blog/components/RightList-test.vue
-->
<template>
  <div>
    <RightList :list="list1" @clickSelect="handleSelect"></RightList>
  </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList";
export default {
  components: {
    RightList,
  },

  data() {
    return {
      list1: [
        {
          title: "a",
          isSelect: true,
          children: [
            {
              title: "a-1",
              isSelect: true,
            },
            {
              title: "a-2",
              isSelect: false,
            },
          ],
        },
        {
          title: "b",
          isSelect: false,
        },
      ],
    };
  },
  methods: {
    handleSelect(item) {
      console.log((item.item.isSelect = true));
    },
  },
};
</script>

<style lang="less" scoped></style>
