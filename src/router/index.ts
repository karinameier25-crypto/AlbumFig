import { createRouter, createWebHistory } from '@ionic/vue-router'
import TabsPage from '@/views/TabsPage.vue'


const routes = [
  {
  path: '/',
  redirect: '/tabs/home'
  },

  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue')
  },

  {
    path: '/register',
      component: () => import('@/views/RegisterPage.vue') 
  },

  {
    path: '/reset',
    component: () => import('@/views/ResetPasswordPage.vue')  
  },

  {
    path: '/sobre',
    component: () => import('@/views/SobrePage.vue')
  },

  {
    path: '/termos',
    component: () => import('@/views/TermosPage.vue') 
  },

  {
    path: '/privacidade',
    component: () => import('@/views/PrivacidadePage.vue')  
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
         component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'coletados',
         component: () => import('@/views/CardsColetados.vue')
      },
      {
        path: 'perfil',
        component: () => import('@/views/PerfilPessoal.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router