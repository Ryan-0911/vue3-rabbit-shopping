<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <!-- 二級路由出口組件 -->
  <router-view></router-view>
  <LayoutFooter />
</template>

<style></style>
