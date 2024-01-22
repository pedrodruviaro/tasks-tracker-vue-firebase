<script setup>
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTextarea from '@/components/base/BaseTextarea.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import { PhArrowSquareOut } from '@phosphor-icons/vue'
import { ref } from 'vue'
import { useTasksStore } from '@/stores/tasks'
import moment from 'moment'

const categoryOptions = ['Estudo', 'Trabalho']
const emit = defineEmits(['submited'])

const tasksStore = useTasksStore()

const enteredTitle = ref('')
const enteredDate = ref('')
const enteredCategory = ref('')

async function handleSubmit() {
  const newTask = {
    title: enteredTitle.value,
    finish_by: moment(enteredDate.value).format(),
    category: enteredCategory.value,
    is_finished: false
  }

  const response = await tasksStore.createTask(newTask)

  if (response.success && !response.error) {
    emit('submited', true)
  }
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

    <BaseButton type="submit" class="w-full" :loading="tasksStore.isLoading.create"
      >Criar

      <template #icon>
        <PhArrowSquareOut />
      </template>
    </BaseButton>
  </form>
</template>
