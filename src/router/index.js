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
import Checkout from "@/views/Checkout/index.vue";
import Pay from "@/views/Pay/index.vue";
import PayBack from "@/views/PayBack/index.vue";
import Member from "@/views/Member/index.vue";
import UserInfo from "@/views/Member/components/UserInfo.vue";
import UserOrder from "@/views/Member/components/UserOrder.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      children: [
        {
          path: "", // 默認二級路由
          name: "home",
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
          name: "detail",
          component: Detail,
        },
        {
          path: "cartlist",
          name: "cartlist",
          component: CartList,
        },
        {
          path: "checkout",
          name: "checkout",
          component: Checkout,
        },
        {
          path: "pay",
          name: "pay",
          component: Pay,
        },
        {
          path: "paycallback",
          name: "paycallback",
          component: PayBack,
        },
        {
          path: "member",
          name: "member",
          component: Member,
          children: [
            {
              path: "",
              name: "user",
              component: UserInfo,
            },
            {
              path: "order",
              name: "order",
              component: UserOrder,
            },
          ],
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
