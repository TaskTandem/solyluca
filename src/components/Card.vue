<script setup>
//swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const modules = [Pagination];
//props
defineProps(['data'])
</script>

<template>
  <div class="card">

    <div v-if="data.images.length > 1" class="carrousel">
      <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :pagination="true"
        :loop="true"
        :modules="modules"
      >
        <swiper-slide v-for="(img, index) in data.images" :key="index" class="img">
          <img :src="img">
        </swiper-slide>
      </swiper>
      <div v-if="data.promotionalPrice">¡Promocion!</div>
    </div>
    <div v-else class="img">
      <img :src="data.images[0]">
      <div v-if="data.promotionalPrice">¡Promocion!</div>
    </div>

    <h1 class="title">{{ data.name }}</h1>

    <div v-if="data.description" class="description">
      <p v-for="(desc, index) in data.description" :key="index">{{ desc }}</p>
    </div>

    <div class="price">
      <span :class="{promotional: data.promotionalPrice}">${{ data.price }}</span>
      <span v-if="data.promotionalPrice">${{ data.promotionalPrice }}</span>
    </div>

  </div>
</template>