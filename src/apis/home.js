import http from "@/utils/http";

/**
 * @description: 獲取輪播圖
 * @param {*}
 * @return {*}
 */
export function getBannerAPI() {
  return http({
    url: "/home/banner",
  });
}

/**
 * @description: 獲取新鮮好物
 * @param {*}
 * @return {*}
 */
export const getNewAPI = () => {
  return http({
    url: "/home/new",
  });
};

/**
 * @description: 獲取人氣推薦
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return http({
    url: "home/hot",
  });
};

/**
 * @description: 獲取所有商品
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return http({
    url: "/home/goods",
  });
};
