<template>
    <Teleport to="body">
        <div v-if="visible">
            <div class="modal fade show d-block" tabindex="-1" role="dialog" @click.self="cancel">
                <div class="modal-dialog" role="document">
                    <div :class="['modal-content', isDark ? 'bg-dark text-light' : 'bg-white text-dark']">
                        <div class="modal-header">
                            <h5 class="modal-title">Confirmação</h5>
                            <button type="button" :class="['btn-close', isDark ? 'btn-close-white' : 'btn-close-dark']"
                                @click="cancel"></button>
                        </div>
                        <div class="modal-body">
                            <p>{{ message }}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="cancel">
                                Cancelar
                            </button>
                            <button type="button" class="btn btn-danger" @click="confirm">
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade show"></div>
        </div>
    </Teleport>
</template>

<script setup>
import { ref, Teleport } from 'vue'

defineProps({
    message: String,
    visible: Boolean
})

const isDark = ref(localStorage.getItem('theme') === 'dark')

const emit = defineEmits(['confirm', 'cancel'])

function confirm() {
    emit('confirm')
}

function cancel() {
    emit('cancel')
}
</script>
