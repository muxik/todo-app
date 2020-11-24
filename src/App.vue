<template>

  <main>
    <div class="container">
      <h1>欢迎使用MyTodo待办事项</h1>
      <div class="input-add">
        <input type="text" name="todo" />
        <button>
          <i class="plus"></i>
        </button>
      </div>
      <div class="filters">
        <span class="filter active">全部</span>
        <span class="filter">已完成</span>
        <span class="filter">未完成</span>
      </div>
      <div class="todo-list">
        <div class="todo-item">
          <label>
            <input type="checkbox" />
            Todo 1
          </label>
          <span class="check-button"></span>
        </div>

        <div class="todo-item">
          <label>
            <input type="checkbox" />
            Todo 2
          </label>
          <span class="check-button"></span>
        </div>

        <div class="todo-item">
          <label>
            <input type="checkbox" />
            Todo 3
          </label>
          <span class="check-button"></span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
</style>
