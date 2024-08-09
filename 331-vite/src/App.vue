<script setup lang="ts">
import {ref} from 'vue'
import { useMessageStore } from './stores/message'
import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'

const pageSize = ref(10);
const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <div id="layout">
    
    <header>
      <div id="flashMessage" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <div class="wrapper">
        <nav>
          <!-- <EventCard>Event</EventCard> |  -->
          <RouterLink :to="{ name: 'home', query: { pageSize: pageSize } }">Passengers</RouterLink>
        </nav>
      </div>
    </header>
  <RouterView />
  </div>
</template>

<style>

#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #248f8e;
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
