import axios from '../utils/request'

export const cartListApi = () => axios({
    url: "/api/getCartList"
})

export const addCartApi = (data) => axios({
    url: "/api/addCart",
    method: "post",
    data: data
})

//删除一个购物车
export const deleteCart = (id) => axios({
    url: "/api/deleteCart",
    method: "post",
    data: id
})