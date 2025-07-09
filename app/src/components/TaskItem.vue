<template>
  <div class="d-flex justify-content-between align-items-center py-2 border-bottom ">
    <label class="form-check d-flex align-items-center gap-2 m-0"
      :class="{ 'text-muted text-decoration-line-through': task.completed }">
      <input type="checkbox" class="form-check-input" :checked="task.completed" @change="$emit('toggle')" />
      <span>{{ task.title }}</span>
    </label>

    <button type="button" class="btn btn-sm btn-close" @click="confirmDelete">
    </button>
  </div>
</template>

<script setup>
defineProps(['task'])
const emit = defineEmits(['toggle', 'delete'])

function confirmDelete() {
  if (confirm('Deseja realmente excluir esta tarefa?')) {
    emit('delete')
  }
}
</script>
