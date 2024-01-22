<script setup>
import TaskGroup from '@/components/tasks/TaskGroup.vue'
import { useTasksStore } from '@/stores/tasks'
import { onBeforeUnmount } from 'vue'

const tasksStore = useTasksStore()

const { unsubscribe } = tasksStore.getTasks()

onBeforeUnmount(() => unsubscribe())
</script>

<template>
  <section class="mt-10">
    <div class="wrapper grid gap-8" v-if="tasksStore.tasks.length > 0">
      <TaskGroup
        v-for="(taskGroup, date) of tasksStore.tasksByDate"
        :key="date"
        :taskGroup="taskGroup"
        :date="date"
      />
    </div>

    <div class="wrapper" v-else>
      <p class="text-lg">Sem tarefas cadastradas.</p>
    </div>
  </section>
</template>
