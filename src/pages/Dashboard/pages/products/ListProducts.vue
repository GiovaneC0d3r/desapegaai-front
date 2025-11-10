<template>
    <div v-for="product in productStore.products" :key="product.id" class="product-card">

        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <p>{{ formatBRL(product.price)  }}</p>
        <div class="media-gallery">
            <div v-for="media in product.medias" :key="media" class="media-item">
                <img :src="media" class="w-32 h-32" alt="">
                <component class="w-32 h-32" :is="getMediaComponent(media)" :src="media"  controls />
            </div>
        </div>

    </div>

</template>


<script setup lang="ts">
import { onMounted } from 'vue'
import { formatBRL } from '@/utils/utils'
import { useProductStore } from '@/stores/products'
const productStore = useProductStore()

onMounted(async () => {
  await productStore.listMyProducts()
})

console.log(productStore.products)

function getMediaComponent(url: string) {
    const isVideo = url.match(/\.(mp4|mov|avi|webm|mkv)$/i)
    return isVideo ? 'video' : 'img'
}

</script>