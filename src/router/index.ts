import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/MainPage.vue'
import VideoPlayerPage from '../components/VideoPlayerPage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/vue3-video-player', component: VideoPlayerPage },
  // redirect any unknown path back to home
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
