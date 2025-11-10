<template>
  <div class="min-h-screen bg-[#F4F4F4] flex flex-col items-center justify-center p-4">
    <!-- Header Branding -->
    <div class="mb-8 text-center">
      <div class="flex items-center justify-center space-x-3 mb-4">
        <div class="w-12 h-10 flex items-center justify-center shadow-lg">
          <img src="/logo.png" alt="">
        </div>
        <h1 class="text-3xl font-bold text-[#247BA0]">DesapegaAí</h1>
      </div>
      <p class="text-[#2D2D2D] text-lg opacity-80">Junte-se à nossa comunidade e comece a desapegar</p>
    </div>

    <!-- Register Card -->
    <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-100">
      <div class="text-center mb-6">
        <h2 class="text-2xl font-semibold mb-2 text-[#2D2D2D]">Crie sua conta</h2>
        <p class="text-gray-600">É rápido e fácil. Leva menos de 1 minuto!</p>
      </div>



      <form @submit.prevent="handleRegister" class="space-y-5">
        <!-- Name Field -->
        <div>
          <label for="name" class="block text-sm font-medium mb-2 text-[#2D2D2D]">
            Nome <span class="text-gray-500 text-xs">(Opcional)</span>
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <input id="name" v-model="name" type="text"
              class="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all"
              placeholder="Seu nome completo" />
          </div>
        </div>

        <!-- Email Field -->
        <div>
          <label for="email" class="block text-sm font-medium mb-2 text-[#2D2D2D]">Email</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>
            <input id="email" v-model="email" type="email"
              class="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all"
              placeholder="seuemail@exemplo.com" required />
          </div>
        </div>

        <!-- Password Field -->
        <div>
          <label for="password" class="block text-sm font-medium mb-2 text-[#2D2D2D]">Senha</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'"
              class="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all"
              placeholder="Crie uma senha segura" required />
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button type="button" @click="showPassword = !showPassword"
                class="text-gray-400 hover:text-[#FF6B35] cursor-pointer transition-colors focus:outline-none">
                <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m15 18-.722-3.25" />
                  <path d="M2 8a10.645 10.645 0 0 0 20 0" />
                  <path d="m20 15-1.726-2.05" />
                  <path d="m4 15 1.726-2.05" />
                  <path d="m9 18 .722-3.25" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-1">Use pelo menos 8 caracteres com letras e números</p>
        </div>

        <!-- Terms Agreement -->
        <div class="flex items-start space-x-2">
          <input id="terms" type="checkbox"
            class="h-4 w-4 cursor-pointer text-[#FF6B35] focus:ring-[#FF6B35] border-gray-300 rounded mt-1" required />
          <label for="terms" class="text-sm text-[#2D2D2D]">
            Concordo com os
            <a href="#" class="text-[#247BA0] hover:text-[#1e6a8c] font-medium">Termos de Serviço</a>
            e
            <a href="#" class="text-[#247BA0] hover:text-[#1e6a8c] font-medium">Política de Privacidade</a>
          </label>
        </div>

        <!-- Register Button -->
        <button type="submit"
          class="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white cursor-pointer font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2 shadow-md"
          :disabled="auth.loading">
          <span v-if="!auth.loading" class="flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Criar minha conta
          </span>
          <span v-else class="flex items-center justify-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
            </svg>
            Criando conta...
          </span>
        </button>

        <!-- Error Message -->
        <p v-if="auth.error" class="text-red-500 text-sm text-center bg-red-50 py-2 rounded-lg border border-red-200">
          {{ auth.error }}
        </p>
      </form>

    </div>

    <!-- Login Link -->
    <div class="mt-8 text-center">
      <p class="text-[#2D2D2D]">
        Já tem uma conta?
        <router-link to="/login" class="font-semibold text-[#247BA0] hover:text-[#1e6a8c] transition-colors ml-1">
          Faça login aqui
        </router-link>
      </p>
    </div>


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()
const showPassword = ref(false)
const name = ref('')
const email = ref('')
const password = ref('')

const handleRegister = async () => {
  try {
    await auth.register({ name: name.value, email: email.value, password: password.value })
    router.push('/login')
  } catch {
    // Error handling is managed by the store
  }
}
</script>

<style scoped>
/* Custom styles for enhanced visual appeal */
.shadow-lg {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>