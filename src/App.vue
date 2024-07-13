<script setup lang="ts">
import LeftBar from './components/LeftBar.vue';
</script>

<template>
  <main class="app">
    <body class="container">
      <LeftBar />
      <div class="content">
        <router-view />
      </div>
    </body>
  </main>
</template>

<style scoped>
.app {
  height: 100vh;
  background-color: #FFEFD8;
}

.container {
  height: 100%;
  display: flex;
  align-items: start;
  background-color: brown;
}

.content {
  margin-left: 220px;
  margin-right: 10%;
  width: calc(100% - 250px);
  height: 100%;
  background-color: #D6EFD8;
}
</style>
