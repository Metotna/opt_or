import Vue from 'vue'
import vueRouter from 'vue-router'
import store from '@/intraware/stores'
import index from '@/components/index'
import layout from '@/impor_comp/layout'
import layoutN from '@/impor_comp/layoutN'
// import slideShows from '@/components/slideShows'
// import logform from '@/impor_comp/logForm'
// import orderIn from '@/components/orderInquiry'
// import editor from '@/components/editor'
// import operation from '@/components/operatingActivities'
const editor = () => import('@/components/editor')
const logform = () => import('@/impor_comp/logForm')
const orderIn = () => import('@/components/orderInquiry')
const slideShows = () => import('@/components/slideShows')
const operation = () => import( '@/components/operatingActivities')
const demographic = () => import( '@/components/demographic')
const jaccount = () => import( '@/components/journalaccount')
Vue.use(vueRouter)
const rout = new vueRouter({
  // mode: 'history',
  routes: [
    {
      path: '*',
      redirect: 'index',
      component: layout
    },
    {
      path: '/',
      component: layoutN,
      redirect: 'index',
      children: [{
          path: 'index',
          component: index
        },
        {
          path: 'slideshows',
          component: slideShows
        },
        {
          path: 'order',
          component: orderIn
        },
        {
          path: 'article',
          component: editor
        },{
          path: 'operation',
          component:operation
        },{
          path: 'demographic',
          component:demographic
        },{
          path: 'jaccount',
          component:jaccount
        }


      ]
    },
    {
      path: '/login',
      component: logform,
      meta: { auth: true }
    }
  ]
})
rout.beforeEach((to, from, next) => {
  if (!to.matched.some(m => m.meta.auth)) {  
        // 对路由进行验证
    if (!store.state.islogin) {
      
      next({ path: '/login'})
    } else {
      // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
      next();
    }　　　　
  } else {
    next();
  };
})
export default rout
