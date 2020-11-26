import {onMounted, ref} from "vue";
import Axios from "axios";

export default function useTodos() {
    const todos = ref([]);
    const addTodo = (todo) => {
        if (!todo.content === ""){
            return todos.value.push(todo)
        }
        alert("输入不能为空")
    }

    const fetchTodos = async () => {
        Axios
            .get("http://jsonplaceholder.typicode.com/todos?_limit=5")
            .then(res => {
                todos.value = res.data.map(todo => ({
                    id: todo.id,
                    content: todo.title,
                    completed: todo.completed
                }))
            })
    }

    // const afetchTodos = async() =>{
    //   const response = await fetch(
    //     "http://jsonplaceholder.typicode.com/todos?_limit=11"
    //   );
    //
    //   const rawTodos = await response.json();
    //   console.log(rawTodos)
    //   todos.value = rawTodos.map(todo => ({
    //     id: todo.id,
    //     content:todo.title,
    //     completed: todo.completed
    //   }))
    // }

    onMounted(() => {
        fetchTodos();
        // afetchTodos();
    })

    return {
        todos,
        addTodo
    };
}
