<script setup>
import SectionCreateTask from '@/components/tasks/SectionCreateTask.vue'
import SectionTasksList from '@/components/tasks/SectionTasksList.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <SectionCreateTask />
    <SectionTasksList />
  </DefaultLayout>
</template>
