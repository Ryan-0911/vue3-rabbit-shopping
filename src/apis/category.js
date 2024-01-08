import request from "@/utils/http";

/**
 * @description: 獲取分類資料
 * @param {*} id 分類id
 * @return {*}
 */
export const getTopCategoryAPI = (id) => {
  return request({
    url: "/category",
    params: {
      id,
    },
  });
};
