import Vue from 'vue'
import App from './App.vue'
import Device from './plugins/Device'
Vue.config.productionTip = false

Vue.use(Device)

new Vue({
  render: h => h(App),
}).$mount('#app')
