import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
Vue.use(Vuesax);

import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
