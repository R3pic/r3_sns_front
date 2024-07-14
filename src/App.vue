<script setup lang="ts">
import { useUserStore } from './stores/user';
import LeftBar from './components/LeftBar.vue';
import Login from './views/Login.vue';
import { onMounted } from 'vue';

const userStore = useUserStore();

onMounted(() => {
  userStore.checkAuth();
});
</script>

<template>
  <main class="app">
    <div v-if="!userStore.isLoggedIn" class="login-container">
      <Login />
    </div>
    <div v-else class="container">
      <LeftBar />
      <div class="content">
        <router-view />
      </div>
    </div>
  </main>
</template>

<style scoped>
.app {
  height: 100vh;
  background-color: #FFEFD8;
}

.login-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  height: 100%;
  flex: 1;
  display: flex;
  align-items: start;
  background-color: white;
}

.content {
  margin-left: 220px;
  margin-right: 40%;
  width: calc(100% - 250px);
  height: 100%;
  background-color: #D6EFD8;
}
</style>
