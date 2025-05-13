import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import NavUI from '@/views/NavUI.vue'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.component('NavUI', NavUI)

app.mount('#app')
