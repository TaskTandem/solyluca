<script setup>
//props
defineProps(['data'])
</script>

<template>
  <div class="card">

    <div class="img">
      <img :src="data.image">
      <div v-if="data.promotionalPrice">¡Promocion!</div>
    </div>

    <h1 class="title">{{ data.name }}</h1>

    <p v-if="data.description" class="description">{{ data.description }}</p>

    <div class="price">
      <span :class="{promotional: data.promotionalPrice}">${{ data.price }}</span>
      <span v-if="data.promotionalPrice">${{ data.promotionalPrice }}</span>
    </div>

  </div>
</template>