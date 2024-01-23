<script setup>
import moment from 'moment'
import { computed } from 'vue'
import TaskItem from '@/components/tasks/TaskItem.vue'

const props = defineProps({
  date: {
    type: String,
    required: true
  },
  taskGroup: {
    type: Object,
    required: true
  }
})

const isTaskLate = computed(() => {
  const formatedTaskDate = props.date.split('/').reverse().join('-')
  const today = moment().startOf('day')

  return moment(formatedTaskDate).isBefore(today)
})
</script>

<template>
  <article>
    <h3 class="font-semibold text-lg mb-2">{{ date }}</h3>

    <ul>
      <TaskItem
        v-for="task in taskGroup"
        :key="task.id"
        :task="task"
        :class="{ 'bg-red-300': isTaskLate }"
      />
    </ul>
  </article>
</template>

<style scoped>
li:first-child {
  @apply rounded-tl-md rounded-tr-md;
}

li:last-child {
  @apply rounded-bl-md rounded-br-md border-b;
}
</style>
