<template>
  <div
    class="cursor-pointer rounded-full border-[1px] border-solid border-[#ccc] w-10 h-10 flex justify-center items-center text-2xl text-[#ccc]"
    @click="router.back()"
  ><</div>
  <slot />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<style scoped>

</style>