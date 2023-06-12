<script setup>
import { auth } from '@/network/firebaseConfig'
import {
  updateDisplayName,
} from '@/network/firebaseMethods';
import { onAuthStateChanged } from "firebase/auth";
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const $router = useRouter();
const displayName = ref('');
const email = ref('');
const test = ref(true)

const updateMode = ref(false);
const updateType = ref('')
const updateTitle = ref('');
const updateValue = ref('');

onAuthStateChanged(auth, (user) => {
  displayName.value = user.displayName || '未命名'
  email.value = user.email;
});


function updateDisplayNameHandler() {
  updateTitle.value = '請輸入新的暱稱';
  updateMode.value = true;
  updateType.value = 'displayName';
}

async function update() {
  if (updateType.value === 'displayName') {
    await updateDisplayName(updateValue.value);
  }
  updateMode.value = false;
  $router.go(0)
}

</script>

<template>
  <div class="user-info">
    <div class="user-info-card"
      v-if="test">
      <h2 class="user-info-title">使用者資訊</h2>
      <h4>暱稱：{{ displayName }}</h4>
      <h4>E-Mail：{{ email }}</h4>
      <div class="input-group mt-3"
        v-if="updateMode">
        <input type="text"
          class="form-control"
          :placeholder="updateTitle"
          aria-describedby="button-addon2"
          v-model="updateValue">
        <button class="btn btn-primary"
          type="button"
          id="button-addon"
          @click="update">確認</button>
      </div>
      <div class="bottom-btn">
        <button type="button"
          class="btn btn-danger"
          @click="updateDisplayNameHandler">修改暱稱</button>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-info {
  background-color: #8EC5FC;
  background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
  border: 1px solid green;
  height: calc(100% - 62px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-info-title {
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.user-info-card {
  height: 300px;
  width: 500px;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;

  .bottom-btn {
    text-align: right;
    button {
      text-align: center;
      margin-top: 10px;
      margin-right: 10px;
    }
  }
}
</style>