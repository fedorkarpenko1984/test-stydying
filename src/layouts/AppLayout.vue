<template>
  <EmptyLayout v-if="layout === 'empty'">
    <slot />
  </EmptyLayout>
  <DefaultLayout v-else>
    <slot />
  </DefaultLayout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import DefaultLayout from './DefaultLayout.vue'
import EmptyLayout from './EmptyLayout.vue'
import { computed } from 'vue'
import { TLayout } from '../types'

const route = useRoute()

const layout = computed<TLayout>(() => {
  return route.meta.layout as TLayout || 'default'
})
</script>

<style scoped>

</style>