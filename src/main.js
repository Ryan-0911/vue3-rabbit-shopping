// import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { getCategory } from "@/apis/testAPI";
// 引入初始化文件
import "@/styles/common.scss";
import { useIntersectionObserver } from "@vueuse/core";

// 測試API
getCategory().then((res) => {
  console.log(res);
});
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// 定義全局自定義指令
app.directive("img-lazy", {
  mounted(element, binding) {
    // console.log(element, binding);
    useIntersectionObserver(element, ([{ isIntersecting }]) => {
      console.log(isIntersecting);
      if (isIntersecting) {
        element.src = binding.value;
      }
    });
  },
});
