import Vue from 'vue'
import Router from 'vue-router'
// import iView from 'iview'
import Detail from '@/views/Detail'
import Home from '@/views/home'
import Posts from '@/views/posts'
import Index from '@/views/index'
import Admin from '@/views/admin'
import Login from '@/views/login'
import PostsDetail from '@/views/posts-detail'
import Util from '../libs/util'
// const Home = resolve => require(['@/views/home'], resolve)
// const Detail = resolve => require(['@/views/Detail'], resolve)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/admin',
      redirect: '/admin/posts'
    },
    {
      path: '/home',
      component: Index,
      children: [
        {
          path: '',
          name: 'Home',
          meta: {
            title: 'home'
          },
          component: Home
        },
        {
          path: 'detail/:id',
          name: 'Detail',
          meta: {
            title: 'Detail'
          },
          component: Detail
        }
      ]
    },
    {
      path: '/admin',
      component: Admin,
      beforeEnter: (to, from, next) => {
        if (window.username) {
          next()
        } else {
          Util.ajax
            .get(`user`)
            .then(({data}) => {
              if (data.code === 0) {
                window.username = data.data.username
                next()
              } else {
                next('/login')
              }
            })
        }
      },
      children: [
        {
          path: 'posts',
          name: 'posts',
          meta: {
            title: 'posts'
          },
          component: Posts
        },
        {
          path: 'posts/add',
          name: 'postsAdd',
          meta: {
            title: 'posts add'
          },
          component: PostsDetail
        },
        {
          path: 'posts/:id',
          name: 'postsEdit',
          meta: {
            title: 'posts edit'
          },
          component: PostsDetail
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  // iView
  //   .LoadingBar
  //   .start()
  Util.title(to.meta.title)
  next()
})

router.afterEach(() => {
  // iView
  //   .LoadingBar
  //   .finish()
  window.scrollTo(0, 0)
})

export default router
