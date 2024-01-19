<script setup>
import { signOut } from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = useFirebaseAuth()

async function logout() {
  try {
    await signOut(auth)

    router.push({ name: 'login' })
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <header class="py-5 shadow-md">
    <div class="wrapper flex justify-between items-center">
      <span class="font-mono text-lg lg:text-xl">Tasks Tracker</span>

      <button @click="logout">Logout</button>
    </div>
  </header>
</template>
