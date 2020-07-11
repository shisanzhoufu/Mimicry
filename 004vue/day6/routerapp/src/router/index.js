import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import newsView from '../views/newsView.vue'
import weatherView from '../views/weatherView.vue'
import bignews from '../views/bignews.vue'
import videoView from '../components/videoView.vue'
import imagesView from '../components/imagesView.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/news/:id',
    name:'news',
    component:newsView
  },
  {
    path: '/weather/:city',
    component:weatherView
  },
  {
    path:'/bignews',
    component:bignews,
    children:[{
      path:'video',
      component:videoView
    },
    {
      path:'images',
      component:imagesView
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
