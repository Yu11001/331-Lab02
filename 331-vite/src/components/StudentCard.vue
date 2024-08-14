<script setup lang="ts">
import {type Student} from '@/types'
defineProps<{
  student: Student
}>()
</script>

<template>
  <div class ="student-class">
    <div class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp">
      <h2 class="text-[20px]">{{ student.name }} {{ student.surname }}</h2>
      <span>gpa is  {{ student.gpa }}</span>
    </div>
  </div>
</template>