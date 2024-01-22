// createRouter: 創建 router 實例
// createWebHistory: 創建 history 模式的路由
import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";
import SubCategory from "@/views/SubCategory/index.vue";
import Detail from "@/views/Detail/index.vue";
import CartList from "@/views/CartList/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "", // 默認二級路由
          component: Home,
        },
        {
          path: "category/:id",
          name: "category",
          component: Category,
        },
        {
          path: "category/sub/:id",
          name: "subCategory",
          component: SubCategory,
        },
        {
          path: "detail/:id",
          component: Detail,
        },
        {
          path: "cartlist",
          component: CartList,
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
  //路由滾動行為
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
