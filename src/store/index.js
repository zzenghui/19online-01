import Vuex from 'vuex'
import Vue from 'vue'
import home from './modules/home'
import user from './modules/user'
import cart from './modules/cart'
import goodslist from './modules/goodslist'
Vue.use(Vuex)


const modules = {
    home,
    user,
    cart,
    goodslist
}

const store = new Vuex.Store({

    modules
})

export default store