<script setup>
import BaseButton from './components/base/BaseButton.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <RouterView />
    </template>

    <template #fallback>
      <section>
        <BaseButton :loading="true">Loading...</BaseButton>
      </section>
    </template>
  </Suspense>
</template>
