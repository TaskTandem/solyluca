<script setup>
//vue
import { ref, onMounted, onBeforeUnmount } from 'vue'
//vue-router
import { RouterView } from 'vue-router'
//components
import Header from '@/components/Header.vue'
//stores
import { useWindowStore } from './stores/index'
const $W = useWindowStore()

onMounted(() => {
  window.addEventListener("resize", $W.handleSize);
});

onBeforeUnmount(() => {
  window.addEventListener("resize", $W.handleSize);
});
</script>

<template>
  <Header />
  <div id="content">
    <RouterView :key="$route.fullPath" />
  </div>
</template>
