import request from "@/utils/request";

// 加入購物車
export const insertCartAPI = ({ skuId, count }) => {
  return request({
    url: "/member/cart",
    method: "POST",
    data: {
      skuId,
      count,
    },
  });
};

// 獲取最新的購物車
export const findNewCartListAPI = () => {
  return request({
    url: "/member/cart",
  });
};

// 刪除購物車
export const delCartAPI = (ids) => {
  return request({
    url: "/member/cart",
    method: "DELETE",
    data: {
      ids,
    },
  });
};

// 本地購物車合併至伺服器
export const mergeCartAPI = (cart) => {
  return request({
    url: "/member/cart/merge",
    method: "POST",
    data: cart,
  });
};
