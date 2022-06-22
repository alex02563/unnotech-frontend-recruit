import { createWebHistory, createRouter } from 'vue-router'

//  Layouts
import defaultLayout from '@/layouts/default.vue'

//  Pages
import Home from '@/pages/Home.vue'
import Info from '@/pages/Info.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: defaultLayout,
    redirect: '/books',
    requireAuth: true,
    children: [
      {
        path: '/books',
        component: Home,
        meta: { title: 'Home' }
      },
      {
        path: '/books/:id',
        component: Info
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
