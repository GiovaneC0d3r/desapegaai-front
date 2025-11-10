<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
console.log('VARIAVEIS DE AMBIENTE: ',import.meta.env)
const auth = useAuthStore()

</script>    
<template>
    <RouterView />

</template>

<style >
  @import "tailwindcss" ; 
</style>