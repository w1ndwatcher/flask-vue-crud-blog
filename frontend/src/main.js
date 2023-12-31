import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './routers.js'

Vue.config.productionTip = false

// Create a new Vue instance and mount it to the element with the ID 'app'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

