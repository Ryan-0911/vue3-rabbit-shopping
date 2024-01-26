import request from "@/utils/request";

/**
 * 獲取結帳資訊
 */
export const getCheckoutInfoAPI = () => {
  return request({
    url: "/member/order/pre",
  });
};
