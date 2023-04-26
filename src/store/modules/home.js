import { getNavListApi, getBannerApi, getcategory, getcateD, getCateItem } from '../../api/home'

const actions = {
    //获取导航数据
    async getNavListAct({ commit }) {
        let res = await getNavListApi()
        if (res.status == 200) {
            commit('GET_NAV_LIST', res.data)
        }
    },
    //获取轮播数据
    async getBannerAct({ commit }) {
        let res = await getBannerApi()
        if (res.status == 200) {
            commit('GET_BANNER_LIST', res.data)
        }
    },
    //获取品牌种类
    async getcategoryAct({ commit }) {
        let res = await getcategory()
        if (res.status == 200) {
            commit('GET_CATEGORY', res.data)
        }
    },
    //获取分类详细列表
    async getcateDAct({ commit }) {
        let res = await getcateD()
        if (res.status == 200) {
            commit('GET_CATED', res.data)
        }
    },
    //获取分类详情
    async getCateItemAct({ commit }) {
        let res = await getCateItem()
        console.log(res);
        if (res.status == 200) {
            commit('GET_CATELIST', res.data)
        }
    }
}
const mutations = {
    GET_NAV_LIST(state, val) {
        state.navList = val
    },
    GET_BANNER_LIST(state, val) {
        state.bannerList = val
    },
    GET_CATEGORY(state, val) {
        state.category = val
    },
    GET_CATED(state, val) {
        state.cateDetail = val
    },
    GET_CATELIST(state, val) {
        state.cateList = val
    }
}
const state = {
    navList: [],
    bannerList: [],
    category: [],
    cateDetail: [],
    cateList: []
}
const getters = {}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}