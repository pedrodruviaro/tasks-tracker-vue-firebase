<script setup>
import { ref } from 'vue'
import { PhPlusCircle } from '@phosphor-icons/vue'
import BaseModal from '@/components/base/BaseModal.vue'
import BaseButton from '@/components/base/BaseButton.vue'

import TaskForm from '@/components/tasks/TaskForm.vue'

const isModalOpen = ref(false)
</script>

<template>
  <section>
    <div class="wrapper flex items-center flex-wrap gap-4 justify-between">
      <h2 class="font-semibold text-2xl">Tarefas</h2>
      <BaseButton @click="isModalOpen = true">
        Add
        <template #icon>
          <PhPlusCircle />
        </template>
      </BaseButton>
    </div>
  </section>

  <BaseModal v-model="isModalOpen">
    <h2 class="font-semibold text-lg mb-4">Criar nova task</h2>
    <TaskForm />
  </BaseModal>
</template>
