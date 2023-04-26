import Vuex from 'vuex'
import Vue from 'vue'
import home from './modules/home'
import user from './modules/user'
import cart from './modules/cart'
Vue.use(Vuex)


const modules = {
    home,
    user,
    cart
}

const store = new Vuex.Store({

    modules
})

export default store