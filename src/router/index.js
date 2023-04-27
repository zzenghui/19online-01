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

router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('token')
    if (to.meta.isAuth) {
        //需要验证
        if (token) {
            next()
        } else {
            next('/index/login')
        }
    } else {
        next()
    }
})


router.afterEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }

})

export default router