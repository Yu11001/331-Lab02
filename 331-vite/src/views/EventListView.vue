<script setup lang="ts">
  import EventCard from '@/components/EventCard.vue'
  import CategoryCard from '@/components/CategoryCard.vue'
  import Event from '@/types/Event'
  import { ref, onMounted } from 'vue'
  import axios from 'axios'

  const events = ref<Event[]>(null)

  onMounted(() =>{
    axios
    .get('https://my-json-server.typicode.com/Yu11001/331-Lab2-db/events')
    .then((response) =>{
      // console.log(response.data)
      events.value = response.data
    })
    .catch((error) =>{
      console.error('There was an error!', error)
    })
  })
</script>

<template>
  <h1>Events For Good</h1>
  <!-- new element -->
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <CategoryCard v-for="eventi in events" :key="eventi.id" :event="eventi" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>