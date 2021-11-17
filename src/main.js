import { createApp } from 'vue'
import App from './App.vue'
import vuePugin from "../lib/index.js"
const app = createApp(App)
app.use(vuePugin)
app.mount('#app')
