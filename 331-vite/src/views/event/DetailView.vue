<script setup lang="ts">
import {toRefs,defineProps} from 'vue'
import { type Passenger }from '@/types'

const props=defineProps<{
    passenger : Passenger,
    id:String
}>()

const { passenger }= toRefs(props);
</script>


<template>
    
        <h3>{{ passenger.name }}</h3>
        <p>{{ passenger.trips }}</p>
    

</template>