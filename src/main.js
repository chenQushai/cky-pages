import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import vuePlugin from "../lib/index.js"
const app = createApp(App);
app.use(vuePlugin);
app.use(ElementPlus);
app.mount('#app');
