import home from '../pages/index/home.vue'
import index from '../view/index'
import uCenter from '@/pages/userInfo/uCenter'
const routes = [
    {
        path: "/",
        redirect: '/userInfo'
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
                component: home
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
            }
        ]
    },
    {
        name: 'userInfo',
        path: "/userInfo",
        component: () => import('../view/userInfo/index.vue'),
        redirect: "/userInfo/uCenter",
        children: [
            {
                name: "uCenter",
                path: "ucenter",
                component: uCenter
            },
            {
                name: "Collection",
                path: "Collection",
                component: () => import('../pages/userInfo/Collection.vue')
            },
            {
                name: "cart",
                path: "cart",
                component: () => import('../pages/userInfo/cart.vue')
            },
            {
                name: "order",
                path: "order",
                component: () => import('../pages/userInfo/order.vue')
            },
            {
                name: "finance",
                path: "finance",
                component: () => import('../pages/userInfo/Finance.vue')
            },
            {
                name: "integral",
                path: "integral",
                component: () => import('../pages/userInfo/integral.vue')
            },
            {
                name: "member",
                path: "member",
                component: () => import('../pages/userInfo/member.vue')
            },
            {
                name: "refund",
                path: "refund",
                component: () => import('../pages/userInfo/refund.vue')
            },
            {
                name: "message",
                path: 'message',
                component: () => import('../pages/userInfo/message.vue')
            },
            {
                name: "uInfo",
                path: 'uInfo',
                component: () => import('../pages/userInfo/uInfo.vue')
            },
            {
                name: "updateU",
                path: "updateU",
                component: () => import('../pages/userInfo/updateU.vue')
            },

        ]
    }
]

export default routes