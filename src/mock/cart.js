import Mock from "mockjs";

let cartList = JSON.parse(localStorage.getItem('cart') || '[]')



//获取购物车数据
Mock.mock('/api/getCartList', 'get', function () {
    return cartList
})

//加入购物车
Mock.mock('/api/addCart', 'post', function (data) {
    let cartInfo = JSON.parse(data.body)
    cartList.push(cartInfo)
    localStorage.setItem('cart', JSON.stringify(cartList))
    return {
        msg: "加入成功",
        status: 1
    }
})

//删除一个购物车
Mock.mock('/api/deleteCart', 'post', function (data) {
    let id = data.body
    cartList = cartList.filter(item => item.id != id)
    localStorage.setItem('cart', JSON.stringify(cartList))
    return {
        msg: "删除成功",
        status: 1
    }
})

