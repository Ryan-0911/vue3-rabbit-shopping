import http from "@/utils/http";

// 輪播圖
export function getBannerAPI() {
  return http({
    url: "/home/banner",
  });
}

/**
 * @description: 獲取新鲜好物
 * @param {*}
 * @return {*}
 */
export const getNewAPI = () => {
  return http({
    url: "/home/new",
  });
};
