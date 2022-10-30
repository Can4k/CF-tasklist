import { createRouter, createWebHistory } from 'vue-router'
import main_page from "@/pages/main-page.vue";

const routes = [
  {
    path: '/',
    name: 'main',
    component: main_page
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
