import axios from "axios";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import { useUserStore } from "@/stores/user";
// import { useRouter } from "vue-router";
import router from "@/router";

const http = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

// axios请求拦截器
http.interceptors.request.use(
  (config) => {
    // 1. 从pinia获取token数据
    const userStore = useUserStore();
    // 2. 按照后端的要求拼接token数据
    const token = userStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (e) => Promise.reject(e)
);

// axios响应式拦截器
http.interceptors.response.use(
  (res) => res.data,
  (e) => {
    const userStore = useUserStore();
    //統一錯誤提示
    ElMessage({
      type: "warning",
      message: e.response.data.message,
    });
    // 401 token失效處理
    if (e.response.status === 401) {
      userStore.logoutUser();
      router.push("/login");
    }
    return Promise.reject(e);
  }
);

export default http;
