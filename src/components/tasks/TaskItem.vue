<script setup>
import BaseButton from '@/components/base/BaseButton.vue'
import { PhTrashSimple, PhPencilSimple, PhCheck } from '@phosphor-icons/vue'
import { useTasksStore } from '@/stores/tasks'
import { ref } from 'vue'
import { useNotifications } from '@/composables/useNotification'
import { useEventBus } from '@vueuse/core'

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const bus = useEventBus('openModal')

const isLoading = ref(false)
const tasksStore = useTasksStore()
const toast = useNotifications()

async function handleDelete() {
  try {
    isLoading.value = true

    await tasksStore.deleteTask(props.task.id)
  } catch (error) {
    toast.error('Algo deu errado ao apagar a tarefa. Tente novamente mais tarde')
  } finally {
    isLoading.value = false
  }
}

function handleEdit(task) {
  bus.emit(task)
}
</script>

<template>
  <li
    class="p-4 border-l-4 border border-zinc-900 border-b-0 border-r border-t grid gap-4 lg:flex lg:items-center lg:justify-between"
  >
    <div class="grid gap-4">
      <span class="bg-zinc-300 rounded max-w-max px-2 py-1 text-sm" v-if="task.category">{{
        task.category
      }}</span>
      <p class="text-lg">
        {{ task.title }}
      </p>
    </div>

    <div class="flex items-center gap-4">
      <BaseButton
        variant="icon"
        class="border bg-blue-200"
        @click="tasksStore.completeTask(task.id)"
      >
        <template #icon>
          <PhCheck size="19" />
        </template>
      </BaseButton>

      <BaseButton variant="icon" class="border" @click="handleEdit(task)">
        <template #icon>
          <PhPencilSimple size="19" />
        </template>
      </BaseButton>

      <BaseButton variant="icon" class="bg-red-100" @click="handleDelete" :loading="isLoading">
        <template #icon>
          <PhTrashSimple size="18" />
        </template>
      </BaseButton>
    </div>
  </li>
</template>
