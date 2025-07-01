import { createApp } from 'vue'
import UI from "element-plus";
import 'element-plus/dist/index.css';
//@ts-ignore
import '@fontsource/poppins';
//@ts-ignore
import '@fontsource-variable/inter';
import './global.css';
import App from './App.vue'

const app = createApp(App);
app.use(UI);
app.mount('#app')
