import request from "@/utils/request";

/*
params: {
    orderState:0,
  page:1,
  pageSize:2
}
*/
export const getUserOrderAPI = (params) => {
  return request({
    url: "/member/order",
    method: "GET",
    params,
  });
};
