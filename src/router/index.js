import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
      routes: [{
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld
        },
        // {
        //   '/login': {
        //     name: 'login',
        //     title: '登录',
        //     // es6箭头函数
        //     component: (resolve) => require(['./components/login/login.vue'], resolve)
        //   }
        ]
      })
