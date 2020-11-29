<template>
  <div class="todo-list">
    <todo-list-item
      v-for="todo in todos"
      :key="todo.id"
      @change-state="changeState(todo, $event)"
      :todo-item="todo"
    />
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem";
import Axios from "axios"
export default {
  name: "TodoList",
  components: { TodoListItem },
  props: ["todos"],
  methods:{
    changeState(todo, $event){
      Axios
        .post("/api/todo/update", {
          id: todo.id,
          completed: todo.completed,
          token: window.sessionStorage.getItem("token")
        })
      todo.completed = $event.target.checked
    }
  }
};
</script>

<style scoped>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>
