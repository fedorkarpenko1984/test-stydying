<template>
  <nav class="flex gap-5 flex-col w-[100px]">
    <button
      v-for="item in items"
      :key="item.path"
      class="px-5 py-2.5 text-white rounded transition-all duration-700"
      :class="currentItem.title === item.title ? 'bg-[#666]' : 'bg-[#ccc]'"
      @click="menuItemClickHandler(item)"
    >
      {{ item.title }}
    </button>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from 'vue-router'
import type { TMenuItem } from '../types'

const props = defineProps<{
  items: TMenuItem[]
}>()

const router = useRouter()

const currentItem = ref<TMenuItem>(props.items[0])

function menuItemClickHandler(item: TMenuItem) {
  if (currentItem.value.title === item.title) return
  currentItem.value = item
  router.push(item.path)
}
</script>

<style scoped>

</style>