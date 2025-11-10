import { defineStore } from 'pinia'
import { api } from '@/api/api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any,
    isAuthenticated: false,
    loading: false,
    error: null as string | null,
    success: null as string | null
  }),

  actions: {
    async fetchUser() {
      this.loading = true
      this.error = null
      try {
        const { data } = await api.get('/user/me')
        this.user = data.user
        this.isAuthenticated = true
      } catch (err: any) {
        this.user = null
        this.isAuthenticated = false
      } finally {
        this.loading = false
      }
    },

    async login(credentials: { email: string; password: string }) {
      this.loading = true
      this.error = null
      this.success = null
      try {
        const { data } = await api.post('/user/signin', credentials)
        await this.fetchUser()
        this.success = 'Login realizado com sucesso!'
        return data
      } catch (err: any) {
        this.error = err.response?.data?.message || 'Erro ao fazer login'

        throw err // permite capturar o erro no componente se quiser
      } finally {
        this.loading = false
      }
    },

    async register(credentials: { name: string; email: string; password: string }) {
      this.loading = true
      this.error = null
      this.success = null
      try {
        const { data } = await api.post('/user/signup', credentials)
        this.success = 'Registro realizado com sucesso!'
        return data
      } catch (err: any) {
        this.error = err.response?.data?.message || 'Erro ao registrar usuário'
        throw err
      } finally {
        this.loading = false
      }
    },

    async logout() {
      this.loading = true
      this.error = null
      try {
        await api.get('/user/logout')
        this.user = null
        this.isAuthenticated = false
      } catch (err: any) {
        this.error = err.response?.data?.message  || 'Erro ao fazer logout'
      } finally {
        this.loading = false
      }
    }
  }
})