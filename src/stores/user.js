import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";
import { useCartStore } from "./cart.js";

export const useUserStore = defineStore(
  "user",
  () => {
    // state------------------------------------------------------------
    const userInfo = ref({});

    // action------------------------------------------------------------
    // 獲取用戶資訊
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
    };
    // 登出用戶+清空購物車
    const logoutUser = () => {
      userInfo.value = {};
      const cartStore = useCartStore();
      cartStore.clearCart();
    };

    return {
      userInfo,
      getUserInfo,
      logoutUser,
    };
  },
  {
    persist: true,
  }
);
