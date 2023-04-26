import axios from '../utils/request'

export const regApi = (userInfo) => axios({
    url: "/user/reg",
    method: "post",
    data: userInfo
})


export const loginApi = (userInfo) => axios({
    url: "/user/login",
    method: "post",
    data: userInfo
})