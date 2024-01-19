import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { firebaseApp } from './services/firebase'
import { VueFire, VueFireAuth } from 'vuefire'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.directive('auto-focus', {
  mounted: (el) => el.focus()
})

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
})

app.use(router)
app.use(pinia)

app.mount('#app')
