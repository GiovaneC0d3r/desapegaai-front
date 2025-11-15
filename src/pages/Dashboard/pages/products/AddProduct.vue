<template>
  <div class="min-h-screen bg-[#F4F4F4] py-8 px-4">
    <div class="max-w-2xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-[#2D2D2D] mb-2">Anuncie seu Produto</h1>
        <p class="text-gray-600">Preencha os detalhes abaixo e comece a vender na nossa comunidade</p>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
        <!-- Progress Indicator DINÂMICO -->
        <div class="mb-8">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-medium text-[#2D2D2D]">Progresso do anúncio</span>
            <span class="text-sm text-gray-500">{{ progress }}% completo</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div 
              class="bg-[#FF6B35] h-2 rounded-full transition-all duration-500 ease-out"
              :style="{ width: progress + '%' }"
            ></div>
          </div>
          <p class="text-xs text-gray-500 mt-2">
            {{ getProgressMessage() }}
          </p>
        </div>

        <form @submit.prevent="salvar" class="space-y-6">
          <!-- Título -->
          <div>
            <label class="block text-sm font-semibold text-[#2D2D2D] mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2 text-[#247BA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Título do Produto *
            </label>
            <div class="relative">
              <input 
                v-model="form.title" 
                type="text" 
                placeholder="Ex: iPhone 13 Pro Max 256GB"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all placeholder-gray-400"
                required
                @input="updateProgress"
                maxlength="60"
              />
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <span 
                  class="text-xs"
                  :class="form.title.length >= 10 ? 'text-green-500' : 'text-gray-400'"
                >
                  {{ form.title.length }}/60
                </span>
              </div>
            </div>
            <p class="text-xs text-gray-500 mt-1">Seja claro e descritivo para atrair mais compradores</p>
          </div>

          <!-- Preço -->
          <div>
            <label class="block text-sm font-semibold text-[#2D2D2D] mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2 text-[#247BA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              Preço *
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span class="text-gray-500">R$</span>
              </div>
              <input 
                v-model="form.price" 
                type="text" 
                placeholder="0,00"
                class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all placeholder-gray-400"
                required
                @input="updateProgress"
              />
            </div>
            <p class="text-xs text-gray-500 mt-1">Digite o valor no formato brasileiro (ex: 12,50)</p>
          </div>

          <!-- Descrição -->
          <div>
            <label class="block text-sm font-semibold text-[#2D2D2D] mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2 text-[#247BA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Descrição
            </label>
            <textarea 
              v-model="form.description" 
              placeholder="Descreva o estado do produto, detalhes importantes, motivo da venda..."
              rows="4"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all placeholder-gray-400 resize-none"
              @input="updateProgress"
              required
              maxlength="500"
            ></textarea>
            <div class="flex justify-between items-center mt-1">
              <p class="text-xs text-gray-500">Adicione detalhes que ajudem na venda</p>
              <span 
                class="text-xs"
                :class="form.description.length >= 50 ? 'text-green-500' : 'text-gray-400'"
              >
                {{ form.description.length }}/500
              </span>
            </div>
          </div>

          <!-- Upload Incremental com Drag & Drop -->
          <div>
            <label class="block text-sm font-semibold text-[#2D2D2D] mb-3">
              Fotos / Vídeos do Produto
            </label>

            <!-- Área de Drag & Drop -->
            <div 
              @drop="handleDrop"
              @dragover="handleDragOver"
              @dragleave="dragActive = false"
              class="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center transition-all duration-300 mb-6"
              :class="dragActive ? 'border-[#FF6B35] bg-orange-50' : 'border-gray-300 hover:border-gray-400'"
            >
              <div class="max-w-md mx-auto">
                <svg class="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p class="text-lg font-semibold text-gray-700 mb-2">Arraste e solte suas fotos aqui</p>
                <p class="text-sm text-gray-500 mb-4">ou</p>
                
                <label for="file-upload" class="cursor-pointer">
                  <span class="bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e55a2b] transition-colors duration-300 inline-block">
                    Selecione os arquivos
                  </span>
                  <input 
                    id="file-upload" 
                    type="file" 
                    accept="image/*,video/*" 
                    multiple 
                    @change="handleFileAdd"
                    class="hidden"
                  />
                </label>
                
                <p class="text-xs text-gray-500 mt-4">
                  Suporte para imagens (JPG, PNG) e vídeos (MP4). Máx. 10 arquivos.
                </p>
              </div>
            </div>

            <!-- Lista horizontal de previews -->
            <div v-if="previews.length > 0" class="mb-6">
              <h3 class="text-sm font-semibold text-[#2D2D2D] mb-4 flex items-center">
                <svg class="w-4 h-4 mr-2 text-[#247BA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                </svg>
                Suas mídias ({{ previews.length }}/10)
              </h3>
              
              <div class="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
                <div 
                  v-for="(item, index) in previews" 
                  :key="index"
                  class="relative shrink-0 w-32 h-32 rounded-xl overflow-hidden bg-gray-100 group transition-transform duration-300 hover:scale-105"
                >
                  <!-- Preview de imagem -->
                  <img 
                    v-if="item.type.startsWith('image')" 
                    :src="item.url" 
                    class="w-full h-full object-cover"
                    alt="Preview"
                  />
                  
                  <!-- Preview de vídeo -->
                  <div v-else class="w-full h-full bg-gray-800 flex items-center justify-center relative">
                    <video class="w-full h-full object-cover">
                      <source :src="item.url" />
                    </video>
                    <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>

                  <!-- Overlay com ações -->
                  <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center space-x-2">
                    <!-- Botão Visualizar -->
                    <button 
                      @click.stop="openPreview(index)"
                      type="button"
                      class="bg-white bg-opacity-90 text-gray-800 rounded-full p-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white"
                      title="Visualizar"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>

                    <!-- Botão Remover -->
                    <button 
                      @click.stop="removeFile(index)"
                      type="button"
                      class="bg-white bg-opacity-90 text-red-600 rounded-full p-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white"
                      title="Remover"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>

                  <!-- Indicador de tipo -->
                  <div class="absolute top-2 left-2">
                    <span 
                      class="text-xs px-2 py-1 rounded-full text-white font-medium"
                      :class="item.type.startsWith('image') ? 'bg-blue-500' : 'bg-purple-500'"
                    >
                      {{ item.type.startsWith('image') ? 'IMG' : 'VID' }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Contador de arquivos -->
              <div class="flex justify-between items-center text-sm text-gray-600 mt-2">
                <span>{{ previews.length }} arquivo(s) selecionado(s)</span>
                <button 
                  v-if="previews.length > 0"
                  @click="clearAllFiles"
                  class="text-red-500 hover:text-red-700 font-medium flex items-center text-sm"
                >
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Limpar todos
                </button>
              </div>
            </div>
          </div>

          <!-- Dica de Boas Práticas -->
          <div 
            class="p-4 rounded-lg transition-all duration-300"
            :class="progress >= 80 ? 'bg-gradient-to-r from-[#F2CC0F] to-[#FF6B35] text-white' : 'bg-blue-50 border border-blue-200 text-blue-800'"
          >
            <div class="flex items-start">
              <svg class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p class="font-semibold text-sm">{{ progress >= 80 ? 'Pronto para publicar!' : 'Continue preenchendo...' }}</p>
                <p class="text-xs opacity-90 mt-1">
                  <span v-if="progress >= 80">
                    Seu anúncio está quase completo! Revise as informações e clique em Publicar.
                  </span>
                  <span v-else>
                    Adicione fotos de qualidade e seja honesto sobre o estado do produto. Anúncios completos vendem 3x mais!
                  </span>
                </p>
              </div>
            </div>
          </div>

          <!-- Botão de Ação -->
          <div class="pt-4">
            <button 
              type="submit" 
              :disabled="productStore.loading || progress < 50"
              class="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2 shadow-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              :class="progress >= 80 ? 'animate-pulse' : ''"
            >
              <span v-if="!productStore.loading" class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
                {{ progress >= 80 ? 'Publicar Anúncio' : 'Preencha mais informações' }}
              </span>
              <span v-else class="flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Publicando...
              </span>
            </button>
            
            <!-- Mensagem de mínimo -->
            <p v-if="progress < 50" class="text-center text-xs text-gray-500 mt-2">
              Preencha pelo menos o título e preço para publicar
            </p>
          </div>

          <!-- Mensagens de Feedback -->
          <div class="space-y-3">
            <div v-if="productStore.success" class="bg-green-50 border border-green-200 rounded-lg p-4">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-green-700 font-medium">{{ productStore.success }}</p>
              </div>
            </div>

            <div v-if="productStore.error" class="bg-red-50 border border-red-200 rounded-lg p-4">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-red-700 font-medium">{{ productStore.error }}</p>
              </div>
            </div>
          </div>
        </form>

        <!-- Rodapé Informativo -->
        <div class="mt-8 pt-6 border-t border-gray-200">
          <div class="flex items-center justify-center text-sm text-gray-500">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Seus dados estão seguros conosco. Não compartilhamos informações pessoais.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de preview -->
    <div v-if="previewIndex !== null" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
      @click="previewIndex = null">
      
      <div class="relative max-w-4xl max-h-full">
        <!-- Botão fechar no modal -->
        <button 
          @click="previewIndex = null"
          class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <img 
          v-if="currentPreview && currentPreview.type.startsWith('image')" 
          :src="currentPreview.url" 
          class="max-w-full max-h-[80vh] rounded-lg object-contain"
        />

        <video 
          v-else-if="currentPreview" 
          controls 
          class="max-w-full max-h-[80vh] rounded-lg"
        >
          <source :src="currentPreview.url" />
          Seu navegador não suporta o elemento de vídeo.
        </video>

        <!-- Navegação entre mídias -->
        <div v-if="previews.length > 1" class="flex justify-between items-center mt-4">
          <button 
            @click.stop="navigatePreview(-1)"
            :disabled="previewIndex === 0"
            class="flex items-center text-white disabled:opacity-30 hover:text-gray-300 transition-colors"
          >
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Anterior
          </button>

          <span class="text-white text-sm">
            {{ (previewIndex || 0) + 1 }} de {{ previews.length }}
          </span>

          <button 
            @click.stop="navigatePreview(1)"
            :disabled="previewIndex === previews.length - 1"
            class="flex items-center text-white disabled:opacity-30 hover:text-gray-300 transition-colors"
          >
            Próximo
            <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useProductStore } from '@/stores/products'

const productStore = useProductStore()

interface PreviewItem {
  url: string;
  file: File;
  type: string;
}

// Lista reativa de arquivos adicionados
const files = ref<File[]>([])

// Lista para pré-visualização de cada arquivo
const previews = ref<PreviewItem[]>([])

// Index da imagem sendo visualizada no modal
const previewIndex = ref<number | null>(null)

// Estado do drag & drop
const dragActive = ref(false)

// Computed para preview atual seguro
const currentPreview = computed(() => {
  if (previewIndex.value === null) return null
  return previews.value[previewIndex.value] || null
})

// Drag & Drop handlers
function handleDragOver(e: DragEvent) {
  e.preventDefault()
  dragActive.value = true
}

function handleDragLeave() {
  dragActive.value = false
}

function handleDrop(e: DragEvent) {
  e.preventDefault()
  dragActive.value = false
  
  const droppedFiles = e.dataTransfer?.files
  if (!droppedFiles) return

  handleFiles(droppedFiles)
}

// File input handler
function handleFileAdd(event: Event) {
  const input = event.target as HTMLInputElement
  if (!input.files?.length) return

  handleFiles(input.files)
  input.value = ''
}

// Processar arquivos (tanto do drag & drop quanto do input)
function handleFiles(fileList: FileList) {
  const newFiles = Array.from(fileList)
  
  // Limitar a 10 arquivos no total
  const remainingSlots = 10 - files.value.length
  const filesToAdd = newFiles.slice(0, remainingSlots)

  filesToAdd.forEach(file => {
    if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
      return // Pular arquivos que não são imagens ou vídeos
    }

    files.value.push(file)
    previews.value.push({
      file,
      type: file.type,
      url: URL.createObjectURL(file)
    })
  })

  if (newFiles.length > remainingSlots) {
    console.warn(`Apenas ${remainingSlots} arquivos foram adicionados. Limite de 10 arquivos.`)
  }
}

