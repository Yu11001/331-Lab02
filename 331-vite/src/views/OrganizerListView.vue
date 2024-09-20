<script setup lang="ts">
  import OrganizerCard from '@/components/OrganizerCard.vue';
  import { type Organizer } from '@/types';
  import {ref,onMounted,computed,watchEffect} from 'vue'
  import OrganizerService from '@/services/OrganizerService'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const organizers=ref<Organizer[] | null>(null)
  const totalOrganizers=ref(0)

  const hasNextPage=computed(()=>{
    const totalPages=Math.ceil(totalOrganizers.value/2)
    return page.value<totalPages
  })
  const props=defineProps({
    page:{
      type:Number,
      required:true
    },
    pageSize:{
      type:Number,
      required:true
    }
  })

  const page=computed(()=>props.page);
  onMounted(()=>{
    watchEffect(()=>{
      OrganizerService.getOrganizers(2, page.value)
      .then((response)=>{
        organizers.value=response.data
        totalOrganizers.value=response.headers['x-total-count']
      })
      .catch(()=>{
        router.push({name: 'network-error-view'})
      })
    })
  })
</script>

<template>
  <!--new element-->
  <div class="flex flex-col items-center">
  <h1>Organizers For Events</h1>
  <OrganizerCard v-for="organizer in organizers" :key="organizer.id" :organizer="organizer"/>

  <div class="flex w-[290px]">
    <RouterLink class="flex-1 no-underline text-[#2c3e50] text-left"
    id="page-prev" 
    :to="{name: 'organizer-list-view', query:{page: page-1,pageSize:props.pageSize}}"
    rel="prev"
    v-if="page != 1">
    &#60; Prev Page</RouterLink>

    <RouterLink class="flex-1 no-underline text-[#2c3e50] text-right" 
    id="page-next"
    :to="{name:'organizer-list-view', query:{page: page+1,pageSize:props.pageSize}}"
    rel="next"
    v-if="hasNextPage">
    Next Page &#62;
    </RouterLink>
  </div>
</div>
</template>