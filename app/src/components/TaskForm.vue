<template>
  <form @submit.prevent="onSubmit" class="row g-4 align-items-center mb-4">
    <div class="col-sm">
      <input
        v-model="title"
        type="text"
        placeholder="Nova tarefa"
        class="form-control"
      />
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-success">
        Adicionar
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('')
const emit = defineEmits(['add'])

function onSubmit() {
  if (title.value.trim()) {
    emit('add', { title: title.value, completed: false })
    title.value = ''
  }
}
</script>
