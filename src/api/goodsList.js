import axios from '../utils/request'

export const getGoodsListApi = () => axios({
    url: "/api/getGoodsList"
})