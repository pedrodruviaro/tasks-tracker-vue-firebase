<script setup>
import BaseButton from '@/components/base/BaseButton.vue'
import { PhTrashSimple, PhPencilSimple } from '@phosphor-icons/vue'
import { useTasksStore } from '@/stores/tasks'

const tasksStore = useTasksStore()
</script>

<template>
  <section class="mt-10">
    <div class="wrapper grid gap-8">
      <article v-for="(taskGroup, date) of tasksStore.tasksByDate" :key="date">
        <h3 class="font-semibold text-lg mb-2">{{ date }}</h3>

        <ul>
          <li
            v-for="task in taskGroup"
            :key="task.id"
            class="p-4 border-l-4 border border-zinc-900 grid gap-4"
          >
            <span class="bg-zinc-300 rounded max-w-max px-2 py-1 text-sm">{{ task.category }}</span>
            <p class="text-lg">
              {{ task.title }}
            </p>
            <div class="flex items-center gap-4">
              <BaseButton variant="icon" class="border">
                <template #icon>
                  <PhPencilSimple size="19" />
                </template>
              </BaseButton>

              <BaseButton variant="icon" class="bg-red-100">
                <template #icon>
                  <PhTrashSimple size="18" />
                </template>
              </BaseButton>
            </div>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
li:first-child {
  @apply rounded-tl-md rounded-tr-md;
}

li:last-child {
  @apply rounded-bl-md rounded-br-md;
}
</style>
