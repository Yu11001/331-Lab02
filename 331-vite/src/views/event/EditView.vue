<script setup lang="ts">
import {toRefs} from 'vue'
import {type Event} from '@/types'
import { useRouter } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

const props=defineProps<{
    event: Event,
    id:String
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {event}=toRefs(props)
const store = useMessageStore()
const { message } = storeToRefs(store)
const router=useRouter()
const edit=()=>{
    router.push({name:'event-detail-view'})
    store.updateMessage('You are successufully updated data for ' + props.event.title)
    setTimeout(() => {
        store.resetMessage()
    }, 3000)
    router.push({ name: 'event-detail-view', params: { id: props.event.id}})
}
</script>


<template>
    <p>Edit event</p>
    <button @click="edit">Edit</button>
</template>