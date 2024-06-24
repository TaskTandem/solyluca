import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBackgroundStore = defineStore('background', () => {
  const modal = ref(false)

  return { modal }
})