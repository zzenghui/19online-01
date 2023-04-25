import index from '../view/index'
const routes = [
    {
        path: "/",
        redirect: '/index'
    },
    {
        name: "index",
        path: "/index",
        component: index,
    },
    {
        name: 'userInfo',
        path: "/userInfo",
        component: () => import('../view/userInfo/index.vue')
    }
]

export default routes