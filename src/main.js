import Vue from 'vue'
import 'normalize.css'
import App from './app.vue'
import router from './router'
import bem from '@/mixins/bem'

Vue.config.productionTip = false
Vue.mixin(bem)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
