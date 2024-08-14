<script setup lang="ts">
  import StudentCard from '@/components/StudentCard.vue'
  import { ref, onMounted } from 'vue'
  import StudentService from '@/services/StudentService'
  import type { Student } from '@/types';

  const students = ref<Student[] | null>(null)

  onMounted(() =>{
    StudentService.getEvent()
    .then((response) =>{
      // console.log(response.data)
      students.value = response.data
    })
    .catch((error) =>{
      console.error('There was an error!', error)
    })
  })
</script>

<template>
  <h1>Students List</h1>
  <!-- new element -->
  <div class="flex flex-col items-center">
    <StudentCard v-for="student in students" :key="student.id" :student="student" />
  </div>
</template>