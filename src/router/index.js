import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Coin from '../views/Coin.vue'
import PodcastEpisode from '../components/PodcastEpisode.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/page=:pageNumber?',
    name: 'Home',
    component: Home
  },
  {
    path: '/coin/:coinId',
    name: 'Coin',
    component: Coin
  },
  {
    path: '/podcast/episode=:episodeName',
    name: 'PodcastEpisode',
    component: PodcastEpisode
  },
  {
    path: '/404', 
    component: NotFound 
  },  
  { 
    path: "/:catchAll(.*)", 
    redirect: '/404' 
  }, 
  // {
  //   path: '/coinlist',
  //   name: 'CoinList',
  //   component: CoinList
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  // Scroll to the top of a page when routed
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  history: createWebHashHistory(),
  mode: 'history',
  routes
})

export default router
