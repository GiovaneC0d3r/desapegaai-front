<template>
  <div class="min-h-screen h-screen  bg-[#F4F4F4] flex flex-col items-center justify-center p-4">
    <!-- Header Branding -->
    <div class="mb-8 text-center">
      <div class="flex items-center justify-center space-x-3 mb-4">
        <div class="w-12 h-10  flex items-center justify-center shadow-lg">
          <img src="/logo.png" alt="">
        </div>
        <h1 class="text-3xl font-bold text-[#247BA0]">DesapegaAí</h1>
      </div>
      <p class="text-[#2D2D2D] text-lg opacity-80">Entre na sua conta e continue desapegando</p>
    </div>

    <!-- Login Card -->
    <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-100">
      <h2 class="text-2xl font-semibold text-center mb-2 text-[#2D2D2D]">Bem-vindo de volta!</h2>
      <p class="text-center text-gray-600 mb-6">Faça login para acessar sua conta</p>

      <form @submit.prevent="handleLogin" class="space-y-5">
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
          <div class="flex items-center justify-between mb-2">
            <label for="password" class="block text-sm font-medium text-[#2D2D2D]">Senha</label>

          </div>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input id="password" v-model="password" type="password"
              class="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all"
              placeholder="••••••••" required />
          </div>
        </div>

        <!-- Remember Me Checkbox -->
        <div class="flex justify-between items-center">
          <div class="flex items-center ">
            <input id="remember-me" type="checkbox"
              class="h-4 w-4 cursor-pointer text-[#FF6B35] focus:ring-[#FF6B35] border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-[#2D2D2D]">
              Lembrar de mim
            </label>
          </div>
          <div>
            <a href="#" class="text-sm text-[#247BA0] hover:text-[#1e6a8c] font-semibold">Esqueceu a senha?</a>
          </div>

        </div>

        <!-- Login Button -->
        <button type="submit"
          class="w-full cursor-pointer bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2 shadow-md"
          :disabled="auth.loading">
          <span v-if="!auth.loading" class="flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Entrar na conta
          </span>
          <span v-else class="flex items-center justify-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
            </svg>
            Carregando...
          </span>
        </button>

        <!-- Error Message -->
        <p v-if="auth.error" class="text-red-500 text-sm text-center bg-red-50 py-2 rounded-lg border border-red-200">
          {{ auth.error }}
        </p>
      </form>




    </div>

    <!-- Sign Up Link -->
    <div class="mt-8 text-center">
      <p class="text-[#2D2D2D]">
        Não tem uma conta?
        <button @click="router.push('/register')" class="font-semibold cursor-pointer text-[#247BA0] hover:text-[#1e6a8c] transition-colors ml-1">
          Cadastre-se agora
        </button>
      </p>
    </div>


  </div>
</template>



<style scoped>
/* Custom styles for enhanced visual appeal */
.shadow-lg {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()

const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    await auth.login({ email: email.value, password: password.value })
    router.push('/dashboard')
  } catch {

  }
}

console.log(auth.isAuthenticated)
</script>