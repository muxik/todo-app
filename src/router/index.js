import {createRouter, createWebHashHistory} from "vue-router"

import TodoPage from "@/views/TodoPage";
import LoginPage from "@/views/LoginPage";
import Axios from "axios";

const routes = [
  { path: "/" , redirect: "/login"},
  { path: "/login", component: LoginPage },
  { path: "/todo", component: TodoPage },
];

// 3. 创建路由实例
const router = createRouter({
  // 4. 采用hash 模式
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === 'login') {
    next();
  }
  if (!window.sessionStorage.getItem('token')){
    Axios.post('/api/user/checkLogin', {token: window.sessionStorage.getItem('token')}).then(data => {
      let {data:res} = data
      if (res.code === 0) {
        next('/login')
      }
    })
  }
  next()
})

export default router
