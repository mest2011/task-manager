<template>
  <div :class="{ 'bg-dark text-white': isDark, 'bg-light text-dark': !isDark }" style="min-height: 100vh">
    <header :class="['py-4 shadow-sm', isDark ? 'bg-dark ' : 'bg-white']">
      <div class="container d-flex justify-content-between align-items-center">
        <h1 class="h3 mb-0">Task Manager</h1>

        <nav class="d-flex align-items-center gap-3">
          <RouterLink to="/tasks" class="text-decoration-none" :class="navLinkClass">Tarefas</RouterLink>
          <RouterLink to="/about" class="text-decoration-none" :class="navLinkClass">Sobre</RouterLink>

          <button class="btn btn-outline-primary position-absolute bottom-0 end-0 m-4" @click="toggleDark">
            {{ isDark ? '☀️' : '🌙' }}
          </button>
        </nav>
      </div>
    </header>

    <main class="container py-4">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isDark = ref(localStorage.getItem('theme') === 'dark')

const toggleDark = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

watchEffect(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

const navLinkClass = () => isDark.value ? 'text-white' : 'text-dark'
</script>
