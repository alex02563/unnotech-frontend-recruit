import { createWebHistory, createRouter } from 'vue-router'
//  Layouts
import defaultLayout from '@/layouts/default.vue'

//  Pages
import Home from '@/pages/Home.vue'
import Info from '@/pages/Info.vue'
import NotFound from '@/pages/NotFound.vue'
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
        component: Home
      },
      {
        path: '/books/:bookId',
        component: Info
      }
    ]
  },
  {
    name: '404',
    path: '/404',
    component: NotFound
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    hidden: true
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
