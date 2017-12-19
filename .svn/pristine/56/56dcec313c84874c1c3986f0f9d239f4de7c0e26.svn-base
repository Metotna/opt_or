// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import base from './intraware/base'
import ElementUI from 'element-ui'
import store from './intraware/stores'
import router from './intraware/routers'
import VueQuillEditor from 'vue-quill-editor'
import 'element-ui/lib/theme-chalk/index.css'
import customControl from './intraware/filter_directive'

Vue.use(VueQuillEditor) 
Vue.use(ElementUI)
Vue.use(base, customControl)

new Vue({
  //el: '#app',
  //template: '<App/>',
  //components: { App }  
  store,
  router,
  render: h => h(App)
}).$mount('#app')
