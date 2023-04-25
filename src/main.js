import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
import Thead from '@/components/Thead'
import './utils/elementui'
Vue.component('Thead', Thead)

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
  mounted() {

  }
}).$mount('#app')