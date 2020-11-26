<template>
  <todo-page></todo-page>
</template>

<script>

import TodoPage from "@/components/TodoPage";
export default {
  name: "App",
  components :{
    TodoPage
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
