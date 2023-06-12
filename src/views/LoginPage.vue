<script setup>
import { ref } from 'vue'
import { login } from '@/network/firebaseMethods.js'
import { useRouter } from 'vue-router';
const email = ref('');
const password = ref('');
const $router = useRouter();

async function loginButton() {
  await login(email.value, password.value)
  $router.push('/')
}

</script>

<template>
  <div class="login-main">
    <div class="login-wrapper">
      <div class="login-logo">
        <i class="bi bi-person"></i>
      </div>
      <h2 class="login-title">使用者登入</h2>
      <div class="input-group mb-3">
        <span class="input-group-text"
          id="user-email"><i class="bi bi-person-fill"></i></span>
        <input type="text"
          v-model="email"
          class="form-control"
          placeholder="E-mail"
          aria-label="email"
          aria-describedby="user-email">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text"
          id="password"><i class="bi bi-lock-fill"></i></span>
        <input type="password"
          v-model="password"
          class="form-control"
          placeholder="password"
          aria-label="password"
          aria-describedby="password">
      </div>
      <div class="d-grid login-button">
        <button class="btn btn-primary"
          type="button"
          @click="loginButton">登入</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8EC5FC;
  background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
}

.login-title {
  text-align: center;
  margin-top: 55px;
  margin-bottom: 25px;
}

.login-wrapper {
  position: relative;
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
}

.login-button {

  button {
    background-color: #00087a;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 5px;
  }
}

.login-logo {
  border: 1px solid #000;
  width: 100px;
  height: 100px;
  font-size: 70px;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #00087a;
  color: white;
}
</style>