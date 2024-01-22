import request from "@/utils/request";

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