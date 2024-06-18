//app
import { createApp } from 'vue'
import App from './App.vue'
//styles
import './styles/CSS/main-min.css'
//router
import router from './router'
//pinia
import { createPinia } from 'pinia'
import piniaPersistedState from 'pinia-plugin-persistedstate'
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faBars, faTimes, faSignIn, faPlus, faArrowLeft, faPencil, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'
const icons = { faSearch, faBars, faTimes, faSignIn, faPlus, faArrowLeft, faPencil, faCheckCircle, faTimesCircle, faInstagram, faWhatsapp, faFacebook }
{/* <fa icon="bars" />
<fa :icon="['fab', 'instagram']" /> */}

const app = createApp(App)
const pinia = createPinia()
library.add(icons)
app.use(router)
app.use(pinia)
pinia.use(piniaPersistedState)
app.component('fa', FontAwesomeIcon)
app.mount('#app')
