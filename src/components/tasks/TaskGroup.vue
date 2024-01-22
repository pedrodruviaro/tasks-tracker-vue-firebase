<script setup>
import BaseButton from '@/components/base/BaseButton.vue'
import moment from 'moment'
import { PhTrashSimple, PhPencilSimple } from '@phosphor-icons/vue'
import { computed } from 'vue'

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
      <li
        v-for="task in taskGroup"
        :key="task.id"
        class="p-4 border-l-4 border border-zinc-900 border-b-0 border-r border-t grid gap-4 lg:flex lg:items-center lg:justify-between"
        :class="{ 'bg-red-300': isTaskLate }"
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
</template>

<style scoped>
li:first-child {
  @apply rounded-tl-md rounded-tr-md;
}

li:last-child {
  @apply rounded-bl-md rounded-br-md border-b;
}
</style>
