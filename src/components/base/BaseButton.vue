<script setup>
import { PhCircleNotch } from '@phosphor-icons/vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  variant: {
    type: String,
    required: false,
    default: 'filled',
    validator: (propValue) => {
      const options = ['filled', 'outlined', 'icon']

      return options.some((v) => v !== propValue)
    }
  },
  loading: {
    type: Boolean,
    required: false,
    default: false
  },
  link: {
    type: Boolean,
    required: false,
    default: false
  },
  to: {
    type: [String, Object],
    required: false,
    default: '/'
  }
})

const baseButtonRef = ref('')
</script>

<template>
  <button :class="[variant]" :disabled="loading" ref="baseButtonRef" v-if="!link">
    <slot name="default" v-if="!loading" />
    <slot name="icon" v-if="!loading" />

    <span v-else>
      <PhCircleNotch class="animate-spin" />
    </span>
  </button>

  <RouterLink v-else ref="baseButtonRef" :class="[variant]" :to="to">
    <slot name="default" v-if="!loading" />
    <slot name="icon" v-if="!loading" />

    <span v-else>
      <PhCircleNotch class="animate-spin" />
    </span>
  </RouterLink>
</template>

<style scoped>
a,
button {
  @apply flex items-center justify-center gap-4 px-5 py-3  rounded shadow-sm text-center disabled:opacity-70 min-h-[50px] cursor-pointer;
}

.filled {
  @apply bg-zinc-900 text-zinc-50;
}

.outlined {
  @apply bg-transparent text-zinc-900 border border-zinc-900;
}

.icon {
  @apply w-12 h-12 !p-0  !min-w-0 !min-h-0;
}
</style>
