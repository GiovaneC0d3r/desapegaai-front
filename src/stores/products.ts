import { defineStore } from 'pinia'
import { api } from '@/api/api'

export const useProductStore = defineStore('products', {
  state: () => ({
    loading: false,
    error: null as string | null,
    success: null as string | null,
    products: [] as any[]
  }),

  actions: {
    async createProduct(formData: FormData) {
      this.loading = true
      this.error = null
      this.success = null

      try {
        const { data } = await api.post('/products/create', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        this.success = 'Produto criado com sucesso!'
        return data
      } catch (err: any) {
        this.error = err.response?.data?.message || 'Erro ao criar produto'
        throw err
      } finally {
        this.loading = false
      }
    },
    async listMyProducts() {
      this.loading = true
      this.error = null

      try {
        const { data } = await api.get('/products/me')
        this.products = data // salva os produtos na store
        return data
      } catch (err: any) {
        this.error = err.response?.data?.message || 'Erro ao carregar produtos'
        throw err
      } finally {
        this.loading = false
      }
    }

  }

})
