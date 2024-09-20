<script setup lang="ts">
import {toRefs,defineProps} from 'vue'
import {type Organizer} from '@/types'

const props=defineProps<{
    organizer: Organizer,
    id:String
}>()

const {organizer}= toRefs(props);
</script>


<template>
        <!-- <p>{{ event.time }} on {{ event.date }} @{{ event.location }}</p> -->
        <p>{{ organizer.title }} @ {{ organizer.location }}</p>
        <p>{{ organizer.description }}</p>
</template>