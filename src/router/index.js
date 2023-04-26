import VueRouter from "vue-router";
import Vue from 'vue'
import routes from './router'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    },
    routes
})

export default router