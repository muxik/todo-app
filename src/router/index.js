import { createRouter, createWebHistory } from "vue-router";
import TodoPage from "../components/TodoPage";

const routerHistory = createWebHistory()

const routes = [
  {
    path: '/',
    component: TodoPage
  }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router

