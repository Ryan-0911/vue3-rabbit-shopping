import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";
import { useCartStore } from "./cart.js";
import { mergeCartAPI } from "@/apis/cart";

export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();

    // state------------------------------------------------------------
    const userInfo = ref({});

    // action------------------------------------------------------------
    // 獲取用戶資訊+合併購物車
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          };
        })
      );
      cartStore.getNewCartList();
    };
    // 登出用戶+清空購物車
    const logoutUser = () => {
      userInfo.value = {};
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
