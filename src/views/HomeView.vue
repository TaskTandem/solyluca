<script setup>
//vue-router
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="home-container">
    <div class="about">
      <p>Distribuidora de artículos de limpieza, tabaquería y accesorios.</p>
      <p>PROVINCIA DE BUENOS AIRES, ARGENTINA</p>
      <p>Contactanos: +54 9 223 339-5099</p>
    </div>
    <div class="section">
      <RouterView :key="$route.fullPath" />
    </div>
  </div>
</template>
