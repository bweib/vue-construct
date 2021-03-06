import 'common/scss/index'
import Vue from 'vue'
import router from './router'
import App from './app'
import 'filters'
import 'directives'

new Vue({
  el: '#app',
  router,
  render: createElement => createElement(App)
})