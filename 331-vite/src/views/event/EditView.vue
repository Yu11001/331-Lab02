<script setup lang="ts">
import {toRefs} from 'vue'
import {type Passenger} from '@/types'
import { useMessageStore } from '@/stores/message'
import { useRouter } from 'vue-router'
const router = useRouter()
const props=defineProps<{
    passenger: Passenger,
    id:String
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {passenger}=toRefs(props)
const store = useMessageStore()
const edit=()=>{
    router.push({name:'passenger-detail-view'})
    store.updateMessage('You are successufully updated data for ' + props.passenger.name)
    setTimeout(() => {
        store.resetMessage()
    }, 5000)
    router.push({ name: 'home', params: { id: props.passenger._id}})
}
</script>


<template>
    <p>Edit User Data</p>
    <button @click="edit">Edit</button>

</template>