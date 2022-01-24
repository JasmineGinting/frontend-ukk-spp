import { createApp } from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueAxios from 'vue-axios'
import login from './components/login'

const router = new VueRouter({
    routes : [
        {path : '/', component : App},
        {path : '/login', component : login}
    ],
    base: '/',
    mode: 'history',
})

const app = createApp(App)
app.use(router)
app.config.globalProperties.axios = VueAxios
app.mount('#app')
