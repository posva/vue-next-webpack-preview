import Home from './views/Home.vue'
import User from './views/User.vue'
import { createHistory, createRouter } from '@posva/vue-router-next'

export const router = createRouter({
  history: createHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/users/:id',
      name: 'User',
      component: User,
    },
  ],
})
