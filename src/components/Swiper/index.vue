<template>
  <div class="swiper">
    <swiper
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <swiper-item class="item">
        <view class="swiper-item uni-bg-red">A</view>
      </swiper-item>
      <swiper-item class="item">
        <view class="swiper-item uni-bg-green">B</view>
      </swiper-item>
      <swiper-item class="item">
        <view class="swiper-item uni-bg-blue">C</view>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500
    };
  }
};
</script>

<style scoped>
.item {
  background: #ff696f;
}
</style>
