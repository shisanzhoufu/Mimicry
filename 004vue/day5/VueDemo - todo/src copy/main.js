// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VUeResource from './node_modules/v-resource'
import App from './App'

Vue.use(VUeResource)

Vue.config.productionTip = false
// import './base.css'


new Vue({
  el: '#app',
  //映射为标签
  components: { App },
  template: '<App/>'
})
