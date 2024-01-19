import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.directive('auto-focus', {
  mounted: (el) => el.focus()
})

app.use(pinia)

app.mount('#app')
