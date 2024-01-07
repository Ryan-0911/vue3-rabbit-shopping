<script setup>
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeProduct from "./components/HomeProduct.vue";
import HomePanel from "./components/HomePanel.vue";
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <HomePanel title="人氣商品" subtitle="買一送一"
    ><div>我是人氣商品的插槽內容</div></HomePanel
  >
  <HomePanel title="出清商品" subtitle="全面七折以下"
    ><div>我是出清商品的插槽內容</div></HomePanel
  >
</template>
