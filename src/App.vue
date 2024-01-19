<script setup>
import UiHeader from '@/components/ui/UiHeader.vue'
import SectionCreateTask from '@/components/tasks/SectionCreateTask.vue'
import SectionTasksList from '@/components/tasks/SectionTasksList.vue'
</script>

<template>
  <UiHeader />

  <main class="my-10">
    <SectionCreateTask />
    <SectionTasksList />
  </main>
</template>
