<script setup>
import BaseButton from '@/components/base/BaseButton.vue'
import { PhGoogleLogo } from '@phosphor-icons/vue'
</script>

<template>
  <section class="wrapper pt-10">
    <div class="grid gap-5 justify-items-center items-center">
      <h1 class="font-semibold text-4xl lg:text-6xl">Tasks Tracker</h1>
      <p class="text-center max-w-[35ch]">
        Gerencie suas tarefas de forma fácil e aumente a produvidiade
      </p>

      <BaseButton class="max-w-max">
        Login with Google
        <template #icon>
          <PhGoogleLogo />
        </template>
      </BaseButton>
    </div>
  </section>
</template>
