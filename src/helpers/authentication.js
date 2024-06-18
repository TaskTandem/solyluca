//vue-router
import { useRouter } from 'vue-router'
//store
import { useAdminStore } from '@/stores'


export const isAuthenticated = () => {
  const router = useRouter()
  const { logged } = useAdminStore()
  if(!logged) {
    router.push('/')
  }
}