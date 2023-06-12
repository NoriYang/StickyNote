import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '@/network/firebaseConfig'
import { onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'Index',
          component: () => import('../views/IndexPage.vue')
        },
        {
          path: 'userinfo',
          name: 'UserInfo',
          component: () => import('../views/UserInfo.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginPage.vue'),
      beforeEnter: () => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            router.replace('/')
          }
        });
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    }
  ]
})


export default router
