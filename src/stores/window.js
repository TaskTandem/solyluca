import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWindowStore = defineStore('window', () => {
  const width = ref(window.innerWidth)

  const handleSize = () => {
    width.value = window.innerWidth
  };

  return { width, handleSize }
})