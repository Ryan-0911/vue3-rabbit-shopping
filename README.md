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
2. 路由緩存問題 ([參考來源](https://juejin.cn/post/7324992318418780223))
<img src="https://github.com/Ryan-0911/vue3-rabbit-shopping/blob/main/%E9%9F%BF%E6%87%89%E8%B7%AF%E7%94%B1%E5%8F%83%E6%95%B8%E7%9A%84%E8%AE%8A%E5%8C%96.png" height="200px" width="650px" />
  
  * 解決方式一：使用鉤子函数 onBeforeRouteUpdate
    ```javascript
    onBeforeRouteUpdate((to) => {
      getcategoryData(to.params.id)//這裡的參數按照具體情況填寫
    })
    ```
    * onBeforeRouteUpdate 鉤子: 這是 Vue 3 中的一個路由守衛，用於在當前路由更新時執行一些邏輯。它接受一個函數作為參數，這個函數會在路由發生變化時被調用。 
    * (to) => { getcategoryData(to.params.id) } : 這是傳遞給 onBeforeRouteUpdate 的回呼函數。這個回呼函數接收一個參數 to，代表即將跳轉的路由對象。通過 to.params.id，它獲取了變化後的路由參數 id。 
    * getcategoryData(to.params.id) : getcategoryData 是一個用於獲取和處理資料的函數，它的參數是從路由中獲取的 id 參數。這個函數會在路由變化時被觸發，執行相應的資料請求邏輯。
    
  * 解決方式二：破壞組件覆用
    ```javascript
    <RouterView :key="$route.fullPath" />
    ```
    * Vue Router: 這段代碼涉及到Vue.js的路由系統，使用了<RouterView />組件。<RouterView /> 是 Vue Router 提供的用於渲染匹配到的路由組件的地方。 
    * :key="$route.fullPath" : 這裡使用了Vue.js中的屬性綁定，使用 :key 來綁定一個值，該值是 $route.fullPath。$route 是 Vue Router 提供的一個表示當前路由狀態的物件，fullPath 是其中的一個屬性，表示當前完整的路由路徑。 
    * 作用: 設置了 :key="$route.fullPath" 的作用是，每當路由發生變化時，$route.fullPath 的值也會變化，由於這個值被用作組件的 key，因此會導致組件被強制重新渲染。這樣做的目的是為了確保在路由變化時，不覆用之前的組件實例，而是創建       一個新的組件實例，以確保元件能夠重新載入和初始化。


  * 解決方式三：使用 Watch 監聽路由組件變化
    ```javascript
    watch(
      () => route.params.id,//這裡的參數按照具體情況填寫
      () => {
          getcategoryData(route.params.id)
      }
    );
    ```
    * watch 函數: watch 是 Vue.js 提供的用於監聽資料變化的函數。它接受兩個參數，第一個參數是一個函數，返回需要被監聽的資料，第二個參數是回呼函數，當被監聽的資料發生變化時執行。 
    * () => route.params.id: 這是第一個參數，它使用箭頭函數返回 route.params.id。在 Vue Router 中，route 物件表示當前路由狀態，params 是其中的一個屬性，表示路由的參數。這段代碼監聽了 id 參數的變化。 
    * () => { getcategoryData() } : 這是第二個參數，是一個回呼函數。當 route.params.id 發生變化時，就會執行這個回呼函數，這個函數裡通常會包含對資料的請求或處理邏輯。在這裡，它調用了 getcategoryData() 函數。

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
2. **useIntersectionObserver**：
3. **useMouseInElement**：

## Pinia
## 自定義指令
## 插槽
## ElmentPlus
