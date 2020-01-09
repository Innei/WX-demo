<template>
  <div class="item-icon">
    <div class="icon"></div>
    <div class="name">{{ name }}</div>
  </div>
</template>
<script>
export default {
  props: {
    icon: String,
    name: String
  }
};
</script>
<style lang="scss" scoped>
.item-icon {
  padding: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 80px;
  width: 50px;
  display: inline-block;
  .icon {
    height: 50px;
    width: 50px;
    background-color: #eee;
    border-radius: 50%;
  }
  .name {
    text-align: center;
    margin-top: 8px;
    font-size: 0.6rem;
  }
}
</style>
