import ElementPlus from "element-plus";
import 'element-plus/dist/index.css';
import { createPinia } from "pinia";
import { createApp } from 'vue';
//@ts-ignore
import '@fontsource/poppins';
//@ts-ignore
import '@fontsource-variable/inter';
import Spanish from "element-plus/es/locale/lang/es";
import PluginPiniaState from "pinia-plugin-persistedstate";
import App from './App.vue';
import './global.css';

const pinia = createPinia().use(PluginPiniaState);
const app = createApp(App);

app.use(pinia)
    .use(ElementPlus, { locale: Spanish })
    .mount('#app')
