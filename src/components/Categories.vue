<script setup>
//swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
const modules = [FreeMode];
//props
defineProps(['data'])
</script>

<template>
  <swiper
    :slidesPerView="'auto'"
    :spaceBetween="20"
    :freeMode="true"
    :modules="modules"
    class="categories"
  >
    <swiper-slide>TODOS</swiper-slide>
    <swiper-slide v-for="(category, index) in data" :key="index">
      {{ (index + 1) + '. ' + category.name.toUpperCase() }}
    </swiper-slide>
  </swiper>
</template>