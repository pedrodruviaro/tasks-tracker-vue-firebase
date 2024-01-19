<script setup>
import { signOut } from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { useRouter } from 'vue-router'
import { useNotifications } from '@/composables/useNotification'
import { ref } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { PhSignOut } from '@phosphor-icons/vue'

const router = useRouter()
const toast = useNotifications()
const auth = useFirebaseAuth()
const user = useCurrentUser()
const isLoading = ref(false)

async function logout() {
  try {
    isLoading.value = true

    await signOut(auth)

    toast.success('Deslogado com sucesso. Te vejo mais tarde!')
    router.push({ name: 'login' })
  } catch (error) {
    toast.error('Algo deu errado. Recarregue a página e tente novamente')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <header class="py-5 shadow-md">
    <div class="wrapper flex justify-between items-center gap-6 flex-col md:flex-row">
      <span class="font-mono text-lg lg:text-xl">Tasks Tracker</span>

      <div v-if="user" class="flex gap-4 flex-1 justify-between">
        <BaseButton :link="true" :to="{ name: 'dashboard' }">Meu painel</BaseButton>

        <BaseButton @click="logout" :loading="isLoading" variant="outlined">
          Sair
          <template #icon>
            <PhSignOut />
          </template>
        </BaseButton>
      </div>
    </div>
  </header>
</template>
