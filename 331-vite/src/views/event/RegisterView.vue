<script setup lang="ts">
import {toRefs} from 'vue'
import {type Passenger} from '@/types'
import { useRouter } from 'vue-router';
const props=defineProps<{
    passenger: Passenger,
    id:String
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {passenger}=toRefs(props);
const router=useRouter()
const register=()=>{
    //if the registration API call successful
    //push back to the event details view
    router.push({name:'passenger-detail-view'})
}
</script>


<template>
    <p>Register event here</p>
    <button @click="register">Register</button>

</template>