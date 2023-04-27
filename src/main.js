import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
import Thead from '@/components/Thead'
import './utils/elementui'
import './mock/index'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import rightNav from '@/components/rightNav'
import YANZHENG from './components/SIdentify.vue'
import userHead from './pages/userInfo/header.vue'
import VueLazyload from 'vue-lazyload'

Vue.component('userHead', userHead)
Vue.component('YANZHENG', YANZHENG)
Vue.component('rightNav', rightNav)
Vue.component('Thead', Thead)
Vue.component('Footer', Footer)
Vue.component('Nav', Nav)

Vue.use(VueLazyload, {
  preLoad: 1,
  error: '../public/static/images/error.jpg',
  loading: '../public/static/images/loading.gif',
  attempt: 2,
})


Vue.use(Toast, {
  defaultType: 'center',
  duration: 2500,
  wordWrap: true,
  width: '150px'
});
new Vue({
  router,
  store,
  render(h) {
    return h(App)
  },
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  mounted() {

  }
}).$mount('#app')