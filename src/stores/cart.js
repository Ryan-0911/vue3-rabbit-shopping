// 封装购物车模块

import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    // state----------------------------------------------------------------------------------
    const cartList = ref([]);

    // action----------------------------------------------------------------------------------
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
    // 單選
    const singleCheck = (id, selected) => {
      const item = cartList.value.find((item) => item.id == id);
      item.selected = selected;
    };
    // 全選
    const allCheck = (selected) => {
      cartList.value.forEach((item) => {
        item.selected = selected;
      });
    };

    // computed attr----------------------------------------------------------------------------------
    // 總數
    const totalNum = computed(() => {
      return cartList.value.reduce((a, c) => a + c.count, 0);
    });
    // 總價
    const totalPrice = computed(() => {
      return cartList.value.reduce((a, c) => a + c.count * c.price, 0);
    });
    //是否全選
    const isAll = computed(() => {
      return cartList.value.every((item) => item.selected);
    });
    // 已選擇商品總數
    const selectedNum = computed(() => {
      return cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count, 0);
    });
    // 已選擇商品總價
    const selectedPrice = computed(() => {
      return cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count * c.price, 0);
    });

    return {
      cartList,
      addCart,
      delCart,
      totalNum,
      totalPrice,
      singleCheck,
      isAll,
      allCheck,
      selectedNum,
      selectedPrice,
    };
  },
  {
    persist: true,
  }
);
