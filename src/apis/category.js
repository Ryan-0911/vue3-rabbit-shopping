import request from "@/utils/request";

/**
 * @description: 獲取一級分類資料
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

export function getBannerAPI(params = {}) {
  // 默认为1 商品为2
  const { distributionSite = "1" } = params;
  return request({
    url: "/home/banner",
    params: {
      distributionSite,
    },
  });
}

/**
 * @description:  獲取二級分類資料
 * @param {*} id 分类id
 * @return {*}
 */
export const getCategoryFilterAPI = (id) => {
  return request({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
};

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return request({
    url: "/category/goods/temporary",
    method: "POST",
    data,
  });
};
