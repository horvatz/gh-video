import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CountryShow from '../views/CountryShow.vue'
import VideoShow from '../views/VideoShow.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/drzava/:countryName',
    name: 'country-show',
    component: CountryShow,
    props: true
  },
  {
    path: '/video/:id',
    name: 'video-show',
    component: VideoShow,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
