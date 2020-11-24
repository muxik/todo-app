<template>
  <div class="todo-list">
    <TodoListItem v-for="n in 3" :key="n" />
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem";
export default {
  name: "TodoList",
  components: {
    TodoListItem,
  },
};
</script>

<style scoped>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>