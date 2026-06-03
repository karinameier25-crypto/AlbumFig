import { createRouter, createWebHistory } from '@ionic/vue-router'

import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import ResetPasswordPage from '@/views/ResetPasswordPage.vue'

import TabsPage from '@/views/TabsPage.vue'

import HomePage from '@/views/HomePage.vue'
import CardsColetados from '@/views/CardsColetados.vue'
import PerfilPessoal from '@/views/PerfilPessoal.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },

  {
    path: '/login',
    component: LoginPage
  },

  {
    path: '/register',
    component: RegisterPage
  },

  {
    path: '/reset',
    component: ResetPasswordPage
  },

  {
    path: '/tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: HomePage
      },
      {
        path: 'coletados',
        component: CardsColetados
      },
      {
        path: 'perfil',
        component: PerfilPessoal
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router