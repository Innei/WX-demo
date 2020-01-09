import Vue from "vue";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import "app.css";
Vue.config.productionTip = false;
//import uniBadge from '@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue' //也可使用此方式引入组件
// Vue.component(uniIcons,);
App.mpType = "app";

const app = new Vue({
  ...App
});
app.$mount("#app");
