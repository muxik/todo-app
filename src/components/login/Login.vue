<template>
  <div class="input">
    <span>帐号：</span>
    <input type="text" name="username" v-model="user.username">
  </div>
  <div class="input">
    <span>密码：</span>
    <input type="password" name="password" v-model="user.password">
  </div>
  <LoginButton @click="login"></LoginButton>

</template>

<script>
import LoginButton from "@/components/login/LoginButton";
import Axios from "axios"

export default {
  name: "Login",
  components: {LoginButton},
  methods: {
    async login(){
      let {data:res} = await Axios.post("/api/user/login",this.user)
      if (res.code === 1) {
        await window.sessionStorage.setItem('token', res.data.token)
        await alert(res.msg)
        await this.$router.push('todo')
      }else {
        await alert(res.msg)
      }

        // .then(res => {
        //   window.sessionStorage.setItem('token', res.data.data.token)
        //   this.$router.push("/todo")
        // })
    }
  },
  data() {
    return {
      name: "Hello",
      user: {
        username: "",
        password: ""
      }
    }
  }
}
</script>

<style scoped>

.input {
  padding: 1.4rem 0;
}

.input span {
  font-size: 20px;
}

.input input {
  border: none;
  outline: none;
  border-bottom: #414873 1px solid;
  transition: .3s;
  width: 290px;
  font-size: 18px;
  height: 30px;
}

.input input:hover {
  width: 300px;
  border-bottom: #2e3561 2px solid;
  box-shadow: 5px 5px 14px rgba(18, 19, 19, 0.2);
}

</style>
