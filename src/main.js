import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// vuefire
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)
// styles
import './assets/styles/main.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() { this.$store.dispatch('init') }
}).$mount('#app')
