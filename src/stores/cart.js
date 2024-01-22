// 封装购物车模块

import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    // state
    const cartList = ref([]);

    // action
    // 加入購物車
    const addCart = (sku) => {
      // 看傳遞過來的商品物件中的skuId能不能在cartList中找到，找到了就是添加過
      const item = cartList.value.find((item) => sku.skuId === item.skuId);
      if (item) {
        // 添加過 -> 修改數量
        item.count += sku.count;
      } else {
        // 沒有添加過 -> 直接push
        cartList.value.push(sku);
      }
    };
    // 刪除購物車
    const delCart = (skuId) => {
      // 方式1: 利用findIndex()+splice()
      //   const idx = cartList.value.findIndex((item) => skuId === item.skuId);
      //   cartList.value.splice(idx, 1);
      //   方式2: 利用filter;
      cartList.value = cartList.value.filter((item) => item.skuId != skuId);
    };

    return {
      cartList,
      addCart,
      delCart,
    };
  },
  {
    persist: true,
  }
);
