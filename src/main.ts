import { createApp } from 'vue'
import { createPinia } from "pinia"
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css';
//@ts-ignore
import '@fontsource/poppins';
//@ts-ignore
import '@fontsource-variable/inter';
import './global.css';
import Spanish from "element-plus/es/locale/lang/es";
import App from './App.vue'
import PluginPiniaState from "pinia-plugin-persistedstate";

const pinia = createPinia()
    .use(PluginPiniaState);
const app = createApp(App);

app.use(pinia)
    .use(ElementPlus, { locale: Spanish })
    .mount('#app')
