<template>
  <div class="d-flex justify-content-between align-items-center py-2 border-bottom ">
    <label class="form-check d-flex align-items-center gap-2 m-0"
      :class="{ 'text-muted text-decoration-line-through': task.completed }">
      <input type="checkbox" class="form-check-input" :checked="task?.completed" @change="$emit('toggle')" />
      <span>{{ task.title }}</span>
    </label>

    <button type="button" class="btn btn-sm btn-close" @click="showConfirm = true">
    </button>

    <ConfirmModal
      :message="`Deseja realmente excluir a tarefa '${task.title}'?`"
      :visible="showConfirm"
      @confirm="handleDelete"
      @cancel="showConfirm = false"
    />
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import ConfirmModal from './ConfirmModal.vue'

const props = defineProps({
  task: Object,
})

const emit = defineEmits(['toggle', 'delete'])

const showConfirm = ref(false)

function handleDelete() {
  showConfirm.value = false
  emit('delete')
}
</script>
