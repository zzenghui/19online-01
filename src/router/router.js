import home from '../pages/index/home.vue'
import index from '../view/index'
import uCenter from '@/pages/userInfo/uCenter'
const routes = [
    {
        path: "/",
        redirect: '/index',
    },
    {
        name: "index",
        path: "/index",
        component: index,
        redirect: "/index/home",

        children: [
            {
                name: "home",
                path: "home",
                component: home,
                meta: { title: "一九在线官网-白酒，洋酒，葡萄酒网购商城" },
            },
            {
                name: "login",
                path: "login",
                component: () => import('../pages/index/login.vue')
            },
            {
                name: "register",
                path: "register",
                component: () => import('../pages/index/register.vue')
            },
            {
                name: "goods",
                path: "goods",
                component: () => import('../pages/index/goods.vue'),
                props(route) {
                    return {
                        goods: route.query
                    }
                }
            },
            {
                name: "goodslist",
                path: "goodslist",
                component: () => import('../pages/index/goodsList.vue')
            }
        ]
    },
    {
        name: 'userInfo',
        path: "/userInfo",
        component: () => import('../view/userInfo/index.vue'),
        redirect: "/userInfo/uCenter",
        meta: { isAuth: true },
        children: [
            {
                name: "uCenter",
                path: "ucenter",
                component: uCenter,
                meta: { isAuth: true, title: "会员中心" },
            },
            {
                name: "Collection",
                path: "Collection",
                component: () => import('../pages/userInfo/Collection.vue'),
                meta: { isAuth: true },
            },
            {
                name: "cart",
                path: "cart",
                component: () => import('../pages/userInfo/cart.vue'),
                meta: { isAuth: true },
            },
            {
                name: "order",
                path: "order",
                component: () => import('../pages/userInfo/order.vue'),
                meta: { isAuth: true },
            },
            {
                name: "finance",
                path: "finance",
                component: () => import('../pages/userInfo/Finance.vue'),
                meta: { isAuth: true },
            },
            {
                name: "integral",
                path: "integral",
                component: () => import('../pages/userInfo/integral.vue'),
                meta: { isAuth: true },
            },
            {
                name: "member",
                path: "member",
                component: () => import('../pages/userInfo/member.vue'),
                meta: { isAuth: true },
            },
            {
                name: "refund",
                path: "refund",
                component: () => import('../pages/userInfo/refund.vue'),
                meta: { isAuth: true },
            },
            {
                name: "message",
                path: 'message',
                component: () => import('../pages/userInfo/message.vue'),
                meta: { isAuth: true },
            },
            {
                name: "uInfo",
                path: 'uInfo',
                component: () => import('../pages/userInfo/uInfo.vue'),
                meta: { isAuth: true },
            },
            {
                name: "updateU",
                path: "updateU",
                component: () => import('../pages/userInfo/updateU.vue'),
                meta: { isAuth: true },
            },

        ]
    }
]

export default routes