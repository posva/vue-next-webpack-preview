import { createApp } from 'vue'
import { RouterPlugin } from '@posva/vue-router-next'
import { router } from './router'
import App from './App.vue'

const app = createApp()
app.use(RouterPlugin, router)
app.mount(App, '#app')
