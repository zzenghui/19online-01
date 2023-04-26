import Vuex from 'vuex'
import Vue from 'vue'
import home from './modules/home'
import user from './modules/user'

Vue.use(Vuex)


const modules = {
    home,
    user
}

const store = new Vuex.Store({

    modules
})

export default store