<script setup>
//props
defineProps(['data'])
</script>

<template>
  <div class="card">

    <div class="img">
      <img :src="data.image">
    </div>

    <h1 class="title">{{ data.name }}</h1>

    <p v-if="data.description" class="description">{{ data.description }}</p>

    <div class="price">
      <span class="original">${{ data.price }}</span>
      <span v-if="data.promotionalPrice" class="promotional">${{ data.promotionalPrice }}</span>
    </div>

  </div>
</template>