import { createRouter, createWebHistory } from "vue-router";
import TasksPage from "../pages/TasksPage.vue";
import AboutPage from "../pages/AboutPage.vue";

const routes = [
  { path: "/", redirect: "/tasks" },
  { path: "/tasks", component: TasksPage },
  { path: "/about", component: AboutPage },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
