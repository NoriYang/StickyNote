<script setup>
import { userLogout } from '@/network/firebaseMethods.js'
import { RouterLink } from 'vue-router';

function logout() {
  userLogout();
}
</script>

<template>
  <nav class="sticky-top navbar navbar-dark bg-dark header">
    <div class="container-fluid">
      <RouterLink class="navbar-brand"
        to="/">StickyNote</RouterLink>
      <ul class="navbar-ul ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link"
            to="/userInfo">使用者</RouterLink>
        </li>
        <li class="nav-item">
          <a class="nav-link"
            href="#"
            @click.prevent="logout">登出</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.header {
  .navbar-brand {
    font-size: 1.5rem;
    font-family: 'Geologica', sans-serif;
    font-weight: 600;
  }

  .navbar-ul {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
  }

  .nav-item {
    .nav-link {
      padding-top: 10px;
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
      padding-left: 10px;
    }
  }
}
</style>