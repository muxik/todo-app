import {onMounted, ref} from "vue";
import Axios from "axios";

export default function useTodos() {
    const todos = ref([]);
    const addTodo = async (todo) => {
        if (todo.content === '') {
            return alert("输入不能为空");
        }

        let {data: res} = await Axios
            .post("/api/todo/store", {
                user_id: 1,
                description: todo.content,
                completed: todo.completed === true ? 1 : 0,
                token: window.sessionStorage.getItem("token")
            })
        if (res.code === 1) await alert(res.msg)
        // .then(res => {
        //     if (res.data.code === 2) {
        //         this.$router.push("/login")
        //     }
        //     if (res.data.code === 1) {
        //         alert(res.data.msg)
        //     }
        // })
        return todos.value.push(todo)
    }

    const fetchTodos = async () => {
        let {data: res} = await Axios
            .get("/api/todo/read", {
                params: {
                    token: window.sessionStorage.getItem("token"),
                }
            })
        if (res.code === 1) {
            todos.value = res.data.map(todo => ({
                id: todo.id,
                content: todo.description,
                completed: todo.completed,
            }))
        }

        // .then(res => {
        //     if (res.data.code === 2) {
        //         location.href = "/#/login";
        //         return;
        //     }
        //     todos.value = res.data.data.map(todo => ({
        //         id: todo.id,
        //         content: todo.description,
        //         completed: todo.completed,
        //     }))
        // })
    }

    onMounted(() => {
        fetchTodos();
    })

    return {
        todos,
        addTodo
    };
}
