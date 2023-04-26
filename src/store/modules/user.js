import { regApi, loginApi } from '../../api/user'

const actions = {
    async registerAct({ commit }, userInfo) {
        let res = await regApi(userInfo)
        return res
    },
    async loginAct({ commit }, userInfo) {
        let res = await loginApi(userInfo)
        return res
    }
}

const mutations = {
    GETUSERINFO(state, userInfo) {
        state.token = userInfo.token
        state.user = userInfo.user
    }
}

const state = {
    token: "",
    user: {}
}

export default {
    namespaced: true,
    actions,
    mutations,
    state
}