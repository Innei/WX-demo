<template>
  <header>
    <nav>
      <div class="left">
        <uni-icons type="location-filled" size="20"></uni-icons>
        <div class="loaction">
          {{ location }}
        </div>
        <div class="distance">
          {{ "距您" + distance }}
          <uni-icons type="forward" size="16"></uni-icons>
        </div>
      </div>
      <div class="right">
        <uni-icons type="list" size="20"></uni-icons>
        <uni-icons type="search" size="20"></uni-icons>
      </div>
    </nav>
  </header>
</template>
<script>
import { uniIcons } from "@dcloudio/uni-ui";
export default {
  components: {
    uniIcons
  },
  data() {
    return {
      location: "南山区",
      distance: "5km"
    };
  },
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
</script>
<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  .left,
  .right {
    display: flex;
    align-items: center;
  }
  .left .distance {
    margin-left: 0.5rem;
    font-size: 0.8rem;
    align-items: flex-end;
  }
  view {
    margin-right: 0.5rem;
  }
}
</style>
