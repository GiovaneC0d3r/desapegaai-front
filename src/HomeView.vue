<template>


    

    <body class="bg-[#F4F4F4] text-[#2D2D2D]">
        <div id="app">
            <!-- Header -->
            <header class="bg-white shadow-sm sticky top-0 z-50">
                <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                        <div class="w-12 h-10 flex items-center justify-center">
                            <img src="/logo.png" alt="">
                        </div>
                        <h1 class="text-xl font-bold text-[#247BA0]">DesapegaAí</h1>
                    </div>

                    <nav class="hidden md:flex space-x-8">
                        <a href="#" class="font-medium hover:text-[#FF6B35] transition-colors">Como Funciona</a>
                        <a href="#" class="font-medium hover:text-[#FF6B35] transition-colors">Categorias</a>
                        <a href="#" class="font-medium hover:text-[#FF6B35] transition-colors">Destaques</a>
                        <a href="#" class="font-medium hover:text-[#FF6B35] transition-colors">Vantagens</a>
                    </nav>

                    <div class="flex items-center space-x-4">
                        <button
                            @click="router.push('/login')"
                            class="px-4 py-2 rounded-lg font-medium border border-[#2D2D2D] hover:bg-[#2D2D2D] hover:text-white transition-colors cursor-pointer">
                            Entrar
                        </button>
                        <button class="btn-primary px-4 py-2 rounded-lg font-medium text-white pulse-animation">
                            Publicar Anúncio
                        </button>
                    </div>

                    <button class="md:hidden text-[#2D2D2D]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>

            <!-- Hero Section -->
            <section class="bg-gradient-to-r from-[#247BA0] to-[#2D2D2D] text-white py-16 md:py-24">
                <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 mb-10 md:mb-0">
                        <h2 class="text-4xl md:text-5xl font-bold mb-6">Desapegue do que não usa e ganhe dinheiro!</h2>
                        <p class="text-xl mb-8">O marketplace de confiança onde você compra e vende com segurança.
                            Milhares de produtos esperando por você!</p>
                        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button class="btn-primary px-6 py-3 rounded-lg font-bold text-white text-lg">
                                Explorar Produtos
                            </button>
                            <button
                                class="bg-white text-[#2D2D2D] px-6 py-3 rounded-lg font-bold text-lg border-2 border-white hover:bg-transparent hover:text-white transition-colors">
                                Como Funciona
                            </button>
                        </div>
                    </div>
                    <div class="md:w-1/2 flex justify-center">
                        <div class="relative">
                            <div
                                class="bg-white rounded-2xl shadow-2xl p-6 w-80 h-80 flex flex-col justify-center items-center transform rotate-3">
                                <div class="text-[#2D2D2D] text-center">
                                    <h3 class="text-2xl font-bold mb-4">Novo Usuário?</h3>
                                    <p class="mb-6">Cadastre-se agora e ganhe</p>
                                    <div class="highlight text-[#2D2D2D] font-bold text-3xl py-2 px-4 rounded-lg mb-6">
                                        R$ 10 de desconto
                                    </div>
                                    <p class="text-sm">na sua primeira compra!</p>
                                </div>
                            </div>
                            <div
                                class="absolute -top-4 -right-4 bg-[#FF6B35] text-white px-4 py-2 rounded-lg font-bold">
                                OFERTA POR TEMPO LIMITADO
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Como Funciona -->
            <section class="py-16 bg-white">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center mb-12">Como Funciona o <span class="text-[#247BA0]">DesapegaAí</span></h2>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-[#F4F4F4] p-6 rounded-xl text-center card-hover">
                            <div
                                class="w-16 h-16 bg-[#247BA0] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                1</div>
                            <h3 class="text-xl font-bold mb-4">Cadastre-se</h3>
                            <p class="text-[#2D2D2D]">Crie sua conta em segundos e verifique seu perfil para ganhar
                                confiança na comunidade.</p>
                        </div>

                        <div class="bg-[#F4F4F4] p-6 rounded-xl text-center card-hover">
                            <div
                                class="w-16 h-16 bg-[#247BA0] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                2</div>
                            <h3 class="text-xl font-bold mb-4">Anuncie ou Compre</h3>
                            <p class="text-[#2D2D2D]">Publique seus produtos com fotos e descrições detalhadas ou
                                explore milhares de anúncios.</p>
                        </div>

                        <div class="bg-[#F4F4F4] p-6 rounded-xl text-center card-hover">
                            <div
                                class="w-16 h-16 bg-[#247BA0] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                3</div>
                            <h3 class="text-xl font-bold mb-4">Feche o Negócio</h3>
                            <p class="text-[#2D2D2D]">Combine a forma de pagamento e entrega com segurança através do
                                nosso sistema de mensagens.</p>
                        </div>
                    </div>

                    <div class="text-center mt-12">
                        <button class="btn-secondary px-6 py-3 rounded-lg font-bold text-white text-lg">
                            Começar Agora
                        </button>
                    </div>
                </div>
            </section>

            <!-- Produtos em Destaque -->
            <section class="py-16 bg-[#F4F4F4]">
                <div class="container mx-auto px-4">
                    <div class="flex justify-between items-center mb-8">
                        <h2 class="text-3xl font-bold">Produtos em Destaque</h2>
                        <a href="#" class="text-[#247BA0] font-medium flex items-center">
                            Ver todos
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div v-for="product in featuredProducts" :key="product.id"
                            class="bg-white rounded-xl overflow-hidden shadow-md card-hover">
                            <div class="relative">
                                <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover">
                                <div v-if="product.discount"
                                    class="absolute top-2 right-2 bg-[#F2CC0F] text-[#2D2D2D] font-bold px-2 py-1 rounded-lg text-sm">
                                    {{ product.discount }}
                                </div>
                            </div>
                            <div class="p-4">
                                <h3 class="font-bold text-lg mb-2">{{ product.name }}</h3>
                                <div class="flex items-center mb-2">
                                    <div class="flex text-yellow-400">
                                        <span v-for="n in 5" :key="n">
                                            <svg v-if="n <= product.rating" xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <span class="text-sm text-gray-600 ml-1">({{ product.reviews }})</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <div>
                                        <span class="text-lg font-bold text-[#2D2D2D]">{{ product.price }}</span>
                                        <span v-if="product.originalPrice"
                                            class="text-sm text-gray-500 line-through ml-2">{{ product.originalPrice
                                            }}</span>
                                    </div>
                                    <button class="btn-primary px-3 py-1 rounded-lg text-white text-sm font-medium">
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Vantagens -->
            <section class="py-16 bg-white">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center mb-12">Por que escolher o DesapegaAí?</h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="flex items-start">
                            <div class="bg-[#247BA0] rounded-full p-3 mr-4 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold mb-2">Compra Segura</h3>
                                <p class="text-[#2D2D2D]">Sistema de verificação de perfis e avaliações para garantir
                                    transações confiáveis.</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="bg-[#247BA0] rounded-full p-3 mr-4 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold mb-2">Privacidade Protegida</h3>
                                <p class="text-[#2D2D2D]">Seus dados pessoais são protegidos e nunca compartilhados com
                                    terceiros.</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="bg-[#247BA0] rounded-full p-3 mr-4 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold mb-2">Economia Garantida</h3>
                                <p class="text-[#2D2D2D]">Encontre produtos com até 70% de desconto em relação ao preço
                                    de mercado.</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="bg-[#247BA0] rounded-full p-3 mr-4 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold mb-2">Comunidade Ativa</h3>
                                <p class="text-[#2D2D2D]">Faça parte de uma comunidade de mais de 500 mil usuários em
                                    todo o Brasil.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Final -->
            <section class="py-16 bg-gradient-to-r from-[#FF6B35] to-[#F2CC0F] text-white">
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-3xl font-bold mb-6">Pronto para começar?</h2>
                    <p class="text-xl mb-8 max-w-2xl mx-auto">Junte-se a milhares de pessoas que já economizam e ganham
                        dinheiro no DesapegaAí!</p>

                    <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <button
                            @click="router.push('/register')"
                            class="bg-white text-[#2D2D2D] px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#2D2D2D] hover:text-white transition-colors cursor-pointer">
                            Cadastre-se Grátis
                        </button>
                        <button
                            class="border-2 border-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-[#2D2D2D] transition-colors">
                            Saiba Mais
                        </button>
                    </div>
                </div>
            </section>

            <!-- Footer -->
            <footer class="bg-[#2D2D2D] text-white py-12">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div class="flex items-center space-x-2 mb-4">
                                <div class="w-12 h-10   flex items-center justify-center">
                                    <img src="/logo.png" alt="">
                                </div>
                                <h3 class="text-xl font-bold">DesapegaAí</h3>
                            </div>
                            <p class="text-gray-400">O marketplace de confiança para comprar e vender com segurança.</p>
                        </div>

                        <div>
                            <h4 class="font-bold text-lg mb-4">Links Rápidos</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Início</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Sobre Nós</a>
                                </li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Como
                                        Funciona</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contato</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 class="font-bold text-lg mb-4">Categorias</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Eletrônicos</a>
                                </li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Moda</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Casa e
                                        Decoração</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Esportes</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 class="font-bold text-lg mb-4">Contato</h4>
                            <ul class="space-y-2">
                                <li class="text-gray-400">contato@desapegai.com</li>
                                <li class="text-gray-400">(11) 99999-9999</li>
                                <li class="flex space-x-4 mt-4">
                                    <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </a>
                                    <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 DesapegaAí. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>


    </body>

    
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();

const featuredProducts = ref([
    {
        id: 1,
        name: "Smartphone Samsung Galaxy S20",
        price: "R$ 1.299",
        originalPrice: "R$ 2.199",
        discount: "-40%",
        rating: 4,
        reviews: 128,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        name: "Fone de Ouvido Sony WH-1000XM4",
        price: "R$ 899",
        originalPrice: "R$ 1.499",
        discount: "-40%",
        rating: 5,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        name: "Tênis Nike Air Max 270",
        price: "R$ 299",
        originalPrice: "R$ 499",
        discount: "-40%",
        rating: 4,
        reviews: 203,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        name: "Smartwatch Apple Watch Series 6",
        price: "R$ 1.599",
        originalPrice: "R$ 2.499",
        discount: "-36%",
        rating: 5,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1579586337278-3f436f4a6e1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
]);
</script>

<style scoped>
/* Estilos personalizados */
.btn-primary {
    background-color: #FF6B35;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
}

.btn-secondary {
    background-color: #247BA0;
    transition: all 0.3s ease;
}

.btn-secondary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(36, 123, 160, 0.4);
}

.highlight {
    background-color: #F2CC0F;
}

.card-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(45, 45, 45, 0.1);
}

.pulse-animation {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
    }
}
</style>