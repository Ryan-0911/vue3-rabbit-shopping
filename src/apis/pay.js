import request from "@/utils/request";

// 獲取訂單詳情
export const getOrderAPI = (id) => {
  return request({
    url: `/member/order/${id}`,
  });
};
