<script setup lang="ts">
import {type Event} from '@/types'
defineProps<{
  event: Event
}>()
</script>

<template>
  <div class ="event-class">
    <div class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp">
      <h2 class="text-[20px]">{{ event.category }}</h2>
      <span>{{ event.organizer }}</span>
    </div>
  </div>
</template>