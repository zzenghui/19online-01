import axios from '../utils/request'

export const getNavListApi = () => axios({
    url: "/api/getNavList"
})

export const getBannerApi = () => axios({
    url: "/api/getBannerList"
})

export const getcategory = () => axios({
    url: "/api/getcategory"
})

export const getcateD = () => axios({
    url: '/api/getcateD'
})

export const getCateItem = () => axios({
    url: "/api/getcateItem"
})