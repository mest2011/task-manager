<template>
  <div class="container py-4">
    <h1 class="h3 mb-4">Lista de Tarefas</h1>

    <TaskForm @add="addTask" />

    <TaskList
      :tasks="store.tasks"
      :loading="store.loading"
      @toggle="toggleTask"
      @delete="deleteTask"
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'
import { useTaskStore } from '../store/taskStore'

const store = useTaskStore()

onMounted(() => {
  store.fetchTasks()
})

function addTask(task) {
  store.addTask(task)
}

function toggleTask(id) {
  store.toggleTask(id)
}

function deleteTask(id) {
  store.deleteTask(id)
}
</script>
