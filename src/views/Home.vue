<script setup lang="ts">
</script>

<template>
  <div class="home">
    <div class="article-container">
      <article class="article-card">
        <h2>Article 1</h2>
        <p>Article 1 content</p>
      </article>
      <article class="article-card">
        <h2>Article 2</h2>
        <p>Article 1 content</p>
      </article>
      <article class="article-card">
        <h2>Article 3</h2>
        <p>Article 1 content</p>
      </article>
      <article class="article-card">
        <h2>Article 4</h2>
        <p>Article 1 content</p>
      </article>
      <article class="article-card">
        <h2>Article 5</h2>
        <p>Article 1 content</p>
      </article>
    </div>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}

.article-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
  box-sizing: border-box;
  padding: 1rem;
}

.article-card {
  flex-grow: 1;
  background-color: #F0F0F0;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  padding: 1rem;
  box-sizing: border-box;
  font-size: 1.2rem;
  transition: background-color 300ms ease;
}

.article-card:hover {
  background-color: #F2A2F2
}
</style>
