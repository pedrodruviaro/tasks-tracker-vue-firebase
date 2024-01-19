<script setup>
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTextarea from '@/components/base/BaseTextarea.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import { PhArrowSquareOut } from '@phosphor-icons/vue'
import { ref } from 'vue'
import { useTasksStore } from '@/stores/tasks'

const categoryOptions = ['Estudo', 'Trabalho']

const tasksStore = useTasksStore()

const enteredTitle = ref('')
const enteredDate = ref('')
const enteredCategory = ref('')

function handleSubmit() {
  const newTask = {
    title: enteredTitle.value,
    finish_by: enteredDate.value,
    category: enteredCategory.value
  }

  tasksStore.createTask(newTask)
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="grid gap-4">
    <label>
      Task
      <BaseTextarea
        v-auto-focus
        v-model="enteredTitle"
        placeholder="Estudar por 15min..."
        label="Task"
      />
    </label>

    <label>
      Data de entrega
      <BaseInput v-model="enteredDate" type="date" />
    </label>

    <label>
      Categoria
      <BaseSelect v-model="enteredCategory" :options="categoryOptions" emptyOption="Selecione" />
    </label>

    <BaseButton type="submit" class="w-full"
      >Criar

      <template #icon>
        <PhArrowSquareOut />
      </template>
    </BaseButton>
  </form>
</template>
