<template>
  <div class="min-h-screen bg-[#F4F4F4] py-8">
    <div class="container mx-auto px-4">
      <!-- Header da página -->
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-[#2D2D2D] mb-2">Meus Produtos</h1>
        <p class="text-gray-600">Gerencie todos os seus anúncios em um só lugar</p>
      </div>

      <!-- Grid de produtos -->
      <div v-if="productStore.products.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="product in productStore.products" 
          :key="product.id" 
          class="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02]"
        >
          <!-- Carrossel de mídias -->
          <div class="relative">
            <div class="carousel-container overflow-hidden relative h-64">
              <div 
                class="carousel-track flex transition-transform duration-300 ease-in-out h-full"
                :style="{ transform: `translateX(-${getCurrentSlide(product.id) * 100}%)` }"
              >
                <div 
                  v-for="(media, index) in product.medias" 
                  :key="index"
                  class="carousel-slide w-full h-64 flex-shrink-0 flex items-center justify-center bg-gray-100"
                >
                  <img 
                    v-if="!isVideo(media)" 
                    :src="media" 
                    :alt="`Imagem ${index + 1} do produto ${product.title}`"
                    class="w-full h-full object-cover"
                  />
                  <video 
                    v-else
                    :src="media"
                    class="w-full h-full object-cover"
                    controls
                  ></video>
                </div>
              </div>
            </div>

            <!-- Indicadores do carrossel (pontos) -->
            <div v-if="product.medias.length > 1" class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              <button
                v-for="(_, index) in product.medias"
                :key="index"
                @click="goToSlide(product.id, index)"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="getCurrentSlide(product.id) === index ? 'bg-[#FF6B35] w-4' : 'bg-white bg-opacity-70'"
              ></button>
            </div>

            <!-- Controles de navegação do carrossel -->
            <div v-if="product.medias.length > 1" class="absolute inset-0 flex items-center justify-between p-4">
              <button 
                @click="prevSlide(product.id)"
                class="bg-white bg-opacity-80 text-[#2D2D2D] rounded-full p-2 hover:bg-opacity-100 transition-all shadow-md"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                @click="nextSlide(product.id)"
                class="bg-white bg-opacity-80 text-[#2D2D2D] rounded-full p-2 hover:bg-opacity-100 transition-all shadow-md"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <!-- Badge de status -->
            <div class="absolute top-4 left-4">
              <span class="bg-[#247BA0] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Ativo
              </span>
            </div>
          </div>

          <!-- Informações do produto -->
          <div class="p-6">
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-xl font-bold text-[#2D2D2D] line-clamp-2 flex-1 mr-2">{{ product.title }}</h3>
              <span class="text-2xl font-bold text-[#FF6B35] flex-shrink-0">{{ formatBRL(product.price) }}</span>
            </div>

            <p class="text-gray-600 mb-4 line-clamp-3">{{ product.description }}</p>

            <!-- Ações do produto -->
            <div class="flex justify-between items-center pt-4 border-t border-gray-100">
              <div class="flex space-x-2">
                <button class="text-[#247BA0] hover:text-[#1e6a8c] transition-colors p-2 rounded-lg hover:bg-blue-50">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button class="text-[#FF6B35] hover:text-[#e55a2b] transition-colors p-2 rounded-lg hover:bg-orange-50">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              
              <button class="bg-[#247BA0] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1e6a8c] transition-colors flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Ver Detalhes
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Estado vazio -->
      <div v-else-if="!productStore.loading" class="text-center py-16">
        <div class="max-w-md mx-auto">
          <svg class="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <h3 class="text-xl font-bold text-[#2D2D2D] mb-2">Nenhum produto encontrado</h3>
          <p class="text-gray-600 mb-6">Você ainda não possui produtos anunciados.</p>
          <button @click=" router.push('/dashboard/add-product')" class="bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e55a2b] transition-colors">
            Anunciar Primeiro Produto
          </button>
        </div>
      </div>

      <!-- Loading state -->
      <div v-if="productStore.loading" class="flex justify-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6B35]"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { formatBRL } from '@/utils/utils'
import { useProductStore } from '@/stores/products'
import { useRouter } from 'vue-router'
const productStore = useProductStore()
const router = useRouter()
// Estado para controlar o slide atual de cada produto
const currentSlide = reactive<Record<number, number>>({})

onMounted(async () => {
  await productStore.listMyProducts()
  
  // Inicializar o slide atual para cada produto
  productStore.products.forEach(product => {
    if (product.id) {
      currentSlide[product.id] = 0
    }
  })
})

// Verificar se a mídia é um vídeo
function isVideo(url: string): boolean {
  return /\.(mp4|mov|avi|webm|mkv)$/i.test(url)
}

// Função segura para obter o slide atual
function getCurrentSlide(productId: number): number {
  return currentSlide[productId] ?? 0
}

// Navegação do carrossel
function nextSlide(productId: number) {
  const product = productStore.products.find(p => p.id === productId)
  if (product && product.medias && product.medias.length > 0) {
    const current = getCurrentSlide(productId)
    currentSlide[productId] = (current + 1) % product.medias.length
  }
}

function prevSlide(productId: number) {
  const product = productStore.products.find(p => p.id === productId)
  if (product && product.medias && product.medias.length > 0) {
    const current = getCurrentSlide(productId)
    currentSlide[productId] = current === 0 
      ? product.medias.length - 1 
      : current - 1
  }
}

function goToSlide(productId: number, slideIndex: number) {
  const product = productStore.products.find(p => p.id === productId)
  if (product && product.medias && slideIndex >= 0 && slideIndex < product.medias.length) {
    currentSlide[productId] = slideIndex
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.carousel-container {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.carousel-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.carousel-track {
  transition: transform 0.3s ease-in-out;
}
</style>