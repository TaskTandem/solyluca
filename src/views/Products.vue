<script setup>
//components
import Card from '@/components/Card.vue'

const products = [
  {
    name: "CAMEL BOX x20",
    price: 2850,
    promotionalPrice: null,
    description: 'Los cigarrillos rubios se elaboran con mezclas de tabacos Virginia, burley y oriental. Se procesan por separado la hoja y la vena. Se salsean en caliente para aportar flexibilidad al tabaco y preservar la humedad.',
    image: 'https://depositoelmayorista.com.ar/wp-content/uploads/2024/04/www.depositoelmayorista.com-18.png',
    isAvailable: true,
  },
  {
    name: "LUCKY BOX x20",
    price: 2530,
    promotionalPrice: 2330,
    description: 'El cual está elaborado con Tabaco seco picado envuelto por una hoja delgada de papel, que cuenta en su interior con un filtro para reducir los daños a la salud.',
    image: 'https://depositoelmayorista.com.ar/wp-content/uploads/2024/04/www.depositoelmayorista.com-10.png',
    isAvailable: true,
  },
  {
    name: "MALBORO BOX x20",
    price: 2570,
    promotionalPrice: null,
    description: 'Cigarrillos elaborados con tabaco seco picado y envuelto por una hoja delgada de papel, que cuenta en su interior con un filtro para reducir los daños a la salud.',
    image: 'https://depositoelmayorista.com.ar/wp-content/uploads/2024/04/www.depositoelmayorista.com-27.png',
    isAvailable: true,
  },
  {
    name: "PHILLIP MORRIS BOX x20",
    price: 2530,
    promotionalPrice: null,
    description: 'Sumérgete en una experiencia de fumar que trasciende el tiempo. Con cada cigarrillo, descubre la autenticidad y la satisfacción que solo una marca con la experiencia de Philip Morris puede ofrecer.',
    image: 'https://depositoelmayorista.com.ar/wp-content/uploads/2024/04/www.depositoelmayorista.com-15.png',
    isAvailable: true,
  }
]
</script>

<template>
  <Card v-for="(product, index) in products" :key="index" :data="product" />
</template>