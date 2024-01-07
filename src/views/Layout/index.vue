<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";
import { useCategoryStore } from "@/stores/category";

const categoryStore = useCategoryStore();
categoryStore.getCategory();
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 二級路由出口組件 -->
  <router-view></router-view>
  <LayoutFooter />
</template>

<style></style>
