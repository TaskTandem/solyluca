<script setup>
//vue
import { ref } from 'vue';
//store
import { useWindowStore, useAdminStore } from '@/stores'
const $W = useWindowStore()
const $A = useAdminStore()

const search = ref(false)
const menu = ref(false)
const children = ref([])

const getChildren = ({name, id}) => {
  const c = categories.value.find(n => n.name === name).children
  if(c.length > 0) {
    // children.value.push( {name: 'Ver todos', id}, ...c)
    children.value.push( {name: 'Ver todos'}, ...c)
  } else {
    // goTo(id);
  }
}

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

</script>

<template>
  <div class="header">

    <fa icon="bars" @click="menu = true" />

    <div class="menu" :class="{open: menu}">
      <fa v-if="children.length === 0" @click="menu = false" icon="times" />
      <fa v-else @click="children = []" icon="arrow-left" />
      <div class="links">
        <template v-if="children.length === 0">
          <span v-for="(link, index) in categories" :key="index" @click="getChildren(link)" class="link">{{ link.name.toUpperCase() }}</span>
        </template>

        <template v-else>
          <span v-for="(link, index) in children" :key="index" class="link">{{ link.name.toUpperCase() }}</span>
        </template>
      </div>
    </div>

    <div @click="$A.carrousel = !$A.carrousel" class="logo-container">
      <div class="logo">
        <h1>SOL Y LUCA</h1>
        <span>by Pelado</span>
      </div>
    </div>

    <fa @click="search = true" icon="search" />

    <div class="search" :class="{open: search}">
      <fa icon="search" />
      <input type="text" placeholder="buscar">
      <fa @click="search = false" icon="times" />
    </div>

  </div>
</template>