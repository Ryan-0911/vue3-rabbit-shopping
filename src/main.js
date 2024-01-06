// import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { getCategory } from "@/apis/testAPI";
// 引入初始化文件
import "@/styles/common.scss";

// 測試API
getCategory().then((res) => {
  console.log(res);
});
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
