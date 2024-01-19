<script setup>
defineProps(['modelValue'])

const emit = defineEmits(['update:modelValue'])

function updateValue(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <input
    @change="updateValue"
    :value="modelValue"
    class="w-full block border border-zinc-300 rounded px-3 py-2 focus:outline-zinc-900 mt-1"
  />
</template>
