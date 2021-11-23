import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import vuePlugin from "../lib/index.js"
const app = createApp(App);



app.use(ElementPlus);
app.use(vuePlugin);
app.mount('#app');

