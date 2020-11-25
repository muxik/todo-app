<template>
  <div class="todo-list">
    <todo-list-item
      v-for="todo in todos"
      :key="todo.id"
      @change-state="todo.completed = $event.target.checked"
      :todo-item="todo"
    />
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem";
export default {
  name: "TodoList",
  components: { TodoListItem },
  props: ["todos"],
};
</script>

<style scoped>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>