function removeFile(index: number) {
  // Revogar URL do objeto para evitar memory leaks
  if (previews.value[index]) {
    URL.revokeObjectURL(previews.value[index].url)
  }
  
  files.value.splice(index, 1)
  previews.value.splice(index, 1)

  // Se remover a que está sendo visualizada, fecha modal
  if (previewIndex.value === index) {
    previewIndex.value = null
  } else if (previewIndex.value !== null && previewIndex.value > index) {
    // Ajusta o índice se estiver visualizando uma mídia após a removida
    previewIndex.value -= 1
  }
}

function clearAllFiles() {
  // Revogar todas as URLs
  previews.value.forEach(preview => URL.revokeObjectURL(preview.url))
  files.value = []
  previews.value = []
  previewIndex.value = null
}

function openPreview(index: number) {
  if (previews.value[index]) {
    previewIndex.value = index
  }
}

function navigatePreview(direction: number) {
  if (previewIndex.value === null) return
  
  const newIndex = previewIndex.value + direction
  if (newIndex >= 0 && newIndex < previews.value.length) {
    previewIndex.value = newIndex
  }
}

// Formulário principal
const form = reactive({
  title: '',
  price: '',
  description: ''
})

// Progresso calculado baseado no preenchimento (lógica da UI antiga)
const progress = computed(() => {
  let total = 0
  
  // Título: 40% do progresso (mínimo 10 caracteres para considerar "bom")
  if (form.title.length > 0) {
    total += Math.min(40, (form.title.length / 10) * 40)
  }
  
  // Preço: 40% do progresso (considera preenchido se tiver pelo menos 3 caracteres "R$ 0")
  if (form.price.length >= 1) {
    total += 40
  }
  
  // Descrição: 20% do progresso (opcional, mas contribui)
  if (form.description.length > 0) {
    total += Math.min(20, (form.description.length / 10) * 20)
  }
  
  return Math.min(100, Math.round(total))
})

