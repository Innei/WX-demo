<template>
  <view>
    <Nav class="nav" />
    <Swiper class="swiper" />
    <div class="wrap">
      <div class="items-wrap">
        <ItemIcon name="果蔬生鲜" />
        <ItemIcon name="果蔬生鲜" />
        <ItemIcon name="果蔬生鲜" />
        <ItemIcon name="果蔬生鲜" />
        <ItemIcon name="果蔬生鲜" />
        <ItemIcon name="果蔬生鲜" />
        <ItemIcon name="果蔬生鲜" />
        <ItemIcon name="果蔬生鲜" />
      </div>

      <Description />
      <div class="recommand-items-wrap">
        <Item :item="item" />
        <Item :item="item" />
      </div>
    </div>
  </view>
</template>

<script>
import Nav from "@/components/Navigator";
import Swiper from "@/components/Swiper";
import ItemIcon from "@/components/ItemIcon";
import Description from "@/components/Description";
import Item from "@/components/Item";
export default {
  data() {
    return {
      title: "Hello",
      item: {
        name: "代餐",
        price: "19",
        desc: "全新上架"
      }
    };
  },
  components: {
    Nav,
    Swiper,
    ItemIcon,
    Description,
    Item
  },
  onLoad() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.swiper {
  margin: 12px 0;
}
.items-wrap {
  position: relative;
  // text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.nav {
  margin-top: 8px;
}
</style>
