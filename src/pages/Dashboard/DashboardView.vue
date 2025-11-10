<template>
    <div class="flex h-screen bg-[#F4F4F4]">
        <!-- Sidebar -->
        <div :class="[
            'bg-white shadow-xl transition-all duration-300 flex flex-col border-r border-gray-200',
            isCollapsed ? 'w-20' : 'w-64'
        ]">
            <!-- Header com toggle -->
            <div class="p-4 border-b border-gray-100 flex items-center justify-between">
                <div v-if="!isCollapsed" class="flex items-center space-x-3">
                    <div class="w-12 h-10  flex items-center justify-center">
                        <img src="/logo.png" alt="">
                    </div>
                    <span class="font-bold text-[#247BA0] text-lg">DesapegaAí</span>
                </div>
                <button @click="toggleSidebar"
                    class="p-2 rounded-lg cursor-pointer hover:bg-[#F4F4F4] transition-colors group"
                    :class="{ 'mx-auto': isCollapsed }">
                    <svg class="w-5 h-5 text-[#FF6B35] transition-transform duration-300"
                        :class="{ 'rotate-180': isCollapsed }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>

            <!-- Perfil do usuário -->
            <div class="p-4 border-b border-gray-100">
                <div class="flex items-center space-x-3" v-if="!isCollapsed">
                    <img :src="userProfile.avatar" :alt="userProfile.name"
                        class="w-12 h-12 rounded-full border-2 border-[#247BA0]" />
                    <div class="flex-1 min-w-0">
                        <p class="font-semibold text-[#2D2D2D] truncate">{{ userProfile.name }}</p>
                        <p class="text-sm text-gray-500 truncate">{{ userProfile.email }}</p>
                        <div class="flex items-center mt-1">
                            <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            <span class="text-xs text-gray-500">Online</span>
                        </div>
                    </div>
                </div>
                <div v-else class="flex justify-center">
                    <img :src="userProfile.avatar" :alt="userProfile.name"
                        class="w-10 h-10 rounded-full border-2 border-[#247BA0]" />
                </div>
            </div>

            <!-- Menu items -->
            <nav class="flex-1 overflow-y-auto py-4">
                <ul class="space-y-1 px-2">
                    <li v-for="(item, index) in menuItems" :key="index">
                        <!-- Item sem children -->
                        <router-link v-if="!item.children || item.children.length === 0" :to="item.href"
                            class="flex items-center px-3 py-3 rounded-lg text-[#2D2D2D] hover:bg-[#F4F4F4] hover:text-[#247BA0] transition-colors group"
                            :class="{
                                'bg-[#247BA0] text-white hover:bg-[#1e6a8c] hover:text-white': $route.path === item.href
                            }">
                            <component :is="item.icon" class="w-5 h-5 flex-shrink-0"
                                :class="isCollapsed ? 'mx-auto' : 'mr-3'" />
                            <span v-if="!isCollapsed" class="font-medium transition-opacity duration-200">
                                {{ item.title }}
                            </span>
                        </router-link>

                        <!-- Item com children (APENAS se tiver children) -->
                        <div v-else-if="item.children && item.children.length > 0">
                            <button @click="toggleDropdown(index)"
                                class="flex items-center justify-between w-full px-3 py-3 rounded-lg text-[#2D2D2D] hover:bg-[#F4F4F4] hover:text-[#247BA0] transition-colors group">
                                <div class="flex items-center">
                                    <component :is="item.icon" class="w-5 h-5 flex-shrink-0"
                                        :class="isCollapsed ? 'mx-auto' : 'mr-3'" />
                                    <span v-if="!isCollapsed" class="font-medium transition-opacity duration-200">
                                        {{ item.title }}
                                    </span>
                                </div>
                                <svg v-if="!isCollapsed" class="w-4 h-4 transition-transform duration-200"
                                    :class="{ 'rotate-180': openDropdowns.includes(index) }" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <!-- Subitems (APENAS se tiver children) -->
                            <transition enter-active-class="transition-all duration-200 ease-out"
                                enter-from-class="transform opacity-0 max-h-0"
                                enter-to-class="transform opacity-100 max-h-96"
                                leave-active-class="transition-all duration-150 ease-in"
                                leave-from-class="transform opacity-100 max-h-96"
                                leave-to-class="transform opacity-0 max-h-0">
                                <div v-if="openDropdowns.includes(index) && !isCollapsed && item.children && item.children.length > 0" class="ml-4 mt-1 space-y-1">
                                    <router-link v-for="(subItem, subIndex) in item.children" :key="subIndex"
                                        :to="subItem.href"
                                        class="flex items-center px-3 py-2 rounded-lg text-sm text-[#2D2D2D] hover:bg-[#F4F4F4] hover:text-[#247BA0] transition-colors"
                                        :class="{
                                            'bg-[#247BA0] text-white hover:bg-[#1e6a8c] hover:text-white': $route.path === subItem.href
                                        }">
                                        <component :is="subItem.icon" class="w-4 h-4 mr-3 flex-shrink-0" />
                                        <span class="font-medium">{{ subItem.title }}</span>
                                    </router-link>
                                </div>
                            </transition>
                        </div>
                    </li>
                </ul>
            </nav>

            <!-- Footer com ações -->
            <div class="p-4 border-t border-gray-100 space-y-2">
                <!-- Ações do usuário -->
                <button @click="handleLogout"
                    class="flex items-center cursor-pointer w-full px-3 py-2 rounded-lg text-[#2D2D2D] hover:bg-[#F4F4F4] hover:text-[#FF6B35] transition-colors group">
                    <svg class="w-5 h-5 flex-shrink-0" :class="isCollapsed ? 'mx-auto' : 'mr-3'" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span v-if="!isCollapsed" class="font-medium">Sair</span>
                </button>
            </div>
        </div>

        <!-- Conteúdo principal -->
        <div class="flex-1 overflow-auto p-2">
            <router-view/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, markRaw } from 'vue'
