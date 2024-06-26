import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { fetchWrapper } from '../helpers/fetchWrapper'

export const useAdminStore = defineStore('admin', () => {
  const carrousel = ref(false)
  const logged = computed(() => {
    return !!sessionStorage.getItem("token")
  })

  const login = async (data) => {
    try {
      const res = await fetchWrapper.post('auth/login', data)
      sessionStorage.setItem("token", res.token)
      return true
    } catch (e) {
      console.log('Error en login', e);
      return false
    }
  }

  return { logged, login, carrousel }
  }
)