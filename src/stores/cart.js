import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useUserStore } from "@/stores/user";
import { insertCartAPI, findNewCartListAPI, delCartAPI } from "@/apis/cart";

export const useCartStore = defineStore(
  "cart",
  () => {
    // 重新獲取購物車列表
    const getNewCartList = async () => {
      const res = await findNewCartListAPI();
      console.log(res);
      cartList.value = res.result;
    };

    // state----------------------------------------------------------------------------------
    const cartList = ref([]);
    console.log(cartList);

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
    // 是否登入
    const userStore = useUserStore();
    const isLogin = computed(() => {
      return userStore.userInfo.token;
    });

    // action----------------------------------------------------------------------------------
    // 加入購物車
    const addCart = async (sku) => {
      const { skuId, count } = sku;
      if (isLogin.value) {
        await insertCartAPI({ skuId, count });
        getNewCartList();
      } else {
        // 看傳遞過來的商品物件中的skuId能不能在cartList中找到，找到了就是添加過
        const item = cartList.value.find((item) => sku.skuId === item.skuId);
        if (item) {
          // 添加過 -> 修改數量
          item.count += sku.count;
        } else {
          // 沒有添加過 -> 直接push
          cartList.value.push(sku);
        }
      }
    };
    // 刪除購物車
    const delCart = async (skuId) => {
      if (isLogin.value) {
        delCartAPI([skuId]);
        getNewCartList();
      } else {
        // 方式1: 利用findIndex()+splice()
        //   const idx = cartList.value.findIndex((item) => skuId === item.skuId);
        //   cartList.value.splice(idx, 1);
        //   方式2: 利用filter;
        cartList.value = cartList.value.filter((item) => item.skuId != skuId);
      }
    };
    // 清空購物車
    const clearCart = () => {
      cartList.value = [];
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

    return {
      cartList,
      addCart,
      delCart,
      clearCart,
      totalNum,
      totalPrice,
      singleCheck,
      isAll,
      allCheck,
      selectedNum,
      selectedPrice,
      getNewCartList,
    };
  },
  {
    persist: true,
  }
);
