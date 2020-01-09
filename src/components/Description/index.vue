<template>
  <div class="desc">
    <div class="left">
      <h3 class="title">好吃推荐</h3>
      <div class="text">吃货必备，超值低价</div>
    </div>
    <div class="right">
      <navigator>查看全部</navigator>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.desc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    .text {
      color: #eee;
    }
  }
  .right {
    display: flex;
    align-items: center;

    color: #ff696f;
  }
}
</style>
