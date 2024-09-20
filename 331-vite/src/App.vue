<script setup lang="ts">
import {ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from './stores/message'
import { storeToRefs } from 'pinia'
import { SpeedInsights } from '@vercel/speed-insights/vue';

const store = useMessageStore()
const { message } = storeToRefs(store)
const pageSize = ref(2);
</script>

<template>
  <SpeedInsights />
  <div class="text-center font-sans text-gray-700 antialiased">
    <header>
      <div id="flashMessage" class="animate-fade" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <h1>Deploy with Vercel ^^</h1>
      <div class="wrapper">
        <nav class="p-[30px]">
          <!-- <EventCard>Event</EventCard> |  -->
          <!-- <RouterLink class="font-bold text-gray-700" exact-active-class="text-[#42b983]" :to="{ name: 'event-list-view', query:{pageSize:pageSize}}">Event</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{name:'about'}">About</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{name:'student'}">Student</RouterLink> -->
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'event-list-view', query: { pageSize: pageSize } }"
            >Event</RouterLink
          >
          <!-- |
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'organizer-list-view', query: { pageSize: pageSize } }"
            >Organizer</RouterLink
          > -->
          |
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'about' }"
            >About</RouterLink
          >
          |
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'add-event' }"
            >New Event</RouterLink
          >
          |
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'add-organizer' }"
            >New Organizer</RouterLink
          >
          |
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'student' }"
            >Students</RouterLink
          >
        </nav>
      </div>
    </header>
  <RouterView />
  </div>
</template>