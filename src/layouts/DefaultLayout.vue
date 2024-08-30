<template>
  <div>
    <AppHeader />
    <NavMenu :items="items" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue';
import NavMenu from '../components/NavMenu.vue'
import type { TMenuItem } from '../types'

const items: TMenuItem[] = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Todo',
    path: '/todo'
  },
  {
    title: 'Canban',
    path: '/canban'
  },
]
</script>

<style scoped>

</style>