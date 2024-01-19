<script setup>
defineProps(['modelValue'])

const emit = defineEmits(['update:modelValue'])

function updateValue(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <textarea
    @change="updateValue"
    :value="modelValue"
    class="resize-none w-full block border border-zinc-300 rounded px-3 py-2 focus:outline-zinc-900 min-h-24 mt-1"
  ></textarea>
</template>
