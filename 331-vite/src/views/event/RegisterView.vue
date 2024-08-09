<script setup lang="ts">
import {toRefs} from 'vue'
import { type Passenger } from '@/types'
import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';
const props=defineProps<{
    passenger: Passenger,
    id:String
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {passenger}=toRefs(props);
const store = useMessageStore()
const router=useRouter()
const register=()=>{
    //if the registration API call successful
    //push back to the event details view
    router.push({name:'passenger-detail-view'})
    store.updateMessage('You are successufully registered for ' + props.passenger.name)
    setTimeout(() => {
        store.resetMessage()
    }, 3000)
    router.push({ name: 'passenger-detail-view', params: { id: props.passenger._id}})
}
</script>


<template>
    <p>Register event here</p>
    <button @click="register">Register</button>

</template>