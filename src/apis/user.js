import request from "@/utils/request";

// 登入
export function loginAPI({ account, password }) {
  return request({
    url: "/login",
    method: "POST",
    data: {
      account,
      password,
    },
  });
}

// 猜你喜歡
export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url: "/goods/relevant",
    params: {
      limit,
    },
  });
};
