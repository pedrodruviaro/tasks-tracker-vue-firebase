<script setup>
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTextarea from '@/components/base/BaseTextarea.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import { PhArrowSquareOut } from '@phosphor-icons/vue'
import { computed, reactive } from 'vue'
import { useTasksStore } from '@/stores/tasks'
import { categoryOptions } from '@/common/categories'
import moment from 'moment'

const tasksStore = useTasksStore()

const props = defineProps({
  task: {
    type: Object,
    required: false
  }
})

const emit = defineEmits(['submited'])

const initialState = {
  title: '',
  date: moment(new Date()).format('YYYY-MM-DD'),
  category: categoryOptions[0]
}

if (props.task) {
  initialState.title = props.task.title
  initialState.date = moment(props.task.finish_by).format('YYYY-MM-DD')
  initialState.category = props.task.category
}

const state = reactive(initialState)

async function handleSubmit() {
  const action = props.task ? 'editTask' : 'createTask'

  let task = {
    title: state.title,
    finish_by: moment(state.date).format(),
    category: state.category,
    is_finished: props.task?.is_finished || false
  }

  if (action === 'editTask') {
    task.id = props.task.id
  }

  const response = await tasksStore[action](task)

  if (response.success && !response.error) {
    emit('submited', true)
  }
}

const buttonLabel = computed(() => {
  return props.task ? 'Editar' : 'Criar'
})
</script>

<template>
  <form @submit.prevent="handleSubmit" class="grid gap-4">
    <label>
      Task
      <BaseTextarea
        v-auto-focus
        v-model="state.title"
        placeholder="Estudar por 15min..."
        label="Task"
        required
      />
    </label>

    <div>
      <label>
        Categoria
        <BaseSelect
          v-model="state.category"
          :options="categoryOptions"
          emptyOption="Selecione"
          required
        />
      </label>
    </div>

    <label>
      Data de entrega
      <BaseInput v-model="state.date" type="date" required />
    </label>

    <BaseButton type="submit" class="w-full" :loading="tasksStore.isLoading">
      {{ buttonLabel }}

      <template #icon>
        <PhArrowSquareOut />
      </template>
    </BaseButton>
  </form>
</template>
