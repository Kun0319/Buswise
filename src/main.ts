import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import './index.css'
import 'vue-toastification/dist/index.css'


const app = createApp(App)

// pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)


app.use(router)
app.use(i18n)

app.mount('#app')
