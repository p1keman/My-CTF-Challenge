import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from "vue-axios";
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import VueClipboard from "vue-clipboard2";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)
Vue.config.productionTip = false

// Router
import TheEditor from "@/components/TheEditor";
import TheArticlesHome from '@/components/TheArticlesHome'
import TheArticle from "@/components/TheArticle";
import Login from "@/components/Login";
import Register from "@/components/Register";

const routes = [
    {
        path: '/editor',
        component: TheEditor,
        keepAlive: true
    },
    {
        path: '/login',
        component: Login,
        keepAlive: true
    },
    {
        path: '/register',
        component: Register,
        keepAlive: true
    },
    {
        path: '/',
        redirect: '/articles',
    },
    {
        path: '/articles',
        component: TheArticlesHome,
        keepAlive: true
    },
    {
        path: '/articles/:s',
        component: TheArticle,
        keepAlive: true
    }]
const router = new VueRouter({
    // mode: 'history',
    routes: routes
})
//
new Vue({
    render: h => h(App), router
}).$mount('#app')
