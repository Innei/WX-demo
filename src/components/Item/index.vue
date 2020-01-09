<template>
  <div class="item">
    <div class="left">
      <div class="item-pic">
        <!-- <img src="" alt=""> -->
      </div>
    </div>
    <div class="right">
      <div class="item-name">{{ item.name }}</div>
      <div class="item-price">尝鲜价 {{ item.price }}</div>
      <div class="item-extra">
        <div class="item-desc">{{ item.desc }}</div>
        <div class="item-buy">
          <uni-icons
            type="cart-filled"
            color="var(--red)"
            size="20"
            class="cart"
          ></uni-icons>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { uniIcons } from "@dcloudio/uni-ui";
export default {
  components: {
    uniIcons
  },
  props: {
    item: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
.item {
  width: 50%;
  box-sizing: border-box;
  padding-right: 6px;
  display: flex;
  height: 75px;
  .left {
    flex: 0 0 0.5;
    border-radius: 8px;
    background-color: #eee;
    width: 75px;
    height: 75px;
  }
  .right {
    position: relative;
    .item-price {
      color: var(--red);
    }
    .item-extra {
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: space-between;

      .item-desc {
        color: #eee;
      }
    }
  }
}
.cart {
  border-radius: 50%;
  border: 1px solid var(--red);
}
</style>
