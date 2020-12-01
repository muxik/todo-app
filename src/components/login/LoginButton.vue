<template>
  <button class="btn">登录</button>
</template>

<script>
export default {
  name: "LoginButton"
}
</script>

<style scoped>

.btn {
  position: relative;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  padding: 10px 18px;
  background: #409eff;
  border: none;
  outline: none;
  border-radius: 10%;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: .2s;
  box-shadow: 5px 5px 5px rgba(0,0,0,.15);
}

.btn:hover {
  box-shadow: 4px 4px 2px rgba(0,0,0,.15);
}

.btn:active {
  box-shadow: 0 0 4px rgba(0,0,0,.30);
  background: #3275b8;
}
</style>
