<template>
  <ul class="contact-container">
    <li>
      <a href="#">
        <Icon type="qq"></Icon>
        <span>574169815</span>
      </a>
      <div class="pop">
        <img src="https://i.loli.net/2021/07/21/zjTpBRUGgXZhEOc.jpg" />
      </div>
    </li>
    <li>
      <a
        href="https://github.com/MGRookie"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon type="github"></Icon>
        <span>MGRookie</span>
      </a>
      <div class="pop">github</div>
    </li>
    <li>
      <a
        href="mailto:574169815@qq.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon type="email"></Icon>
        <span>574169815@qq.com</span>
      </a>
      <div class="pop">Email</div>
    </li>
    <li>
      <a href="#">
        <Icon type="wechat"></Icon>
        <span>GL74169815</span>
      </a>
      <div class="pop">weChat</div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
.contact-container {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  @itemHeight: 30px;
  li {
    margin: 14px 0;
    height: @itemHeight;
    line-height: 30px;
    position: relative;
    &:hover {
      .pop {
        transform: scale(1);
      }
    }
    a {
      font-size: 24px;
      cursor: pointer;
      span {
        margin-left: 8px;
        font-size: 14px;
        vertical-align: top;
      }
    }
    .pop {
      padding: 0 10px;
      background-color: #fff;
      border-radius: 5px;
      transform-origin: bottom right;
      transition: all 0.3s;
      position: absolute;
      bottom: @itemHeight + 5;
      left: 30px;
      transform: scale(0) translateX(50%);
      &::after {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        background-color: #fff;
        transform: translateX(-50%) rotateZ(45deg);
        position: absolute;
        bottom: -4px;
        left: 50%;
      }
      img {
        padding: 10px 0;
        width: 150px;
        height: 150px;
        display: block;
      }
    }
  }
}
</style>
