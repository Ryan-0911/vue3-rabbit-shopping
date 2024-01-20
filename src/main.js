// import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// 引入初始化文件
import "@/styles/common.scss";
// 引入懶加載插件
import { lazyLoadPlugin } from "@/directives";
import { componentPlugin } from "@/components";
// 引入pinia持久狀態插件
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// 創建pinia並使用持久狀態插件
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(lazyLoadPlugin);
app.use(componentPlugin);

app.mount("#app");
