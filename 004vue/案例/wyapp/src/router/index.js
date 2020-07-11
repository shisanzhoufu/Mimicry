import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import topic from '../views/topic.vue'
import Category from '../views/category.vue'
import categorylist from '../views/categorylist.vue'
import products from '../views/products.vue'
import buycar from '../views/buycar.vue'

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
    path:'/topic',
    name:'Topic'
  },
  {
    path:'/category',
    name:'category',
    component: Category
  },
  {
    path:'/categorylist/:id',
    name:'categorylist',
    component:categorylist,
    props:true
  },
  {
    path:'/products/:id',
    name:'products',
    component:products,
    props:true
  },
  {
    path:'/buycar',
    name:'buycar',
    component:buycar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
