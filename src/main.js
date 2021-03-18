import Vue from "vue";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // lang i18n

import "@/styles/index.scss"; // global css

import App from "./App";
import store from "./store";
import api from './api/user'
import router from "./router";

import "@/icons"; // icon
import "@/permission"; // permission control
// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.prototype.$api = api
Vue.config.productionTip = false;

if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale });
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  axios,
  render: h => h(App)
});
