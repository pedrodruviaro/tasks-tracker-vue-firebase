<script setup>
import BaseButton from '@/components/base/BaseButton.vue'
import { PhGoogleLogo } from '@phosphor-icons/vue'
import { useFirebaseAuth } from 'vuefire'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'

const isLoading = ref(false)

const provider = new GoogleAuthProvider()
const auth = useFirebaseAuth()
const router = useRouter()
const route = useRoute()

async function loginWithGoogle() {
  try {
    isLoading.value = true

    const response = await signInWithPopup(auth, provider)

    if (!response.user) {
      // erro
    }

    const redirect = route.query.redirect || '/dashboard'

    router.push(redirect)
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section class="wrapper pt-10">
    <div class="grid gap-5 justify-items-center items-center">
      <h1 class="font-semibold text-4xl lg:text-6xl">Tasks Tracker</h1>
      <p class="text-center max-w-[35ch]">
        Gerencie suas tarefas de forma fácil e aumente a produvidiade
      </p>

      <BaseButton class="max-w-max" @click="loginWithGoogle" :loading="isLoading">
        Login with Google
        <template #icon>
          <PhGoogleLogo />
        </template>
      </BaseButton>
    </div>
  </section>
</template>
