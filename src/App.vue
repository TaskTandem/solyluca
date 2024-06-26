<script setup>
//vue
import { ref, onMounted, onBeforeUnmount } from 'vue'
//vue-router
import { RouterView } from 'vue-router'
//components
import Header from '@/components/Header.vue'
import Categories from './components/Categories.vue'
//stores
import { useWindowStore, useAdminStore } from './stores/index'
const $W = useWindowStore()
const $A = useAdminStore()

const categories = ref([
  {
    name: 'OFERTAS',
    children: []
  },
  {
    name: 'ACCESORIOS FUMADORES',
    children: [
      { name: 'FILTROS' },
      { name: 'PAPELILLOS Y CELULOSAS' },
      { name: 'PICADORES' },
      { name: 'PIPAS/BANDEJAS/MAQUINAS' },
      { name: 'VARIOS' },
    ]
  },
  {
    name: 'ARTICULOS DE HOGAR',
    children: [
      { name: 'ACCESORIOS PARA AUTOS' },
      { name: 'CHISPEROS' },
      { name: 'COLADORES' },
      { name: 'COSAS DE COCINA' },
      { name: 'CUBIERTOS' },
      { name: 'MATES/BOMBILLAS/TERMOS' },
      { name: 'SACACORCHOS Y ABRELATAS' },
      { name: 'VELAS' },
      { name: 'VARIOS' }
    ]
  },
  {
    name: 'BOLSAS',
    children: []
  },
  {
    name: 'CARGADORES Y CABLES',
    children: []
  },
  {
    name: 'CIGARRILLOS Y TABACOS',
    children: [
    { name: 'camel' },
    { name: 'Chesterfield' },
    { name: 'Lucky' },
    { name: 'Marlboro' },
    { name: 'Phillip Morris' }
    ]
  },
  {
    name: 'COTILLON',
    children: []
  },
  {
    name: 'ENCENDEDORES',
    children: []
  },
  {
    name: 'FERRETERIA',
    children: [
      { name: 'ADAPTADORES Y FICHAS' },
      { name: 'CINTAS' },
      { name: 'LINTERNAS' },
      { name: 'LUCES' },
      { name: 'VARIOS' }
    ]
  },
  {
    name: 'FILOS',
    children: []
  },
  {
    name: 'INSECTICIDAS Y AEROSOLES',
    children: []
  },
  {
    name: 'JUGUETERIA',
    children: []
  },
  {
    name: 'LIBRERIA',
    children: [
      { name: 'BOLIGRAFOS/LAPICES/FIBRAS' },
      { name: 'JUEGOS' },
      { name: 'NAIPES' },
      { name: 'VARIOS' },
    ]
  },
  {
    name: 'LIMPIEZA',
    children: [
      { name: 'DETERGENTES' },
      { name: 'ESCOBILLONES' },
      { name: 'ESPONJAS' },
      { name: 'GUANTES DE GOMA' },
      { name: 'JABONES PAN/LIQUIDO/POLVO' },
      { name: 'LAVANDINAS' },
      { name: 'PAPEL DE COCINA' },
      { name: 'PAPEL HIGIENICOS' },
      { name: 'TRAPOS DE PISO' },
      { name: 'VARIOS' },
    ]
  },
  {
    name: 'PEGAMENTOS',
    children: []
  },
  {
    name: 'PERFUMERIA',
    children: [
      { name: 'AEROSOLES/PERFUMINAS' },
      { name: 'ALCOHOLES Y AGUAS OXI' },
      { name: 'BARBIJOS' },
      { name: 'BROCHES/PINZAS/ALICATES' },
      { name: 'CEPILLOS Y PASTAS' },
      { name: 'CLIPS/COLITAS/ESMALTES' },
      { name: 'CREMAS Y ESPUMAS' },
      { name: 'DESODORANTES' },
      { name: 'GUANTES' },
      { name: 'JABONES' },
      { name: 'PAÑALES' },
      { name: 'PAÑUELOS' },
      { name: 'PEINES Y CEPILLOS' },
      { name: 'PRESERVATIVOS' },
      { name: 'SHAMPOO Y ACONDICIONADOR' },
      { name: 'TALCOS' },
      { name: 'TAMPONES' },
      { name: 'TINTURAS' },
      { name: 'TOALLITAS Y PROTECTORES' },
      { name: 'VARIOS' },
    ]
  },
  {
    name: 'PILAS',
    children: []
  },
  {
    name: 'SAHUMERIOS',
    children: []
  },
  {
    name: 'TABACOS',
    children: []
  },
  {
    name: 'ZAPATERIA',
    children: []
  }
])

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
  <Categories v-if="$A.carrousel" :data="categories" />
</template>
