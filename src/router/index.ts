import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/HomeView.vue'
import LoginView from '@/pages/Login/LoginView.vue'
import DashboardView from '@/pages/Dashboard/DashboardView.vue'
import { useAuthStore } from '@/stores/auth'
import RegisterView from '@/pages/Register/RegisterView.vue'
import Home from '@/pages/Dashboard/pages/Home.vue'
import AddProduct from '@/pages/Dashboard/pages/products/AddProduct.vue'
import ListProducts from '@/pages/Dashboard/pages/products/ListProducts.vue'

const router = createRouter({

  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/register',
      component: RegisterView
    },
    {
      path: '/dashboard',
      component: DashboardView,
      children:[
        {
          path: 'home',
          component: Home,
        },
        {
          path: 'add-product',
          component: AddProduct,
        },
        {
          path: 'list-products',
          component: ListProducts,
        }
      ],

      meta: { requiresAuth: true }
    },

  ],
})

router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore()

  if (auth.loading) {
    await new Promise(resolve => {
      const interval = setInterval(() => {
        if (!auth.loading) {
          clearInterval(interval)
          resolve(true)
        }
      }, 50)
    })
  }

  if (!auth.isAuthenticated && !auth.loading) {
    await auth.fetchUser()
  }

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return next('/login')
  }

  if (to.path === '/login' && auth.isAuthenticated) {
    return next('/dashboard')
  }
  if (to.path === '/register' && auth.isAuthenticated) {
    return next('/dashboard')
  }

  next()
})

export default router