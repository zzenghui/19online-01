import axios from "axios";
import Vue from 'vue'
import NProgress from "nprogress";
import 'nprogress/nprogress.css';
const instance = axios.create({
    // baseURL:"",
    timeout: 6000
})

instance.interceptors.request.use((req) => {
    NProgress.start()
    return req
})

instance.interceptors.response.use((res) => {
    NProgress.done()
    return res
})


function request({
    url = "",
    method = "get",
    headers = {},
    data = {},
    params = {},
    controller
}) {
    const signal = controller ? controller.signal() : controller
    return instance({
        url,
        method,
        headers,
        data,
        params, signal
    })
}

Vue.prototype.$http = request

export default request