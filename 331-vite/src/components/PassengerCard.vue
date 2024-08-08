<script setup lang="ts">
import {type Passenger} from '@/types'
defineProps<{
    passenger: Passenger
}>()
</script>

<template>
    <div class="passenger-lists">
      <RouterLink class="link" :to="{ name: 'passenger-detail-view', params: { id: passenger._id } }">
        <div class="passenger-item">
          <p>{{ passenger.name }}</p>
        </div>
      </RouterLink>
    </div>
  </template>

<style scoped>
.event-card{
    padding: 20px;
    width:250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
}
.event-card:hover{
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link{
    text-decoration: none;
    color: #2c3e50;
}
</style>