import request from "@/utils/request";

// 獲取結帳資訊
export const getCheckoutInfoAPI = () => {
  return request({
    url: "/member/order/pre",
  });
};

// 創建訂單
export const createOrderAPI = (data) => {
  return request({
    url: "/member/order",
    method: "POST",
    data,
  });
};
