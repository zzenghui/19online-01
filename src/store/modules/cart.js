import { cartListApi, addCartApi, deleteCart } from '../../api/cart'

const actions = {
    //获取购物车数据
    async cartListAct({ commit }) {
        let res = await cartListApi()
        commit('GETCATELIST', res.data)
    },
    //添加购物车
    async addCartAct(context, cartInfo) {
        let res = await addCartApi(cartInfo)
    },
    //删除购物车
    async deleteCartAct(context, id) {
        let res = await deleteCart(id)
        if (res.data.status == 1) {
            context.dispatch('cartListAct')
        }
    }
}
const mutations = {
    GETCATELIST(state, val) {
        state.cartList = val
    },
    //修改选中状态
    HANDLECHECK(state, val) {
        state.cartList.forEach(item => {
            if (item.id == val) {
                item.selected = !item.selected
            }
        });
    },
    //修改数量
    HANDLENUM(state, val) {
        state.cartList.forEach(item => {
            if (item.id == val.id) {
                item.num = val.num
            }
        })
    },
    //全选反选
    SELECTALL(state, val) {
        state.cartList.forEach(item => item.selected = val)
    }
}
const state = {
    cartList: []
}

const getters = {
    getAllPrice(state) {
        let allprice = 0
        state.cartList.forEach(item => {
            if (item.selected == true) {
                allprice += parseInt(item.price) * parseInt(item.num)
            }
        })
        return allprice
    },
    selectItem(state) {
        return state.cartList.filter(item => item.selected == true)
    },
    goodsNum(state) {
        let nums = 0
        state.cartList.forEach(item => {
            if (item.selected == true) {
                nums += item.num
            }
        })
        return nums
    }
}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}