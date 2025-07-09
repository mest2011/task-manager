<template>
  <div>
    <div v-if="loading" class="d-flex justify-content-center my-4">
      <div class="spinner-border text-primary" role="status" aria-label="Carregando">
        <span class="visually-hidden">Carregando...</span>
      </div>
    </div>
    <div v-else>
      <div class="list-group">
        <TaskItem
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @toggle="$emit('toggle', task.id)"
          @delete="$emit('delete', task.id)"
          class="list-group-item list-group-item-action"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import TaskItem from './TaskItem.vue'

defineProps({
  tasks: Array,
  loading: Boolean,
})

defineEmits(['toggle', 'delete'])
</script>
