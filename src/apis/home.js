import request from "@/utils/request";

/**
 * @description: 獲取輪播圖
 * @param {*}
 * @return {*}
 */
export function getBannerAPI() {
  return request({
    url: "/home/banner",
  });
}

/**
 * @description: 獲取新鮮好物
 * @param {*}
 * @return {*}
 */
export const getNewAPI = () => {
  return request({
    url: "/home/new",
  });
};

/**
 * @description: 獲取人氣推薦
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return request({
    url: "home/hot",
  });
};

/**
 * @description: 獲取所有商品
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return request({
    url: "/home/goods",
  });
};
