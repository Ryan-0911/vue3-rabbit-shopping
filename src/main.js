// import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { getCategory } from "@/apis/testAPI";
// 引入初始化文件
import "@/styles/common.scss";
// 引入懶加載插件
import { lazyLoadPlugin } from "@/directives";

// 測試API
getCategory().then((res) => {
  console.log(res);
});
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(lazyLoadPlugin);

app.mount("#app");