// Atualiza o progresso (já é computado automaticamente)
const updateProgress = () => {
  // O computed progress já se atualiza automaticamente
  // Esta função é apenas para garantir que o evento @input seja capturado
}

// Mensagem motivacional baseada no progresso (da UI antiga)
const getProgressMessage = (): string => {
  if (progress.value < 25) {
    return 'Comece preenchendo o título e preço do produto...'
  } else if (progress.value < 50) {
    return 'Continue! Adicione mais detalhes para melhorar seu anúncio.'
  } else if (progress.value < 75) {
    return 'Ótimo! Seu anúncio está tomando forma.'
  } else if (progress.value < 90) {
    return 'Quase lá! Revise as informações antes de publicar.'
  } else {
    return 'Perfeito! Seu anúncio está pronto para ser publicado.'
  }
}

async function salvar() {
  if (progress.value < 50) return

  try {
    const formData = new FormData()
    formData.append('title', form.title)
    formData.append('price', form.price)
    formData.append('description', form.description)
    
    // Adicionar arquivos
    files.value.forEach(file => {
      formData.append('files', file)
    })

    await productStore.createProduct(formData)
    
    // Limpar formulário após sucesso
    form.title = ''
    form.price = ''
    form.description = ''
    files.value = []
    previews.value.forEach(preview => URL.revokeObjectURL(preview.url))
    previews.value = []
    
  } catch (error) {
    console.error('Erro ao salvar produto:', error)
  }
}
</script>

<style scoped>
.scrollbar-thin::-webkit-scrollbar {
  height: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>