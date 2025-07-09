import { defineStore } from "pinia";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

export const useTaskStore = defineStore("task", {
  state: () => ({
    tasks: [] as any[],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchTasks() {
      this.loading = true;
      this.error = null;
      try {
        const res = await axios.get(`${API_BASE}/tasks`);
        this.tasks = res.data;
      } catch (err) {
        this.error = "Erro ao buscar tarefas." as any;
      } finally {
        this.loading = false;
      }
    },
    async addTask(task: any) {
      try {
        const res = await axios.post(`${API_BASE}/tasks`, task);
        this.tasks.push(res.data);
      } catch {
        this.error = "Erro ao adicionar tarefa." as any;
      }
    },
    async toggleTask(id: any) {
      const task = this.tasks.find((t) => t.id === id);
      if (!task) return;

      try {
        const res = await axios.patch(`${API_BASE}/tasks/${id}`, {
          completed: !task.completed,
        });
        task.completed = res.data.completed;
      } catch {
        this.error = "Erro ao atualizar tarefa." as any;
      }
    },
    async deleteTask(id: any) {
      try {
        await axios.delete(`${API_BASE}/tasks/${id}`);
        this.tasks = this.tasks.filter((t) => t.id !== id);
      } catch {
        this.error = "Erro ao deletar tarefa." as any;
      }
    },
  },
});
