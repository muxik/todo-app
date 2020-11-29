<template>
  <div class="container">
    <div class="login-box">
    <h1> 用户登录 </h1>
      <login></login>
    </div>
  </div>
</template>

<script>

import Login from "@/components/login/Login";
export default {
  name: "LoginPage",
  components:{
    Login
  }
}
</script>

<style scoped>
.container{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login-box{
  min-width: 380px;
  min-height: 350px;
  box-shadow: 0 0 12px rgba(0,0,0,0.18);
  padding: 20px;
}

.login-box h1 {
  text-align: center;
  font-size: 1.8rem;
}


</style>
