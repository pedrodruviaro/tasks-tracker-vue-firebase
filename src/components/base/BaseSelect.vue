<script setup>
defineProps(['modelValue', 'options', 'emptyOption'])

const emit = defineEmits(['update:modelValue'])

function updateValue(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <select
    :value="modelValue"
    @change="updateValue"
    class="w-full block border border-zinc-300 rounded px-3 py-2 focus:outline-zinc-900 mt-1"
  >
    <option value="" v-if="emptyOption !== ''">{{ emptyOption }}</option>
    <option v-for="option in options" :value="option" :key="option">{{ option }}</option>
  </select>
</template>
