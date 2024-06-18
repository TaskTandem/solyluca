<script setup>
//vue
import { onMounted, onBeforeUnmount } from 'vue'
//vue-router
import { RouterView } from 'vue-router'
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
  <body>
    <div id="content">
      <RouterView :key="$route.fullPath" />
    </div>
  </body>
</template>