import { useRouter } from 'vue-router'
import {Boxes, House, Package, PackagePlus} from 'lucide-vue-next'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()

// Estado da sidebar
const isCollapsed = ref(false)
const openDropdowns = ref<number[]>([])

// Perfil do usuário
const userProfile = reactive({
    name: 'João Silva',
    email: 'joao.silva@email.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
})

// Ícones como componentes
const DashboardIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  `
}

// Itens do menu - totalmente configurável via data
const menuItems = ref([
    {
        title: 'Dashboard',
        icon: House,
        href: '/dashboard/home'
    },
    {
        title: 'Minhas Compras',
        icon: House,
        children: [
            {
                title: 'Compras Ativas',
                icon: House,
                href: '/purchases/active'
            }
         
        ]
    },
    {
        title: 'Meus Produtos',
        icon: Package,
        children:[
            {
                title: 'Anunciar Produto',
                icon: PackagePlus,
                href: '/dashboard/add-product'
            },
            {
                title: 'Meus Produtos',
                icon: Boxes,
                href: '/dashboard/list-products'

            }
        ]
    }
    // {
    //     title: 'Minhas Vendas',
    //     icon: TagIcon,
    //     children: [
    //         {
    //             title: 'Anúncios Ativos',
    //             icon: TagIcon,
    //             href: '/sales/active'
    //         },
    //         {
    //             title: 'Vendas Concluídas',
    //             icon: ShoppingIcon,
    //             href: '/sales/completed'
    //         },
    //         {
    //             title: 'Criar Anúncio',
    //             icon: StarIcon,
    //             href: '/sales/create'
    //         }
    //     ]
    // },
    // {
    //     title: 'Mensagens',
    //     icon: MessageIcon,
    //     href: '/messages'
    // },
    // {
    //     title: 'Avaliações',
    //     icon: StarIcon,
    //     href: '/reviews'
    // },
    // {
    //     title: 'Configurações',
    //     icon: SettingsIcon,
    //     children: [
    //         {
    //             title: 'Perfil',
    //             icon: StarIcon,
    //             href: '/settings/profile'
    //         },
    //         {
    //             title: 'Privacidade',
    //             icon: HeartIcon,
    //             href: '/settings/privacy'
    //         },
    //         {
    //             title: 'Notificações',
    //             icon: MessageIcon,
    //             href: '/settings/notifications'
    //         }
    //     ]
    // }
])

// Métodos
const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value
    // Fecha todos os dropdowns quando a sidebar é recolhida
    if (isCollapsed.value) {
        openDropdowns.value = []
    }
}

const toggleDropdown = (index: number) => {
    if (openDropdowns.value.includes(index)) {
        openDropdowns.value = openDropdowns.value.filter(i => i !== index)
    } else {
        openDropdowns.value.push(index)
    }
}
const auth = useAuthStore() 
const handleLogout = () => {
    auth.logout()
    router.push('/login')
}
</script>

<style scoped>
/* Scrollbar customizada */
nav::-webkit-scrollbar {
    width: 4px;
}

nav::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

nav::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 10px;
}

nav::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
}
</style>