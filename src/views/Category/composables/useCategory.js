// 封装分类数据业务相关代码
import { onMounted, ref } from "vue";
import { getTopCategoryAPI } from "@/apis/category";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
  // 获取分类数据
  const categoryData = ref({});
  const route = useRoute();
  const getCategory = async (id = route.params.id) => {
    const res = await getTopCategoryAPI(id);
    categoryData.value = res.result;
  };
  onMounted(() => getCategory());

  // 監聽路由變化，當變化時更新分類資料
  onBeforeRouteUpdate((to) => {
    // 存在问题：使用最新的路由参数请求最新的分类数据
    getCategory(to.params.id);
  });
  return {
    categoryData,
  };
}
