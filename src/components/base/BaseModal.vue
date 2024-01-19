<script setup>
import { PhX } from '@phosphor-icons/vue'

defineProps(['modelValue'])

const emit = defineEmits(['update:modelValue'])

function close() {
  emit('update:modelValue', false)
}
</script>

<template>
  <Teleport to="body">
    <div
      @click.self="close"
      v-if="modelValue"
      class="fixed inset-0 bg-zinc-700 bg-opacity-50 grid place-items-center"
    >
      <div class="bg-zinc-50 rounded-md shadow-sm p-4 relative w-full mx-4 max-w-[40rem]">
        <button
          @click="close"
          aria-label="Fechar modal"
          class="absolute top-4 right-4 cursor-pointer"
        >
          <PhX size="20" />
        </button>
        <slot />
      </div>
    </div>
  </Teleport>
</template>
