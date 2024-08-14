<script setup lang="ts">
import {ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from './stores/message'
import { storeToRefs } from 'pinia'

const store = useMessageStore()
const { message } = storeToRefs(store)
const pageSize = ref(2);
</script>

<template>
  <div class="text-center font-sans text-gray-700 antialiased">
    <header>
      <div id="flashMessage" class="animate-fade" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <h1>Deploy with Vercel ^^</h1>
      <div class="wrapper">
        <nav class="p-[30px]">
          <!-- <EventCard>Event</EventCard> |  -->
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-[#42b983]" :to="{ name: 'event-list-view', query:{pageSize:pageSize}}">Event</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{name:'about'}">About</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{name:'student'}">Student</RouterLink>
        </nav>
      </div>
    </header>
  <RouterView />
  </div>
</template>