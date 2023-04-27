import { getGoodsListApi } from '../../api/goodsList'

const actions = {
    //获取商品列表
    async getGoodsListAct({ commit }) {
        let res = await getGoodsListApi()
        console.log(res);
        if (res.status == 200) {
            commit('GET_GOODS_LIST', res.data)
        }
    }
}
const mutations = {
    GET_GOODS_LIST(state, val) {
        state.goodslist = val
    }
}
const state = {
    goodslist: []
}
const getters = {}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}