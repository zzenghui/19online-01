import Mock from 'mockjs'

let userArr = JSON.parse(localStorage.getItem('userArr') || '[]')

//注册接口
Mock.mock('/user/reg', 'post', function (data) {
    let userInfo = JSON.parse(data.body)
    let result = userArr.find(item => item.username == userInfo.username)
    if (result) {
        return {
            status: 0,
            msg: "用户名已经存在"
        }
    } else {
        userArr.push(userInfo)
        localStorage.setItem('userArr', JSON.stringify(userArr))
        return {
            status: 1,
            msg: "注册成功"
        }
    }
})

//登录接口
Mock.mock('/user/login', 'post', function (data) {
    let userInfo = JSON.parse(data.body)
    let res = userArr.find(item => item.username == userInfo.username && item.pass == userInfo.password)
    if (res) {
        return {
            status: 1,
            data: res,
            token: 'Bearaedwadwasadujlkajwkld'
        }
    } else {
        return {
            status: 0,
            msg: "用户名或密码错误"
        }
    }
})