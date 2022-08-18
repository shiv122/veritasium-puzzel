import { createApp } from 'vue'
import App from './App.vue'
import "vue-toastification/dist/index.css";
import Toast, { POSITION } from "vue-toastification";
import './assets/main.css'

let app = createApp(App)
const options = {
    position: POSITION.BOTTOM_RIGHT,
};
app.use(Toast, options);
app.mount("#app")
