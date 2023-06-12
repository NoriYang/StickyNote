<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <div id="HomeView">
    <HeaderComponent />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
#HomeView {
  height: 100vh;
}
</style>