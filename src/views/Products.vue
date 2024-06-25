<script setup>
//components
import Card from '@/components/Card.vue'

const products = [
  {
    name: "MALBORO BOX x20",
    price: 2570,
    promotionalPrice: 2330,
    description: null,
    image: 'https://depositoelmayorista.com.ar/wp-content/uploads/2024/04/www.depositoelmayorista.com-27.png',
    isAvailable: true,
  },
  {
    name: "PHILLIP MORRIS BOX x20",
    price: 2530,
    promotionalPrice: null,
    description: null,
    image: 'https://depositoelmayorista.com.ar/wp-content/uploads/2024/04/www.depositoelmayorista.com-15.png',
    isAvailable: true,
  },
  {
    name: "CAMEL BOX x20",
    price: 2850,
    promotionalPrice: null,
    description: null,
    image: 'https://depositoelmayorista.com.ar/wp-content/uploads/2024/04/www.depositoelmayorista.com-18.png',
    isAvailable: true,
  },
  {
    name: "LUCKY BOX x20",
    price: 2530,
    promotionalPrice: null,
    description: null,
    image: 'https://depositoelmayorista.com.ar/wp-content/uploads/2024/04/www.depositoelmayorista.com-10.png',
    isAvailable: true,
  }
]
</script>

<template>
  <Card v-for="(product, index) in products" :key="index" :data="product" />
</template>