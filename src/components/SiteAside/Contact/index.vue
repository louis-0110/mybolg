<template>
  <ul class="contact-container">
    <li>
      <a href="#">
        <Icon type="qq"></Icon>
        <span>574169815</span>
      </a>
      <div class="pop">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F00%2F00%2F00569e439fe7c11.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618595880&t=27981918dee7b2cb926856800f06de2f"
        />
      </div>
    </li>
     <li>
      <a href="https://github.com/MGRookie" target='_blank' rel="noopener noreferrer">
        <Icon type="github"></Icon>
        <span>MGRookie</span>
      </a>
      <div class="pop">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F00%2F00%2F00569e439fe7c11.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618595880&t=27981918dee7b2cb926856800f06de2f"
        />
      </div>
    </li>
     <li>
      <a href="mailto:574169815@qq.com" target='_blank' rel="noopener noreferrer">
        <Icon type="email"></Icon>
        <span>574169815@qq.com</span>
      </a>
      <div class="pop">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F00%2F00%2F00569e439fe7c11.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618595880&t=27981918dee7b2cb926856800f06de2f"
        />
      </div>
    </li>
     <li>
      <a href="#">
        <Icon type="wechat"></Icon>
        <span>GL74169815</span>
      </a>
      <div class="pop">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F00%2F00%2F00569e439fe7c11.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618595880&t=27981918dee7b2cb926856800f06de2f"
        />
      </div>
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

<style scoped lang='less'>
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
        transform: scaleY(1);
      }
    }
    a {
      font-size: 24px;
      cursor:pointer;
      span {
        margin-left: 8px;
        font-size: 14px;
        vertical-align: top;
      }
    }
    .pop {
      padding: 10px 15px;
      background-color: #fff;
      border-radius: 5px;
      transform: scaleY(0);
      transform-origin: bottom;
      transition: all .3s;
      position: absolute;
      bottom: @itemHeight + 5;
      left: 0;
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
        width: 150px;
        height: 150px;
      }
    }
  }
}
</style>