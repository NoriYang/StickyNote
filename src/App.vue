<script setup>
import { auth } from '@/network/firebaseConfig'
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'vue-router';
import noteData from '@/stores/noteData.js';
const notesStore = noteData();
const $router = useRouter();
onAuthStateChanged(auth, (user) => {
  if (!user) {
    $router.replace('/login')
  } else {
    notesStore.getNotesHandler();
  }
});
</script>

<template>
  <RouterView />
</template>

<style scoped lang="scss"></style>
