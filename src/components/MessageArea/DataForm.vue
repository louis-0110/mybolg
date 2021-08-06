<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-26 16:16:33
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-27 10:52:45
 * @FilePath: /myblog/src/components/MessageArea/DataForm.vue
-->
<template>
  <form class="data-form-container" @submit.prevent="postComment">
    <div class="form-item">
      <div class="nick-name">
        <input
          type="text"
          name="nickname"
          maxlength="10"
          placeholder="请输入昵称"
          v-model="nickname"
        />
        <div class="tips">{{ nickname.length }}/10</div>
      </div>
      <div class="err">{{ err.nick }}</div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <textarea
          name="commentContent"
          maxlength="300"
          placeholder="请输入内容"
          v-model="commentContent"
        />
        <div class="tips">{{ commentContent.length }}/300</div>
      </div>
      <div class="err">{{ err.comment }}</div>
    </div>

    <button :disabled="isSubmiting">
      {{ isSubmiting ? "提交中..." : "提交" }}
    </button>
  </form>
</template>

<script>
import { postComment } from "@/api/test.js";
export default {
  data() {
    return {
      err: {
        nick: "",
        comment: "",
      },
      nickname: "",
      commentContent: "",
      isSubmiting: false,
    };
  },
  computed: {},
  methods: {
    postComment() {
      if (this.nickname === "") {
        this.err.nick = "请输入";
      } else if (this.commentContent === "") {
        this.err.comment = "请输入";
      } else {
        postComment({
          nickname: this.nickname,
          commentContent: this.commentContent,
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
@import url("~@/style/var.less");
form {
  color: #aaa;
}
.err {
  height: 1.2em;
  font-size: 18px;
  color: @danger;
  text-indent: 1em;
  font-weight: bolder;
}
.nick-name,
.text-area {
  max-width: 800px;
  width: 90%;
  margin: 15px 15px 0;
  position: relative;
  border: 1px dashed @gray;
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;
  input {
    width: 80%;
    height: 100%;
    padding: 10px;
    font-size: 20px;
  }
  textarea {
    height: 200px;
    padding: 10px;
    font-size: 20px;
    width: 100%;
    box-sizing: border-box;
  }
  .tips {
    position: absolute;
    bottom: 0;
    right: 10px;
  }
}
button {
  background: @primary;
  padding: 10px 20px;
  border: none;
  font-weight: bolder;
  color: #fff;
  border-radius: 6px;
  margin-top: 10px;
  &:disabled {
    background: lighten(@primary, 20%);
    cursor: no-drop;
  }
  &:hover {
    background: darken(@primary, 20%);
    cursor: pointer;
  }
}
</style>
