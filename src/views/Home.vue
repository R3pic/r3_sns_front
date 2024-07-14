<script setup lang="ts">
import ArticleList from '../components/ArticleList.vue';
import { ArticleApi } from '../api/articleapi';

const fetchArticles = async (page: number, perPage: number) => {
  return await ArticleApi.getRecentArticles(page, perPage);
};
</script>

<template>
  <div class="home">
    <ArticleList :fetchArticles="fetchArticles"/>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}
</style>
