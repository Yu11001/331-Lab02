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
      <div id="flashMessage" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <div class="wrapper">
        <nav>
          <!-- <EventCard>Event</EventCard> |  -->
          <RouterLink :to="{ name: 'event-list-view', query:{pageSize:pageSize}}">Event</RouterLink> |
          <RouterLink :to="{name:'about'}">About</RouterLink> |
          <RouterLink :to="{name:'student'}">Student</RouterLink>
        </nav>
      </div>
    </header>
  <RouterView />
  </div>
</template>

<style>

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  font-size: 20px;
}

@keyframes yellofade {
  from{
    background-color: yellow;
  }
  to{
    background-color: transparent;
  }
}

#flashMessage {
  animation: yellofade 3s ease-in-out;
}
</style>
