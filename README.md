## Vite 專案結構調整
![專案結構調整](https://github.com/Ryan-0911/vue3-rabbit-shopping/blob/main/vite-project-structure-adjustment.png)
## Components
1. 原則：分辨內容切換的區域，如果是整體頁面切換則為一級路由，在一級路由內切換則為二級路由，在二級路由內切換則為三級路由...
2. 整體路由設計如下：
## Router
1. 若想設定預設路由，只要將path的參數值設為""
```javascript
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      children: [
        {
          path: "", // 預設二級路由
          name: "home",
          component: Home,
        },
        {
          path: "category/:id",
          name: "category",
          component: Category,
        },
 
    {
      path: "/login",
      component: Login,
    },
  ],
});
```
2. 路由緩存問題
<img src="https://github.com/Ryan-0911/vue3-rabbit-shopping/blob/main/%E9%9F%BF%E6%87%89%E8%B7%AF%E7%94%B1%E5%8F%83%E6%95%B8%E7%9A%84%E8%AE%8A%E5%8C%96.png" height="200px" width="650px" />

[解決方法](https://juejin.cn/post/7324992318418780223)

## VueUse
1. **useScroll**：用來實現吸頂導航 (準備吸頂導航組件 -> 獲取滾動距離 -> 以滾動距離為判斷條件來控制組件顯示與否)
<img src="https://github.com/Ryan-0911/vue3-rabbit-shopping/blob/main/vueUse%E5%90%B8%E9%A0%82%E5%B0%8E%E8%A6%BD%E5%88%97.gif" height="350px" width="700px" />   

```javascript
<script setup>
  import { useScroll } from "@vueuse/core";
  const { y } = useScroll(window);
</script>

<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    ...省略
  </div>
</template>

<style scoped lang="scss">
  .app-header-sticky {
    width: 100%;
    height: 80px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    // 此處為關鍵樣式!!!
    // 狀態一：往上平移自身高度 + 完全透明
    transform: translateY(-100%);
    opacity: 0;
    // 狀態二：移除平移 + 完全不透明
    &.show {
      transition: all 0.3s linear;
      transform: none;
      opacity: 1;
    }
    ... 省略
  }
</style>
``` 
## Pinia
## 自定義指令
## 插槽
## ElmentPlus
